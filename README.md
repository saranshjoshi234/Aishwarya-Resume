# Aishwarya Shalini Purohit — personal site

React + TypeScript + Vite + Tailwind CSS v4 + Lucide. Single page, data-driven.

## Run

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # production build in dist/
npm run preview      # serve dist/ locally
npm run typecheck
npm run lint
npm run check:placeholders   # lists every [ADD ...] still in the content
```

`npm run build:single` produces one self-contained `dist-single/index.html` (useful for quick previews).

## Editing content

All copy lives in `src/data/`. Components only render it.

| File | What it holds |
| --- | --- |
| `profile.ts` | Name, headline, contact, summary, about, contact copy |
| `experience.ts` | Roles, Android stack map (hero), education, training |
| `projects.ts` | Featured projects and case-study sections |
| `skills.ts` | Capability groups; `evidence: 'hands-on'` marks work in progress |
| `architecture.ts` | Interactive MVVM app-architecture diagram |
| `engineering.ts` | Principles and the three deep-dive tabs |
| `metrics.ts` | Impact numbers (from the resume only) |
| `leadership.ts`, `apps.ts` | Teaching & mentoring; Play Store and code links |

Any string written as `[ADD SOMETHING]` renders as a visible amber placeholder and is never turned into a link.
Replace them all before publishing; `npm run check:placeholders` exits non-zero while any remain.

## Before you publish

1. Put a public version of the resume at `public/resume.pdf` (a placeholder ships now). Leave out phone, home address, date of birth and family details.
2. Fill LinkedIn and GitHub in `src/data/profile.ts`; add Play Store links in `src/data/apps.ts`.
3. Replace `[ADD CANONICAL URL]` in `index.html` and `public/robots.txt`.
4. Add employer names and dates for each role, and confirm their order.
5. Check each employer/client is comfortable being named (PSA, United Utilities).

## Analytics

Off by default. To enable GA4, set `VITE_ANALYTICS_ID=G-XXXXXXX` in `.env` (see `.env.example`).

## Deploy

Any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages): build command `npm run build`, output directory `dist`.
