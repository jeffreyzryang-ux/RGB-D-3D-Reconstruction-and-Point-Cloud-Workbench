import SwiftUI
import ARKit
import AVFoundation
import Combine
import ImageIO
import UniformTypeIdentifiers

@main
struct CameraIntrinsicsApp: App {
    var body: some Scene { WindowGroup { ContentView() } }
}

struct CaptureArchive: Identifiable {
    let id = UUID()
    let url: URL
}

func captureError(_ text: String) -> NSError {
    NSError(domain: "IntrinsicsCamera", code: 1, userInfo: [NSLocalizedDescriptionKey: text])
}

// Packed rows (no CVPixelBuffer padding). iOS uses little-endian Float32.
struct DepthSnapshot {
    let map: CVPixelBuffer
    let confidence: CVPixelBuffer?
    let metadata: [String: Any]
}

func packedPixels(_ buffer: CVPixelBuffer, format: OSType, bytesPerPixel: Int) throws -> Data {
    guard CVPixelBufferGetPixelFormatType(buffer) == format,
          !CVPixelBufferIsPlanar(buffer) else { throw captureError("不支持的深度数据格式。") }
    guard CVPixelBufferLockBaseAddress(buffer, .readOnly) == kCVReturnSuccess else {
        throw captureError("无法读取深度缓冲区。")
    }
    defer { CVPixelBufferUnlockBaseAddress(buffer, .readOnly) }
    guard let base = CVPixelBufferGetBaseAddress(buffer) else { throw captureError("深度缓冲区为空。") }
    let rowSize = CVPixelBufferGetWidth(buffer) * bytesPerPixel
    let stride = CVPixelBufferGetBytesPerRow(buffer)
    guard stride >= rowSize else { throw captureError("无效的深度行宽。") }
    var data = Data(capacity: rowSize * CVPixelBufferGetHeight(buffer))
    for y in 0..<CVPixelBufferGetHeight(buffer) {
        data.append(base.advanced(by: y * stride).assumingMemoryBound(to: UInt8.self), count: rowSize)
    }
    return data
}

// Only the serial writer queue accesses this store. A completed shot is committed
// by renaming its staging directory, so interrupted writes never enter exports.
final class CaptureStore {
    let root: URL
    let context = CIContext()
    init(root: URL? = nil) {
        self.root = root ?? FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
            .appendingPathComponent("CaptureBatches", isDirectory: true)
            .appendingPathComponent("batch_" + UUID().uuidString, isDirectory: true)
    }
    static func clearLocalStorage(in documents: URL) throws {
        let fm = FileManager.default
        // Only delete directories owned by this app's capture/export workflow.
        for name in ["CaptureBatches", "Captures", "Exports"] {
            let url = documents.appendingPathComponent(name)
            if fm.fileExists(atPath: url.path) { try fm.removeItem(at: url) }
        }
        for url in try fm.contentsOfDirectory(at: documents, includingPropertiesForKeys: nil) {
            if url.lastPathComponent.hasPrefix("pending_") {
                try fm.removeItem(at: url)
            }
        }
    }
    func prepare() throws {
        try FileManager.default.createDirectory(at: root, withIntermediateDirectories: true)
        let instructions = """
        Each shot contains image.jpg and calibration.json. The same JSON is embedded
        in JPEG EXIF UserComment. K_rows is row-major; units are pixels.
        JPEG pixels retain ARFrame.capturedImage native sensor orientation, EXIF
        Orientation=1. No rotation, cropping, resizing or extra geometric correction
        is applied by this app. Portrait preview may crop/rotate only for display.
        When LiDAR is supported, depth.f32 contains little-endian float32 meters,
        packed row-major at the width/height in depth.json. confidence.u8 (if present)
        contains uint8 confidence: 0 low, 1 medium, 2 high. Nonfinite or <=0 depth is
        invalid. Depth describes Z from the camera plane; K_depth_rows is scaled to
        the depth grid. No depth is fabricated on unsupported devices.
        These are ARKit stream frames, not full-resolution system Camera photos.
        Distortion is NOT measured: null does not mean zero distortion.
        Use the K belonging to each individual image. Other software may not read
        the custom EXIF field automatically; use calibration.json for integration.
        """
        try instructions.write(to: root.appendingPathComponent("README.txt"), atomically: true, encoding: .utf8)
    }
    func count() throws -> Int {
        try FileManager.default.contentsOfDirectory(at: root, includingPropertiesForKeys: nil)
            .filter { (Int($0.lastPathComponent).map { $0 > 0 } ?? false) && FileManager.default.fileExists(atPath: $0.appendingPathComponent("calibration.json").path) }.count
    }
    func save(buffer: CVPixelBuffer, metadata: [String: Any], name: String, depth: DepthSnapshot? = nil) throws {
        let fm = FileManager.default
        let staging = root.deletingLastPathComponent().appendingPathComponent("pending_" + UUID().uuidString)
        try fm.createDirectory(at: staging, withIntermediateDirectories: true)
        defer { try? fm.removeItem(at: staging) }
        let json = try JSONSerialization.data(withJSONObject: metadata, options: [.sortedKeys])
        let comment = String(decoding: json, as: UTF8.self)
        let image = CIImage(cvPixelBuffer: buffer)
        guard let cg = context.createCGImage(image, from: image.extent),
              cg.width == metadata["image_width"] as? Int,
              cg.height == metadata["image_height"] as? Int else {
            throw captureError("图像尺寸与内参不匹配，未保存。")
        }
        let url = staging.appendingPathComponent("image.jpg")
        guard let destination = CGImageDestinationCreateWithURL(url as CFURL, UTType.jpeg.identifier as CFString, 1, nil) else {
            throw captureError("无法创建 JPEG 文件。")
        }
        let properties: [CFString: Any] = [
            kCGImageDestinationLossyCompressionQuality: 0.98,
            kCGImagePropertyOrientation: 1,
            kCGImagePropertyExifDictionary: [kCGImagePropertyExifUserComment: comment]
        ]
        CGImageDestinationAddImage(destination, cg, properties as CFDictionary)
        guard CGImageDestinationFinalize(destination) else { throw captureError("JPEG 保存失败。") }
        // Verify the actual saved JPEG, not just the in-memory metadata.
        guard let source = CGImageSourceCreateWithURL(url as CFURL, nil),
              let saved = CGImageSourceCopyPropertiesAtIndex(source, 0, nil) as? [String: Any],
              let exif = saved[kCGImagePropertyExifDictionary as String] as? [String: Any],
              exif[kCGImagePropertyExifUserComment as String] as? String == comment,
              saved[kCGImagePropertyPixelWidth as String] as? Int == cg.width,
              saved[kCGImagePropertyPixelHeight as String] as? Int == cg.height else {
            throw captureError("图片元数据校验失败，未计入已保存照片。")
        }
        if let depth = depth {
            let width = CVPixelBufferGetWidth(depth.map)
            let height = CVPixelBufferGetHeight(depth.map)
            guard depth.metadata["width"] as? Int == width,
                  depth.metadata["height"] as? Int == height else { throw captureError("深度尺寸不匹配。") }
            let values = try packedPixels(depth.map, format: kCVPixelFormatType_DepthFloat32, bytesPerPixel: 4)
            try values.write(to: staging.appendingPathComponent("depth.f32"), options: .atomic)
            if let confidence = depth.confidence {
                guard CVPixelBufferGetWidth(confidence) == width,
                      CVPixelBufferGetHeight(confidence) == height else { throw captureError("置信度尺寸不匹配。") }
                try packedPixels(confidence, format: kCVPixelFormatType_OneComponent8, bytesPerPixel: 1)
                    .write(to: staging.appendingPathComponent("confidence.u8"), options: .atomic)
            }
            try JSONSerialization.data(withJSONObject: depth.metadata, options: [.sortedKeys, .prettyPrinted])
                .write(to: staging.appendingPathComponent("depth.json"), options: .atomic)
        }
        try json.write(to: staging.appendingPathComponent("calibration.json"), options: .atomic)
        try fm.moveItem(at: staging, to: root.appendingPathComponent(name))
    }
    func delete(name: String) throws {
        guard let number = Int(name), number > 0, String(number) == name else {
            throw captureError("无效的照片编号。")
        }
        // Delete the complete pair together; never leave a loose calibration file.
        try FileManager.default.removeItem(at: root.appendingPathComponent(name))
    }
    func archive(orderedNames: [String]? = nil) throws -> URL {
        let fm = FileManager.default
        let names = try orderedNames ?? fm.contentsOfDirectory(at: root, includingPropertiesForKeys: nil)
            .map { $0.lastPathComponent }.filter { Int($0) != nil }
            .sorted { Int($0)! < Int($1)! }
        guard names.count == (try count()), Set(names).count == names.count,
              names.allSatisfy({ Int($0).map { $0 > 0 } ?? false }) else {
            throw captureError("照片排序与当前批次不一致，请重试。")
        }
        let staging = fm.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        let package = staging.appendingPathComponent("Captures")
        try fm.createDirectory(at: package, withIntermediateDirectories: true)
        defer { try? fm.removeItem(at: staging) }
        try fm.copyItem(at: root.appendingPathComponent("README.txt"), to: package.appendingPathComponent("README.txt"))
        var manifest: [[String: Any]] = []
        for (index, name) in names.enumerated() {
            // Copy the entire pair without recompressing images or changing calibration.
            try fm.copyItem(at: root.appendingPathComponent(name),
                            to: package.appendingPathComponent(String(index + 1)))
            manifest.append(["folder": String(index + 1), "original_capture_id": name])
        }
        try JSONSerialization.data(withJSONObject: manifest, options: [.prettyPrinted, .sortedKeys])
            .write(to: package.appendingPathComponent("order.json"), options: .atomic)

        let exports = root.deletingLastPathComponent().appendingPathComponent("Exports")
        try FileManager.default.createDirectory(at: exports, withIntermediateDirectories: true)
        let target = exports.appendingPathComponent("CameraCaptures-\(UUID().uuidString).zip")
        var coordinationError: NSError?
        var copyError: Error?
        NSFileCoordinator().coordinate(readingItemAt: package, options: .forUploading, error: &coordinationError) { zipped in
            do { try FileManager.default.copyItem(at: zipped, to: target) }
            catch { copyError = error }
        }
        if let error = coordinationError { throw error }
        if let error = copyError { throw error }
        guard FileManager.default.fileExists(atPath: target.path) else { throw captureError("打包失败。") }
        return target
    }
}

struct SavedPhoto: Identifiable {
    let id: String
    let url: URL
}

final class CameraReader: NSObject, ObservableObject, ARSessionDelegate {
    @Published var status = "正在准备相机…"
    @Published var depthStatus = "正在检测 LiDAR…"
    private var depthEnabled = false
    @Published var resolution = "等待图像"
    @Published var count = 0
    @Published var photos: [SavedPhoto] = []
    @Published var ready = false
    @Published var busy = false
    @Published var automatic = false
    @Published var archive: CaptureArchive?
    let session = ARSession()
    private let writer = DispatchQueue(label: "camera.capture.writer", qos: .userInitiated)
    private var store = CaptureStore()
    private var initialized = false
    private var running = false
    private var startedAt: TimeInterval = 0
    private var token = UUID()
    private var timer: Timer?
    private var nextCaptureNumber = 1
    private var lastSavedTimestamp: TimeInterval = -1

    override init() {
        super.init()
        session.delegate = self
        session.delegateQueue = .main
        writer.async {
            do {
                try self.store.prepare()
                let n = try self.store.count()
                DispatchQueue.main.async { self.count = n; self.initialized = true }
            } catch {
                DispatchQueue.main.async { self.status = "存储准备失败：\(error.localizedDescription)" }
            }
        }
    }
    // Reset is serialized with disk writes; no previous shot can enter the new batch.
    func resetBatch(clearLocalStorage: Bool = false) {
        guard !busy else { return }
        stop()
        busy = true
        initialized = false
        count = 0
        photos = []
        nextCaptureNumber = 1
        archive = nil
        lastSavedTimestamp = -1
        status = clearLocalStorage ? "正在清理本地照片和 ZIP…" : "正在开始新一批拍摄…"
        writer.async {
            self.store = CaptureStore()
            do {
                if clearLocalStorage {
                    let documents = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
                    try CaptureStore.clearLocalStorage(in: documents)
                }
                try self.store.prepare()
                DispatchQueue.main.async {
                    self.initialized = true
                    self.busy = false
                    self.start()
                }
            } catch {
                DispatchQueue.main.async {
                    self.busy = false
                    self.status = "操作未完成：\(error.localizedDescription)，请重试。"
                }
            }
        }
    }
    func start() {
        guard !running else { return }
        guard ARWorldTrackingConfiguration.isSupported else {
            status = "请在支持 ARKit 的真实 iPhone 上运行。"; return
        }
        let request = UUID()
        token = request
        status = "等待相机权限…"
        AVCaptureDevice.requestAccess(for: .video) { [weak self] granted in
            DispatchQueue.main.async {
                guard let self = self, self.token == request else { return }
                guard granted else { self.status = "请在系统设置中允许相机权限。"; return }
                let configuration = ARWorldTrackingConfiguration()
                configuration.isAutoFocusEnabled = true
                self.depthEnabled = ARWorldTrackingConfiguration.supportsFrameSemantics(.sceneDepth)
                if self.depthEnabled { configuration.frameSemantics.insert(.sceneDepth) }
                self.depthStatus = self.depthEnabled ? "LiDAR：等待深度帧" : "此设备不支持 LiDAR 深度，仅保存彩色照片"
                self.ready = false
                self.startedAt = ProcessInfo.processInfo.systemUptime
                self.running = true
                self.status = "相机预热中，请保持稳定…"
                self.session.run(configuration)
            }
        }
    }
    func stopAuto() {
        timer?.invalidate(); timer = nil; automatic = false
    }
    func stop() {
        stopAuto()
        token = UUID(); ready = false; running = false
        session.pause()
    }
    func toggleAuto() {
        if automatic { stopAuto(); return }
        guard ready, !busy else { return }
        automatic = true
        shoot()
        timer = Timer.scheduledTimer(withTimeInterval: 2, repeats: true) { [weak self] _ in self?.shoot() }
    }
    func session(_ session: ARSession, didUpdate frame: ARFrame) {
        guard running else { return }
        let size = frame.camera.imageResolution
        let label = "\(Int(size.width)) × \(Int(size.height))"
        if resolution != label { resolution = label }
        if depthEnabled {
            let label = frame.sceneDepth.map { "LiDAR 深度：\(CVPixelBufferGetWidth($0.depthMap)) × \(CVPixelBufferGetHeight($0.depthMap))" } ?? "LiDAR：等待深度帧"
            if depthStatus != label { depthStatus = label }
        }
        if !ready && initialized && ProcessInfo.processInfo.systemUptime - startedAt >= 2 {
            ready = true
            status = "可以拍摄；每张照片保存对应的同帧内参。"
        }
    }
    func shoot() {
        guard ready, !busy, let frame = session.currentFrame else { return }
        guard ProcessInfo.processInfo.systemUptime - frame.timestamp < 0.5,
              frame.timestamp != lastSavedTimestamp else {
            status = "等待新的相机帧…"; return
        }
        let buffer = frame.capturedImage
        let k = frame.camera.intrinsics
        let width = CVPixelBufferGetWidth(buffer)
        let height = CVPixelBufferGetHeight(buffer)
        guard width == Int(frame.camera.imageResolution.width), height == Int(frame.camera.imageResolution.height) else {
            status = "图像与内参尺寸不匹配，未拍摄。"; return
        }
        var depth: DepthSnapshot?
        if depthEnabled {
            guard let sample = frame.sceneDepth else {
                status = "当前帧没有 LiDAR 深度，请稍后再拍。"; return
            }
            let dw = CVPixelBufferGetWidth(sample.depthMap)
            let dh = CVPixelBufferGetHeight(sample.depthMap)
            let sx = Double(dw) / Double(width)
            let sy = Double(dh) / Double(height)
            let depthMetadata: [String: Any] = [
                "source": "ARKit.ARFrame.sceneDepth", "units": "meters",
                "file": "depth.f32", "dtype": "float32", "byte_order": "little",
                "layout": "row-major tightly packed", "width": dw, "height": dh,
                "measurement": "distance from camera plane (Z)",
                "invalid_values": "nonfinite or <= 0",
                "frame_timestamp_seconds": frame.timestamp,
                "rgb_width": width, "rgb_height": height,
                "coordinate_space": "native sensor orientation; aligned to capturedImage at lower resolution",
                "K_depth_rows": (0..<3).map { row in (0..<3).map { col in Double(k[col][row]) * (row == 0 ? sx : row == 1 ? sy : 1.0) } },
                "confidence_file": sample.confidenceMap == nil ? NSNull() : "confidence.u8" as Any,
                "confidence_dtype": "uint8", "confidence_levels": ["0": "low", "1": "medium", "2": "high"],
                "temporally_smoothed": false
            ]
            depth = DepthSnapshot(map: sample.depthMap, confidence: sample.confidenceMap, metadata: depthMetadata)
        }
        let name = String(nextCaptureNumber)
        let payload: [String: Any] = [
            "schema_version": 2, "capture_id": name, "image_file": "image.jpg",
            "source": "ARKit.ARFrame", "units": "pixels",
            "coordinate_space": "capturedImage native sensor orientation; no pixel rotation or crop",
            "exif_orientation": 1, "image_width": width, "image_height": height,
            "fx": Double(k.columns.0.x), "fy": Double(k.columns.1.y),
            "cx": Double(k.columns.2.x), "cy": Double(k.columns.2.y),
            "K_rows": (0..<3).map { row in (0..<3).map { col in Double(k[col][row]) } },
            "frame_timestamp_seconds": frame.timestamp,
            "export_requested_at": ISO8601DateFormatter().string(from: Date()),
            "autofocus_enabled": true,
            "depth_available": depth != nil,
            "depth_metadata_file": depth == nil ? NSNull() : "depth.json" as Any,
            "depth_unavailable_reason": depth == nil ? "sceneDepth unsupported on this device/configuration" as Any : NSNull(),
            "distortion_coefficients": NSNull(),
            "note": "Distortion not measured. Use K with these stored pixels, not the portrait preview."
        ]
        busy = true
        lastSavedTimestamp = frame.timestamp
        status = "正在保存照片和内参…"
        // Keep the pixel buffer, not the whole ARFrame; at most one write is in flight.
        let task = UIApplication.shared.beginBackgroundTask(withName: "Save photo", expirationHandler: nil)
        writer.async {
            var failure: Error?
            do { try self.store.save(buffer: buffer, metadata: payload, name: name, depth: depth) }
            catch { failure = error }
            let savedURL = self.store.root.appendingPathComponent(name).appendingPathComponent("image.jpg")
            DispatchQueue.main.async {
                self.busy = false
                if let error = failure {
                    self.stopAuto()
                    self.status = "保存失败：\(error.localizedDescription)"
                } else {
                    self.nextCaptureNumber += 1
                    self.count += 1
                    self.photos.append(SavedPhoto(id: name, url: savedURL))
                    self.archive = nil
                    self.status = "已保存 \(self.count) 张，图像与内参已校验。"
                }
                if task != .invalid { UIApplication.shared.endBackgroundTask(task) }
            }
        }
    }
    func deletePhotos(at offsets: IndexSet) {
        guard !busy else { return }
        let ids = offsets.compactMap { photos.indices.contains($0) ? photos[$0].id : nil }
        guard !ids.isEmpty else { return }
        stopAuto()
        busy = true
        archive = nil
        status = "正在删除照片和配套内参…"
        writer.async {
            var deleted = Set<String>()
            var failure: Error?
            for id in ids {
                do { try self.store.delete(name: id); deleted.insert(id) }
                catch { failure = error; break }
            }
            DispatchQueue.main.async {
                self.photos.removeAll { deleted.contains($0.id) }
                self.count = self.photos.count
                self.busy = false
                if let error = failure {
                    self.status = "删除失败：\(error.localizedDescription)"
                } else {
                    self.status = "已删除 \(deleted.count) 张，本批剩余 \(self.count) 张。"
                }
            }
        }
    }
    func movePhotos(from offsets: IndexSet, to destination: Int) {
        guard !busy else { return }
        photos.move(fromOffsets: offsets, toOffset: destination)
        archive = nil
    }
    func export() {
        guard !busy, count > 0 else { return }
        stopAuto(); busy = true; status = "正在打包当前批次照片…"
        let task = UIApplication.shared.beginBackgroundTask(withName: "Export photos", expirationHandler: nil)
        let order = photos.map { $0.id }
        writer.async {
            let result = Result { try self.store.archive(orderedNames: order) }
            DispatchQueue.main.async {
                self.busy = false
                switch result {
                case .success(let url):
                    self.archive = CaptureArchive(url: url)
                    self.status = "ZIP 已生成，可 AirDrop 或存储到文件。"
                case .failure(let error): self.status = "打包失败：\(error.localizedDescription)"
                }
                if task != .invalid { UIApplication.shared.endBackgroundTask(task) }
            }
        }
    }
    func session(_ session: ARSession, didFailWithError error: Error) {
        stop(); status = "相机错误：\(error.localizedDescription)。请点击重置相机。"
    }
    func sessionWasInterrupted(_ session: ARSession) {
        stop(); status = "相机已中断，请点击重置相机。"
    }
}

struct CameraPreview: UIViewRepresentable {
    let session: ARSession
    func makeUIView(context: Context) -> ARSCNView {
        let view = ARSCNView(frame: .zero)
        view.session = session
        view.scene = SCNScene()
        return view
    }
    func updateUIView(_ view: ARSCNView, context: Context) {}
}

struct ArchiveShare: UIViewControllerRepresentable {
    let url: URL
    func makeUIViewController(context: Context) -> UIActivityViewController {
        UIActivityViewController(activityItems: [url], applicationActivities: nil)
    }
    func updateUIViewController(_ controller: UIActivityViewController, context: Context) {}
}

struct ContentView: View {
    @StateObject private var camera = CameraReader()
    @Environment(\.scenePhase) private var scenePhase
    @State private var showGallery = false
    @State private var confirmCleanup = false
    var body: some View {
        VStack(spacing: 12) {
            HStack {
                Text("内参相机").font(.title2.bold())
                Spacer()
                Text("本批 \(camera.count) 张")
            }
            CameraPreview(session: camera.session)
                .clipShape(RoundedRectangle(cornerRadius: 16))
                .overlay(alignment: .topLeading) {
                    Text(camera.resolution).font(.caption.monospacedDigit())
                        .padding(8).background(.black.opacity(0.6)).foregroundStyle(.white)
                        .clipShape(Capsule()).padding(10)
                }
            Text(camera.depthStatus).font(.caption).foregroundStyle(.secondary)
            Text(camera.status).font(.footnote).frame(maxWidth: .infinity, alignment: .leading)
            HStack(spacing: 20) {
                Button(camera.automatic ? "停止连拍" : "每 2 秒连拍") { camera.toggleAuto() }
                    .disabled(!camera.automatic && (!camera.ready || camera.busy))
                Button { camera.shoot() } label: {
                    Image(systemName: "camera.fill").font(.title).padding(16)
                }
                .buttonStyle(.borderedProminent)
                .disabled(!camera.ready || camera.busy || camera.automatic)
                Button("打包分享") { camera.export() }
                    .disabled(camera.count == 0 || camera.busy)
            }
            Button("已拍照片 · 预览与排序（\(camera.count)）") {
                camera.stopAuto()
                showGallery = true
            }
            .disabled(camera.count == 0 || camera.busy)
            Button("重置相机 · 开始新一批") { camera.resetBatch() }
                .disabled(camera.busy)
            Button("清理全部本地照片与 ZIP", role: .destructive) {
                camera.stopAuto()
                confirmCleanup = true
            }
            .disabled(camera.busy)
            Text("保存原始方向 JPEG + 内嵌内参 + JSON。预览可能裁剪，照片保留完整画面。")
                .font(.caption2).foregroundStyle(.secondary)
        }
        .padding()
        .onAppear { camera.start() }
        .onChange(of: scenePhase) { phase in
            if phase == .active { camera.start() } else { camera.stop() }
        }
        .alert("清理全部本地存储？", isPresented: $confirmCleanup) {
            Button("取消", role: .cancel) {}
            Button("删除全部", role: .destructive) { camera.resetBatch(clearLocalStorage: true) }
        } message: {
            Text("将永久删除本 App 内当前及历史批次的照片、配套内参和已生成 ZIP，无法撤销。请先导出需要保留的照片。已发送到电脑或另存到其他位置的文件不受影响。")
        }
        .sheet(isPresented: $showGallery) { PhotoGallery(camera: camera) }
        .sheet(item: $camera.archive) { item in ArchiveShare(url: item.url) }
    }
}


// Decode downsampled thumbnails instead of retaining full-resolution photos in the list.
struct SavedPhotoImage: View {
    let url: URL
    var maxSize = 360
    @State private var image: UIImage?
    var body: some View {
        Group {
            if let image = image {
                Image(uiImage: image).resizable().scaledToFit()
            } else {
                Image(systemName: "photo").foregroundStyle(.secondary)
            }
        }
        .task(id: url) {
            guard let source = CGImageSourceCreateWithURL(url as CFURL, nil),
                  let cg = CGImageSourceCreateThumbnailAtIndex(source, 0, [
                    kCGImageSourceCreateThumbnailFromImageAlways: true,
                    kCGImageSourceThumbnailMaxPixelSize: maxSize,
                    kCGImageSourceCreateThumbnailWithTransform: true
                  ] as CFDictionary) else { return }
            image = UIImage(cgImage: cg)
        }
    }
}

struct PhotoGallery: View {
    @ObservedObject var camera: CameraReader
    @Environment(\.dismiss) private var dismiss
    @State private var selected: SavedPhoto?
    var body: some View {
        NavigationStack {
            List {
                Section {
                    ForEach(camera.photos) { photo in
                        Button { selected = photo } label: {
                            HStack(spacing: 14) {
                                SavedPhotoImage(url: photo.url)
                                    .frame(width: 110, height: 84)
                                VStack(alignment: .leading, spacing: 6) {
                                    Text("第 \((camera.photos.firstIndex(where: { $0.id == photo.id }) ?? 0) + 1) 张")
                                        .font(.headline)
                                    Text("原拍摄编号 \(photo.id) · 点击放大")
                                        .font(.caption).foregroundStyle(.secondary)
                                }
                            }
                            .contentShape(Rectangle())
                        }
                        .buttonStyle(.plain)
                    }
                    .onMove(perform: camera.movePhotos)
                    .onDelete(perform: camera.deletePhotos)
                } header: {
                    Text("点击左侧减号删除；按住右侧 ≡ 排序；点击照片预览")
                } footer: {
                    Text("完成后回到相机打包，文件夹按此顺序编号。内参与照片始终配套；原拍摄编号保留在元数据中。")
                }
            }
            .disabled(camera.busy)
            .safeAreaInset(edge: .bottom) {
                Text(camera.status).font(.footnote).padding().frame(maxWidth: .infinity).background(.regularMaterial)
            }
            .environment(\.editMode, .constant(.active))
            .navigationTitle("已拍照片")
            .toolbar { ToolbarItem(placement: .confirmationAction) { Button("完成") { dismiss() } } }
            .sheet(item: $selected) { photo in
                NavigationStack {
                    SavedPhotoImage(url: photo.url, maxSize: 2400)
                        .frame(maxWidth: .infinity, maxHeight: .infinity)
                        .background(Color.black)
                        .navigationTitle("原拍摄编号 \(photo.id)")
                        .navigationBarTitleDisplayMode(.inline)
                        .toolbar { ToolbarItem(placement: .confirmationAction) { Button("关闭") { selected = nil } } }
                }
            }
        }
    }
}
