# Healthcare Server

## 🤖 Automated Workflows

This repository includes several automated workflows to streamline development:

### Issue Automation

- **Auto-create Issues**: When you push to the `main` branch, an issue is automatically created with commit details
- **Auto-close Issues**: Old auto-generated issues are automatically closed to keep the issue tracker clean

### Pull Request Automation

- **Auto-create PRs**: When you push to the `dev` branch, a pull request is automatically created targeting `main`
- **Auto-merge PRs**: Auto-generated pull requests from `dev` to `main` are automatically merged
- **Branch Management**: The `dev` branch is automatically created if it doesn't exist

## 🚀 Development Workflow

1. **Work on the dev branch**: Make your changes and commit to the `dev` branch

   ```bash
   git checkout dev
   git add .
   git commit -m "Your commit message"
   git push origin dev
   ```

2. **Automatic PR Creation**: A pull request will be automatically created from `dev` to `main`

3. **Automatic Merge**: The pull request will be automatically merged to `main`

4. **Issue Creation**: An issue will be created for the merge to `main` for tracking

## 🔧 Manual Setup

If the `dev` branch doesn't exist, you can create it manually:

```bash
git checkout -b dev
git push origin dev
```

Or trigger the "Setup Dev Branch" workflow from the GitHub Actions tab.

## 📝 Features

- Automated issue tracking for all changes
- Streamlined development workflow with auto-PRs
- Clean merge history with squash merges
- Automatic branch cleanup after merges
