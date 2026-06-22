/* ============================================================
   Yellow — Design System (shared source of truth)
   Used by both the in-app "Design System" view and the standalone
   shareable page (design-system.html). Self-contained helpers.
   ============================================================ */
(function () {
  const colors = [
    ["Orange", "#F2691E"], ["Amber", "#FF9A2E"], ["Yellow", "#FFC233"], ["Orange soft", "#FEF0E7"],
    ["Ink", "#1B1A18"], ["Muted", "#8A8884"], ["Surface", "#FFFFFF"], ["Canvas", "#F2EFE9"],
    ["RAG green", "#2FAA63"], ["RAG amber", "#E0901B"], ["RAG red", "#E0564C"], ["Info", "#3C6E9E"],
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
    return `<div class="chart" style="height:170px;">${data.map((d) => { const h = ((d[1] - min) / (max - min)) * 100; return `<div class="chart-col"><div class="chart-barwrap"><span class="chart-v num">${d[1].toFixed(2)}x</span><div class="chart-bar"><span class="chart-fill ${d[2]}" style="height:${Math.max(h, 6)}%"></span></div></div><div class="chart-x">${d[0]}</div></div>`; }).join("")}</div>`;
  }

  window.renderDesignSystemInto = function (elId) {
    const el = document.getElementById(elId);
    if (!el) return;
    el.innerHTML = `
      <section class="panel"><div class="panel-head"><div><h2>Palette</h2><p class="meta">Flat warm tones · gradients reserved for accents</p></div></div>
        <div class="panel-body"><div class="ds-swatches">${colors.map((c) => `<div class="ds-swatch"><div class="sw" style="background:${c[1]};"></div><strong>${c[0]}</strong><span class="meta num">${c[1]}</span></div>`).join("")}</div></div>
      </section>

      <section class="panel" style="margin-top:18px;"><div class="panel-head"><div><h2>Accent Gradients</h2><p class="meta">Used only on hero, primary buttons, capsule bars, and the allocation bar</p></div></div>
        <div class="panel-body"><div class="ds-grads">${gradients.map((g) => `<div><div class="ds-grad" style="background:${g[1]};"></div><strong style="font-size:13px;">${g[0]}</strong></div>`).join("")}</div></div>
      </section>

      <div class="grid grid-2" style="margin-top:18px;">
        <section class="panel"><div class="panel-head"><h2>Typography</h2><span class="chip">Manrope</span></div>
          <div class="panel-body">
            <div style="font-size:34px;font-weight:800;letter-spacing:-0.03em;">Display · 800</div>
            <div style="font-size:18px;font-weight:800;margin-top:12px;">Heading · 800</div>
            <div style="font-size:14px;font-weight:650;margin-top:12px;">Body · 650 — information-dense, table-first.</div>
            <div class="meta" style="margin-top:12px;">Meta · muted secondary text</div>
            <div class="num" style="margin-top:12px;font-weight:800;">Tabular numerics · 1,234,567 · 1.10x</div>
          </div>
        </section>
        <section class="panel"><div class="panel-head"><h2>Radii &amp; Elevation</h2></div>
          <div class="panel-body" style="display:flex;gap:14px;flex-wrap:wrap;align-items:center;">
            <div class="ds-box" style="border-radius:8px;" >8px</div>
            <div class="ds-box" style="border-radius:12px;">12px</div>
            <div class="ds-box" style="border-radius:20px;box-shadow:0 18px 44px -30px rgba(28,27,26,0.32);">card</div>
            <div class="ds-box" style="border-radius:999px;">pill</div>
          </div>
        </section>
      </div>

      <section class="panel" style="margin-top:18px;"><div class="panel-head"><h2>Buttons &amp; Controls</h2></div>
        <div class="panel-body" style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
          <button class="btn btn-primary" type="button">Primary</button>
          <button class="btn btn-muted" type="button">Muted</button>
          <button class="btn btn-ghost" type="button">Ghost</button>
          <input class="input" style="width:180px;" placeholder="Input field" />
          <select class="select" style="width:auto;"><option>Dropdown</option><option>Option two</option></select>
          <button class="toggle is-on" type="button" aria-label="Toggle"><span></span></button>
          <span class="chip">Chip</span>
        </div>
      </section>

      <section class="panel" style="margin-top:18px;"><div class="panel-head"><div><h2>Data Visualization</h2><p class="meta">Capsule bars, circular indicators, RAG signals</p></div></div>
        <div class="panel-body">
          <div class="grid grid-2">
            <div><div class="meta" style="margin-bottom:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.05em;font-size:11px;">Capsule bar chart</div>${dsBars()}</div>
            <div style="display:flex;gap:26px;align-items:center;flex-wrap:wrap;">
              <div style="text-align:center;"><div class="meta" style="margin-bottom:8px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.05em;">Rings</div><div style="display:flex;gap:12px;">${dsRing(94, "#2FAA63", 56)}${dsRing(72, "#FF9A2E", 56)}${dsRing(48, "#E0564C", 56)}</div></div>
              <div style="text-align:center;"><div class="meta" style="margin-bottom:8px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.05em;">Donut</div>
                <div class="donut" style="width:120px;background:conic-gradient(#F2691E 0 30%,#FF9A2E 30% 55%,#FFC233 55% 78%,#e9b27a 78% 92%,#ded9d0 92% 100%);"><div class="donut-center"><strong>10</strong><span>companies</span></div></div>
              </div>
            </div>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px;">${dsStatus("green", "Green")}${dsStatus("amber", "Amber")}${dsStatus("red", "Red")}${dsStatus("blue", "Info")}</div>
        </div>
      </section>`;
  };
})();
