# Q1 2026 Feedback — Adjustment Overview

> Source: review session feedback (incl. JJ's clarifications) + the updated
> **Quarterly Reporting Workflow** screenshot. Purpose: the authoritative change
> list for the Yellow prototype, structured to generate updated **8090 blueprints
> and work orders**. Prototype branch: `claude/jolly-cannon-1vtqej` ·
> live: https://olayinka-david.github.io/Utopia/
>
> Priority key: **P0** = core/blocking · **P1** = important · **P2** = nice-to-have.
> Layer: **FE** = frontend · **BE** = backend/data.

---

## 1. Fund delineation (URAF vs UMEF) — *recommendation*

The central theme of the feedback: it must be obvious which fund you're viewing, and
switching funds must rescope **all** data. Recommended approach:

- **Top-bar fund switcher** as a clear **segmented control** (labeled `URAF` / `UMEF`),
  replacing the cosmetic carousel-dot UI. Persistent on every page. **[P0, FE]**
- **Persistent fund context:** page eyebrow shows the active fund's full legal name —
  *Utopia Radical Asia Fund 1 (URAF)* / *Utopia Middle East Fund 1 (UMEF)*. **[P0, FE]**
- **Hero shows the fund NAME as the primary (large) element; MOIC drops to a smaller
  secondary stat.** **[P0, FE]**
- **Subtle per-fund accent** (light touch — e.g., a fund color on the switcher/active
  chip and company badges), not a full re-theme. **[P1, FE]**
- **All views rescope to the active fund** — KPIs, portfolio list, health, exposure,
  performance, reporting, impact. Selecting a fund updates every data point. **[P0, FE+BE]**
- Fund selection persists across navigation (state/URL). **[P1, FE]**

---

## 2. Roles & access (replace placeholder users — demo)

- **Full admin:** JJ, Alina, Roo, Shamona, Kolleen **[P0, FE]**
- **Portfolio access:** JJ, Ahmad, Alex **[P0, FE]**
- Wire these as the real users in mock auth; nav/permissions gate accordingly.
  (Replaces the current generic Steve/etc.) **[P0, FE]**

---

## 3. Overview Dashboard

**Changes**
- Hero: **fund name large**, MOIC smaller/secondary (see §1). **[P0, FE]**
- **Fund switch button clearer** (see §1). **[P0, FE]**
- **Capital allocation box too large** → reduce footprint. **[P1, FE]**
- **Portfolio Health must show all 10** companies (currently 6). **[P0, FE]**
- **Switching funds must update** portfolio + all data (see §1). **[P0, FE+BE]**
- **"Day 15" label → "Portfolio Reporting"** in the reporting strip *(superseded by the
  full workflow rewrite in §5 — reconcile labels there).* **[P1, FE]**

**New**
- **Sector composition hover → list contributing companies.** **[P1, FE]**
- **MOIC breakdown** — show per-company contribution/uplift (nice-to-have). **[P2, FE]**
- **Quarterly reporting strip:** include the **Valuation Review** step (now part of the
  workflow, §5). **[P1, FE]**

**Kept as-is:** Capital deployed & GAV boxes · Signals section · Portfolio view by LTM
revenue · Upcoming investments view.

---

## 4. Performance

**Changes**
- **"Performance over time" → bar + line combo:** bars = **revenue (US$)**, line =
  **trend**. (Replaces the current capsule/line-only view.) **[P0, FE]**
- Clarify **"13 companies"** → **13 investments across 10 companies** (follow-ons inflate
  the count). **[P1, FE]**
- **Hover shows exact values** on data points. **[P1, FE]**

**New**
- **Historical runway view** (not just current). **[P1, FE+BE]**
- **Revenue & EBITDA QoQ and YoY %** change badges. **[P1, FE+BE]**
- **Value drivers: valuation uplift per driver** ($ contribution each event added). **[P1, FE+BE]**
- **Impact + Operational metrics** as their own section (see §7). **[P1, FE]**

---

## 5. Reporting Workflow (full replacement)

Replace the current steps with the confirmed sequence (per screenshot — already includes
the valuation review):

| Day | Stage | Owner |
| --- | --- | --- |
| Day 0 | Quarter End | — |
| Day 30 | Founder Data Collection Complete | JJ Erpaiboon |
| Day 40 | Portfolio Management & Valuation Review Completed | JJ Erpaiboon |
| Day 45 | Financial Draft Received from Ocorian | Shamona Maharaj |
| Day 50 | Report Assembly (Financials + Portfolio + Commentary Letter) | JJ Erpaiboon |
| Day 55 | Managing Partner Review & Approval | Alina Truhina |
| Day 60 | Distributed via Ocorian | Ocorian |

**[P0, FE]** — also reconcile the dashboard reporting strip + automation reminders to
this timeline (Day 30 founder data; Day 40 portfolio/valuation; Day 45 financials;
Day 50 assembly; Day 55 MP review; Day 60 distribution).

---

## 6. Forms Hub

- **Add: Valuation Meeting Minutes** form/template. **[P1, FE]**
- **Add: Quarter Tasks** (checklist tied to the workflow). **[P1, FE]**
- **Remove "Portfolio Ops"** from submitter tags across all forms. **[P1, FE]**

---

## 7. Impact Reporting (rename of "Compliance")

- **Rename Compliance → "Impact Reporting".** **[P0, FE]**
- Houses **Gender + Climate** metrics. **[P0, FE]**
- **Aggregate view must be changeable/toggleable** (e.g., by fund, by period). **[P1, FE]**
- Surface **Impact + Operational metrics** section on the company/performance views too (§4). **[P1, FE]**

---

## 8. Exposure

- **Geographic exposure** currently **by HQ** — label it as such, and add future-state
  **Operations** and **Revenue base** views (toggle). **[P1, FE+BE]**

---

## 9. Deal Flow, Documents, Audit

- **Deal Flow → Attio CRM** sync — **optional/deprioritized** (Attio has its own reporting
  dashboard). Keep the current view; revisit only if needed. **[P2, BE]**
- **Document library** with secure sharing links — **kept as-is (good).**
- **Audit section** — **kept as-is (good).**

---

## 10. Summary by priority

**P0 (do first):** fund switcher + full per-fund rescoping · hero fund-name-primary ·
portfolio health all 10 · real roles/users · reporting workflow rewrite · rename to
Impact Reporting (gender + climate).

**P1:** capital-allocation size · sector hover · valuation-review step · Performance
bar+line · QoQ/YoY % · historical runway · per-driver uplift · forms (minutes, quarter
tasks, remove Portfolio Ops tag) · impact aggregate toggle · exposure HQ/ops/revenue ·
hover exact values · "13 investments/10 companies" label.

**P2:** MOIC breakdown contribution · Attio sync.

---

## 11. Notes for the 8090 agent
- This supersedes the relevant items in `docs/frontend-gap-analysis.md` and complements
  `docs/frontend-blueprint-updates-8090.md`.
- Several P0 items (fund rescoping, historical runway, QoQ/YoY, per-driver uplift) imply
  **backend/data-model** work (per-fund data, historical snapshots) — flag for the
  Backend & Architecture blueprints, not frontend-only.
- The Phase 1–19 mapping in the gap analysis remains inferred; reconcile with the real
  Work Orders when generating updates.
