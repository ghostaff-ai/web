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

The Firebase CLI must be signed in as ghostaff.ai@gmail.com (`firebase login:add`, then
`firebase login:use ghostaff.ai@gmail.com`).

```bash
pnpm build && firebase hosting:channel:deploy preview --expires 30d
```

prints a preview URL to look at first. Going live (ask both founders first):

```bash
pnpm build && firebase deploy --only hosting
```

## Legal pages

`/privacidad` and `/terminos` (`src/legal/es/*.md`) show under `pnpm dev` with a «Borrador» banner and
are left out of `pnpm build` until `LEGAL_PUBLISHED` in `src/legal/index.ts` is `true`.
