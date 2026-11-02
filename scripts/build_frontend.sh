#!/bin/sh
set -eu
cd "$(dirname "$0")/../frontend"
NODE_BIN="${SLAM_NODE:-$(pwd)/../.runtime/node/bin/node}"
if [ ! -x "$NODE_BIN" ]; then NODE_BIN=$(command -v node); fi
"$NODE_BIN" node_modules/typescript/bin/tsc --noEmit -p tsconfig.json
"$NODE_BIN" node_modules/vite/bin/vite.js build
