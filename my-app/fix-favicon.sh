#!/usr/bin/env bash
# Safe fixer for Next.js app-router favicons/head issues
# - Detects src/app or app directory
# - Backs up head.tsx and layout.tsx
# - Writes a server-only head.tsx with canonical favicon/manifest links
# - Removes head-like tags from layout.tsx (so head.tsx is authoritative)
# - Clears .next cache to force fresh server HTML
# Usage:
#   chmod +x fix-favicon.sh
#   ./fix-favicon.sh

set -euo pipefail

# detect app dir (src/app preferred)
if [ -d "src/app" ]; then
  APP_DIR="src/app"
elif [ -d "app" ]; then
  APP_DIR="app"
else
  echo "ERROR: no src/app or app directory found. Run from repo root." >&2
  exit 1
fi

echo "Using app directory: $APP_DIR"

TIMESTAMP=$(date +%Y%m%d%H%M%S)
BKDIR="favicon_fix_backup_$TIMESTAMP"
mkdir -p "$BKDIR"

# backup existing files if present
for f in head.tsx layout.tsx; do
  if [ -f "$APP_DIR/$f" ]; then
    cp "$APP_DIR/$f" "$BKDIR/$f"
    echo "Backed up $APP_DIR/$f -> $BKDIR/$f"
  fi
done

# Write server-side head.tsx (server component only — NO "use client")
cat > "$APP_DIR/head.tsx" <<'TSX'
export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Codewithsage — Build your dream website</title>

      {/* Favicons / fallbacks */}
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Apple / PWA */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="codewithsage" />

      {/* Web app manifest */}
      <link rel="manifest" href="/site.webmanifest" />

      {/* Safari pinned tab (mask) */}
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6366f1" />

      {/* Theme color */}
      <meta name="theme-color" content="#ffffff" />
    </>
  );
}
TSX

echo "Wrote $APP_DIR/head.tsx"

# If layout.tsx exists, strip head-like tags and ensure "use client" remains a top-level directive
if [ -f "$APP_DIR/layout.tsx" ]; then
  echo "Processing $APP_DIR/layout.tsx: stripping head-like tags (icons/manifest/meta) so head.tsx is authoritative."

  TMPFILE="$APP_DIR/layout.tsx.tmp"
  # remove lines that include link rel="icon", rel="manifest", rel="apple-touch-icon", rel="mask-icon"
  # and common meta tags we want only in head.tsx.
  sed -E '/rel="(shortcut icon|icon|apple-touch-icon|manifest|mask-icon)"/Id; /apple-mobile-web-app-title/Id; /meta name="theme-color"/Id' "$APP_DIR/layout.tsx" > "$TMPFILE"

  # ensure "use client"; is present at top for client layout — if not, prepend it
  FIRSTLINE=$(head -n 1 "$TMPFILE" || true)
  if [ "$FIRSTLINE" != '"use client";' ]; then
    echo 'Prepending "use client"; to layout (so layout stays a client component)'
    echo '"use client";' > "$APP_DIR/layout.tsx.new"
    cat "$TMPFILE" >> "$APP_DIR/layout.tsx.new"
    mv "$APP_DIR/layout.tsx.new" "$APP_DIR/layout.tsx"
  else
    mv "$TMPFILE" "$APP_DIR/layout.tsx"
  fi

  echo "Updated $APP_DIR/layout.tsx (backup kept in $BKDIR/layout.tsx)"
else
  echo "No layout.tsx found at $APP_DIR/layout.tsx — skipping layout edits."
fi

# clear Next cache/build artifacts to force a fresh server render
echo "Clearing Next.js cache (.next) and Node cache (node_modules/.cache) ..."
rm -rf .next node_modules/.cache || true

echo ""
echo "DONE. Summary:"
echo "- Backups saved to $BKDIR/"
echo "- New server head written to $APP_DIR/head.tsx"
echo "- If layout existed, head-like lines were stripped from $APP_DIR/layout.tsx"
echo "- Next cache cleared. Start the dev server now: npm run dev"
echo ""
echo "Verification commands (run after npm run dev finishes):"
echo "  curl -s http://localhost:3000/ | grep -iE 'rel=.*icon|rel=.*manifest|apple-touch-icon|mask-icon' || true"
echo "  curl -I http://localhost:3000/site.webmanifest"
echo "  curl -I http://localhost:3000/favicon.ico"
echo ""
echo "If you use a service worker while testing, unregister it in DevTools -> Application -> Service Workers and use an Incognito window to avoid cached HTML."