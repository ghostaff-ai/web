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
- `/privacidad` and `/terminos` are not published until the founders decide who the data controller is:
  they build only under `pnpm dev` while `LEGAL_PUBLISHED` (`src/legal/index.ts`) is `false`.
- Deploys: a preview channel first, then live only with the founders' OK (README.md, «Deploy»).
- `pnpm dev` runs it locally (`astro dev --background` for agents; `astro dev stop` to end).
- `develop` is where work lands, through pull requests; merge your own once checks are green.
