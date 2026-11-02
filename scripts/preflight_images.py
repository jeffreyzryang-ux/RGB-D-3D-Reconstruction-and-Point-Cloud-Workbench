# 建模前检查图像，统计清晰度、曝光和重复特征等信息。
"""Plan step 1 only: immutable source archive, ICC conversion and quality checks."""

import argparse, hashlib, json, uuid, itertools, time, datetime, platform, importlib.metadata
from pathlib import Path
from io import BytesIO
import cv2, numpy as np
from PIL import Image, ImageOps, ImageCms, ExifTags


def phash(gray):
    # 将灰度图缩小后计算低频 DCT 感知哈希，返回整数；用于比较图像相似程度，不是文件完整性哈希。
    a = cv2.resize(gray, (32, 32), interpolation=cv2.INTER_AREA).astype(np.float32)
    low = cv2.dct(a)[:8, :8].ravel()
    bits = low > np.median(low[1:])
    bits[0] = False
    return int("".join("1" if b else "0" for b in bits), 2)


def orientation_matrix(orientation, w, h):
    # 根据 EXIF 方向和原始宽高返回 3×3 像素坐标变换矩阵，将原图坐标映射到摆正后的坐标。
    matrices = {
        1: [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
        2: [[-1, 0, w - 1], [0, 1, 0], [0, 0, 1]],
        3: [[-1, 0, w - 1], [0, -1, h - 1], [0, 0, 1]],
        4: [[1, 0, 0], [0, -1, h - 1], [0, 0, 1]],
        5: [[0, 1, 0], [1, 0, 0], [0, 0, 1]],
        6: [[0, -1, h - 1], [1, 0, 0], [0, 0, 1]],
        7: [[0, -1, h - 1], [-1, 0, w - 1], [0, 0, 1]],
        8: [[0, 1, 0], [-1, 0, w - 1], [0, 0, 1]],
    }
    if orientation not in matrices:
        raise ValueError("Invalid EXIF orientation")
    return np.asarray(matrices[orientation], dtype=float)


def main():
    # 命令行入口：读取 --images，检查图像质量和重复情况，将检查产物写入 --output。
    p = argparse.ArgumentParser()
    p.add_argument("--images", type=Path, required=True)
    p.add_argument("--output", type=Path, required=True)
    a = p.parse_args()
    a.output.mkdir(parents=True, exist_ok=False)
    cv2.setNumThreads(4)
    cv2.setRNGSeed(0)
    started = time.monotonic()
    files = sorted(
        x for x in a.images.iterdir() if x.is_file() and not x.name.startswith(".")
    )
    if not 10 <= len(files) <= 200:
        raise ValueError("Project requires 10–200 photos")
    if sum(x.stat().st_size for x in files) > 2_000_000_000:
        raise ValueError("Total exceeds 2 GB")
    for name in ["originals", "upright", "working", "gray", "metadata"]:
        (a.output / name).mkdir()
    srgb = ImageCms.createProfile("sRGB")
    rows = []
    seen = {}
    for source in files:
        raw = source.read_bytes()
        digest = hashlib.sha256(raw).hexdigest()
        iid = str(uuid.uuid5(uuid.NAMESPACE_URL, "sha256:" + digest))
        r = dict(
            image_id=iid,
            original_name=source.name,
            source=str(source.resolve()),
            sha256=digest,
            bytes=len(raw),
            batch=a.output.name,
            status="pending",
            warnings=[],
            aliases=[],
        )
        if digest in seen:
            seen[digest]["aliases"].append(source.name)
            r.update(
                status="exact_duplicate", canonical_image_id=seen[digest]["image_id"]
            )
            rows.append(r)
            continue
        seen[digest] = r
        archive = a.output / "originals" / source.name
        archive.write_bytes(raw)
        r["original_archive"] = str(archive.resolve())
        if len(raw) > 30_000_000:
            r.update(status="excluded", reason="file exceeds 30 MB")
            rows.append(r)
            continue
        try:
            with Image.open(BytesIO(raw)) as im:
                if im.format not in ["JPEG", "PNG", "MPO"]:
                    raise ValueError(
                        "This batch adapter accepts decoded JPEG/PNG only; unsupported format reported explicitly"
                    )
                if im.format == "MPO":
                    auxiliary = []
                    with Image.open(BytesIO(raw)) as multi:
                        for fi in range(1, multi.n_frames):
                            multi.seek(fi)
                            multi.load()
                            xmp = multi.info.get("xmp", b"").decode(
                                "utf-8", errors="replace"
                            )
                            if (
                                "hdrgainmap" not in xmp
                                or "<HDRToneMap:BaseRenditionIsHDR>0</HDRToneMap:BaseRenditionIsHDR>"
                                not in xmp
                            ):
                                raise ValueError(
                                    "Unsupported MPO auxiliary/base rendition; no guessed HDR conversion"
                                )
                            auxiliary.append(
                                dict(
                                    frame=fi,
                                    size_wh=list(multi.size),
                                    mode=multi.mode,
                                    xmp=xmp,
                                )
                            )
                    r["auxiliary_images"] = auxiliary
                    r["hdr_policy"] = (
                        "Verified SDR primary; gain-map contribution zero; auxiliary frame fully decoded, metadata retained"
                    )
                im.load()
                r["format"] = im.format
                r["source_wh"] = list(im.size)
                r["mode"] = im.mode
                if im.mode != "RGB":
                    raise ValueError(
                        "Unsupported pixel mode; no silent HDR or color quantization"
                    )
                ex = im.getexif()
                tags = dict(ex)
                tags.update(ex.get_ifd(34665))
                orientation = int(ex.get(274, 1))
                icc = im.info.get("icc_profile")
                if im.info.get("exif"):
                    (a.output / "metadata" / (iid + ".exif")).write_bytes(
                        im.info["exif"]
                    )
                r["metadata"] = {
                    str(ExifTags.TAGS.get(k, k)): str(v)
                    for k, v in tags.items()
                    if k != 37500
                }
                r["order"] = {
                    "candidate_time": str(tags.get(36867, "")),
                    "subsecond": str(tags.get(37521, "")),
                    "offset": str(tags.get(36881, "")),
                    "confirmed": False,
                    "note": "filename order used for reporting only",
                }
                upright = ImageOps.exif_transpose(im)
                if icc:
                    prof = ImageCms.ImageCmsProfile(BytesIO(icc))
                    rgb = ImageCms.profileToProfile(
                        upright, prof, srgb, renderingIntent=1, outputMode="RGB"
                    )
                    desc = ImageCms.getProfileDescription(prof).strip()
                    (a.output / "metadata" / (iid + ".icc")).write_bytes(icc)
                    r["color"] = {
                        "source": desc,
                        "source_confirmed": True,
                        "icc_sha256": hashlib.sha256(icc).hexdigest(),
                        "conversion": "LittleCMS relative colorimetric -> sRGB",
                        "hdr_policy": "Use decoded SDR primary image; no gain-map expansion",
                    }
                else:
                    rgb = upright.copy()
                    r["color"] = {
                        "source": "unknown",
                        "source_confirmed": False,
                        "conversion": "sRGB assumption, no known source transform",
                        "hdr_policy": "No confirmed HDR transfer function",
                    }
                    r["warnings"].append("unknown_color_assumed_sRGB")
                normal = Image.Exif()
                normal[274] = 1
                up = a.output / "upright" / (iid + ".png")
                rgb.save(
                    up,
                    icc_profile=ImageCms.ImageCmsProfile(srgb).tobytes(),
                    exif=normal,
                )
                r["upright_file"] = str(up.resolve())
                r["upright_sha256"] = hashlib.sha256(up.read_bytes()).hexdigest()
                w, h = rgb.size
                s = min(1, 2000 / max(w, h))
                wh = (round(w * s), round(h * s))
                work = cv2.resize(np.asarray(rgb), wh, interpolation=cv2.INTER_LINEAR)
                r["geometry"] = {
                    "decoder_applied_exif": False,
                    "exif_orientation": orientation,
                    "orientation_operation": "ImageOps.exif_transpose once",
                    "upright_wh": [w, h],
                    "working_wh": list(wh),
                    "output_orientation": 1,
                    "crop": None,
                    "resize_api": "cv2.INTER_LINEAR",
                    "sx": wh[0] / w,
                    "sy": wh[1] / h,
                    "pixel_mapping": "u_work=sx*(u_upright+0.5)-0.5; v likewise",
                    "undistortion_applied": False,
                }
                rotation = orientation_matrix(orientation, *r["source_wh"])
                sx, sy = wh[0] / w, wh[1] / h
                scaling = np.array(
                    [[sx, 0, (sx - 1) / 2], [0, sy, (sy - 1) / 2], [0, 0, 1]]
                )
                r["geometry"].update(
                    source_to_upright_matrix=rotation.tolist(),
                    source_to_work_matrix=(scaling @ rotation).tolist(),
                    pixel_origin="OpenCV integer pixel centers",
                )
                normal = Image.Exif()
                normal[274] = 1
                wp = a.output / "working" / (iid + ".png")
                Image.fromarray(work).save(
                    wp,
                    icc_profile=ImageCms.ImageCmsProfile(srgb).tobytes(),
                    exif=normal,
                )
                gray = cv2.cvtColor(work, cv2.COLOR_RGB2GRAY)
                gs = min(1, 1024 / max(wh))
                gray = cv2.resize(
                    gray,
                    (round(wh[0] * gs), round(wh[1] * gs)),
                    interpolation=cv2.INTER_AREA,
                )
                gp = a.output / "gray" / (iid + ".png")
                cv2.imwrite(str(gp), gray)
                lap = float(cv2.Laplacian(gray, cv2.CV_64F).var())
                dark = float(np.mean(gray < 10))
                bright = float(np.mean(gray > 245))
                ph = phash(gray)
                keypoints = cv2.SIFT_create(nfeatures=8192).detect(gray, None)
                grid = np.zeros((4, 4), dtype=int)
                for keypoint in keypoints:
                    x, y = keypoint.pt
                    grid[
                        min(3, int(y * 4 / gray.shape[0])),
                        min(3, int(x * 4 / gray.shape[1])),
                    ] += 1
                r["quality"] = {
                    "gray_wh": [gray.shape[1], gray.shape[0]],
                    "laplacian_variance": lap,
                    "dark_fraction": dark,
                    "bright_fraction": bright,
                    "phash64": f"{ph:016x}",
                    "sift_features": len(keypoints),
                    "sift_status": "Step 1 OpenCV CPU SIFT on <=1024 gray, count/distribution only; no descriptors/matching; not step 3 COLMAP features",
                    "sift_grid_4x4": grid.tolist(),
                    "sift_occupied_cells": int(np.count_nonzero(grid)),
                    "sift_largest_cell_fraction": float(
                        grid.max() / max(1, len(keypoints))
                    ),
                    "matching_assessment": "not executed; texture interpretation provisional",
                    "valid_pixels": "all; no undistortion or synthetic borders at this stage",
                }
                r["gray_sha256"] = hashlib.sha256(gp.read_bytes()).hexdigest()
                r["geometry"]["work_to_gray"] = {
                    "sx": gray.shape[1] / wh[0],
                    "sy": gray.shape[0] / wh[1],
                    "interpolation": "INTER_AREA",
                    "pixel_mapping": "u_gray=sx*(u_work+0.5)-0.5; v likewise",
                }
                if len(keypoints) < 300:
                    r["warnings"].append("sift_fewer_than_300")
                if lap < 45:
                    r["warnings"].append("possible_blur_or_low_texture")
                if dark > 0.5:
                    r["warnings"].append("dark_pixels_over_50_percent")
                if bright > 0.5:
                    r["warnings"].append("bright_pixels_over_50_percent")
                r.update(
                    status="usable",
                    working_file=str(wp.resolve()),
                    working_sha256=hashlib.sha256(wp.read_bytes()).hexdigest(),
                    gray_file=str(gp.resolve()),
                )
        except (OSError, ValueError, Image.DecompressionBombError) as exc:
            r.update(status="excluded", reason=str(exc))
        assert hashlib.sha256(source.read_bytes()).hexdigest() == digest
        rows.append(r)
        print(source.name, r["status"], r["warnings"], flush=True)
    usable = [r for r in rows if r["status"] == "usable"]
    pairs = []
    for x, y in itertools.combinations(usable, 2):
        distance = (
            int(x["quality"]["phash64"], 16) ^ int(y["quality"]["phash64"], 16)
        ).bit_count()
        if distance <= 4:
            pairs.append(
                dict(
                    images=[x["original_name"], y["original_name"]],
                    hamming_distance=distance,
                    action="warn only; neither removed",
                )
            )
    result = dict(
        step=1,
        status="completed" if len(usable) >= 10 else "stopped_insufficient_usable",
        usable_count=len(usable),
        input_count=len(files),
        total_bytes=sum(r["bytes"] for r in rows),
        thresholds={
            "max_file_bytes": 30_000_000,
            "max_total_bytes": 2_000_000_000,
            "laplacian_warning_below": 45,
            "exposure_fraction_above": 0.5,
            "phash_distance_at_most": 4,
        },
        quality_algorithm="gray from sRGB work image, INTER_AREA to max 1024; Laplacian CV_64F ksize=1; dark<10 bright>245",
        phash_algorithm="32x32 INTER_AREA gray; DCT top-left 8x8; threshold median excluding DC; DC bit zero; 64-bit stored",
        near_duplicates=pairs,
        images=rows,
        elapsed_seconds=time.monotonic() - started,
        calibration_status="Candidate from 20261008; room edge correction not accepted, not used by step 1",
    )
    result.update(
        created_at=datetime.datetime.now(datetime.timezone.utc).isoformat(),
        versions={
            x: importlib.metadata.version(x)
            for x in ["numpy", "opencv-python", "Pillow"]
        },
        python=platform.python_version(),
        threads=4,
        random_seed=0,
        scope="Only algorithm step 1; no calibration/undistortion/matching/reconstruction",
        sift_diagnostic_config={
            "engine": "OpenCV CPU",
            "nfeatures": 8192,
            "nOctaveLayers": 3,
            "contrastThreshold": 0.04,
            "edgeThreshold": 10,
            "sigma": 1.6,
            "descriptors_saved": False,
            "grid": [4, 4],
        },
        hdr_policy={
            "output": "SDR sRGB",
            "gain_map_weight": 0,
            "method": "Verified SDR base rendition; no HDR expansion; unsupported HDR conversion explicitly excluded",
        },
        script_sha256=hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),
    )
    result["thresholds"]["sift_warning_below"] = 300
    (a.output / "manifest.json").write_text(
        json.dumps(result, ensure_ascii=False, indent=2)
    )
    print(
        json.dumps(
            {k: v for k, v in result.items() if k not in ["images"]},
            ensure_ascii=False,
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
