# 将中高置信度 LiDAR 深度投影到 SfM 世界坐标，恢复米制尺度并融合点云。
"""Fuse measured medium/high confidence ARKit depth using fixed SfM poses."""

import json, argparse
from pathlib import Path
import numpy as np, cv2, pycolmap as pc
from dense_cpu import ply
from reconstruct_captures import save


def run(source, sfm, out, model_id=0):
    # 使用 source 的实测深度与 sfm 中 model_id 指定的相机模型，估计米制尺度；向 out 写入融合点云、相机与质量报告。
    out.mkdir(parents=True, exist_ok=False)
    rec = pc.Reconstruction(sfm / "sparse" / str(model_id))
    manifest = json.loads((sfm / "manifest.json").read_text())
    frames = {}
    ratios = []
    scale_rows = []
    for row in manifest["records"]:
        iid = row["colmap_image_id"]
        if iid not in rec.images:
            continue
        folder = source / row["folder"]
        m = json.loads((folder / "depth.json").read_text())
        d = np.fromfile(folder / m["file"], dtype="<f4").reshape(
            m["height"], m["width"]
        )
        c = np.fromfile(folder / m["confidence_file"], dtype="uint8").reshape(d.shape)
        k = np.array(m["K_depth_rows"])
        valid = (c >= 1) & (c <= 2) & np.isfinite(d) & (d > 0)
        im = rec.images[iid]
        pose = im.cam_from_world()
        R = pose.rotation.matrix()
        t = pose.translation
        rv = []
        # Scale correspondences avoid depth discontinuities with 3x3 spread check.
        for pt in im.points2D:
            if not pt.has_point3D():
                continue
            u, v = (
                pt.xy
                / np.array(
                    [row["width"] / m["rgb_width"], row["height"] / m["rgb_height"]]
                )
                - 0.5
            ) * np.array([m["width"] / m["rgb_width"], m["height"] / m["rgb_height"]])
            u, v = int(round(u)), int(round(v))
            if (
                not (1 <= u < d.shape[1] - 1 and 1 <= v < d.shape[0] - 1)
                or not valid[v, u]
            ):
                continue
            patch = d[v - 1 : v + 2, u - 1 : u + 2]
            if not np.isfinite(patch).all() or patch.max() - patch.min() > 0.05:
                continue
            z = (R @ rec.points3D[pt.point3D_id].xyz + t)[2]
            if z > 0:
                rv.append(float(d[v, u] / z))
        ratios += rv
        scale_rows.append(
            dict(
                photo=row["folder"],
                samples=len(rv),
                median=float(np.median(rv)) if rv else None,
            )
        )
        frames[iid] = dict(
            photo=row["folder"],
            d=d,
            c=c,
            k=k,
            R=R,
            t=t,
            valid=valid,
            rgb=cv2.cvtColor(
                cv2.imread(str(sfm / "images" / row["name"])), cv2.COLOR_BGR2RGB
            ),
            metadata=m,
        )
    if len(ratios) < 30:
        raise ValueError("Insufficient scale correspondences")
    # SfM 尺度未定：以实测 Z / 稀疏点 Z 估计倍率，用 MAD 排除异常比例。
    ratios = np.array(ratios)
    med = np.median(ratios)
    mad = np.median(abs(ratios - med))
    keep = abs(ratios - med) <= max(3 * 1.4826 * mad, med * 0.02)
    scale = float(np.median(ratios[keep]))
    spread = float(np.std(ratios[keep]) / scale)
    # Explicitly fail rather than merge grossly incompatible depth/pose scales.
    if spread > 0.15:
        raise ValueError("Depth and sparse poses have inconsistent scale")
    if any(
        r["samples"] >= 30 and abs(r["median"] / scale - 1) > 0.15 for r in scale_rows
    ):
        raise ValueError("Per-frame LiDAR scale differs by more than 15 percent")
    xs = []
    colors = []
    ids = []
    perframe = []
    cameras = []
    for iid, f in frames.items():
        d = f["d"]
        y, x = np.indices(d.shape)
        valid = f["valid"]
        z = d[valid]
        uv = np.column_stack([x[valid], y[valid], np.ones(valid.sum())])
        # 反投影：相机点 = Z × K⁻¹[u,v,1]；这里数组按行存储，使用转置矩阵。
        xc = (uv @ np.linalg.inv(f["k"]).T) * z[:, None]
        t = f["t"] * scale
        # 位姿约定 X_camera = R X_world + t；平移先乘尺度，输出单位为米。
        world = (xc - t) @ f["R"]
        rgb = f["rgb"]
        u = (
            (x * f["metadata"]["rgb_width"] / d.shape[1] + 0.5)
            * rgb.shape[1]
            / f["metadata"]["rgb_width"]
            - 0.5
        ).astype("float32")
        v = (
            (y * f["metadata"]["rgb_height"] / d.shape[0] + 0.5)
            * rgb.shape[0]
            / f["metadata"]["rgb_height"]
            - 0.5
        ).astype("float32")
        col = cv2.remap(rgb, u, v, cv2.INTER_LINEAR)[valid]
        xs.append(world)
        colors.append(col)
        ids.append(np.full(len(z), iid))
        perframe.append(
            dict(
                photo=f["photo"],
                medium=int((valid & (f["c"] == 1)).sum()),
                high=int((valid & (f["c"] == 2)).sum()),
                accepted=len(z),
                low_excluded=int((f["c"] == 0).sum()),
            )
        )
        cameras.append(
            dict(
                photo=f["photo"],
                Rcw=f["R"].tolist(),
                tcw_m=t.tolist(),
                center_m=(-f["R"].T @ t).tolist(),
            )
        )
    xyz = np.concatenate(xs)
    rgb = np.concatenate(colors)
    fid = np.concatenate(ids)
    support = np.zeros(len(xyz), dtype="uint8")
    conflict = support.copy()
    for iid, f in frames.items():
        cam = xyz @ f["R"].T + f["t"] * scale
        proj = cam @ f["k"].T
        uv = np.rint(proj[:, :2] / proj[:, 2, None]).astype(int)
        u, v = uv.T
        ok = (
            (fid != iid)
            & (cam[:, 2] > 0)
            & (u >= 0)
            & (u < f["d"].shape[1])
            & (v >= 0)
            & (v < f["d"].shape[0])
        )
        ix = np.flatnonzero(ok)
        u, v = u[ok], v[ok]
        z = f["d"][v, u]
        valid = f["valid"][v, u]
        diff = cam[ix, 2] - z
        tol = 0.03 + 0.01 * z
        support[ix] += valid & (abs(diff) <= tol)
        # A candidate behind a measured foreground surface is occluded, not erroneous.
        conflict[ix] += valid & (diff < -tol)
    # 主结果容许缺少其他视角深度；有多个冲突且支持不足的点才被排除。
    selected = (conflict < 2) | (support >= conflict)
    # 额外输出更严格的子集：至少另一个视角提供一致深度。
    robust = selected & (support >= 1)
    ply(out / "accepted-medium-high.ply", xyz, rgb)

    def fuse(mask, name):
        # 对外层 xyz/rgb 中 mask 选中的点进行 5 mm 体素平均；写入 out/name，返回融合坐标和颜色数组。
        x = xyz[mask]
        c = rgb[mask]
        voxel = 0.005
        keys = np.floor(x / voxel).astype("int64")
        _, inv = np.unique(keys, axis=0, return_inverse=True)
        n = np.bincount(inv)
        xx = np.column_stack([np.bincount(inv, weights=x[:, j]) / n for j in range(3)])
        cc = (
            np.column_stack([np.bincount(inv, weights=c[:, j]) / n for j in range(3)])
            .round()
            .astype("uint8")
        )
        ply(out / name, xx, cc)
        return xx, cc

    x, c = fuse(selected, "fused.ply")
    vx, vc = fuse(robust, "multiview-supported.ply")
    np.savez_compressed(out / "fused.npz", xyz=x, rgb=c)
    save(out / "cameras-meters.json", cameras)
    save(
        out / "report.json",
        dict(
            scale_m_per_sfm_unit=scale,
            scale_samples=len(ratios),
            scale_inliers=int(keep.sum()),
            scale_robust_relative_std=spread,
            per_frame_scale=scale_rows,
            frames=perframe,
            input_points=len(xyz),
            geometric_conflict_rejected=int((~selected).sum()),
            cross_view_supported_samples=int(robust.sum()),
            fused_points=len(x),
            multiview_supported_fused_points=len(vx),
            voxel_m=0.005,
            depth_agreement_tolerance="0.03m + 1% of measured Z",
            units="meters from LiDAR",
            confidence_accepted=[1, 2],
            limitations=[
                "Scale estimated from sparse/depth correspondences; no independent metrology",
                "RGB/depth mapping follows supplied simple scaling convention",
                "No ICP or joint RGB-D pose optimization; edge artifacts and pose drift may remain",
                "Depth values correlated across pixels; point count is not accuracy",
            ],
        ),
    )
    print(
        json.dumps(
            dict(
                scale=scale,
                scale_spread=spread,
                input=len(xyz),
                fused=len(x),
                supported=len(vx),
                frames=scale_rows,
            ),
            indent=2,
        )
    )


if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("source", type=Path)
    p.add_argument("sfm", type=Path)
    p.add_argument("output", type=Path)
    p.add_argument("--model-id", type=int, default=0)
    a = p.parse_args()
    run(a.source, a.sfm, a.output, a.model_id)
