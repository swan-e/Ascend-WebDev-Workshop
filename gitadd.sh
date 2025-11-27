#!/bin/bash

# Stop on error
set -e

# Check if .git exists
if [ ! -d ".git" ]; then
    echo "Git not properly initialzed. Exiting..."
    exit 1
fi

echo "Staging all changes..."
git add -A

echo "Committing..."
git commit -m "Autocommit"

echo "Pushing to main..."
git push -u origin main

echo "Done! Now run: ./deploy.sh"
