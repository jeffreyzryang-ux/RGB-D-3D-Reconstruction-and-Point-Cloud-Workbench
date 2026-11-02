# 审计重建结果，检查输入哈希、相机参数及重投影残差。
"""Recompute source integrity, fixed cameras, residuals, and match graph."""

import json, sys, sqlite3
from pathlib import Path
import numpy as np
import pycolmap as pc
from reconstruct_captures import save, sha

root = Path(sys.argv[1])
m = json.loads((root / "manifest.json").read_text())
report = json.loads((root / "report.json").read_text())
records = m["records"]
db = sqlite3.connect(root / "database.db")
byid = {r["colmap_image_id"]: r["folder"] for r in records}
adjacency = {v: set() for v in byid.values()}
edges = []
for pair, n, c in db.execute("select pair_id,rows,config from two_view_geometries"):
    a, b = pair // 2147483647, pair % 2147483647
    raw = db.execute("select rows from matches where pair_id=?", (pair,)).fetchone()[0]
    if n >= 30 and n / max(raw, 1) >= 0.2:
        adjacency[byid[a]].add(byid[b])
        adjacency[byid[b]].add(byid[a])
        edges.append(
            dict(
                a=byid[a],
                b=byid[b],
                inliers=n,
                raw_matches=raw,
                ratio=n / raw,
                geometry=c,
            )
        )
components = []
unseen = set(adjacency)
while unseen:
    todo = [min(unseen, key=int)]
    comp = []
    while todo:
        v = todo.pop()
        if v not in unseen:
            continue
        unseen.remove(v)
        comp.append(v)
        todo += list(adjacency[v])
    components.append(sorted(comp, key=int))
for r in records:
    assert sha(root / "originals" / r["folder"] / "image.jpg") == r["image_sha256"]
    assert (
        sha(root / "originals" / r["folder"] / "calibration.json")
        == r["calibration_sha256"]
    )
    assert sha(root / "images" / r["name"]) == r["work_sha256"]
    assert r["features"] <= 8192
metrics = []
for s in report["models"]:
    rec = pc.Reconstruction(root / "sparse" / str(s["model"]))
    errors = []
    behind = 0
    for r in records:
        if r["camera_id"] not in rec.cameras:
            continue
        k = np.array(r["K_work"])
        assert np.allclose(
            rec.cameras[r["camera_id"]].params,
            [k[0, 0], k[1, 1], k[0, 2] + 0.5, k[1, 2] + 0.5],
            rtol=0,
            atol=1e-9,
        )
    for point in rec.points3D.values():
        for e in point.track.elements:
            im = rec.images[e.image_id]
            x = im.cam_from_world() * point.xyz
            behind += int(x[2] <= 0)
            projected = rec.cameras[im.camera_id].img_from_cam(x)
            errors.append(
                float(np.linalg.norm(projected - im.points2D[e.point2D_idx].xy))
            )
    metrics.append(
        dict(
            model=s["model"],
            observations=len(errors),
            nonpositive_depth=behind,
            reprojection_percentiles_p50_p90_p95_p99=np.percentile(
                errors, [50, 90, 95, 99]
            ).tolist(),
        )
    )
result = dict(
    source_and_archive_hashes_verified=True,
    fixed_intrinsics_verified=True,
    feature_limit_verified=True,
    components=components,
    edges=edges,
    models=metrics,
)
save(root / "audit.json", result)
print(json.dumps(result, indent=2))
