# Vyapti — Post-Quantum Readiness Protocol (QSP)

Landing page built from the Figma design [_Website designs for Veoc-tech / Desktop‑3_](https://www.figma.com/design/exQvYjE9DcOFgRyJTktr7n/Website-designs-for-Veoc-tech?node-id=1225-1943).

Stack: **Vite + React + TypeScript + Tailwind CSS**, with **[Motion](https://motion.dev)** for animation.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Highlights

- **Motion loading screen** (`src/components/Loader.tsx`) — an octahedral lattice that
  draws itself in, a pulsing probe core, rippling broadcast rings, and a progress bar,
  then fades out to reveal the page. Respects `prefers-reduced-motion`.
- Scroll-reveal animations on every section (`src/components/Reveal.tsx`).
- Floating hero visualization and a pulsing QSP probe core.

## Auto-layout fixes carried over from the Figma file

Several elements in the design were absolutely positioned at the page root instead of
living inside their containers. They are correctly nested here:

| Element | In Figma | Here |
| --- | --- | --- |
| `Group 1` — the `((•))` probe icon | floating at page root (x686/y1115) | nested inside the **QSP PROBE** box |
| `2 1` — molecule render | floating at page root (x1039/y2922) | nested inside the **Signal 04 / Noise Characteristics** card |
| Signal 01–03 renders | absolute children overflowing their cards | clipped inside each card |
| Phase 01/02 glyphs & Phase 03 render | absolute, overflowing | clipped inside their cards |

## Assets

This repo was built in an environment whose network policy blocks `figma.com`, so the
binary 3D render PNGs could not be baked in. On-brand **SVG placeholders** ship in
`public/assets/` so the site is complete and self-contained today.

To swap in the real renders:

```bash
bash scripts/download-assets.sh      # from an environment that can reach figma.com
```

then point each `local` path in `src/assets.ts` at the downloaded `.png`.
(Export URLs are temporary ~7 days — re-export from Figma if they 404.) Alternatively,
export the nodes from Figma manually and drop PNGs into `public/assets/`.

## Fonts

`Inter` and `JetBrains Mono` are self-hosted via `@fontsource` (offline, durable).
The design also uses `Neue Montreal` and `Satoshi`, which are not OFL-licensed; close
fallbacks are configured in `tailwind.config.js`. Add the licensed font files and update
the `display` / `satoshi` stacks to match the design exactly.
