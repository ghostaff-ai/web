#!/usr/bin/env bash
# Builds what ghostaff.ai serves: this site at / and, at /app, the app's web build from
# ghostaff-ai/app (its docs/plans/ongoing/desktop-web.md, step 3). One Firebase Hosting site
# holds both, so they are deployed together, from here.
#
#   bash scripts/build-with-app.sh [path to the app's checkout]   # default ../app, or $APP_DIR
#
# The app is built from its checkout as it is (keep it on develop, pulled), against beta:
# its apps/mobile/.env must hold SUPABASE_ANON_KEY_BETA. It prints the commit it built.
set -euo pipefail
cd "$(dirname "$0")/.."
WEB=$PWD
APP=$(cd "${1:-${APP_DIR:-../app}}" && pwd)

if [ ! -f "$APP/apps/mobile/app.config.ts" ]; then
  echo "no app checkout at $APP (pass its path, or set APP_DIR)" >&2
  exit 2
fi
if ! grep -qs '^SUPABASE_ANON_KEY_BETA=..*' "$APP/apps/mobile/.env"; then
  echo "$APP/apps/mobile/.env has no SUPABASE_ANON_KEY_BETA: the app would build without its database" >&2
  exit 2
fi

echo "== The site"
pnpm build

echo "== The app, ghostaff-ai/app at $(git -C "$APP" rev-parse --short HEAD) ($(git -C "$APP" rev-parse --abbrev-ref HEAD))"
if [ -n "$(git -C "$APP" status --porcelain --untracked-files=no)" ]; then
  echo "   (with uncommitted changes)"
fi
rm -rf "$WEB/dist/app"
APP_ENV=beta OUT="$WEB/dist/app" pnpm --dir "$APP" --filter ghostaff-mobile export:web:hosted

test -f "$WEB/dist/app/index.html"
# A build that still points at a laptop's local Supabase must never reach ghostaff.ai.
if grep -rqs -e "127.0.0.1:54321" -e "localhost:54321" "$WEB/dist/app/_expo"; then
  echo "dist/app talks to a local Supabase, not beta: not deployable" >&2
  exit 1
fi
echo "== dist/ holds the site and dist/app/ the app"
