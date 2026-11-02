# 准备拍摄数据和后续处理使用的图像。
"""Non-destructive, audited preparation of this capture batch's 8-bit HEIC SDR bases."""

import argparse, datetime, hashlib, json
from io import BytesIO
from pathlib import Path
import cv2
import numpy as np
from PIL import Image, ImageCms, ExifTags
import pillow_heif


def main():
    # 命令行入口：解码拍摄图像、处理方向和色彩空间，将准备好的图像及 manifest.json 写入 --output。
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    args.output.mkdir(parents=True, exist_ok=False)
    pillow_heif.register_heif_opener()
    srgb = ImageCms.createProfile("sRGB")
    records = []
    for group in ["标定照片", "独立验证照片", "室内照片"]:
        dest = args.output / group
        dest.mkdir()
        paths = sorted(Path(group).glob("*.HEIC"))
        for p in paths:
            raw = p.read_bytes()
            digest = hashlib.sha256(raw).hexdigest()
            h = pillow_heif.open_heif(p, convert_hdr_to_8bit=False)
            if h.info["bit_depth"] != 8 or h.mode != "RGB":
                raise ValueError(
                    f"{p}: high-bit-depth HDR conversion not implemented; do not silently quantize"
                )
            with Image.open(p) as im:
                im.load()
                ex = dict(im.getexif())
                ex.update(im.getexif().get_ifd(34665))
                icc = im.info.get("icc_profile")
                if not icc:
                    raise ValueError(
                        f"{p}: missing ICC profile; this batch requires explicit color identification"
                    )
                profile = ImageCms.ImageCmsProfile(BytesIO(icc))
                description = ImageCms.getProfileDescription(profile).strip()
                if description not in ["Display P3", "sRGB", "sRGB IEC61966-2.1"]:
                    raise ValueError(f"{p}: unsupported profile {description}")
                # libheif applies container transform; plugin normalizes EXIF. Do not exif_transpose again.
                upright = ImageCms.profileToProfile(
                    im, profile, srgb, renderingIntent=1, outputMode="RGB"
                )
                out = dest / (p.stem + ".png")
                upright.save(out, icc_profile=ImageCms.ImageCmsProfile(srgb).tobytes())
                rgb = np.asarray(upright)
                scale = min(1, 1024 / max(upright.size))
                small = cv2.resize(
                    rgb,
                    (round(rgb.shape[1] * scale), round(rgb.shape[0] * scale)),
                    interpolation=cv2.INTER_AREA,
                )
                gray = cv2.cvtColor(small, cv2.COLOR_RGB2GRAY)
                r = dict(
                    source=str(p.resolve()),
                    sha256=digest,
                    bytes=len(raw),
                    group=group,
                    normalized_file=str(out.resolve()),
                    size_wh=list(upright.size),
                    metadata={
                        str(ExifTags.TAGS.get(k, k)): str(v)
                        for k, v in ex.items()
                        if k != 37500
                    },
                    color=dict(
                        source=description,
                        icc_sha256=hashlib.sha256(icc).hexdigest(),
                        destination="sRGB",
                        engine="Pillow ImageCms / LittleCMS",
                        intent="relative_colorimetric",
                        hdr_policy="Use embedded 8-bit SDR base; gain-map contribution fixed to zero, no HDR expansion",
                        auxiliary_types=list(h.info.get("aux", {})),
                        bit_depth=8,
                    ),
                    geometry=dict(
                        decoder="pillow-heif 1.8.0 / libheif",
                        container_orientation_applied=True,
                        original_exif_orientation=im.info.get("original_orientation"),
                        output_orientation=1,
                        crop=None,
                        resize=None,
                        original_encoded_exif_wh=[ex.get(40962), ex.get(40963)],
                    ),
                    preflight=dict(
                        laplacian_variance=float(cv2.Laplacian(gray, cv2.CV_64F).var()),
                        dark_fraction=float(np.mean(gray < 10)),
                        bright_fraction=float(np.mean(gray > 245)),
                        note="Before undistortion; no invalid border exists yet",
                    ),
                )
                records.append(r)
                print(group, p.name, description, flush=True)
            if hashlib.sha256(p.read_bytes()).hexdigest() != digest:
                raise RuntimeError("Source changed during preparation")
            (args.output / "manifest.json").write_text(
                json.dumps(records, ensure_ascii=False, indent=2, default=str)
            )
    print("Prepared", len(records), "images")


if __name__ == "__main__":
    main()
