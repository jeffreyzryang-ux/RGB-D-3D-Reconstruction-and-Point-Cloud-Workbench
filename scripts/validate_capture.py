# 校验拍摄数据及其配套参数。
"""Independent checkerboard validation plus numerical full-frame distortion checks."""

import argparse, json
from pathlib import Path
import cv2
import numpy as np
from scripts.geometry import validate_calibration, resize_intrinsics, undistort


def detect(image):
    # 检测 BGR 图像中的 9×6 棋盘内角点并细化到原图坐标；成功返回角点数组，失败返回 None。
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    ratio = min(1, 2000 / max(gray.shape))
    small = cv2.resize(gray, None, fx=ratio, fy=ratio, interpolation=cv2.INTER_AREA)
    found, corners = cv2.findChessboardCornersSB(
        small, (9, 6), flags=cv2.CALIB_CB_NORMALIZE_IMAGE
    )
    used_sb = found
    if not found:
        found, corners = cv2.findChessboardCorners(
            small,
            (9, 6),
            flags=cv2.CALIB_CB_ADAPTIVE_THRESH | cv2.CALIB_CB_NORMALIZE_IMAGE,
        )
    if not found:
        return None
    sx = small.shape[1] / gray.shape[1]
    sy = small.shape[0] / gray.shape[0]
    corners[:, :, 0] = (corners[:, :, 0] + 0.5) / sx - 0.5
    corners[:, :, 1] = (corners[:, :, 1] + 0.5) / sy - 0.5
    if used_sb and small.shape == gray.shape:
        return corners.astype(np.float32)
    return cv2.cornerSubPix(
        gray,
        corners.astype(np.float32),
        (11, 11),
        (-1, -1),
        (cv2.TERM_CRITERIA_EPS | cv2.TERM_CRITERIA_COUNT, 50, 0.001),
    )


def main():
    # 命令行入口：读取拍摄批次和标定，验证几何与去畸变结果，将检查产物写入 --output。
    cv2.setNumThreads(4)
    p = argparse.ArgumentParser()
    p.add_argument("--capture", type=Path, required=True)
    p.add_argument("--calibration", type=Path, required=True)
    p.add_argument("--output", type=Path, required=True)
    a = p.parse_args()
    a.output.mkdir(parents=True, exist_ok=False)
    data = json.loads(a.calibration.read_text())
    K, d, (w, h) = validate_calibration(data)
    obj = np.zeros((54, 3), np.float32)
    obj[:, :2] = np.mgrid[0:9, 0:6].T.reshape(-1, 2) * data["square_size_mm"]
    gx, gy = np.meshgrid(np.linspace(0, w - 1, 101), np.linspace(0, h - 1, 101))
    norm = np.c_[
        (gx.ravel() - K[0, 2]) / K[0, 0],
        (gy.ravel() - K[1, 2]) / K[1, 1],
        np.ones(gx.size),
    ]

    def distort(x):
        # 使用外层标定 K、d 将相机坐标点 x 投影到带畸变的像素平面，返回 N×2 坐标。
        return cv2.projectPoints(x, np.zeros(3), np.zeros(3), K, d)[0].reshape(-1, 2)

    mapped = distort(norm)
    eps = 1e-5
    dx = norm.copy()
    dx[:, 0] += eps
    dy = norm.copy()
    dy[:, 1] += eps
    jx = (distort(dx) - mapped) / eps / K[0, 0]
    jy = (distort(dy) - mapped) / eps / K[1, 1]
    determinant = jx[:, 0] * jy[:, 1] - jx[:, 1] * jy[:, 0]
    report = dict(
        calibration=str(a.calibration),
        K=K.tolist(),
        distortion=d.tolist(),
        training_rms_px=data["rms_px"],
        full_frame_mapping=dict(
            min_jacobian_determinant=float(determinant.min()),
            foldover_samples=int(np.sum(determinant <= 0)),
            max_displacement_px=float(
                np.linalg.norm(mapped - np.c_[gx.ravel(), gy.ravel()], axis=1).max()
            ),
        ),
        independent=[],
        coverage=[],
        limitations=[
            "Independent checkerboard PnP fits pose, not intrinsic parameters; it does not prove full-frame accuracy."
        ],
    )
    coverage_image = np.full((h, w, 3), 255, np.uint8)
    for group in ["标定照片", "独立验证照片"]:
        for path in sorted((a.capture / group).glob("*.png")):
            im = cv2.imread(str(path))
            if im is None or (im.shape[1], im.shape[0]) != (w, h):
                raise ValueError(f"{path}: image size does not match calibration")
            corners = detect(im)
            if corners is None:
                report["coverage"].append(
                    dict(file=path.name, group=group, found=False)
                )
                continue
            xy = corners.reshape(-1, 2)
            box = [*(xy.min(axis=0) / [w, h]), *(xy.max(axis=0) / [w, h])]
            report["coverage"].append(
                dict(file=path.name, group=group, found=True, normalized_bounds=box)
            )
            if group == "标定照片":
                for pt in xy:
                    cv2.circle(
                        coverage_image,
                        tuple(np.rint(pt).astype(int)),
                        4,
                        (180, 90, 30),
                        -1,
                    )
            if group == "独立验证照片":
                ok, rv, tv = cv2.solvePnP(obj, corners, K, d)
                if not ok:
                    report["independent"].append(
                        dict(file=path.name, pose_solved=False)
                    )
                    continue
                pred = cv2.projectPoints(obj, rv, tv, K, d)[0]
                errors = np.linalg.norm(pred.reshape(-1, 2) - xy, axis=1)
                overlay = im.copy()
                cv2.drawChessboardCorners(overlay, (9, 6), corners, True)
                cv2.imwrite(str(a.output / (path.stem + "-corners.jpg")), overlay)
                report["independent"].append(
                    dict(
                        file=path.name,
                        pose_solved=True,
                        rms_px=float(np.sqrt(np.mean(errors**2))),
                        p95_px=float(np.percentile(errors, 95)),
                        max_px=float(errors.max()),
                    )
                )
                size = (round(w * 1000 / h), 1000)
                small = cv2.resize(im, size, interpolation=cv2.INTER_LINEAR)
                Ks = resize_intrinsics(K, (w, h), size)
                corrected, mask = undistort(small, Ks, d)
                cv2.imwrite(
                    str(a.output / (path.stem + "-before-after.jpg")),
                    np.hstack([small, corrected]),
                )
                cv2.imwrite(str(a.output / (path.stem + "-mask.png")), mask)
            print(group, path.name, flush=True)
    boxes = [
        r["normalized_bounds"]
        for r in report["coverage"]
        if r["found"] and r["group"] == "标定照片"
    ]
    if boxes:
        b = np.asarray(boxes)
        report["training_coverage_envelope"] = [
            float(b[:, 0].min()),
            float(b[:, 1].min()),
            float(b[:, 2].max()),
            float(b[:, 3].max()),
        ]
    report["numerically_invertible_sampled_frame"] = bool(np.all(determinant > 0))
    cv2.imwrite(str(a.output / "training-coverage.png"), coverage_image)
    report["calibration_accepted"] = None
    report["acceptance_note"] = (
        "Requires review of coverage, held-out error and full-frame mapping; no automatic acceptance from low training RMS."
    )
    (a.output / "validation.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2)
    )
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
