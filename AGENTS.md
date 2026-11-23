# AGENTS.md

Ghostaff's public website, ghostaff.ai: the landing page and the legal pages. The product is in
`ghostaff-ai/app`; the plan for this site is there too, `docs/plans/ideas/web.md`. Read it first.

- Astro, static. Spanish at `/`, English at `/en/`, from the start. Every visible word goes through
  `src/i18n/strings.ts`, in both languages. The one exception is the legal pages' body text, in
  `src/legal/<lang>/*.md` (Spanish first; English once the Spanish is final).
- Dark is the brand; a light theme follows the visitor's system. Colours are the tokens in
  `src/layouts/Base.astro`, never hard-coded; `.night` keeps a block dark in both (the film).
- Hosted on Firebase Hosting in `ghostaff-prod` (EU data rule: no form or analytics that stores visitors'
  data outside the EU; no Google Analytics).
- `/privacidad` and `/terminos`: the controller is Álvaro Francisco Gil as autónomo until the SL exists
  (founders, 2026-11-21). Not published until complete and reviewed: they build only under `pnpm dev`
  while `LEGAL_PUBLISHED` (`src/legal/index.ts`) is `false`.
- Deploys: a preview channel first, then live only with the founders' OK (README.md, «Deploy»).
- `pnpm dev` runs it locally (`astro dev --background` for agents; `astro dev stop` to end).
- `develop` is where work lands, through pull requests; merge your own once checks are green.

## UI and UX

<!-- base:ui -->
Minimal by default: every screen asks as little of the person's attention as it can. The
repo's own design system, tokens and brand kit win wherever they differ from this.

- **One main action per screen.** Everything else on it is visibly quieter.
- **Show what most people need; fold the rest.** Advanced options, long lists and rare
  settings sit behind a "more", a details row or a second screen. Never fold what people
  use on every visit.
- **Fewer choices, good defaults.** Preselect the likely option. Keep the visible choices to
  about five to seven; past that, group, search or fold.
- **Remove before adding.** A new element earns its place; merging or deleting an existing
  one comes first.
- **Reuse what the app already has**: its components, tokens, spacing and patterns, no
  one-off styles. A new screen works the way the others do.
- **Hierarchy from spacing and type size, not boxes, borders and colour.** One accent
  colour, two or three text sizes per screen.
- **Plain words.** Buttons are verbs ("Save", "Send invite"). No jargon or internal names.
  An empty screen says what to do next.
- **Every state is designed**: loading, empty, error and success. An error says what
  happened and how to fix it, next to where it happened.
- **Accessibility is the floor.** Readable contrast, a visible focus, labels on icon-only
  buttons, tap targets of at least 44 px, everything reachable by keyboard on the web, and
  motion that respects the reduced-motion setting.
- **Motion only explains a change** (where something came from or went), and stays short.
- **Review web UI against Vercel's Web Interface Guidelines** before calling it done: read
  `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md`
  and check the changed files against it. Native screens take the rules that apply.
- **A public landing page may be bolder.** There the `frontend-design` skill sets the look;
  the product's own screens stay minimal.
<!-- /base:ui -->
