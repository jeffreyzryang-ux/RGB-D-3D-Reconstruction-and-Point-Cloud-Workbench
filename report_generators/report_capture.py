# 拍摄批次报告生成脚本。
"""Archive this batch's reviewed stage-1 outcome without changing computed results."""

import hashlib, json, shutil
from pathlib import Path

# 根据脚本位置定位项目，避免启动目录影响数据路径。
root = Path(__file__).resolve().parents[1]
out = root / "reports" / "20261007-capture-v1"
out.mkdir(parents=True, exist_ok=False)
manifest = json.loads(
    (root / "data/capture-20261007-2000-v1/manifest.json").read_text()
)
validation = json.loads(
    (root / "data/validation-20261007-v2/validation.json").read_text()
)
calibration = json.loads(
    (root / "data/calibration-20261007-2000-v1/calibration.json").read_text()
)
lines = json.loads(
    (root / "data/straight-line-20261007-v1/diagnostic.json").read_text()
)
assert all(
    hashlib.sha256(Path(r["source"]).read_bytes()).hexdigest() == r["sha256"]
    for r in manifest
)
for r in manifest:
    # This batch's source EXIF orientation is 6; decoded container orientation is already applied.
    r["geometry"]["encoded_to_upright_pixel_center_matrix"] = [
        [0, -1, 4283],
        [1, 0, 0],
        [0, 0, 1],
    ]
    r["geometry"][
        "encoded_to_upright_description"
    ] = "90 degrees clockwise; decoder applied; not applied again"
(out / "input-manifest.json").write_text(
    json.dumps(manifest, ensure_ascii=False, indent=2)
)
for source, target in [
    ("data/validation-20261007-v2/validation.json", "validation.json"),
    (
        "data/calibration-20261007-2000-v1/calibration.json",
        "calibration-NOT-ACCEPTED.json",
    ),
    ("data/straight-line-20261007-v1/diagnostic.json", "straight-line-diagnostic.json"),
    ("data/straight-line-20261007-v1/before-after.jpg", "room-before-after.jpg"),
    ("requirements.lock.txt", "requirements.lock.txt"),
    ("data/capture-settings-20261007.json", "capture-settings.json"),
]:
    shutil.copy2(root / source, out / target)
acceptance = dict(
    status="needs_new_calibration_capture",
    calibration_accepted=False,
    stage=1,
    facts=[
        "15 of 19 calibration images detected",
        "Full-frame corner distortion is not validated by central-board coverage",
        "Independent checkerboard errors exceed training RMS",
        "Visible added bending of door-frame lines after undistortion",
    ],
    possible_causes=[
        "Nonuniform checkerboard geometry",
        "Insufficient horizontal edge coverage",
        "Unmodeled imaging variation",
    ],
    not_executed=[
        "COLMAP SIFT/matching/mapper/BA",
        "3D reconstruction",
        "Web frontend/backend",
    ],
    user_confirmation=dict(square_mm=19, same_capture_settings=True),
    originals_hash_verified=34,
)
(out / "acceptance.json").write_text(
    json.dumps(acceptance, ensure_ascii=False, indent=2)
)
rows = "\n".join(
    f"| {r['file']} | {r['rms_px']:.2f} | {r['p95_px']:.2f} | {r['max_px']:.2f} |"
    for r in validation["independent"]
)
text = f"""# 2026-10-07 三组照片：阶段 1 验证报告

**结论：本次标定未通过验收，尚未进入室内重建。** 所有结果保留，未放宽几何阈值，未退回未知内参模型。

## 数据与处理

收到标定 19 张、独立验证 3 张、室内 12 张，共 34 张 HEIC。34 个原始 SHA-256 均重新核验一致，无完全重复，总大小 80,665,613 字节。用户确认格长 19 mm，三组倍率、对焦策略和成像模式一致；具体对焦策略未进一步说明。

EXIF 一致显示 iPhone 16 Pro Max、6.765 mm 主摄、24 mm 等效焦距。容器解码后为 4284×5712 竖幅，原 EXIF 方向为 6；解码器已旋转，未重复转正。ICC 为 Display P3，经 LittleCMS 相对色度意图实际转换到 sRGB。对 HDR 增益图采用固定零增益贡献，即使用内嵌 8 位 SDR 基底，不重建扩展 HDR，不把位深截断当作色调映射。记录辅助图类型，未使用深度图、MakerNote 或 GPS 几何约束。

标定和验证使用同视场 1500×2000 工作副本，cv2.INTER_LINEAR 等比缩放，sx=sy=2000/5712；半像素坐标关系见 input-manifest.json。下列 K 和误差仅对应此工作分辨率，不能直接套在原 HEIC 上。

复用未修改的原标定脚本，限定 OpenCV 4 线程。首次全分辨率尝试耗时较长而中断，日志保留；没有把中断当作照片质量失败。2000 像素版本完成检测、标定与输出。未记录精确耗时，不能报告为性能基准。

## 标定结果

15/19 张角点检测成功，训练 RMS **{calibration['rms_px']:.4f} 工作像素**。未检测成功：IMG_6154、IMG_6163、IMG_6164、IMG_6166；这些文件保留，没有为降低误差手动删图。

内参 fx={calibration['camera_matrix'][0][0]:.3f}、fy={calibration['camera_matrix'][1][1]:.3f}、cx={calibration['camera_matrix'][0][2]:.3f}、cy={calibration['camera_matrix'][1][2]:.3f}。
五参数依次为 k1、k2、p1、p2、k3：{calibration['distortion_coefficients']}。

检测角点的联合包围范围横向仅约 29.7%–69.0%，纵向约 8.9%–75.1%。这只是包围范围，不是均匀覆盖率。左右边缘缺少直接观测约束。

## 独立验证

保持 K 和畸变不变，只对每张独立图拟合棋盘格位姿，角点检测和细化与原脚本相同。单位均为 1500×2000 工作图像素。

| 独立照片 | RMS | P95 | 最大误差 |
|---|---:|---:|---:|
{rows}

这些是棋盘格验证误差，不能与计划中的 SfM 最终中位重投影目标混为一谈。验证 v1 使用不同角点细化窗口，保留作中间记录；以统一为原脚本 11×11 细化窗口的 v2 为准。

101×101 全画幅采样没有发现映射折叠，但最大映射位移约 {validation['full_frame_mapping']['max_displacement_px']:.1f} 像素；正 Jacobian 不等于标定正确。有效去畸变掩码占约 {100*lines['valid_mask_fraction']:.1f}%。

图中左侧为处理前，右侧为使用本次标定参数后的图像。右侧部分门框直线明显弯曲。辅助直线诊断：对原图中检测到的长直线段取 101 个样本，变换后的曲线相对端点连线最大偏离约 {lines['segments'][0]['max_bend_after_undistortion_px']:.1f} 像素。这是警示指标，不是真值精度评估。黑边本身不构成标定失败依据。

![室内照片去畸变前后对比](room-before-after.jpg)

综合边缘覆盖、独立误差和可见直线变形，本次参数不能作为计划要求的“已验证内参”。棋盘格照片上可见格线不规则，**格子几何不均匀和边缘覆盖不足是可能原因，不是已证明的唯一原因**。

## 下一步采集

1. 使用打印的规则棋盘格并贴在平整硬板上，保留白边。提供了 ../../docs/棋盘格_10x7_19mm_A4.svg，10×7 格、单格标称 19 mm。按 100% 打印，关闭适应页面，实测 100 mm 参考线和横纵多个格子的尺寸；以实测值为准。
2. 重新拍摄 20–30 张标定图：完整棋盘格，覆盖左、右、上、下及四角，避免棋盘格一直落在中央；同时改变距离和左右/上下倾角，避免模糊和反光。
3. 另拍 3–5 张不参与拟合的验证图，包含靠近画面边缘的棋盘格及可检查的直线。
4. 若保持原手机、镜头、倍率、分辨率、方向、对焦策略和模式，现有室内照片先保留；目前没有足够依据要求全部重拍。若改变设置，应重新采集对应的室内照片。

室内照片 IMG_6173 灰度 Laplacian 方差约 47.8，提示可能低纹理/模糊，不自动排除。房间有较多白墙，连接情况仍待有效标定后的全配对验证；未输出任何注册率、三维点数或测量精度。

阶段 1 未通过；阶段 2–4 尚未开始。重建、BA、网页与尺度校准没有完成。
"""
(out / "报告.md").write_text(text)
print(out / "报告.md")
