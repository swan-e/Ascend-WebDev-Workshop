# Initialize git

# Check if .git exists
if (-not (Test-Path ".git")) {
    Write-Host "Git not properly initialzed. Exiting..." -ForegroundColor Red
    exit 1 
}

Write-Output "Staging all changes..."
git add -A

Write-Output "Committing..."
git commit -m "Autocommit"

Write-Output "Pushing to main..."
git push -u origin main

Write-Output "Done! Now run: .\deploy.ps1"