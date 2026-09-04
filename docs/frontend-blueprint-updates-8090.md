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
- **RAG status chips**, KPI cards incl. a **gradient accent KPI**, segmented toggles.
- **Hero = auto-rotating fund carousel** (URAF ↔ UMEF) with dots, pause-on-hover, reduced-motion aware.

## 3. Information architecture / pages (added vs blueprint)
- **Quarterly Summary** page — two tabs: **Quarterly Portfolio Summary** (page-3 table: company, sector, country, investment/ownership, LTM revenue, MOIC, runway, fundraise, notes + totals + MOIC-development narrative) and **Quarterly Investment Summary** (Q2'26 sidecar pipeline w/ URAF + QDB amounts).
- **Compliance** module — Climate & Impact + **Gender (2X)** tabs, **Form F Q4-lock** banner.
- **Company deep-dive** is **tabbed**: Overview · Financials · Valuations · **Funding** · Documents.
  - **Financials:** “Performance over time” time-series with a **metric toggle** (Revenue / EBITDA / Burn / Cash / Headcount / company KPI) + runway gauge + snapshot.
  - **Funding (new):** fundraising history table — round, date, **round size**, **URAF participation**, **valuation**, **lead/co-investors** — plus a “How URAF adds value” panel (modeled on the Gobi/Carsome reference). Same section also surfaced in Valuations.
- **Performance:** **fund-level time series** — KPI band (Capital invested / Holding value / MOIC / # investments) + **dual-axis line chart** (Capital invested + Holding value on US$M axis, MOIC on × axis) + value-driver attribution.
- **Design System** as an Admin nav item + standalone page.

## 4. Auth, roles, exports, a11y (added)
- **Mock auth gate** + **role-based access**: Admin, Head of Portfolio, Investment Team, CFO, LP Viewer — nav filtered per role; **Unauthorized** page; live role switcher.
- **Working exports:** CSV (portfolio, quarterly summary, compliance, board report) + **chart PNG** (SVG→canvas) on Performance/Exposure.
- **Reporting workflow:** Form G **data-correction** queue (HoP approval) + automation log + Day-42 overdue **escalation**.
- **Accessibility:** visible `:focus-visible` rings, `prefers-reduced-motion` (incl. carousel pause), keyboard-activatable rows (role/aria/tabindex).

## 5. Data
- All dummy data anchored to **URAF Q1 2026 Quarterly Portfolio Summary** (10 companies; $13.8M committed / $5.7M drawn / $1.88M deployed; GAV $2.07M; gross MOIC 1.10x). Fundraising rounds + per-company time-series values are placeholder where the doc doesn’t specify, but **anchored to known facts** (entry amounts/dates/security, known rounds, Q2'26 sidecars).

## 6. Carry-over notes for the production blueprints
- Keep per-fund accent-color system from the original blueprint **as an option**, but the prototype standardized on the warm orange brand (Direction-2/Buildora aesthetic).
- The **Phase 1–19** mapping in `docs/frontend-gap-analysis.md` is *inferred*; replace with the real 8090 Work Orders when updating.
- Charts in production should use **Recharts** equivalents of: capsule bar, dual-axis line, donut, gauge, runway-vs-revenue scatter (scatter still TODO).
