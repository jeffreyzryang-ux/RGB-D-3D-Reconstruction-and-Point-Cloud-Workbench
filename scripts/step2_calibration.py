# 第二阶段相机标定处理脚本。
"""Plan step 2: audited calibration binding and diagnostic PINHOLE preparation."""

import json, hashlib, shutil, datetime, argparse
from pathlib import Path
import cv2, numpy as np, pycolmap
from PIL import Image, ImageCms
from scripts.geometry import (
    validate_calibration,
    resize_intrinsics,
    colmap_pinhole,
    undistort,
)


def main():
    # 读取命令行指定的标定与图像清单，去畸变并导出针孔相机参数、图像及转换清单。
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--calibration", type=Path, required=True)
    parser.add_argument("--image-manifest", type=Path, required=True)
    parser.add_argument("--capture-manifest", type=Path, required=True)
    args = parser.parse_args()
    root = Path.cwd()
    out = args.output.resolve()
    out.mkdir(parents=True, exist_ok=False)
    cv2.setNumThreads(4)
    for sub in ["images", "masks", "previews"]:
        (out / sub).mkdir()
    cp = args.calibration.resolve()
    raw = cp.read_bytes()
    cal = json.loads(raw)
    K, d, size = validate_calibration(cal)
    size = tuple(map(int, size))
    batchpath = args.image_manifest.resolve()
    batch = json.loads(batchpath.read_text())
    oldmanifest = json.loads(args.capture_manifest.read_text())
    ref = next(x for x in oldmanifest if x["group"] == "标定照片")
    params = colmap_pinhole(K)
    camera = pycolmap.Camera(
        camera_id=1, model="PINHOLE", width=size[0], height=size[1], params=params
    )
    rng = np.random.default_rng(20261008)
    X = rng.uniform(-1, 1, (100, 3))
    X[:, 2] = rng.uniform(2, 5, 100)
    cvproj = cv2.projectPoints(X, np.zeros(3), np.zeros(3), K, np.zeros(5))[0].reshape(
        -1, 2
    )
    cmproj = np.array([camera.img_from_cam(x) for x in X])
    np.testing.assert_allclose(cmproj, cvproj + 0.5, atol=1e-10)
    fullK = resize_intrinsics(K, size, tuple(ref["upright_wh"]))
    np.testing.assert_allclose(
        resize_intrinsics(fullK, tuple(ref["upright_wh"]), size), K, atol=1e-10
    )
    config = pycolmap.IncrementalPipelineOptions()
    config.ba_refine_focal_length = False
    config.ba_refine_principal_point = False
    config.ba_refine_extra_params = False
    config.mapper.abs_pose_refine_focal_length = False
    config.mapper.abs_pose_refine_extra_params = False
    reader = pycolmap.ImageReaderOptions()
    reader.camera_model = "PINHOLE"
    reader.camera_params = ",".join(map(str, params))
    reader.mask_path = out / "masks"
    records = []
    for r in batch["images"]:
        if r["status"] != "usable":
            continue
        assert hashlib.sha256(Path(r["source"]).read_bytes()).hexdigest() == r["sha256"]
        ip = Path(r["working_file"])
        assert hashlib.sha256(ip.read_bytes()).hexdigest() == r["working_sha256"]
        if r["geometry"]["undistortion_applied"]:
            raise ValueError("Refusing double undistortion")
        if (
            tuple(r["geometry"]["working_wh"]) != size
            or r["geometry"]["upright_wh"] != ref["upright_wh"]
        ):
            raise ValueError("Image size incompatibility")
        if r["metadata"]["LensModel"] != ref["metadata"]["42036"]:
            raise ValueError("Lens mismatch")
        if r["metadata"]["Model"] != ref["metadata"]["272"]:
            raise ValueError("Device mismatch")
        im = cv2.imread(str(ip))
        corrected, mask = undistort(im, K, d)
        name = r["image_id"] + ".png"
        target = out / "images" / name
        mp = out / "masks" / (name + ".png")
        ex = Image.Exif()
        ex[274] = 1
        Image.fromarray(cv2.cvtColor(corrected, cv2.COLOR_BGR2RGB)).save(
            target,
            icc_profile=ImageCms.ImageCmsProfile(
                ImageCms.createProfile("sRGB")
            ).tobytes(),
            exif=ex,
        )
        cv2.imwrite(str(mp), mask)
        cv2.imwrite(
            str(out / "previews" / (Path(r["original_name"]).stem + ".jpg")),
            cv2.resize(np.hstack([im, corrected]), (1200, 800)),
        )
        records.append(
            dict(
                image_id=r["image_id"],
                original_name=r["original_name"],
                source_sha256=r["sha256"],
                input_file=str(ip),
                input_sha256=r["working_sha256"],
                output_file=str(target),
                output_sha256=hashlib.sha256(target.read_bytes()).hexdigest(),
                mask_file=str(mp),
                mask_sha256=hashlib.sha256(mp.read_bytes()).hexdigest(),
                valid_fraction=float(np.mean(mask > 0)),
                camera_id=1,
                undistortion_count=1,
                crop=None,
                new_K=K.tolist(),
                intrinsics_for_output="PINHOLE; no remaining distortion parameters",
                original_to_work=r["geometry"],
            )
        )
    profile = dict(
        id=out.name,
        created_utc=datetime.datetime.now(datetime.timezone.utc).isoformat(),
        calibration_sha256=hashlib.sha256(raw).hexdigest(),
        source_calibration=str(cp),
        opencv=cv2.__version__,
        pycolmap=pycolmap.__version__,
        lens=ref["metadata"]["42036"],
        device=ref["metadata"]["272"],
        focal_length_mm=ref["metadata"]["37386"],
        equivalent_focal_length_mm=ref["metadata"]["41989"],
        zoom_ratio=None,
        focus_policy=None,
        imaging_mode=None,
        unknown_fields_note="Exact zoom/focus/mode details not supplied; user confirmed consistent settings on 2026-10-08. EXIF lens identity alone does not prove identical intrinsics.",
        size_wh=list(size),
        upright_source_wh=ref["upright_wh"],
        direction="portrait",
        square_mm=cal["square_size_mm"],
        training_images=[
            x
            for x in oldmanifest
            if x["group"] == "标定照片"
            and Path(x["source"]).stem + ".png" in {v["file"] for v in cal["views"]}
        ],
        submitted_images=[x for x in oldmanifest if x["group"] == "标定照片"],
        K=K.tolist(),
        dist=d.tolist(),
        calibration_capture_times=[
            x["metadata"].get("36867") for x in oldmanifest if x["group"] == "标定照片"
        ],
        validation_status="Independent board checks passed; prior room edge distortion risk unresolved",
        ready_for_reconstruction=False,
    )
    shutil.copy2(cp, out / "calibration.json")
    shutil.copy2(root / "requirements.lock.txt", out / "requirements.lock.txt")
    (out / "calibration-profile.json").write_text(
        json.dumps(profile, ensure_ascii=False, indent=2)
    )
    (out / "cameras.txt").write_text(
        "# Diagnostic candidate only; not accepted for reconstruction\n1 PINHOLE 1500 2000 "
        + " ".join(map(str, params))
        + "\n"
    )
    native = out / "adapter-test-model"
    native.mkdir()
    shutil.copy2(out / "cameras.txt", native / "cameras.txt")
    (native / "images.txt").write_text("")
    (native / "points3D.txt").write_text("")
    reloaded = pycolmap.Reconstruction(native)
    np.testing.assert_allclose(reloaded.cameras[1].params, params, atol=1e-12)
    report = dict(
        status="diagnostic_preparation_complete_acceptance_pending",
        ready_for_step3=False,
        input_manifest_sha256=hashlib.sha256(batchpath.read_bytes()).hexdigest(),
        calibration_profile=str(out / "calibration-profile.json"),
        images=records,
        shared_camera_id=1,
        pinhole_params=params,
        opencv_to_colmap_principal_point_shift=[0.5, 0.5],
        adapter_tests=dict(
            projection_samples=100,
            max_projection_disagreement_px=float(np.max(np.abs(cmproj - cvproj - 0.5))),
            resize_roundtrip=True,
            native_pinhole_readback=True,
            engine="pycolmap " + pycolmap.__version__,
        ),
        engine_config=dict(
            camera_mode="SINGLE", reader=reader.todict(), mapper=config.todict()
        ),
        executed=[
            "five_parameter_undistortion",
            "mask_generation",
            "pinhole_projection_test",
        ],
        not_executed=["SIFT", "matching", "mapper", "BA"],
    )
    (out / "manifest.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2, default=str)
    )
    assert cp.read_bytes() == raw
    print(
        json.dumps(
            {
                "images": len(records),
                "pinhole": params,
                "tests": report["adapter_tests"],
                "output": str(out),
            },
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
