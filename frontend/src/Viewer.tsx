import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { PLYLoader } from "three/addons/loaders/PLYLoader.js";

// Camera positions and world-to-camera rotations exported by reconstruction.
type CameraData = { photo: string; center_m: number[]; Rcw: number[][] };

export default function Viewer({
  url,
  previewUrl,
  removedUrl,
  cameraUrl,
}: {
  url: string;
  previewUrl: string;
  removedUrl?: string;
  cameraUrl: string;
}) {
  // Mutable Three.js handles and UI controls.
  const host = useRef<HTMLDivElement>(null);
  const reset = useRef(() => {});
  const material = useRef<THREE.PointsMaterial | null>(null);
  const cameraGroup = useRef<THREE.Group | null>(null);
  const measuring = useRef(false);
  const clear = useRef(() => {});
  const [status, setStatus] = useState("Loading point cloud…");
  const [size, setSize] = useState(2);
  const [showCameras, setShowCameras] = useState(false);
  const [measure, setMeasure] = useState(false);
  const [distance, setDistance] = useState<number | null>(null);

  const [highlight, setHighlight] = useState(false);
  const [overlayStatus, setOverlayStatus] = useState("");
  const sceneRef = useRef<THREE.Scene | null>(null);
  const viewpoint = useRef<{ model: string; position: THREE.Vector3; up: THREE.Vector3;
    target: THREE.Vector3; near: number; far: number; radius: number } | null>(null);

  // Synchronize React controls with the active Three.js scene.
  useEffect(() => {
    measuring.current = measure;
  }, [measure]);
  useEffect(() => {
    if (material.current) material.current.size = size;
  }, [size]);
  useEffect(() => {
    if (cameraGroup.current) cameraGroup.current.visible = showCameras;
  }, [showCameras]);
  useEffect(() => {
    // Create the scene for the selected cloud and dispose it on change.
    if (!host.current) return;
    const el = host.current;
    let disposed = false;
    let frame = 0;
    setDistance(null);
    setStatus("Loading point cloud…");
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
    } catch {
      setStatus(
        "WebGL could not start. Download the PLY to view it in a desktop app.",
      );
      return;
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setClearColor("#151b24");
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(48, 1, 0.001, 1000);
    camera.up.set(0, -1, 0);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    let cloud: THREE.Points | null = null;
    const previous = viewpoint.current;
    const keepView = previous?.model === cameraUrl;
    let radius = keepView ? previous.radius : 1;
    if (keepView) {
      camera.position.copy(previous.position);
      camera.up.copy(previous.up);
      camera.near = previous.near;
      camera.far = previous.far;
      controls.target.copy(previous.target);
      camera.updateProjectionMatrix();
      controls.update();
    }
    let reference: CameraData | null = null;
    const marks = new THREE.Group();
    scene.add(marks);
    const cameras = new THREE.Group();
    scene.add(cameras);
    cameraGroup.current = cameras;
    cameras.visible = showCameras;
    const picked: THREE.Vector3[] = [];
    const geometries: THREE.BufferGeometry[] = [];
    const mats: THREE.Material[] = [];

    // Measurement markers and camera framing.
    function clearMarks() {
      picked.length = 0;
      for (const child of [...marks.children]) {
        const obj = child as THREE.Mesh;
        obj.geometry?.dispose();
        (obj.material as THREE.Material)?.dispose();
        marks.remove(child);
      }
      setDistance(null);
    }
    clear.current = clearMarks;
    function fit() {
      if (!cloud) return;
      const box = new THREE.Box3().setFromObject(cloud);
      const center = box.getCenter(new THREE.Vector3());
      radius = Math.max(box.getSize(new THREE.Vector3()).length() / 2, 0.01);
      controls.target.copy(center);
      if (reference) {
        const c = new THREE.Vector3(
          ...(reference.center_m as [number, number, number]),
        );
        const away = c.clone().sub(center).normalize();
        camera.position.copy(center).addScaledVector(away, radius * 2.7);
        camera.up.set(
          -reference.Rcw[1][0],
          -reference.Rcw[1][1],
          -reference.Rcw[1][2],
        );
      } else
        camera.position
          .copy(center)
          .add(new THREE.Vector3(0, 0, -radius * 2.7));
      camera.near = radius / 1000;
      camera.far = radius * 100;
      camera.updateProjectionMatrix();
      controls.update();
    }
    reset.current = fit;

    // Show a lightweight preview before loading the complete cloud.
    async function load(path: string, final: boolean) {
      const res = await fetch(path);
      if (!res.ok) throw new Error("Could not read the point cloud file");
      const bytes = await res.arrayBuffer();
      if (disposed) return;
      const geo = new PLYLoader().parse(bytes);
      geo.computeBoundingSphere();
      if (cloud) {
        scene.remove(cloud);
        cloud.geometry.dispose();
        (cloud.material as THREE.Material).dispose();
      }
      const mat = new THREE.PointsMaterial({
        size,
        vertexColors: geo.hasAttribute("color"),
        sizeAttenuation: false,
      });
      material.current = mat;
      cloud = new THREE.Points(geo, mat);
      scene.add(cloud);
      if (!keepView) fit();
      setStatus(
        `${geo.getAttribute("position").count.toLocaleString()} points · ${final ? "Full model" : "Quick preview"}`,
      );
    }
    (async () => {
      try {
        if (previewUrl !== url) await load(previewUrl, false);
        await load(url, true);
        const response = await fetch(cameraUrl);
        if (!response.ok) return;
        const data: CameraData[] = await response.json();
        if (disposed) return;
        reference =
          [...data].sort((a, b) => Number(a.photo) - Number(b.photo))[0] ||
          null;
        if (!keepView) fit();
        for (const c of data) {
          const center = new THREE.Vector3(
            ...(c.center_m as [number, number, number]),
          );
          const mat = new THREE.LineBasicMaterial({ color: 0x6ea8ff });
          mats.push(mat);
          const scale = radius * 0.035;
          const vertices = [
            [-1, -0.7, 1],
            [1, -0.7, 1],
            [1, 0.7, 1],
            [-1, 0.7, 1],
          ].map((v) => {
            const a = new THREE.Vector3(
              ...(v as [number, number, number]),
            ).multiplyScalar(scale);
            const r = c.Rcw;
            return new THREE.Vector3(
              r[0][0] * a.x + r[1][0] * a.y + r[2][0] * a.z,
              r[0][1] * a.x + r[1][1] * a.y + r[2][1] * a.z,
              r[0][2] * a.x + r[1][2] * a.y + r[2][2] * a.z,
            ).add(center);
          });
          const lines: THREE.Vector3[] = [];
          vertices.forEach((v, i) =>
            lines.push(center, v, v, vertices[(i + 1) % 4]),
          );
          const g = new THREE.BufferGeometry().setFromPoints(lines);
          geometries.push(g);
          cameras.add(new THREE.LineSegments(g, mat));
        }
      } catch (e) {
        if (!disposed) setStatus(String(e));
      }
    })();

    // Select actual cloud points for two-point measurements.
    const ray = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let down = [0, 0];
    const onDown = (e: PointerEvent) => {
      down = [e.clientX, e.clientY];
    };
    const onClick = (e: PointerEvent) => {
      if (
        !measuring.current ||
        !cloud ||
        Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 5
      )
        return;
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.set(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        (-(e.clientY - rect.top) / rect.height) * 2 + 1,
      );
      ray.params.Points!.threshold = radius * 0.004;
      ray.setFromCamera(mouse, camera);
      const hit = ray.intersectObject(cloud)[0];
      if (hit?.index === undefined) return;
      if (picked.length === 2) clearMarks();
      const pos = cloud.geometry.getAttribute("position");
      const point = new THREE.Vector3().fromBufferAttribute(pos, hit.index);
      picked.push(point);
      const ball = new THREE.Mesh(
        new THREE.SphereGeometry(radius * 0.006, 12, 8),
        new THREE.MeshBasicMaterial({ color: 0xffc857 }),
      );
      ball.position.copy(point);
      marks.add(ball);
      if (picked.length === 2) {
        marks.add(
          new THREE.Line(
            new THREE.BufferGeometry().setFromPoints(picked),
            new THREE.LineBasicMaterial({ color: 0xffc857 }),
          ),
        );
        setDistance(picked[0].distanceTo(picked[1]));
      }
    };
    renderer.domElement.addEventListener("pointerdown", onDown);
    renderer.domElement.addEventListener("pointerup", onClick);

    // Keep the canvas sized to its container and render animation frames.
    const resize = new ResizeObserver(() => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    resize.observe(el);
    function tick() {
      frame = requestAnimationFrame(tick);
      controls.update();
      renderer.render(scene, camera);
    }
    tick();

    // Release event listeners, GPU resources, and animation callbacks.
    return () => {
      if (cloud) viewpoint.current = { model: cameraUrl, position: camera.position.clone(),
        up: camera.up.clone(), target: controls.target.clone(), near: camera.near, far: camera.far, radius };
      sceneRef.current = null;
      disposed = true;
      cancelAnimationFrame(frame);
      resize.disconnect();
      renderer.domElement.removeEventListener("pointerdown", onDown);
      renderer.domElement.removeEventListener("pointerup", onClick);
      controls.dispose();
      clearMarks();
      if (cloud) {
        cloud.geometry.dispose();
        (cloud.material as THREE.Material).dispose();
      }
      geometries.forEach((g) => g.dispose());
      mats.forEach((m) => m.dispose());
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
      material.current = null;
      cameraGroup.current = null;
    };
  }, [url, previewUrl, cameraUrl]);
  useEffect(() => {
    const scene = sceneRef.current;
    setOverlayStatus("");
    if (!highlight || !removedUrl || !scene) return;
    const controller = new AbortController();
    let overlay: THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial> | undefined;
    setOverlayStatus("Loading removed points…");
    (async () => {
      try {
        const response = await fetch(removedUrl, { signal: controller.signal });
        if (!response.ok) throw new Error("Could not load removed points");
        const bytes = await response.arrayBuffer();
        if (controller.signal.aborted) return;
        const geo = new PLYLoader().parse(bytes);
        const mat = new THREE.PointsMaterial({ color: 0xff3856, size: 3, sizeAttenuation: false });
        overlay = new THREE.Points(geo, mat);
        scene.add(overlay);
        setOverlayStatus(`${geo.getAttribute("position").count.toLocaleString()} removed points in red`);
      } catch (error) {
        if (!controller.signal.aborted) setOverlayStatus(String(error));
      }
    })();
    return () => {
      controller.abort();
      if (overlay) {
        scene.remove(overlay);
        overlay.geometry.dispose();
        overlay.material.dispose();
      }
    };
  }, [highlight, removedUrl, url, previewUrl, cameraUrl]);
  return (
    <div className="viewer">
      <div
        className="canvas"
        ref={host}
        aria-label="3D point cloud: drag to orbit, right-drag to pan, scroll to zoom"
      />
      <div className="canvas-top">
        <span className="live-dot" />
        {status}{overlayStatus && ` · ${overlayStatus}`}
        <span className="unit">Meters · LiDAR scale</span>
      </div>
      <div className="viewer-tools">
        <button onClick={() => reset.current()}>Fit view</button>
        {removedUrl && <button aria-pressed={highlight} onClick={() => setHighlight(!highlight)}>
          Highlight removed
        </button>}
        <button
          aria-pressed={showCameras}
          onClick={() => setShowCameras(!showCameras)}
        >
          Cameras
        </button>
        <button
          aria-pressed={measure}
          onClick={() => {
            setMeasure(!measure);
            clear.current();
          }}
        >
          Measure distance
        </button>
        <label>
          Point size{" "}
          <input
            aria-label="Point size"
            type="range"
            min="1"
            max="5"
            step=".5"
            value={size}
            onChange={(e) => setSize(+e.target.value)}
          />
        </label>
      </div>
      <div className="canvas-bottom">
        {measure
          ? distance !== null
            ? `Distance: ${(distance * 100).toFixed(1)} cm · Select a new point to measure again`
            : "Select two points on the visible cloud"
          : "Drag to orbit · Right-drag to pan · Scroll to zoom"}
        <span>Axes are not aligned to ground or north</span>
      </div>
    </div>
  );
}
