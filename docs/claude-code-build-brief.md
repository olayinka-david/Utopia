# Claude Code Build Brief — Yello (Utopia Radical Platform)
### Frontend build · derived from the 5 approved design frames

**Status:** Execute **after** the 5 frames in `docs/claude-design-brief.md` are approved/edited in Claude Design.
**Scope:** **Frontend only.** No backend, no real auth, no real report generation, no email. All data is served from a typed, in-repo **mock data layer**; all "actions" (generate report, approve, submit) mutate local state and simulate latency.
**Brand route:** Direction 2 — "Data That's Mellow." Tokens are inherited from the approved design frames (the design output is the source of truth; §3 below is the starting default).

---

## 1. Objective

Build the complete **frontend** of the Utopia Radical post-investment platform — every screen and flow in the userflow map — as a navigable, state-driven React app wired to mock data. The result must be demo-complete: a reviewer can sign in (mock), move through all routes, switch roles, open a founder link, and see realistic data, empty/loading/error states, and role-gated access.

This is the "build the rest of the screens/flows" step. The 5 design frames cover the *templates*; this brief specifies **every route** as a recomposition of those templates.

---

## 2. Tech stack

Match the team's existing stack (already present in this repo for prior work):

- **Vite + React 18 + TypeScript**
- **Tailwind CSS** (design tokens → `tailwind.config.js`)
- **Motion** (`motion` / framer-motion) for transitions — restrained, Direction-2 calm
- **react-router-dom** for the route map (incl. guards)
- **Recharts** for charts (time-series, pies, scatter) — or visx if finer control is needed
- **@tanstack/react-table** for dense, sortable/filterable tables
- **react-hook-form + zod** for the founder form + all validation (zod schemas double as the typed contract)
- **@fontsource/manrope** + **@fontsource/jetbrains-mono** (already deps); add Fraunces only if Frame approvals keep it
- State: lightweight — React context + `useReducer` (or Zustand) for auth/role + mock store. No server state lib needed since data is mock.

> Note: the repo currently contains an unrelated "Vyapti" landing page. Treat it as scaffolding to replace; reset `tailwind.config.js` colors/fonts to the Yello tokens below.

---

## 3. Design system implementation

### 3.1 Tokens → `tailwind.config.js`
```
colors:
  paper: "#F4F0E8"  paperAlt: "#E9E2D8"
  app:   "#FBFAF7"  surface: "#FFFFFF"  surfaceMuted: "#F5F3EE"
  ink:   "#111111"  inkMuted: "rgba(17,17,17,0.68)"  line: "rgba(17,17,17,0.10)"
  accent: { DEFAULT: "#FFBF26", dark: "#D89100" }
  rag:    { green: "#2FA66A", amber: "#E0901B", red: "#DC4B3E" }
  info:   "#3C6E9E"
fontFamily:
  sans:    Manrope
  mono:    JetBrains Mono   // ALL tabular numerics
  display: Fraunces (optional, external only)
borderRadius: sm 8px, md 12px, pill 999px
```
Two surface registers: **internal** = `app` canvas, dense; **external** = `paper`, warmer, roomier.

### 3.2 Component library (`src/components/`)
Build these first; every screen composes them.

**Shell:** `AppShell`, `Sidebar` (collapsible, grouped nav, role-aware items), `Topbar` (breadcrumb, global search, fund switcher, quarter selector, export), `UserMenu` (role badge + role switcher for demo).
**Data display:** `KpiCard` (mono value + delta + sparkline + `N/A` state), `DataTable` (TanStack: sort, filter, zebra, sticky header, CSV export), `RagCell` / `RagChip`, `StatusPill` (report lifecycle + submission statuses), `Chip`, `Sparkline`, `AuditRow`, `DiffValue` (old → new / QoQ delta), `EmptyState`, `Skeleton`.
**Charts:** `TimeSeriesChart`, `ExposurePie` (capital/count toggle), `RunwayRevenueScatter`, `ChartExportButton` (PNG @ ≥300 DPI via canvas).
**Forms:** `Field` (label, required/optional marker, inline error), `NumberField`, `CurrencyField`, `TextAreaWithCounter`, `FileDropzone`, `FormSection`, `AutosaveIndicator`.
**Workflow:** `WorkflowTimeline` (day 30–60), `ApprovalActions` (Approve / Request changes / Reject), `GenerateReportCard`, `AlertItem`.
**Feedback:** `Toast`, `Modal`, `ConfirmDialog`, `PermissionDenied`, `ExpiredLink`.

---

## 4. Route map & access control

Mock auth + role-based route guards. Five roles (PRD §7): **Admin, Managing Partner, CFO, Investment Team, Founder**. A demo role-switcher in `UserMenu` re-evaluates guards live.

| Route | Type | Guard | Derived from frame |
| --- | --- | --- | --- |
| `/` | Public (Landing/Home) | If signed in → `/dashboard`; else marketing + sign-in CTA | (light, external register) |
| `/sign-in`, `/sign-up` | Public | Redirect to `/dashboard` if authed | Auth frame (external register) |
| `/dashboard` | Protected internal | Internal roles | **Frame 1** |
| `/portfolio` | Protected | Internal roles | Frame 1 (list) + Frame 2 |
| `/portfolio/[company]` | Protected | Internal; Investment Team write only on own `monitoring_attribution` | **Frame 2** |
| `/portfolio/[company]/quarterly-update` | Protected | Admin/IT | Frame 2 |
| `/portfolio/[company]/round-update` | Protected | Admin (CFO amounts) | Frame 2 |
| `/portfolio/[company]/milestones` (Milestones / Valuations) | Protected | Admin/CFO write | Frame 2 |
| `/funds` (Funds / Exposure) | Protected | Internal | Frame 1 + Frame 5 (exposure) |
| `/reporting` | Protected | Admin/MP | **Frame 3** |
| `/reporting/[quarter]` (Quarter detail) | Protected | Admin/MP | Frame 3 |
| `/reporting/post-meeting-review` | Protected | Admin/MP | Frame 3 |
| `/reporting/generate` (Generate reports) | Protected | Admin | Frame 3 |
| `/reporting/tasks` (Workflow tasks) | Protected | Admin/MP | Frame 3 |
| `/forms` | Protected | Admin | Frame 3 (submission board) |
| `/documents` | Protected | Internal | Frame 2 (table) |
| `/documents/shared-links` | Protected | Admin | Frame 2/3 |
| `/documents/view-tracking` | Protected | Admin | Frame 2/3 |
| `/documents/access-control` | Protected | Admin | Admin frame |
| `/intelligence` | Protected | Internal | **Frame 5** |
| `/audit` | Protected | Admin/MP/CFO read | Frame 2 (audit table) |
| `/compliance` | Protected | Internal | Frame 2/5 |
| `/settings`, `/admin` | Admin | Admin only | Admin frame |
| `/admin/users`, `/admin/roles`, `/admin/sessions` | Admin | Admin only | Admin frame |
| `/collect` | Public (Founder portal entry) | Token-gated landing | Frame 4 |
| `/collect/[token]` | External | Valid token only; founder sees own company only | **Frame 4** |
| `/share/[token]` | Public | Valid token | Frame 4 (light) |
| `/view/[token]` | Public | Valid token (read-only report view) | Frame 2 (read-only) |
| `*` / blocked | Fallback | — | **Unauthorized** screen |

**Guard behaviour:** unauthenticated → `/sign-in`; authenticated-but-unauthorised → Unauthorized screen (not a redirect, per the userflow). Founder token routes never expose app nav and never leak other companies' data.

---

## 5. Screen build specs (recompositions)

For each, build to the listed acceptance criteria. All reference the frame whose patterns they reuse.

### 5.1 Auth & landing (external register)
- `/` landing: brand hero (Direction 2 messaging), sign-in CTA, "signed in?" redirect logic.
- `/sign-in` `/sign-up`: email+password mock form (zod), error states, session set in mock auth context (8h idle timeout simulated). SSO button present but stubbed.

### 5.2 Dashboard `/dashboard` (Frame 1)
Fund KPI row, performance time-series, "what's next" workflow strip, alert summary. Fund switcher (URAF/UMEF — UMEF renders correctly with a single investment). IRR shows `N/A` when <2 cash-flow events. Progressive skeleton load.

### 5.3 Portfolio `/portfolio` + Company detail (Frame 2)
- List: searchable/filterable `DataTable` (status, sector, geography, fund), 1-click into detail, CSV export.
- Detail tabs: Overview · Quarterly Updates · Financials · Investment Details · Documents. Multi-tranche aggregation (Dash). SAFE fields + conversion workflow UI. RAG cluster. History/audit tab (immutable rows). Diff vs prior quarter. Flagged + first-quarter + pre-revenue states.

### 5.4 Funds / Exposure `/funds`
Fund summary, capital events list (capital calls/distributions → TVPI/DPI; "No distributions to date" default), NAV records (display-only), sector + geographic exposure (capital/count toggle).

### 5.5 Reporting `/reporting` (Frame 3)
Workflow timeline, submission status board, report generation cards with full lifecycle, approval queue with Approve/Request-changes/Reject, version history/archive, pre-generation data-completeness warnings, report `Distributed` date capture. Sub-routes: quarter detail, post-meeting review, generate, workflow tasks. **Export actions simulate** file download (mock blob) — no real .xlsx/.docx generation.

### 5.6 Forms `/forms` (Frame 3 board)
Quarter selector, per-company submission status grid, "generate links" action (mock token creation), reminder-send simulation, anomaly-flag review queue with reasons, regenerate-expired-link action.

### 5.7 Intelligence `/intelligence` (Frame 5)
RAG health table (4 signals, thresholds, N/A rules), alerts panel, sector/geo pies, runway-vs-revenue scatter, PNG export on all charts. Edge cases: pre-revenue, <2 quarters.

### 5.8 Documents `/documents`
Document table (per-company, type, uploaded), shared-links manager, view-tracking list, access-control admin.

### 5.9 Audit `/audit` & Compliance `/compliance`
Audit: global immutable change feed (user/timestamp/entity/field/old→new), filter by entity/user/date, read-only. Compliance: data-completeness + report-status overview, runway/overdue tracking.

### 5.10 Settings / Admin `/admin/*`
User management (CRUD UI, role assignment), role/permission matrix view (PRD §7.2), session list, company custom-KPI configuration UI. Admin-only guard.

### 5.11 Founder portal `/collect/[token]` (Frame 4 — external)
Standalone, mobile-first. Sectioned form (standard + custom + climate KPIs + narrative + uploads), pre-fill, required/optional, inline validation (zod), 1000-char counters, autosave every 60s with restore, confirmation screen + simulated confirmation email toast. Expired-link page. First-time (no pre-fill) path. **Founder sees only their company.**

### 5.12 Share / View / Unauthorized
`/share/[token]` read-only shared resource (light register); `/view/[token]` read-only report viewer; Unauthorized screen with explanation + return action.

---

## 6. Mock data & types (`src/mock/`)

Typed entities mirroring PRD §6: `Fund`, `Company`, `Investment`, `Valuation`, `QuarterlyUpdate`, `LPReport`, `CapitalEvent`, `AuditLogEntry`, `User`. Seed with the real PRD portfolio (URAF 13.8M / 10 companies + Farmio; UMEF / Metric 250k; the listed custom KPIs; sector/geo percentages; runway-flagged companies). Derived selectors compute **MOIC, fund MOIC, XIRR, TVPI, DPI, RAG signals, burn trend** client-side so numbers are live and match PRD examples (URAF MOIC ~1.04–1.12x). A small `mockApi` wraps reads/writes with simulated latency + occasional error to exercise loading/error states.

Money stored as integer cents; mono-formatted on display.

---

## 7. Cross-cutting requirements

- **States everywhere:** loading (skeleton), empty, error, permission-denied. No spinner > 3s (PRD §9.4); dashboard loads progressively.
- **Responsiveness:** internal app desktop-first (usable to ~1280px, graceful down to tablet); founder form mobile-first (375px, no horizontal scroll).
- **Accessibility:** semantic landmarks, keyboard nav, focus rings in Yello accent, inline form errors associated to inputs, color never the sole signal (RAG cells carry text/icon too).
- **Performance targets (PRD §9.4):** page < 2s @ 100 records; search < 1s; charts < 3s.
- **Motion:** subtle, calm, `prefers-reduced-motion` respected.
- **Density discipline:** internal tables 36–40px rows; accent used only for focus/active/single primary action; RAG amber kept distinct from brand yellow.

---

## 8. Explicitly out of scope (frontend build)

Backend/API, real authentication/SSO, real .xlsx/.docx/PNG generation (simulate), email delivery, database/backups, file storage, XIRR audited parity with Ocorian. These are mocked or stubbed with clearly-labelled placeholders.

---

## 9. Suggested build sequence

1. Reset stack to Yello tokens; build `src/components/` primitives + `AppShell`.
2. Mock data layer + types + derived selectors.
3. Auth context + role switcher + route guards + Unauthorized.
4. Frame 1 → Dashboard. Frame 2 → Portfolio/Company. (Validate token + table patterns.)
5. Frame 5 → Intelligence (charts). Frame 3 → Reporting (workflow/approval).
6. Frame 4 → Founder portal (external register). Share/View.
7. Funds, Documents, Audit, Compliance, Settings/Admin (recompositions).
8. Polish: states, responsiveness, a11y, motion, performance pass.

**Definition of done:** every route in §4 reachable and role-gated; all 5 frame patterns realised; mock numbers match PRD examples; loading/empty/error/permission states present; founder flow works on 375px with validation + autosave + confirmation.
