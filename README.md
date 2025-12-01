<!-- markdownlint-disable MD012 MD024 MD033 MD032 MD034-->
# Quick Start for this React App 🚀

Follow these steps to set up, run, and deploy your website!

## 1. Open the Project

a. Open **VSCode** and drag in the downloaded folder.  
b. Open a **terminal** in VSCode.  

## 2. Install Dependencies

Make sure you have **git** and **Node.js** installed on your system.  
a. https://git-scm.com/install/  
b. https://nodejs.org/en/download  

## 3. Run the Development Server

If you want to make hot reloaded changes, run the developer server to see real time changes for you website as you develop.

### Windows

```powershell
Unblock-File .\dev.ps1
Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
.\dev.ps1
```

### Linux/Macos

```bash
chmod +x dev.sh
./dev.sh
```

## 4. Deploy website to github

This step allows for you to put your website on the internet (through github pages). Make sure to add your github username and repo name exactly as how you made it in your github to properly deploy. The files in the folder should show up in your github.

### Windows

```powershell
Unblock-File .\dev.ps1
Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
.\deploy.ps1 <github-username> <repo_name>
```

### Linux/Macos

```bash
chmod +x dev.sh
./deploy.sh <github-username> <repo_name>
```

## 5. Update website when wanted

To make any changes after deployment, you have to edit the file and sync the local edits with the remote github file. This can be done by running the git add command.

### Windows

```powershell
Unblock-File .\gitadd.ps1
.\gitadd.ps1
```

### Linux/Macos

```bash
chmod +x gitadd.sh
./gitadd.sh
```

## 6. Development/Deploy Cycle

Use the devloper mode to make instant changes to your website to view and edit to your liking. Once you feel satisfied, add these changes to git using the git command in step 4 to make the changes appear on the website online. This is the typical workflow of a web developer!

## 7. View you website

Open up https://<your-github-username>.github.io/<your-repo-name>/ in your browser to see your very own website! Congratulations!
