// Central manifest for the 3D/raster renders from the Figma design.
//
// NOTE: This environment's network policy blocks figma.com, so the real PNG
// bytes could not be baked in. Each entry below ships an on-brand SVG
// placeholder at `local` so the site is complete and self-contained today.
// `figma` holds the original (temporary, ~7-day) export URL.
//
// To swap in the real renders, run `bash scripts/download-assets.sh` from an
// environment that can reach figma.com, OR export the nodes from Figma and
// drop PNGs into /public/assets using the filenames below.

export const assets = {
  logo: { local: "/assets/logo.svg", figma: "https://www.figma.com/api/mcp/asset/6192ae75-af61-4551-bb63-e89e721ec684" },
  hero: { local: "/assets/hero.svg", figma: "https://www.figma.com/api/mcp/asset/f192c3f4-a648-4ee6-b645-4faf5d818de1" },
  phase03: { local: "/assets/phase03.svg", figma: "https://www.figma.com/api/mcp/asset/44953bd8-f667-4a99-8306-c1a3da7bd87e" },
  signal01: { local: "/assets/signal01.svg", figma: "https://www.figma.com/api/mcp/asset/d7f8a2ab-4be9-4dba-b7af-123f38c03f9c" },
  signal02: { local: "/assets/signal02.svg", figma: "https://www.figma.com/api/mcp/asset/39dc3fe1-e925-48d3-951c-f96ae9f5048c" },
  signal03: { local: "/assets/signal03.svg", figma: "https://www.figma.com/api/mcp/asset/e7293afe-a743-4666-a2c9-152a7caf3bf7" },
  signal04: { local: "/assets/signal04.svg", figma: "https://www.figma.com/api/mcp/asset/32f5c05c-ae71-4fa5-b292-35deaba71413" },
} as const;
