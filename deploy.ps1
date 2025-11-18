# deploy.ps1

$GITHUB_USERNAME = "username"
$REPO_NAME = "repo-name"
$packagePath = "package.json"
$repoURL = "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
$homepageURL = "https://$GITHUB_USERNAME.github.io/$REPO_NAME"

# Update homepage in package.json
Write-Host "Updating homepage field in package.json..."
(Get-Content $packagePath) -replace '("homepage"\s*:\s*")[^"]*', "`${1}$homepageURL" | Set-Content $packagePath
Write-Host "package.json homepage updated successfully to $homepageURL"
Write-Host "`nVerifying update..."

Write-Host "Checking Node.js installation..."

# Try to find node on the system
$node = Get-Command node -ErrorAction SilentlyContinue
if (-not $node) {
    Write-Warning "Node.js is NOT installed. Please download from https://nodejs.org/"
} else {
    Write-Host "Node.js found at: $($node.Source)"
    $nodeDir = Split-Path $node.Source

    # Add to PATH only if missing
    if (-not ($env:Path -like "*$nodeDir*")) {
        Write-Host "Adding Node.js to PATH..."
        [Environment]::SetEnvironmentVariable("Path",
          $env:Path + ";$nodeDir",
          [EnvironmentVariableTarget]::User)
    } else {
        Write-Host "Node.js already in PATH"
    }

    node -v
}

Write-Host "`nChecking Git installation..."
# Try to find git
$git = Get-Command git -ErrorAction SilentlyContinue

if (-not $git) {
    Write-Warning "Git is NOT installed. Please download from https://git-scm.com/"
} else {
    Write-Host "Git found at: $($git.Source)"
    $gitDir = Split-Path $git.Source

    # Add to PATH only if missing
    if (-not ($env:Path -like "*$gitDir*")) {
        Write-Host "Adding Git to PATH..."
        [Environment]::SetEnvironmentVariable("Path",
          $env:Path + ";$gitDir",
          [EnvironmentVariableTarget]::User)
    } else {
        Write-Host "Git already in PATH"
    }

    git -v
}

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
