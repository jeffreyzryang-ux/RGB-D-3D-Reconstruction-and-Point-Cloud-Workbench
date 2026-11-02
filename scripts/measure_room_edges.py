# 房间边缘测量与诊断脚本。
"""Track gradients around long source lines, compare actual sampled edge straightness."""

from pathlib import Path
import json, cv2, numpy as np, argparse

parser = argparse.ArgumentParser()
parser.add_argument(
    "--report-dir", type=Path, default=Path("reports/20261008-room-undistortion-v1")
)
args = parser.parse_args()
root = args.report_dir
report = json.loads((root / "results.json").read_text())
K = np.array(report["K"])
d = np.array(report["dist"])
results = []


def errors(p):
    # 对二维点集 p 用 SVD 拟合直线；返回垂直偏离的均方根和最大值，单位与输入坐标一致。
    center = p.mean(axis=0)
    _, _, vt = np.linalg.svd(p - center, full_matrices=False)
    v = vt[0]
    delta = p - center
    e = np.abs(v[0] * delta[:, 1] - v[1] * delta[:, 0])
    return float(np.sqrt(np.mean(e * e))), float(e.max())


for row in report["images"]:
    name = Path(row["file"]).stem
    im = cv2.imread(str(root / name / "before.png"))
    gray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY).astype(np.float32)
    gx = cv2.Sobel(gray, cv2.CV_32F, 1, 0, ksize=3)
    gy = cv2.Sobel(gray, cv2.CV_32F, 0, 1, ksize=3)
    items = []
    for seg in row["long_line_segments"]:
        a, b = np.array(seg["source_endpoints"]).reshape(2, 2)
        v = (b - a) / np.linalg.norm(b - a)
        n = np.array([-v[1], v[0]])
        base = a + np.linspace(0.03, 0.97, 150)[:, None] * (b - a)
        offset = np.linspace(-3, 3, 25)
        samples = base[:, None, :] + offset[None, :, None] * n
        xx = samples[:, :, 0].astype(np.float32)
        yy = samples[:, :, 1].astype(np.float32)
        strength = np.abs(
            cv2.remap(gx, xx, yy, cv2.INTER_LINEAR) * n[0]
            + cv2.remap(gy, xx, yy, cv2.INTER_LINEAR) * n[1]
        )
        idx = strength.argmax(axis=1)
        good = (strength.max(axis=1) > 30) & (idx > 0) & (idx < 24)
        if good.sum() < 100:
            continue
        xy = samples[np.arange(150), idx][good]
        uv = cv2.undistortPointsIter(
            xy.reshape(-1, 1, 2),
            K,
            d,
            None,
            K,
            (cv2.TERM_CRITERIA_COUNT | cv2.TERM_CRITERIA_EPS, 100, 1e-10),
        ).reshape(-1, 2)
        before = errors(xy)
        after = errors(uv)
        items.append(
            dict(
                source_endpoints=seg["source_endpoints"],
                samples=len(xy),
                source_rms_px=before[0],
                corrected_rms_px=after[0],
                source_max_px=before[1],
                corrected_max_px=after[1],
                entirely_in_central_60_percent=seg["entirely_in_central_60_percent"],
            )
        )
    items.sort(key=lambda x: x["corrected_rms_px"] - x["source_rms_px"], reverse=True)
    results.append(dict(file=row["file"], edges=items))
    if items:
        x = items[0]
        print(
            name,
            round(x["source_rms_px"], 3),
            round(x["corrected_rms_px"], 3),
            x["source_endpoints"],
        )
(root / "tracked-edge-check.json").write_text(
    json.dumps(
        dict(
            method="Track strongest normal gradient within +/-3 px of source LSD segments; >=100 of 150 samples; fit each before/after edge independently by total least squares. Selected long near-straight source edges only, not global error or ground truth.",
            images=results,
        ),
        indent=2,
    )
)
