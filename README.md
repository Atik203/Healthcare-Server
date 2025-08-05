# Healthcare Server

A Node.js + Express + TypeScript + Prisma healthcare server with automated CI/CD workflows.

## 🤖 Automated Workflows

This repository includes automated workflows to streamline development:

### Issue Automation

- **Auto-create Issues**: When you push to the `main` branch, an issue is automatically created with commit details
- **Auto-close Issues**: Old auto-generated issues are automatically closed to keep the issue tracker clean

### Pull Request Automation

- **Auto-create PRs**: When you push to the `dev` branch, a pull request is automatically created targeting `main`
- **Auto-merge PRs**: Auto-generated pull requests from `dev` to `main` are automatically merged
- **Branch Preservation**: The `dev` branch is never deleted and remains available for continuous development

## 🚀 Development Workflow

1. **Work on the dev branch**: Make your changes and commit to the `dev` branch

   ```bash
   git checkout dev
   git add .
   git commit -m "Your commit message"
   git push origin dev
   ```

2. **Automatic PR Creation**: A pull request will be automatically created from `dev` to `main`

3. **Automatic Merge**: The pull request will be automatically merged to `main` with squash merge

4. **Issue Creation**: An issue will be created for the merge to `main` for tracking

5. **Continue Development**: The `dev` branch remains available for your next changes

## 🔧 Project Setup

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Atik203/Healthcare-Server.git
cd Healthcare-Server

# Install dependencies
yarn install

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials

# Run database migrations (if using Prisma)
npx prisma migrate dev

# Start development server
yarn dev
```

### Available Scripts

- `yarn dev` - Start development server with hot reload
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn type-check` - Run TypeScript type checking

## 📝 Features

- **Express.js** - Fast, minimalist web framework
- **TypeScript** - Type safety and better development experience
- **Prisma** - Modern database toolkit
- **Automated CI/CD** - GitHub Actions workflows for seamless development
- **Issue Tracking** - Automatic issue creation for all changes
- **Branch Management** - Persistent dev branch for continuous development

## 🏗️ Project Structure

```text
Healthcare-Server/
├── src/
│   ├── server.ts          # Express server entry point
│   └── ...                # Other source files
├── prisma/
│   └── schema.prisma      # Database schema
├── .github/
│   └── workflows/         # GitHub Actions workflows
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```
