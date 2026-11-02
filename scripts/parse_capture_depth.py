# 校验并解析 ARKit 深度文件，输出统计、数组和深度/置信度预览。
"""Validate and decode the supplied ARKit sceneDepth export, without reconstructing."""

import argparse, hashlib, json
from pathlib import Path
import numpy as np, cv2
from PIL import Image, ImageDraw


def digest(p):
    # 读取 p 文件并返回 SHA-256 十六进制摘要，用于数据一致性检查。
    return hashlib.sha256(p.read_bytes()).hexdigest()


def save(p, v):
    # 将对象 v 写入 p 指定的 UTF-8 JSON 文件；禁止 NaN/Infinity，避免输出非法数值。
    p.write_text(json.dumps(v, ensure_ascii=False, indent=2, allow_nan=False))


def run(source, out):
    # 读取 source 下逐帧 RGB-D 文件并校验，向新目录 out 写入深度数组、统计 JSON 和预览图；无返回值。
    out.mkdir(parents=True, exist_ok=False)
    rows = []
    arrays = {}
    failures = []
    order = json.loads((source / "order.json").read_text())
    names = [r["folder"] for r in order]
    assert len(names) == len(set(names))
    for name in names:
        f = source / name
        try:
            c = json.loads((f / "calibration.json").read_text())
            d = json.loads((f / c["depth_metadata_file"]).read_text())
            assert c["schema_version"] == 2 and c["depth_available"] is True
            assert (
                d["source"] == "ARKit.ARFrame.sceneDepth"
                and d["dtype"] == "float32"
                and d["byte_order"] == "little"
                and d["units"] == "meters"
            )
            assert (
                d["layout"] == "row-major tightly packed"
                and d["measurement"] == "distance from camera plane (Z)"
            )
            assert (
                d["coordinate_space"]
                == "native sensor orientation; aligned to capturedImage at lower resolution"
            )
            w, h = d["width"], d["height"]
            dp = (f / d["file"]).resolve()
            cp = (f / d["confidence_file"]).resolve()
            assert dp.is_relative_to(f.resolve()) and cp.is_relative_to(f.resolve())
            assert (
                dp.stat().st_size == w * h * 4
                and cp.stat().st_size == w * h
                and d["confidence_dtype"] == "uint8"
            )
            depth = np.fromfile(dp, dtype="<f4").reshape(h, w)
            conf = np.fromfile(cp, dtype="uint8").reshape(h, w)
            assert np.isin(conf, [0, 1, 2]).all()
            with Image.open(f / c["image_file"]) as im:
                im.load()
                assert (
                    im.size
                    == (c["image_width"], c["image_height"])
                    == (d["rgb_width"], d["rgb_height"])
                )
                assert im.getexif().get(274, 1) == c["exif_orientation"] == 1
                embedded = im.getexif().get_ifd(34665).get(37510)
                assert embedded is not None
                if isinstance(embedded, bytes):
                    embedded = embedded.removeprefix(b"ASCII\0\0\0").decode("utf-8")
                assert json.loads(embedded) == c
            assert d["frame_timestamp_seconds"] == c["frame_timestamp_seconds"]
            k = np.array(d["K_depth_rows"])
            rgbk = np.array(c["K_rows"])
            assert (
                k.shape == (3, 3) and np.isfinite(k).all() and min(k[0, 0], k[1, 1]) > 0
            )
            sx = w / d["rgb_width"]
            sy = h / d["rgb_height"]
            expected = np.diag([sx, sy, 1]) @ rgbk
            assert np.allclose(k, expected, atol=1e-7, rtol=0)
            valid = np.isfinite(depth) & (depth > 0)
            v = depth[valid]

            def stats(mask):
                # 统计当前帧 depth 中 mask 选中的像素，返回数量及米制最小值、中位数、P95、最大值；空集数值为 None。
                x = depth[mask]
                return dict(
                    count=int(mask.sum()),
                    min_m=float(x.min()) if len(x) else None,
                    median_m=float(np.median(x)) if len(x) else None,
                    p95_m=float(np.percentile(x, 95)) if len(x) else None,
                    max_m=float(x.max()) if len(x) else None,
                )

            row = dict(
                photo=name,
                status="parsed",
                rgb_size=[d["rgb_width"], d["rgb_height"]],
                depth_size=[w, h],
                pixels=w * h,
                valid=stats(valid),
                valid_percent=float(valid.mean() * 100),
                invalid_nonfinite=int((~np.isfinite(depth)).sum()),
                invalid_nonpositive=int((np.isfinite(depth) & (depth <= 0)).sum()),
                confidence_counts={str(i): int((conf == i).sum()) for i in range(3)},
                confidence_percent={
                    str(i): float((conf == i).mean() * 100) for i in range(3)
                },
                valid_by_confidence={
                    str(i): stats(valid & (conf == i)) for i in range(3)
                },
                timestamp=d["frame_timestamp_seconds"],
                metadata=d,
                calibration=c,
                checks=dict(
                    byte_lengths=True,
                    rgb_size=True,
                    exif_json_equal=True,
                    frame_timestamp_equal=True,
                    depth_K_simple_scale_matches=True,
                ),
                hashes={
                    p.name: digest(p)
                    for p in [
                        f / "image.jpg",
                        f / "calibration.json",
                        f / "depth.json",
                        dp,
                        cp,
                    ]
                },
            )
            rows.append(row)
            arrays[name] = (depth, conf, valid)
            np.savez_compressed(
                out / f"{int(name):02d}-depth.npz",
                depth_m=depth,
                confidence=conf,
                valid_mask=valid,
                K_depth=k,
            )
        except Exception as e:
            failures.append(dict(photo=name, error=type(e).__name__ + ": " + str(e)))
    allv = np.concatenate([z[v] for z, c, v in arrays.values()])
    lo = 0.0
    hi = float(np.percentile(allv, 99))
    pan = Image.new("RGB", (1200, len(rows) * 175), (24, 29, 36))
    draw = ImageDraw.Draw(pan)
    for i, r in enumerate(rows):
        name = r["photo"]
        depth, conf, valid = arrays[name]
        norm = np.clip((depth - lo) / (hi - lo), 0, 1)
        norm = np.nan_to_num(norm)
        heat = cv2.cvtColor(
            cv2.applyColorMap((norm * 255).astype("uint8"), cv2.COLORMAP_TURBO),
            cv2.COLOR_BGR2RGB,
        )
        heat[~valid] = 0
        colors = np.array(
            [[220, 65, 65], [240, 190, 60], [40, 190, 100]], dtype="uint8"
        )
        ci = colors[conf]
        Image.fromarray(heat).save(out / f"{int(name):02d}-depth.png")
        Image.fromarray(ci).save(out / f"{int(name):02d}-confidence.png")
        rgb = Image.open(source / name / "image.jpg")
        rgb.thumbnail((200, 150))
        y = i * 175
        pan.paste(rgb, (0, y + 20))
        pan.paste(Image.fromarray(heat).resize((200, 150)), (210, y + 20))
        pan.paste(Image.fromarray(ci).resize((200, 150)), (420, y + 20))
        draw.text((5, y + 3), f"Photo {name} / RGB", fill="white")
        draw.text((215, y + 3), f"Z: 0 to {hi:.2f} m", fill="white")
        draw.text(
            (425, y + 3),
            "Confidence: red low / yellow medium / green high",
            fill="white",
        )
        v = r["valid"]
        draw.text(
            (640, y + 35),
            f"Valid {r['valid_percent']:.2f}% | high confidence {r['confidence_percent']['2']:.2f}%",
            fill="white",
        )
        draw.text(
            (640, y + 65),
            f"Min {v['min_m']:.3f} | median {v['median_m']:.3f} | max {v['max_m']:.3f} m",
            fill="white",
        )
    pan.save(out / "depth-overview.jpg", quality=92)
    save(
        out / "report.json",
        dict(
            source=str(source.resolve()),
            images=rows,
            failures=failures,
            visualization=dict(
                colormap="OpenCV TURBO: low blue to high red",
                range_m=[lo, hi],
                clipped_at_global_p99=True,
                invalid="black",
            ),
            notes=[
                "Depth is camera-plane Z, not radial range.",
                "Confidence labels are categories, not calibrated probability.",
                "K_depth provided by exporter uses simple scaling, no half-pixel offset. Alignment verified only against metadata, not independent geometry.",
                "No per-frame world poses present in calibration; frames are not fused.",
            ],
        ),
    )
    print("photo valid% min median p95 max high%")
    for r in rows:
        v = r["valid"]
        print(
            r["photo"],
            round(r["valid_percent"], 2),
            *[round(v[k], 3) for k in ["min_m", "median_m", "p95_m", "max_m"]],
            round(r["confidence_percent"]["2"], 2),
        )
    print("failures", failures)


if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("source", type=Path)
    p.add_argument("output", type=Path)
    a = p.parse_args()
    run(a.source, a.output)
