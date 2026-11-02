# 探测本机计算环境与依赖是否可用。
"""Read-only engine/API inventory, saved to a fresh report directory."""

import datetime
import hashlib
import importlib.metadata
import json
from pathlib import Path
import platform
import subprocess
import sys
import pycolmap
import numpy as np

root = Path(__file__).resolve().parents[1]
out = (
    root
    / "reports"
    / datetime.datetime.now(datetime.timezone.utc).strftime("%Y%m%dT%H%M%S%fZ")
)
out.mkdir(parents=True, exist_ok=False)
packages = ["numpy", "opencv-python", "Pillow", "pillow-heif", "pycolmap"]
versions = {p: importlib.metadata.version(p) for p in packages}
(root / "requirements.lock.txt").write_text(
    "".join(f"{p}=={v}\n" for p, v in versions.items())
)
options = {}
for name in [
    "FeatureExtractionOptions",
    "FeatureMatchingOptions",
    "TwoViewGeometryOptions",
    "IncrementalMapperOptions",
    "BundleAdjustmentOptions",
]:
    options[name] = getattr(pycolmap, name)().todict()
camera = pycolmap.Camera(
    camera_id=1, model="PINHOLE", width=640, height=480, params=[520, 530, 320, 240]
)
np.testing.assert_allclose(camera.img_from_cam([1.0, 2.0, 5.0]), [424.0, 452.0])
tests = subprocess.run(
    [sys.executable, "-m", "unittest", "discover", "-s", "tests", "-v"],
    cwd=root,
    capture_output=True,
    text=True,
)
(out / "geometry-tests.txt").write_text(tests.stdout + tests.stderr)
source = Path(
    "/Users/jeffrey/Documents/Codex/2026-10-03/ni-k/outputs/camera_calibration"
)
assets = []
for path in sorted((root / "vendor/camera_calibration").iterdir()):
    if path.is_file():
        digest = hashlib.sha256(path.read_bytes()).hexdigest()
        original = source / path.name
        assets.append(
            dict(
                file=str(path.relative_to(root)),
                sha256=digest,
                source=str(original),
                identical_to_source=original.read_bytes() == path.read_bytes(),
            )
        )
report = dict(
    platform=platform.platform(),
    python=sys.version,
    packages=versions,
    calibration_assets=assets,
    engine_defaults=options,
    geometry_test_exit_code=tests.returncode,
    colmap_pinhole_projection_check="passed",
    status="stage_1_preparation_only",
    not_validated=[
        "real calibration",
        "independent undistortion images",
        "ICC/HEIC/HDR pipeline",
        "SIFT and exhaustive matching",
        "incremental mapping and BA",
        "real reconstruction and exports",
    ],
)
(out / "environment.json").write_text(
    json.dumps(report, ensure_ascii=False, indent=2, default=str)
)
print(out)
if tests.returncode:
    sys.exit(tests.returncode)
