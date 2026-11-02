# 历史第二阶段处理结果的报告生成脚本。
"""Freeze the step-2 deliverables and failed acceptance gate; preserve all prior runs."""

from pathlib import Path
import json, hashlib, shutil
from PIL import Image, ImageDraw

# 根据脚本位置定位项目，避免启动目录影响数据路径。
root = Path(__file__).resolve().parents[1]
out = root / "reports/20261013-step2-v2"
out.mkdir(parents=True, exist_ok=False)
caldir = root / "data/step2-20261013-calibration-v2"
valdir = root / "data/step2-20261013-validation-v2"
adapter = root / "data/step2-20261013-pinhole-v2"
edges = root / "data/step2-20261013-room-check-v2"
c = json.loads((caldir / "calibration.json").read_text())
v = json.loads((valdir / "validation.json").read_text())
m = json.loads((adapter / "manifest.json").read_text())
e = json.loads((edges / "tracked-edge-check.json").read_text())
profile = json.loads((adapter / "calibration-profile.json").read_text())
for name in [
    "calibration.json",
    "calibration.npz",
    "detection_report.json",
    "per_image_errors.csv",
    "undistorted_sample.jpg",
]:
    shutil.copy2(caldir / name, out / name)
for name in [
    "calibration-profile.json",
    "manifest.json",
    "cameras.txt",
    "requirements.lock.txt",
    "output-verification.json",
    "execution-policy.json",
]:
    shutil.copy2(adapter / name, out / name)
shutil.copy2(valdir / "validation.json", out / "validation.json")
shutil.copy2(edges / "tracked-edge-check.json", out / "tracked-edge-check.json")
shutil.copy2(
    root / "data/step2-20261013-verified-capture-v2/selection.json",
    out / "selection.json",
)
shutil.copy2(
    root / "data/step2-20261013-source-archive-v2/audit.json", out / "source-audit.json"
)
shutil.copy2(adapter / "previews/07.jpg", out / "07-before-after.jpg")
shutil.copy2(valdir / "training-coverage.png", out / "training-coverage.png")
for p in valdir.glob("*before-after.jpg"):
    shutil.copy2(p, out / p.name)
for path in [
    "vendor/camera_calibration/calibrate_camera.py",
    "scripts/step2_calibration.py",
    "scripts/validate_capture.py",
    "scripts/check_step2_edges.py",
    "scripts/measure_room_edges.py",
]:
    shutil.copy2(root / path, out / Path(path).name)
shutil.copy2("/private/tmp/slam-step2-calibration-v2.log", out / "calibration.log")
files = sorted((caldir / "corners").glob("*.jpg"))
sheet = Image.new("RGB", (1200, ((len(files) + 3) // 4) * 300), "white")
draw = ImageDraw.Draw(sheet)
for i, p in enumerate(files):
    im = Image.open(p)
    im.thumbnail((285, 270))
    x = i % 4 * 300
    y = i // 4 * 300
    sheet.paste(im, (x, y + 22))
    draw.text((x, y + 3), p.name, fill="black")
sheet.save(out / "corners-contact-sheet.jpg")
cp = profile["calibration_sha256"]
assert hashlib.sha256((out / "calibration.json").read_bytes()).hexdigest() == cp
assessment = dict(
    step=2,
    processing_completed=True,
    acceptance_passed=False,
    ready_for_step3=False,
    calibration_sha256=cp,
    accepted_training_images=22,
    heldout_images=3,
    room_images_prepared=12,
    main_reason="Actual room edges bend more after correction; independent checkerboard RMS alone is insufficient",
    unknown_profile_fields=[
        "exact zoom ratio",
        "exact focus policy",
        "exact imaging mode",
    ],
    user_confirmed_consistency=True,
    not_executed=["step3 COLMAP SIFT", "matching", "mapper", "BA"],
)
(out / "assessment.json").write_text(
    json.dumps(assessment, ensure_ascii=False, indent=2)
)
rows = "\n".join(
    f"| {x['file']} | {x['rms_px']:.3f} | {x['p95_px']:.3f} | {x['max_px']:.3f} |"
    for x in v["independent"]
)
edge7 = next(x for x in e["images"] if x["file"] == "07.jpg")["edges"][0]
(out / "报告.md").write_text(
    f"""# 具体算法第 2 步：标定、接入前检查、五参数去畸变与 PINHOLE 适配

**第二步各项计算、输出及验证已执行，但标定接入验收未通过：当前版本只供诊断，不能标为可进入第三步。** 主要原因是实际室内照片的部分边缘直线在校正后弯曲增加。依照计划“若标定不可靠，报告并重新验证”，本次保留完整证据并阻止继续处理；未改用未知内参，也未静默删除 k3。

## 2.1 原脚本标定

- 用户已确认的新棋盘格为 9×6 内角点、单格实测 20 mm。复用未修改的原 calibrate_camera.py 核心算法，SB 优先、经典角点及 cornerSubPix 后备、完整五参数 calibrateCamera。
- 当前标定目录共有 25 张：新增 01–03.jpg 与室内批次前三张字节完全相同。03.jpg 中还有旧 19 mm 棋盘格，被检测器识别。目录全量试跑产生 23 张“检测成功”，但该结果不符合本次 20 mm 标定资产的批次约定，已明确标为不可用，未接入后续流程。
- 最终按已确认的 20 mm 批次原图哈希选取 22 张，全部检测成功。排除的是已知错误角色/标定纸批次，不是按误差高低挑图。原始 28 个文件（含 3 张独立验证）全部单独归档，未改动源文件，清单见 source-audit.json 和 selection.json。格长差异本身并不是判定内参偏差的充分依据，不能把它当作本次室内边缘异常的已证明原因。
- 标定与独立验证输入实际进行 Display P3 → sRGB 转换，明确使用 SDR 基底、增益图权重 0。MPO 辅助图已完整解码，BaseRenditionIsHDR=0 已核验；原始 XMP 保留在 source-audit.json。
- EXIF 方向 1，4284×5712 等比缩放为 1500×2000，无裁剪。核心标定耗时约 3.16 秒，不含外层预处理与检查。

训练 RMS **{c['rms_px']:.6f} 工作像素**；逐图 RMS 范围 0.284–0.736。完整输出：[JSON](calibration.json)、[NPZ](calibration.npz)、[逐图误差](per_image_errors.csv)、[检测报告](detection_report.json)、[去畸变样例](undistorted_sample.jpg)。原分辨率、元数据和缩放规则与输入关联均保留。

OpenCV 内参，适用 1500×2000：

```text
fx = {c['camera_matrix'][0][0]:.9f}
fy = {c['camera_matrix'][1][1]:.9f}
cx = {c['camera_matrix'][0][2]:.9f}
cy = {c['camera_matrix'][1][2]:.9f}
dist [k1,k2,p1,p2,k3] = {c['distortion_coefficients']}
```

棋盘格外参仍是棋盘格到相机，单位 mm，不是室内照片位姿，也不赋予 SfM 米制尺度。

## 2.2 标定档案与接入前检查

[标定档案](calibration-profile.json) 保存参数 SHA-256、手机、物理镜头、焦距、等效焦距、尺寸、方向、时间、OpenCV/PyCOLMAP 版本以及训练图片列表和源文件哈希。用户已确认成像设置一致；**具体倍率数值、对焦策略名称和拍摄模式名称没有提供，档案明确为 null，不从“24 mm 等效”推算或伪造为已确认。**

依赖逐个核验与 requirements.lock.txt 一致：OpenCV 4.14.0.94、NumPy 2.5.3、Pillow 12.3.0、pillow-heif 1.8.0、PyCOLMAP 4.2.1。

K 与五参数有限、焦距为正、主点在画面内，照片尺寸匹配。角点包围范围横向约 9.93%–89.28%、纵向 7.53%–92.31%；这不是均匀覆盖率。101×101 全画幅采样无折叠，最小 Jacobian 行列式 {v['full_frame_mapping']['min_jacobian_determinant']:.4f}；预测最大校正位移 106.26 像素，不当作残余误差。

独立验证保持 K/dist 固定，仅拟合各图棋盘位姿，单位为工作像素：

| 独立图 | RMS | P95 | 最大误差 |
|---|---:|---:|---:|
{rows}

角点预览、覆盖及独立图检查良好，但工作区域边缘验证仍不合格。本次使用第一步最新 JPEG 工作图重新做实际边缘跟踪：07.jpg 某条靠边直线的拟合 RMS 从 **{edge7['source_rms_px']:.3f} px 增至 {edge7['corrected_rms_px']:.3f} px**。该诊断沿长源线段附近跟踪图像梯度、变换相同边缘点并重新拟合直线，每张取增幅最大例子；不是整张平均误差或测量真值。详见 tracked-edge-check.json。

![07.jpg 校正前后](07-before-after.jpg)

## 2.3 OpenCV 五参数 → COLMAP PINHOLE

- 绑定第一步 `step1-20261013-v2/manifest.json`，核验原图、工作副本哈希、手机、物理镜头和尺寸；拒绝已去畸变输入，避免二次应用。
- 标定和工作图同为 1500×2000，无额外缩放。仍验证回到原尺寸再缩回的 K 半像素公式，回环一致。
- 12 张同组照片完整使用 k1/k2/p1/p2/k3 去畸变一次，保持画幅，新 K=原工作 K；输出 sRGB 彩色 PNG、正常方向标签及有效边界掩码，全部逐像素重算核验。每张有效像素比例 96.4267%。掩码必须随图供后续特征提取使用。
- 所有图片映射同一个 camera_id=1，COLMAP 模型为 PINHOLE。主点从 OpenCV 加 0.5，焦距不变：

```text
1 PINHOLE 1500 2000 {' '.join(f'{x:.9f}' for x in m['pinhole_params'])}
```

- 固定本机 PyCOLMAP 4.2.1 用 100 个合成正深度点对比 OpenCV 投影，加 0.5 后最大差异 {m['adapter_tests']['max_projection_disagreement_px']:.3g} 像素。COLMAP 原生 cameras.txt 已实际重新读入核验。这里只创建相机测试文件，没有生成三维重建。
- mapper 中 BA 焦距、主点、额外参数细化均关闭，PnP 内参细化也关闭；独立全局 BA 的固定内参选项另存 execution-policy.json。相机共享模式记录为 SINGLE。这些是后续配置，未运行 mapper 或 BA。
- k3 未丢失，输出 PINHOLE 不再带原始五参数，原始参数只保留在溯源档案。输出图像与掩码、原图 ID/哈希关联、非线性变换记录见 manifest.json；原始五参数不能再次用于这些输出图片。

## 输出位置与状态

- [第二步清单、参数与后续配置](manifest.json)
- [执行限制：ready_for_step3=false](execution-policy.json)
- [验收结论](assessment.json) 与 [输出重算核验](output-verification.json)
- [12 张诊断去畸变图]({adapter}/images)、[掩码]({adapter}/masks)、[前后预览]({adapter}/previews)
- [原始照片归档]({root}/data/step2-20261013-source-archive-v2)
- [全部角点预览]({caldir}/corners)

![22 张角点检测总览](corners-contact-sheet.jpg)

本次完整执行第二步的处理和验证，验收结果为不通过，并不是已完成整套建图系统。不能通过低训练误差覆盖实际场景异常。下一步需要解决成像设置/工作距离一致性、标定板和边缘验证问题；具体原因尚未确定。本次没有进入第三步、没有匹配、建图或 BA，也没有释放焦距来掩盖问题。
"""
)
print(out / "报告.md")
