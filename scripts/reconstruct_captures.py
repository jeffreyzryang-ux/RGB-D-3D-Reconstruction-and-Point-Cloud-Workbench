# 导入逐帧内参，执行特征匹配与 SfM，输出相机位姿和稀疏点云。
"""Offline per-frame ARKit capture import and fixed-intrinsics SfM (PyCOLMAP 4.2.1)."""

import argparse, hashlib, io, json, shutil, sqlite3, time
from pathlib import Path
import cv2
import numpy as np
from PIL import Image, ImageCms
import pycolmap as pc


def save(path, obj):
    # 将 obj 写入 path 指定的格式化 JSON；无法直接编码的对象转为字符串，无返回值。
    Path(path).write_text(json.dumps(obj, ensure_ascii=False, indent=2, default=str))


def sha(path):
    # 读取 path 文件并返回 SHA-256 十六进制摘要，用于追踪输入是否发生变化。
    return hashlib.sha256(Path(path).read_bytes()).hexdigest()


def run(source, out, allow_small_batch=False):
    # 读取 source 拍摄批次，使用逐帧内参进行 SfM；向 out 写入图像、相机、稀疏模型与报告。allow_small_batch 控制小批次许可。
    start = time.time()
    out.mkdir(parents=True, exist_ok=False)
    for folder in ["originals", "images", "gray", "sparse"]:
        (out / folder).mkdir()
    records, excluded, seen_ids, seen_hashes = [], [], set(), {}
    folders = sorted(
        [p for p in source.iterdir() if p.is_dir()],
        key=lambda p: (
            not p.name.isdigit(),
            int(p.name) if p.name.isdigit() else p.name,
        ),
    )
    if (source / "order.json").exists():
        order = json.loads((source / "order.json").read_text())
        names = [x["folder"] for x in order]
        if len(set(names)) != len(names) or set(names) != {p.name for p in folders}:
            raise ValueError("order.json does not uniquely cover capture folders")
        folders = [source / n for n in names]
        shutil.copy2(source / "order.json", out / "order-source.json")
    for folder in folders:
        try:
            j = folder / "calibration.json"
            c = json.loads(j.read_text())
            f = (folder / c["image_file"]).resolve()
            if not f.is_relative_to(folder.resolve()):
                raise ValueError("image_file escapes capture folder")
            dest = out / "originals" / folder.name
            dest.mkdir()
            shutil.copy2(j, dest / "calibration.json")
            shutil.copy2(f, dest / f.name)
            if (
                c["schema_version"] not in (1, 2)
                or c["source"] != "ARKit.ARFrame"
                or c["units"] != "pixels"
            ):
                raise ValueError("unsupported schema/source/units")
            if (
                c["coordinate_space"]
                != "capturedImage native sensor orientation; no pixel rotation or crop"
            ):
                raise ValueError("unsupported coordinates")
            if c["capture_id"] in seen_ids:
                raise ValueError("duplicate capture_id")
            seen_ids.add(c["capture_id"])
            k = np.array(c["K_rows"], dtype=float)
            expected = np.array(
                [[c["fx"], 0, c["cx"]], [0, c["fy"], c["cy"]], [0, 0, 1]]
            )
            if (
                k.shape != (3, 3)
                or not np.isfinite(k).all()
                or not np.allclose(k, expected, rtol=0, atol=1e-6)
                or min(k[0, 0], k[1, 1]) <= 0
            ):
                raise ValueError("invalid K")
            if c["distortion_coefficients"] is not None:
                raise ValueError("measured distortion requires a separate adapter")
            if f.stat().st_size > 30_000_000:
                raise ValueError("image exceeds 30 MB")
            digest = sha(f)
            if digest in seen_hashes:
                raise ValueError(
                    "duplicate image; inspect parameter conflict: "
                    + seen_hashes[digest]
                )
            seen_hashes[digest] = folder.name
            with Image.open(f) as im:
                im.load()
                if im.format not in ["JPEG", "PNG"]:
                    raise ValueError("unsupported decoder for this capture adapter")
                if (
                    im.size != (c["image_width"], c["image_height"])
                    or im.getexif().get(274, 1) != c["exif_orientation"]
                    or c["exif_orientation"] != 1
                ):
                    raise ValueError("size/orientation mismatch")
                embedded = im.getexif().get_ifd(34665).get(37510)
                if embedded:
                    if isinstance(embedded, bytes):
                        embedded = embedded.removeprefix(b"ASCII\0\0\0").decode("utf-8")
                    if json.loads(embedded) != c:
                        raise ValueError("EXIF UserComment conflict")
                icc = im.info.get("icc_profile")
                rgb = im.convert("RGB")
                if icc:
                    rgb = ImageCms.profileToProfile(
                        rgb,
                        ImageCms.ImageCmsProfile(io.BytesIO(icc)),
                        ImageCms.createProfile("sRGB"),
                        outputMode="RGB",
                    )
                color = "ICC converted to sRGB" if icc else "unknown; assumed sRGB"
                w, h = rgb.size
                scale = min(1, 2000 / max(w, h))
                nw, nh = round(w * scale), round(h * scale)
                rgb = (
                    rgb.resize((nw, nh), Image.Resampling.LANCZOS) if scale < 1 else rgb
                )
                transform = np.array(
                    [
                        [nw / w, 0, (nw / w - 1) / 2],
                        [0, nh / h, (nh / h - 1) / 2],
                        [0, 0, 1],
                    ]
                )
                kw = transform @ k
                name = f"{len(records)+1:04d}.png"
                rgb.save(
                    out / "images" / name,
                    icc_profile=ImageCms.ImageCmsProfile(
                        ImageCms.createProfile("sRGB")
                    ).tobytes(),
                )
                g = cv2.cvtColor(np.array(rgb), cv2.COLOR_RGB2GRAY)
                gs = min(1, 1024 / max(g.shape))
                g = cv2.resize(
                    g, (round(nw * gs), round(nh * gs)), interpolation=cv2.INTER_AREA
                )
                cv2.imwrite(str(out / "gray" / name), g)
                small = cv2.resize(g, (32, 32)).astype(np.float32)
                dct = cv2.dct(small)[:8, :8].ravel()
                bits = dct > np.median(dct[1:])
                records.append(
                    dict(
                        folder=folder.name,
                        name=name,
                        image_id=hashlib.sha256(
                            (folder.name + digest).encode()
                        ).hexdigest()[:24],
                        image_sha256=digest,
                        calibration_sha256=sha(j),
                        calibration=c,
                        K_work=kw.tolist(),
                        transform=transform.tolist(),
                        color=color,
                        width=nw,
                        height=nh,
                        phash="".join("1" if v else "0" for v in bits),
                        gray_scale=gs,
                        laplacian=float(cv2.Laplacian(g, cv2.CV_64F).var()),
                        dark_fraction=float((g < 10).mean()),
                        bright_fraction=float((g > 245).mean()),
                        undistortion_applied=False,
                        distortion_status="unmeasured",
                        work_sha256=sha(out / "images" / name),
                    )
                )
        except Exception as e:
            excluded.append(dict(folder=folder.name, error=str(e)))
    manifest = dict(
        records=records,
        excluded=excluded,
        order_source=(
            "provided order.json"
            if (source / "order.json").exists()
            else "folder order"
        ),
        order_confirmed=False,
        versions=dict(
            pycolmap=pc.__version__, opencv=cv2.__version__, numpy=np.__version__
        ),
        pixel_convention="ARKit K treated as integer pixel centers; COLMAP principal point +0.5; source convention requires empirical validation",
        near_duplicates=[
            [a["name"], b["name"]]
            for i, a in enumerate(records)
            for b in records[i + 1 :]
            if sum(x != y for x, y in zip(a["phash"], b["phash"])) <= 4
        ],
    )
    manifest["thresholds"] = {"laplacian_warning_below": 45}
    for record in records:
        record["clarity_warning"] = record["laplacian"] < 45
    save(out / "manifest.json", manifest)
    minimum = 3 if allow_small_batch else 10
    manifest["small_batch_diagnostic"] = allow_small_batch
    save(out / "manifest.json", manifest)
    if not minimum <= len(records) <= 200:
        raise ValueError(f"need {minimum}–200 valid captures; see manifest")
    if (
        sum(p.stat().st_size for p in (out / "originals").rglob("*") if p.is_file())
        > 2_000_000_000
    ):
        raise ValueError("batch exceeds 2 GB")
    dbpath = out / "database.db"
    extraction = pc.FeatureExtractionOptions()
    extraction.num_threads = 4
    extraction.sift.max_num_features = 8192
    reader = pc.ImageReaderOptions()
    reader.camera_model = "PINHOLE"
    pc.extract_features(
        dbpath,
        out / "images",
        camera_mode=pc.CameraMode.PER_IMAGE,
        reader_options=reader,
        extraction_options=extraction,
        device=pc.Device.cpu,
    )
    with pc.Database.open(dbpath) as db:
        for r in records:
            im = db.read_image_with_name(r["name"])
            camera = db.read_camera(im.camera_id)
            k = np.array(r["K_work"])
            camera.params = np.array([k[0, 0], k[1, 1], k[0, 2] + 0.5, k[1, 2] + 0.5])
            camera.has_prior_focal_length = True
            db.update_camera(camera)
            r["colmap_image_id"] = im.image_id
            r["camera_id"] = im.camera_id
            r["features"] = db.num_keypoints_for_image(im.image_id)
    # COLMAP's extraction limit is soft (octave/orientation expansion). Enforce
    # the plan's hard cap on aligned keypoint/descriptor rows before matching.
    con = sqlite3.connect(dbpath)
    for r in records:
        iid = r["colmap_image_id"]
        rows, cols, blob = con.execute(
            "select rows,cols,data from keypoints where image_id=?", (iid,)
        ).fetchone()
        if rows > 8192:
            kp = np.frombuffer(blob, dtype=np.float32).reshape(rows, cols)
            scales = np.abs(kp[:, 2] * kp[:, 5] - kp[:, 3] * kp[:, 4])
            selected = np.sort(np.argsort(-scales, kind="stable")[:8192])
            dr, dc, db = con.execute(
                "select rows,cols,data from descriptors where image_id=?", (iid,)
            ).fetchone()
            assert dr == rows
            desc = np.frombuffer(db, dtype=np.uint8).reshape(dr, dc)
            con.execute(
                "update keypoints set rows=?,data=? where image_id=?",
                (8192, kp[selected].tobytes(), iid),
            )
            con.execute(
                "update descriptors set rows=?,data=? where image_id=?",
                (8192, desc[selected].tobytes(), iid),
            )
            r["features_before_cap"] = rows
            r["features"] = 8192
    con.commit()
    con.close()
    manifest["feature_cap_policy"] = (
        "8192 aligned rows; largest affine scale determinant, stable ties"
    )
    matching = pc.FeatureMatchingOptions()
    matching.num_threads = 4
    verification = pc.TwoViewGeometryOptions()
    verification.min_num_inliers = 30
    verification.min_inlier_ratio = 0.2
    verification.ransac.max_error = 4
    verification.ransac.confidence = 0.999
    verification.ransac.random_seed = 0
    options = pc.IncrementalPipelineOptions()
    options.num_threads = 4
    options.random_seed = 0
    options.min_model_size = 3
    options.min_num_matches = 30
    options.ba_refine_focal_length = False
    options.ba_refine_principal_point = False
    options.ba_refine_extra_params = False
    options.mapper.abs_pose_refine_focal_length = False
    options.mapper.abs_pose_refine_extra_params = False
    options.mapper.random_seed = 0
    options.triangulation.random_seed = 0
    save(
        out / "config.json",
        dict(
            extraction=extraction.todict(),
            matching=matching.todict(),
            verification=verification.todict(),
            mapper=options.todict(),
        ),
    )
    save(out / "manifest.json", manifest)
    pc.match_exhaustive(
        dbpath,
        matching_options=matching,
        verification_options=verification,
        device=pc.Device.cpu,
    )
    models = pc.incremental_mapping(
        dbpath, out / "images", out / "sparse", options=options
    )
    summaries = []
    for idx, rec in models.items():
        folder = out / "sparse" / str(idx)
        rec.write_text(folder)
        rec.export_PLY(folder / "points.ply")
        cameras = []
        for iid, im in rec.images.items():
            pose = im.cam_from_world()
            cameras.append(
                dict(
                    image_id=iid,
                    name=im.name,
                    camera_id=im.camera_id,
                    Rcw=pose.rotation.matrix().tolist(),
                    tcw=pose.translation.tolist(),
                    center=im.projection_center().tolist(),
                    intrinsics=rec.cameras[im.camera_id].params.tolist(),
                )
            )
        points = []
        angles = []
        lengths = []
        errors = []
        for pid, p in rec.points3D.items():
            rays = [
                p.xyz - rec.images[e.image_id].projection_center()
                for e in p.track.elements
            ]
            rays = np.array(rays)
            rays /= np.linalg.norm(rays, axis=1)[:, None]
            angle = float(np.degrees(np.arccos(np.clip(rays @ rays.T, -1, 1))).max())
            angles.append(angle)
            lengths.append(len(rays))
            errors.append(p.error)
            points.append(
                dict(
                    id=pid,
                    xyz=p.xyz.tolist(),
                    rgb=p.color.tolist(),
                    error=p.error,
                    track_length=len(rays),
                    max_angle=angle,
                )
            )
        save(folder / "cameras.json", cameras)
        save(folder / "points.json", points)
        summaries.append(
            dict(
                model=idx,
                registered=rec.num_reg_images(),
                points=rec.num_points3D(),
                unregistered=[
                    r["name"]
                    for r in records
                    if r["name"] not in {c["name"] for c in cameras}
                ],
                mean_point_reprojection_error_percentiles=(
                    np.percentile(errors, [50, 90, 95, 99]).tolist() if errors else []
                ),
                max_triangulation_angle_percentiles=(
                    np.percentile(angles, [10, 50, 90]).tolist() if angles else []
                ),
                track_length_median=float(np.median(lengths)) if lengths else None,
                short_track_fraction=(
                    float(np.mean(np.array(lengths) <= 3)) if lengths else None
                ),
                units="relative",
            )
        )
    con = sqlite3.connect(dbpath)
    pairs = [
        dict(pair_id=p, inliers=n, geometry=config)
        for p, n, config in con.execute(
            "select pair_id,rows,config from two_view_geometries"
        )
    ]
    con.close()
    valid = [s for s in summaries if s["registered"] >= 3 and s["points"] > 0]
    rate = max([s["registered"] for s in valid], default=0) / len(records)
    report = dict(
        status=(
            "failed"
            if not valid
            else ("success" if rate >= 0.8 and len(valid) == 1 else "partial_success")
        ),
        models=summaries,
        main_registration_rate=rate,
        usable_images=len(records),
        expected_pairs=len(records) * (len(records) - 1) // 2,
        pairs=pairs,
        seconds=time.time() - start,
        limitations=[
            "Distortion unmeasured; PINHOLE is an approximation, not measured zero distortion.",
            "ARKit pixel center convention assumed; synthetic COLMAP adapter test cannot establish sensor convention.",
            "No metric scale or ground truth; no accuracy claim.",
            "Capture order is not user-confirmed; no trajectory drawn.",
            "Per-point mean reprojection errors reported, not observation residual quantiles.",
        ],
    )
    save(out / "report.json", report)
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", type=Path, default=Path("Captures"))
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument(
        "--allow-small-batch",
        action="store_true",
        help="Diagnostic only: allow 3–9 captures, leaving geometric thresholds unchanged",
    )
    args = parser.parse_args()
    run(args.source, args.output, args.allow_small_batch)
