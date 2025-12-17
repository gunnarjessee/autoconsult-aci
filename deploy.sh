#!/usr/bin/env bash
set -euo pipefail

# Deploy built static site to nginx web root.
# Default deploy path targets /var/www/html/blueridgeaci.com (same as "$HOME/../var/www/html/blueridgeaci.com").

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# You can override these:
: "${DEPLOY_DIR:=//var/www/html/blueridgeaci.com}"
: "${NODE_INSTALL_CMD:=npm ci}"
: "${BUILD_CMD:=npm run build}"

echo "Repo:       ${REPO_ROOT}"
echo "Deploy dir: ${DEPLOY_DIR}"

cd "${REPO_ROOT}"

if [[ ! -f package.json ]]; then
  echo "Error: package.json not found at repo root: ${REPO_ROOT}" >&2
  exit 1
fi

echo
echo "Installing deps..."
${NODE_INSTALL_CMD}

echo
echo "Building..."
${BUILD_CMD}

if [[ ! -d "${REPO_ROOT}/dist" ]]; then
  echo "Error: dist/ was not generated. Build failed?" >&2
  exit 1
fi

echo
echo "Creating deploy directory (requires sudo)..."
sudo mkdir -p "${DEPLOY_DIR}"

echo
echo "Syncing dist/ → ${DEPLOY_DIR} (requires sudo)..."
sudo rsync -a --delete "${REPO_ROOT}/dist/" "${DEPLOY_DIR}/"

echo
echo "Deployed successfully."


