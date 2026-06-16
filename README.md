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

All seven 3D/raster renders are the real PNGs, stored in `public/assets/` and wired
through `src/assets.ts`. `scripts/download-assets.sh` can re-fetch the originals from
Figma where `figma.com` is reachable (export URLs are temporary ~7 days).

## Fonts

All fonts are self-hosted via `@fontsource` under the **SIL Open Font License** (free for
commercial use), so there are no licensing constraints and nothing loads from a third-party
CDN at runtime:

| Role | Font | Stands in for |
| --- | --- | --- |
| Body / UI | Inter | — |
| Mono / labels | JetBrains Mono | — |
| Display / headings | Hanken Grotesk | Neue Montreal (commercial) |
| Hero / body accent | Manrope | Satoshi (commercial) |

If you license `Neue Montreal` / `Satoshi`, add the font files and put their names first in
the `display` / `satoshi` stacks in `tailwind.config.js`.

## Deploy on Vercel

This is a static Vite SPA — zero-config on Vercel.

1. Push the branch and merge PR #1 into `main` (or deploy the branch directly).
2. In Vercel: **New Project → import `olayinka-david/Utopia`**. Vercel auto-detects the
   **Vite** preset; `vercel.json` pins the build for determinism:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
3. Deploy. No environment variables are required.

CLI alternative: `npm i -g vercel && vercel` (then `vercel --prod`).
