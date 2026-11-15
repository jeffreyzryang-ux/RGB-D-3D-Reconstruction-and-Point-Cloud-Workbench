import { englishMessage } from "./messages";
import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import Viewer from "./Viewer";
import "./style.css";

// API response types.
type Project = { id: string; name: string };
type Model = {
  model_id: number;
  fused_points: number;
  registered: number;
  total: number;
  scale_robust_relative_std: number;
  multiview_supported_fused_points: number;
};
type Job = {
  id: string;
  status: string;
  stage: string;
  created: number;
  updated: number;
  error: string;
  models: Model[];
  log: string;
};
type Photo = {
  photo: string;
  registered: boolean;
  valid_percent: number;
  confidence_percent: Record<string, number>;
};

// Display labels for backend job states and processing stages.
const labels: Record<string, string> = {
  uploading: "Awaiting upload",
  queued: "Queued",
  validating: "Validating captures",
  preprocessing: "Processing depth",
  sfm: "Camera reconstruction",
  depth_fusion: "Scaling and fusing depth",
  exporting: "Exporting and checking",
  complete: "Processing complete",
  running: "Reconstructing",
  succeeded: "Complete",
  partial: "Partially complete",
  failed: "Failed",
  cancelled: "Cancelled",
  cancelling: "Cancelling",
  interrupted: "Interrupted",
  stopped: "Job stopped",
};
const terminal = ["succeeded", "partial", "failed", "cancelled", "interrupted"];

// Shared API client: include the local request header and translate errors.
async function api(path: string, options: RequestInit = {}) {
  const r = await fetch("/api" + path, {
    ...options,
    headers: {
      "x-workbench": "1",
      ...(options.body instanceof FormData
        ? {}
        : { "Content-Type": "application/json" }),
      ...options.headers,
    },
  });
  if (!r.ok) {
    const e = await r.json();
    throw new Error(
      englishMessage(
        typeof e.detail === "string" ? e.detail : JSON.stringify(e.detail),
      ),
    );
  }
  return r.json();
}

function App() {
  // Project selection, job results, and upload form state.
  const [projects, setProjects] = useState<Project[]>([]);
  const [pid, setPid] = useState("");
  const [jid, setJid] = useState("");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [job, setJob] = useState<Job | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [newProject, setNewProject] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [name, setName] = useState("");
  const [small, setSmall] = useState(false);
  const [busy, setBusy] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [progress, setProgress] = useState("");
  const [error, setError] = useState("");
  const [model, setModel] = useState(0);
  const [variant, setVariant] = useState("fused");
  const [tab, setTab] = useState("rgb");
  const [photo, setPhoto] = useState("1");
  const fileRef = useRef<HTMLInputElement>(null);
  const zipRef = useRef<HTMLInputElement>(null);

  // Load project navigation and follow the selected job.
  async function refreshProjects() {
    const p = await api("/projects");
    setProjects(p);
    if (p.length && !pid) setPid(p[0].id);
  }
  useEffect(() => {
    refreshProjects().catch((e) => setError(e.message));
  }, []);
  useEffect(() => {
    if (!pid) return;
    let active = true;
    api(`/projects/${pid}/jobs`)
      .then((j) => {
        if (active) {
          setJobs(j);
          setJid(j[0]?.id || "");
          setModel(0);
        }
      })
      .catch((e) => setError(e.message));
    return () => {
      active = false;
    };
  }, [pid]);
  useEffect(() => {
    if (!jid) {
      setJob(null);
      setPhotos([]);
      return;
    }
    let active = true;
    const poll = async () => {
      try {
        const j = await api(`/jobs/${jid}`);
        if (!active) return;
        setJob(j);
        const p = await api(`/jobs/${jid}/photos`);
        if (active) setPhotos(p);
      } catch (e) {
        if (active) setError(String(e));
      }
    };
    poll();
    const t = setInterval(poll, 2000);
    return () => {
      active = false;
      clearInterval(t);
    };
  }, [jid]);

  // Upload selection and submission.
  function choose(list: FileList | null) {
    if (!list) return;
    const selected = Array.from(list).filter(
      (f) => !f.name.startsWith(".") && !f.webkitRelativePath.includes("/."),
    );
    setFiles(selected);
    setName(
      selected[0]?.webkitRelativePath.split("/")[0] ||
        selected[0]?.name.replace(/\.zip$/i, "") ||
        "New project",
    );
    setNewProject(true);
    setError("");
  }
  async function upload() {
    if (!files.length || !name.trim()) return;
    setBusy(true);
    setError("");
    let id = "";
    try {
      const p = await api("/projects", {
        method: "POST",
        body: JSON.stringify({ name }),
      });
      const j = await api(`/projects/${p.id}/uploads`, {
        method: "POST",
        body: JSON.stringify({ small }),
      });
      id = j.id;
      setPid(p.id);
      setJid(j.id);
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setProgress(`Uploading ${i + 1} / ${files.length} · ${file.name}`);
        const form = new FormData();
        form.append("file", file);
        if (files.length === 1 && file.name.toLowerCase().endsWith(".zip"))
          await api(`/uploads/${id}/zip`, { method: "POST", body: form });
        else {
          form.append("path", file.webkitRelativePath || file.name);
          await api(`/uploads/${id}/file`, { method: "PUT", body: form });
        }
      }
      await api(`/uploads/${id}/complete`, { method: "POST" });
      setNewProject(false);
      setFiles([]);
      await refreshProjects();
      setJid(id);
      setJobs(await api(`/projects/${p.id}/jobs`));
    } catch (e) {
      setError(String(e));
      if (id)
        await api(`/jobs/${id}/cancel`, { method: "POST" }).catch(() => {});
    } finally {
      setBusy(false);
      setProgress("");
    }
  }

  // Job actions. A retry creates a separate result version.
  async function cancel() {
    try {
      await api(`/jobs/${jid}/cancel`, { method: "POST" });
      setJob(await api(`/jobs/${jid}`));
    } catch (e) {
      setError(String(e));
    }
  }
  async function retry() {
    try {
      const j = await api(`/jobs/${jid}/retry`, { method: "POST" });
      setJid(j.id);
      setJobs(await api(`/projects/${pid}/jobs`));
    } catch (e) {
      setError(String(e));
    }
  }

  async function deleteModel() {
    const project = projects.find((item) => item.id === pid);
    if (!project || deleting) return;
    const confirmed = window.confirm(
      `Delete "${project.name}"? This permanently deletes this project, all reconstruction versions, uploaded captures, and result files. This cannot be undone.`,
    );
    if (!confirmed) return;
    setDeleting(true);
    setError("");
    try {
      await api(`/projects/${pid}`, { method: "DELETE" });
      setJid("");
      setJob(null);
      setJobs([]);
      setPhotos([]);
      setModel(0);
      const remaining: Project[] = await api("/projects");
      setProjects(remaining);
      setPid(remaining[0]?.id || "");
      setNewProject(!remaining.length);
    } catch (error) {
      setError(String(error));
    } finally {
      setDeleting(false);
    }
  }

  // Derived values used by the result panels.
  const m = job?.models?.find((m) => m.model_id === model) || job?.models?.[0];
  const artifact = (path: string) => `/api/jobs/${jid}/artifacts/${path}`;
  const activeProject = projects.find((p) => p.id === pid);
  const isUpload = newProject || !projects.length;
  const selectedPhoto = photos.find((p) => p.photo === photo) || photos[0];
  const stages = [
    "validating",
    "preprocessing",
    "sfm",
    "depth_fusion",
    "exporting",
  ];
  return (
    <div className="app">
      {/* Project navigation */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">◈</div>
          <div>
            RGB-D<span>Point Cloud Workbench</span>
          </div>
        </div>
        <button
          className="primary new"
          onClick={() => {
            setNewProject(true);
            setFiles([]);
            setError("");
          }}
        >
          ＋ New model
        </button>
        <div className="section-label">
          Projects <span>{projects.length}</span>
        </div>
        <nav>
          {projects.map((p) => (
            <button
              className={
                pid === p.id && !isUpload ? "project selected" : "project"
              }
              key={p.id}
              aria-label={p.name}
              onClick={() => {
                setPid(p.id);
                setNewProject(false);
                setError("");
              }}
            >
              <span>▧</span>
              <div>
                {p.name}
                <small>RGB + LiDAR</small>
              </div>
            </button>
          ))}
        </nav>
        <div className="local">
          <span className="green-dot" />
          Local processing<div>Photos and models stay on this computer</div>
        </div>
      </aside>
      <main>
        <header>
          <div className="breadcrumb">
            Workspace <span>/</span>{" "}
            {isUpload ? "New model" : activeProject?.name || "Model"}
          </div>
          <select
            className="project-mobile"
            aria-label="Select project"
            value={isUpload ? "" : pid}
            onChange={(e) => {
              if (e.target.value) {
                setPid(e.target.value);
                setNewProject(false);
              } else setNewProject(true);
            }}
          >
            <option value="">New model</option>
            {projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </header>
        {error && (
          <div role="alert" className="error">
            <span>{error}</span>
            <button onClick={() => setError("")}>Close</button>
          </div>
        )}
        {/* Upload form or reconstruction results */}
        {isUpload ? (
          <section className="upload-page">
            <div className="eyebrow">FROM CAPTURES TO 3D</div>
            <h1>Build your next model</h1>
            <p className="intro">
              Upload a complete RGB-D capture batch to reconstruct cameras, fuse
              depth, and generate a point cloud.
            </p>
            <div className="upload-layout">
              <div>
                <div
                  className="drop-zone"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    if (
                      e.dataTransfer.files.length === 1 &&
                      e.dataTransfer.files[0].name.endsWith(".zip")
                    )
                      choose(e.dataTransfer.files);
                    else
                      setError(
                        "Use Choose capture folder for folders, or drag and drop a ZIP file.",
                      );
                  }}
                >
                  <div className="upload-symbol">↥</div>
                  <h2>
                    {files.length
                      ? `${files.length} files selected`
                      : "Choose a complete capture folder"}
                  </h2>
                  <p>
                    Each capture must include an image, intrinsics, depth, and
                    confidence files
                  </p>
                  <div className="button-row">
                    <button
                      disabled={busy}
                      className="primary"
                      onClick={() => fileRef.current?.click()}
                    >
                      Choose capture folder
                    </button>
                    <button
                      disabled={busy}
                      onClick={() => zipRef.current?.click()}
                    >
                      Upload ZIP
                    </button>
                  </div>
                  <small>Captures4 export format · Up to 2 GB per batch</small>
                  <input
                    hidden
                    ref={fileRef}
                    type="file"
                    multiple
                    {...({
                      webkitdirectory: "",
                    } as React.InputHTMLAttributes<HTMLInputElement>)}
                    onChange={(e) => choose(e.target.files)}
                  />
                  <input
                    hidden
                    ref={zipRef}
                    type="file"
                    accept=".zip"
                    onChange={(e) => choose(e.target.files)}
                  />
                </div>
                {files.length > 0 && (
                  <div className="selected-files">
                    <label>
                      Project name
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        maxLength={100}
                      />
                    </label>
                    <div className="file-summary">
                      <span>
                        {(
                          files.reduce((a, f) => a + f.size, 0) / 1048576
                        ).toFixed(1)}{" "}
                        MB
                      </span>
                      <span>
                        {files.filter((f) => f.name === "image.jpg").length
                          ? `${files.filter((f) => f.name === "image.jpg").length} captures`
                          : "Captures in ZIP"}
                      </span>
                    </div>
                    <details>
                      <summary>Review selected files</summary>
                      <ul>
                        {files.slice(0, 100).map((f, i) => (
                          <li key={i}>
                            {f.webkitRelativePath || f.name}
                            <span>{(f.size / 1024).toFixed(0)} KB</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                    <label className="small-check">
                      <input
                        type="checkbox"
                        checked={small}
                        onChange={(e) => setSmall(e.target.checked)}
                      />
                      Allow small-batch diagnostics (3–9 captures)
                    </label>
                    <button
                      disabled={busy || !name.trim()}
                      className="primary start"
                      onClick={upload}
                    >
                      {busy ? "Uploading…" : "Upload and reconstruct →"}
                    </button>
                    <p aria-live="polite">{progress}</p>
                  </div>
                )}
                <div className="flow">
                  <span>01 Validate captures</span>
                  <b>→</b>
                  <span>02 Camera reconstruction</span>
                  <b>→</b>
                  <span>03 Depth fusion</span>
                  <b>→</b>
                  <span>04 Explore in 3D</span>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <>
            <div className="title-row">
              <div>
                <div className="eyebrow">RGB-D RECONSTRUCTION</div>
                <h1>
                  {activeProject?.name}
                  <span className={`badge ${job?.status}`}>
                    {labels[job?.status || ""] || "Awaiting upload"}
                  </span>
                </h1>
              </div>
              <div className="button-row">
                <button
                  className="danger"
                  onClick={deleteModel}
                  disabled={
                    deleting ||
                    jobs.some(
                      (item) =>
                        item.id !== jid && !terminal.includes(item.status),
                    ) ||
                    Boolean(job && !terminal.includes(job.status))
                  }
                >
                  {deleting ? "Deleting…" : "Delete model"}
                </button>
                <select
                  aria-label="Result version"
                  value={jid}
                  onChange={(e) => setJid(e.target.value)}
                >
                  {jobs.map((j, i) => (
                    <option value={j.id} key={j.id}>
                      Version {jobs.length - i} ·{" "}
                      {new Date(j.created * 1000).toLocaleString("en-CA")}
                    </option>
                  ))}
                </select>
                {job && terminal.includes(job.status) && (
                  <button onClick={retry}>Reconstruct again</button>
                )}
                {m && (
                  <a
                    className="button primary"
                    href={artifact(`model-${m.model_id}/${variant}.ply`)}
                  >
                    ↓ Export PLY
                  </a>
                )}
              </div>
            </div>
            {job?.error && (
              <div className="warning">{englishMessage(job.error)}</div>
            )}
            {m ? (
              <div className="workspace">
                {/* Capture previews, point cloud, and model details */}
                <aside className="photos">
                  <div className="panel-heading">
                    Capture views <span>{photos.length}</span>
                  </div>
                  <div className="photo-list">
                    {photos.map((p) => (
                      <button
                        key={p.photo}
                        className={
                          selectedPhoto?.photo === p.photo
                            ? "photo active"
                            : "photo"
                        }
                        onClick={() => setPhoto(p.photo)}
                      >
                        <img
                          src={artifact(
                            `depth/${p.photo.padStart(2, "0")}-rgb.jpg`,
                          )}
                          alt={`Photo ${p.photo}`}
                        />
                        <span>
                          {p.photo.padStart(2, "0")}
                          <small>
                            {p.registered ? "Registered" : "Unregistered"}
                          </small>
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="tabs">
                    {["rgb", "depth", "confidence"].map((t) => (
                      <button
                        key={t}
                        aria-pressed={tab === t}
                        onClick={() => setTab(t)}
                      >
                        {
                          {
                            rgb: "RGB",
                            depth: "Depth",
                            confidence: "Confidence",
                          }[t]
                        }
                      </button>
                    ))}
                  </div>
                  {selectedPhoto && (
                    <>
                      <img
                        className="image-detail"
                        src={artifact(
                          `depth/${selectedPhoto.photo.padStart(2, "0")}-${tab}.${tab === "rgb" ? "jpg" : "png"}`,
                        )}
                        alt="Selected capture preview"
                      />
                      <p className="photo-note">
                        {tab === "confidence"
                          ? "Red: low · Yellow: medium · Green: high"
                          : tab === "depth"
                            ? "Depth scale: blue is near, red is far"
                            : "Native capture orientation"}
                      </p>
                    </>
                  )}
                </aside>
                <Viewer
                  url={artifact(`model-${m.model_id}/${variant}.ply`)}
                  previewUrl={artifact(`model-${m.model_id}/preview.ply`)}
                  cameraUrl={artifact(
                    `model-${m.model_id}/cameras-meters.json`,
                  )}
                />
                <aside className="inspector">
                  <div className="panel-heading">Model overview</div>
                  <div className="stat">
                    <span>Point count</span>
                    <strong>
                      {(variant === "fused"
                        ? m.fused_points
                        : m.multiview_supported_fused_points
                      ).toLocaleString()}
                    </strong>
                    <small>Colored points from measured depth</small>
                  </div>
                  <div className="stat-row">
                    <div>
                      <span>Registered cameras</span>
                      <b>
                        {m.registered}
                        <small> / {m.total}</small>
                      </b>
                    </div>
                    <div>
                      <span>Model units</span>
                      <b>
                        Meters <small>m</small>
                      </b>
                    </div>
                  </div>
                  <hr />
                  <label>
                    Separate model
                    <select
                      value={m.model_id}
                      onChange={(e) => setModel(+e.target.value)}
                    >
                      {job?.models.map((v) => (
                        <option key={v.model_id} value={v.model_id}>
                          Model {v.model_id + 1} · {v.registered} captures
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Point cloud variant
                    <select
                      value={variant}
                      onChange={(e) => setVariant(e.target.value)}
                    >
                      <option value="fused">Main point cloud</option>
                      <option value="multiview-supported">
                        Cross-view supported cloud
                      </option>
                    </select>
                  </label>
                  <hr />
                  <div className="section-label">Quality and scale</div>
                  <dl>
                    <dt>Depth confidence</dt>
                    <dd>Medium + high</dd>
                    <dt>Fusion spacing</dt>
                    <dd>5 mm</dd>
                    <dt>Relative scale spread</dt>
                    <dd>{(m.scale_robust_relative_std * 100).toFixed(2)}%</dd>
                  </dl>
                  <p className="note">
                    Metric scale comes from LiDAR. Edges may be noisy; accuracy
                    has not been independently verified against physical
                    measurements.
                  </p>
                  <a className="text-link" href={`/api/jobs/${jid}/download`}>
                    Download full result archive ↓
                  </a>
                  <a
                    className="text-link"
                    href={artifact("result.json")}
                    target="_blank"
                  >
                    View full report ↗
                  </a>
                  <a
                    className="text-link"
                    href={artifact(`model-${m.model_id}/cameras-meters.json`)}
                    target="_blank"
                  >
                    Camera poses ↗
                  </a>
                </aside>
              </div>
            ) : (
              <section className="progress-page">
                <div className="process-illustration">◈</div>
                <h2>
                  {labels[job?.stage || ""] || "Preparing reconstruction"}
                </h2>
                <p>
                  {job && terminal.includes(job.status)
                    ? "This job has ended. Review the report and retry to save a new result version."
                    : "Reconstruction runs in the background. Closing or refreshing this page will not stop the job."}
                </p>
                <ol className="steps">
                  {stages.map((s, i) => (
                    <li
                      key={s}
                      className={
                        job?.stage === s
                          ? "current"
                          : stages.indexOf(job?.stage || "") > i
                            ? "done"
                            : ""
                      }
                    >
                      <span>
                        {stages.indexOf(job?.stage || "") > i ? "✓" : i + 1}
                      </span>
                      {labels[s]}
                    </li>
                  ))}
                </ol>
                {job && !terminal.includes(job.status) && (
                  <button
                    onClick={cancel}
                    disabled={job.status === "cancelling"}
                  >
                    Cancel job
                  </button>
                )}
                <p className="note">
                  {job
                    ? `Started at ${new Date(job.created * 1000).toLocaleTimeString("en-CA")} · ${Math.max(0, Math.round((terminal.includes(job.status) ? job.updated : Date.now() / 1000) - job.created))} s`
                    : ""}
                </p>
              </section>
            )}
            {job && (
              <details className="logs">
                <summary>
                  Logs and diagnostics <span>{job.id.slice(0, 8)}</span>
                </summary>
                <pre>
                  {englishMessage(job.log || "Waiting for processing…")}
                </pre>
                <a href={artifact("execution.log")} target="_blank">
                  Open full log
                </a>
              </details>
            )}
          </>
        )}
        <footer>
          <span>◈ RGB-D WORKBENCH</span>
          <span>
            Data stays local · Each reconstruction is saved separately
          </span>
        </footer>
      </main>
    </div>
  );
}
createRoot(document.getElementById("root")!).render(<App />);
