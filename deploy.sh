#!/bin/bash

set -e

# Replace these with your info
GITHUB_USERNAME="your-github-username"
REPO_NAME="your-repo-name"
REPO_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

# Update package.json
echo "Updating homepage field in package.json..."
sed -i 's|"homepage"[[:space:]]*:[[:space:]]*"[^"]*"|"homepage": "https://'"$GITHUB_USERNAME"'.github.io/'"$REPO_NAME"'"|' package.json

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

echo "Checking environment..."

# Check for npm
if ! command_exists npm; then
    echo "npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# Check for git
if ! command_exists git; then
    echo "git is not installed. Please install git first."
    exit 1
fi

# Install dependencies
echo "Installing npm dependencies..."
npm install

# Check for gh-pages in devDependencies
if ! npm list --depth=0 | grep -q "gh-pages"; then
    echo "Installing gh-pages..."
    npm install --save-dev gh-pages
fi

# Check if .git exists
if [ ! -d ".git" ]; then
    echo "Initializing git repository..."
    git init
    git remote add origin "$REPO_URL"
fi

# Build the project
echo "Building project..."
npm run build

# Deploy the project
echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment complete!"