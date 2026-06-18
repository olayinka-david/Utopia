/* ============================================================
   Yello — Utopia Radical operating system
   Dummy data sourced from URAF Q1 2026 Quarterly Portfolio Summary.
   ============================================================ */

const fund = {
  name: "Utopia Radical Asia Fund 1",
  vintage: 2023,
  committed: 13.8, // $M
  drawn: 5.7,
  deployed: 1.88,
  reserved: 3.1, // committed-reserve illustration (drawn not yet deployed + buffer)
  gav: 2.07,
  companies: 10,
  moic: 1.1,
};

/* In order of LTM revenue (per summary table p.2-3). invested in $K. */
const companies = [
  { name: "3Cat", sector: "Circular Economy", country: "Malaysia", invested: 150, ownership: "1.20%", ltm: 14835012, moic: "1.00x", runway: "5 mo", runwayMo: 5, burn: "$90K/mo", burnTone: "amber", health: 55, fundraise: "Series A · closing 15 Jun 2026", note: "Monitor Series A close to extend runway" },
  { name: "Farmio", sector: "Agri-Food", country: "Singapore", invested: 300, ownership: "2.21%", ltm: 6761021, moic: "1.00x", runway: "12 mo", runwayMo: 12, burn: "$94.6K/mo", burnTone: "amber", health: 84, fundraise: "Pre-Series A · in prep", note: "ARR doubled to $10.2M; HK expansion" },
  { name: "Dash", sector: "Clean Mobility", country: "Indonesia", invested: 250, ownership: "7.53%", ltm: 2073887, moic: "1.00x", runway: "12+ mo", runwayMo: 12, burn: "$40K/mo", burnTone: "green", health: 82, fundraise: "Series A · healthy pipeline", note: "Closed $800K bridge in Q2; nearing profitability" },
  { name: "Alterno", sector: "Energy (TES)", country: "Vietnam", invested: 250, ownership: "4.40%", ltm: 1095310, moic: "1.02x", runway: "4.5 mo", runwayMo: 4.5, burn: "$39K/mo", burnTone: "red", health: 48, fundraise: "Series A2 · healthy pipeline", note: "Adjust runway on claimed inflows; growth slow" },
  { name: "Alicia Bots", sector: "Robotics", country: "Singapore", invested: 250, ownership: "2.30%", ltm: 699139, moic: "1.16x", runway: "10 mo", runwayMo: 10, burn: "$103K/mo", burnTone: "amber", health: 72, fundraise: "Series A · advanced pipeline", note: "High cash burn; ARR +17% QoQ to $1.12M" },
  { name: "Okapi", sector: "Energy (Solar)", country: "Malaysia", invested: 175, ownership: "6.05%", ltm: 422000, moic: "1.14x", runway: "20 mo", runwayMo: 20, burn: "$10K/mo", burnTone: "green", health: 88, fundraise: "Seed $3M · lead stalled", note: "20% of ARR target; support fundraise" },
  { name: "Arkadiah", sector: "NbS / Carbon", country: "Singapore", invested: 250, ownership: "1.50%", ltm: 261000, moic: "1.49x", runway: "21 mo", runwayMo: 21, burn: "$158K/mo", burnTone: "amber", health: 94, fundraise: "N/A · just closed round", note: "Order book $5.9M; Q1 collections near-zero" },
  { name: "Sirsak", sector: "Circular Economy", country: "Indonesia", invested: 50, ownership: "1.75%", ltm: 122052, moic: "1.00x", runway: "9 mo", runwayMo: 9, burn: "$17K/mo", burnTone: "green", health: 60, fundraise: "Seed bridge $1M · in prep", note: "Revenue -53% QoQ; project-based" },
  { name: "Waterhub", sector: "Water", country: "Indonesia", invested: 50, ownership: "3.30%", ltm: 46228, moic: "1.00x", runway: "13 mo", runwayMo: 13, burn: "$6.4K/mo", burnTone: "green", health: 70, fundraise: "Pre-seed · early planning", note: "420K L/mo; capacity-constrained" },
  { name: "Terra Oleo", sector: "Biotech", country: "Singapore", invested: 150, ownership: "1.76%", ltm: 0, moic: "1.00x", runway: "14 mo", runwayMo: 14, burn: "$67K/mo", burnTone: "amber", health: 64, fundraise: "N/A · pending grant", note: "Pre-revenue; TRL behind, purity 80–90% vs 95%" },
];

const upcoming = [
  { name: "Aleph Technologies", hq: "Singapore", desc: "AI-powered industrial digital twins driving efficiency, predictive insights and energy savings.", round: "$2M · Pre-Series A", uraf: "$250K", sidecar: "$150K", coInvestors: "NUS Grip, Cocoon Capital", sector: "Infra Intelligence", status: "IC approved · pending QDB" },
  { name: "N&E Innovations", hq: "Singapore", desc: "Upcycles food waste into natural antimicrobial materials for sustainable packaging.", round: "$3.9M · Series A", uraf: "$250K", sidecar: "$150K", coInvestors: "Mandalay VP (lead), SGInnovate, SEEDS Capital, Cercano", sector: "Low Carbon Materials", status: "IC approved · pending QDB" },
];

/* Sector exposure by capital deployed ($K). */
const sectors = [
  { label: "Agri-Food", value: 450, color: "#f2691e" },
  { label: "Energy", value: 425, color: "#ff7a1a" },
  { label: "Clean Mobility", value: 250, color: "#ff9a2e" },
  { label: "Robotics", value: 250, color: "#ffb338" },
  { label: "NbS / Carbon", value: 250, color: "#ffc233" },
  { label: "Circular Economy", value: 200, color: "#e9b27a" },
  { label: "Water", value: 50, color: "#ded9d0" },
];

const moicTrend = [
  { period: "Q2'24", v: 1.0 },
  { period: "Q4'24", v: 1.02 },
  { period: "Q1'25", v: 1.04 },
  { period: "Q2'25", v: 1.06 },
  { period: "Q3'25", v: 1.08 },
  { period: "Q1'26", v: 1.1 },
];

const workflow = [
  { day: "Day 0", title: "Quarter end", owner: "—", status: "Closed", state: "done" },
  { day: "Day 15", title: "Data collection", owner: "JJ Erpaiboon", status: "Complete", state: "done" },
  { day: "Day 30", title: "Financials", owner: "Shamona Maharaj", status: "Complete", state: "done" },
  { day: "Day 50", title: "Assembly", owner: "Shamona Maharaj", status: "In progress", state: "current" },
  { day: "Day 55", title: "Review", owner: "Alina Truhina (MP)", status: "Pending", state: "" },
  { day: "Day 60", title: "Distributed", owner: "Ocorian", status: "Pending", state: "" },
];

/* ---------- Navigation (full application shell) ---------- */
const nav = [
  { group: "Overview", items: [
    { id: "dashboard", label: "Dashboard", view: "dashboard", route: "/dashboard", icon: "▦" },
    { id: "portfolio", label: "Portfolio", view: "placeholder", route: "/dashboard/companies", icon: "◫", soon: true },
    { id: "exposure", label: "Exposure", view: "placeholder", route: "/dashboard/exposure", icon: "◐", soon: true },
    { id: "performance", label: "Performance", view: "placeholder", route: "/dashboard/performance", icon: "▲", soon: true },
  ]},
  { group: "Workflow", items: [
    { id: "reporting", label: "Reporting", view: "placeholder", route: "/reporting", icon: "◳", soon: true },
    { id: "forms", label: "Forms Hub", view: "placeholder", route: "/forms", icon: "▤", soon: true },
    { id: "documents", label: "Documents", view: "placeholder", route: "/documents", icon: "▢", soon: true },
  ]},
  { group: "Intelligence", items: [
    { id: "intelligence", label: "Intelligence", view: "placeholder", route: "/intelligence", icon: "◈", soon: true },
    { id: "audit", label: "Audit", view: "placeholder", route: "/audit", icon: "▣", soon: true },
    { id: "dealflow", label: "Deal Flow", view: "placeholder", route: "/dealflow", icon: "◧", soon: true },
  ]},
  { group: "Admin", items: [
    { id: "settings", label: "Settings", view: "settings", route: "/settings", icon: "◎" },
  ]},
];

const pageMeta = {
  dashboard: { eyebrow: "URAF · The Radical Fund", title: "Fund Dashboard", sub: "Portfolio performance, capital deployment, and quarterly reporting health for Q1 2026." },
  settings: { eyebrow: "Configuration", title: "Settings", sub: "Workspace defaults, reporting thresholds, roles, and visual system." },
};

/* ---------- Formatting helpers ---------- */
const fmtUSD = (n) => (n >= 1000000 ? "$" + (n / 1000000).toFixed(2) + "M" : n >= 1000 ? "$" + Math.round(n / 1000) + "K" : "$" + n);
const moneyM = (m) => "$" + m + "M";
const moneyK = (k) => (k >= 1000 ? "$" + (k / 1000).toFixed(2) + "M" : "$" + k + "K");

function ring(value, color, size = 54, onOrange = false) {
  const r = (size - 8) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - value / 100);
  const track = onOrange ? "rgba(255,255,255,0.28)" : "rgba(28,27,26,0.08)";
  return `<div class="ring ${onOrange ? "on-orange" : ""}" style="--size:${size}px">
    <svg viewBox="0 0 ${size} ${size}" aria-hidden="true">
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${track}" stroke-width="6"></circle>
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${color}" stroke-width="6" stroke-linecap="round" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}"></circle>
    </svg><strong>${value}${onOrange ? "%" : ""}</strong></div>`;
}

const healthColor = (h) => (h < 60 ? "#e0564c" : h < 75 ? "#ff9a2e" : "#2faa63");
const status = (tone, text) => `<span class="status status-${tone}">${text}</span>`;
const initials = (name) => name.replace(/[^A-Za-z0-9 ]/g, "").split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();

/* ---------- Renderers ---------- */
function renderNav() {
  document.getElementById("nav").innerHTML = nav.map((g) => `
    <div class="nav-group">
      <div class="nav-label">${g.group}</div>
      ${g.items.map((it) => `
        <button class="nav-item ${it.id === "dashboard" ? "is-active" : ""}" data-nav="${it.id}" type="button">
          <span class="ico">${it.icon}</span><span>${it.label}</span>${it.soon ? '<span class="tag">Soon</span>' : ""}
        </button>`).join("")}
    </div>`).join("");

  document.querySelectorAll("[data-nav]").forEach((b) => b.addEventListener("click", () => go(b.dataset.nav)));
}

function renderHero() {
  const drawnPct = Math.round((fund.drawn / fund.committed) * 100);
  document.getElementById("hero").innerHTML = `
    <div class="hero-top">
      <span class="hero-pill">URAF · Q1 2026</span>
      <span class="hero-bell">🔔</span>
    </div>
    <div>
      <div class="hero-value">${fund.moic.toFixed(2)}<sup>×</sup></div>
      <div class="hero-label">Gross Portfolio MOIC · GAV ${moneyM(fund.gav)}</div>
      <div class="hero-stats">
        <div class="hero-stat"><strong>${moneyM(fund.committed)}</strong><span>Committed</span></div>
        <div class="hero-stat"><strong>${moneyM(fund.drawn)}</strong><span>Drawn</span></div>
        <div class="hero-stat"><strong>${moneyM(fund.deployed)}</strong><span>Deployed</span></div>
        <div class="hero-stat"><strong>${fund.companies}</strong><span>Companies</span></div>
      </div>
    </div>
    <div class="hero-ring">${ring(drawnPct, "#fff", 92, true)}<div style="text-align:center;color:rgba(255,255,255,0.82);font-size:10.5px;font-weight:700;margin-top:6px;">drawn</div></div>`;
}

function renderAllocation() {
  const deployed = fund.deployed, reserved = fund.reserved;
  const total = fund.committed;
  document.getElementById("allocation").innerHTML = `
    <div class="alloc-head">
      <div><div class="lab">Deployed</div><div class="val">${moneyM(deployed)}</div></div>
      <div style="text-align:right;"><div class="lab">Reserved</div><div class="val">${moneyM(reserved)}</div></div>
    </div>
    <div class="alloc-bar">
      <div class="alloc-seg deployed" style="width:${(deployed / total) * 100}%"></div>
      <div class="alloc-seg reserved" style="width:${(reserved / total) * 100}%"></div>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px;">
      <span class="chip">Okapi</span><span class="chip">Alternō</span><span class="chip">Dash</span><span class="chip">+7 more</span>
    </div>`;
}

function renderHealthList() {
  const top = [...companies].sort((a, b) => b.health - a.health).slice(0, 6);
  document.getElementById("healthList").innerHTML = top.map((c) => `
    <div class="health-row" data-company="${c.name}">
      <span class="avatar">${initials(c.name)}</span>
      <div class="health-name"><strong>${c.name}</strong><div class="meta">${c.sector} · ${c.runway} runway</div></div>
      ${ring(c.health, healthColor(c.health), 46)}
    </div>`).join("");
  bindCompanyClicks();
}

function renderKpis() {
  const critical = companies.filter((c) => c.runwayMo <= 6).length;
  const fundraising = companies.filter((c) => /Series|Seed|Pre-Series/i.test(c.fundraise)).length;
  const kpis = [
    { label: "Capital deployed", value: moneyM(fund.deployed), foot: `${fund.companies} active companies` },
    { label: "Gross asset value", value: moneyM(fund.gav), foot: "Latest stake value" },
    { label: "Critical runway", value: String(critical), foot: "At or below 6 months", tone: "red" },
    { label: "Active fundraises", value: String(fundraising), foot: "Rounds underway", tone: "amber" },
  ];
  document.getElementById("kpiGrid").innerHTML = kpis.map((k) => `
    <section class="panel kpi">
      <div class="kpi-label"><span>${k.label}</span>${k.tone ? status(k.tone, k.tone === "red" ? "Watch" : "Active") : '<span class="chip">Q1</span>'}</div>
      <div><div class="kpi-value num">${k.value}</div><div class="kpi-foot">${k.foot}</div></div>
    </section>`).join("");
}

function renderSectorDonut() {
  const total = sectors.reduce((s, x) => s + x.value, 0);
  let acc = 0;
  const stops = sectors.map((s) => { const from = (acc / total) * 100; acc += s.value; const to = (acc / total) * 100; return `${s.color} ${from.toFixed(1)}% ${to.toFixed(1)}%`; }).join(", ");
  document.getElementById("sectorDonut").style.background = `conic-gradient(${stops})`;
  document.getElementById("sectorLegend").innerHTML = sectors.map((s) => `
    <div class="legend-row"><span class="dot" style="background:${s.color}"></span><span>${s.label}</span><strong>${Math.round((s.value / total) * 100)}%</strong></div>`).join("");
}

function renderMoicChart() {
  const min = 0.98, max = 1.12;
  document.getElementById("moicChart").innerHTML = moicTrend.map((d, i) => {
    const h = ((d.v - min) / (max - min)) * 100;
    const cls = i === moicTrend.length - 1 ? "hot" : i >= moicTrend.length - 3 ? "warm" : "";
    return `<div class="chart-col"><div class="chart-v num">${d.v.toFixed(2)}x</div><div class="chart-bar ${cls}" style="height:${Math.max(h, 6)}%"></div><div class="chart-x">${d.period}</div></div>`;
  }).join("");
}

function renderAlerts() {
  const alerts = [
    { code: "R1", tone: "red", title: "Alterno runway critical", meta: "4.5 mo · adjust on claimed inflows · Series A2 pipeline" },
    { code: "R2", tone: "red", title: "3Cat runway critical", meta: "5 mo · Series A closing 15 Jun 2026" },
    { code: "T3", tone: "amber", title: "Okapi below ARR target", meta: "20% of $1.8M ARR target · support fundraise" },
    { code: "B4", tone: "amber", title: "Alicia Bots burn acceleration", meta: "$103K/mo · cash $710K (from $1.1M in Jan)" },
    { code: "S5", tone: "amber", title: "Sirsak revenue stagnation", meta: "-53% QoQ · project-based, recurring lacking" },
  ];
  document.getElementById("alertList").innerHTML = alerts.map((a) => `
    <div class="alert-row">
      <span class="alert-icon status-${a.tone}">${a.code}</span>
      <div><h3>${a.title}</h3><p class="meta">${a.meta}</p></div>
      ${status(a.tone, a.tone === "red" ? "Critical" : "Watch")}
    </div>`).join("");
}

function renderWorkflow() {
  document.getElementById("workflow").innerHTML = workflow.map((w) => `
    <div class="timeline-item ${w.state}">
      <span class="day">${w.day}</span>
      <div><h3>${w.title}</h3><p class="meta">Owner · ${w.owner}</p></div>
      ${status(w.state === "done" ? "green" : w.state === "current" ? "amber" : "blue", w.status)}
    </div>`).join("");
}

function renderPortfolioTable() {
  document.getElementById("portfolioTable").innerHTML = `
    <thead><tr><th>Company</th><th>Sector</th><th>Country</th><th class="num">Invested</th><th class="num">LTM Rev</th><th class="num">MOIC</th><th>Runway</th><th>Fundraise</th></tr></thead>
    <tbody>${companies.map((c) => `
      <tr class="clickable" data-company="${c.name}">
        <td><div class="company-cell"><span class="avatar">${initials(c.name)}</span><strong>${c.name}</strong></div></td>
        <td>${c.sector}</td>
        <td>${c.country}</td>
        <td class="num">${moneyK(c.invested)}</td>
        <td class="num">${c.ltm === 0 ? "Pre-rev" : fmtUSD(c.ltm)}</td>
        <td class="num">${c.moic}</td>
        <td>${status(c.runwayMo <= 6 ? "red" : c.runwayMo <= 9 ? "amber" : "green", c.runway)}</td>
        <td class="meta">${c.fundraise}</td>
      </tr>`).join("")}</tbody>`;
  bindCompanyClicks();
}

function renderInvestSummary() {
  document.getElementById("investSummary").innerHTML = upcoming.map((u) => `
    <div class="inv-row">
      <div>
        <div style="display:flex;align-items:center;gap:10px;"><strong>${u.name}</strong><span class="chip">${u.hq}</span><span class="chip">${u.sector}</span></div>
        <p class="desc">${u.desc}</p>
        <p class="meta" style="margin-top:6px;">Co-investors · ${u.coInvestors}</p>
      </div>
      <div style="text-align:right;min-width:160px;">
        <div class="num" style="font-weight:800;font-size:15px;">${u.uraf} <span class="meta">URAF</span></div>
        <div class="num meta" style="margin-top:2px;">${u.sidecar} sidecar · ${u.round}</div>
        <div style="margin-top:8px;">${status("blue", u.status)}</div>
      </div>
    </div>`).join("");
}

/* ---------- Settings ---------- */
const field = (label, help, control) => `<div class="field-row"><div><div class="label">${label}</div><p class="meta">${help}</p></div><div>${control}</div></div>`;
const toggle = (on) => `<button class="toggle ${on ? "is-on" : ""}" type="button" aria-label="Toggle"><span></span></button>`;
const select = (opts) => `<select class="select">${opts.map((o) => `<option>${o}</option>`).join("")}</select>`;
const roleRow = (r, ...cols) => `<tr><td><strong>${r}</strong></td>${cols.map((c) => `<td>${c}</td>`).join("")}</tr>`;
const formRow = (k, name, who) => `<tr><td><span class="chip">Form ${k}</span></td><td><strong>${name}</strong></td><td class="meta">${who}</td></tr>`;
const swatchInput = (hex) => `<div class="swatch-row"><span class="swatch" style="background:${hex}"></span><input class="input" value="${hex}" style="max-width:140px;" /></div>`;

const settingsTemplates = {
  workspace: `
    <div class="panel-head"><div><h2>Workspace identity</h2><p class="meta">Core fund workspace naming and defaults.</p></div><span class="chip">Application settings</span></div>
    <div class="panel-body field-grid">
      ${field("Workspace name", "Visible to internal users.", '<input class="input" value="Yello — Utopia Radical" />')}
      ${field("Default fund", "Used for dashboard and reporting defaults.", select(["URAF — The Radical Fund", "UMEF — A-Typical"]))}
      ${field("Reporting period", "Primary reporting quarter.", select(["Q1 2026", "Q4 2025", "Q3 2025"]))}
      ${field("Fund administrator", "Liaison for NAV and distribution.", '<input class="input" value="Ocorian" />')}
      ${field("Workspace note", "Shown in reporting context panels.", '<textarea class="textarea">Quarterly workflow focused on portfolio summary, investment summary, and LP reporting readiness.</textarea>')}
    </div>`,
  reporting: `
    <div class="panel-head"><div><h2>Reporting workflow</h2><p class="meta">Thresholds and the quarterly LP cycle behaviour.</p></div><span class="status status-amber">Q1 2026 · Assembly</span></div>
    <div class="panel-body field-grid">
      ${field("Auto-validation", "Run completeness checks on founder upload.", toggle(true))}
      ${field("AI verification agent", "Cross-check submitted figures against source docs.", toggle(true))}
      ${field("Critical runway threshold", "At or below this value flags red.", '<input class="input" value="6 months" />')}
      ${field("Warning runway threshold", "At or below this value flags amber.", '<input class="input" value="9 months" />')}
      ${field("Reminder cadence", "Days post quarter-end for automated reminders.", '<input class="input" value="15, 25, 30, 40, 50, 55, 58" />')}
      ${field("Approval order", "Reviewer sequence for quarter close.", select(["Investment Team → CFO → Managing Partner", "CFO → Investment Team → Managing Partner"]))}
    </div>`,
  roles: `
    <div class="panel-head"><div><h2>Roles &amp; permissions</h2><p class="meta">Five role types enforced at the middleware layer.</p></div><button class="btn btn-muted" type="button">Invite user</button></div>
    <div class="panel-body table-scroll">
      <table class="tbl">
        <thead><tr><th>Role</th><th>Dashboard</th><th>Reporting</th><th>Documents</th><th>Valuation review</th><th>Admin</th></tr></thead>
        <tbody>
          ${roleRow("Admin", "Full", "Full", "Full", "Full", "Full")}
          ${roleRow("Investment Team", "Full", "Draft", "Full", "—", "—")}
          ${roleRow("Head of Portfolio", "Full", "Draft", "Full", "Submit", "—")}
          ${roleRow("CFO", "View", "Approve", "Review", "—", "—")}
          ${roleRow("LP Viewer", "Read", "Read", "Download", "—", "—")}
          ${roleRow("Founder", "Own only", "Submit own", "Own uploads", "—", "—")}
        </tbody>
      </table>
    </div>`,
  forms: `
    <div class="panel-head"><div><h2>Forms taxonomy</h2><p class="meta">Platform-wide named forms surfaced across the Forms Hub, activity feed, and audit logs.</p></div></div>
    <div class="panel-body table-scroll">
      <table class="tbl">
        <thead><tr><th>Form</th><th>Name</th><th>Submitters</th></tr></thead>
        <tbody>
          ${formRow("A", "New Investment Onboarding", "Portfolio Ops, Investment Team, Head of Portfolio")}
          ${formRow("B", "New Round / Capital Event", "Portfolio Ops, Investment Team, Head of Portfolio")}
          ${formRow("C", "Quarterly Company Update", "Portfolio Ops, Investment Team, Head of Portfolio")}
          ${formRow("D", "Post-Meeting Valuation Review", "Head of Portfolio only")}
          ${formRow("E", "Fund Performance Snapshot", "CFO only")}
          ${formRow("F", "Climate &amp; Impact KPIs (Q4)", "Portfolio Ops, Investment Team, Head of Portfolio")}
          ${formRow("G", "Correction Request", "Anyone · approved by Head of Portfolio")}
        </tbody>
      </table>
    </div>`,
  visuals: `
    <div class="panel-head"><div><h2>Visual system</h2><p class="meta">Flat palette, soft elevation, no gradients.</p></div></div>
    <div class="panel-body field-grid">
      ${field("Typeface", "System UI typeface.", '<input class="input" value="Plus Jakarta Sans" />')}
      ${field("Primary accent", "Flat orange for primary actions and active states.", swatchInput("#F2691E"))}
      ${field("Amber", "Secondary warm accent.", swatchInput("#FF9A2E"))}
      ${field("Yellow", "Tertiary warm accent.", swatchInput("#FFC233"))}
      ${field("Gradients", "Disabled — flat fills only.", toggle(false))}
      ${field("Card style", "Soft elevation, faint hairline, 16px radius.", '<input class="input" value="Elevation + hairline" />')}
    </div>`,
};

function setSettingsTab(tab) {
  document.querySelectorAll("[data-settings-tab]").forEach((b) => b.classList.toggle("is-active", b.dataset.settingsTab === tab));
  document.getElementById("settingsPanel").innerHTML = settingsTemplates[tab];
  document.querySelectorAll(".toggle").forEach((t) => t.addEventListener("click", () => t.classList.toggle("is-on")));
}

/* ---------- Router ---------- */
function go(id) {
  const item = nav.flatMap((g) => g.items).find((i) => i.id === id);
  if (!item) return;
  document.querySelectorAll(".nav-item").forEach((b) => b.classList.toggle("is-active", b.dataset.nav === id));
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("is-active"));
  document.getElementById(item.view).classList.add("is-active");

  if (item.view === "placeholder") {
    document.getElementById("phTitle").textContent = item.label + " — coming soon";
    document.getElementById("phBody").textContent = "This section is wired into the navigation and will be built next. Dashboard and Settings are live in this pass.";
    document.getElementById("phRoute").textContent = item.route;
    setMeta({ eyebrow: "Module", title: item.label, sub: "Wired into navigation · build pending." });
  } else {
    setMeta(pageMeta[item.view]);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setMeta(m) {
  if (!m) return;
  document.getElementById("pageEyebrow").textContent = m.eyebrow;
  document.getElementById("pageTitle").textContent = m.title;
  document.getElementById("pageSub").textContent = m.sub;
}

function bindCompanyClicks() {
  document.querySelectorAll("[data-company]").forEach((el) => {
    el.addEventListener("click", () => {
      // Company overview pages are part of the next build pass.
      go("portfolio");
    });
  });
}

/* ---------- Init ---------- */
renderNav();
renderHero();
renderAllocation();
renderHealthList();
renderKpis();
renderSectorDonut();
renderMoicChart();
renderAlerts();
renderWorkflow();
renderPortfolioTable();
renderInvestSummary();
setSettingsTab("workspace");

document.querySelectorAll("[data-settings-tab]").forEach((b) => b.addEventListener("click", () => setSettingsTab(b.dataset.settingsTab)));
document.getElementById("refreshBtn").addEventListener("click", (e) => {
  e.currentTarget.textContent = "Refreshed ✓";
  setTimeout(() => { e.currentTarget.textContent = "Refresh data"; }, 1400);
});
