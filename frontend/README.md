# Yello Frontend — Utopia Radical

Standalone, Vercel-ready frontend for the Yello portfolio operating system (URAF).
This pass ships **Dashboard** and **Settings**, built inside the **full application
navigation shell** so every future module is already wired into the sidebar.

## Run

```bash
npm run dev          # http://127.0.0.1:4173  (node static server, no deps)
# or:  python -m http.server 4173
```

## What's in this pass

- **Full navigation shell** — Overview (Dashboard, Portfolio, Exposure, Performance),
  Workflow (Reporting, Forms Hub, Documents), Intelligence (Intelligence, Audit, Deal
  Flow), Admin (Settings). Modules not yet built route to a clean "coming soon"
  placeholder tagged `Soon`.
- **Dashboard** (`/dashboard`) — flat-orange MOIC hero with drawn-capital ring, capital
  allocation, portfolio-health rings, KPI row, sector composition donut, MOIC
  development chart, risk signals, the quarterly reporting workflow timeline, the
  full portfolio table, and the Q2'26 upcoming-investments summary.
- **Settings** (`/settings`) — Workspace, Reporting thresholds, Roles & Permissions
  (5 roles), Forms Taxonomy (A–G), and Visual System tabs.

## Data

All figures are dummy data sourced from **URAF Q1 2026 Quarterly Portfolio Summary**
(10 companies, $1.88M deployed, $2.07M GAV, 1.10× gross MOIC) — see `app.js`.

## Design language (changes from the prior export)

- **Flat palette, no gradients** — orange `#F2691E`, amber `#FF9A2E`, yellow `#FFC233`.
  The previous `--gradient-yello` and gradient KPI/bar/button fills were removed.
- **Soft elevation instead of hard borders** — faint hairlines + subtle shadows and a
  16px card radius replace the prior 1px-border-everywhere treatment.
- **Circular indicators** retained for fund deployment and per-company health.
- Plus Jakarta Sans, table-first density, no floating UI.

## Architecture note

The production target (per the Yellow River blueprints) is **Next.js 15 + App Router +
shadcn/ui + Recharts + Clerk + Neon/Prisma**. This prototype is intentionally vanilla
HTML/CSS/JS to iterate on visual direction quickly; component names and layout map
directly onto the future React build.

## Next

- Per-company **Company Overview** pages (clickable from health list & portfolio table).
- **Quarterly Portfolio Summary** and **Quarterly Investment Summary** table views.
- Build out the remaining navigation modules.
