#!/bin/bash
# Post-build script for Cloudflare static export
# Copies default locale (en) pages to root paths so that
# "/" serves index.html instead of returning 404.
#
# Problem: next-intl static export generates /en.html, /zh-TW.html
# but no /index.html. Cloudflare needs index.html at the root.
#
# Solution: Copy en.html → index.html, and recursively handle
# nested routes under /en/ → root-level equivalents.

set -euo pipefail

OUT_DIR="out"
DEFAULT_LOCALE="en"

echo "📦 Post-build: creating root-level files for default locale ($DEFAULT_LOCALE)..."

# 1. Copy root page: en.html → index.html
if [ -f "$OUT_DIR/$DEFAULT_LOCALE.html" ]; then
  cp "$OUT_DIR/$DEFAULT_LOCALE.html" "$OUT_DIR/index.html"
  echo "  ✅ $OUT_DIR/index.html"
fi

# 2. Copy nested pages: en/<path>.html → <path>/index.html
if [ -d "$OUT_DIR/$DEFAULT_LOCALE" ]; then
  find "$OUT_DIR/$DEFAULT_LOCALE" -name "*.html" | while read -r src; do
    # Get relative path: e.g., "resume.html"
    rel="${src#$OUT_DIR/$DEFAULT_LOCALE/}"
    # Target: out/resume/index.html
    dir_name="${rel%.html}"
    target_dir="$OUT_DIR/$dir_name"
    mkdir -p "$target_dir"
    cp "$src" "$target_dir/index.html"
    echo "  ✅ $target_dir/index.html"
  done
fi

echo "✅ Post-build complete!"
