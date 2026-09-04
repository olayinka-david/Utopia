/* ============================================================
   Data Reasoning Trail — Yellow River
   ------------------------------------------------------------
   Inspired by Farmio's traceability trail: every number Yellow
   *derives* (health score, risk signals, runway posture) can be
   opened to reveal exactly how it was produced, in three layers:

     1. Derivation   — inputs → normalization → weights → result
     2. Reasoning    — the rule chain that fired, with evidence
     3. Provenance    — where each input came from, and when

   Self-contained: reads the globals defined in app.js
   (companies, healthScore, computeSignals, fin, metricDeltas,
   fmtUSD) and mounts a drawer into #modalRoot. Loaded after app.js.
   ============================================================ */
(function () {
  "use strict";

  const money = (n) => (typeof fmtUSD === "function" ? fmtUSD(n) : "$" + Math.round(n).toLocaleString());
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const pct = (n) => Math.round(n) + "%";

  /* Active portfolio list — mirrors app.js `companies` (fund-scoped). */
  function activeList() {
    try { if (Array.isArray(companies) && companies.length) return companies; } catch (e) {}
    try { return [].concat(urafCompanies || [], umefCompanies || []); } catch (e) { return []; }
  }
  function findCompany(name) { return activeList().find((c) => c.name === name) || null; }

  /* Provenance: the app's data is a mock URAF Q1 2026 cycle, so inputs
     trace to the Q1 2026 founder submission + the fund's financial record. */
  const CYCLE = "Q1 2026";
  const SUBMITTED = "12 Apr 2026";
  const RECONCILED = "18 Apr 2026";

  /* ---------- Layer 1: derivation of the health score ---------- */
  function healthTrail(c) {
    const h = healthScore(c); // { score, parts: [label, raw, normalized%, weight] }
    const formulas = {
      "Runway": "clamp(runway ÷ 18 months, 0, 1)",
      "Revenue (LTM)": "clamp((log₁₀(LTM) − 4) ÷ 3.2, 0, 1)",
      "Growth QoQ": "clamp((QoQ% + 20) ÷ 60, 0, 1)",
      "MOIC": "clamp((MOIC − 1) ÷ 0.5, 0, 1)",
    };
    const rows = h.parts.map(([label, raw, norm, weight]) => {
      const contribution = Math.round((norm / 100) * weight);
      return { label, raw, norm, weight, contribution, formula: formulas[label] || "" };
    });
    const total = rows.reduce((s, r) => s + r.contribution, 0);
    return { score: h.score, rows, total };
  }

  /* ---------- Layer 2: the reasoning rule chain ---------- */
  function signalTrace(c) {
    const f = (typeof fin !== "undefined" && fin[c.name]) || {};
    const d = (typeof metricDeltas === "function" && metricDeltas(c.name, "revenue")) || null;
    const qoq = d ? d.qoq : null;
    const months = f.cash && f.burn ? Math.round(f.cash / f.burn) : null;
    const rules = [
      {
        id: "RUNWAY_CRITICAL", label: "Critical runway", sev: "critical",
        rule: "runway < 6 months",
        fired: c.runwayMo < 6,
        evidence: `Runway ${c.runway}` + (f.cash ? ` (${money(f.cash)} cash ÷ ${c.burn})` : "") + ` vs the 6-month floor.`,
      },
      {
        id: "RUNWAY_LOW", label: "Low runway", sev: "warning",
        rule: "6 ≤ runway < 9 months",
        fired: c.runwayMo >= 6 && c.runwayMo < 9,
        evidence: `Runway ${c.runway} is approaching the 6-month floor; track the active raise.`,
      },
      {
        id: "REVENUE_DECLINE", label: "Revenue decline", sev: "warning",
        rule: "QoQ revenue ≤ −15%",
        fired: qoq !== null && qoq <= -15,
        evidence: qoq === null ? "No QoQ revenue delta available." : `Revenue ${qoq}% QoQ — material decline this quarter.`,
      },
      {
        id: "BURN_ACCELERATION", label: "Burn acceleration", sev: "warning",
        rule: "runway ≥ 6 · cash ÷ burn < 9 · burn ≥ $80K/mo",
        fired: c.runwayMo >= 6 && months !== null && months < 9 && f.burn >= 80000,
        evidence: months === null ? "No cash/burn record to test." : `Burn ${c.burn} against ${money(f.cash || 0)} cash ≈ ${months} months at current rate.`,
      },
      {
        id: "FUNDRAISE_NEEDED", label: "Fundraise needed", sev: "info",
        rule: "6 ≤ runway < 12 · active raise in prep/pipeline",
        fired: c.runwayMo >= 6 && c.runwayMo < 12 && /prep|planning|bridge|raising|closing|advanced|pipeline/i.test(c.fundraise || ""),
        evidence: `Runway ${c.runway} with “${c.fundraise || "n/a"}” — close the round to extend runway.`,
      },
    ];
    return rules;
  }

  /* ---------- Layer 3: provenance of the inputs ---------- */
  function provenance(c) {
    const f = (typeof fin !== "undefined" && fin[c.name]) || {};
    const items = [
      ["Runway", c.runway, `${CYCLE} founder submission`, SUBMITTED],
      ["Monthly burn", c.burn, `${CYCLE} founder submission`, SUBMITTED],
      ["LTM revenue", c.ltm > 0 ? money(c.ltm) : "Pre-revenue", `${CYCLE} management accounts`, RECONCILED],
      ["MOIC", c.moic, "Fund valuation record (mark)", RECONCILED],
      ["Ownership", c.ownership, "Cap table of record", RECONCILED],
      ["Invested", money((c.invested || 0) * 1000), "Fund book (deployed capital)", RECONCILED],
    ];
    if (f.cash != null) items.push(["Cash on hand", money(f.cash), `${CYCLE} founder submission`, SUBMITTED]);
    return items;
  }

  const sevChip = (sev) => `<span class="tr-sev tr-sev-${sev}">${sev}</span>`;

  /* ---------- Drawer rendering ---------- */
  function drawerHTML(c) {
    const ht = healthTrail(c);
    const rules = signalTrace(c);
    const fired = rules.filter((r) => r.fired);
    const prov = provenance(c);
    const barColor = ht.score < 60 ? "var(--tr-red)" : ht.score < 75 ? "var(--tr-amber)" : "var(--tr-green)";

    const derivationRows = ht.rows.map((r) => `
      <div class="tr-drow">
        <div class="tr-drow-head"><span>${esc(r.label)}</span><span class="tr-mono">${esc(String(r.raw))}</span></div>
        <div class="tr-formula tr-mono">${esc(r.formula)} = ${r.norm}%</div>
        <div class="tr-bar"><div class="tr-bar-fill" style="width:${r.norm}%"></div></div>
        <div class="tr-drow-foot"><span class="tr-muted">weight ${r.weight}</span><span class="tr-contrib">+${r.contribution} pts</span></div>
      </div>`).join("");

    const traceRows = rules.map((r) => `
      <div class="tr-rule ${r.fired ? "is-fired" : "is-quiet"}">
        <div class="tr-rule-top">
          <span class="tr-rule-dot" aria-hidden="true"></span>
          <strong>${esc(r.label)}</strong>
          ${r.fired ? sevChip(r.sev) : '<span class="tr-pass">did not fire</span>'}
        </div>
        <div class="tr-rule-cond tr-mono">${esc(r.rule)}</div>
        <div class="tr-rule-ev">${esc(r.evidence)}</div>
      </div>`).join("");

    const provRows = prov.map(([label, val, src, when]) => `
      <tr>
        <td>${esc(label)}</td>
        <td class="tr-mono">${esc(String(val))}</td>
        <td>${esc(src)}</td>
        <td class="tr-muted">${esc(when)}</td>
      </tr>`).join("");

    return `
      <div class="tr-drawer" role="dialog" aria-modal="true" aria-label="Reasoning trail for ${esc(c.name)}">
        <header class="tr-head">
          <div>
            <div class="tr-eyebrow">Reasoning trail</div>
            <h2>${esc(c.name)}</h2>
            <p class="tr-sub">${esc(c.sector)} · ${esc(c.country)} · ${CYCLE}</p>
          </div>
          <button class="tr-close" type="button" aria-label="Close reasoning trail">✕</button>
        </header>

        <div class="tr-scorecard">
          <div class="tr-score-ring" style="--c:${barColor};--v:${(ht.score / 100).toFixed(3)}">
            <span>${ht.score}</span>
          </div>
          <div>
            <div class="tr-score-label">Derived health score</div>
            <p class="tr-muted">Computed independently by Yellow from base company metrics — <strong>not self-reported</strong>. Reporting figures (committed, drawn, GAV) remain authoritative inputs.</p>
          </div>
        </div>

        <section class="tr-layer">
          <div class="tr-layer-h"><span class="tr-num">1</span><h3>Derivation</h3><span class="tr-muted">inputs → weights → ${ht.total} pts</span></div>
          <div class="tr-derivation">${derivationRows}</div>
          <div class="tr-total">Weighted total <strong>${ht.total} / 100</strong></div>
        </section>

        <section class="tr-layer">
          <div class="tr-layer-h"><span class="tr-num">2</span><h3>Reasoning</h3><span class="tr-muted">${fired.length} of ${rules.length} rules fired</span></div>
          <div class="tr-trace">${traceRows}</div>
        </section>

        <section class="tr-layer">
          <div class="tr-layer-h"><span class="tr-num">3</span><h3>Provenance</h3><span class="tr-muted">source &amp; timestamp of each input</span></div>
          <table class="tr-prov"><thead><tr><th>Input</th><th>Value</th><th>Source of record</th><th>As of</th></tr></thead><tbody>${provRows}</tbody></table>
        </section>
      </div>`;
  }

  let lastFocus = null;
  function openTrail(spec) {
    const name = String(spec).split(":").slice(1).join(":") || String(spec);
    const c = findCompany(name);
    if (!c) return;
    const root = document.getElementById("modalRoot");
    if (!root) return;
    lastFocus = document.activeElement;
    root.innerHTML = `<div class="tr-scrim" data-tr-close></div>${drawerHTML(c)}`;
    root.classList.add("tr-open");
    document.body.style.overflow = "hidden";
    const close = () => closeTrail();
    root.querySelector(".tr-close").addEventListener("click", close);
    root.querySelector("[data-tr-close]").addEventListener("click", close);
    root.querySelector(".tr-close").focus();
    document.addEventListener("keydown", escClose);
  }
  function escClose(e) { if (e.key === "Escape") closeTrail(); }
  function closeTrail() {
    const root = document.getElementById("modalRoot");
    if (!root) return;
    root.classList.remove("tr-open");
    root.innerHTML = "";
    document.body.style.overflow = "";
    document.removeEventListener("keydown", escClose);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  /* A small inline "Why?" affordance other renderers can drop next to a number. */
  function trailChip(spec, label) {
    return `<button class="tr-why" type="button" data-trail="${esc(spec)}" aria-label="Show reasoning trail">` +
      `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="2.4"/><circle cx="18" cy="18" r="2.4"/><path d="M8.4 6H15a3 3 0 0 1 3 3v6.6"/></svg>` +
      `<span>${esc(label || "Why?")}</span></button>`;
  }
  window.trailChip = trailChip;

  /* ---------- Dedicated "Reasoning Trail" view ---------- */
  function renderReasoning() {
    const el = document.getElementById("reasoningBody");
    if (!el) return;
    const list = activeList();
    const cards = list
      .map((c) => ({ c, t: healthTrail(c), fired: signalTrace(c).filter((r) => r.fired) }))
      .sort((a, b) => a.t.score - b.t.score)
      .map(({ c, t, fired }) => {
        const barColor = t.score < 60 ? "var(--tr-red)" : t.score < 75 ? "var(--tr-amber)" : "var(--tr-green)";
        const factors = t.rows.map((r) => `<span class="tr-factor"><em>${esc(r.label.split(" ")[0])}</em> +${r.contribution}</span>`).join("");
        const sigs = fired.length
          ? fired.map((r) => sevChip(r.sev)).join(" ")
          : '<span class="tr-pass">no signals</span>';
        return `
          <button class="tr-card" type="button" data-trail="health:${esc(c.name)}">
            <div class="tr-card-top">
              <span class="tr-card-score" style="--c:${barColor}">${t.score}</span>
              <div class="tr-card-id"><strong>${esc(c.name)}</strong><span class="tr-muted">${esc(c.sector)}</span></div>
              <span class="tr-card-open">Open trail →</span>
            </div>
            <div class="tr-card-factors">${factors}</div>
            <div class="tr-card-sigs">${sigs}</div>
          </button>`;
      }).join("");

    el.innerHTML = `
      <section class="panel tr-intro">
        <div class="panel-body">
          <p class="eyebrow">Explainable analysis</p>
          <h2 style="margin:2px 0 8px;">Every derived number, traceable to its inputs</h2>
          <p class="meta" style="max-width:720px;">
            Yellow computes health scores and risk signals <strong>independently</strong> from base company
            metrics — runway, revenue, growth, MOIC and burn — rather than from self-reported summaries.
            Open any company to follow the full trail: how the score was <strong>derived</strong>, which
            <strong>rules</strong> fired and why, and the <strong>provenance</strong> of each input.
          </p>
          <div class="tr-legend">
            <span><i class="tr-key tr-key-1">1</i> Derivation</span>
            <span><i class="tr-key tr-key-2">2</i> Reasoning</span>
            <span><i class="tr-key tr-key-3">3</i> Provenance</span>
          </div>
        </div>
      </section>
      <section class="panel" style="margin-top:16px;">
        <div class="panel-head"><div><h2>Portfolio derivations</h2><p class="meta">Lowest health first · click a company to open its trail</p></div><span class="chip">${list.length} companies</span></div>
        <div class="panel-body"><div class="tr-grid">${cards}</div></div>
      </section>`;
  }
  window.renderReasoning = renderReasoning;

  /* Inject a "Why?" chip onto every derived-figure row that has a company.
     Idempotent, so it is safe to re-run on any DOM change. */
  function enhance() {
    const rows = document.querySelectorAll(
      "#healthList .health-row[data-company], #alertList .alert-row[data-company], #intelligenceBody [data-company]"
    );
    rows.forEach((row) => {
      const name = row.getAttribute("data-company");
      if (!name || row.querySelector(":scope > .tr-why")) return;
      const holder = document.createElement("span");
      holder.className = "tr-why-wrap";
      holder.innerHTML = trailChip("health:" + name, "Why?");
      row.appendChild(holder.firstChild);
    });
  }

  /* ---------- Wiring ---------- */
  function init() {
    // Route the dedicated view through app.js's render dispatch.
    try { if (typeof renderers === "object") renderers.reasoning = renderReasoning; } catch (e) {}
    // Global delegation: any [data-trail] opens the drawer (stops row clicks).
    document.addEventListener("click", (e) => {
      const t = e.target.closest("[data-trail]");
      if (!t) return;
      e.preventDefault();
      e.stopPropagation();
      openTrail(t.getAttribute("data-trail"));
    }, true);
    // Enhance now (dashboard already rendered) and after any re-render.
    enhance();
    const main = document.querySelector(".main") || document.body;
    let queued = false;
    new MutationObserver(() => {
      if (queued) return;
      queued = true;
      setTimeout(() => { queued = false; enhance(); }, 60);
    }).observe(main, { childList: true, subtree: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.openTrail = openTrail;
})();
