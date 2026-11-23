#!/bin/sh
set -eu
cd "$(dirname "$0")"
echo "Starting RGB-D Point Cloud Workbench..."
echo "Once the server is ready, open http://127.0.0.1:8765 in your browser."
echo "Keep this terminal window open. Press Ctrl+C here to stop the service."
exec ./start_workbench.sh
