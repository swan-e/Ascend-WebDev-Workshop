#!/bin/bash

set -e

# Replace these with your info
GITHUB_USERNAME="your-github-username"
REPO_NAME="your-repo-name"
REPO_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"


if command -v jq >/dev/null 2>&1; then
    echo "Adding homepage for deployment..."
    jq --arg url "$GITHUB_USERNAME.github.io/$REPO_NAME" '.homepage = ("https://" + $url)' \
        package.json > package.tmp.json && mv package.tmp.json package.json
else
    sed -i 's|"homepage": *".*"|"homepage": "https://'"$GITHUB_USERNAME"'.github.io/'"$REPO_NAME"'"|' package.json
fi

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