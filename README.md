# ghostaff.ai

The public website of Ghostaff. See [AGENTS.md](AGENTS.md).

## Setup

```bash
git clone git@github.com:ghostaff-ai/web.git ~/githubs/ghostaff-ai/web
cd ~/githubs/ghostaff-ai/web && pnpm install && pnpm dev
```

To make the film (docs/film.md), Claude Code needs Higgsfield's MCP server, signed in with the
Ghostaff Higgsfield account:

```bash
claude mcp add --transport http --scope user higgsfield https://mcp.higgsfield.ai/mcp
```

## Checks

`pnpm check` (types) and `pnpm build` run on every pull request (`.github/workflows/ci.yml`).

## Deploy (Firebase Hosting, `ghostaff-prod`)

ghostaff.ai serves two things from one Hosting site: this site at `/` and the app at `/app`, the web
build of [ghostaff-ai/app](https://github.com/ghostaff-ai/app) (its `docs/plans/ongoing/desktop-web.md`,
step 3). A deploy replaces the whole site, so both are always built and deployed together, from here.
`/app/**` falls back to the app's `index.html` (`firebase.json`); someone already signed in who opens
`/` or `/en/` goes straight to `/app`. The app talks to beta until production is up.

The Firebase CLI must be signed in as ghostaff.ai@gmail.com (`firebase login:add`, then
`firebase login:use ghostaff.ai@gmail.com`). The app's checkout sits beside this one (`../app`, or
`APP_DIR`), on `develop` and pulled, with its `apps/mobile/.env`.

```bash
pnpm build:all && firebase hosting:channel:deploy preview --expires 30d
```

prints a preview URL to look at first. Going live (ask both founders first):

```bash
pnpm build:all && firebase deploy --only hosting
```

`pnpm build` alone builds only this site, without `/app`; `firebase.json`'s predeploy refuses to deploy that. To look at both locally,
`pnpm build:all && firebase emulators:start --only hosting --project demo-ghostaff` (port 5055).

## Legal pages

`/privacidad` and `/terminos` (`src/legal/es/*.md`) show under `pnpm dev` with a «Borrador» banner and
are left out of `pnpm build` until `LEGAL_PUBLISHED` in `src/legal/index.ts` is `true`.
