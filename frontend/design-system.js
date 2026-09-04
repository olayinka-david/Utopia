/* ============================================================
   Yellow — Design System (shared source of truth)
   Renders into both the standalone design-system.html (sidebar shell)
   and the in-app "Design System" view. Reflects the live app: Manrope,
   warm orange/amber/yellow, accent gradients, capsule bars, soft elevation.
   ============================================================ */
(function () {
  const colors = [
    ["Orange", "#F2691E", "Primary action"], ["Amber", "#FF9A2E", "Accent / gradient"], ["Yellow", "#FFC233", "Highlight"], ["Orange soft", "#FEF0E7", "Active tint"],
    ["Ink", "#1B1A18", "Primary text"], ["Muted", "#8A8884", "Secondary text"], ["Surface", "#FFFFFF", "Panels"], ["Canvas", "#F2EFE9", "App background"],
    ["RAG green", "#2FAA63", "Healthy"], ["RAG amber", "#E0901B", "Caution"], ["RAG red", "#E0564C", "Critical"], ["Info", "#3C6E9E", "Informational"],
  ];
  const gradients = [
    ["Hero banner", "linear-gradient(110deg,#ee5d11,#f5741f 38%,#ff9a2e 76%,#ffb348)"],
    ["Primary button", "linear-gradient(150deg,#F2691E,#FF8A2B)"],
    ["Capsule bar fill", "linear-gradient(180deg,#F2691E,#FF9A2E)"],
    ["Allocation bar", "linear-gradient(90deg,#F2691E,#FF9A2E)"],
  ];
  const dsStatus = (t, x) => `<span class="status status-${t}">${x}</span>`;
  function dsRing(v, color, size) {
    const r = (size - 8) / 2, c = 2 * Math.PI * r, off = c * (1 - v / 100);
    return `<div class="ring" style="--size:${size}px"><svg viewBox="0 0 ${size} ${size}" style="transform:rotate(-90deg)"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="rgba(28,27,26,0.08)" stroke-width="6"></circle><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${color}" stroke-width="6" stroke-linecap="round" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}"></circle></svg><strong>${v}</strong></div>`;
  }
  function dsBars() {
    const data = [["Q2'24", 1.00, ""], ["Q4'24", 1.02, ""], ["Q1'25", 1.04, ""], ["Q2'25", 1.06, "warm"], ["Q3'25", 1.08, "warm"], ["Q1'26", 1.10, "hot"]];
    const min = 0.98, max = 1.12;
    return `<div class="chart" style="height:180px;">${data.map((d) => { const h = ((d[1] - min) / (max - min)) * 100; return `<div class="chart-col"><div class="chart-barwrap"><span class="chart-v num">${d[1].toFixed(2)}x</span><div class="chart-bar"><span class="chart-fill ${d[2]}" style="height:${Math.max(h, 6)}%"></span></div></div><div class="chart-x">${d[0]}</div></div>`; }).join("")}</div>`;
  }
  const ragRow = (init, name, sub, h, hc, runway, rt, moic) =>
    `<tr><td><div class="company-cell"><span class="avatar">${init}</span><div><strong>${name}</strong><div class="meta">${sub}</div></div></div></td><td>${dsRing(h, hc, 48)}</td><td>${dsStatus(rt, runway)}</td><td class="num">${moic}</td></tr>`;

  window.renderDesignSystemInto = function (elId) {
    const el = document.getElementById(elId);
    if (!el) return;
    el.innerHTML = `
      <section id="tokens" class="panel">
        <div class="panel-head"><div><h2>Primitive tokens</h2><p class="meta">Manrope · warm orange/amber/yellow · soft elevation, flat surfaces</p></div><span class="chip">No floating UI</span></div>
        <div class="panel-body">
          <div class="token-grid">${colors.map((c) => `<div class="token"><div class="swatch" style="background:${c[1]};"></div><h3>${c[0]}</h3><p class="meta num">${c[1]} · ${c[2]}</p></div>`).join("")}</div>
          <h3 style="margin:22px 0 12px;">Accent gradients <span class="meta" style="font-weight:600;">— hero, primary button, capsule bars, allocation</span></h3>
          <div class="ds-grads">${gradients.map((g) => `<div><div class="ds-grad" style="background:${g[1]};"></div><strong style="font-size:13px;">${g[0]}</strong></div>`).join("")}</div>
          <div class="grid grid-2" style="margin-top:22px;">
            <div><h3 style="margin-bottom:12px;">Typography — Manrope</h3>
              <div style="font-size:32px;font-weight:800;letter-spacing:-0.03em;">Display · 800</div>
              <div style="font-size:18px;font-weight:800;margin-top:10px;">Heading · 800</div>
              <div style="font-size:14px;font-weight:650;margin-top:10px;">Body · 650 — information-dense, table-first.</div>
              <div class="num" style="margin-top:10px;font-weight:800;">Tabular numerics · 1,234,567 · 1.10x</div>
            </div>
            <div><h3 style="margin-bottom:12px;">Radii &amp; elevation</h3>
              <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
                <div class="ds-box" style="border-radius:8px;">8px</div>
                <div class="ds-box" style="border-radius:12px;">12px</div>
                <div class="ds-box" style="border-radius:20px;box-shadow:0 18px 44px -30px rgba(28,27,26,0.32);">card</div>
                <div class="ds-box" style="border-radius:999px;">pill</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="buttons" class="panel" style="margin-top:16px;">
        <div class="panel-head"><div><h2>Buttons &amp; controls</h2><p class="meta">Primary uses the accent gradient + soft glow; others stay flat.</p></div></div>
        <div class="panel-body" style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
          <button class="btn btn-primary" type="button">Generate packet</button>
          <button class="btn btn-muted" type="button">Export table</button>
          <button class="btn" type="button">Open review</button>
          <button class="btn btn-ghost" type="button">Cancel</button>
          <input class="input" style="width:180px;" placeholder="Input field" />
          <select class="select" style="width:auto;"><option>Dropdown</option><option>Option two</option></select>
          <button class="toggle is-on" type="button" aria-label="Toggle"><span></span></button>
          <span class="chip">Chip</span>
        </div>
      </section>

      <section id="metrics" class="grid grid-4" style="margin-top:16px;">
        <section class="panel kpi kpi-accent"><div class="kpi-label"><span>Capital deployed</span><span class="chip">Q1'26</span></div><div><div class="kpi-value num">$1.88M</div><div class="kpi-foot">across 10 companies</div></div></section>
        <section class="panel kpi"><div class="kpi-label"><span>Gross MOIC</span>${dsStatus("green", "Good")}</div><div><div class="kpi-value num">1.10x</div><div class="kpi-foot">GAV $2.07M</div></div></section>
        <section class="panel kpi"><div class="kpi-label"><span>Critical runway</span>${dsStatus("red", "Watch")}</div><div><div class="kpi-value num">2</div><div class="kpi-foot">≤ 6 months</div></div></section>
        <section class="panel kpi"><div class="kpi-label"><span>Active fundraises</span>${dsStatus("amber", "Active")}</div><div><div class="kpi-value num">6</div><div class="kpi-foot">rounds underway</div></div></section>
      </section>

      <section id="visuals" class="grid grid-2" style="margin-top:16px;">
        <section class="panel"><div class="panel-head"><div><h2>RAG matrix</h2><p class="meta">Health ring, status chips, tabular MOIC.</p></div></div>
          <div class="panel-body table-scroll"><table class="tbl">
            <thead><tr><th>Company</th><th>Health</th><th>Runway</th><th class="num">MOIC</th></tr></thead>
            <tbody>
              ${ragRow("AR", "Arkadiah", "NbS / Carbon · SG", 94, "#2FAA63", "21 mo", "green", "1.49x")}
              ${ragRow("OK", "Okapi", "Energy · MY", 88, "#2FAA63", "20 mo", "green", "1.14x")}
              ${ragRow("AL", "Alternō", "Energy · VN", 48, "#E0564C", "4.5 mo", "red", "1.02x")}
            </tbody>
          </table></div>
        </section>
        <section class="panel"><div class="panel-head"><div><h2>Donut &amp; legend</h2><p class="meta">Sector exposure by capital.</p></div></div>
          <div class="panel-body donut-wrap">
            <div class="donut" style="background:conic-gradient(#F2691E 0 24%,#FF7A1A 24% 47%,#FF9A2E 47% 60%,#ffb338 60% 73%,#FFC233 73% 86%,#e9b27a 86% 97%,#ded9d0 97% 100%);"><div class="donut-center"><strong>$1.88M</strong><span>deployed</span></div></div>
            <div class="legend">
              <div class="legend-row"><span class="dot" style="background:#F2691E"></span><span>Agri-Food</span><strong>24%</strong></div>
              <div class="legend-row"><span class="dot" style="background:#FF7A1A"></span><span>Energy</span><strong>23%</strong></div>
              <div class="legend-row"><span class="dot" style="background:#FF9A2E"></span><span>Clean Mobility</span><strong>13%</strong></div>
              <div class="legend-row"><span class="dot" style="background:#FFC233"></span><span>NbS / Carbon</span><strong>13%</strong></div>
              <div class="legend-row"><span class="dot" style="background:#e9b27a"></span><span>Circular</span><strong>11%</strong></div>
              <div class="legend-row"><span class="dot" style="background:#ded9d0"></span><span>Water</span><strong>3%</strong></div>
            </div>
          </div>
        </section>
        <section class="panel" style="grid-column:1 / -1;"><div class="panel-head"><div><h2>Capsule bar chart</h2><p class="meta">Pill bars on a track with gradient fills — MOIC development.</p></div>${dsStatus("green", "1.00x → 1.10x")}</div>
          <div class="panel-body">${dsBars()}
            <div style="margin-top:20px;"><div class="meta" style="font-weight:800;text-transform:uppercase;letter-spacing:0.05em;font-size:11px;margin-bottom:10px;">Allocation bar</div>
              <div class="alloc-bar"><div class="alloc-seg deployed" style="width:38%"></div><div class="alloc-seg reserved" style="width:22%"></div></div>
            </div>
            <div style="display:flex;gap:26px;align-items:center;flex-wrap:wrap;margin-top:22px;">
              <div style="display:flex;gap:12px;">${dsRing(94, "#2FAA63", 56)}${dsRing(72, "#FF9A2E", 56)}${dsRing(48, "#E0564C", 56)}</div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;">${dsStatus("green", "Green")}${dsStatus("amber", "Amber")}${dsStatus("red", "Red")}${dsStatus("blue", "Info")}</div>
            </div>
          </div>
        </section>
      </section>

      <section id="settings" class="panel" style="margin-top:16px;">
        <div class="panel-head"><div><h2>Settings pattern</h2><p class="meta">Durable configuration rows with concise help text and grounded controls.</p></div></div>
        <div class="panel-body field-grid">
          <div class="field-row"><div><div class="label">Primary font</div><p class="meta">The app and design system share one typeface.</p></div><input class="input" value="Manrope" /></div>
          <div class="field-row"><div><div class="label">Accent gradients</div><p class="meta">Enabled for hero, primary buttons, capsule bars, allocation.</p></div><button class="toggle is-on" type="button" aria-label="Toggle"><span></span></button></div>
          <div class="field-row"><div><div class="label">Floating surfaces</div><p class="meta">Soft elevation + hairlines, no glassy float.</p></div><button class="toggle" type="button" aria-label="Toggle"><span></span></button></div>
          <div class="field-row"><div><div class="label">Card radius</div><p class="meta">Soft, grounded finance surfaces.</p></div><input class="input" value="20px" /></div>
        </div>
      </section>`;
  };
})();
