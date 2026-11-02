# 历史第一阶段处理结果的报告生成脚本。
"""Verify and archive current step-1 run; no subsequent algorithms."""

import hashlib, json, shutil
from pathlib import Path
from PIL import Image, ImageDraw
import cv2, numpy as np

# 根据脚本位置定位项目，避免启动目录影响数据路径。
root = Path(__file__).resolve().parents[1]
src = root / "data/step1-20261013-v2"
out = root / "reports/20261013-step1-v2"
out.mkdir(parents=True, exist_ok=False)
r = json.loads((src / "manifest.json").read_text())
checks = []
canvas = Image.new("RGB", (1200, 4 * 310), "white")
draw = ImageDraw.Draw(canvas)
for i, x in enumerate(r["images"]):
    assert x["status"] == "usable"
    digest = x["sha256"]
    assert hashlib.sha256(Path(x["source"]).read_bytes()).hexdigest() == digest
    assert (
        hashlib.sha256(Path(x["original_archive"]).read_bytes()).hexdigest() == digest
    )
    for key, hkey in [
        ("upright_file", "upright_sha256"),
        ("working_file", "working_sha256"),
        ("gray_file", "gray_sha256"),
    ]:
        assert hashlib.sha256(Path(x[key]).read_bytes()).hexdigest() == x[hkey]
    with Image.open(x["upright_file"]) as up:
        up.load()
        assert up.size == tuple(x["geometry"]["upright_wh"])
        assert up.getexif().get(274) == 1
        assert up.info.get("icc_profile")
    with Image.open(x["working_file"]) as im:
        im.load()
        assert max(im.size) <= 2000
        assert im.getexif().get(274) == 1
        assert im.info.get("icc_profile")
        rgb = np.asarray(im)
        thumb = im.copy()
        thumb.thumbnail((380, 255))
        xx = i % 3 * 400
        yy = i // 3 * 310
        canvas.paste(thumb, (xx + (400 - thumb.width) // 2, yy + 45))
        draw.text(
            (xx + 8, yy + 5),
            f"{x['original_name']}  Lap={x['quality']['laplacian_variance']:.1f}  SIFT={x['quality']['sift_features']}",
            fill="black",
        )
        draw.text(
            (xx + 8, yy + 23),
            (
                "RISK: " + ", ".join(x["warnings"])
                if x["warnings"]
                else "No threshold warning"
            ),
            fill="red" if x["warnings"] else "green",
        )
    gray = cv2.imread(x["gray_file"], cv2.IMREAD_GRAYSCALE)
    assert max(gray.shape) <= 1024
    expected = cv2.cvtColor(rgb, cv2.COLOR_RGB2GRAY)
    expected = cv2.resize(
        expected, (gray.shape[1], gray.shape[0]), interpolation=cv2.INTER_AREA
    )
    assert np.array_equal(gray, expected)
    assert sum(map(sum, x["quality"]["sift_grid_4x4"])) == x["quality"]["sift_features"]
    assert x["geometry"]["undistortion_applied"] is False
    checks.append(
        dict(
            file=x["original_name"],
            original_archive_hash_verified=True,
            output_hashes_verified=True,
            orientation_and_dimensions_verified=True,
            gray_recomputed_identically=True,
            sift_grid_sum_verified=True,
        )
    )
canvas.save(out / "quality-contact-sheet.jpg")
shutil.copy2(src / "manifest.json", out / "manifest.json")
shutil.copy2(root / "scripts/preflight_images.py", out / "preflight_images.py")
shutil.copy2("/private/tmp/slam-step1-20261013-v2.log", out / "execution.log")
assert (
    hashlib.sha256((out / "preflight_images.py").read_bytes()).hexdigest()
    == r["script_sha256"]
)
(out / "artifact-verification.json").write_text(json.dumps(checks, indent=2))
rows = "\n".join(
    f"| {x['original_name']} | {x['quality']['laplacian_variance']:.1f} | {x['quality']['dark_fraction']*100:.2f}% | {x['quality']['bright_fraction']*100:.2f}% | {x['quality']['sift_features']} | {x['quality']['sift_occupied_cells']}/16 | {x['quality']['sift_largest_cell_fraction']*100:.1f}% | {'低纹理/模糊；SIFT少' if 'possible_blur_or_low_texture' in x['warnings'] else ('SIFT少' if x['warnings'] else '未触发阈值预警')} |"
    for x in r["images"]
)
(out / "报告.md").write_text(f"""# 具体算法第 1 步：原图、色彩转换与质量预检

**本次第一步执行完成，12/12 张可用，全部保留。仅执行第一步，未执行标定、去畸变、匹配或建图。** 处理当前“室内照片”目录的 01.jpg–12.jpg；没有使用上次已去畸变图作为输入。

## 按计划逐项执行

1. **原图保留**：将 12 张源文件逐字节归档到 `{src}/originals`，保存 SHA-256、原始文件名、稳定 image_id、原始 EXIF/ICC、元数据与批次 step1-20261013-v2。原文件和归档哈希均已复核一致，不覆盖旧批次。
2. **实际解码**：12 张 JPEG 均以 MPO 容器识别，主图及其增益辅助图逐个完整解码。输入总量 {r['total_bytes']:,} 字节；每张 ≤30,000,000 字节，总量 ≤2,000,000,000 字节，数量在 10–200 范围内。本批没有损坏、超限或不支持格式的排除项。
3. **实际色彩转换**：全部源 ICC 为 Display P3，使用 Pillow ImageCms / LittleCMS 相对色度意图转换到 sRGB，随后嵌入输出 sRGB ICC。不是仅替换标签。源 ICC 原字节及哈希均保存。遇未知色彩的分支会标记假设，但本批没有未知色彩文件。
4. **HDR 到 SDR 策略**：逐张保存增益图 XMP；其中 `BaseRenditionIsHDR=0` 明确表明主图为 SDR。固定 HDR 增益图权重为 0，直接选用文件内已有 SDR rendition，不先重建 HDR，也没有把位深截断当作色调映射。Gamma、增益范围、Offset、HDRCapacity 等源参数保存在各图辅助图元数据中。本批不是 PQ/HLG HDR 基底，不声称本适配器支持所有 HDR 格式。
5. **转正与工作图**：JPEG 解码器不自动转 EXIF；调用 ImageOps.exif_transpose 一次。本批 EXIF 方向均为 1，因此无实际旋转。完整 sRGB 转正副本为 4284×5712，彩色工作图为 1500×2000，输出方向标签均为 1。无裁剪，等比缩放。
6. **坐标记录**：保存原图到转正、原图到工作图的 3×3 变换矩阵；坐标采用像素中心，缩放公式 `u'=s(u+0.5)-0.5`。记录工作图到灰度图缩放。明确 `undistortion_applied=false`，无非线性去畸变、无人工黑边。
7. **灰度检查**：从 sRGB 工作图生成 768×1024 灰度检测图；使用 INTER_AREA 缩放、Laplacian CV_64F（ksize=1）方差、灰度 <10 / >245 占比、64 位 DCT 感知哈希及 CPU SIFT 数量/4×4 网格分布。灰度文件与从彩色工作图重新计算的结果逐像素一致。

## 检查结论

- 完全重复：0，SHA-256 唯一；重复处理逻辑保留一份并记录别名。
- 近似重复：0 对达到 pHash 距离 ≤4。感知哈希预警不用于自动删图，也不能证明所有近重复均被识别。
- 清晰度/纹理：07.jpg 的 Laplacian 方差低于 80，提示可能模糊或低纹理；其他图片未触发此阈值，不等于已证明清晰。
- 曝光：没有图片暗部或亮部占比超过 50%。
- SIFT：04–10.jpg 共 7 张低于 300，只提示纹理风险。未自动删除任何图片。

| 图片 | Laplacian 方差 | 暗部 | 亮部 | SIFT 数量 | 有特征网格 | 最大网格占比 | 预警 |
|---|---:|---:|---:|---:|---:|---:|---|
{rows}

这里 SIFT 仅是第一步的灰度预检，OpenCV CPU、最多目标 8192 个特征、默认参数及版本完整记录；没有保存描述子或匹配。它不代替第三步在去畸变有效区域上的 COLMAP SIFT，也不能据此确定照片能否连接。空间分布仅报告，不用未规定的集中度阈值删图。

初始阈值沿用计划：Laplacian <80，暗/亮占比 >50%，pHash 距离 ≤4，SIFT <300。它们是固定预处理条件下的预警起点，不是通用合格标准。

## 输出与复核

- [完整清单、元数据、哈希、变换与参数](manifest.json)
- [逐图输出核验](artifact-verification.json)
- [本次执行脚本快照](preflight_images.py) 和 [执行日志](execution.log)
- [原始归档]({src}/originals)、[完整转正 sRGB 副本]({src}/upright)、[彩色工作图]({src}/working)、[灰度检测图]({src}/gray)、[原始 EXIF/ICC]({src}/metadata)

八项现有几何/预处理单元测试通过，包括全部 8 种 EXIF 方向与 Pillow 实际像素变换一致性。此批 12 张原图、归档和输出均单独核验。v1 是本轮实现检查运行，v2 显式固定 OpenCV 随机种子并重新运行，作为本次最终交付；旧输出保留。

![质量预检总览](quality-contact-sheet.jpg)

第一步完成不代表标定或建图通过。后续步骤保持未执行。
""")
print(out / "报告.md")
