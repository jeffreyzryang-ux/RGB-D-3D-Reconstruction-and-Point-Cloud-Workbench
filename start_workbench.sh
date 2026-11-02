#!/bin/sh
set -eu
cd "$(dirname "$0")"
if [ ! -f frontend/dist/index.html ]; then sh scripts/build_frontend.sh; fi
exec .venv/bin/python -m uvicorn backend.app:app --host 127.0.0.1 --port 8765
