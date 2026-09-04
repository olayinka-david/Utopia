# Handoff Notes — Cloud ↔ Local (Yellow River / Yello)

> Single source of truth for where work paused and where to resume. Keep this
> updated whenever you switch between the **cloud session** (Claude Code on the
> web) and **local Claude Code**. Goal: stay aligned so the final step is a
> clean push + deploy from whichever side is ahead.

_Last updated by the **cloud** session._

## Marker (where cloud stopped)
- **Branch:** `claude/jolly-cannon-1vtqej` (do not switch branches — Pages auto-deploys from it)
- **Last cloud commit:** `d964d8a` — "Company deep-dive: tabbed page"
- **Live preview:** https://olayinka-david.github.io/Utopia/ (auto-deploys ~1 min after any push to the branch)
- **Founder portal:** `/collect.html?company=Alterno` (e.g. swap `?company=Dash`)

## What's built (cloud session)
App shell + nav · Dashboard (hero **fund carousel**, allocation, health rings,
KPIs, sector donut, MOIC chart, risk signals, workflow timeline, portfolio table,
upcoming investments) · Portfolio (search/filter/sort) · **Company deep-dive**
(Overview / Financials / Valuations / Documents tabs) · Exposure · Performance ·
**Quarterly Summary** (Portfolio + Investment Summary tables) · Reporting ·
Forms Hub · Documents · Intelligence · Audit · Deal Flow · Settings ·
**Founder portal** (`/collect`, 5-step wizard).

Stack: vanilla HTML/CSS/JS in `frontend/`. Design rules in `CLAUDE.md`.
Dummy data: URAF Q1 2026. Full gap list: `docs/frontend-gap-analysis.md`.

## Where LOCAL should start
1. `git pull origin claude/jolly-cannon-1vtqej` (get up to `d964d8a` or later).
2. First prompt:
   > "Read CLAUDE.md and docs/frontend-gap-analysis.md. Then, using the Software
   > Factory MCP, pull Phases 1–19 and tell me which frontend tasks are still
   > missing, grouped by phase."
3. **Reconcile + update** `docs/frontend-gap-analysis.md` with the real phases
   (replace the inferred Phase 1–19 table with the actual Work Orders).
4. Continue building. Next highest-impact items (from the gap analysis):
   - **Auth + role gating** (sign-in/up, role-aware nav, Unauthorized) — *not started*
   - Company financial history fidelity (real quarterly series if available from 8090)
   - Data room (`/documents/dataroom`), `/intelligence/wiki`, `/analytics/chat`
   - Working PNG/PDF exports; loading/empty/error states; a11y pass

## Staying aligned (cloud ↔ local)
- **Both use the same branch.** Always `git pull` **before** starting, `git push`
  **after** finishing, on either side.
- **Never edit the same files on both sides without pushing/pulling first** — that
  causes merge conflicts. Treat it as: only one side is "active" at a time.
- This cloud session and local **cannot see each other live**; git is the bridge.
- If they diverge, reconcile with a normal `git merge` / resolve conflicts, then push.

## When ready to go to the "cloud version" + deploy
- Deploy is already wired: pushing to `claude/jolly-cannon-1vtqej` triggers
  `.github/workflows/deploy-pages.yml` → GitHub Pages. One-time setup is done
  (Pages enabled, `github-pages` environment allows this branch).
- To resume in a **cloud session** later: start it on this repo/branch; it clones
  fresh, so just confirm it's at the latest commit (`git log -1`).
- Production target (per blueprints) is **Next.js 15 + shadcn + Clerk + Neon/Prisma
  + Recharts + Vercel AI SDK** — the vanilla prototype maps onto that build when/if
  you migrate.

## Quick status log (append as you go)
| Date | Side | Commit | Note |
| --- | --- | --- | --- |
| — | cloud | `d964d8a` | Paused after company deep-dive; handoff to local for 8090 phase pull |
| — | cloud | (this push) | Closed out gap items: Auth+roles, Compliance (climate/2X, Q4 lock), Workflow (Form G corrections, escalations, automation log), Exports (CSV + chart PNG), Design System (brand tokens). All 5 priority gaps now have a prototype implementation. |
