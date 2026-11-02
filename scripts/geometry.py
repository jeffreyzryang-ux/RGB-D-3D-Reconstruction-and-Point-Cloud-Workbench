# 共享几何工具：内参缩放、去畸变、相机中心和三维点投影。
"""Stage 1: explicit OpenCV pixel-center geometry; no reconstruction claims."""

import cv2
import numpy as np


def validate_calibration(data):
    # 校验标定字典的尺寸、有限值和畸变系数顺序；返回 K、五项畸变系数及 (宽, 高)，非法输入抛出 ValueError。
    K = np.asarray(data["camera_matrix"], dtype=float)
    d = np.asarray(data["distortion_coefficients"], dtype=float)
    size = np.asarray(data["image_size_wh"], dtype=float)
    if K.shape != (3, 3) or d.shape != (5,) or size.shape != (2,):
        raise ValueError(
            "Expected 3x3 K, five distortion coefficients and width/height"
        )
    if not all(np.isfinite(a).all() for a in (K, d, size)):
        raise ValueError("Calibration must be finite")
    if np.any(size <= 0) or np.any(size != np.floor(size)):
        raise ValueError("Image dimensions must be positive integers")
    if K[0, 0] <= 0 or K[1, 1] <= 0 or not np.allclose(K[2], [0, 0, 1]):
        raise ValueError("Invalid focal length or homogeneous row")
    if K[0, 1] != 0 or K[1, 0] != 0:
        raise ValueError("Only zero-skew calibration supported")
    if data.get("distortion_order") != ["k1", "k2", "p1", "p2", "k3"]:
        raise ValueError("Explicit five-parameter ordering required")
    return K, d, tuple(size.astype(int))


def resize_intrinsics(K, source_wh, target_wh):
    """cv2.resize center mapping: target = scale * (source + .5) - .5."""
    # 根据原图和目标图的 (宽, 高) 缩放内参 K；返回考虑 OpenCV 半像素中心偏移的新内参。
    sx, sy = np.asarray(target_wh, float) / np.asarray(source_wh, float)
    A = np.array([[sx, 0, (sx - 1) / 2], [0, sy, (sy - 1) / 2], [0, 0, 1]])
    return A @ K


def colmap_pinhole(K):
    # 将 OpenCV 内参转换为 COLMAP 的 [fx, fy, cx, cy]；主点加 0.5 以匹配像素中心约定。
    return [float(K[0, 0]), float(K[1, 1]), float(K[0, 2] + 0.5), float(K[1, 2] + 0.5)]


def undistort(image, K, distortion):
    """Preserve canvas and new K; require complete bilinear source support."""
    # 保持图像尺寸与内参不变进行去畸变；返回校正图像和有效掩码（255 有效、0 无效）。
    h, w = image.shape[:2]
    x, y = cv2.initUndistortRectifyMap(K, distortion, None, K, (w, h), cv2.CV_32FC1)
    valid = (
        np.isfinite(x)
        & np.isfinite(y)
        & (x >= 0)
        & (y >= 0)
        & (x < w - 1)
        & (y < h - 1)
    )
    mask = valid.astype(np.uint8) * 255
    output = cv2.remap(image, x, y, cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT)
    return output, mask


def camera_center(Rcw, tcw):
    # 由世界到相机的 Rcw、tcw 求世界坐标中的相机中心，公式为 -Rcw.T @ tcw。
    return -np.asarray(Rcw).T @ np.asarray(tcw)


def project(points, Rcw, tcw, K):
    # 将 N×3 世界点投影为 N×2 像素坐标；使用世界到相机位姿，存在非正 Z 深度时抛出 ValueError。
    camera = np.asarray(points) @ np.asarray(Rcw).T + np.asarray(tcw)
    if np.any(camera[:, 2] <= 0):
        raise ValueError("Points must have positive depth")
    pixel = camera @ np.asarray(K).T
    return pixel[:, :2] / pixel[:, 2:3]
