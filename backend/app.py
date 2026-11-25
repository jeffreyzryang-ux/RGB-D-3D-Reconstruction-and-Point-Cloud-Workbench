# 后端入口：HTTP 接口与任务调度；具体重建计算位于 scripts。
"""Local RGB-D workbench. Single API process / single serialized compute worker."""

import asyncio, contextlib, hashlib, json, os, queue, shutil, signal, sqlite3, stat, subprocess, sys, threading, time, uuid, zipfile
from pathlib import Path, PurePosixPath
from typing import Literal
from fastapi import FastAPI, HTTPException, UploadFile, File, Form, Request
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel, Field
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
STORE = Path(os.environ.get("SLAM_STORAGE", str(ROOT / "data/workbench"))).resolve()
STORE.mkdir(parents=True, exist_ok=True)
DB = STORE / "state.sqlite3"
LOCK = threading.RLock()
STOP = threading.Event()
Q = queue.Queue()
PROCS = {}
UPLOAD_LOCK = asyncio.Lock()
TERMINAL = {"succeeded", "partial", "failed", "cancelled", "interrupted"}
MAX_TOTAL = 2_000_000_000
ALLOWED = {
    "image.jpg",
    "calibration.json",
    "depth.json",
    "depth.f32",
    "confidence.u8",
    "order.json",
    "README.txt",
}


@contextlib.contextmanager
def connect():
    # 数据库连接：正常退出时提交事务，异常时回滚，并始终关闭连接。
    c = sqlite3.connect(DB)
    c.row_factory = sqlite3.Row
    try:
        with c:
            yield c
    finally:
        c.close()


with connect() as c:
    c.execute(
        "create table if not exists projects(id text primary key,name text,created real)"
    )
    c.execute(
        'create table if not exists jobs(id text primary key,project_id text,status text,stage text,created real,updated real,error text,small integer,source text,results text default "[]")'
    )
    if "pcl_stddev" not in {r["name"] for r in c.execute("pragma table_info(jobs)")}:
        c.execute("alter table jobs add column pcl_stddev real")
    if "estimate_normals" not in {r["name"] for r in c.execute("pragma table_info(jobs)")}:
        c.execute("alter table jobs add column estimate_normals integer not null default 0")
    if "poisson_mesh" not in {r["name"] for r in c.execute("pragma table_info(jobs)")}:
        c.execute("alter table jobs add column poisson_mesh integer not null default 0")


def row(job):
    # 读取单个任务；不存在时返回 HTTP 404。
    with connect() as c:
        r = c.execute("select * from jobs where id=?", (job,)).fetchone()
    if not r:
        raise HTTPException(404, "任务不存在")
    return dict(r)


def update(job, **kw):
    # 在锁内更新任务字段，同时记录更新时间。
    with LOCK, connect() as c:
        kw["updated"] = time.time()
        c.execute(
            "update jobs set " + ",".join(k + "=?" for k in kw) + " where id=?",
            (*kw.values(), job),
        )


def jobdir(job):
    # 返回任务的独立工作目录，上传文件、日志和结果均按任务隔离。
    return STORE / "jobs" / job


def safe_relative(value):
    # 限制上传文件名与目录层级，拒绝越界路径和隐藏文件。
    if not value or "\\" in value or "\x00" in value:
        raise ValueError("非法文件路径")
    p = PurePosixPath(value)
    if p.is_absolute() or any(x in ("..", ".") for x in value.split("/")):
        raise ValueError("文件路径不能越出批次目录")
    if len(p.parts) > 3 or any(x.startswith(".") for x in p.parts):
        raise ValueError("不支持该文件层级或隐藏文件")
    if p.name not in ALLOWED:
        raise ValueError("不支持的文件：" + p.name)
    return p


def validate_source(src, small=False):
    # 检查批次完整性、重复图片、RGB/深度绑定、内参和置信度；返回拍摄组数。
    import numpy as np

    folders = [p for p in src.iterdir() if p.is_dir()]
    if not (3 if small else 10) <= len(folders) <= 200:
        raise ValueError("正常批次需10–200组；小批量诊断需3–200组")
    if (src / "order.json").exists():
        order = json.loads((src / "order.json").read_text())
        names = [x["folder"] for x in order]
        if len(set(names)) != len(names) or set(names) != {p.name for p in folders}:
            raise ValueError("order.json 必须唯一覆盖所有拍摄组")
    else:
        (src / "order.json").write_text(
            json.dumps(
                [
                    dict(folder=p.name, original_capture_id=p.name)
                    for p in sorted(folders, key=lambda p: p.name)
                ],
                ensure_ascii=False,
            )
        )
    ids = set()
    hashes = set()
    errors = []
    for f in folders:
        try:
            if not f.name.isdigit() or int(f.name) < 1 or str(int(f.name)) != f.name:
                raise ValueError("当前采集格式需要正整数拍摄文件夹名")
            for name in [
                "image.jpg",
                "calibration.json",
                "depth.json",
                "depth.f32",
                "confidence.u8",
            ]:
                if not (f / name).is_file() or (f / name).is_symlink():
                    raise ValueError("缺失文件 " + name)
            c = json.loads((f / "calibration.json").read_text())
            d = json.loads((f / "depth.json").read_text())
            if (
                c.get("schema_version") != 2
                or c.get("source") != "ARKit.ARFrame"
                or not c.get("depth_available")
            ):
                raise ValueError("需要schema 2 的 ARKit 深度数据")
            if (
                c.get("image_file") != "image.jpg"
                or c.get("depth_metadata_file") != "depth.json"
                or d.get("file") != "depth.f32"
                or d.get("confidence_file") != "confidence.u8"
            ):
                raise ValueError("文件绑定名称不匹配")
            if c["capture_id"] in ids:
                raise ValueError("重复capture_id")
            ids.add(c["capture_id"])
            h = hashlib.sha256((f / "image.jpg").read_bytes()).hexdigest()
            if h in hashes:
                raise ValueError("重复图片，请去重后提交")
            hashes.add(h)
            w, h = d["width"], d["height"]
            if (
                not isinstance(w, int)
                or not isinstance(h, int)
                or not 1 <= w <= 2048
                or not 1 <= h <= 2048
            ):
                raise ValueError("深度尺寸无效")
            if (f / "depth.f32").stat().st_size != w * h * 4 or (
                f / "confidence.u8"
            ).stat().st_size != w * h:
                raise ValueError("深度或置信度字节数不匹配")
            if (
                d.get("dtype") != "float32"
                or d.get("byte_order") != "little"
                or d.get("units") != "meters"
                or d.get("source") != "ARKit.ARFrame.sceneDepth"
                or d.get("measurement") != "distance from camera plane (Z)"
            ):
                raise ValueError("深度格式/来源/单位不受支持")
            if (
                d.get("confidence_dtype") != "uint8"
                or d.get("layout") != "row-major tightly packed"
            ):
                raise ValueError("深度存储格式不支持")
            if d["frame_timestamp_seconds"] != c["frame_timestamp_seconds"]:
                raise ValueError("图片与深度时间戳不一致")
            if (
                c.get("exif_orientation") != 1
                or c.get("units") != "pixels"
                or c.get("distortion_coefficients") is not None
            ):
                raise ValueError("当前适配器只接受方向1、像素内参、未测量畸变")
            K = np.array(c["K_rows"], float)
            kd = np.array(d["K_depth_rows"], float)
            expect = np.array(
                [[c["fx"], 0, c["cx"]], [0, c["fy"], c["cy"]], [0, 0, 1.0]]
            )
            if (
                K.shape != (3, 3)
                or not np.isfinite(K).all()
                or not np.allclose(K, expect)
                or min(c["fx"], c["fy"]) <= 0
            ):
                raise ValueError("非法内参")
            if kd.shape != (3, 3) or not np.allclose(
                kd,
                np.diag([w / c["image_width"], h / c["image_height"], 1]) @ K,
                atol=1e-6,
            ):
                raise ValueError("深度内参映射不一致")
            if (f / "image.jpg").stat().st_size > 30_000_000:
                raise ValueError("图片超过30MB")
            with Image.open(f / "image.jpg") as im:
                if im.width * im.height > 40_000_000:
                    raise ValueError("图片像素数超限")
                im.load()
                if (
                    im.size != (c["image_width"], c["image_height"])
                    or im.size != (d["rgb_width"], d["rgb_height"])
                    or im.getexif().get(274, 1) != 1
                ):
                    raise ValueError("RGB尺寸或方向不一致")
            conf = np.fromfile(f / "confidence.u8", dtype="uint8")
            dep = np.fromfile(f / "depth.f32", dtype="<f4")
            if not np.isin(conf, [0, 1, 2]).all():
                raise ValueError("非法置信度值")
            if not ((conf >= 1) & np.isfinite(dep) & (dep > 0)).any():
                raise ValueError("没有可用中高置信度深度")
        except Exception as e:
            errors.append(f.name + ": " + str(e))
    if errors:
        raise ValueError("\n".join(errors))
    return len(folders)


def source_root(upload):
    # 识别上传根目录，兼容 ZIP 外层多包一层文件夹的情况。
    if any(p.is_dir() and (p / "calibration.json").exists() for p in upload.iterdir()):
        return upload
    dirs = [p for p in upload.iterdir() if p.is_dir()]
    if len(dirs) == 1:
        return dirs[0]
    raise ValueError("无法识别批次根目录，请上传完整拍摄文件夹")


def capture_source(job):
    """Resolve uploads after moving a workbench, including versions sharing inputs."""
    stored = Path(job["source"])
    for parent in stored.parents:
        if parent.name == "upload" and parent.parent.parent.name == "jobs":
            local = jobdir(parent.parent.name) / "upload" / stored.relative_to(parent)
            if local.is_dir():
                return local
    return stored


def execute(job, stage, script, args):
    # 运行算法子进程并写入日志；轮询取消信号，必要时终止整个进程组。
    if STOP.is_set() or row(job)["status"] == "cancelling":
        raise InterruptedError()
    update(job, status="running", stage=stage)
    with (jobdir(job) / "execution.log").open("a") as log:
        proc = subprocess.Popen(
            [sys.executable, str(jobdir(job) / "code" / script), *map(str, args)],
            cwd=ROOT,
            stdout=log,
            stderr=subprocess.STDOUT,
            start_new_session=True,
        )
        with LOCK:
            PROCS[job] = proc
        while proc.poll() is None:
            if STOP.is_set() or row(job)["status"] == "cancelling":
                os.killpg(proc.pid, signal.SIGTERM)
                try:
                    proc.wait(timeout=3)
                except subprocess.TimeoutExpired:
                    os.killpg(proc.pid, signal.SIGKILL)
                    proc.wait()
                raise InterruptedError()
            time.sleep(0.2)
        with LOCK:
            PROCS.pop(job, None)
        if proc.returncode:
            raise RuntimeError(
                f"{stage} 执行失败，详情见日志（退出码 {proc.returncode}）"
            )


def process(job):
    # 任务主流程：校验 → 解析深度 → SfM → 逐模型融合 → 审计与结果汇总。
    with LOCK:
        j = row(job)
        if j["status"] != "queued":
            raise InterruptedError()
        update(job, status="running", stage="validating")
    base = jobdir(job)
    src = capture_source(j)
    (base / "code").mkdir(exist_ok=True)
    for filename in [
        "reconstruct_captures.py",
        "parse_capture_depth.py",
        "fuse_lidar_depth.py",
        "audit_capture_result.py",
        "dense_cpu.py",
        "clean_point_cloud.py",
        "estimate_normals.py",
        "reconstruct_surface.py",
    ]:
        shutil.copy2(ROOT / "scripts" / filename, base / "code" / filename)
    shutil.copy2(ROOT / "requirements.web.lock.txt", base / "requirements.lock.txt")
    (base / "configuration.json").write_text(
        json.dumps(
            dict(
                confidence=[1, 2],
                voxel_m=0.005,
                clarity_warning_below=45,
                small_batch=bool(j["small"]),
                pcl_stddev=j["pcl_stddev"],
                estimate_normals=bool(j["estimate_normals"]),
                poisson_mesh=bool(j["poisson_mesh"]),
                source=str(src),
                scripts={
                    f.name: hashlib.sha256(f.read_bytes()).hexdigest()
                    for f in (base / "code").iterdir()
                },
            ),
            indent=2,
        )
    )
    validate_source(src, bool(j["small"]))
    execute(job, "preprocessing", "parse_capture_depth.py", [src, base / "depth"])
    depth = json.loads((base / "depth/report.json").read_text())
    if depth["failures"]:
        raise ValueError(str(depth["failures"]))
    for r in depth["images"]:
        im = Image.open(src / r["photo"] / "image.jpg")
        im.thumbnail((320, 240))
        im.save(base / "depth" / f"{int(r['photo']):02d}-rgb.jpg")
    execute(
        job,
        "sfm",
        "reconstruct_captures.py",
        [
            "--source",
            src,
            "--output",
            base / "sfm",
            *(["--allow-small-batch"] if j["small"] else []),
        ],
    )
    report = json.loads((base / "sfm/report.json").read_text())
    models = [m for m in report["models"] if m["registered"] >= 3 and m["points"] > 0]
    if not models:
        raise ValueError("未形成至少3个相机的有效模型；可下载日志及诊断")
    results = []
    failures = []
    for m in models:
        if row(job)["status"] == "cancelling":
            raise InterruptedError()
        mid = m["model"]
        target = base / f"model-{mid}"
        try:
            execute(
                job,
                "depth_fusion",
                "fuse_lidar_depth.py",
                [src, base / "sfm", target, "--model-id", mid],
            )
            r = json.loads((target / "report.json").read_text())
            r.update(
                model_id=mid, registered=m["registered"], total=report["usable_images"]
            )
            import numpy as np

            sys.path.insert(0, str(ROOT / "scripts"))
            from dense_cpu import ply

            points = np.load(target / "fused.npz")
            x = points["xyz"]
            rgb = points["rgb"]
            step = max(1, int(np.ceil(len(x) / 50000)))
            ply(target / "preview.ply", x[::step], rgb[::step])
            r["bounds"] = [x.min(0).tolist(), x.max(0).tolist()]
            results.append(r)
            normal_source = target / "multiview-supported.ply"
            if j["pcl_stddev"] is not None:
                threshold = j["pcl_stddev"]
                execute(job, "pcl_cleaning", "clean_point_cloud.py", [
                    target / "multiview-supported.ply", target / f"pcl-sor-{threshold}",
                    "--stddev", threshold, "--binary", ROOT / "build/pcl_sor/pcl_sor",
                ])
                normal_source = target / f"pcl-sor-{threshold}/cleaned.ply"
            if j["estimate_normals"] or j["poisson_mesh"]:
                execute(job, "normal_estimation", "estimate_normals.py", [
                    normal_source, target / "pcl-normals", target / "cameras-meters.json", src,
                    "--binary", ROOT / "build/pcl_sor/pcl_normals",
                ])
            if j["poisson_mesh"]:
                execute(job, "poisson_surface", "reconstruct_surface.py", [target / "pcl-normals", target / "poisson"])
        except InterruptedError:
            raise
        except Exception as e:
            failures.append(f"模型 {mid}: {e}")
    execute(job, "exporting", "audit_capture_result.py", [base / "sfm"])
    (base / "result.json").write_text(
        json.dumps(
            dict(
                models=results,
                failures=failures,
                configuration=dict(
                    confidence=[1, 2], voxel_m=0.005, clarity_threshold=45
                ),
            ),
            ensure_ascii=False,
            indent=2,
        )
    )
    relaxed = "Relaxing the initialization" in (base / "execution.log").read_text(
        errors="replace"
    )
    if not results:
        raise ValueError("；".join(failures))
    if row(job)["status"] == "cancelling":
        raise InterruptedError()
    update(
        job,
        status=(
            "partial"
            if failures
            or len(results) > 1
            or max(r["registered"] for r in results) / report["usable_images"] < 0.8
            else "succeeded"
        ),
        stage="complete",
        results=json.dumps(results),
        error=("引擎自动调整过初始化条件；请结合质量报告验收。" if relaxed else "")
        + "；".join(failures),
    )


def worker():
    # 串行消费任务队列，记录失败、取消或服务中断状态。
    while not STOP.is_set():
        try:
            job = Q.get(timeout=0.3)
        except queue.Empty:
            continue
        try:
            if row(job)["status"] != "queued":
                continue
            process(job)
        except InterruptedError:
            update(
                job,
                status="interrupted" if STOP.is_set() else "cancelled",
                stage="stopped",
            )
        except Exception as e:
            update(job, status="failed", error=str(e))
        finally:
            PROCS.pop(job, None)
            Q.task_done()


@contextlib.asynccontextmanager
async def lifespan(app):
    # 服务启动时恢复排队任务，退出时通知计算线程停止。
    STOP.clear()
    with connect() as c:
        c.execute(
            "update jobs set status='interrupted',error='服务中断，请重试生成新版本' where status in ('running','cancelling')"
        )
        pending = c.execute(
            "select id from jobs where status='queued' order by created"
        ).fetchall()
    for j in pending:
        Q.put(j["id"])
    t = threading.Thread(target=worker, daemon=True)
    t.start()
    yield
    STOP.set()
    t.join(timeout=6)


app = FastAPI(title="RGB-D Workbench", lifespan=lifespan)


@app.middleware("http")
async def local_only(request: Request, call_next):
    # 检查本机 Host、来源和写请求标记，限制网页接口的访问范围。
    host = request.headers.get("host", "").split(":")[0]
    if host not in {"localhost", "127.0.0.1", "testserver"}:
        return JSONResponse({"detail": "仅支持本机访问"}, status_code=403)
    if (
        request.method not in {"GET", "HEAD", "OPTIONS"}
        and request.headers.get("x-workbench") != "1"
    ):
        return JSONResponse({"detail": "缺少本机操作标记"}, status_code=403)
    origin = request.headers.get("origin")
    if origin and origin not in {
        "http://127.0.0.1:8765",
        "http://localhost:8765",
        "http://127.0.0.1:5173",
        "http://localhost:5173",
    }:
        return JSONResponse({"detail": "不允许的来源"}, status_code=403)
    return await call_next(request)


class Project(BaseModel):
    name: str = Field(min_length=1, max_length=100)


class CleaningConfig(BaseModel):
    estimate_normals: bool = False
    poisson_mesh: bool = False
    pcl_stddev: Literal[1.5, 2.0] | None = None


class UploadConfig(CleaningConfig):
    small: bool = False


@app.get("/api/projects")
def projects():
    # 按创建时间倒序返回项目列表。
    with connect() as c:
        return [
            dict(r) for r in c.execute("select * from projects order by created desc")
        ]


@app.post("/api/projects")
def create_project(p: Project):
    # 创建项目记录；具体拍摄批次在上传时另建。
    pid = uuid.uuid4().hex
    with connect() as c:
        c.execute("insert into projects values(?,?,?)", (pid, p.name, time.time()))
    return dict(id=pid, name=p.name)


@app.delete("/api/projects/{pid}")
def delete_project(pid: str):
    # Delete the whole project because retries share the original capture data.
    with LOCK, connect() as c:
        if not c.execute("select id from projects where id=?", (pid,)).fetchone():
            raise HTTPException(404, "Project not found.")
        versions = c.execute(
            "select id,status from jobs where project_id=?", (pid,)
        ).fetchall()
        if any(j["status"] not in TERMINAL or j["id"] in PROCS for j in versions):
            raise HTTPException(409, "Wait for active uploads or reconstruction jobs to finish before deleting this model.")
        # Stage directories first; restore them if a filesystem or database step fails.
        staged = []
        try:
            for j in versions:
                original = jobdir(j["id"])
                if original.exists():
                    removed = original.with_name("deleted-" + uuid.uuid4().hex)
                    original.rename(removed)
                    staged.append((original, removed))
            c.execute("delete from jobs where project_id=?", (pid,))
            c.execute("delete from projects where id=?", (pid,))
            c.commit()
        except Exception:
            c.rollback()
            for original, removed in reversed(staged):
                removed.rename(original)
            raise
        for _, removed in staged:
            shutil.rmtree(removed)
    return {"deleted": True}


@app.post("/api/projects/{pid}/uploads")
def create_upload(pid: str, cfg: UploadConfig):
    # 创建上传中的任务及目录，保存是否启用小批量诊断。
    with LOCK, connect() as c:
        if not c.execute("select id from projects where id=?", (pid,)).fetchone():
            raise HTTPException(404, "项目不存在")
        jid = uuid.uuid4().hex
        now = time.time()
        (jobdir(jid) / "upload").mkdir(parents=True)
        c.execute(
            "insert into jobs(id,project_id,status,stage,created,updated,small,pcl_stddev,estimate_normals,poisson_mesh) values(?,?,?,?,?,?,?,?,?,?)",
            (jid, pid, "uploading", "uploading", now, now, cfg.small, cfg.pcl_stddev, cfg.estimate_normals, cfg.poisson_mesh),
        )
    return dict(id=jid)


@app.put("/api/uploads/{job}/file")
async def upload_file(job: str, path: str = Form(...), file: UploadFile = File(...)):
    # 分块接收单个文件，检查容量；失败时删除不完整文件。
    async with UPLOAD_LOCK:
        if row(job)["status"] != "uploading":
            raise HTTPException(409, "批次已经提交")
        try:
            rel = safe_relative(path)
        except ValueError as e:
            raise HTTPException(400, str(e))
        target = jobdir(job) / "upload" / str(rel)
        if target.exists():
            raise HTTPException(409, "文件重复")
        if len(list((jobdir(job) / "upload").rglob("*"))) > 1400:
            raise HTTPException(413, "批次文件数量超限")
        target.parent.mkdir(parents=True, exist_ok=True)
        current = sum(
            p.stat().st_size for p in (jobdir(job) / "upload").rglob("*") if p.is_file()
        )
        size = 0
        try:
            with target.open("xb") as stream:
                while chunk := await file.read(1024 * 1024):
                    size += len(chunk)
                    if size > 30_000_000 or current + size > MAX_TOTAL:
                        raise HTTPException(413, "文件或批次容量超限")
                    stream.write(chunk)
        except BaseException:
            target.unlink(missing_ok=True)
            raise
    return dict(bytes=size)


@app.post("/api/uploads/{job}/zip")
async def upload_zip(job: str, file: UploadFile = File(...)):
    # 先检查 ZIP 内全部路径、类型和大小，再解压，避免留下部分批次。
    async with UPLOAD_LOCK:
        if row(job)["status"] != "uploading":
            raise HTTPException(409, "批次已提交")
        upload = jobdir(job) / "upload"
        if any(upload.iterdir()):
            raise HTTPException(409, "ZIP需上传至空批次")
        archive = jobdir(job) / "batch.zip"
        size = 0
        try:
            with archive.open("wb") as out:
                while chunk := await file.read(1024 * 1024):
                    size += len(chunk)
                    if size > MAX_TOTAL:
                        raise ValueError("ZIP容量超限")
                    out.write(chunk)
            with zipfile.ZipFile(archive) as z:
                members = []
                total = 0
                seen = set()
                for info in z.infolist():
                    if info.is_dir():
                        continue
                    if (
                        info.filename.startswith("__MACOSX/")
                        or PurePosixPath(info.filename).name == ".DS_Store"
                    ):
                        continue
                    rel = safe_relative(info.filename)
                    if stat.S_ISLNK(info.external_attr >> 16):
                        raise ValueError("不接受符号链接")
                    if str(rel).casefold() in seen:
                        raise ValueError("ZIP内路径重复")
                    seen.add(str(rel).casefold())
                    total += info.file_size
                    if (
                        info.file_size > 30_000_000
                        or total > MAX_TOTAL
                        or len(seen) > 1202
                    ):
                        raise ValueError("ZIP解压容量或文件数超限")
                    members.append((info, rel))
                for info, rel in members:
                    dest = upload / str(rel)
                    dest.parent.mkdir(parents=True, exist_ok=True)
                    with z.open(info) as inp, dest.open("xb") as out:
                        shutil.copyfileobj(inp, out, 1024 * 1024)
        except Exception as e:
            shutil.rmtree(upload)
            upload.mkdir()
            raise HTTPException(400, str(e))
        finally:
            archive.unlink(missing_ok=True)
    return dict(files=len(members))


@app.post("/api/uploads/{job}/complete")
async def complete(job: str):
    # 上传完成后将任务加入计算队列；重复提交不会重复排队。
    async with UPLOAD_LOCK:
        j = row(job)
        if j["status"] != "uploading":
            return j
        try:
            src = source_root(jobdir(job) / "upload")
        except Exception as e:
            raise HTTPException(400, str(e))
        update(job, status="queued", stage="queued", source=str(src))
        Q.put(job)
    return row(job)


@app.get("/api/projects/{pid}/jobs")
def jobs(pid: str):
    # 列出指定项目的所有任务版本。
    with connect() as c:
        return [
            dict(r)
            for r in c.execute(
                "select * from jobs where project_id=? order by created desc", (pid,)
            )
        ]


@app.get("/api/jobs/{job}")
def get_job(job: str):
    # 返回任务状态、模型信息与末尾日志，供前端轮询。
    j = row(job)
    j["models"] = json.loads(j.pop("results"))
    for model in j["models"]:
        folder = jobdir(job) / f"model-{model['model_id']}"
        variants = []
        for threshold in (2.0, 1.5):
            subdir = f"pcl-sor-{threshold}"
            report = folder / subdir / "report.json"
            if report.is_file():
                counts = json.loads(report.read_text())
                for name, key in (("cleaned", "kept_points"), ("removed", "removed_points")):
                    if (report.parent / f"{name}.ply").is_file():
                        variants.append(dict(path=f"{subdir}/{name}", points=counts[key],
                                             label=f"PCL {name} (σ = {threshold})"))
        normal_dir = folder / "pcl-normals"
        if (normal_dir / "normals.ply").is_file() and (normal_dir / "report.json").is_file():
            report = json.loads((normal_dir / "report.json").read_text())
            variants.append(dict(path="pcl-normals/normals", points=report["points"],
                                 label=f"Point cloud with normals (k = {report['k']})"))
        surface = folder / "poisson/report.json"
        if surface.is_file() and (surface.parent / "mesh.ply").is_file():
            mesh = json.loads(surface.read_text())
            variants.append(dict(path="poisson/mesh", points=mesh["vertices"], label="Poisson surface"))
        model["pcl_variants"] = variants
    log = jobdir(job) / "execution.log"
    j["log"] = log.read_text(errors="replace")[-6000:] if log.exists() else ""
    return j


@app.post("/api/jobs/{job}/cancel")
def cancel(job: str):
    # 请求取消任务；运行中的子进程由 execute 检测并停止。
    with LOCK:
        j = row(job)
        if j["status"] not in TERMINAL:
            update(
                job, status="cancelling" if j["status"] == "running" else "cancelled"
            )
    return row(job)


@app.post("/api/jobs/{job}/retry")
def retry(job: str, cfg: CleaningConfig | None = None):
    # 以原始输入创建新的任务版本，保留旧版本结果。
    with LOCK:
        old = row(job)
        if old["status"] not in TERMINAL or not old["source"]:
            raise HTTPException(409, "只能重试已结束的任务")
        jid = uuid.uuid4().hex
        jobdir(jid).mkdir(parents=True)
        now = time.time()
        with connect() as c:
            c.execute(
                "insert into jobs(id,project_id,status,stage,created,updated,small,source,pcl_stddev,estimate_normals,poisson_mesh) values(?,?,?,?,?,?,?,?,?,?,?)",
                (
                    jid,
                    old["project_id"],
                    "queued",
                    "queued",
                    now,
                    now,
                    old["small"],
                    str(capture_source(old)),
                    old["pcl_stddev"] if cfg is None else cfg.pcl_stddev,
                    old["estimate_normals"] if cfg is None else cfg.estimate_normals,
                    old["poisson_mesh"] if cfg is None else cfg.poisson_mesh,
                ),
            )
        Q.put(jid)
        return dict(id=jid)


@app.get("/api/jobs/{job}/photos")
def photos(job: str):
    # 整理每张照片的缩略图、深度与置信度展示信息。
    row(job)
    base = jobdir(job)
    p = base / "depth/report.json"
    if not p.exists():
        return []
    rows = json.loads(p.read_text())["images"]
    registered = set()
    for r in json.loads(row(job)["results"]):
        for c in json.loads(
            (base / f"model-{r['model_id']}/cameras-meters.json").read_text()
        ):
            registered.add(c["photo"])
    return [
        dict(
            photo=r["photo"],
            valid_percent=r["valid_percent"],
            confidence_percent=r["confidence_percent"],
            registered=r["photo"] in registered,
        )
        for r in rows
    ]


@app.get("/api/jobs/{job}/artifacts/{path:path}")
def artifact(job: str, path: str):
    # 在允许的任务目录中定位并返回结果文件。
    row(job)
    base = jobdir(job).resolve()
    p = (base / path).resolve()
    if (
        not p.is_relative_to(base)
        or p.is_symlink()
        or not p.is_file()
        or "upload" in p.relative_to(base).parts
    ):
        raise HTTPException(404, "文件不存在")
    return FileResponse(p, filename=p.name if p.suffix in {".ply", ".zip"} else None)


@app.get("/api/jobs/{job}/download")
def download_bundle(job: str):
    # 打包输入、配置、脚本快照、日志和结果，便于保存与复查。
    j = row(job)
    if j["status"] not in {"succeeded", "partial"}:
        raise HTTPException(409, "结果尚未完成")
    base = jobdir(job)
    target = base / "export.zip"
    with LOCK:
        if not target.exists():
            tmp = base / "export.partial"
            try:
                with zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED) as z:
                    for f in base.rglob("*"):
                        if (
                            f.is_file()
                            and not f.is_symlink()
                            and f.name
                            not in {"export.zip", "export.partial", "database.db"}
                            and "upload" not in f.relative_to(base).parts
                        ):
                            z.write(f, str(f.relative_to(base)))
                    source = capture_source(j)
                    for f in source.rglob("*"):
                        if f.is_file() and not f.is_symlink():
                            z.write(f, "inputs/" + str(f.relative_to(source)))
                tmp.replace(target)
            except Exception:
                tmp.unlink(missing_ok=True)
                raise
    return FileResponse(target, filename=f"rgbd-{job[:8]}.zip")


@app.get("/api/health")
def health():
    # 提供轻量健康检查及当前计算配置。
    return dict(ok=True, worker="single", confidence=[1, 2])


@app.get("/{path:path}")
def frontend(path: str):
    # 提供编译后的网页资源，并支持前端路由回退。
    dist = ROOT / "frontend/dist"
    p = (dist / path).resolve()
    if p.is_relative_to(dist.resolve()) and p.is_file():
        return FileResponse(p)
    if (dist / "index.html").exists():
        return FileResponse(dist / "index.html")
    raise HTTPException(503, "前端尚未构建")
