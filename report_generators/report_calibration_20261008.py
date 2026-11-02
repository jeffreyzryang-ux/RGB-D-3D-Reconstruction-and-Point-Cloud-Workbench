# 历史标定实验的报告生成脚本。
"""Archive calibration-only run and explicitly scoped validation findings."""

from pathlib import Path
import json, hashlib, shutil
import numpy as np
from scripts.geometry import resize_intrinsics

# 根据脚本位置定位项目，避免启动目录影响数据路径。
root = Path(__file__).resolve().parents[1]
out = root / "reports/20261008-calibration-v1"
out.mkdir(parents=True, exist_ok=False)
caldir = root / "data/calibration-20261008-v1"
valdir = root / "data/validation-20261008-v1"
capture = root / "data/capture-20261008-2000-v1"
c = json.loads((caldir / "calibration.json").read_text())
v = json.loads((valdir / "validation.json").read_text())
m = json.loads((capture / "manifest.json").read_text())
assert len(m) == 25 and len({r["sha256"] for r in m}) == 25
assert all(
    hashlib.sha256(Path(r["source"]).read_bytes()).hexdigest() == r["sha256"] for r in m
)
for src, name in [
    (caldir / "calibration.json", "calibration.json"),
    (caldir / "calibration.npz", "calibration.npz"),
    (caldir / "per_image_errors.csv", "per_image_errors.csv"),
    (caldir / "detection_report.json", "detection_report.json"),
    (valdir / "validation.json", "validation.json"),
    (capture / "manifest.json", "input-manifest.json"),
    (capture / "capture-settings.json", "capture-settings.json"),
    (root / "requirements.lock.txt", "requirements.lock.txt"),
    (root / "data/calibration-20261008-v1.log", "calibration.log"),
]:
    shutil.copy2(src, out / name)
for p in valdir.glob("*.jpg"):
    shutil.copy2(p, out / p.name)
shutil.copy2(valdir / "training-coverage.png", out / "training-coverage.png")
K = np.array(c["camera_matrix"])
full = resize_intrinsics(K, (1500, 2000), (4284, 5712))
# Export a derived intrinsics record, not a fictitious second full-resolution fit.
derived = dict(
    image_size_wh=[4284, 5712],
    camera_matrix=full.tolist(),
    distortion_order=c["distortion_order"],
    distortion_coefficients=c["distortion_coefficients"],
    source_calibration_sha256=hashlib.sha256(
        (caldir / "calibration.json").read_bytes()
    ).hexdigest(),
    derivation="Inverse half-pixel-aware resize from 1500x2000; not a full-resolution refit",
    pixel_convention="OpenCV integer pixel centers; upright portrait JPEG coordinates",
    scope="Same camera, optical and image processing settings, field of view and orientation",
)
(out / "intrinsics-4284x5712-derived.json").write_text(
    json.dumps(derived, ensure_ascii=False, indent=2)
)
assessment = dict(
    status="passed_observed_region_checks",
    calibration_computed=True,
    independent_validation_completed=True,
    all_frame_metric_accuracy_verified=False,
    evidence=dict(
        accepted=22,
        submitted=22,
        training_rms_px=c["rms_px"],
        independent_rms_px=[r["rms_px"] for r in v["independent"]],
        foldover_samples=v["full_frame_mapping"]["foldover_samples"],
    ),
    limits=[
        "Only 3 held-out checkerboard views; pose fitted separately",
        "Outermost borders and corners not independently covered",
        "No metrology truth or 3D reconstruction acceptance",
    ],
    stop_requested_by_user=True,
    downstream_executed=False,
    source_hashes_verified=25,
)
(out / "assessment.json").write_text(
    json.dumps(assessment, ensure_ascii=False, indent=2)
)
rows = "\n".join(
    f"| {r['file']} | {r['rms_px']:.3f} | {r['p95_px']:.3f} | {r['max_px']:.3f} |"
    for r in v["independent"]
)
(out / "报告.md").write_text(f"""# 2026-10-08 更换标定纸后的内参与独立验证

**内参计算和本批独立验证已完成；观测区域内的检查通过，明显优于上次。** 本次严格停在标定和验证，没有执行 SIFT、匹配、建图、BA 或后续平台开发。没有将本批检查通过等同于全画幅测量精度验收。

## 输入与可复现处理

22 张标定 JPEG、3 张独立验证 JPEG，用户确认新标定纸单格实测 20 mm，手机、镜头、倍率、对焦策略和模式一致。EXIF 一致显示 iPhone 16 Pro Max 主摄 6.765 mm、24 mm 等效焦距、4284×5712、方向 1。25 个文件 SHA-256 均唯一且处理前后不变，独立验证图未进入内参拟合。

实际将嵌入的 Display P3 ICC 转换到 sRGB，使用 JPEG SDR 基底，无额外 HDR 展开；按原方向转正一次（本批方向 1，无旋转）。用 cv2.INTER_LINEAR 等比缩放为 1500×2000，无裁剪；像素中心映射 u'=s(u+0.5)-0.5，s=2000/5712。原图、旧运行和原标定脚本不覆盖。参数与输入哈希见 input-manifest.json，软件精确版本见 requirements.lock.txt。

复用 vendor/camera_calibration/calibrate_camera.py，9×6 内角点，完整 k1/k2/p1/p2/k3 模型，OpenCV 4 线程。本次标定脚本耗时约 3.12 秒（不含色彩转换和独立验证）。22/22 全部检测成功，没有为降低误差删图。

## 内参（1500×2000 工作图，OpenCV 像素中心）

```text
K = [{K[0,0]:.6f}, 0, {K[0,2]:.6f}]
    [0, {K[1,1]:.6f}, {K[1,2]:.6f}]
    [0, 0, 1]

dist [k1,k2,p1,p2,k3] =
{c['distortion_coefficients']}
```

[原始标定 JSON](calibration.json) 和 [NPZ](calibration.npz) 对应上述工作分辨率。棋盘格外参为棋盘格到相机变换，平移单位 mm，不是室内相机已知位姿。

原尺寸 4284×5712 的等价内参按半像素规则换算为：

```text
K = [{full[0,0]:.6f}, 0, {full[0,2]:.6f}]
    [0, {full[1,1]:.6f}, {full[1,2]:.6f}]
    [0, 0, 1]
```

[原尺寸内参文件](intrinsics-4284x5712-derived.json) 是同视场缩放换算，不是重新进行全分辨率拟合。dist 不变。只能用于同成像设置、同方向、同视场的照片，不可直接用于其他手机、裁剪照片或已去畸变图。

## 验证结果

训练 RMS：**{c['rms_px']:.4f} 工作像素**（上次 1.3753）。

独立图保持 K/dist 固定，只拟合棋盘格位姿；采用与原脚本一致的角点检测方法。单位为 1500×2000 工作像素：

| 独立图 | RMS | P95 | 最大误差 |
|---|---:|---:|---:|
{rows}

上次独立 RMS 为 2.49、4.76、2.09，本次为 0.46、0.32、0.59。两批照片与棋盘格不同，这个比较说明本批观测拟合改善，不是受控精度实验。

训练角点联合包围范围：横向 9.93%–89.28%，纵向 7.53%–92.31%；这是包围范围，不是均匀覆盖率。角点预览与覆盖图已检查，覆盖较上次明显扩大。

101×101 全画幅采样未见映射折叠，最小 Jacobian 行列式 {v['full_frame_mapping']['min_jacobian_determinant']:.4f}。最大映射位移约 {v['full_frame_mapping']['max_displacement_px']:.2f} 工作像素，属于预测校正量，不能解释为误差。主点在画面内、焦距为正、参数有限。

![标定角点覆盖](training-coverage.png)

独立图对比左侧为转换后的原几何，右侧为去畸变。棋盘区域未见明显异常变形；纸张边缘可能不完全平直，不能当作经过计量的直线真值。黑色边界为保持完整画幅产生的无效区域，不代表标定失败。

![独立图01去畸变前后](01-before-after.jpg)

## 结论的适用范围

本批内参通过了参数有效性、独立棋盘格重投影、角点预览和采样映射检查。仍有以下限制：独立验证仅 3 张，最外侧边界和四角缺少独立观测；本次没有实测精度真值，不能承诺厘米级精度，也没有验证后续 SfM 注册率。

本次交付已按用户要求结束于验证。后续步骤未运行，若之后继续全流程，可使用此版本作为候选标定，并在实际场景中继续检查边缘残差。
""")
print(out / "报告.md")
