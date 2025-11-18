# dev.ps1
$packagePath = "package.json"

Write-Host "Starting local development server..." -ForegroundColor Cyan

Write-Host "Setting homepage to empty string in package.json..."
(Get-Content $packagePath) -replace '("homepage"\s*:\s*")[^"]*', '${1}' | Set-Content $packagePath
Write-Host "Homepage cleared for local development" -ForegroundColor Green
Write-Host "Checking Node.js installation..."

Write-Host "Installing npm dependencies..."
npm install

if (-not (Get-ChildItem node_modules -Recurse | Where-Object { $_.Name -eq "gh-pages" })) {
    Write-Host "Installing gh-pages..."
    npm install --save-dev gh-pages
} else {
    Write-Host "gh-pages already installed."
}

if (-not (Test-Path ".git")) {
    Write-Host "Initializing git repository..."
    git init
}

$existingRemote = git remote
if (-not ($existingRemote -contains "origin")) {
    Write-Host "Adding remote origin..."
    git remote add origin $remoteRepo
} else {
    Write-Host "Remote origin already set."
}

$node = Get-Command node -ErrorAction SilentlyContinue
if (-not $node) {
    Write-Warning "Node.js is NOT installed. Please download from https://nodejs.org/"
    exit 1
} else {
    Write-Host "Node.js found at: $($node.Source)"
    node -v
}

Write-Host ""
Write-Host "Checking Git installation..."
$git = Get-Command git -ErrorAction SilentlyContinue

if (-not $git) {
    Write-Warning "Git is NOT installed. Please download from https://git-scm.com/"
} else {
    Write-Host "Git found at: $($git.Source)"
    git --version
}

Write-Host ""
Write-Host "Installing npm dependencies..."
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "npm install failed." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Starting development server (npm start)..."
npm start