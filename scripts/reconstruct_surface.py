"""Build a colored, observation-supported Poisson mesh from workbench normals."""
import argparse
import json
from pathlib import Path
import subprocess
import tempfile

import cv2
import numpy as np

from estimate_normals import VERTEX


def reconstruct(folder, output, depth=9, support_radius=0.04):
    if output.exists():
        raise FileExistsError(output)
    report = json.loads((folder / "report.json").read_text())
    with (folder / "normals.ply").open("rb") as f:
        for line in f:
            if line.strip() == b"end_header":
                break
        vertices = np.fromfile(f, VERTEX)
    if len(vertices) != report["points"]:
        raise ValueError("Unexpected workbench normal file size")
    samples = vertices[vertices["orientation_valid"] == 1]
    if len(samples) < 3:
        raise ValueError("Insufficient oriented samples")
    output.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(dir=output.parent) as tmp:
        work = Path(tmp)
        with (work / "input.pcd").open("wb") as f:
            f.write(("VERSION .7\nFIELDS x y z normal_x normal_y normal_z\n"
                     "SIZE 4 4 4 4 4 4\nTYPE F F F F F F\nCOUNT 1 1 1 1 1 1\n"
                     f"WIDTH {len(samples)}\nHEIGHT 1\nPOINTS {len(samples)}\nDATA binary\n").encode())
            np.column_stack([samples["xyz"], samples["normal"]]).astype("<f4").tofile(f)
        staged = work / "result"
        staged.mkdir()
        with (staged / "solver.log").open("w") as log:
            subprocess.run(["pcl_poisson_reconstruction", "input.pcd", "surface.vtk",
                            "-depth", str(depth)], cwd=work, stdout=log,
                           stderr=subprocess.STDOUT, check=True)
        with (work / "surface.vtk").open("rb") as f:
            for line in f:
                if line.startswith(b"POINTS "):
                    break
            xyz = np.fromfile(f, dtype=np.float32, count=int(line.split()[1])*3, sep=" ").reshape(-1, 3)
            for line in f:
                if line.startswith(b"POLYGONS "):
                    break
            count, size = map(int, line.split()[1:])
            polygons = np.fromfile(f, dtype=np.int32, count=size, sep=" ").reshape(-1, 4)
        if len(polygons) != count or not np.all(polygons[:, 0] == 3):
            raise ValueError("Expected a triangle mesh")
        faces = polygons[:, 1:]
        if faces.min() < 0 or faces.max() >= len(xyz) or not np.isfinite(xyz).all():
            raise ValueError("Invalid Poisson mesh")
        index = cv2.flann_Index(np.ascontiguousarray(samples["xyz"]), dict(algorithm=1, trees=1))
        nearest, squared = index.knnSearch(xyz, 1, params=dict(checks=-1))
        faces = faces[(squared[:, 0][faces] <= support_radius**2).all(axis=1)]
        triangles = xyz[faces]
        area2 = np.linalg.norm(np.cross(triangles[:, 1]-triangles[:, 0],
                                        triangles[:, 2]-triangles[:, 0]), axis=1)
        faces = faces[area2 > 1e-12]
        _, unique = np.unique(np.sort(faces, axis=1), axis=0, return_index=True)
        faces = faces[np.sort(unique)]
        if not len(faces):
            raise ValueError("No triangles supported by measured samples")
        used, remap = np.unique(faces, return_inverse=True)
        colored = np.empty(len(used), dtype=[("xyz","<f4",3),("rgb","u1",3)])
        colored["xyz"] = xyz[used]
        colored["rgb"] = samples["rgb"][nearest[used, 0]]
        records = np.empty(len(faces), dtype=[("n","u1"),("indices","<i4",3)])
        records["n"] = 3
        records["indices"] = remap.reshape(-1,3)
        with (staged/"mesh.ply").open("wb") as f:
            f.write((f"ply\nformat binary_little_endian 1.0\nelement vertex {len(used)}\n"
                     "property float x\nproperty float y\nproperty float z\nproperty uchar red\n"
                     f"property uchar green\nproperty uchar blue\nelement face {len(faces)}\n"
                     "property list uchar int vertex_indices\nend_header\n").encode())
            colored.tofile(f)
            records.tofile(f)
        metrics = dict(input_points=len(vertices), oriented_points=len(samples), depth=depth,
                       support_radius_m=support_radius, raw_faces=count, vertices=len(used), faces=len(faces))
        (staged/"report.json").write_text(json.dumps(metrics, indent=2))
        staged.rename(output)
        print(metrics)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("normals_directory", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    reconstruct(args.normals_directory, args.output)
