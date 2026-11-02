# 独立验证实验脚本；区别于 tests 目录中的自动化测试。
"""Test held-out JPEGs with frozen intrinsics; never recalibrate."""

import argparse, hashlib, json, time
from pathlib import Path
from io import BytesIO
import cv2, numpy as np
from PIL import Image, ImageOps, ImageCms
from scripts.geometry import validate_calibration, undistort
from scripts.validate_capture import detect


def main():
    # 对 --images 中的独立验证图片复测指定标定，将数值结果和中文报告写入 --output。
    p = argparse.ArgumentParser()
    p.add_argument("--images", type=Path, required=True)
    p.add_argument("--calibration", type=Path, required=True)
    p.add_argument("--output", type=Path, required=True)
    a = p.parse_args()
    a.output.mkdir(parents=True, exist_ok=False)
    cv2.setNumThreads(4)
    t = time.monotonic()
    raw = a.calibration.read_bytes()
    data = json.loads(raw)
    K, d, size = validate_calibration(data)
    size = tuple(map(int, size))
    obj = np.zeros((54, 3), np.float32)
    obj[:, :2] = np.mgrid[0:9, 0:6].T.reshape(-1, 2) * data["square_size_mm"]
    rows = []
    srgb = ImageCms.createProfile("sRGB")
    for path in sorted(a.images.glob("*.jpg")):
        digest = hashlib.sha256(path.read_bytes()).hexdigest()
        with Image.open(path) as im:
            icc = im.info.get("icc_profile")
            if not icc:
                raise ValueError(f"{path}: missing ICC profile")
            profile = ImageCms.ImageCmsProfile(BytesIO(icc))
            orientation = im.getexif().get(274, 1)
            im = ImageOps.exif_transpose(im)
            source_size = im.size
            if source_size[0] * size[1] != source_size[1] * size[0]:
                raise ValueError("Aspect ratio mismatch")
            rgb = ImageCms.profileToProfile(
                im, profile, srgb, renderingIntent=1, outputMode="RGB"
            )
            work = cv2.cvtColor(
                cv2.resize(np.asarray(rgb), size, interpolation=cv2.INTER_LINEAR),
                cv2.COLOR_RGB2BGR,
            )
        cv2.imwrite(str(a.output / (path.stem + "-working.png")), work)
        corners = detect(work)
        row = dict(
            file=path.name,
            sha256=digest,
            source_wh=source_size,
            working_wh=size,
            orientation=orientation,
            source_profile=ImageCms.getProfileDescription(profile).strip(),
            color_conversion="ICC to sRGB relative colorimetric",
            resampling="cv2.INTER_LINEAR, half-pixel coordinates",
            corners_found=corners is not None,
        )
        if corners is not None:
            ok, rv, tv = cv2.solvePnP(obj, corners, K, d)
            row["pose_solved"] = bool(ok)
            if ok:
                projected = cv2.projectPoints(obj, rv, tv, K, d)[0]
                delta = projected.reshape(-1, 2) - corners.reshape(-1, 2)
                errors = np.linalg.norm(delta, axis=1)
                R = cv2.Rodrigues(rv)[0]
                row.update(
                    corners=54,
                    rms_px=float(np.sqrt(np.mean(errors**2))),
                    median_px=float(np.median(errors)),
                    p95_px=float(np.percentile(errors, 95)),
                    max_px=float(errors.max()),
                    positive_depth=bool(np.all((obj @ R.T + tv.ravel())[:, 2] > 0)),
                    rvec=rv.ravel().tolist(),
                    tvec_mm=tv.ravel().tolist(),
                    residual_vectors_px=delta.tolist(),
                )
                overlay = work.copy()
                cv2.drawChessboardCorners(overlay, (9, 6), corners, True)
                cv2.imwrite(str(a.output / (path.stem + "-corners.jpg")), overlay)
        corrected, mask = undistort(work, K, d)
        row["valid_mask_fraction"] = float(np.mean(mask > 0))
        cv2.imwrite(str(a.output / (path.stem + "-undistorted.png")), corrected)
        cv2.imwrite(str(a.output / (path.stem + "-mask.png")), mask)
        cv2.imwrite(
            str(a.output / (path.stem + "-before-after.jpg")),
            cv2.resize(np.hstack([work, corrected]), (1200, 800)),
        )
        assert hashlib.sha256(path.read_bytes()).hexdigest() == digest
        rows.append(row)
    assert a.calibration.read_bytes() == raw
    report = dict(
        calibration=str(a.calibration.resolve()),
        calibration_sha256=hashlib.sha256(raw).hexdigest(),
        K_and_dist_fixed=True,
        calibrateCamera_called=False,
        image_size_wh=size,
        square_mm=data["square_size_mm"],
        elapsed_seconds=time.monotonic() - t,
        images=rows,
        scope="Held-out reprojection with per-view fitted pose; no reconstruction or metric accuracy claim",
    )
    (a.output / "results.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2)
    )
    lines = "\n".join(
        f"| {r['file']} | {r.get('corners',0)} | {r.get('rms_px',float('nan')):.3f} | {r.get('median_px',float('nan')):.3f} | {r.get('p95_px',float('nan')):.3f} | {r.get('max_px',float('nan')):.3f} |"
        for r in rows
    )
    passed = bool(rows) and all(
        r.get("rms_px", float("inf")) < 1 and r.get("positive_depth", False)
        for r in rows
    )
    conclusion = (
        f"{len(rows)} 张独立图的观测区域误差均小于 1 像素 RMS，所有角点为正深度。"
        if passed
        else "存在未检测成功、位姿失败、非正深度或 RMS 不低于 1 像素的图片，请检查逐图结果。"
    )
    (a.output / "报告.md").write_text(f"""# 独立验证图单独复测

固定使用 2026-10-08 标定内参与完整五参数畸变，仅拟合每张图的棋盘格位姿，没有重新估计内参或执行后续建图。格长 20 mm，误差对应 1500×2000 工作图。JPEG 经嵌入 ICC 实际转换为 sRGB，再等比缩放。原图和标定文件哈希复核未变。

| 图片 | 检出角点 | RMS | 中位数 | P95 | 最大误差 |
|---|---:|---:|---:|---:|---:|
{lines}

{conclusion} 1 像素仅作本次结果描述，不是普适标定合格标准。这不是全画幅精度或后续建图验收。最外侧边角仍缺少独立验证。详细残差、位姿、输入哈希见 results.json。

下图左侧为输入工作图，右侧为去畸变。另存完整尺寸去畸变 PNG、有效区域掩码及角点预览。

![01 对比](01-before-after.jpg)

![02 对比](02-before-after.jpg)

![03 对比](03-before-after.jpg)
""")
    print(
        json.dumps(
            [
                {
                    k: r.get(k)
                    for k in [
                        "file",
                        "corners",
                        "rms_px",
                        "median_px",
                        "p95_px",
                        "max_px",
                        "positive_depth",
                    ]
                }
                for r in rows
            ],
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
