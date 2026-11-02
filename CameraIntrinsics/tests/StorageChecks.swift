let root = URL(fileURLWithPath: "/tmp/capture-store-test-" + UUID().uuidString).appendingPathComponent("Captures")
let store = CaptureStore(root: root)
try store.prepare()
var pixelBuffer: CVPixelBuffer?
precondition(CVPixelBufferCreate(nil, 64, 48, kCVPixelFormatType_32BGRA, [kCVPixelBufferCGImageCompatibilityKey: true, kCVPixelBufferCGBitmapContextCompatibilityKey: true] as CFDictionary, &pixelBuffer) == kCVReturnSuccess)
let buffer = pixelBuffer!
CVPixelBufferLockBaseAddress(buffer, [])
let bytes = CVPixelBufferGetBaseAddress(buffer)!.assumingMemoryBound(to: UInt8.self)
let stride = CVPixelBufferGetBytesPerRow(buffer)
for y in 0..<48 { for x in 0..<64 {
    let offset = y * stride + x * 4
    bytes[offset] = 0
    bytes[offset + 1] = y < 24 ? 0 : 255
    bytes[offset + 2] = y < 24 ? 255 : 0
    bytes[offset + 3] = 255
} }
CVPixelBufferUnlockBaseAddress(buffer, [])
let metadata: [String: Any] = ["image_width": 64, "image_height": 48, "fx": 45.5, "fy": 46.5, "cx": 32.25, "cy": 23.75, "distortion_coefficients": NSNull()]
try store.save(buffer: buffer, metadata: metadata, name: "1")
let savedCount = try store.count()
precondition(savedCount == 1)
let sidecar = try Data(contentsOf: root.appendingPathComponent("1/calibration.json"))
let source = CGImageSourceCreateWithURL(root.appendingPathComponent("1/image.jpg") as CFURL, nil)!
let props = CGImageSourceCopyPropertiesAtIndex(source, 0, nil)! as NSDictionary
let exif = props[kCGImagePropertyExifDictionary] as! NSDictionary
precondition(exif[kCGImagePropertyExifUserComment] as! String == String(decoding: sidecar, as: UTF8.self))
// Check that the top and bottom colors were not vertically flipped during conversion.
let decoded = CGImageSourceCreateImageAtIndex(source, 0, nil)!
let output = UnsafeMutablePointer<UInt8>.allocate(capacity: 64 * 48 * 4)
defer { output.deallocate() }
let ctx = CGContext(data: output, width: 64, height: 48, bitsPerComponent: 8, bytesPerRow: 64 * 4, space: CGColorSpaceCreateDeviceRGB(), bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue)!
ctx.draw(decoded, in: CGRect(x: 0, y: 0, width: 64, height: 48))
precondition(output[0] > 200 && output[1] < 30)
precondition(output[47 * 64 * 4] < 30 && output[47 * 64 * 4 + 1] > 200)
var invalid = metadata
invalid["image_width"] = 65
do { try store.save(buffer: buffer, metadata: invalid, name: "999"); fatalError("Invalid dimensions accepted") } catch {}
precondition(!FileManager.default.fileExists(atPath: root.appendingPathComponent("999").path))
var secondMetadata = metadata
secondMetadata["fx"] = 99.0
try store.save(buffer: buffer, metadata: secondMetadata, name: "2")
let zip = try store.archive()
print("PASS: JPEG metadata round trip, JSON match, pixel orientation, dimensions, failed-shot exclusion")
print("ZIP=" + zip.path)

// A fresh batch must have no old shots, including after a second capture.
let next = CaptureStore(root: root.deletingLastPathComponent().appendingPathComponent("NextBatch"))
try next.prepare()
let freshCount = try next.count()
precondition(freshCount == 0)
try next.save(buffer: buffer, metadata: metadata, name: "1")
let nextCount = try next.count()
let oldCount = try store.count()
precondition(nextCount == 1 && oldCount == 2)
let nextZip = try next.archive()
print("NEXT_ZIP=" + nextZip.path)

let sortedZip = try store.archive(orderedNames: ["2", "1"])
print("SORTED_ZIP=" + sortedZip.path)
do { _ = try store.archive(orderedNames: ["1", "1"]); fatalError("Duplicate order accepted") } catch {}
try store.delete(name: "1")
precondition(!FileManager.default.fileExists(atPath: root.appendingPathComponent("1").path))
// Append after deletion using a fresh capture ID; do not reuse count+1.
try store.save(buffer: buffer, metadata: metadata, name: "3")
let deletedZip = try store.archive(orderedNames: ["2", "3"])
print("DELETED_ZIP=" + deletedZip.path)
try store.delete(name: "2")
try store.delete(name: "3")
let emptyCount = try store.count()
precondition(emptyCount == 0)
do { try store.delete(name: "../Exports"); fatalError("Invalid delete accepted") } catch {}

// Exercise cleanup exclusively inside a temporary fake Documents directory.
let documents = root.deletingLastPathComponent().appendingPathComponent("CleanupFixture")
let fm = FileManager.default
try fm.createDirectory(at: documents, withIntermediateDirectories: true)
for name in ["CaptureBatches/batch_old/1", "Captures/1", "Exports", "pending_test"] {
    let directory = documents.appendingPathComponent(name)
    try fm.createDirectory(at: directory, withIntermediateDirectories: true)
    try Data("fixture".utf8).write(to: directory.appendingPathComponent("payload"))
}
let unrelated = documents.appendingPathComponent("keep.txt")
try Data("keep".utf8).write(to: unrelated)
try CaptureStore.clearLocalStorage(in: documents)
let remaining = try fm.contentsOfDirectory(atPath: documents.path)
precondition(remaining == ["keep.txt"])
try CaptureStore.clearLocalStorage(in: documents)
let afterCleanup = CaptureStore(root: documents.appendingPathComponent("CaptureBatches/batch_new"))
try afterCleanup.prepare()
try afterCleanup.save(buffer: buffer, metadata: metadata, name: "1")
let afterCount = try afterCleanup.count()
precondition(afterCount == 1)
print("PASS: cleanup current/history/legacy/ZIP/pending storage, preserve unrelated files, repeat cleanup, capture afterwards")

var depthBuffer: CVPixelBuffer?
var confidenceBuffer: CVPixelBuffer?
precondition(CVPixelBufferCreate(nil, 3, 2, kCVPixelFormatType_DepthFloat32, nil, &depthBuffer) == kCVReturnSuccess)
precondition(CVPixelBufferCreate(nil, 3, 2, kCVPixelFormatType_OneComponent8, nil, &confidenceBuffer) == kCVReturnSuccess)
let db = depthBuffer!
let cb = confidenceBuffer!
CVPixelBufferLockBaseAddress(db, [])
CVPixelBufferLockBaseAddress(cb, [])
for y in 0..<2 {
    let drow = CVPixelBufferGetBaseAddress(db)!.advanced(by: y * CVPixelBufferGetBytesPerRow(db)).assumingMemoryBound(to: Float.self)
    let crow = CVPixelBufferGetBaseAddress(cb)!.advanced(by: y * CVPixelBufferGetBytesPerRow(cb)).assumingMemoryBound(to: UInt8.self)
    for x in 0..<3 { drow[x] = Float(y * 3 + x) + 0.5; crow[x] = UInt8(x) }
}
CVPixelBufferUnlockBaseAddress(db, [])
CVPixelBufferUnlockBaseAddress(cb, [])
let depthStore = CaptureStore(root: root.deletingLastPathComponent().appendingPathComponent("DepthFixture"))
try depthStore.prepare()
let dm: [String: Any] = ["width": 3, "height": 2, "units": "meters"]
try depthStore.save(buffer: buffer, metadata: metadata, name: "1", depth: DepthSnapshot(map: db, confidence: cb, metadata: dm))
let depthBytes = try Data(contentsOf: depthStore.root.appendingPathComponent("1/depth.f32"))
let expected: [Float] = [0.5, 1.5, 2.5, 3.5, 4.5, 5.5]
precondition(depthBytes == expected.withUnsafeBytes { Data($0) })
let confidenceBytes = try Data(contentsOf: depthStore.root.appendingPathComponent("1/confidence.u8"))
precondition(confidenceBytes == Data([0, 1, 2, 0, 1, 2]))
let depthZip = try depthStore.archive(orderedNames: ["1"])
print("DEPTH_ZIP=" + depthZip.path)
try depthStore.delete(name: "1")
precondition(!fm.fileExists(atPath: depthStore.root.appendingPathComponent("1").path))
print("PASS: float depth preserves units/values/row order, padding removed, confidence map, depth deleted with photo")
