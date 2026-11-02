# 准备工作用拍摄数据副本。
"""Recorded, equal-field-of-view resize after color normalization."""

from pathlib import Path
import json, cv2

cv2.setNumThreads(4)
src = Path("data/capture-20261007-v1")
dst = Path("data/capture-20261007-2000-v1")
dst.mkdir(exist_ok=False)
records = []
for record in json.loads((src / "manifest.json").read_text()):
    path = Path(record["normalized_file"])
    im = cv2.imread(str(path))
    h, w = im.shape[:2]
    s = min(1, 2000 / max(w, h))
    size = (round(w * s), round(h * s))
    target = dst / record["group"] / path.name
    target.parent.mkdir(exist_ok=True)
    cv2.imwrite(str(target), cv2.resize(im, size, interpolation=cv2.INTER_LINEAR))
    record["working_file"] = str(target.resolve())
    record["working_wh"] = size
    record["resize"] = {
        "api": "cv2.resize",
        "interpolation": "INTER_LINEAR",
        "source_wh": [w, h],
        "target_wh": size,
        "sx": size[0] / w,
        "sy": size[1] / h,
        "pixel_mapping": "u_out = sx*(u_in+0.5)-0.5; v likewise",
        "crop": None,
    }
    records.append(record)
(dst / "manifest.json").write_text(json.dumps(records, ensure_ascii=False, indent=2))
