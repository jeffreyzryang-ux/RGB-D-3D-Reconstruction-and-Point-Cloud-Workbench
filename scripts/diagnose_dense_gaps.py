# 分析双目增密缺口及候选点被过滤的原因。
"""Experimental CPU stereo with fixed SfM poses; no invented/interpolated points."""

import argparse, json, itertools, time
from pathlib import Path
import cv2, numpy as np, pycolmap as pc
from reconstruct_captures import save


def ply(path, xyz, rgb):
    # 把 N×3 坐标 xyz 与对应 RGB 颜色写入二进制小端 PLY；path 为输出文件，无返回值。
    with open(path, "wb") as f:
        f.write(
            (
                "ply\nformat binary_little_endian 1.0\nelement vertex "
                + str(len(xyz))
                + "\nproperty float x\nproperty float y\nproperty float z\nproperty uchar red\nproperty uchar green\nproperty uchar blue\nend_header\n"
            ).encode()
        )
        arr = np.empty(len(xyz), dtype=[("xyz", "<f4", (3,)), ("rgb", "u1", (3,))])
        arr["xyz"] = xyz
        arr["rgb"] = rgb
        f.write(arr.tobytes())


def run(root, out):
    # 读取 root 下的重建结果，诊断双目匹配跳过及过滤原因，将诊断点云与统计写入新目录 out。
    start = time.time()
    out.mkdir(parents=True, exist_ok=False)
    rec = pc.Reconstruction(root / "sparse/0")
    ims = {}
    size = (960, 720)
    for iid, im in rec.images.items():
        cam = rec.cameras[im.camera_id]
        fx, fy, cx, cy = cam.params
        sx = size[0] / cam.width
        sy = size[1] / cam.height
        k = np.array(
            [[fx * sx, 0, cx * sx - 0.5], [0, fy * sy, cy * sy - 0.5], [0, 0, 1.0]]
        )
        pose = im.cam_from_world()
        ims[iid] = dict(
            name=im.name,
            K=k,
            R=pose.rotation.matrix(),
            t=pose.translation,
            color=cv2.cvtColor(
                cv2.resize(cv2.imread(str(root / "images" / im.name)), size),
                cv2.COLOR_BGR2RGB,
            ),
            pids={p.point3D_id for p in im.points2D if p.has_point3D()},
        )
    sparse = np.array([p.xyz for p in rec.points3D.values()])
    pairs = []
    logs = []
    for ia, ib in itertools.combinations(sorted(ims), 2):
        a, b = ims[ia], ims[ib]
        shared = a["pids"] & b["pids"]
        log = dict(a=a["name"], b=b["name"], shared=len(shared))
        logs.append(log)
        if len(shared) < 15:
            log["skipped"] = "fewer than 15 shared sparse points"
            continue
        R = b["R"] @ a["R"].T
        T = b["t"] - R @ a["t"]
        r1, r2, p1, p2, Q, _, _ = cv2.stereoRectify(
            a["K"],
            None,
            b["K"],
            None,
            size,
            R,
            T,
            flags=cv2.CALIB_ZERO_DISPARITY,
            alpha=0,
        )
        maps = [
            cv2.initUndistortRectifyMap(c["K"], None, r, p, size, cv2.CV_32FC1)
            for c, r, p in [(a, r1, p1), (b, r2, p2)]
        ]
        rect = [
            cv2.remap(c["color"], mx, my, cv2.INTER_LINEAR)
            for c, (mx, my) in zip([a, b], maps)
        ]
        masks = [
            (mx >= 3) & (mx < size[0] - 4) & (my >= 3) & (my < size[1] - 4)
            for mx, my in maps
        ]
        vertical = abs(p2[1, 3]) > abs(p2[0, 3])
        axis = 1 if vertical else 0
        points = np.array([rec.points3D[i].xyz for i in shared])
        xc = points @ a["R"].T + a["t"]
        xr = xc @ r1.T
        x1 = xr @ p1[:, :3].T
        x2 = xr @ p2[:, :3].T + p2[:, 3]
        uv1 = x1[:, :2] / x1[:, 2, None]
        uv2 = x2[:, :2] / x2[:, 2, None]
        disp = (uv1 - uv2)[:, axis]
        # Check the actual observed sparse matches agree with the rectified geometry.
        lo = int(np.floor(np.percentile(disp, 1) - 24))
        hi = int(np.ceil(np.percentile(disp, 99) + 24))
        nd = int(np.ceil((hi - lo + 1) / 16) * 16)
        if nd > 512 or nd < 16:
            log["skipped"] = "disparity range outside computational bound"
            continue
        gray = [cv2.cvtColor(v, cv2.COLOR_RGB2GRAY) for v in rect]
        gray = [v.T.copy() for v in gray] if vertical else gray
        matchwidth = gray[0].shape[1]
        if (
            max(lo + nd, 0) >= matchwidth - 16
            or max(-lo + 1, 0) >= matchwidth - 16
            or max(lo + nd, 0) >= matchwidth + min(lo, 0) - 16
            or max(-lo + 1, 0) >= matchwidth + min(-lo - nd + 1, 0) - 16
        ):
            log["skipped"] = "insufficient rectified overlap for disparity range"
            continue

        def match(l, r, minimum):
            # 对校正后的左右灰度图 l、r 运行 SGBM；minimum 是最小视差，返回像素单位的视差图。
            return (
                cv2.StereoSGBM_create(
                    minDisparity=minimum,
                    numDisparities=nd,
                    blockSize=5,
                    P1=200,
                    P2=800,
                    disp12MaxDiff=1,
                    uniquenessRatio=12,
                    speckleWindowSize=100,
                    speckleRange=2,
                    preFilterCap=31,
                    mode=cv2.STEREO_SGBM_MODE_SGBM_3WAY,
                )
                .compute(l, r)
                .astype(np.float32)
                / 16
            )

        dl = match(*gray, lo)
        rmin = -lo - nd + 1
        dr = match(gray[1], gray[0], rmin)
        if vertical:
            dl = dl.T
            dr = dr.T
        yy, xx = np.indices(dl.shape)
        tx = xx.astype(np.float32)
        ty = yy.astype(np.float32)
        if vertical:
            ty -= dl
        else:
            tx -= dl
        rd = cv2.remap(dr, tx, ty, cv2.INTER_NEAREST, borderValue=rmin - 1)
        mr = cv2.remap(masks[1].astype("uint8"), tx, ty, cv2.INTER_NEAREST) > 0
        stages = [
            masks[0],
            masks[0] & (dl > lo),
            masks[0] & (dl > lo) & mr,
            masks[0] & mr & (dl > lo) & (rd > rmin),
            masks[0] & mr & (dl > lo) & (rd > rmin) & (np.abs(dl + rd) <= 1.0),
        ]
        log["stage_counts"] = dict(
            zip(
                [
                    "rectified_valid",
                    "left_disparity",
                    "right_in_bounds",
                    "right_disparity",
                    "left_right_consistent",
                ],
                [int(v.sum()) for v in stages],
            )
        )
        valid = stages[-1].copy()
        local = cv2.reprojectImageTo3D(dl, Q)
        valid &= np.isfinite(local).all(2) & (local[:, :, 2] > 0)
        # Keep a broad depth range inferred from the visible sparse structure.
        zlo, zhi = np.percentile(xr[:, 2], [1, 99])
        valid &= (local[:, :, 2] > zlo * 0.5) & (local[:, :, 2] < zhi * 2)
        log["stage_counts"]["depth_range"] = int(valid.sum())
        xyz = (local[valid] @ r1 - a["t"]) @ a["R"]
        rgb = rect[0][valid]
        # Project back and retain in-frame positive points in both source cameras.
        depths = {}
        for iid in [ia, ib]:
            c = ims[iid]
            xc = xyz @ c["R"].T + c["t"]
            uv = xc @ c["K"].T
            uv = uv[:, :2] / uv[:, 2, None]
            pix = np.rint(uv).astype(int)
            ok = (
                (xc[:, 2] > 0)
                & (pix[:, 0] >= 0)
                & (pix[:, 0] < 960)
                & (pix[:, 1] >= 0)
                & (pix[:, 1] < 720)
            )
            depth = np.full((720, 960), np.inf, dtype=np.float32)
            np.minimum.at(depth, (pix[ok, 1], pix[ok, 0]), xc[ok, 2])
            depths[iid] = depth
        log.update(
            raw_consistent_points=len(xyz),
            disparity_range=[lo, lo + nd],
            vertical=bool(vertical),
        )
        print(log, flush=True)
        pairs.append(dict(ids={ia, ib}, xyz=xyz, rgb=rgb, depths=depths, log=log))
    allx = []
    allc = []
    for pair in pairs:
        xyz = pair["xyz"]
        support = np.zeros(len(xyz), dtype=bool)
        available = np.zeros(len(xyz), dtype=bool)
        for other in pairs:
            if other is pair:
                continue
            for iid in pair["ids"] & other["ids"]:
                c = ims[iid]
                xc = xyz @ c["R"].T + c["t"]
                uv = xc @ c["K"].T
                uv = uv[:, :2] / uv[:, 2, None]
                pix = np.rint(uv).astype(int)
                for dx, dy in [(0, 0), (-1, 0), (1, 0), (0, -1), (0, 1)]:
                    x = pix[:, 0] + dx
                    y = pix[:, 1] + dy
                    ok = (x >= 0) & (x < 960) & (y >= 0) & (y < 720)
                    idx = np.flatnonzero(ok)
                    z = other["depths"][iid][y[ok], x[ok]]
                    available[idx] |= np.isfinite(z)
                    support[idx] |= np.abs(z - xc[ok, 2]) < 0.02 * xc[ok, 2]
        pair["log"]["no_other_pair_depth"] = int((~available).sum())
        pair["log"]["other_depth_disagrees"] = int((available & ~support).sum())
        pair["support"] = support
        pair["log"]["three_view_supported_points"] = int(support.sum())
        allx.append(xyz[support])
        allc.append(pair["rgb"][support])
    xyz = np.concatenate(allx) if allx else np.empty((0, 3))
    rgb = np.concatenate(allc) if allc else np.empty((0, 3), dtype="uint8")
    before = len(xyz)
    if before:
        voxel = float(
            np.linalg.norm(
                np.percentile(sparse, 95, axis=0) - np.percentile(sparse, 5, axis=0)
            )
            * 0.001
        )
        _, idx = np.unique(
            np.floor(xyz / voxel).astype("int64"), axis=0, return_index=True
        )
        xyz = xyz[idx]
        rgb = rgb[idx]
    else:
        voxel = None
    # Overlay only actual source-pair observations: orange rejected by cross-pair
    # validation, green retained; unmarked pixels have no pair candidate.
    from PIL import Image, ImageDraw

    panel = Image.new("RGB", (1440, 1140), "white")
    draw = ImageDraw.Draw(panel)
    coverage = []
    for j, (iid, c) in enumerate(sorted(ims.items(), key=lambda kv: kv[1]["name"])):
        raw = np.zeros((720, 960), np.uint8)
        kept = raw.copy()
        for pair in pairs:
            if iid not in pair["ids"]:
                continue
            xc = pair["xyz"] @ c["R"].T + c["t"]
            uv = xc @ c["K"].T
            uv = np.rint(uv[:, :2] / uv[:, 2, None]).astype(int)
            ok = (
                (uv[:, 0] >= 0)
                & (uv[:, 0] < 960)
                & (uv[:, 1] >= 0)
                & (uv[:, 1] < 720)
                & (xc[:, 2] > 0)
            )
            raw[uv[ok, 1], uv[ok, 0]] = 1
            ok &= pair["support"]
            kept[uv[ok, 1], uv[ok, 0]] = 1
        coverage.append(
            dict(name=c["name"], raw_pixels=int(raw.sum()), kept_pixels=int(kept.sum()))
        )
        ys, xs = np.nonzero(kept)
        save(
            out / (c["name"][:4] + "-supported-pixels.json"),
            dict(
                image=c["name"],
                coordinate_space="960x720 integer pixel centers; unique rounded source-pair supported projections before voxel deduplication",
                original_image_size=[1920, 1440],
                original_mapping="u_original=2*u+0.5; v_original=2*v+0.5; approximate locations from rounded analysis pixels",
                count=len(xs),
                xy=np.column_stack([xs, ys]).tolist(),
            ),
        )
        marked = c["color"].copy()
        visible = cv2.dilate(kept, np.ones((3, 3), np.uint8)) > 0
        marked[visible] = [0, 255, 80]
        individual = Image.fromarray(marked)
        individual.save(out / (c["name"][:4] + "-supported.png"))
        color = c["color"].copy()
        ra = cv2.dilate(raw, np.ones((3, 3), np.uint8)) > 0
        ke = cv2.dilate(kept, np.ones((3, 3), np.uint8)) > 0
        color[ra] = (color[ra] * 0.3 + np.array([255, 120, 0]) * 0.7).astype("uint8")
        color[ke] = (color[ke] * 0.3 + np.array([0, 255, 120]) * 0.7).astype("uint8")
        thumb = Image.fromarray(color).resize((480, 360))
        u = j % 3 * 480
        v = j // 3 * 570
        panel.paste(thumb, (u, v + 30))
        draw.text(
            (u + 10, v + 10),
            c["name"] + " | raw " + str(raw.sum()) + " | kept " + str(kept.sum()),
            fill="black",
        )
        original = Image.fromarray(c["color"])
        original.thumbnail((240, 180))
        panel.paste(original, (u, v + 390))
    panel.save(out / "coverage.png")
    save(out / "coverage.json", coverage)
    ply(out / "dense.ply", xyz, rgb)
    np.savez_compressed(out / "dense.npz", xyz=xyz, rgb=rgb)
    save(
        out / "report.json",
        dict(
            method="CPU SGBM pair stereo with left-right consistency and third-view pair depth support",
            source=str(root),
            resolution=size,
            pairs=logs,
            points=len(xyz),
            supported_before_voxel=before,
            voxel_size=voxel,
            seconds=time.time() - start,
            limitations=[
                "Experimental CPU alternative, not COLMAP PatchMatch MVS",
                "Fixed poses from small sparse model; distortion unmeasured",
                "Depth agreement 2 percent with 1 pixel neighborhood; not ground-truth accuracy",
                "No hole filling or surface mesh; relative units",
            ],
        ),
    )
    print("OUTPUT", len(xyz), flush=True)


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("source", type=Path)
    ap.add_argument("output", type=Path)
    a = ap.parse_args()
    run(a.source, a.output)
