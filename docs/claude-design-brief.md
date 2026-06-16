# Claude Design Brief — Yello (Utopia Radical Platform)
### 5 Direction Frames · Visual direction for the build

**Product:** Project Yellow River — Utopia Radical's internal post-investment operating platform (PRD v2.0, Feb 2026).
**Brand route:** **Direction 2 — "Data That's Mellow"** from the Yello brandbook.
**Purpose of this document:** Generate **5 high-leverage frames** in Claude Design that establish the complete visual language. These frames are not the whole app — they are the *templates* every other screen is composed from. Once approved (and edited), they feed the Claude Code build brief.

> Inputs synthesised here: Utopia Radical PRD v2.0 · the userflow / IA map · Yello brandbook **Direction 2**.

---

## 1. Brand foundation — Direction 2 "Data That's Mellow"

Direction 2 is described in the brandbook as:

- *"The most product-native route. Quiet, structured, and analytical, with room for intelligence, automation, and trust to lead the story."*
- *"Best if the platform should feel like an operating layer rather than a campaign. It is calm, technical, and highly legible."*
- Tagline: **"Minimal, product-led, intelligent."**
- Message system: *"Hello, Yello, Data that's Mellow." · "Clean hierarchy for complex workflows." · "Best fit for LP and operator audiences."*

This is a perfect fit for the PRD's core UX mandate (§9.2): **"Design for information density… Prioritise seeing data over aesthetic whitespace,"** and **"Every screen must answer two questions: 'What is the current state?' and 'What do I need to do next?'"**

**What Direction 2 means in practice vs. the brandbook website** (which itself leans toward the warmer, more editorial Direction 3): dial **back** the large Fraunces serif headlines and soft glows; dial **up** tight grids, restrained surfaces, monospaced numerics, and legibility. Keep the warm Yello signature — but spend it as accent, not atmosphere.

### Design tokens (from the brandbook, adapted for a dense internal tool)

| Token | Value | Use |
| --- | --- | --- |
| `--bg-paper` | `#F4F0E8` | Warm brand surface — used on external/auth/marketing frames |
| `--bg-paper-alt` | `#E9E2D8` | Secondary warm surface |
| `--bg-app` | `#FBFAF7` | App canvas for dense internal screens (warm-neutral, calmer than paper) |
| `--surface` | `#FFFFFF` | Cards, tables, panels |
| `--surface-muted` | `#F5F3EE` | Zebra rows, inset wells |
| `--ink` | `#111111` | Primary text |
| `--ink-muted` | `rgba(17,17,17,0.68)` | Secondary text |
| `--line` | `rgba(17,17,17,0.10)` | Borders, dividers, grid lines |
| `--accent` | `#FFBF26` | **Yello yellow** — focus, active nav, primary CTA fill, highlights |
| `--accent-dark` | `#D89100` | Accent text on light, hover, labels |
| **RAG — Green** | `#2FA66A` | Healthy signal |
| **RAG — Amber** | `#E0901B` | Caution (deliberately deeper than brand `#FFBF26` so semantic ≠ accent) |
| **RAG — Red** | `#DC4B3E` | Critical signal / alert |
| **Info / Neutral** | `#3C6E9E` | Informational chips, links |

**Type**
- **Manrope** — primary UI typeface (weights 400/500/600/700/800). Headings, body, labels.
- **JetBrains Mono** — all tabular numerics (currency, MOIC, IRR, %, dates in tables). This is the "technical, legible" cue of Direction 2.
- **Fraunces** (serif) — *optional*, reserved only for large external/marketing/auth moments. Never inside dense tables.

**Form & shape**
- Radii: `8px` (inputs, chips), `12px` (cards/panels), `999px` (pills/status). Softer than typical fintech but tighter than the brandbook's 26–32px.
- Shadows: minimal. `0 1px 2px rgba(17,17,17,0.05)` for cards; reserve the brandbook's big `0 30px 80px` glow for external frames only.
- Logo: the **"Yellow."** wordmark with the chromatic-eclipse "e" (from `direction-2.png`). Use full wordmark on external/auth; use a compact "Y●" eclipse mark in the collapsed sidebar.
- Density: 8px spacing base. Internal tables target **row height 36–40px**. Generous touch targets (≥44px) only on the external founder form.

**Two visual registers** (call this out explicitly to Claude Design):
- **Internal register** (Frames 1, 2, 3, 5): `--bg-app`, dense, desktop-first, mono numerics, left sidebar, minimal chrome.
- **External register** (Frame 4): `--bg-paper`, warmer, mobile-first, more breathing room, the "front door" expression of the brand.

---

## 2. Information architecture (from the userflow map)

Persistent **left sidebar** for the internal app, with these destinations:
`Dashboard · Portfolio / Companies · Funds / Exposure · Reporting · Documents · Intelligence · Audit · Compliance · Forms · Settings / Admin`

Route families (drive the build, referenced again in the build brief):
- **Public:** `/`, `/sign-in`, `/sign-up`, `/view/[token]`, `/collect`, `/share/[token]`
- **Protected internal:** `/dashboard`, `/reporting`, `/documents`, `/intelligence`, `/audit`, `/compliance`, `/forms`
- **Admin:** `/admin`, `/api/users`, `/api/roles`, `/api/sessions`
- **External founder portal:** `/collect/[token]`
- **Fallback:** Unauthorized screen (shown when route access is blocked)

---

## 3. The 5 frames

> For each frame Claude Design should produce a **desktop** artboard (1440px) — except Frame 4, which is **mobile-first** (375px) **and** a 768px tablet view. Use real PRD data (URAF: USD 13.8M committed, 10 companies, 1.04–1.12x MOIC; companies: Dash, Metric, Alternō, Okapi, Terra Oleo, Waterhub, Alicia Bots, Arkadiah, 3cat, Sirsak, Farmio).

### Frame 1 — App Shell + Fund Performance Dashboard `/dashboard`
**Why this frame:** It establishes the entire internal system — sidebar, topbar, KPI language, chart styling, and density. Everything internal inherits from it.

**Must contain:**
- **Left sidebar** (collapsible): Yello "Y●" mark, the 10 nav destinations grouped (Overview · Portfolio/Funds · Workflows: Reporting/Forms/Documents · Intelligence: Intelligence/Audit/Compliance · Settings). Active item uses Yello accent rail + tint. Bottom: user chip with role badge (e.g., "JJ · Admin").
- **Topbar:** breadcrumb, global company search (PRD: results < 1s), fund switcher (URAF / UMEF), quarter selector (e.g., "Q3 2025"), export-to-PNG affordance.
- **Fund KPI row:** Committed Capital, Total Deployed, # Investments, Holding Value, **MOIC**, **Gross IRR**, **TVPI / DPI** — each a compact card with mono value, small QoQ delta, sparkline. Show `N/A` treatment (e.g., IRR with <2 cash-flow events).
- **Performance time-series chart:** capital invested vs holding value (bars) + MOIC (line) across H1'23, H1'24, H2'24, H1'25, Q3'25.
- **"What do I need to do next?" strip:** quarterly workflow status (day 30–60 timeline) + alert count (e.g., "3 companies runway < 6mo").
- **States to show:** loaded; progressive-load skeleton; the IRR `N/A` edge case.

**Direction-2 cues:** calm canvas, mono numerics, thin grid lines, accent used only for the active nav + one primary KPI highlight. No glow.

---

### Frame 2 — Company Detail `/portfolio/[company]`
**Why this frame:** Establishes the detail-page pattern: identity header, tabs, dense data tables, history/audit, and the "diff vs last quarter" idea. Reused for every entity detail.

**Must contain (use "Dash" — has 2 tranches under URAF):**
- **Identity header:** display name, sector/stage/geo chips, status, **RAG chip cluster** (Runway / Revenue-vs-Plan / Update Compliance / Burn Trend), monitoring + sourcing attribution.
- **Tabs:** Overview · Quarterly Updates · Financials · Investment Details · Documents (per PRD §9.1).
- **Overview (default tab):** latest-quarter metrics grid (revenue, burn, runway, cash, headcount, EBITDA), MOIC + holding value, custom KPIs (Dash: Deliveries completed, Active drivers, Clients), highlights/low-lights/goals.
- **Investment Details tab preview:** the 2 tranches table (T1 $150k Jul'24, T2 $100k H2'25), SAFE fields, conversion status.
- **Diff affordance:** "vs Q2 2025" deltas on metrics + a "History" pattern (audit-trail row: user · timestamp · field · old → new).
- **States:** healthy company; a flagged company (anomaly badge — "Revenue dropped 65% QoQ"); a first-quarter company with no prior data (no deltas).

**Direction-2 cues:** tables over cards; tab bar is quiet (underline accent); RAG chips are the only saturated color.

---

### Frame 3 — Reporting · Quarterly Reporting Workspace `/reporting`
**Why this frame:** Establishes workflow + status + approval language and the "generate report" pattern — the operational heart of the tool.

**Must contain:**
- **Quarterly workflow tracker:** the day 30–60 timeline as a checklist with owner + due date + status (collect → submissions → review → financials → approve → distribute).
- **Submission status board:** per-company chips across `Not Sent · Sent · Opened · In Progress · Submitted · Reviewed · Flagged · Late · Manually Entered`. Overdue (no submission by day 42) visually flagged.
- **Report generation panel:** cards for QIA Deal Team (.xlsx), QIA Novus, QIA Master, Board Pack (.docx), Commentary Letter, Audit Confirmation letters — each with **lifecycle status** pill: `Draft → Under Review → Approved → Distributed → Archived`, a generated/version stamp, and primary action (Generate / Submit for review / Export).
- **Approval queue** (Managing Partner view): clear **Approve / Request changes / Reject** actions; locked-after-approval state.
- **Pre-generation warnings:** "Metric: current revenue missing, last data Q3 2025."
- **States:** mid-cycle (mixed statuses); approval-pending; a locked/approved report.

**Direction-2 cues:** status as the primary visual system; a restrained timeline; accent reserved for the single next action.

---

### Frame 4 — Founder Quarterly Submission Form `/collect/[token]` *(EXTERNAL — mobile-first)*
**Why this frame:** The only external surface and the brand's public "front door." Sets a distinct, warmer expression (paper background, more space, friendly tone) while staying minimal and product-led. Must be designed at **375px** first, plus a **768px** view.

**Must contain (per PRD §4.3 / §9.3):**
- **Standalone page** — no app nav. Yello "Yellow." wordmark, company name ("Submitting for: Dash"), quarter ("Q4 2025"), deadline, progress indicator.
- **Sectioned form:** Financials (revenue, latest-month revenue, burn, runway, cash, EBITDA, gross margin, headcount, assets/liabilities) → Custom KPIs (company-specific) → Climate KPIs (Radical, ≥1 required) → Narrative (highlights / low-lights / goals, 1000-char counters) → Supporting documents (drag-drop, PDF/XLSX, ≤10MB, ≤5).
- **Clear required vs optional** styling; **inline validation** next to the field (e.g., "Runway must be a positive number ≤ 60"), never a top banner.
- **Pre-filled** last-quarter values (editable), with a subtle "last quarter" reference.
- **Auto-save** indicator ("Draft saved · 60s ago"); confirmation screen summarising submitted values.
- **States:** empty/first-time (no pre-fill), in-progress with one inline error, expired-link error page, success/confirmation.

**Direction-2 cues:** `--bg-paper` warm surface, larger type, ≥44px targets, one accent CTA ("Submit update"). This is the one frame where a touch of the brandbook's warmth/soft-glow is welcome.

---

### Frame 5 — Intelligence · Portfolio Health & Concentration `/intelligence`
**Why this frame:** Establishes the RAG signal system, alerts, and the data-viz library — the literal "intelligence" promise of Direction 2.

**Must contain (per PRD §4.5):**
- **Portfolio health table:** one row per company × columns Runway / Revenue-vs-Plan / Update Compliance / Burn Trend, each a Green/Amber/Red/N-A cell with threshold tooltip. Show edge cases: Terra Oleo (pre-revenue → Revenue N/A), Waterhub (<2 quarters → Burn Trend N/A).
- **Alerts panel:** Runway < 6mo (Alicia Bots, Dash, Metric) and Overdue-update alerts, each with the attributed owner.
- **Concentration charts:** sector exposure pie (6 sectors with the PRD percentages) and geographic exposure pie (4 markets) — each toggling **by capital** / **by company count**.
- **Runway vs revenue-growth scatter:** x = revenue growth % QoQ, y = runway months, bubble = capital invested; pre-revenue plotted at x=0 with note.
- **Export:** every chart shows the "Export PNG (300 DPI)" affordance.
- **States:** full data; a company with N/A signals; empty-alerts ("All clear").

**Direction-2 cues:** charts use the warm-neutral palette + RAG accents only; legible legends; mono axis labels. Calm, analytical, "operating layer."

---

## 4. What to deliver back from Claude Design

For each of the 5 frames:
1. The artboard(s) at the specified breakpoints.
2. The key states listed per frame.
3. A short component inventory it introduces (so we can name them in the build).
4. Confirmed/edited token values (any deviation from §1 is the *source of truth* going forward).

**Validation checklist for the reviewer (you):**
- Does the internal register feel dense enough (PRD §9.2) without feeling cramped?
- Is Yellow accent disciplined (focus/active/one CTA) and never competing with RAG amber?
- Does every internal frame answer "current state?" + "what next?"
- Does Frame 4 clearly read as a separate, friendlier external surface?
- Are mono numerics carrying the "technical, legible" Direction-2 tone?

Once you approve/edit these, the confirmed tokens + component inventory flow into **`docs/claude-code-build-brief.md`**, which builds every remaining screen as a recomposition of these five.
