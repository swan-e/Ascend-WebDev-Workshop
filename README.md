# Quick Start for this React App

1. Open VSCode and open this folder.
2. Open a terminal in VS Code.
3. Install git and node.js
4. To deploy to GitHub Pages:
   Edit <github-username> and <repo-name> in:
   - deploy.ps1 (FOR WINDOWS )
   - deploy.sh (FOR MAC/LINUX)
5. Type "cd webdev-workshop"
   Then run:
     IF ON WINDOWS:
     1. Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
     2. Change deploy parameters
     3. .\deploy.ps1

     IF ON LINUX/MACOS:
     4. chmod +x bash.sh
     5. Change deploy parameters
     6. ./deploy.sh
6. Any changes you make:
   Run:
    .\gitadd.ps1 (ON WINDOWS)
    ./gitadd.sh (ON LINUX/MACOS)
   Then Run Step 5. commands again (deploys)
7. Open up https://<your-github-username>.github.io/<your-repo-name>/ in your browser
8. Run step 6 and then 5 again if you make changes to website