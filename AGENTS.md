# Stability Nexus Website Agent Guidelines

This repository contains the Next.js frontend code for the Stability Nexus portal. Refer to this file for setup commands, coding standards, and repository boundaries.

---

## Tech Stack
* **Framework:** Next.js (App Router, React)
* **Styling:** Tailwind CSS
* **Language:** TypeScript
* **UI Components:** shadcn/ui

---

## Commands
* **Build:** `npm run build`
* **Run Dev:** `npm run dev`
* **Format Check:** `npm run format:write` (checks and formats code)
* **Lint Check:** `npm run lint:fix` (runs Next.js linter and fixes automatic issues)
* **Type Check:** `npm run typecheck` (TypeScript type validation)

---

## Architecture & Code Style

### 1. Client vs Server Components
* Prefer Next.js Server Components for general page structure and layout to optimize page load speeds.
* Use client components (`"use client"`) only when browser interactive states, hooks (such as `useState`, `useEffect`), or context providers are strictly necessary.

### 2. Styling (Tailwind CSS)
* Always use Tailwind CSS class utilities. Avoid inline styles or custom standard CSS unless configuring base Tailwind configurations.

### 3. Component Hierarchy
* Custom pages reside under `app/`.
* Global state context, shared layout widgets, and visual sub-parts reside under `components/`.
* Check `components/` first before adding new widgets. Use `shadcn/ui` components located in the workspace whenever possible.

---

## Boundaries
* **Dependencies:** Never edit files inside `node_modules/`.
* **Build outputs:** Never modify files under `.next/` or the static output `/output` directory.
* **Environment:** Do not commit `.env` or any file containing private keys.

---

## Git Workflow
* **Commit Format:** Follow the **Chris Beams Git Commit Message** guide (imperative subject, capitalized, under 50 characters, wrapped body).
* **Branch Format:** `feat/short-desc`, `fix/short-desc`, or `refactor/short-desc`.
