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

/* Funds for the hero carousel (auto-rotating). */
const funds = [
  {
    id: "URAF", name: "The Radical Fund", period: "Q1 2026", moic: "1.10",
    sub: "Gross Portfolio MOIC · GAV $2.07M",
    stats: [["$13.8M", "Committed"], ["$5.7M", "Drawn"], ["$1.88M", "Deployed"], ["10", "Companies"], ["N/A", "Gross IRR · &lt;2 ev"]],
    ringPct: 41, ringLab: "drawn of committed",
  },
  {
    id: "UMEF", name: "A-Typical · launching", period: "Q1 2026", moic: "1.00",
    sub: "Gross Portfolio MOIC · GAV $0.25M",
    stats: [["$0.25M", "Deployed"], ["1", "Company"], ["1", "LP"], ["Metric", "Holding"], ["N/A", "Gross IRR · &lt;2 ev"]],
    ringPct: 100, ringLab: "deployed",
  },
];

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

/* Rich per-company detail (URAF Q1 2026 Quarterly Portfolio Summary). */
const details = {
  "3Cat": {
    stage: "Pre-Series A", security: "SAFE", invested: "May 2025", holding: "$150,000 (cost)",
    desc: "Omnicommerce platform for buying, trading and repairing second-hand smartphones in Malaysia — an online marketplace plus a physical retail network.",
    model: "Sources used devices from consumers and distributors, then resells across its online marketplace and network of retail stores.",
    metrics: [["$4.75M", "Quarterly revenue (+104% YoY)"], ["$19.8M", "Revenue run rate"], ["18%", "Gross margin"], ["$75K", "Monthly store revenue"], ["5 mo", "Runway*"], ["$432K", "Cash on hand"], ["$90K", "Monthly burn"], ["113", "Employees"]],
    highlights: ["Series A targeted to close 15 Jun 2026 — $4M led by Foxmont Capital, with ADB Ventures, GGV and existing investors.", "Growth consistent and margins improving."],
    lowlights: ["Growth stalled somewhat while the Series A is being closed."],
    goals: ["Close the Series A fundraise.", "Strategic partnerships with XOX and Aeon — first shop-in-shop concept in Q3 2026."],
    rag: [["green", "Revenue 62% of target — $4.7M vs $7.6M"], ["green", "Stores 65% of target — 22 vs 34"]],
  },
  "Farmio": {
    stage: "Pre-Series A", security: "SAFE", invested: "Oct 2025", holding: "$300,000 (cost)",
    desc: "Singapore-based AI-powered food supply-chain platform streamlining B2B procurement for suppliers and buyers.",
    model: "Three models: licensing AI software for recurring revenue, a marketplace earning transaction fees, and a licensed intermediary capturing trading margins.",
    metrics: [["$1.8M", "Quarterly revenue (+2.6%)"], ["$7.4M", "Revenue run rate"], ["25.1%", "Lifetime gross margin"], ["$16M", "2026 revenue forecast"], ["12 mo", "Runway"], ["$1.1M", "Cash on hand"], ["$94.6K", "Monthly burn"], ["12", "Employees"]],
    highlights: ["ARR nearly doubled from $5.2M a year ago to $10.2M.", "Hong Kong: 400 active customers, targeting ~700 by year end.", "New brand 'Alba' extends AI to hospitality; Middle East traction with Hassad Food."],
    lowlights: ["Top-line growth slowed in Q1 (oil prices, CNY, Ramadan).", "Just-in-time model pressures price competitiveness."],
    goals: ["Fundraising — introductions to food, supply-chain and government partners."],
    rag: [["green", "ARR doubled in 12 months"]],
  },
  "Dash": {
    stage: "Series A", security: "Equity", invested: "Jul 2024", holding: "$250,000 (cost)",
    desc: "White-label fleet-management service combining riders, electric vehicles and integrated fleet-management software.",
    model: "Lease-to-own EV fleet and 'driver-as-a-service' — riders, customisable white-label EVs and proprietary logistics software for middle/last-mile operations.",
    metrics: [["$1M", "Quarterly revenue (+53%)"], ["$4.7M", "Revenue run rate"], ["24%", "Gross margin"], ["1,224", "Active workers (+32%)"], ["12+ mo", "Runway*"], ["$65K", "Cash on hand"], ["$40K", "Monthly burn"], ["59", "Employees"]],
    highlights: ["Revenue & margins improved while burn stayed stable.", "EBITDA margin at -11% (from -41% in Q4'25) — approaching profitability.", "Raised $800K bridge from existing investors."],
    lowlights: ["Equity round taking longer amid tough Indonesian macro conditions."],
    goals: ["Close Series A (advanced pipeline: Intudo, Beacon VC, Twynam).", "Reach $10M ARR and profitability by EOY 2026."],
    rag: [["green", "Revenue 150% of target — $1M vs $652K"], ["green", "Gross margin 126% of target"]],
  },
  "Alterno": {
    stage: "Series A2", security: "Equity", invested: "Mar 2024", holding: "$255,000 (no change)",
    desc: "Thermal energy storage (TES) and hybrid electrification — sand-battery technology for high-temperature industrial heat, plus Alternō E for clean power.",
    model: "B2B clean-energy: TES systems and Alternō E units sold to industrial customers; revenue from equipment sale, project deployment and engineering services.",
    metrics: [["$39K", "Quarterly revenue (-53%)"], ["$1M", "Total 2025 revenue"], ["46%", "Gross margin"], ["12", "Clients"], ["14 mo", "Runway"], ["$180K", "Cash on hand"], ["$39K", "Monthly burn"], ["22", "Employees"]],
    highlights: ["Renegotiated $400K Arista contract into monthly $39K instalments — recurring revenue.", "100% supply-chain independence for core battery material.", "$1.2M Yamaha proposal just approved."],
    lowlights: ["Growth slow; little movement on new clients last quarter."],
    goals: ["Series A2: $5M equity at $25M valuation, targeting early-2027 close.", "Continue Alternō E development; pursue $4.58M non-dilutive pipeline."],
    rag: [["red", "1.29% of FY revenue target"], ["amber", "50% of battery deployment target"]],
  },
  "Alicia Bots": {
    stage: "Series A", security: "Equity", invested: "Jul 2024", holding: "$289,900 (no change)",
    desc: "Robotic solutions for maintaining steel structures — hull inspection, cleaning and corrosion repair to boost operational efficiency and sustainability.",
    model: "B2B robotics-as-a-service — paid pilots and annual recurring contracts via direct sales and resellers; robots manufactured in China, core IP in SG and Greece.",
    metrics: [["$105K", "Quarterly revenue (-49%)"], ["$1.12M", "ARR (+17%)"], ["29", "Customers (+9)"], ["10 mo", "Runway"], ["$710K", "Cash on hand"], ["$103K", "Monthly burn"], ["61", "Robots deployed (+6)"], ["26", "Employees"]],
    highlights: ["March production record — 15 robots in SG; 27 deployments in Q1 with zero churn.", "ARR +17% QoQ to $1.12M; 9 new customers.", "MPA Singapore Maritime Week; VARD EU Horizon partnership targeting €1M grant."],
    lowlights: ["Costamare contract cancelled; avg contract price -12.6%.", "Revenue recognition lag ($1.33M billed YTD vs $105K recognised); high burn."],
    goals: ["Convert 15 committed contracts and collect $380K + $567K renewals to confirm 19-month runway.", "Maintain 15 robots/month; advance Jetson + propeller inspection tool."],
    rag: [["green", "ARR compounding steadily"]],
  },
  "Okapi": {
    stage: "Seed", security: "Equity", invested: "Mar 2024", holding: "$200,000 (no change)",
    desc: "Residential solar leasing platform providing zero-upfront financing to homeowners, expanding energy access while generating predictable lease income.",
    model: "B2B2C solar financing-as-a-service — partners originate leads; Okapi finances capex and collects 5–10 year leases. Debt funds capex; equity funds working capital.",
    metrics: [["$131K", "Quarterly revenue (+16%)"], ["$524K", "Revenue run rate"], ["55%", "Gross margin"], ["473", "Leases closed"], ["20 mo", "Runway"], ["$313K", "Cash on hand"], ["$10K", "Monthly op. loss"], ["6", "Employees"]],
    highlights: ["Traction recovering after Solar ATAP confirmation — back to peak demand, Q2 uptick expected.", "Mosque installations emerging as a new growth vertical."],
    lowlights: ["Public holidays & macro disruptions caused slowdowns.", "Trirec (intended lead investor) talks stalled."],
    goals: ["Kick off $3M Seed round (discussing Iterative as lead).", "Explore Thailand market expansion."],
    rag: [["red", "20% of ARR target — $524K vs $1.8M"], ["red", "28% of leases target — 473 vs 1,715"]],
  },
  "Arkadiah": {
    stage: "Series A", security: "Equity", invested: "Sep 2023", holding: "$372,400 (no change)",
    desc: "Carbon-project technology company building MRV/DMRV systems and end-to-end nature-based solutions across Asia, LATAM and Africa.",
    model: "B2B/B2G carbon project services — fee-based land-restoration & DMRV contracts, government tenders, and technology-driven MRV.",
    metrics: [["$23K", "Quarterly revenue (-81%)"], ["$261K", "Implied LTM revenue"], ["9", "Signed active clients"], ["$5.9M", "5Y contracted order book"], ["21 mo", "Runway"], ["$3.4M", "Cash on hand"], ["$158K", "Monthly burn"], ["15", "Employees"]],
    highlights: ["GAR Kalimantan (SGD 521K) fully signed — largest single contract.", "LatAm mission yielded ~4.5M ha addressable dMRV pipeline.", "AI tools deployed internally to cut cost and time-to-delivery."],
    lowlights: ["Revenue collection backloaded — only ~SGD 31K collected in Q1 vs >USD 1M pipeline.", "Ghana (Ga East) behind schedule — key risk to Africa revenue."],
    goals: ["Achieve GAR project kickoff and data-collection mobilisation.", "Close 1–2 LatAm conversion contracts; resolve Ghana billing restart."],
    rag: [["amber", "Order book $5.9M healthy; Q1 collections near-zero"]],
  },
  "Sirsak": {
    stage: "Seed", security: "SAFE", invested: "May 2025", holding: "$50,000 (cost)",
    desc: "Waste-management technology platform helping FMCG brands and e-commerce players recover packaging waste via waste banks, drop points and digital traceability (S-POP).",
    model: "B2B packaging recovery — PRP programs with FMCG/e-commerce, project-based collection, and sale of recycled multilayer plastics (in development).",
    metrics: [["$27.7K", "Quarterly revenue (-53.2%)"], ["$110.8K", "Revenue run rate"], ["51.9%", "Gross margin"], ["670", "Collection points (+6.3%)"], ["9 mo", "Runway*"], ["$366K", "Cash on hand"], ["$17K", "Monthly burn"], ["20", "Employees (11 female)"]],
    highlights: ["Revenue YoY +226% — $53K to $122K.", "670 collection points and 177 tons of waste managed cumulatively — biggest impact yet.", "Three products expected in motion within Q2 2026."],
    lowlights: ["Much of revenue is still project-based; recurring elements lacking.", "Q1'26 revenue dipped vs Q4'25 (likely temporary)."],
    goals: ["Fundraising — introductions to impact/climate-focused investors.", "Refine and launch the SirCle RVM MVP."],
    rag: [],
  },
  "Waterhub": {
    stage: "Pre-seed", security: "SAFE", invested: "Jul 2025", holding: "$50,000 (cost)",
    desc: "Indonesia's first quota-based water refill station — sustainable, great-tasting water with advanced filtration to cut plastic waste and carbon emissions.",
    model: "Works with manufacturing partners to assemble filtration machines providing clean water to B2C and B2B customers; monetised per litre consumed.",
    metrics: [["$16K", "Quarterly revenue (+21%)"], ["$56K", "Revenue run rate"], ["81%", "Gross margin"], ["420K L", "Monthly water volume"], ["6 mo", "Runway*"], ["$36K", "Cash on hand"], ["$6.4K", "Monthly burn"], ["15", "Employees"]],
    highlights: ["Achieved 420,000-litre monthly water volume.", "Strong inbound interest from hotels, F&B and industrial segments."],
    lowlights: ["Growth constrained by production and deployment capacity, not demand."],
    goals: ["Expand B2B client base across hospitality, F&B and industrial estates.", "Engage 2–3 more manufacturing vendors for quality and timelines."],
    rag: [["red", "~36% of monthly ARR target"], ["red", "~49% of machines-installed target"]],
  },
  "Terra Oleo": {
    stage: "Seed", security: "Equity", invested: "Jun 2024", holding: "$150,000 (cost)",
    desc: "Precision-fermentation platform producing sustainable oleochemicals and cocoa-butter equivalents (CBE) from engineered yeast for food, personal-care and specialty chemicals.",
    model: "B2B ingredient licensing and co-development — validates demand with consumer-goods companies and licenses manufacturing to major producers for scale.",
    metrics: [["Pre-rev", "Revenue"], ["~$67K", "Monthly burn (+29%)"], ["14 mo", "Runway"], ["TRL 4", "Tech readiness"], ["80–90%", "Purity (target 95%)"], ["6", "FTE"], ["3", "CBE variants scaled"], ["8", "Leaders testing"]],
    highlights: ["Three cocoa-butter variants scaled to 40–100L; kilogram-scale material delivered.", "Patent filed Dec'25 (19 claims).", "New product-testing LOI with a Japan-HQ fats & oils leader."],
    lowlights: ["TRL behind target; purity not yet at 95%.", "No commercial contracts signed — H2 2026 at risk.", "DSP bottleneck at CMO partners slowing sample processing."],
    goals: ["Run 300–1000L pilot in Q2 2026.", "Secure EnterpriseSG POV Stage 2 grant to extend runway to end-2027."],
    rag: [["amber", "Product & tech behind plan"], ["green", "Commercial pipeline building"]],
  },
};

const upcoming = [
  { name: "Aleph Technologies", hq: "Singapore", desc: "AI-powered industrial digital twins driving efficiency, predictive insights and energy savings.", round: "$2M · Pre-Series A", uraf: "$250K", sidecar: "$150K", coInvestors: "NUS Grip, Cocoon Capital", sector: "Infra Intelligence", status: "IC approved · pending QDB" },
  { name: "N&E Innovations", hq: "Singapore", desc: "Upcycles food waste into natural antimicrobial materials for sustainable packaging.", round: "$3.9M · Series A", uraf: "$250K", sidecar: "$150K", coInvestors: "Mandalay VP (lead), SGInnovate, SEEDS Capital, Cercano", sector: "Low Carbon Materials", status: "IC approved · pending QDB" },
];

/* Sector exposure by capital deployed ($K). */
const sectors = [
  { label: "Agri-Food", value: 450, count: 2, color: "#f2691e" },
  { label: "Energy", value: 425, count: 2, color: "#ff7a1a" },
  { label: "Clean Mobility", value: 250, count: 1, color: "#ff9a2e" },
  { label: "Robotics", value: 250, count: 1, color: "#ffb338" },
  { label: "NbS / Carbon", value: 250, count: 1, color: "#ffc233" },
  { label: "Circular Economy", value: 200, count: 2, color: "#e9b27a" },
  { label: "Water", value: 50, count: 1, color: "#ded9d0" },
];

/* Geographic exposure (by capital $K and by company count). */
const geos = [
  { label: "Singapore", value: 950, count: 4, color: "#f2691e" },
  { label: "Indonesia", value: 350, count: 3, color: "#ff8a2a" },
  { label: "Malaysia", value: 325, count: 2, color: "#ffb338" },
  { label: "Vietnam", value: 250, count: 1, color: "#ffd27a" },
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
    { id: "portfolio", label: "Portfolio", view: "portfolio", route: "/dashboard/companies", icon: "◫" },
    { id: "exposure", label: "Exposure", view: "exposure", route: "/dashboard/exposure", icon: "◐" },
    { id: "performance", label: "Performance", view: "performance", route: "/dashboard/performance", icon: "▲" },
  ]},
  { group: "Workflow", items: [
    { id: "reporting", label: "Reporting", view: "reporting", route: "/reporting", icon: "◳" },
    { id: "forms", label: "Forms Hub", view: "forms", route: "/forms", icon: "▤" },
    { id: "documents", label: "Documents", view: "documents", route: "/documents", icon: "▢" },
  ]},
  { group: "Intelligence", items: [
    { id: "intelligence", label: "Intelligence", view: "intelligence", route: "/intelligence", icon: "◈" },
    { id: "audit", label: "Audit", view: "audit", route: "/audit", icon: "▣" },
    { id: "dealflow", label: "Deal Flow", view: "dealflow", route: "/dealflow", icon: "◧" },
  ]},
  { group: "Admin", items: [
    { id: "settings", label: "Settings", view: "settings", route: "/settings", icon: "◎" },
  ]},
];

const pageMeta = {
  dashboard: { eyebrow: "URAF · The Radical Fund", title: "Fund Dashboard", sub: "Portfolio performance, capital deployment, and quarterly reporting health for Q1 2026." },
  portfolio: { eyebrow: "URAF · The Radical Fund", title: "Portfolio", sub: "All 10 portfolio companies — search, filter, and open any company for the full overview." },
  exposure: { eyebrow: "URAF · The Radical Fund", title: "Exposure", sub: "Sector and geographic concentration — by capital allocated and by company count." },
  performance: { eyebrow: "URAF · The Radical Fund", title: "Performance", sub: "MOIC development, capital deployment, and fund multiples to date." },
  reporting: { eyebrow: "URAF · The Radical Fund", title: "Quarterly Reporting", sub: "The Q1 2026 LP reporting cycle — workflow phases, tasks, and report generation." },
  forms: { eyebrow: "Workflow", title: "Forms Hub", sub: "Platform-wide form taxonomy (A–G) with role-based submission permissions." },
  documents: { eyebrow: "Workflow", title: "Documents", sub: "Document library with secure sharing links and view analytics." },
  intelligence: { eyebrow: "Intelligence", title: "Risk Intelligence", sub: "Automated risk signals across the portfolio — filter by severity and track resolution." },
  audit: { eyebrow: "Intelligence", title: "Audit", sub: "Per-company audit confirmation letters and their status with Moore." },
  dealflow: { eyebrow: "Intelligence", title: "Deal Flow", sub: "Pipeline funnel, prospect pipeline, and upcoming Q2 2026 investments." },
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

let heroIdx = 0, heroTimer = null;

function heroSlide(f) {
  return `
    <span class="hero-pill">${f.id} · ${f.period}</span>
    <div>
      <div class="hero-value">${f.moic}<sup>×</sup></div>
      <div class="hero-label">${f.sub} · ${f.name}</div>
    </div>
    <div class="hero-stats">${f.stats.map((s) => `<div class="hero-stat"><strong>${s[0]}</strong><span>${s[1]}</span></div>`).join("")}</div>`;
}

function updateHero(i) {
  heroIdx = (i + funds.length) % funds.length;
  const f = funds[heroIdx];
  const content = document.getElementById("heroContent");
  const ringEl = document.getElementById("heroRing");
  content.innerHTML = heroSlide(f);
  ringEl.innerHTML = `${ring(f.ringPct, "#fff", 104, true)}<span class="lab">${f.ringLab}</span>`;
  document.querySelectorAll("#heroDots .hero-dot").forEach((d, di) => d.classList.toggle("is-active", di === heroIdx));
  [content, ringEl].forEach((el) => { el.classList.remove("hero-anim"); void el.offsetWidth; el.classList.add("hero-anim"); });
}

function heroStart() { heroStop(); heroTimer = setInterval(() => updateHero(heroIdx + 1), 5000); }
function heroStop() { if (heroTimer) clearInterval(heroTimer); }

function renderHero() {
  const el = document.getElementById("hero");
  el.innerHTML = `
    <div class="hero-glow"></div>
    <button class="hero-bell" type="button" aria-label="Notifications">🔔</button>
    <div class="hero-ring" id="heroRing"></div>
    <div class="hero-content" id="heroContent"></div>
    <div class="hero-dots" id="heroDots">${funds.map((_, i) => `<button class="hero-dot" type="button" data-slide="${i}" aria-label="Fund ${i + 1}"></button>`).join("")}</div>`;
  el.querySelectorAll("#heroDots .hero-dot").forEach((d) => d.addEventListener("click", () => { updateHero(+d.dataset.slide); heroStart(); }));
  el.addEventListener("mouseenter", heroStop);
  el.addEventListener("mouseleave", heroStart);
  updateHero(0);
  heroStart();
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
    return `<div class="chart-col"><div class="chart-barwrap"><span class="chart-v num">${d.v.toFixed(2)}x</span><div class="chart-bar ${cls}" style="height:${Math.max(h, 6)}%"></div></div><div class="chart-x">${d.period}</div></div>`;
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

/* ============================================================
   Additional module pages
   ============================================================ */

/* Shared helpers */
function donut(el, items, accessor) {
  const total = items.reduce((s, x) => s + accessor(x), 0);
  let acc = 0;
  el.style.background = `conic-gradient(${items.map((s) => { const f = (acc / total) * 100; acc += accessor(s); return `${s.color} ${f.toFixed(1)}% ${((acc / total) * 100).toFixed(1)}%`; }).join(", ")})`;
  return total;
}
function legend(items, accessor, total, unit) {
  return items.map((s) => `<div class="legend-row"><span class="dot" style="background:${s.color}"></span><span>${s.label}</span><strong>${Math.round((accessor(s) / total) * 100)}%${unit ? ` · ${unit(s)}` : ""}</strong></div>`).join("");
}

/* ---------- Exposure ---------- */
let expMode = "value"; // "value" | "count"
function renderExposure() {
  const acc = (x) => (expMode === "value" ? x.value : x.count);
  const unit = (x) => (expMode === "value" ? moneyK(x.value) : `${x.count} co`);
  const sTotal = sectors.reduce((s, x) => s + acc(x), 0);
  const gTotal = geos.reduce((s, x) => s + acc(x), 0);
  document.getElementById("exposureBody").innerHTML = `
    <div class="section-title">
      <div class="seg" id="expSeg">
        <button class="${expMode === "value" ? "is-active" : ""}" data-mode="value" type="button">By capital</button>
        <button class="${expMode === "count" ? "is-active" : ""}" data-mode="count" type="button">By company count</button>
      </div>
      <button class="btn btn-muted" type="button">Export PNG</button>
    </div>
    <div class="grid grid-2">
      <section class="panel"><div class="panel-head"><h2>Sector Exposure</h2><span class="chip">${expMode === "value" ? moneyM(fund.deployed) : fund.companies + " companies"}</span></div>
        <div class="panel-body"><div class="donut-wrap"><div class="donut" id="expSector"><div class="donut-center"><strong>${sectors.length}</strong><span>sectors</span></div></div><div class="legend">${legend(sectors, acc, sTotal, unit)}</div></div></div>
      </section>
      <section class="panel"><div class="panel-head"><h2>Geographic Exposure</h2><span class="chip">${geos.length} markets</span></div>
        <div class="panel-body"><div class="donut-wrap"><div class="donut" id="expGeo"><div class="donut-center"><strong>${geos.length}</strong><span>markets</span></div></div><div class="legend">${legend(geos, acc, gTotal, unit)}</div></div></div>
      </section>
    </div>
    <section class="panel" style="margin-top:16px;"><div class="panel-head"><h2>Concentration Table</h2><span class="chip">${expMode === "value" ? "by capital" : "by count"}</span></div>
      <div class="panel-body table-scroll"><table class="tbl">
        <thead><tr><th>Sector</th><th class="num">Capital</th><th class="num">Companies</th><th class="num">% of fund</th></tr></thead>
        <tbody>${sectors.map((s) => `<tr><td><div class="company-cell"><span class="dot" style="background:${s.color};width:12px;height:12px;"></span><strong>${s.label}</strong></div></td><td class="num">${moneyK(s.value)}</td><td class="num">${s.count}</td><td class="num">${Math.round((acc(s) / sTotal) * 100)}%</td></tr>`).join("")}</tbody>
      </table></div>
    </section>`;
  donut(document.getElementById("expSector"), sectors, acc);
  donut(document.getElementById("expGeo"), geos, acc);
  document.querySelectorAll("#expSeg button").forEach((b) => b.addEventListener("click", () => { expMode = b.dataset.mode; renderExposure(); }));
}

/* ---------- Performance ---------- */
const perfSeries = {
  MOIC: { fmt: (v) => v.toFixed(2) + "x", min: 0.98, max: 1.12, data: [["Q2'24", 1.0], ["Q4'24", 1.02], ["Q1'25", 1.04], ["Q2'25", 1.06], ["Q3'25", 1.08], ["Q1'26", 1.1]] },
  GAV: { fmt: (v) => "$" + v.toFixed(2) + "M", min: 0, max: 2.2, data: [["Q2'24", 0.85], ["Q4'24", 1.2], ["Q1'25", 1.55], ["Q2'25", 1.8], ["Q3'25", 1.95], ["Q1'26", 2.07]] },
  Deployed: { fmt: (v) => "$" + v.toFixed(2) + "M", min: 0, max: 2.0, data: [["Q2'24", 0.8], ["Q4'24", 1.2], ["Q1'25", 1.55], ["Q2'25", 1.7], ["Q3'25", 1.8], ["Q1'26", 1.88]] },
};
const drivers = [
  ["Okapi", "Up-round", "Q4 2024", "First uplift in carrying value"],
  ["Alicia Bots", "Seed round", "Q1 2025", "Priced round — uplift to 1.16x"],
  ["Alternō", "Follow-on", "Q2 2025", "Additional carrying-value uplift"],
  ["Arkadiah", "Series A", "Q3 2025", "Uplift to 1.49x — top performer"],
];
let perfMetric = "MOIC";
function renderPerfChart() {
  const s = perfSeries[perfMetric];
  document.getElementById("perfChart").innerHTML = s.data.map((d, i) => {
    const h = ((d[1] - s.min) / (s.max - s.min)) * 100;
    const cls = i === s.data.length - 1 ? "hot" : i >= s.data.length - 3 ? "warm" : "";
    return `<div class="chart-col"><div class="chart-barwrap"><span class="chart-v num">${s.fmt(d[1])}</span><div class="chart-bar ${cls}" style="height:${Math.max(h, 6)}%"></div></div><div class="chart-x">${d[0]}</div></div>`;
  }).join("");
}
function renderPerformance() {
  const kpis = [["1.10x", "Gross MOIC", "GAV / invested"], ["1.10x", "TVPI", "NAV + dist / paid-in"], ["0.00x", "DPI", "no distributions yet"], ["N/A", "Gross IRR", "< 2 cash-flow events"]];
  document.getElementById("performanceBody").innerHTML = `
    <div class="grid grid-4" style="margin-bottom:16px;">${kpis.map((k) => `<section class="panel kpi"><div class="kpi-label"><span>${k[1]}</span><span class="chip">Q1'26</span></div><div><div class="kpi-value num">${k[0]}</div><div class="kpi-foot">${k[2]}</div></div></section>`).join("")}</div>
    <section class="panel"><div class="panel-head"><div><h2>Fund Development</h2><p class="meta">Gross portfolio progression to date</p></div>
      <div class="seg" id="perfSeg">${Object.keys(perfSeries).map((k) => `<button class="${k === perfMetric ? "is-active" : ""}" data-metric="${k}" type="button">${k}</button>`).join("")}</div></div>
      <div class="panel-body"><div class="chart" id="perfChart"></div></div>
    </section>
    <section class="panel" style="margin-top:16px;"><div class="panel-head"><h2>Value Drivers</h2><span class="status status-green">▲ 1.00x → 1.10x</span></div>
      <div class="panel-body table-scroll"><table class="tbl">
        <thead><tr><th>Company</th><th>Event</th><th>Period</th><th>Impact</th></tr></thead>
        <tbody>${drivers.map((d) => `<tr class="clickable" data-company="${d[0]}"><td><div class="company-cell"><span class="avatar">${initials(d[0])}</span><strong>${d[0]}</strong></div></td><td>${status("green", d[1])}</td><td class="num">${d[2]}</td><td class="meta">${d[3]}</td></tr>`).join("")}</tbody>
      </table></div>
    </section>`;
  renderPerfChart();
  document.querySelectorAll("#perfSeg button").forEach((b) => b.addEventListener("click", () => { perfMetric = b.dataset.metric; document.querySelectorAll("#perfSeg button").forEach((x) => x.classList.toggle("is-active", x === b)); renderPerfChart(); }));
  bindCompanyClicks();
}

/* ---------- Reporting ---------- */
const reportDocs = [
  ["QIA Deal Team", ".xlsx", "Approved", "green"],
  ["QIA Novus", ".xlsx", "Under Review", "amber"],
  ["QIA Master", ".xlsx", "Draft", "blue"],
  ["Board Reporting Pack", ".docx", "Draft", "blue"],
  ["Commentary Letter", ".docx", "Not started", "blue"],
  ["Audit Confirmations", ".docx", "Draft", "blue"],
];
let phaseSel = 3;
function renderReporting() {
  const reminders = "15 · 25 · 30 · 40 · 50 · 55 · 58";
  document.getElementById("reportingBody").innerHTML = `
    <section class="panel"><div class="panel-head"><div><h2>Q1 2026 Workflow</h2><p class="meta">Target: Day 60 LP distribution · reminders sent on days ${reminders}</p></div><span class="status status-amber">Assembly · Day 50</span></div>
      <div class="panel-body">
        <div class="phases" id="phases">${workflow.map((w, i) => `<div class="phase ${w.state} ${i === phaseSel ? "is-active" : ""}" data-phase="${i}"><div class="ph-k">${w.day}</div><strong>${w.title}</strong><div class="meta">${w.owner}</div></div>`).join("")}</div>
        <div id="phaseDetail" style="margin-top:14px;"></div>
      </div>
    </section>
    <div class="grid grid-2" style="margin-top:16px;">
      <section class="panel"><div class="panel-head"><h2>Report Generation</h2><span class="chip">6 outputs</span></div>
        <div class="panel-body"><div class="alert-list">${reportDocs.map((r) => `<div class="alert-row"><span class="alert-icon status-${r[3]}">${r[1].replace(".", "").toUpperCase()}</span><div><h3>${r[0]}</h3><p class="meta">${r[1]} · auto-generated from stored data</p></div><div style="display:flex;gap:8px;align-items:center;">${status(r[3], r[2])}<button class="btn btn-muted gen" type="button">Generate</button></div></div>`).join("")}</div></div>
      </section>
      <section class="panel"><div class="panel-head"><h2>Quarter Tasks</h2><span class="chip" id="taskCount"></span></div>
        <div class="panel-body" id="taskList"></div>
      </section>
    </div>`;
  renderPhaseDetail();
  document.querySelectorAll("#phases .phase").forEach((p) => p.addEventListener("click", () => { phaseSel = +p.dataset.phase; document.querySelectorAll("#phases .phase").forEach((x) => x.classList.toggle("is-active", x === p)); renderPhaseDetail(); }));
  document.querySelectorAll(".gen").forEach((b) => b.addEventListener("click", (e) => { e.currentTarget.textContent = "Generated ✓"; setTimeout(() => { e.currentTarget.textContent = "Generate"; }, 1400); }));
  renderTasks();
}
function renderPhaseDetail() {
  const w = workflow[phaseSel];
  document.getElementById("phaseDetail").innerHTML = `<div class="panel-muted" style="border-radius:12px;padding:16px;"><div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;"><div><h3>${w.day} · ${w.title}</h3><p class="meta" style="margin-top:4px;">Owner — ${w.owner}</p></div>${status(w.state === "done" ? "green" : w.state === "current" ? "amber" : "blue", w.status)}</div></div>`;
}
const tasks = [
  { t: "Collect founder updates (10 companies)", done: true },
  { t: "Compile financials with Ocorian", done: true },
  { t: "Assemble QIA Deal Team export", done: true },
  { t: "Review QIA Novus & Master", done: false },
  { t: "Managing Partner approval", done: false },
  { t: "Distribute to LPs via Ocorian", done: false },
];
function renderTasks() {
  document.getElementById("taskList").innerHTML = tasks.map((x, i) => `<div class="check ${x.done ? "is-done" : ""}" data-task="${i}"><span class="box">${x.done ? "✓" : ""}</span><span class="lbl">${x.t}</span></div>`).join("");
  document.getElementById("taskCount").textContent = `${tasks.filter((x) => x.done).length}/${tasks.length} done`;
  document.querySelectorAll("#taskList .check").forEach((c) => c.addEventListener("click", () => { tasks[+c.dataset.task].done = !tasks[+c.dataset.task].done; renderTasks(); }));
}

/* ---------- Forms Hub ---------- */
const formDefs = [
  ["A", "New Investment Onboarding", "Capture a new investment at close.", ["Portfolio Ops", "Investment Team", "Head of Portfolio"]],
  ["B", "New Round / Capital Event", "Record a follow-on round or capital event.", ["Portfolio Ops", "Investment Team", "Head of Portfolio"]],
  ["C", "Quarterly Company Update", "Pre-meeting founder update, per company.", ["Portfolio Ops", "Investment Team", "Head of Portfolio"]],
  ["D", "Post-Meeting Valuation Review", "Confirm quarterly carrying values.", ["Head of Portfolio"]],
  ["E", "Fund Performance Snapshot", "Authoritative quarterly fund record.", ["CFO"]],
  ["F", "Climate & Impact KPIs", "Mandatory at Q4 — climate metrics.", ["Portfolio Ops", "Investment Team", "Head of Portfolio"]],
  ["G", "Correction Request", "Request a data correction (HoP approves).", ["Any role"]],
];
let formRole = "All roles";
function renderForms() {
  const roles = ["All roles", "Portfolio Ops", "Investment Team", "Head of Portfolio", "CFO"];
  document.getElementById("formsBody").innerHTML = `
    <div class="section-title">
      <select class="select" id="formRole" style="width:auto;min-width:180px;">${roles.map((r) => `<option ${r === formRole ? "selected" : ""}>${r}</option>`).join("")}</select>
      <button class="btn btn-primary" type="button">+ New submission</button>
    </div>
    <div class="grid grid-3" id="formGrid"></div>`;
  renderFormGrid();
  document.getElementById("formRole").addEventListener("change", (e) => { formRole = e.target.value; renderFormGrid(); });
}
function renderFormGrid() {
  const can = (f) => formRole === "All roles" || f[3].includes(formRole) || f[3].includes("Any role");
  document.getElementById("formGrid").innerHTML = formDefs.map((f) => `
    <section class="panel" style="opacity:${can(f) ? 1 : 0.5};">
      <div class="panel-body">
        <div style="display:flex;justify-content:space-between;align-items:center;"><span class="chip">Form ${f[0]}</span>${can(f) ? `<button class="btn btn-muted" type="button">Open</button>` : `<span class="meta">No access</span>`}</div>
        <h3 style="margin-top:12px;font-size:15px;">${f[1]}</h3>
        <p class="meta" style="margin-top:6px;line-height:1.5;">${f[2]}</p>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:12px;">${f[3].map((r) => `<span class="chip">${r}</span>`).join("")}</div>
      </div>
    </section>`).join("");
}

/* ---------- Documents ---------- */
const docTypes = ["Management Accounts", "Board Deck", "Cap Table", "SAFE Agreement", "Pitch Deck"];
const docs = companies.slice(0, 8).map((c, i) => ({ name: `${c.name} — ${docTypes[i % docTypes.length]}`, company: c.name, type: docTypes[i % docTypes.length], date: ["12 May 2026", "08 May 2026", "30 Apr 2026", "22 Apr 2026"][i % 4], shared: i % 2 === 0, views: [12, 4, 23, 7, 31, 2, 15, 9][i] }));
let docState = { q: "", type: "All types" };
function renderDocuments() {
  document.getElementById("documentsBody").innerHTML = `
    <div class="grid grid-4" style="margin-bottom:16px;">
      ${[[String(docs.length), "Documents", "this quarter"], [String(docs.filter((d) => d.shared).length), "Shared links", "active"], [String(docs.reduce((s, d) => s + d.views, 0)), "Total views", "tracked"], ["10", "Companies", "covered"]].map((k) => `<section class="panel kpi"><div class="kpi-label"><span>${k[1]}</span><span class="chip">${k[2]}</span></div><div><div class="kpi-value num">${k[0]}</div></div></section>`).join("")}
    </div>
    <section class="panel"><div class="panel-head" style="flex-wrap:wrap;gap:12px;"><div><h2>Document Library</h2><p class="meta">Secure sharing links with page-level view tracking</p></div>
      <div class="toolbar"><input class="input" id="docSearch" type="search" placeholder="Search…" /><select class="select" id="docType"></select></div></div>
      <div class="panel-body table-scroll"><table class="tbl" id="docTable"></table></div>
    </section>`;
  const sel = document.getElementById("docType");
  sel.innerHTML = ["All types", ...docTypes].map((t) => `<option>${t}</option>`).join("");
  document.getElementById("docSearch").addEventListener("input", (e) => { docState.q = e.target.value; renderDocTable(); });
  sel.addEventListener("change", (e) => { docState.type = e.target.value; renderDocTable(); });
  renderDocTable();
}
function renderDocTable() {
  const list = docs.filter((d) => (!docState.q || d.name.toLowerCase().includes(docState.q.toLowerCase())) && (docState.type === "All types" || d.type === docState.type));
  document.getElementById("docTable").innerHTML = `
    <thead><tr><th>Document</th><th>Company</th><th>Type</th><th>Date</th><th class="num">Views</th><th>Link</th></tr></thead>
    <tbody>${list.map((d, i) => `<tr><td><strong>${d.name}</strong></td><td>${d.company}</td><td>${d.type}</td><td class="meta">${d.date}</td><td class="num">${d.views}</td><td>${d.shared ? `<button class="btn btn-muted copy" type="button">Copy link</button>` : `<span class="chip">Private</span>`}</td></tr>`).join("")}</tbody>`;
  document.querySelectorAll("#docTable .copy").forEach((b) => b.addEventListener("click", (e) => { e.currentTarget.textContent = "Copied ✓"; setTimeout(() => { e.currentTarget.textContent = "Copy link"; }, 1400); }));
}

/* ---------- Intelligence ---------- */
const signals = [
  { co: "Alterno", type: "RUNWAY_CRITICAL", sev: "critical", why: "Reported runway 4.5 months — below the 6-month threshold. Claimed inflows not yet reflected in cash.", resolved: false },
  { co: "3Cat", type: "RUNWAY_CRITICAL", sev: "critical", why: "Runway 5 months; dependent on Series A closing 15 Jun 2026.", resolved: false },
  { co: "Okapi", type: "TARGET_MISS", sev: "warning", why: "ARR at 20% of plan ($524K vs $1.8M). Lead investor stalled.", resolved: false },
  { co: "Alicia Bots", type: "BURN_ACCELERATION", sev: "warning", why: "Cash fell from $1.1M (Jan) to $710K; monthly burn $103K with revenue-recognition lag.", resolved: false },
  { co: "Sirsak", type: "REVENUE_STAGNATION", sev: "warning", why: "Quarterly revenue -53% QoQ; revenue remains largely project-based.", resolved: false },
  { co: "Arkadiah", type: "REVENUE_STAGNATION", sev: "warning", why: "Revenue -81% QoQ; Q1 collections near-zero against a >$1M pipeline (timing).", resolved: false },
  { co: "Sirsak", type: "FUNDRAISE_NEEDED", sev: "info", why: "Runway 9 months with a Seed bridge in preparation.", resolved: false },
];
let sevFilter = "all";
function renderIntelligence() {
  const counts = { critical: signals.filter((s) => s.sev === "critical").length, warning: signals.filter((s) => s.sev === "warning").length, info: signals.filter((s) => s.sev === "info").length };
  document.getElementById("intelligenceBody").innerHTML = `
    <div class="grid grid-4" style="margin-bottom:16px;">
      ${[[String(signals.length), "Active signals", "all"], [String(counts.critical), "Critical", "critical"], [String(counts.warning), "Warning", "warning"], [String(signals.filter((s) => s.resolved).length), "Resolved", "all"]].map((k) => `<section class="panel kpi"><div class="kpi-label"><span>${k[1]}</span>${k[2] === "critical" ? status("red", "RAG") : k[2] === "warning" ? status("amber", "RAG") : `<span class="chip">Q1'26</span>`}</div><div><div class="kpi-value num">${k[0]}</div></div></section>`).join("")}
    </div>
    <div class="section-title">
      <div class="seg" id="sevSeg">${[["all", "All"], ["critical", "Critical"], ["warning", "Warning"], ["info", "Info"]].map((s) => `<button class="${s[0] === sevFilter ? "is-active" : ""}" data-sev="${s[0]}" type="button">${s[1]}</button>`).join("")}</div>
    </div>
    <section class="panel"><div class="panel-head"><h2>Risk Signals</h2><span class="meta">AI-explained · 7 signal types · daily cron</span></div>
      <div class="panel-body"><div class="alert-list" id="sigList"></div></div>
    </section>`;
  renderSignals();
  document.querySelectorAll("#sevSeg button").forEach((b) => b.addEventListener("click", () => { sevFilter = b.dataset.sev; document.querySelectorAll("#sevSeg button").forEach((x) => x.classList.toggle("is-active", x === b)); renderSignals(); }));
}
function renderSignals() {
  const tone = (s) => (s === "critical" ? "red" : s === "warning" ? "amber" : "blue");
  const list = signals.filter((s) => sevFilter === "all" || s.sev === sevFilter);
  document.getElementById("sigList").innerHTML = list.map((s) => { const i = signals.indexOf(s); return `
    <div class="alert-row" style="${s.resolved ? "opacity:0.55;" : ""}">
      <span class="alert-icon status-${tone(s.sev)}">${s.co.slice(0, 2).toUpperCase()}</span>
      <div><h3>${s.co} · <span class="meta" style="font-weight:700;">${s.type}</span></h3><p class="meta">${s.why}</p></div>
      <div style="display:flex;gap:8px;align-items:center;">${status(tone(s.sev), s.sev)}<button class="btn btn-muted res" data-sig="${i}" type="button">${s.resolved ? "Reopen" : "Resolve"}</button></div>
    </div>`; }).join("") || `<div class="meta" style="padding:20px;text-align:center;">No signals at this severity.</div>`;
  document.querySelectorAll("#sigList .res").forEach((b) => b.addEventListener("click", () => { signals[+b.dataset.sig].resolved = !signals[+b.dataset.sig].resolved; renderIntelligence(); }));
}

/* ---------- Audit ---------- */
const auditStages = ["DRAFT", "SENT_TO_COMPANY", "RECEIVED", "SENT_TO_AUDITOR"];
const auditRows = companies.map((c, i) => ({ co: c.name, stage: [0, 1, 2, 3, 1, 2, 0, 1, 2, 0][i] }));
function renderAudit() {
  const done = auditRows.filter((r) => r.stage === 3).length;
  document.getElementById("auditBody").innerHTML = `
    <div class="grid grid-4" style="margin-bottom:16px;">
      ${[["FY2025", "Audit year", "Moore"], [`${done}/${auditRows.length}`, "Sent to auditor", "complete"], ["31 Mar", "Year-end", "quarter close"], ["45", "Days to deadline", "countdown"]].map((k) => `<section class="panel kpi"><div class="kpi-label"><span>${k[1]}</span><span class="chip">${k[2]}</span></div><div><div class="kpi-value num">${k[0]}</div></div></section>`).join("")}
    </div>
    <section class="panel"><div class="panel-head"><div><h2>Confirmation Letters</h2><p class="meta">Auto-generated from investment terms · addressed to Moore</p></div></div>
      <div class="panel-body table-scroll"><table class="tbl" id="auditTable"></table></div>
    </section>`;
  renderAuditTable();
}
function renderAuditTable() {
  const tone = (s) => (s === 3 ? "green" : s === 0 ? "blue" : "amber");
  document.getElementById("auditTable").innerHTML = `
    <thead><tr><th>Company</th><th>Letter status</th><th>Stage</th><th></th></tr></thead>
    <tbody>${auditRows.map((r, i) => `<tr><td><div class="company-cell"><span class="avatar">${initials(r.co)}</span><strong>${r.co}</strong></div></td><td>${status(tone(r.stage), auditStages[r.stage].replace(/_/g, " "))}</td><td class="meta">${r.stage + 1} of 4</td><td>${r.stage < 3 ? `<button class="btn btn-muted adv" data-row="${i}" type="button">Advance →</button>` : `<span class="chip">Complete</span>`}</td></tr>`).join("")}</tbody>`;
  document.querySelectorAll("#auditTable .adv").forEach((b) => b.addEventListener("click", () => { const r = auditRows[+b.dataset.row]; r.stage = Math.min(3, r.stage + 1); renderAudit(); }));
}

/* ---------- Deal Flow ---------- */
const funnelData = [["Total pipeline", 950], ["Pre-intro & intro", 162], ["Screening", 6], ["Due diligence", 2], ["Portfolio", 10]];
const kanban = {
  "Initial Review": [["Helios Grid", "Energy · SG"], ["Loop Materials", "Circular · MY"]],
  "Deep Dive": [["BlueCarbonX", "NbS · ID"]],
  "Term Sheet": [["Aleph Technologies", "Infra Intel · SG"], ["N&E Innovations", "Low-Carbon · SG"]],
  "Closed": [["Farmio", "Agri-Food · SG"]],
  "Passed": [["—", "2 this quarter"]],
};
function renderDealflow() {
  const max = funnelData[0][1];
  document.getElementById("dealflowBody").innerHTML = `
    <div class="grid grid-2">
      <section class="panel"><div class="panel-head"><h2>Pipeline Funnel</h2><span class="chip">Q1 2026</span></div>
        <div class="panel-body"><div class="funnel">${funnelData.map((f, i) => `<div class="funnel-row"><span class="meta">${f[0]}</span><div class="funnel-bar" style="width:${Math.max((f[1] / max) * 100, 8)}%;background:${i === funnelData.length - 1 ? "var(--green)" : "var(--orange)"};">${f[1]}</div><span class="num" style="font-weight:800;">${Math.round((f[1] / max) * 100)}%</span></div>`).join("")}</div></div>
      </section>
      <section class="panel"><div class="panel-head"><h2>Pipeline Mix</h2><span class="chip">by stage</span></div>
        <div class="panel-body"><div class="legend">${[["Pre-Seed", 40, "#f2691e"], ["Seed", 40, "#ff9a2e"], ["Pre-Series A", 11, "#ffc233"], ["Series A", 9, "#ded9d0"]].map((s) => `<div class="legend-row"><span class="dot" style="background:${s[2]}"></span><span>${s[0]}</span><strong>${s[1]}%</strong></div>`).join("")}</div>
        <h3 style="margin-top:18px;">Top sectors</h3><div class="legend" style="margin-top:10px;">${[["Food & Agriculture", 22], ["Waste Mgmt & Circularity", 18], ["Clean Mobility", 11], ["Energy Transition", 10]].map((s) => `<div class="legend-row"><span class="dot" style="background:var(--orange)"></span><span>${s[0]}</span><strong>${s[1]}%</strong></div>`).join("")}</div></div>
      </section>
    </div>
    <section class="panel" style="margin-top:16px;"><div class="panel-head"><div><h2>Prospect Pipeline</h2><p class="meta">Q2 2026 sidecar investments with QDB · IC approved, pending QDB</p></div></div>
      <div class="panel-body"><div class="kanban">${Object.entries(kanban).map(([col, cards]) => `<div class="kan-col"><h3>${col}<span class="chip">${cards.length}</span></h3>${cards.map((c) => `<div class="kan-card"><strong>${c[0]}</strong><div class="meta">${c[1]}</div></div>`).join("")}</div>`).join("")}</div></div>
    </section>`;
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
    document.getElementById("phBody").textContent = "This section is wired into the navigation and will be built next. Dashboard, Portfolio and Settings are live in this pass.";
    document.getElementById("phRoute").textContent = item.route;
    setMeta({ eyebrow: "Module", title: item.label, sub: "Wired into navigation · build pending." });
  } else {
    setMeta(pageMeta[item.view]);
  }
  if (renderers[item.view]) renderers[item.view]();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const renderers = {
  portfolio: renderPortfolioPage,
  exposure: renderExposure,
  performance: renderPerformance,
  reporting: renderReporting,
  forms: renderForms,
  documents: renderDocuments,
  intelligence: renderIntelligence,
  audit: renderAudit,
  dealflow: renderDealflow,
};

function setMeta(m) {
  if (!m) return;
  document.getElementById("pageEyebrow").textContent = m.eyebrow;
  document.getElementById("pageTitle").textContent = m.title;
  document.getElementById("pageSub").textContent = m.sub;
}

function bindCompanyClicks() {
  document.querySelectorAll("[data-company]").forEach((el) => {
    el.addEventListener("click", () => openCompany(el.dataset.company));
  });
}

/* ---------- Portfolio page ---------- */
const pfState = { q: "", sector: "All sectors", country: "All countries", sort: "ltm-desc" };

function renderPortfolioKpis() {
  const critical = companies.filter((c) => c.runwayMo <= 6).length;
  const items = [
    [String(fund.companies), "Portfolio companies", "Q1 2026"],
    [moneyM(fund.deployed), "Capital deployed", "cost basis"],
    [fund.moic.toFixed(2) + "x", "Gross portfolio MOIC", "GAV " + moneyM(fund.gav)],
    [String(critical), "Critical runway", "≤ 6 months"],
  ];
  document.getElementById("portfolioKpis").innerHTML = items.map((k) => `
    <section class="panel kpi">
      <div class="kpi-label"><span>${k[1]}</span><span class="chip">${k[2]}</span></div>
      <div><div class="kpi-value num">${k[0]}</div></div>
    </section>`).join("");
}

function filteredCompanies() {
  const q = pfState.q.toLowerCase();
  let list = companies.filter((c) => {
    const matchQ = !q || c.name.toLowerCase().includes(q) || c.sector.toLowerCase().includes(q) || c.country.toLowerCase().includes(q);
    const matchS = pfState.sector === "All sectors" || c.sector === pfState.sector;
    const matchC = pfState.country === "All countries" || c.country === pfState.country;
    return matchQ && matchS && matchC;
  });
  const [key, dir] = pfState.sort.split("-");
  const val = (c) => key === "name" ? c.name : key === "ltm" ? c.ltm : key === "moic" ? parseFloat(c.moic) : key === "runway" ? c.runwayMo : key === "invested" ? c.invested : c.health;
  list.sort((a, b) => { const va = val(a), vb = val(b); return typeof va === "string" ? (dir === "asc" ? va.localeCompare(vb) : vb.localeCompare(va)) : (dir === "asc" ? va - vb : vb - va); });
  return list;
}

function renderPortfolioTableFull() {
  const list = filteredCompanies();
  document.getElementById("pfTable").innerHTML = `
    <thead><tr><th>Company</th><th>Sector</th><th>Country</th><th class="num">Invested</th><th class="num">Own.</th><th class="num">LTM Rev</th><th class="num">MOIC</th><th>Runway</th><th>Health</th><th>Fundraise</th></tr></thead>
    <tbody>${list.map((c) => `
      <tr class="clickable" data-company="${c.name}">
        <td><div class="company-cell"><span class="avatar">${initials(c.name)}</span><strong>${c.name}</strong></div></td>
        <td>${c.sector}</td><td>${c.country}</td>
        <td class="num">${moneyK(c.invested)}</td>
        <td class="num">${c.ownership}</td>
        <td class="num">${c.ltm === 0 ? "Pre-rev" : fmtUSD(c.ltm)}</td>
        <td class="num">${c.moic}</td>
        <td>${status(c.runwayMo <= 6 ? "red" : c.runwayMo <= 9 ? "amber" : "green", c.runway)}</td>
        <td>${ring(c.health, healthColor(c.health), 40)}</td>
        <td class="meta">${c.fundraise}</td>
      </tr>`).join("")}${list.length === 0 ? `<tr><td colspan="10"><div class="meta" style="padding:24px;text-align:center;">No companies match your filters.</div></td></tr>` : ""}</tbody>`;
  bindCompanyClicks();
}

function renderPortfolioPage() {
  renderPortfolioKpis();
  const sectorSel = document.getElementById("pfSector");
  if (!sectorSel.dataset.ready) {
    sectorSel.innerHTML = ["All sectors", ...new Set(companies.map((c) => c.sector))].map((s) => `<option>${s}</option>`).join("");
    const countrySel = document.getElementById("pfCountry");
    countrySel.innerHTML = ["All countries", ...new Set(companies.map((c) => c.country))].map((s) => `<option>${s}</option>`).join("");
    document.getElementById("pfSort").innerHTML = [["ltm-desc", "LTM revenue ↓"], ["moic-desc", "MOIC ↓"], ["runway-asc", "Runway ↑"], ["invested-desc", "Invested ↓"], ["health-desc", "Health ↓"], ["name-asc", "Name A–Z"]].map((o) => `<option value="${o[0]}">${o[1]}</option>`).join("");
    document.getElementById("pfSearch").addEventListener("input", (e) => { pfState.q = e.target.value; renderPortfolioTableFull(); });
    sectorSel.addEventListener("change", (e) => { pfState.sector = e.target.value; renderPortfolioTableFull(); });
    countrySel.addEventListener("change", (e) => { pfState.country = e.target.value; renderPortfolioTableFull(); });
    document.getElementById("pfSort").addEventListener("change", (e) => { pfState.sort = e.target.value; renderPortfolioTableFull(); });
    sectorSel.dataset.ready = "1";
  }
  renderPortfolioTableFull();
}

/* ---------- Company overview ---------- */
function openCompany(name) {
  const c = companies.find((x) => x.name === name);
  if (!c) return;
  const d = details[name] || {};
  heroStop();
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("is-active"));
  document.getElementById("company").classList.add("is-active");
  document.querySelectorAll(".nav-item").forEach((b) => b.classList.toggle("is-active", b.dataset.nav === "portfolio"));
  setMeta({ eyebrow: "Portfolio · " + c.sector, title: c.name, sub: d.desc || c.note });
  const runwayTone = c.runwayMo <= 6 ? "red" : c.runwayMo <= 9 ? "amber" : "green";
  const metrics = d.metrics || [["—", "No metrics"]];
  document.getElementById("companyBody").innerHTML = `
    <button class="btn btn-ghost" type="button" data-nav="portfolio" style="margin-bottom:14px;">← Back to portfolio</button>
    <section class="panel"><div class="panel-body">
      <div class="co-header">
        <div class="co-id">
          <span class="avatar" style="width:54px;height:54px;border-radius:15px;font-size:17px;">${initials(c.name)}</span>
          <div>
            <h2>${c.name}</h2>
            <div class="co-chips">
              <span class="chip">${c.sector}</span><span class="chip">${c.country}</span>
              ${d.stage ? `<span class="chip">${d.stage}</span>` : ""}${d.security ? `<span class="chip">${d.security}</span>` : ""}
              ${status(runwayTone, c.runway + " runway")}
            </div>
          </div>
        </div>
        <div class="co-side">
          <div class="big num">${c.moic}</div><div class="meta">MOIC · ${c.ownership} owned</div>
          <div class="num" style="margin-top:10px;font-weight:800;font-size:16px;">${d.holding || moneyK(c.invested)}</div><div class="meta">Current holding value</div>
        </div>
      </div>
    </div></section>

    <div class="grid grid-2" style="margin-top:16px;">
      <section class="panel"><div class="panel-head"><h2>About</h2><span class="chip">${d.invested ? "Invested " + d.invested : "URAF"}</span></div>
        <div class="panel-body">
          <p class="meta" style="font-size:13px;line-height:1.65;">${d.desc || "—"}</p>
          ${d.model ? `<h3 style="margin-top:16px;">Business model</h3><p class="meta" style="font-size:13px;line-height:1.65;margin-top:6px;">${d.model}</p>` : ""}
          <div style="display:flex;gap:26px;flex-wrap:wrap;margin-top:18px;">
            <div><div class="num" style="font-weight:800;font-size:16px;">${moneyK(c.invested)}</div><div class="meta">Invested</div></div>
            <div><div class="num" style="font-weight:800;font-size:16px;">${c.ownership}</div><div class="meta">Ownership</div></div>
            <div><div style="font-weight:800;font-size:13.5px;">${c.fundraise}</div><div class="meta">Fundraise status</div></div>
          </div>
        </div>
      </section>
      <section class="panel"><div class="panel-head"><h2>Key Metrics</h2><span class="chip">Q1 2026</span></div>
        <div class="panel-body">
          <div class="metric-grid">${metrics.map((m) => `<div class="metric"><strong class="num">${m[0]}</strong><span>${m[1]}</span></div>`).join("")}</div>
          ${d.rag && d.rag.length ? `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px;">${d.rag.map((r) => status(r[0], r[1])).join("")}</div>` : ""}
        </div>
      </section>
    </div>

    ${(d.highlights || d.lowlights || d.goals) ? `<section class="panel" style="margin-top:16px;"><div class="panel-head"><h2>Notable Updates</h2><span class="chip">Q1 2026</span></div>
      <div class="panel-body"><div class="narr-grid">
        <div class="narr"><h3>Highlights</h3><ul>${(d.highlights || []).map((x) => `<li>${x}</li>`).join("") || "<li>—</li>"}</ul></div>
        <div class="narr"><h3>Low-lights</h3><ul>${(d.lowlights || []).map((x) => `<li>${x}</li>`).join("") || "<li>—</li>"}</ul></div>
        <div class="narr"><h3>Goals</h3><ul>${(d.goals || []).map((x) => `<li>${x}</li>`).join("") || "<li>—</li>"}</ul></div>
      </div></div></section>` : ""}`;
  document.querySelectorAll("#company [data-nav]").forEach((b) => b.addEventListener("click", () => go(b.dataset.nav)));
  window.scrollTo({ top: 0, behavior: "smooth" });
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
