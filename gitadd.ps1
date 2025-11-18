# Initialize git

$repoURL = "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

# Check if .git exists
if (-not (Test-Path ".git")) {
    Write-Host "Initializing git repository..."
    git init
    git remote add origin $repoURL
}

Write-Output "Staging all changes..."
git add -A

Write-Output "Committing..."
git commit -m "Autocommit"

Write-Output "Pushing to main..."
git push -u origin main

Write-Output "Done! Now run: .\deploy.ps1"