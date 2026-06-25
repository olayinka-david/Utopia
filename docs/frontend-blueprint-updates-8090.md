# Frontend Blueprint — Iteration Update Pack (for 8090)

> Purpose: a consolidated list of the **adjustments made during prototyping** that
> should be folded back into the Yellow River **Frontend Blueprint** (and where
> noted, Backend/Architecture). Hand this to the 8090 Software Factory agent to
> update the blueprints. Source of truth for the prototype: branch
> `claude/jolly-cannon-1vtqej`, live at https://olayinka-david.github.io/Utopia/.

_Prototype stack is vanilla HTML/CSS/JS; production target remains Next.js 15 +
shadcn/ui + Tailwind + Recharts + Clerk + Neon/Prisma + Vercel AI SDK. The deltas
below are design/UX + IA decisions to carry into that build._

## 1. Design system / tokens (changed)
- **Typeface:** Plus Jakarta Sans → **Manrope** (400–800) + JetBrains-style tabular numerics for data.
- **Palette (flat, warm):** orange `#F2691E`, amber `#FF9A2E`, yellow `#FFC233`, orange-soft `#FEF0E7`; ink `#1B1A18`, muted `#8A8884`; surface `#FFFFFF`; **canvas = warm radial** `#FAF8F4→#F2EFE9→#ECE8E0`; RAG green `#2FAA63` / amber `#E0901B` / red `#E0564C`; info `#3C6E9E`.
- **Gradients = accents only** (not flat-everywhere, not gradient-everywhere): hero banner `linear-gradient(110deg,#EE5D11→#FFB348)`, primary button `linear-gradient(150deg,#F2691E→#FF8A2B)`, **capsule bar fills** `linear-gradient(180deg,#F2691E→#FF9A2E)`, allocation bar `linear-gradient(90deg,…)`. Surfaces/text stay flat.
- **Elevation:** soft, deep, low-opacity shadow + faint hairline + **20px** card radius (not hard 1px borders). 8px spacing base; generous panel padding (20–22px), 18px grid gaps.
- **Icons:** **Lucide** (inline SVG), 18px, `currentColor` — replaces unicode glyphs.
- **Brand name:** “Yello” → **“Yellow.”**
- A **living design system** exists: standalone `design-system.html` (shareable, no login) + in-app view, both from one shared module.

## 2. Components (changed / added)
- **Buttons:** primary = accent gradient + soft glow + hover lift; muted/ghost flat.
- **Custom dropdown** (`select`) — chevron, hover border, focus ring (replaces native).
- **Capsule (pill) bar charts** on a `#F1EEE9` track with gradient fills + rounded caps — the standard bar style.
- **Circular indicators:** health rings, runway **gauge** (red <6 / amber 6–12 / green >12 mo), donut with centered value/label.
- **Dual-axis line chart** (new) for fund-level trends.
- **Finance-standard line chart** (`dotLineChart`, new): data-point markers on a
  connecting line + dashed **linear-regression trend line** + gridlines + axis
  labels + hover tooltips. Used for the dashboard MOIC chart and the company
  "Performance over time" chart. *(Interim style — to be matched to the
  portfolio-management deck.)*
- **RAG status chips**, KPI cards incl. a **gradient accent KPI**, segmented toggles.
- **Modal / dialog** (scrim + centered card) — used for the back-end amendment view.
- **Hero** = **fund name primary (large)**, MOIC a smaller secondary stat
  (superseded the earlier auto-rotating carousel — see §7).

## 3. Information architecture / pages (added vs blueprint)
- **Quarterly Summary** page — two tabs: **Quarterly Portfolio Summary** (page-3 table: company, sector, country, investment/ownership, LTM revenue, MOIC, runway, fundraise, notes + totals + MOIC-development narrative) and **Quarterly Investment Summary** (Q2'26 sidecar pipeline w/ URAF + QDB amounts).
- **Compliance** module — Climate & Impact + **Gender (2X)** tabs, **Form F Q4-lock** banner.
- **Company deep-dive** is **tabbed**: **Overview (combined)** · Valuations · **Funding** · **Media** · Documents.
  - **Overview (combined Overview + Financials):** About w/ **Key Metrics top-right** (incl. derived health score) → **Notable Updates** → **Performance over time** (metric toggle: Revenue / EBITDA / Burn / Cash / Headcount / company KPI, as a dot+trend chart with QoQ/YoY deltas) → **Runway** (gauge + 6-quarter history) + Financial snapshot.
  - **Valuations:** **Position (left)** + **Carrying value (right)** + valuation history; funding section surfaced here too.
  - **Funding:** fundraising history table — round, date, **round size**, **URAF participation**, **valuation**, **lead/co-investors** — plus a “How URAF adds value” panel (Gobi/Carsome reference).
  - **Media (new):** per-company **founder photos**, **brand logomark**, **media ticker** of press mentions — placeholders wired for real assets; **feeds the future LP view**.
- **Performance:** **fund-level time series** — KPI band (Capital invested / Holding value / MOIC / # investments) + **dual-axis line chart** + **value-driver attribution** (per-driver $K uplift + fund-MOIC contribution, top-10 most recent) + **MOIC contribution by company** (horizontal breakdown of carrying-value uplift, top 10).
- **Design System** as an Admin nav item + standalone page.

## 4. Auth, roles, exports, a11y (added)
- **Mock auth gate** + **role-based access**: Admin, Head of Portfolio, Investment Team, CFO, LP Viewer — nav filtered per role; **Unauthorized** page; live role switcher.
- **Working exports:** CSV (portfolio, quarterly summary, compliance, board report) + **chart PNG** (SVG→canvas) on Performance/Exposure.
- **Reporting workflow:** Form G **data-correction** queue (HoP approval) + automation log + Day-42 overdue **escalation**.
- **Accessibility:** visible `:focus-visible` rings, `prefers-reduced-motion` (incl. carousel pause), keyboard-activatable rows (role/aria/tabindex).

## 5. Data
- All dummy data anchored to **URAF Q1 2026 Quarterly Portfolio Summary** (10 companies; $13.8M committed / $5.7M drawn / $1.88M deployed; GAV $2.07M; gross MOIC 1.10x). Fundraising rounds + per-company time-series values are placeholder where the doc doesn’t specify, but **anchored to known facts** (entry amounts/dates/security, known rounds, Q2'26 sidecars).

## 7. Q1 2026 review deltas (latest iteration)

Folded in from the Q1 review feedback (`docs/q1-feedback-adjustments.md`) across
three rounds (P0/P1/P2 → corrections → tab/data restructure). Carry into the
blueprints:

**Fund delineation & shell**
- **Top-bar fund switcher** (segmented `URAF`/`UMEF`) replacing the cosmetic carousel;
  selecting a fund **rescopes every view** (KPIs, portfolio, health, exposure,
  performance, impact, intelligence, reporting) and **persists** across navigation.
- Hero = **fund name primary**, MOIC secondary. Page eyebrow shows full legal name.
- **Scroll model:** the **main column is its own scroll container** (`height:100dvh`
  + `overflow-y:auto`, app-shell fixed) — fixes the "only the sidebar scrolls" bug in
  embedded/webview contexts. Mobile = slide-in **drawer** (hamburger + scrim).

**Roles & users (demo)**
- Real users wired: Admin = JJ (**Head of Operations**), Alina, Roo, Shamona,
  **Colleen**; Portfolio = JJ, Ahmad, Alex. Nav/permissions gate per role.

**Yellow's own analysis (data-source = HYBRID; to be confirmed)**
- **Health score derived from base data** — weighted: runway 35% · revenue 25% ·
  growth (QoQ) 20% · MOIC 20% — surfaced with the driving metrics (LTM revenue,
  runway, MOIC) + full breakdown on hover + methodology caption.
- **Risk signals deduced independently from base data** (runway, burn, revenue QoQ,
  fundraise state) via one engine shared by the dashboard panel and the Intelligence
  page; recomputed on fund switch. **Not** pulled from submitted reports.
- **Headline fund figures** (committed/drawn/deployed/GAV/MOIC) remain **authoritative
  reporting inputs**; a source note states the reported-vs-derived split. *(Backend:
  needs a `source` provenance enum + a financials time-series — see QIA Novus scope.)*

**Charts**
- Dashboard **MOIC Development** and company **Performance over time** → **dot graph
  with trend line** (finance-standard interim; match the portfolio-management deck).
- Hover exact values on all charts; capsule bars retained where dense bars read better.

**Module changes**
- **Exposure:** Geographic exposure **HQ / Operations / Revenue base** toggle (HQ default).
- **Impact Reporting** (renamed from Compliance): **aggregate toggle** (this fund /
  all funds / cumulative) drives climate KPIs + workforce-gender stats.
- **Forms Hub:** added **Valuation Meeting Minutes** + **Quarter Tasks**; removed
  "Portfolio Ops" submitter tag.
- **Reporting workflow:** Day 0/30/40/45/50/55/60 with owners (founder data → portfolio
  & valuation review → Ocorian financials → assembly → MP review → distribution).
- **Data corrections → back-end amendment view** (modal): current→proposed diff,
  requester, reason; **Approve/Reject gated to JJ** (Head of Operations); writes to
  record + audit trail on approval.
- **Company logos:** 2-char **monogram** placeholders across all views ("3Cat"→"3C").

**New reporting module**
- **QIA Novus** spreadsheet report (Quarterly Summary tab) — quarterly Revenue,
  EBITDA, Net Debt, Equity Value, TEV per company + portfolio totals + CSV export,
  **generated from platform data**. Full production spec in
  **`docs/qia-novus-scope-8090.md`** (data model, generation, governance) — use it to
  update the **backend + reporting-service + work orders**.

**Still open / deferred**
- Data-source policy (calculate vs pull) to be **confirmed**, then enforced platform-wide.
- Finance-standard chart styling pending the **portfolio-management deck**.
- Quarter-tasks checklist ↔ workflow-graphic linkage (acknowledged not active yet).
- Attio CRM sync for Deal Flow — deprioritized (Attio has its own dashboard).

## 8. Carry-over notes for the production blueprints
- Keep per-fund accent-color system from the original blueprint **as an option**, but the prototype standardized on the warm orange brand (Direction-2/Buildora aesthetic).
- The **Phase 1–19** mapping in `docs/frontend-gap-analysis.md` is *inferred*; replace with the real 8090 Work Orders when updating.
- Charts in production should use **Recharts** equivalents of: capsule bar, **dot + trend line**, dual-axis line, donut, gauge, **horizontal contribution bars**, runway-vs-revenue scatter (scatter still TODO).
- **Backend / data model** work implied by this iteration: per-fund datasets, a
  **financials time-series** (powers QIA Novus, QoQ/YoY deltas, historical runway —
  currently synthesized), valuation records with ownership/method, a derived-metrics
  service (health, signals), and a report-generation layer (XLSX/PDF + audit).
