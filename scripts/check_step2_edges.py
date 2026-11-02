# 检查第二阶段图像边缘与标定表现。
"""Revalidate actual step-2 outputs against their corresponding pre-undistortion inputs."""

import json, cv2, numpy as np
from pathlib import Path
from scripts.geometry import validate_calibration

out = Path("data/step2-20261013-room-check-v2")
out.mkdir(exist_ok=False)
m = json.loads(Path("data/step2-20261013-pinhole-v2/manifest.json").read_text())
c = json.loads(Path("data/step2-20261013-calibration-v2/calibration.json").read_text())
K, d, size = validate_calibration(c)
rows = []
for r in m["images"]:
    name = Path(r["original_name"]).stem
    folder = out / name
    folder.mkdir()
    (folder / "before.png").symlink_to(Path(r["input_file"]).resolve())
    (folder / "after.png").symlink_to(Path(r["output_file"]).resolve())
    im = cv2.imread(r["input_file"])
    lines = cv2.createLineSegmentDetector().detect(
        cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)
    )[0]
    segments = []
    for l in ([] if lines is None else lines[:, 0]):
        first, last = l[:2], l[2:]
        length = float(np.linalg.norm(last - first))
        if length < 400:
            continue
        xy = first + np.linspace(0, 1, 101)[:, None] * (last - first)
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
        error = np.abs(v[0] * delta[:, 1] - v[1] * delta[:, 0]) / np.linalg.norm(v)
        segments.append(
            dict(
                source_endpoints=l.tolist(),
                length_px=length,
                max_chord_deviation_after_px=float(error.max()),
                entirely_in_central_60_percent=bool(
                    np.all(
                        (xy[:, 0] >= size[0] * 0.2)
                        & (xy[:, 0] <= size[0] * 0.8)
                        & (xy[:, 1] >= size[1] * 0.2)
                        & (xy[:, 1] <= size[1] * 0.8)
                    )
                ),
            )
        )
    rows.append(dict(file=r["original_name"], long_line_segments=segments))
(out / "results.json").write_text(
    json.dumps(dict(K=K.tolist(), dist=d.tolist(), images=rows), indent=2)
)
