# CLAUDE.md — Yellow River (Yello)

Internal operating platform for **Utopia Radical** (post-investment ops: portfolio
monitoring, fund performance, LP reporting). This repo currently holds the
**frontend prototype**.

## Where things live
- `frontend/` — the app. Vanilla **HTML/CSS/JS**, no build step.
  - `index.html` — app shell + all view sections.
  - `app.js` — data (URAF Q1 2026), rendering, router, per-page logic.
  - `styles.css` — design system / tokens.
  - Run locally: `cd frontend && python -m http.server 4173` → http://127.0.0.1:4173
- `docs/` — briefs and analysis:
  - `frontend-gap-analysis.md` — what's built vs. blueprints; reconcile vs 8090.
  - `claude-design-brief.md`, `claude-code-build-brief.md` — earlier briefs.
- `.github/workflows/deploy-pages.yml` — deploys `frontend/` to GitHub Pages on
  push to `claude/jolly-cannon-1vtqej`. Live: https://olayinka-david.github.io/Utopia/

> Note: the repo root also contains an unrelated leftover "Vyapti" project — ignore it; the Yello work is entirely under `frontend/`.

## What's built
App shell + nav · Dashboard (hero **fund carousel**, allocation, health rings,
KPIs, sector donut, MOIC chart, risk signals, workflow timeline, portfolio table,
upcoming investments) · Portfolio (filter/sort/search) · Company Overview ·
Exposure · Performance · Reporting · Forms Hub · Documents · Intelligence ·
Audit · Deal Flow · Settings. See `docs/frontend-gap-analysis.md` for gaps.

## Design rules (do not regress)
- **Palette:** warm tones — orange `#F2691E`, amber `#FF9A2E`, yellow `#FFC233`.
- **Gradients are reserved for accents** (Buildora style): the hero banner, primary
  buttons, the accent KPI, capsule chart-bar fills, and the allocation bar
  (orange→amber `linear-gradient(150deg,#F2691E,#FF9A2E)` family). Surfaces/text stay flat.
- **Surfaces:** soft, deep, low-opacity elevation + faint hairlines + ~18–20px radius —
  NOT hard 1px borders. Warm radial canvas background.
- **Charts:** capsule (pill) bars on a `#f1eee9` track with gradient fills; circular
  rings with rounded caps.
- **Circular indicators** for fund deployment + per-company health.
- Typeface **Plus Jakarta Sans**; information-dense, table-first; tabular numerics.
- Responsive: sidebar collapses to top nav; grids/kanban/funnel stack on mobile.

## Data
Dummy data = **URAF Q1 2026 Quarterly Portfolio Summary** (10 companies). Keep new
dummy data consistent with it.

## Production target (for full build, per blueprints)
Next.js 15 + App Router + shadcn/ui + Tailwind + Recharts + Clerk + Neon/Prisma +
Vercel AI SDK. The current prototype is intentionally vanilla; component names map
onto the future React build.

## 8090 Software Factory (Work Orders)
Connect the MCP in this folder, then pull Work Orders (Phases 1–19) and reconcile
against `docs/frontend-gap-analysis.md`:
```
claude mcp add --transport http --scope local software-factory-yellow-river \
  https://api.factory.8090.dev/v2/mcp \
  --header "X-Sofa-Mcp-Project-Id: 6ffc5fea-f1ba-4124-be09-31266786f858"
```
Then `/mcp` → authorize.

## Workflow
- Develop on branch `claude/jolly-cannon-1vtqej`; pushing auto-deploys to GitHub Pages.
- Keep changes within `frontend/` and `docs/` unless intentionally changing infra.
