# Frontend Gap Analysis — Yellow River (Yello)

> Snapshot of what the frontend prototype covers vs. the Yellow River blueprints
> (PRD v2 + Frontend/Backend/Architecture/Reporting blueprints + userflow).
> Use this alongside the 8090 Software Factory Work Orders (Phases 1–19) to
> identify remaining frontend scope before closeout.

## Built so far (vanilla HTML/CSS/JS prototype in `frontend/`)
App shell + nav · Dashboard (hero fund carousel, capital allocation, portfolio
health rings, KPIs, sector donut, MOIC chart, risk signals, quarterly workflow,
portfolio table, upcoming investments) · Portfolio (search/filter/sort) ·
Company Overview (basic) · Exposure (sector/geo, capital/count toggle) ·
Performance (MOIC/GAV/Deployed toggle, multiples, value drivers) · Reporting
(phase tracker, report cards, task checklist) · Forms Hub (A–G cards, role
filter) · Documents (library, filters, copy-link) · Intelligence (signals,
severity filter, resolve) · Audit (letter status, advance) · Deal Flow (funnel,
mix, kanban) · Settings (workspace, reporting, roles, forms, visuals).

Dummy data: URAF Q1 2026 Quarterly Portfolio Summary (10 companies).

## A. Screens / routes not yet built
- **Founder portal (entire external app)** — `/collect`, multi-step quarterly
  update wizard `/collect/update/[quarter]` (auto-save, validation, file upload),
  `/collect/history`.
- **Auth** — Clerk sign-in/sign-up, role-aware rendering, route middleware,
  Unauthorized page. No login or role gating today.
- **Reporting deep routes** — `/reporting/timeline` (Gantt w/ owners),
  `/reporting/quarter/[quarter]` (quarter workspace),
  `/reporting/quarter/[quarter]/post-meeting-review` (Form D valuation review).
- **Documents** — `/documents/dataroom/[id]` (folder data room + permissions),
  real `/documents/analytics` (page-level view tracking).
- **Intelligence** — `/intelligence/wiki` (knowledge wiki).
- **Deal Flow** — `/dealflow/[id]` prospect detail (evaluation form, stage
  history, ATTIO sync).
- **`/analytics/chat`** — conversational analytics.
- **Public** — `/view/[token]` anonymous shared-document viewer.
- **Quarterly Portfolio Summary** & **Quarterly Investment Summary** dedicated
  table views (page-3 structure) — explicitly requested earlier; only a mini
  dashboard panel exists today.

## B. Features / components not yet built
- **Forms A–G actual forms** (we built cards, not working forms — esp. C, D, E, F).
- **Rich Company deep-dive** — tabs (Financials/KPIs/Valuations/Documents),
  revenue+EBITDA time series, milestone markers, carrying-value step chart,
  runway gauge dial, QoQ/LTM trends.
- **PRD §4.5 charts** — runway-vs-revenue scatter (bubble = capital), MOIC
  waterfall with attribution, runway-risk bars with threshold lines.
- **POD groupings** — badges, filter, admin config.
- **Multi-fund everywhere** — app is URAF-only; no global fund switcher /
  per-fund detail pages / per-fund accent colors (decision: orange theme chosen).
- **AI features** — founder chatbot, document-extraction preview, real AI risk
  explanations, verification agent (currently static/stub).
- **Working exports** (PNG/PDF stubs), **global search**, **notifications feed**.
- **States & a11y** — loading/empty/error states and accessibility pass are thin.

## C. Contextual / architecture gaps (decide before closeout)
1. **Stack decision** — blueprints target Next.js 15 + shadcn/ui + Clerk +
   Neon/Prisma + Recharts + Vercel AI SDK; prototype is vanilla HTML/CSS/JS.
   Keep as clickable prototype, or migrate to the blueprint stack.
2. **No backend/data layer** — all mock data.
3. **Roles defined but not enforced** — matrix shown in Settings; UI not gated.
4. **Updated front-end / back-end docs** — still owed.
5. **Climate & Impact / 2X gender reporting** (Form F, mandatory Q4) — not surfaced.

## Suggested closeout order (confirm against Phases 1–19)
1. Quarterly Portfolio + Investment Summary table views
2. Founder portal + Form C wizard
3. Company deep-dive charts/tabs
4. Auth + role gating
5. Stack decision → then AI / exports / data room

---

### Reconcile with 8090 Work Orders
In local Claude Code with this repo open and the `software-factory-yellow-river`
MCP connected: pull Phases 1–19, then cross-check each phase's frontend tasks
against this file and the `frontend/` implementation.
