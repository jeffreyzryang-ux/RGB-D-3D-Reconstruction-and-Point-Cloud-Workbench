"""Estimate PCL normals and orient them using registered, depth-consistent views."""
import argparse
import json
import subprocess
import tempfile
from pathlib import Path

import numpy as np

SAMPLE = np.dtype([("xyz", "<f4", 3), ("rgb", "u1", 3), ("normal", "<f4", 3)])
VERTEX = np.dtype(SAMPLE.descr + [("orientation_valid", "u1")])
DEFAULT_BINARY = Path(__file__).resolve().parents[1] / "build/pcl_sor/pcl_normals"


def orient(samples, cameras, captures):
    xyz = np.ascontiguousarray(samples["xyz"])
    normals = samples["normal"]
    votes = np.zeros(len(xyz))
    weights = np.zeros(len(xyz))
    for camera in cameras:
        folder = captures / camera["photo"]
        meta = json.loads((folder / "depth.json").read_text())
        shape = (meta["height"], meta["width"])
        depth = np.fromfile(folder / meta["file"], "<f4").reshape(shape)
        confidence = np.fromfile(folder / meta["confidence_file"], "u1").reshape(shape)
        cam = xyz @ np.asarray(camera["Rcw"]).T + camera["tcw_m"]
        ids = np.flatnonzero(cam[:, 2] > 0)
        proj = cam[ids] @ np.asarray(meta["K_depth_rows"]).T
        u, v = np.rint(proj[:, :2] / proj[:, 2:]).astype(int).T
        inside = (u >= 0) & (u < shape[1]) & (v >= 0) & (v < shape[0])
        u, v, ids = u[inside], v[inside], ids[inside]
        z = depth[v, u]
        usable = ((confidence[v, u] >= 1) & (confidence[v, u] <= 2) &
                  np.isfinite(z) & (z > 0) & (abs(cam[ids, 2] - z) <= 0.03 + 0.01 * z))
        ids = ids[usable]
        rays = camera["center_m"] - xyz[ids]
        cosine = np.einsum("ij,ij->i", rays, normals[ids]) / np.linalg.norm(rays, axis=1)
        votes[ids] += cosine
        weights[ids] += abs(cosine)
    normals[votes < 0] *= -1
    # Flag near-tangent observations and conflicting votes from opposite sides.
    return (weights > 0.1) & (abs(votes) > 0.5 * weights)


def estimate(source, output, cameras, captures, k, binary):
    if output.exists():
        raise FileExistsError(output)
    output.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(dir=output.parent) as tmp:
        raw = Path(tmp) / "samples.bin"
        subprocess.run([str(binary.resolve()), str(source), str(raw), str(k)], check=True)
        points = np.fromfile(raw, SAMPLE)
        length = np.linalg.norm(points["normal"], axis=1)
        valid = np.isfinite(length) & (length > 1e-6)
        points = points[valid]
        if not len(points):
            raise ValueError("No finite normals for this cloud")
        points["normal"] /= length[valid, None]
        reliable = orient(points, json.loads(cameras.read_text()), captures)
        vertices = np.empty(len(points), VERTEX)
        for field in SAMPLE.names:
            vertices[field] = points[field]
        vertices["orientation_valid"] = reliable
        staged = Path(tmp) / "result"
        staged.mkdir()
        with (staged / "normals.ply").open("wb") as stream:
            stream.write((f"ply\nformat binary_little_endian 1.0\nelement vertex {len(points)}\n"
                          "property float x\nproperty float y\nproperty float z\n"
                          "property uchar red\nproperty uchar green\nproperty uchar blue\n"
                          "property float nx\nproperty float ny\nproperty float nz\n"
                          "property uchar orientation_valid\nend_header\n").encode())
            vertices.tofile(stream)
        report = dict(source=source.name, k=k, input_points=len(valid), points=len(points),
                      invalid_normals=int((~valid).sum()), uncertain_orientation=int((~reliable).sum()))
        (staged / "report.json").write_text(json.dumps(report, indent=2))
        staged.rename(output)
        print(json.dumps(report))


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    for arg in ("input", "output", "cameras", "captures"):
        parser.add_argument(arg, type=Path)
    parser.add_argument("--k", type=int, default=30)
    parser.add_argument("--binary", type=Path, default=DEFAULT_BINARY)
    args = parser.parse_args()
    estimate(args.input, args.output, args.cameras, args.captures, args.k, args.binary)
