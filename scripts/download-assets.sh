#!/usr/bin/env bash
# Localize the real Figma 3D-render assets into /public/assets.
# Run from an environment that can reach figma.com. The export URLs are
# temporary (~7 days from the design session) — re-export from Figma if they 404.
set -euo pipefail
cd "$(dirname "$0")/../public/assets"

dl() {
  echo "→ $2"
  curl -fsSL -o "$2" "$1" || { echo "  FAILED (URL may have expired — re-export from Figma)"; return 0; }
}

dl "https://www.figma.com/api/mcp/asset/6192ae75-af61-4551-bb63-e89e721ec684" logo.png
dl "https://www.figma.com/api/mcp/asset/f192c3f4-a648-4ee6-b645-4faf5d818de1" hero.png
dl "https://www.figma.com/api/mcp/asset/44953bd8-f667-4a99-8306-c1a3da7bd87e" phase03.png
dl "https://www.figma.com/api/mcp/asset/d7f8a2ab-4be9-4dba-b7af-123f38c03f9c" signal01.png
dl "https://www.figma.com/api/mcp/asset/39dc3fe1-e925-48d3-951c-f96ae9f5048c" signal02.png
dl "https://www.figma.com/api/mcp/asset/e7293afe-a743-4666-a2c9-152a7caf3bf7" signal03.png
dl "https://www.figma.com/api/mcp/asset/32f5c05c-ae71-4fa5-b292-35deaba71413" signal04.png

echo
echo "Done. Now update src/assets.ts to point each entry's \`local\` to the .png"
echo "(e.g. hero: '/assets/hero.png') and the real renders will replace the placeholders."
