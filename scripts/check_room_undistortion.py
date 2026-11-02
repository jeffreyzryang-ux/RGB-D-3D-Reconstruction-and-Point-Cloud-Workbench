# 对房间图像执行去畸变检查，生成对照结果。
"""Apply fixed calibration to audited room work images; diagnostic only, no SfM."""

import json, hashlib
from pathlib import Path
import cv2, numpy as np
from PIL import Image, ImageDraw
from scripts.geometry import validate_calibration, undistort


def main():
    # 读取固定历史批次的标定和房间图片，生成去畸变对照图及 results.json；依赖对应历史数据。
    root = Path.cwd()
    out = root / "reports/20261008-room-undistortion-v1"
    out.mkdir(exist_ok=False)
    cv2.setNumThreads(4)
    cp = root / "reports/20261008-calibration-v1/calibration.json"
    raw = cp.read_bytes()
    K, d, size = validate_calibration(json.loads(raw))
    manifest = json.loads(
        (root / "data/capture-20261007-2000-v1/manifest.json").read_text()
    )
    rows = []
    sheet = Image.new("RGB", (1200, 4 * 295), "white")
    draw = ImageDraw.Draw(sheet)
    for i, r in enumerate(x for x in manifest if x["group"] == "室内照片"):
        source = Path(r["source"])
        assert hashlib.sha256(source.read_bytes()).hexdigest() == r["sha256"]
        im = cv2.imread(r["working_file"])
        assert (im.shape[1], im.shape[0]) == tuple(size)
        name = source.stem
        target = out / name
        target.mkdir()
        corrected, mask = undistort(im, K, d)
        h, w = mask.shape
        cv2.imwrite(str(target / "before.png"), im)
        cv2.imwrite(str(target / "after.png"), corrected)
        cv2.imwrite(str(target / "valid-mask.png"), mask)
        marked = corrected.copy()
        marked[mask == 0] = (160, 0, 210)
        cv2.imwrite(str(target / "invalid-boundary.png"), marked)
        pair = np.hstack([im, corrected])
        cv2.imwrite(str(target / "before-after.jpg"), cv2.resize(pair, (1200, 800)))
        # Same-coordinate center crop, not corresponding-physical-point registration.
        roi = (w // 4, h // 4, 3 * w // 4, 3 * h // 4)
        x0, y0, x1, y1 = roi
        cv2.imwrite(
            str(target / "center-before-after.jpg"),
            np.hstack([im[y0:y1, x0:x1], corrected[y0:y1, x0:x1]]),
        )
        lsd = cv2.createLineSegmentDetector().detect(
            cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)
        )[0]
        segments = []
        for line in ([] if lsd is None else lsd[:, 0]):
            a, b = line[:2], line[2:]
            length = float(np.linalg.norm(b - a))
            if length < 400:
                continue
            xy = a[None, :] + np.linspace(0, 1, 101)[:, None] * (b - a)
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
            bend = np.abs(v[0] * delta[:, 1] - v[1] * delta[:, 0]) / np.linalg.norm(v)
            central = bool(
                np.all(
                    (xy[:, 0] >= w * 0.2)
                    & (xy[:, 0] <= w * 0.8)
                    & (xy[:, 1] >= h * 0.2)
                    & (xy[:, 1] <= h * 0.8)
                )
            )
            segments.append(
                dict(
                    source_endpoints=line.tolist(),
                    length_px=length,
                    max_chord_deviation_after_px=float(bend.max()),
                    entirely_in_central_60_percent=central,
                )
            )
        segments.sort(key=lambda x: -x["max_chord_deviation_after_px"])
        row = dict(
            file=source.name,
            sha256=r["sha256"],
            prepared_input=r["working_file"],
            prepared_sha256=hashlib.sha256(
                Path(r["working_file"]).read_bytes()
            ).hexdigest(),
            source_preprocessing=r,
            valid_fraction=float(np.mean(mask > 0)),
            central_80_percent_valid_fraction=float(
                np.mean(mask[h // 10 : 9 * h // 10, w // 10 : 9 * w // 10] > 0)
            ),
            long_line_segments=segments,
        )
        rows.append(row)
        preview = Image.fromarray(
            cv2.cvtColor(cv2.resize(pair, (390, 260)), cv2.COLOR_BGR2RGB)
        )
        x = i % 3 * 400
        y = i // 3 * 295
        sheet.paste(preview, (x, y + 25))
        draw.text((x + 5, y + 5), name + " | BEFORE / AFTER", fill="black")
        print(
            name,
            "valid",
            row["valid_fraction"],
            "max line bend",
            segments[0]["max_chord_deviation_after_px"] if segments else None,
            flush=True,
        )
    sheet.save(out / "all-before-after.jpg")
    assert cp.read_bytes() == raw
    report = dict(
        calibration_path=str(cp),
        calibration_sha256=hashlib.sha256(raw).hexdigest(),
        image_size_wh=list(map(int, size)),
        K=K.tolist(),
        dist=d.tolist(),
        new_K=K.tolist(),
        crop=None,
        images=rows,
        line_metric="Long source LSD segments sampled as ideal lines, transformed by fixed distortion model: deviation from endpoint chord. Flags possible added bending; not measured before/after ground-truth line residual.",
        compatibility="Original 2026-10-07 HEIC room photos versus 2026-10-08 JPEG calibration. Lens/resolution/orientation match; focus and export geometry equivalence not independently proven.",
        scope="Undistortion only; no feature matching, SfM or BA",
    )
    (out / "results.json").write_text(json.dumps(report, ensure_ascii=False, indent=2))
    print(out)


if __name__ == "__main__":
    main()
