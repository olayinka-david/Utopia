/* ============================================================
   Yello — Founder portal (/collect)
   Standalone external surface: multi-step quarterly update wizard.
   Token-based (simulated via ?company=), pre-filled, inline validation,
   auto-save, confirmation. No app navigation (per PRD 9.3).
   ============================================================ */

const QUARTER = "Q1 2026";

/* Company-specific custom KPIs (from the Frontend Blueprint). */
const customKpis = {
  "Alterno": [["batteries_deployed", "Batteries deployed", 0], ["total_revenue_ytd", "Total revenue YTD (USD)", 0]],
  "Dash": [["deliveries_completed", "Deliveries completed", 0], ["active_drivers", "Active drivers", 0], ["clients", "Clients", 0]],
  "Okapi": [["leases_closed", "Leases closed", 0], ["paying_leases", "Paying leases", 0], ["cumulative_arr", "Cumulative ARR (USD)", 0], ["capex_committed", "Capex committed (USD)", 0]],
  "3Cat": [["stores", "Number of stores", 0], ["devices_refurbished", "Devices refurbished", 0]],
  "Waterhub": [["units_installed", "Units installed", 0], ["litres_served", "Litres of water served", 0], ["co2_prevented", "CO₂ prevented (kg)", 0]],
  "Sirsak": [["collection_points", "Collection points", 0], ["tonnage_recovered", "Waste recovered (tonnes)", 0]],
  "Arkadiah": [["contracted_revenue_5yr", "5-yr contracted revenue (USD)", 0], ["monthly_revenue", "Monthly revenue (USD)", 0]],
  "Alicia Bots": [["robots_deployed", "Robots deployed", 0], ["arr", "ARR (USD)", 0], ["production_capacity", "Monthly production capacity", 0]],
  "Terra Oleo": [["pilots_signed", "Pilots signed", 0], ["titer_level", "Titer achieved (g/L)", 0], ["purity_pct", "Purity (%)", 0]],
  "Farmio": [["arr", "ARR (USD)", 0], ["mrr", "MRR (USD)", 0]],
};

/* Pre-fill (last quarter), keyed by company. Only Alterno fully seeded for demo. */
const prefills = {
  "Alterno": {
    revenue_quarterly: 39000, revenue_monthly_latest: 13000, burn_monthly: 39000, runway_months: 14,
    cash_balance: 180000, ebitda_quarterly: -120000, gross_margin_pct: 46, headcount: 22,
    customers: 12, hc_male: 16, hc_female: 5, hc_other: 1,
    batteries_deployed: 8, total_revenue_ytd: 1000000,
    highlights: "Re-negotiated the $400K Arista contract into monthly $39K instalments (recurring revenue). Achieved 100% supply-chain independence for core battery material.",
    lowlights: "Growth has been slow — limited movement on new clients this quarter.",
    goals: "Progress the Series A2 round ($5M at $25M valuation); continue Alternō E development; pursue the $4.58M non-dilutive financing pipeline.",
    risks_asks: "",
  },
};

const company = new URLSearchParams(location.search).get("company") || "Alterno";
const kpis = customKpis[company] || [["kpi_1", "Custom KPI", 0]];

/* Field definitions per step. */
const steps = [
  {
    title: "Financials", hint: "Reported for " + QUARTER + " — pre-filled with last quarter where available.",
    fields: [
      { k: "revenue_quarterly", label: "Quarterly revenue", unit: "USD", req: true, type: "number", min: 0 },
      { k: "revenue_monthly_latest", label: "Most recent month’s revenue", unit: "USD", req: true, type: "number", min: 0 },
      { k: "burn_monthly", label: "Monthly burn rate", unit: "USD", req: true, type: "number", gt: 0 },
      { k: "runway_months", label: "Runway", unit: "months", req: true, type: "number", gt: 0, max: 60 },
      { k: "cash_balance", label: "Cash balance", unit: "USD", req: true, type: "number", min: 0 },
      { k: "ebitda_quarterly", label: "Quarterly EBITDA", unit: "USD (can be negative)", req: true, type: "number" },
      { k: "gross_margin_pct", label: "Gross margin", unit: "%", req: false, type: "number", min: -100, max: 100 },
      { k: "headcount", label: "Headcount", req: true, type: "number", min: 1 },
      { k: "total_assets", label: "Total assets", unit: "USD", req: false, type: "number", min: 0 },
      { k: "total_liabilities", label: "Total liabilities", unit: "USD", req: false, type: "number", min: 0 },
    ],
  },
  {
    title: "Operations", hint: "Team and customer detail for the quarter.",
    fields: [
      { k: "customers", label: "Customer count", req: false, type: "number", min: 0 },
      { k: "hc_male", label: "Headcount — male", req: false, type: "number", min: 0, grid3: true },
      { k: "hc_female", label: "Headcount — female", req: false, type: "number", min: 0, grid3: true },
      { k: "hc_other", label: "Headcount — other", req: false, type: "number", min: 0, grid3: true },
      { k: "key_hires", label: "Key hires / departures", req: false, type: "textarea", max: 500 },
    ],
  },
  {
    title: "Custom KPIs", hint: company + "-specific metrics. Climate & impact: report at least one if available.",
    fields: [
      ...kpis.map(([k, label]) => ({ k, label, req: true, type: "number", min: 0 })),
      { k: "ghg_reduced", label: "GHG emissions reduced / avoided (tCO₂e)", req: false, type: "number", min: 0, climate: true },
      { k: "hectares_improved", label: "Hectares under improved practice", req: false, type: "number", min: 0, climate: true },
      { k: "households_resilience", label: "Households with improved climate resilience", req: false, type: "number", min: 0, climate: true },
    ],
  },
  {
    title: "Qualitative", hint: "Narrative for the investment team. Up to 1,000 characters each.",
    fields: [
      { k: "highlights", label: "Highlights", req: true, type: "textarea", max: 1000 },
      { k: "lowlights", label: "Low-lights", req: true, type: "textarea", max: 1000 },
      { k: "goals", label: "Goals for next quarter", req: true, type: "textarea", max: 1000 },
      { k: "risks_asks", label: "Risks & asks from the fund", req: false, type: "textarea", max: 1000 },
    ],
  },
  { title: "Documents & review", hint: "Attach supporting documents, then review and submit." },
];

const state = { step: 0, values: Object.assign({}, prefills[company] || {}), files: [], submitted: false };
const $ = (id) => document.getElementById(id);

document.getElementById("coName").textContent = company;
document.getElementById("coQuarter").textContent = QUARTER + " · due in 9 days";

function validateField(f, v) {
  const empty = v === "" || v === undefined || v === null;
  if (f.req && empty) return "This field is required.";
  if (empty) return null;
  if (f.type === "number") {
    const n = Number(v);
    if (Number.isNaN(n)) return "Enter a valid number.";
    if (f.min !== undefined && n < f.min) return `Must be ≥ ${f.min}.`;
    if (f.max !== undefined && n > f.max) return `Must be ≤ ${f.max}.`;
    if (f.gt !== undefined && n <= f.gt) return `Must be greater than ${f.gt}.`;
  }
  if (f.max && f.type === "textarea" && String(v).length > f.max) return `Max ${f.max} characters.`;
  return null;
}

function fieldHtml(f) {
  const v = state.values[f.k] ?? "";
  const reqMark = f.req ? '<span class="req">*</span>' : '<span class="opt">optional</span>';
  const unit = f.unit ? ` <span class="meta">(${f.unit})</span>` : "";
  const counter = f.type === "textarea" ? `<span class="counter" id="cnt_${f.k}">${String(v).length}/${f.max}</span>` : "";
  const input = f.type === "textarea"
    ? `<textarea class="textarea" data-k="${f.k}" maxlength="${f.max}">${v}</textarea>`
    : `<input class="input wizard-input" type="number" inputmode="decimal" data-k="${f.k}" value="${v}" />`;
  return `<div class="fld ${f.grid3 ? "" : ""}" data-fld="${f.k}">
    <label>${f.label} ${reqMark}${unit}${counter}</label>
    ${input}
    <div class="err" id="err_${f.k}" style="display:none;"></div>
  </div>`;
}

function renderStepper() {
  $("stepper").innerHTML = steps.map((s, i) => `
    <div class="step-pill ${i === state.step ? "is-active" : ""} ${i < state.step ? "is-done" : ""}">
      <span class="n">${i < state.step ? "✓" : i + 1}</span><span class="lbl">${s.title}</span>
    </div>`).join("");
}

function renderStep() {
  renderStepper();
  const s = steps[state.step];
  const last = state.step === steps.length - 1;
  let body;
  if (last) {
    body = `
      <h2>Documents & review</h2>
      <p class="meta">${s.hint}</p>
      <div class="fld"><label>Supporting documents <span class="opt">optional</span> <span class="meta">(PDF or XLSX · max 5 files · 10MB each)</span></label>
        <div class="dropzone" id="drop">+ Add management accounts, board deck, or other files</div>
        <div id="fileList"></div>
      </div>
      <h3 style="margin-top:22px;">Review</h3>
      <div id="review"></div>`;
  } else {
    const grid3 = s.fields.filter((f) => f.grid3);
    const normal = s.fields.filter((f) => !f.grid3);
    body = `<h2>${s.title}</h2><p class="meta">${s.hint}</p>
      <div class="fld-grid">${normal.map(fieldHtml).join("")}</div>
      ${grid3.length ? `<div class="fld-grid3" style="margin-top:0;">${grid3.map(fieldHtml).join("")}</div>` : ""}`;
  }
  $("wizard").innerHTML = `
    <div class="wizard-body">${body}</div>
    <div class="wizard-foot">
      <span class="autosave" id="autosave">Draft auto-saves as you type</span>
      <div style="display:flex;gap:8px;">
        ${state.step > 0 ? `<button class="btn btn-muted" id="backBtn" type="button">← Back</button>` : ""}
        <button class="btn btn-primary" id="nextBtn" type="button">${last ? "Submit update" : "Continue →"}</button>
      </div>
    </div>`;

  // bind inputs
  $("wizard").querySelectorAll("[data-k]").forEach((el) => {
    el.addEventListener("input", () => {
      state.values[el.dataset.k] = el.value;
      const cnt = $("cnt_" + el.dataset.k);
      if (cnt) cnt.textContent = `${el.value.length}/${el.getAttribute("maxlength")}`;
      markSaved();
    });
  });
  if (last) { renderFiles(); renderReview(); $("drop").addEventListener("click", addFile); }
  if ($("backBtn")) $("backBtn").addEventListener("click", () => { state.step--; renderStep(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  $("nextBtn").addEventListener("click", onNext);
}

function onNext() {
  const s = steps[state.step];
  if (s.fields) {
    let ok = true, firstErr = null;
    s.fields.forEach((f) => {
      const err = validateField(f, state.values[f.k]);
      const errEl = $("err_" + f.k);
      const input = document.querySelector(`[data-k="${f.k}"]`);
      if (err) { ok = false; if (errEl) { errEl.textContent = err; errEl.style.display = "block"; } if (input) input.classList.add("invalid"); if (!firstErr) firstErr = input; }
      else { if (errEl) errEl.style.display = "none"; if (input) input.classList.remove("invalid"); }
    });
    if (!ok) { if (firstErr) firstErr.scrollIntoView({ behavior: "smooth", block: "center" }); return; }
  }
  if (state.step === steps.length - 1) { submit(); return; }
  state.step++; renderStep(); window.scrollTo({ top: 0, behavior: "smooth" });
}

function markSaved() {
  const el = $("autosave");
  if (!el) return;
  el.textContent = "Saving…";
  clearTimeout(window._save);
  window._save = setTimeout(() => { const t = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); el.textContent = "Draft saved ✓ · " + t; }, 500);
}

function addFile() {
  if (state.files.length >= 5) return;
  const names = ["Management_Accounts_Q1.pdf", "Board_Deck_Q1.pdf", "Balance_Sheet.xlsx", "Cap_Table.xlsx", "Metrics.pdf"];
  state.files.push(names[state.files.length]);
  renderFiles();
}
function renderFiles() {
  $("fileList").innerHTML = state.files.map((f, i) => `<div class="file-item"><span>📎 ${f}</span><button data-f="${i}" type="button">Remove</button></div>`).join("");
  $("fileList").querySelectorAll("[data-f]").forEach((b) => b.addEventListener("click", () => { state.files.splice(+b.dataset.f, 1); renderFiles(); }));
  if ($("review")) renderReview();
}

function renderReview() {
  const v = state.values;
  const money = (x) => (x === "" || x === undefined ? "—" : "$" + Number(x).toLocaleString());
  const rows = [
    ["Quarterly revenue", money(v.revenue_quarterly)],
    ["Monthly burn", money(v.burn_monthly)],
    ["Runway", (v.runway_months ?? "—") + " months"],
    ["Cash balance", money(v.cash_balance)],
    ["Headcount", v.headcount ?? "—"],
    ["Custom KPIs", kpis.map(([k, l]) => `${l}: ${v[k] ?? "—"}`).join(" · ")],
    ["Documents", state.files.length + " attached"],
  ];
  $("review").innerHTML = rows.map((r) => `<div class="review-row"><span>${r[0]}</span><strong>${r[1]}</strong></div>`).join("");
}

function submit() {
  state.submitted = true;
  $("stepper").style.display = "none";
  $("wizard").innerHTML = `
    <div class="confirm">
      <div class="ic">✓</div>
      <h2>Update submitted</h2>
      <p class="meta" style="margin-top:10px;max-width:440px;margin-left:auto;margin-right:auto;line-height:1.6;">
        Thank you — your ${QUARTER} update for <strong>${company}</strong> has been received by the Utopia Radical team.
        A confirmation email with a summary of your submitted values will arrive within 5 minutes.
      </p>
      <div style="margin-top:20px;"><button class="btn btn-muted" type="button" onclick="location.reload()">Submit another</button></div>
    </div>`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

renderStep();
