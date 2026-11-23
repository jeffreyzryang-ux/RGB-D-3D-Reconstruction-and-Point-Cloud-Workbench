# RGB-D Point Cloud Workbench

A local web application for reconstructing metric-scale, colored point clouds from RGB images and ARKit LiDAR depth captures. It combines image-based camera reconstruction with measured depth, then provides a browser-based workspace for inspecting, measuring, and exporting the results.

The backend runs on your computer at [http://127.0.0.1:8765](http://127.0.0.1:8765). Uploaded captures, processing logs, and reconstructed models are stored locally. After dependencies are installed and the frontend is built, normal operation does not require an internet connection. The workbench user interface is in English. Original processing logs and user-supplied project names may contain other languages.

## Features

- Upload a complete capture folder or a ZIP archive.
- Validate image, calibration, depth, and confidence data before reconstruction.
- Estimate camera poses and sparse geometry using structure from motion (SfM).
- Recover metric scale from LiDAR depth and fuse colored point clouds.
- Inspect RGB images, depth maps, confidence maps, camera positions, and separate reconstructed models.
- Switch between the main point cloud and a point cloud with additional cross-view support.
- Measure the Euclidean distance between two selected 3D points.
- Export PLY point clouds, camera poses in JSON, and a complete result archive.
- Cancel jobs and retry reconstruction as a new version while retaining previous job data.

## Quick Start

### Already configured on this Mac

1. Double-click `Start Workbench.command` in the project folder.
2. Keep the terminal window running.
3. Open [http://127.0.0.1:8765](http://127.0.0.1:8765) in your browser.
4. When finished, press **Ctrl+C in that terminal window** to stop the service.

Alternatively, open a terminal in the project root and run:

```sh
./start_workbench.sh
```

The launcher uses `.venv/bin/python` and builds the frontend if `frontend/dist/index.html` is missing. It does not install missing dependencies automatically.

Run only one workbench instance on port `8765`. Refreshing or closing the browser does not stop an ongoing reconstruction; stopping the backend interrupts processing. Interrupted jobs can be retried after restarting the service.

## Installation on a New Computer

The existing setup targets macOS and uses Python 3.14. The `.command` launcher is intended for macOS. Other operating systems have not been verified for this project.

You will need:

- Python 3.14 with virtual environment support.
- Node.js 22.12+ on the Node 22 release line, or a compatible newer release for the bundled Vite version.
- pnpm for installing frontend dependencies.
- A browser with WebGL support.
- Internet access for dependency installation and enough disk space for captures, intermediate files, and exports.

Run the following commands from the project root. On a copied installation, recreate the virtual environment for the new machine instead of reusing the previous computer's `.venv`.

### 1. Install Python dependencies

```sh
python3.14 -m venv .venv
.venv/bin/python -m pip install -r requirements.web.lock.txt
```

`requirements.web.lock.txt` is the dependency file used by the web workbench. It includes FastAPI, Uvicorn, NumPy, OpenCV, Pillow, and PyCOLMAP. Availability of the pinned packages and platform-compatible wheels is required; this README does not imply that a fresh installation has been verified on every platform.

### 2. Install frontend dependencies

```sh
cd frontend
pnpm install --frozen-lockfile
cd ..
```

The checked-in `frontend/pnpm-workspace.yaml` contains an unresolved esbuild build-policy placeholder. If pnpm reports a build-policy error or blocks esbuild's installation script, replace that placeholder with the following policy and rerun installation:

```yaml
allowBuilds:
  esbuild: true
```

### 3. Build and start

```sh
sh scripts/build_frontend.sh
./start_workbench.sh
```

Open [http://127.0.0.1:8765](http://127.0.0.1:8765).

The build script first looks for `.runtime/node/bin/node`, then falls back to `node` on your system. To select a specific executable:

```sh
SLAM_NODE=/absolute/path/to/node sh scripts/build_frontend.sh
```

## Supported Capture Format

The current importer supports the project's **Captures4 ARKit schema version 2** export format. A folder of ordinary JPEG images is not sufficient, and arbitrary RGB-D exports are not directly compatible.

A batch must contain **10–200 capture groups** for normal reconstruction. For a diagnostic batch of **3–9 groups**, enable the small-batch option in the upload form. Diagnostic mode lowers the minimum to three groups; the maximum remains 200.

Each group must use a positive integer folder name without leading zeros, such as `1`, `2`, or `12`:

```text
capture-batch/
├── 1/
│   ├── image.jpg
│   ├── calibration.json
│   ├── depth.json
│   ├── depth.f32
│   └── confidence.u8
├── 2/
│   └── ...
├── ...
├── order.json       # Optional capture order
└── README.txt       # Optional batch notes
```

The importer also accepts a ZIP with one enclosing batch folder. `.DS_Store` metadata is ignored.

### Validation requirements

| Item | Requirement |
| --- | --- |
| Calibration | `schema_version: 2`, source `ARKit.ARFrame`, and available depth |
| Image orientation | Native orientation `1` in metadata and JPEG EXIF |
| Intrinsics | Valid pixel-based RGB intrinsics and consistently scaled depth intrinsics |
| Distortion | `distortion_coefficients` must be `null` or absent |
| Depth | Little-endian `float32`, tightly packed row-major layout, in meters |
| Depth source | `ARKit.ARFrame.sceneDepth` |
| Depth measurement | Camera-plane Z depth, not radial distance from the camera center |
| Confidence | `uint8` values: `0` = low, `1` = medium, `2` = high |
| Frame binding | Matching image/depth timestamps and expected file references |
| Uniqueness | No duplicate capture IDs or identical image contents |
| Dimensions | Image sizes must match metadata; depth dimensions must be 1–2048 per axis |

Depth and confidence file sizes must match their declared dimensions. Each capture must contain at least some finite, positive depth with medium or high confidence. If supplied, `order.json` must list every capture folder exactly once; otherwise, the backend generates it.

The batch upload limit is **2,000,000,000 bytes** (2 GB decimal). Images are limited to 30 MB and 40 million pixels. The upload handlers also enforce per-file and archive validation limits. See `validate_source` and the upload handlers in `backend/app.py` for the complete validation rules.

## Using the Workbench

1. Click **New model** in the sidebar.
2. Choose a complete capture folder or upload a ZIP. Drag-and-drop supports ZIP files; use the folder picker for folders.
3. Enter a project name and enable small-batch diagnostics in the upload form if needed.
4. Click **Upload and Reconstruct**.
5. Follow the processing stages: validation, depth preprocessing, camera reconstruction, depth fusion, and export/audit.
6. Review the reconstructed models, registered camera count, quality report, and image/depth/confidence previews.
7. Download the outputs you need.

Jobs are processed one at a time. The interface reports processing stages rather than an estimated reconstruction percentage. Retrying creates a separate job version.

A **partial** result can contain usable outputs. This status is used when some model fusions fail, multiple separate models are produced, or the largest successful model registers fewer than 80% of usable images. Review the report before treating a partial reconstruction as complete.

### Deleting a model

On a project result page, select **Delete model** and confirm the deletion. This permanently removes the project, all reconstruction versions, uploaded captures, and result files. Versions share source data, so deletion applies to the entire project. Projects with active uploads or processing jobs cannot be deleted. Files exported elsewhere are unaffected.

### Reconstruction settings

The current workflow uses fixed settings:

| Setting | Value |
| --- | --- |
| Accepted depth confidence | Medium and high (`1`, `2`) |
| Excluded depth confidence | Low (`0`) |
| Fusion voxel spacing | 0.005 m (5 mm) |
| Image clarity warning threshold | Below 45 |
| Metric scale source | Measured LiDAR depth |

The clarity threshold produces a warning; it does not automatically remove an image. **The 5 mm fusion spacing is not a measurement-accuracy specification.**

### Measuring distances

Select **Measure distance**, then select two actual points in the cloud. The viewer reports the straight-line Euclidean distance between those endpoints. Selecting another point starts a new measurement.

Check the viewing angle and occlusion carefully to avoid selecting background points. This tool does not automatically detect object edges, and its accuracy has not been independently validated against physical measurements.

### Exporting results

- **PLY:** Download the currently selected point-cloud variant.
- **Camera JSON:** Open or save camera poses in metric coordinates.
- **Full result archive:** Download input captures, configuration, processing-script snapshots, the dependency lockfile, logs, depth diagnostics, native SfM models, fusion results, and reports.

The full archive is available only for completed or partially completed jobs. For failed or interrupted jobs, inspect the error details and any available logs in the job storage directory.

## How Reconstruction Works

1. **Validate captures:** Check file completeness, metadata, dimensions, timestamps, intrinsics, confidence values, and duplicates.
2. **Parse depth:** Decode measured depth and create statistics and previews.
3. **Reconstruct cameras:** Extract image features, match views, and estimate camera poses and sparse geometry with PyCOLMAP.
4. **Fuse depth:** Estimate metric scale from measured depth, transform depth points into a shared coordinate system, check cross-view consistency, and merge points using a voxel grid.
5. **Audit and export:** Generate reports and browser-viewable outputs for each usable model.

The backend uses a single API process, a serialized job queue, and separate computation subprocesses. Do not run it with multiple Uvicorn workers.

## Storage and Configuration

By default, runtime data is stored under `data/workbench/`:

```text
data/workbench/
├── state.sqlite3       # Project and job metadata
└── jobs/
    └── <job-id>/       # Inputs, configuration, logs, and reconstruction outputs
```

To use another storage directory, set `SLAM_STORAGE` when starting the service:

```sh
SLAM_STORAGE="/absolute/path/to/workbench-data" ./start_workbench.sh
```

This selects a different store; it does not move existing projects automatically. To back up projects, stop the service and copy the entire storage directory, including the SQLite database and job folders.

| Variable | Purpose |
| --- | --- |
| `SLAM_STORAGE` | Override the backend data directory |
| `SLAM_NODE` | Select the Node executable used by the frontend build script |
| `SLAM_TEST_CAPTURES` | Point dataset-dependent tests to a Captures4 fixture |

The launcher binds to `127.0.0.1`, and the backend restricts accepted hosts and browser origins. The workbench is designed for local use, with no multi-user authentication or supported public deployment workflow.

## Project Structure

```text
.
├── backend/
│   └── app.py                  # API, validation, persistence, and job scheduling
├── frontend/
│   ├── src/
│   │   ├── main.tsx            # Project, upload, and results interface
│   │   ├── Viewer.tsx          # Point-cloud viewer and measurement tools
│   │   └── style.css          # Application styles
│   ├── package.json
│   └── pnpm-lock.yaml
├── scripts/                    # Reconstruction, fusion, and diagnostic tools
├── tests/                      # Automated tests
├── docs/                       # Detailed project documentation (Chinese)
├── report_generators/          # Historical report-generation scripts
├── reports/                    # Generated analysis/report outputs
├── data/                       # Local runtime data (not tracked by Git)
├── requirements.web.lock.txt   # Web workbench Python dependencies
├── requirements.lock.txt       # Separate earlier dependency snapshot
├── requirements.dev.txt        # Optional development tools
├── start_workbench.sh          # Local service launcher
└── Start Workbench.command           # Double-click launcher for macOS
```

The principal processing scripts are `parse_capture_depth.py`, `reconstruct_captures.py`, `fuse_lidar_depth.py`, and `audit_capture_result.py`. Other scripts include earlier calibration and diagnostic experiments and are not all part of the web workflow.

Historical scripts in `report_generators/` require their original datasets and may execute report generation on import. They are not called by the web workbench. See [the report-generator notes](report_generators/README.md) before using them.

## Development

### Rebuild the frontend

After changing frontend source files:

```sh
sh scripts/build_frontend.sh
```

Restart the service and reload the browser. The launcher only builds automatically when the built entry page is missing; it does not detect changed source files.

For frontend development with live reload, keep the backend running in one terminal, then run in another:

```sh
cd frontend
pnpm dev
```

Open [http://127.0.0.1:5173](http://127.0.0.1:5173). Vite proxies `/api` requests to the backend on port `8765`.

### Run checks

From the project root:

```sh
.venv/bin/python -m unittest discover -s tests -v
sh scripts/build_frontend.sh
```

Two dataset-dependent workbench tests require a `Captures4/` directory in the project root or an explicit fixture path:

```sh
SLAM_TEST_CAPTURES="/absolute/path/to/Captures4" \
  .venv/bin/python -m unittest discover -s tests -v
```

These tests are skipped when the fixture is unavailable. The fixture is test data, not a prerequisite for launching the application; the valid-dataset test expects the original 12-group fixture.

Optional Python formatting tools:

```sh
.venv/bin/python -m pip install -r requirements.dev.txt
.venv/bin/python -m black backend scripts report_generators
```

### Local API

Interactive API documentation is available at [http://127.0.0.1:8765/docs](http://127.0.0.1:8765/docs) while the server is running. Requests that modify data require the `x-workbench: 1` header in addition to passing the local host/origin checks.

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/health` | Check service health |
| GET / POST | `/api/projects` | List or create projects |
| POST | `/api/projects/{id}/uploads` | Create an upload job |
| PUT | `/api/uploads/{id}/file` | Upload an individual file |
| POST | `/api/uploads/{id}/zip` | Upload a ZIP archive |
| POST | `/api/uploads/{id}/complete` | Validate and queue reconstruction |
| GET | `/api/projects/{id}/jobs` | List project versions |
| GET | `/api/jobs/{id}` | Read job status and results |
| POST | `/api/jobs/{id}/cancel` | Cancel a job |
| POST | `/api/jobs/{id}/retry` | Create a new reconstruction version |
| GET | `/api/jobs/{id}/photos` | Read capture-preview metadata |
| GET | `/api/jobs/{id}/artifacts/{path}` | Retrieve a permitted job artifact |
| GET | `/api/jobs/{id}/download` | Download the result archive (completed/partial jobs) |

## Troubleshooting

| Problem | What to check |
| --- | --- |
| The local page does not open | Confirm the launcher is still running and check its terminal output. Use port `8765`. |
| Port `8765` is already in use | Stop the other workbench instance in its terminal before starting another. |
| `.venv/bin/python` is missing or unusable | Create a virtual environment on this computer and install `requirements.web.lock.txt`. |
| Frontend build fails | Check Node, frontend dependencies, and the esbuild policy described in the installation section. |
| Frontend changes are not visible | Rebuild the frontend, restart the backend, and reload the page. |
| Upload validation fails | Read the reported capture-group error and check the required files, schema, dimensions, timestamps, and unique IDs/images. |
| No valid model is produced | Review the logs and capture overlap/quality. A usable SfM model needs at least three registered cameras and nonempty geometry. |
| A result is marked partial | Inspect separate models, registration coverage, and any fusion failures in the report. |
| A job was interrupted | Restart the backend and retry the job to create a new version. |
| An API write returns 403 | Check the `x-workbench: 1` header and use an accepted local host and origin. |
| A large cloud is slow to display | The viewer loads a preview of at most about 50,000 points before the full PLY; full-cloud display can still consume substantial memory. |

## Current Limitations

- Only the specific Captures4 ARKit export format described above is supported.
- The output is a point cloud; mesh reconstruction and automatic object-dimension recognition are not implemented.
- ICP alignment and joint RGB-D pose optimization are not implemented.
- Separate reconstruction models are exposed individually rather than automatically merged into one complete scene.
- Metric scale comes from LiDAR. There is no web form for external ruler-based scale calibration.
- Large-cloud tiled level of detail, resumable uploads, and multi-user remote deployment are not implemented.
- Reconstruction quality depends on capture overlap, image texture, depth quality, and scene conditions. Metric units and voxel spacing do not establish measurement accuracy.

## Additional Documentation

The following documents are currently in Chinese:

- [Workbench usage guide](docs/%E5%B7%A5%E4%BD%9C%E5%8F%B0%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.md)
- [Code reading guide](docs/%E4%BB%A3%E7%A0%81%E9%98%85%E8%AF%BB%E6%8C%87%E5%8D%97.md)
- [Capture and stage acceptance notes](docs/%E6%8B%8D%E6%91%84%E4%B8%8E%E9%98%B6%E6%AE%B5%E9%AA%8C%E6%94%B6.md)
- [Captures4 frontend/backend implementation plan](docs/Captures4%E5%89%8D%E5%90%8E%E7%AB%AF%E5%AE%9E%E6%96%BD%E6%96%B9%E6%A1%88.md)
- [Implementation plan v2](docs/%E5%AE%9E%E6%96%BD%E8%AE%A1%E5%88%92_v2.md)
- [Historical report generators](report_generators/README.md)
