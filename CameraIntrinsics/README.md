# 内参相机

在已有 Xcode 工程中按 Command-R 重新安装到 iPhone。保留原来的签名 Team 和 Bundle Identifier 即可，无需创建新项目。

## 拍摄与发送

1. 打开 App，允许相机访问，等待约两秒预热；自动对焦仍会持续调整，并不保证两秒后对焦已经锁定。
2. 实时预览左上角显示原始图像尺寸。点击相机按钮拍一张，或“每 2 秒连拍”连续采集；保存较慢时会跳过本次定时触发，不堆积帧。
3. 点击“已拍照片 · 预览与排序”进入照片列表（会停止连拍）。点击缩略图放大预览，按住右侧 ≡ 上下拖动排序；点击左侧红色减号，再点击“删除”，移除照片及配套 JSON（不可撤销）；点击“完成”返回，再点击“打包分享”。选择 AirDrop 发送到 Mac，或“存储到文件”。打包分享也会自动停止连拍。
4. 在电脑上解压 ZIP。默认按拍摄成功的先后顺序；如果调整了排序，则按调整后的顺序编号为 `1`、`2`、`3`……，每个数字文件夹中包含 `image.jpg` 和 `calibration.json`。

照片按批次保存在 App 的 Documents/CaptureBatches/batch_… 中。点击“重置相机 · 开始新一批”会将计数归零、清除上次的分享链接并切换到新目录；打包只包含当前批次。App 进程重新启动时也会开始新批次，普通切后台再返回则继续当前批次。旧批次和旧版 Captures 文件仍保留在本地，但不会混入当前 ZIP；当前界面不提供历史批次导出入口，请先导出本批照片再重置。再次导出会生成新的 ZIP，旧 ZIP 也会保留；大量拍摄需留意设备剩余空间。卸载 App 会删除这些本地文件，请先导出。

每个新批次从 `1` 开始；保存失败不会占用编号。JSON 的 `capture_id` 始终保留原拍摄编号。排序只改变导出文件夹编号，不改照片像素或内参；ZIP 中的 `order.json` 记录导出文件夹与原拍摄编号的对应关系。追加拍摄的新照片排在列表末尾。删除后原拍摄编号不复用，导出文件夹仍连续编号为 1、2、3……。删除全部照片后禁止打包，可继续拍摄。已经生成或发送的旧 ZIP 不会因删除而修改，请重新打包。

## 每张图片的内参

- 图片像素与 K 均取自同一个 ARFrame，按快门时选取最新帧（不接受超过 0.5 秒的旧帧）。
- JPEG 的 EXIF `UserComment` 存储完整 JSON；同样的 JSON 另存为 `calibration.json`。
- 内参包含 fx、fy、cx、cy、按行排列的 K_rows、实际宽高、帧时间戳。单位是像素。
- 每次保存后重新读取 JPEG，确认内嵌 JSON 及宽高正确；失败的照片不会计入数量或进入导出包。
- `distortion_coefficients: null` 表示未测量畸变，不能视为零。
- 通用照片查看器可能不展示 UserComment；重建软件也未必自动识别这个自定义字段，需要导入 JSON 或编写适配。

## 分辨率和方向

这是 ARKit 图像流拍摄工具，不是系统相机的全分辨率照片模式。使用 ARKit 默认视频格式，尺寸在画面上显示；不会将小图放大冒充高分辨率照片。

保存 JPEG 时保留传感器原始像素方向，不旋转、不裁剪、不缩放，也不额外进行几何去畸变。EXIF Orientation 固定为 1，因此竖持手机时，电脑上看到的照片可能横着；K 对应这些实际存储像素。预览为适应竖屏可能旋转和裁剪，不能拿预览尺寸代替保存尺寸。如果后续旋转、缩放或裁剪图片，必须同步变换内参。

## 验证

已通过 iPhoneOS SDK 无签名编译；合成图像测试通过了 JPEG 内嵌 JSON 回读、配套 JSON 一致性、像素上下方向、错误尺寸拒绝和 ZIP 完整性、排序后编号及图片/内参配对检查。可在 Mac 运行 `python3 tests/run_storage_checks.py` 复查存储流程。真机相机预览、拍摄及 AirDrop 仍需在手机上验证。建议先拍 3 张并导出 ZIP，再开展大批量拍摄。

Apple 文档：
- https://developer.apple.com/documentation/arkit/arsession/currentframe
- https://developer.apple.com/documentation/arkit/arcamera/intrinsics
- https://developer.apple.com/documentation/imageio/exif-dictionary-keys
- https://developer.apple.com/documentation/foundation/nsfilecoordinator/readingoptions/foruploading

## 清理本地空间

主界面点击“清理全部本地照片与 ZIP”，确认“删除全部”后清理当前批次、历史批次、旧版 Captures、导出 ZIP 以及未完成的临时保存文件。该操作不可撤销，请先导出需要的照片。清理后开始空白新批次，从 1 编号。已经 AirDrop 到电脑或另存到其他位置的文件不会被删除。此操作释放的是手机本地存储空间。

## LiDAR 深度导出

本版本保留 ARKit 图像流采集，启用 `ARWorldTrackingConfiguration.frameSemantics = .sceneDepth`，从同一个 `ARFrame` 获取彩色图像、内参及 LiDAR 深度。参考的 Apple 页面使用 AVFoundation；本实现没有切换到该示例的 AVFoundation 静态拍照模式。

支持 LiDAR sceneDepth 的设备会显示深度尺寸，拍摄目录包含：

- `image.jpg`：彩色图像及内嵌标定 JSON。
- `calibration.json`：RGB 内参、帧时间戳及深度可用标记。
- `depth.f32`：小端 float32，单位米，逐行排列，无行填充；不是可直接打开的普通图片。
- `confidence.u8`：若 API 提供，则保存同尺寸 uint8 置信度，0=低、1=中、2=高。
- `depth.json`：深度尺寸、格式、来源、同帧时间戳及深度分辨率下的 `K_depth_rows`。

深度是相对相机平面的 Z 距离，不是沿斜射线到光心的欧氏距离。非有限值及 <=0 的值视为无效；低置信度应按用途筛除。使用 sceneDepth 而非 smoothedSceneDepth。深度尺寸通常低于 RGB，按原始传感器方向保存；不要按 RGB 的 1920×1440 直接 reshape 深度。K_depth_rows 由同帧 RGB 内参按深度宽高比例缩放而来。图像旋转、裁剪、缩放后必须同步处理深度及内参。

设备不支持时仅保存彩色图像，并在界面与 calibration.json 明确标记。支持但当前帧缺少深度时拒绝本次拍摄，稍后重试。旧照片无法补生成当时的 LiDAR 深度，需要重新拍摄。

电脑读取（需要 NumPy）：

```python
import json
from pathlib import Path
import numpy as np
folder = Path('Captures/1')
meta = json.loads((folder / 'depth.json').read_text())
depth = np.fromfile(folder / 'depth.f32', dtype='<f4').reshape(meta['height'], meta['width'])
valid = np.isfinite(depth) & (depth > 0)
if meta['confidence_file']:
    confidence = np.fromfile(folder / meta['confidence_file'], dtype=np.uint8).reshape(depth.shape)
    valid &= confidence >= 1
print(depth.shape, depth[valid])
```

已通过 iPhoneOS 编译与合成深度测试（Float32 数值、行填充去除、置信度、打包及删除）。LiDAR 真机深度质量与实际场景对齐仍需试拍验证。

参考：
- https://developer.apple.com/documentation/avfoundation/capturing-depth-using-the-lidar-camera
- https://developer.apple.com/documentation/arkit/arframe/scenedepth
- https://developer.apple.com/documentation/arkit/ardepthdata
