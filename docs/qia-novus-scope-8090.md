# QIA Novus Report — Scope & Build Spec (for 8090)

> Purpose: scope the **QIA Novus quarterly financial report** as a first-class
> platform module so the 8090 Software Factory agent can update the **Work Orders**
> and **Backend / Data-model / Frontend blueprints**. A working prototype of this
> view already exists in the vanilla build (Quarterly Summary → **QIA Novus** tab);
> this doc is the production specification behind it.
>
> Prototype: branch `claude/jolly-cannon-1vtqej` · live
> https://olayinka-david.github.io/Utopia/ → Quarterly Summary → QIA Novus.
> Production target: Next.js 15 + App Router + shadcn/ui + Tailwind + Recharts +
> Neon/Prisma + Vercel AI SDK.

---

## 1. What it is

QIA Novus is one of the quarterly reporting outputs (alongside QIA Deal Team, QIA
Master, Board Reporting Pack, Commentary Letter, Audit Confirmations). It is a
**spreadsheet-style financial report** that captures, per portfolio company, the
quarter's key financials and valuation-derived figures, and must be **generated
from platform data** (not re-keyed).

**Captured per company, per quarter:**
- Quarterly **Revenue**
- **EBITDA**
- **Net Debt** (net of cash; negative = net cash)
- **Equity Value** (implied 100% equity value)
- **Total Enterprise Value (TEV)** = Equity Value + Net Debt
- **% Ownership** (URAF/UMEF stake) — already captured in the portfolio view

Plus a **portfolio total** row and **CSV/XLSX export**.

---

## 2. Data model (backend implications)

The prototype derives figures on the fly from existing dummy data. Production needs
a **time-series financials table** so the report can be generated for any quarter
and so QoQ/YoY history is real, not synthesized.

Proposed entities (map onto Prisma/Neon):

```
CompanyFinancialPeriod
  id
  companyId            FK → Company
  fundId               FK → Fund            (URAF / UMEF)
  period               e.g. "2026-Q1"
  revenue              money (quarterly)
  ebitda               money (quarterly, can be negative)
  cash                 money (period-end)
  debt                 money (period-end gross debt; default 0)
  source               enum: REPORTED | DERIVED | ESTIMATE
  asOf                 date
  submittedBy          FK → User (nullable)
  Valuation (latest per company/period)
  carryingValue        money   (our marked holding value)
  ownershipPct         decimal (our %)
  moic                 decimal
  method               enum: COST | LAST_ROUND | DCF | COMPS …
```

**Derived metrics (generation logic):**
- `netDebt        = debt − cash`            (negative ⇒ net cash)
- `equityValue    = carryingValue / (ownershipPct/100)`   (implied 100% equity value)
- `tev            = equityValue + netDebt`
- Portfolio totals = column sums across companies in the active fund.

> Note on data-source policy (open decision, to be confirmed): the platform
> currently treats **revenue/EBITDA as REPORTED** inputs and **equity value / TEV
> as DERIVED** from valuations. The `source` enum makes each cell's provenance
> explicit so the report can show a "reported vs derived" indicator and so the
> hybrid policy (derive by default, override with reported where submitted) is
> enforceable at the data layer.

---

## 3. Generation

- **Trigger:** "Generate" action on the Reporting page (QIA Novus output row) and
  the QIA Novus tab's export button.
- **Inputs:** active fund + selected quarter → query `CompanyFinancialPeriod` +
  latest `Valuation` per company.
- **Output formats:** in-app spreadsheet view, **CSV** (built), **XLSX** (prod —
  matches the existing QIA Novus `.xlsx` deliverable), optional PDF for the pack.
- **Validation:** flag companies with missing periods (`n/a` cells today); block
  distribution until required cells are present or explicitly waived.
- **Audit:** every generation logged (who/when/quarter/version) — ties into the
  existing reporting audit trail and the Form-G amendment flow.

---

## 4. UI (frontend blueprint)

- Lives under **Quarterly Summary** as a third tab: *Portfolio Summary ·
  Investment Summary · **QIA Novus***.
- **Spreadsheet aesthetic:** dense table, tabular numerics, zebra rows, a
  highlighted **totals** row, horizontal scroll on narrow screens. (Built.)
- Columns: Company · Quarterly Revenue · EBITDA · Net Debt · Equity Value · TEV.
  Add **% Ownership** and **Quarter selector** in production.
- Per-cell **provenance indicator** (reported vs derived) once the data model lands.
- Row click → company deep-dive. Export CSV (built) / XLSX (prod).
- Methodology footnote (built) explaining net-debt sign, equity-value derivation
  and the "platform-derived — confirm against management accounts" caveat.

---

## 5. Work-order / blueprint deltas to fold in

1. **Backend / Data model:** add `CompanyFinancialPeriod` time-series + `source`
   provenance enum; extend `Valuation` with `ownershipPct`, `method`. Powers QIA
   Novus, the QoQ/YoY deltas, and historical runway (currently synthesized in the
   prototype).
2. **Reporting service:** a report-generation layer that composes QIA Novus (and
   the other outputs) from stored data; XLSX/PDF renderers; generation audit log.
3. **Frontend:** the QIA Novus tab (built in prototype) + quarter selector +
   provenance indicators + XLSX export.
4. **Governance:** wire generation/blocking to the Day-0→60 workflow (Day-45
   financials from Ocorian feed QIA Novus; Day-50 assembly consumes it).
5. **Permissions:** QIA Novus visible to Admin + CFO + Head of Operations; export
   gated; amendments via Form G (JJ-approved, already prototyped).

---

## 6. Status

- **Prototype:** built and live (spreadsheet view + totals + CSV export, derived
  from current platform data).
- **Pending production:** real financials time-series, XLSX/PDF generation, quarter
  selector, provenance indicators, and the data-source policy confirmation
  (reported vs derived vs hybrid).

> Related open items tracked elsewhere: finance-standard **dot + trend-line** chart
> styling is pending the **portfolio management deck** (interim style shipped);
> data-source policy (calculate vs pull) to be confirmed and applied platform-wide.
