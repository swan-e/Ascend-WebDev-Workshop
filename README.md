# Quick Start for this React App

1. Open VS Code and open this folder.
2. Open a terminal in VS Code.
3. Run:
   npm install
   npm start
   npm run build
4. Install git:
   git init
   git remote add origin https://github.com/YOURUSERNAME/PROJECTNAME.git
5. To deploy to GitHub Pages:
   npm install --save-dev gh-pages
   Add the following to package.json:
     "homepage": "https://YOURUSERNAME.github.io/PROJECTNAME",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   Then run:
     npm run deploy