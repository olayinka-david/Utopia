// Central manifest for the 3D/raster renders from the Figma design.
//
// All renders are the real PNGs (user-provided), stored in /public/assets.
// `figma` holds the original (temporary, ~7-day) export URL for reference;
// scripts/download-assets.sh can re-fetch them where figma.com is reachable.

export const assets = {
  // Real renders uploaded by the user:
  logo: { local: "/assets/logo.png", figma: "https://www.figma.com/api/mcp/asset/6192ae75-af61-4551-bb63-e89e721ec684" },
  hero: { local: "/assets/hero.png", figma: "https://www.figma.com/api/mcp/asset/f192c3f4-a648-4ee6-b645-4faf5d818de1" },
  signal01: { local: "/assets/signal01.png", figma: "https://www.figma.com/api/mcp/asset/d7f8a2ab-4be9-4dba-b7af-123f38c03f9c" },
  signal02: { local: "/assets/signal02.png", figma: "https://www.figma.com/api/mcp/asset/39dc3fe1-e925-48d3-951c-f96ae9f5048c" },
  signal04: { local: "/assets/signal04.png", figma: "https://www.figma.com/api/mcp/asset/32f5c05c-ae71-4fa5-b292-35deaba71413" },
  signal03: { local: "/assets/signal03.png", figma: "https://www.figma.com/api/mcp/asset/e7293afe-a743-4666-a2c9-152a7caf3bf7" },
  phase03: { local: "/assets/phase03.png", figma: "https://www.figma.com/api/mcp/asset/44953bd8-f667-4a99-8306-c1a3da7bd87e" },
} as const;
