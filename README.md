# SLAM 点云工作台

已在此目录配置独立 Python 虚拟环境、前端依赖、本地 Node 和构建产物。

## 启动

双击 `启动工作台.command`，保持终端窗口运行，然后访问 http://127.0.0.1:8765 。按 Ctrl+C 停止。

也可以在终端运行：

```sh
cd /Users/jeffrey/Downloads/SLAM
./start_workbench.sh
```

同一端口只能启动一份工作台。若原项目的工作台还在运行，请先停止它。

## 文件

- frontend/src/main.tsx：前端页面
- frontend/src/Viewer.tsx：点云展示与测距
- frontend/src/style.css：页面样式
- backend/app.py：后端接口、任务调度
- scripts/：深度解析、相机重建、点云融合算法
- report_generators/：历史报告生成脚本
- reports/：生成的报告产物（运行报告脚本后创建）
- docs/工作台使用说明.md：上传格式与功能说明

修改前端后运行 `sh scripts/build_frontend.sh`，随后重启服务。

上传数据和结果自动保存在此目录的 data/workbench 中。原项目历史上传和模型未复制，请在页面上传拍摄数据。

此环境配置适用于当前 Mac；.venv 使用本机 Homebrew Python 3.14。迁移到其他电脑需重建虚拟环境并安装 requirements.web.lock.txt 中的依赖。
