#!/bin/bash

# Stop on error
set -e

REPO_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

# Check if .git exists
if [ ! -d ".git" ]; then
    echo "Initializing git repository..."
    git init
    git remote add origin "$REPO_URL"
fi

echo "Staging all changes..."
git add -A

echo "Committing..."
git commit -m "Autocommit"

echo "Pushing to main..."
git push -u origin main

echo "Done! Now run: ./deploy.sh"
