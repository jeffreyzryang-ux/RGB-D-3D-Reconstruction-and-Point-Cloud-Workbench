# 准备标定所需的 JPEG 图像。
"""Prepare only calibration/held-out JPEG photos, preserving originals and provenance."""

import argparse, hashlib, json
from pathlib import Path
from io import BytesIO
import cv2, numpy as np
from PIL import Image, ImageOps, ImageCms

p = argparse.ArgumentParser()
p.add_argument("--output", type=Path, required=True)
a = p.parse_args()
a.output.mkdir(parents=True, exist_ok=False)
cv2.setNumThreads(4)
records = []
srgb = ImageCms.createProfile("sRGB")
for group in ["标定照片", "独立验证照片"]:
    (a.output / group).mkdir()
    for source in sorted(Path(group).glob("*.jpg")):
        digest = hashlib.sha256(source.read_bytes()).hexdigest()
        with Image.open(source) as im:
            im.load()
            size = im.size
            ex = im.getexif()
            orientation = ex.get(274, 1)
            tags = dict(ex)
            tags.update(ex.get_ifd(34665))
            icc = im.info.get("icc_profile")
            im = ImageOps.exif_transpose(im)
            if not icc:
                raise ValueError(f"{source}: missing ICC profile")
            profile = ImageCms.ImageCmsProfile(BytesIO(icc))
            description = ImageCms.getProfileDescription(profile).strip()
            rgb = ImageCms.profileToProfile(
                im, profile, srgb, renderingIntent=1, outputMode="RGB"
            )
            w, h = rgb.size
            s = min(1, 2000 / max(w, h))
            wh = (round(w * s), round(h * s))
            work = cv2.resize(np.asarray(rgb), wh, interpolation=cv2.INTER_LINEAR)
            target = a.output / group / (source.stem + ".png")
            Image.fromarray(work).save(
                target, icc_profile=ImageCms.ImageCmsProfile(srgb).tobytes()
            )
            records.append(
                dict(
                    source=str(source.resolve()),
                    sha256=digest,
                    group=group,
                    working_file=str(target.resolve()),
                    source_wh=size,
                    upright_wh=[w, h],
                    working_wh=wh,
                    exif_orientation=orientation,
                    output_orientation=1,
                    orientation_processing="Pillow ImageOps.exif_transpose once",
                    color=dict(
                        source=description,
                        destination="sRGB",
                        icc_sha256=hashlib.sha256(icc).hexdigest(),
                        intent="relative_colorimetric",
                        hdr_policy="JPEG SDR base only; no auxiliary HDR expansion",
                    ),
                    resize=dict(
                        sx=wh[0] / w,
                        sy=wh[1] / h,
                        api="cv2.resize INTER_LINEAR",
                        pixel_mapping="u_out=sx*(u_in+0.5)-0.5; v likewise",
                        crop=None,
                    ),
                    metadata={str(k): str(v) for k, v in tags.items() if k != 37500},
                )
            )
        print(group, source.name, flush=True)
(a.output / "manifest.json").write_text(
    json.dumps(records, ensure_ascii=False, indent=2)
)
(a.output / "capture-settings.json").write_text(
    json.dumps(
        dict(
            square_mm=20,
            same_phone_lens_zoom_focus_mode=True,
            source="user confirmation 2026-10-08",
            scope="calibration and independent validation only",
        ),
        indent=2,
    )
)
