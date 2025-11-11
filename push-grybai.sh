#!/usr/bin/env bash
set -euo pipefail

# Usage: ./push-grybai.sh [file_path] [commit_message]
# Example: ./push-grybai.sh task/grybai.html "Add grybai.html"
FILE="${1:-task/grybai.html}"
COMMIT_MSG="${2:-Add grybai.html}"

# Ensure inside a git repository
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Not inside a git repository. cd to your repo root in the VS Code terminal."
  exit 1
fi

# Ensure file exists in repo
if [ ! -f "$FILE" ]; then
  echo "File not found: $FILE"
  exit 1
fi

# Determine current branch
BRANCH=$(git symbolic-ref --quiet --short HEAD || echo "main")

# Update from remote, add, commit and push
git fetch origin
git pull --rebase origin "$BRANCH"
git add "$FILE"
git commit -m "$COMMIT_MSG"
git push origin "$BRANCH"

echo "Successfully pushed $FILE to origin/$BRANCH"