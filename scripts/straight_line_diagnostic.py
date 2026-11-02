# 利用直线表现诊断图像几何与畸变。
"""Inspect how calibrated undistortion bends long line segments detected in the source."""

import argparse, json
from pathlib import Path
import cv2, numpy as np
from scripts.geometry import validate_calibration, undistort

p = argparse.ArgumentParser()
p.add_argument("--image", type=Path, required=True)
p.add_argument("--calibration", type=Path, required=True)
p.add_argument("--output", type=Path, required=True)
a = p.parse_args()
a.output.mkdir(parents=True, exist_ok=False)
K, d, size = validate_calibration(json.loads(a.calibration.read_text()))
im = cv2.imread(str(a.image))
if (im.shape[1], im.shape[0]) != size:
    raise ValueError("Image and calibration dimensions differ")
lines = cv2.createLineSegmentDetector().detect(cv2.cvtColor(im, cv2.COLOR_BGR2GRAY))[0]
rows = []
for line in ([] if lines is None else lines[:, 0]):
    first, last = line[:2], line[2:]
    length = np.linalg.norm(last - first)
    if length < 400:
        continue
    xy = first[None, :] + np.linspace(0, 1, 101)[:, None] * (last - first)
    uv = cv2.undistortPointsIter(
        xy.reshape(-1, 1, 2).astype(float),
        K,
        d,
        None,
        K,
        (cv2.TERM_CRITERIA_COUNT | cv2.TERM_CRITERIA_EPS, 100, 1e-10),
    ).reshape(-1, 2)
    v = uv[-1] - uv[0]
    delta = uv - uv[0]
    err = np.abs(v[0] * delta[:, 1] - v[1] * delta[:, 0]) / np.linalg.norm(v)
    rows.append(
        dict(
            source_endpoints=line.tolist(),
            source_length_px=float(length),
            max_bend_after_undistortion_px=float(err.max()),
        )
    )
rows.sort(key=lambda r: -r["max_bend_after_undistortion_px"])
corrected, mask = undistort(im, K, d)
cv2.imwrite(
    str(a.output / "before-after.jpg"),
    cv2.resize(np.hstack([im, corrected]), (1200, 800)),
)
(a.output / "diagnostic.json").write_text(
    json.dumps(
        dict(
            image=str(a.image),
            minimum_segment_length_px=400,
            samples_per_segment=101,
            interpretation="Departure from endpoint chord of transformed source line segments; diagnostic only, not ground-truth calibration accuracy.",
            valid_mask_fraction=float(np.mean(mask > 0)),
            segments=rows,
        ),
        indent=2,
    )
)
