# Quick Start for this React App

1. Open VSCode and open this folder.
2. Open a terminal in VS Code.
3. Install git and node.js
4. To deploy to GitHub Pages:
   Edit the following in package.json:
     "homepage": "https://YOURUSERNAME.github.io/PROJECTNAME",
   Then run:
     IF ON WINDOWS:
     Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
     .\deploy.ps1

     IF ON LINUX/MACOS:
     chmod +x bash.sh
     ./bash.sh
5. Open up https://<your-github-username>.github.io/<your-repo-name>/ in your browser
6. Any changes you make:
   Run:
    .\gitadd.ps1 (ON WINDOWS)
    ./gitadd.sh (ON LINUX/MACOS)
   Then Run Step 4. commands again (deploys/bash)