"""Run PCL SOR on an existing fused XYZ/RGB PLY, preserving the input."""
import argparse
import json
import math
import subprocess
import tempfile
from pathlib import Path

DEFAULT_BINARY = Path(__file__).resolve().parents[1] / "build/pcl_sor/pcl_sor"


def clean(source, output, mean_k=30, stddev=2.0, binary=DEFAULT_BINARY):
    if not source.is_file():
        raise FileNotFoundError(source)
    if not binary.is_file():
        raise FileNotFoundError(f"Build the PCL cleaner first (native/pcl_sor): {binary}")
    if mean_k < 2 or not math.isfinite(stddev) or stddev <= 0:
        raise ValueError("Expected mean_k >= 2 and finite positive stddev")
    if output.exists():
        raise FileExistsError(output)
    output.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(dir=output.parent) as staging:
        result = Path(staging) / "result"
        result.mkdir()
        run = subprocess.run(
            [str(binary.resolve()), str(source), str(result), str(mean_k), str(stddev)],
            stdout=subprocess.PIPE, text=True, check=True,
        )
        total, kept, removed = map(int, run.stdout.split())
        report = dict(input=str(source.resolve()), mean_k=mean_k, stddev=stddev,
                      input_points=total, kept_points=kept, removed_points=removed)
        (result / "report.json").write_text(json.dumps(report, indent=2) + "\n")
        result.rename(output)
    return report


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input", type=Path)
    parser.add_argument("output", type=Path, help="New directory for results")
    parser.add_argument("--mean-k", type=int, default=30)
    parser.add_argument("--stddev", type=float, default=2.0)
    parser.add_argument("--binary", type=Path, default=DEFAULT_BINARY)
    args = parser.parse_args()
    print(clean(args.input, args.output, args.mean_k, args.stddev, args.binary))
