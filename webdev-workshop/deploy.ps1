# deploy.ps1

$GITHUB_USERNAME = "your-github-username"
$REPO_NAME = "your-repo-name"
$packagePath = "package.json"
$repoURL = "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
$homepageURL = "https://$GITHUB_USERNAME.github.io/$REPO_NAME"

# Update homepage in package.json
Write-Host "Updating homepage field in package.json..."
(Get-Content $packagePath) -replace '("homepage"\s*:\s*")[^"]*', "`${1}$homepageURL" | Set-Content $packagePath
Write-Host "package.json homepage updated successfully to $homepageURL"
Write-Host "`nVerifying update..."


Write-Host "Installing npm dependencies..."
npm install

# Install gh-pages if missing
if (-not (Test-Path "node_modules\gh-pages")) {
    Write-Host "Installing gh-pages..."
    npm install --save-dev gh-pages
} else {
    Write-Host "gh-pages already installed."
}

# Initialize git if needed
if (-not (Test-Path ".git")) {
    Write-Host "Initializing git repository..."
    git init
}

# Ensure origin remote is set
if (-not (git remote | Select-String "origin")) {
    Write-Host "Adding remote origin..."
    git remote add origin $repoURL
} else {
    Write-Host "Remote origin already set."
}

Write-Host "Building project..."
npm run build

Write-Host "Deploying to GitHub Pages..."
npm run deploy

Write-Host "Deployment complete!"
