# Contributing to The Stability Nexus Website

⭐ First off, thank you for considering contributing to this project! ⭐

We welcome contributions from everyone. By participating in this project, you agree to abide by our Code of Conduct.

## 💬 IMPORTANT: Discord Communication is Mandatory

**All project communication MUST happen on Discord. We do not pay attention to GitHub notifications.**

- Join the server via the [Discord Invite](https://discord.gg/YzDKeEfWtS).
- All discussions, questions, and updates should be on Discord.
- GitHub is for code only - Discord is for communication.

**PRs without Discord updates will not be reviewed or may face delays.**

---

## 📖 Table of Contents

- [How Can I Contribute?](#how-can-i-contribute)
- [Coding with AI](#coding-with-ai)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Code Style Guidelines](#code-style-guidelines)

---

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:
- Clear and descriptive title
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Environment details (Browser, OS, Node version)

### Suggesting Features

Feature suggestions are welcome! Please:
- Check if the feature has already been suggested
- Provide a clear description of the feature
- Explain why this feature would be useful

### Contributing Code

1. **Submit an Issue First**: For features, bugs, or enhancements, create an issue first.
2. **Get Assigned**: Wait to be assigned before starting work.
3. **Submit Your PR**: Once assigned, create a PR addressing the issue.

---

## 🤖 Coding with AI

We accept the use of AI-powered tools (GitHub Copilot, ChatGPT, Claude, Cursor, Antigravity, etc.) for contributions, whether for code, tests, or documentation.

⚠️ However, transparency is required: if you use AI assistance, please mention it in your PR description. This helps maintainers during code review and ensures the quality of contributions.

What we expect:
- **Disclose AI usage**: A simple note like "Generated initial component layout with Claude" is sufficient.
- **Specify the scope**: Indicate which parts of your contribution involved AI assistance.
- **Review AI-generated content**: Ensure you understand and have verified any AI-generated code before submitting.

---

## 🚀 Getting Started

### Prerequisites

You must have **Node.js** (v18+) installed to build and run this project.

### Setup

1. **Fork the Repository**
   (Click the 'Fork' button at the top right of the GitHub page)

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Website.git
   cd Website
   ```

3. **Add Upstream Remote**
   ```bash
   git remote add upstream https://github.com/StabilityNexus/Website.git
   ```

4. **Install Dependencies**
   ```bash
   npm install
   ```

5. **Run the Development Server**
   ```bash
   npm run dev
   ```

---

## 🔄 Development Workflow

### 1. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 2. Make Your Changes
- Write clean, readable Next.js (App Router), React, and TypeScript code.
- Follow the project's styling guidelines (use Tailwind CSS).


### 3. Verify Your Changes
Before pushing, ensure that your code formats and compiles correctly with zero errors:
```bash
# Format the code
npm run format:write

# Lint the code
npm run lint:fix

# Type check the code
npm run typecheck
```

### 4. Commit Your Changes
```bash
git add .
git commit -m "feat: add user profile page"
```

**Commit Message Format:**
All commit messages must strictly adhere to the [Chris Beams Git Commit Guide](https://cbea.ms/git-commit/) (use the imperative mood, capitalize the subject line, wrap the body at 72 characters, and explain *what* and *why*).

Use the following prefixes:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `chore:` for repository maintenance tasks

---

## 📋 Pull Request Guidelines

* **Target Branch:** Always target the `main` branch of the upstream repository.
* **Keep PRs Focused:** Do not mix multiple unrelated changes in a single PR.
* **Update Documentation:** If you add new assets, configuration variables, or guidelines, update the relevant markdown files.
* **Resolve Comments:** Keep conversation threads active until resolved by maintainers.
