# Historical Report Generators

This directory contains scripts for compiling, visualizing, and archiving historical reports. Geometry and reconstruction algorithms remain in `scripts/`.

| Script | Purpose |
| --- | --- |
| `report_capture.py` | Capture batch report for 2026-10-07 |
| `report_calibration_20261008.py` | Calibration report for 2026-10-08 |
| `report_step1_20261013.py` | Stage 1 report for 2026-10-13 |
| `report_step2_20261013.py` | Stage 2 report for 2026-10-13 |

Run a script as a module from the project root, for example:

```sh
.venv/bin/python -m report_generators.report_calibration_20261008
```

These scripts require the historical `data/` batches and source paths specified in each script. The copied workbench does not include those original inputs, so the reports cannot be regenerated without supplying them. Importing these modules also runs report generation; do not treat them as libraries without side effects.

Generated reports are written to the root-level `reports/` directory, separately from the source scripts. The scripts refuse to overwrite an existing output directory.

The web reconstruction workflow does not call these historical report generators. The backend still calls `scripts/audit_capture_result.py` for reconstruction checks. Algorithm-generated `report.json` files remain in their respective job result directories.
