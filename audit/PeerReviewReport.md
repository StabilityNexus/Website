# Stability Nexus Website — Peer Review Report

**Repositories:** [StabilityNexus/Website](https://github.com/StabilityNexus/Website "StabilityNexus/Website")\
**Review area:** Stability Nexus organization web portal: Next.js 14 App Router architecture, static HTML export, homepage hero layout, research paper library and CDN PDF delivery, custom YouTube research seminar playlist player, software / applications directory with interactive details modal and category filtering, events & workshop pages, dark/light theme switching with FOUC prevention script, local font optimization, OpenSSF Scorecard & CI verification workflows, branding asset kits, SEO metadata, sitemaps, robots directives, dependency status, and responsive layout across mobile and desktop browsers.

## Overall assessment

The review assessed the production codebase of the main organization portal (`https://stability.nexus`). Automated checks and manual code inspection found **no security vulnerabilities** and **one low-severity defect** (Finding 1: missing SEO and social-sharing metadata). The application uses Next.js static HTML export (`output: 'export'`), which removes Next.js request-time server routes; this review does not cover the build pipeline, hosting, or third-party services. Key architectural patterns—including utilizing jsDelivr CDN mirrors for research papers to keep repository size lean, synchronous client-side theme detection, and client-side modal filtering—were examined and confirmed as sound, intended designs. Static type checking, linting, and production exports completed cleanly with zero warnings or errors.

## Findings

### Finding 1 — No canonical URL, Open Graph or Twitter metadata

**Severity:** Low — SEO / sharing issue\
**Location:** `app/layout.tsx:37–39`

**Observation:** The root `metadata` export only sets `title: "The Stability Nexus"`. There is no `metadataBase`, description, canonical URL, Open Graph or Twitter card metadata, and no page overrides them.

**Impact:** Search engines get no canonical URL or description, and links shared on social platforms show no preview card.

**Suggested resolution:** Set `metadataBase: new URL("https://stability.nexus")` with a description, `alternates.canonical`, `openGraph` (title, description, image) and `twitter` card metadata in `app/layout.tsx`, and override title and description per page.

No security vulnerabilities were identified. The following security patterns and components were examined in detail:

- **Secrets and Credentials:** No hardcoded private keys, API credentials, or sensitive secrets were found in source code, environment configs, or GitHub Actions workflows.
- **Cross-Site Scripting (XSS) & Injection:** Evaluated the inline theme script in `app/layout.tsx`. It executes a self-contained local storage inspection to prevent a flash of unstyled content (FOUC) without processing any external or user-supplied strings, presenting zero injection risk.
- **Reverse Tabnabbing Protection:** All external outbound links (research papers, YouTube videos, GitBook docs, GitHub repositories) specifying `target="_blank"` strictly declare `rel="noopener noreferrer"`.
- **Architectural CDN Delivery:** Research whitepaper links point to `cdn.jsdelivr.net/gh/StabilityNexus/Papers/...`, which is an intentional architectural pattern that avoids bloating git repository storage and leverages global edge-caching for large PDF documents.
- **Static Export Output Isolation:** Deployments compile to static assets in `output/`, so the site has no Next.js request-time server routes.
- **Dependency Hygiene:** Small set of declared dependencies: `next` (pinned to `14.1.4`), with caret ranges for `react`, `clsx`, `lucide-react`, `tailwind-merge`, `tailwindcss-animate` and `husky` (a dev tool listed under `dependencies`). A `package-lock.json` is committed, so installs with `npm ci` resolve to locked versions.

---

## Scope and verification matrix

| Area / Component | Status | Notes |
| --- | --- | --- |
| Static export compilation & output isolation | Verified | Configured with `output: "export"` and `distDir: "output"`; no Next.js request-time server routes. |
| Research Library & CDN Whitepapers | Verified | 18 research papers listed in `featuredPapers` (`app/research/page.tsx`); CDN mirror delivery avoids repository bloat and leverages global caching. |
| YouTube seminar playlist player | Verified | Click-to-load iframe using `youtube-nocookie.com/embed/` with `rel=0`; track switching works. No sandbox attribute or postMessage handling is used. |
| Software / Applications catalog | Verified | Interactive details modal shows each application's supported chains, status and launch link; category filtering runs client-side. |
| Dark/Light theme switching & FOUC script | Verified | Self-contained client script; operates safely without user-controlled DOM injection. |
| OpenSSF Scorecard & CI verification | Configured | `ci.yml` runs `npm ci`, `npm run lint` and `npm run typecheck` on pull requests (no build step). `scorecard.yml` runs OpenSSF Scorecard weekly and on pushes to `main`, and publishes the results. Run results were not reviewed. |
| Typography & Local Font Loading | Verified | Uses Next.js `localFont` with General Sans (`public/fonts/`) and Google Fonts `Spectral`; no unauthenticated runtime font CDNs. |
| Reverse tabnabbing protection | Verified | All external anchor links with `target="_blank"` explicitly include `rel="noopener noreferrer"`. |
| SEO & metadataBase configuration | Deficient | `app/layout.tsx` defines only a title; `metadataBase`, canonical URLs, Open Graph and Twitter metadata are not defined (Finding 1). |
| Responsive layout across mobile & desktop | Manually verified | Layout tested across 320px mobile, tablet, and ultra-wide viewports; mobile navigation menu functions smoothly. |
| Frontend dependency manifest & lockfile | Verified | Small runtime dependency set (`next`, `react`, `clsx`, `lucide-react`, `tailwind-merge`, `tailwindcss-animate`, plus `husky`); versions locked by `package-lock.json`. Known-vulnerability (advisory) status was not assessed in this review. |

---

## Frontend review notes

The application is built on Next.js 14 App Router, React 18, TypeScript, and Tailwind CSS. The architecture is completely static: there are no dynamic server routes or API routes, so deployment artifacts are static HTML, CSS, client JavaScript bundles and assets.

Navigation links, application deployment tables, and research papers are defined in typed TypeScript data structures (`components/` and `app/`). The software page opens a details modal for each Stability Nexus application (Djed, Gluon, hodlCoin, Fate and others) listing its chains, status and launch links. The modal (`role="dialog"`, `aria-modal`) closes on Escape, locks background scrolling, moves focus to its close button when it opens and returns focus to the triggering card when it closes.

---

## Validation

The following automated and manual checks were validated against the repository:

- `npm run typecheck` (`tsc --noEmit`): Passed with zero type errors.
- `npm run lint` (`next lint`): Passed with zero warnings or errors.
- `npm run build` (`next build`): Successfully generated static output into `output/` with clean page routes (`/`, `/blockchains`, `/events`, `/research`, `/software`, `/_not-found`).
- Visual & Responsive Checks: Inspected navigation menu toggle, YouTube player track switching, and software details modal on both mobile viewports (<640px) and wide desktop displays.
- Dependency review: Reviewed the declared dependencies and dev tooling (Prettier, ESLint, Tailwind CSS) in `package.json`; installs are locked by `package-lock.json`.

---

## Conclusion

The Stability Nexus main organization website is architecturally sound and responsive. No security vulnerabilities were identified in the reviewed code; one low-severity defect is reported: the site has no canonical, Open Graph or Twitter metadata (Finding 1). The application cleanly implements its intended designs, provides fast static performance, and showcases the organization's research, software, and brand ecosystem.
