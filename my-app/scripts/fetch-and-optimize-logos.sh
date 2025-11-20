#!/usr/bin/env bash
# Fetch a set of high-quality SVG logos (Simple Icons) into public/logos
# and optionally run svgo to optimize them.
#
# Usage:
#  chmod +x scripts/fetch-and-optimize-logos.sh
#  ./scripts/fetch-and-optimize-logos.sh

set -e

mkdir -p public/logos

echo "Downloading SVG logos into public/logos..."
# Note: check simpleicons.org or the CDN for exact slugs if any fail
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg" -o public/logos/react.svg
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg" -o public/logos/nextjs.svg
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typescript.svg" -o public/logos/typescript.svg
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg" -o public/logos/tailwind.svg
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/node-dot-js.svg" -o public/logos/nodejs.svg
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg" -o public/logos/vercel.svg
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg" -o public/logos/aws.svg

echo "Downloaded files:"
ls -la public/logos

# Optional optimization with svgo (install globally: npm i -g svgo)
if command -v svgo >/dev/null 2>&1; then
  echo "Optimizing SVGs with svgo..."
  svgo public/logos/*.svg --multipass
  echo "Optimization complete."
else
  echo "svgo not found. To optimize files, install svgo (npm i -g svgo) and re-run this script."
fi

echo "Done. Place any additional custom logos into public/logos/ (SVG recommended)."
