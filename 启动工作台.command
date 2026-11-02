#!/bin/sh
cd "$(dirname "$0")"
echo "启动后请访问 http://127.0.0.1:8765；按 Ctrl+C 停止服务。"
exec ./start_workbench.sh
