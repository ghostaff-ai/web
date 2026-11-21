# AGENTS.md

Ghostaff's public website, ghostaff.ai: the landing page and the legal pages. The product is in
`ghostaff-ai/app`; the plan for this site is there too, `docs/plans/ideas/web.md`. Read it first.

- Astro, static. Spanish at `/`, English at `/en/`, from the start. Every visible word goes through
  `src/i18n/strings.ts`, in both languages.
- Hosted on Firebase Hosting in `ghostaff-prod` (EU data rule: no form or analytics that stores visitors'
  data outside the EU; no Google Analytics).
- `/privacidad` and `/terminos` are not published until the founders decide who the data controller is.
- `pnpm dev` runs it locally (`astro dev --background` for agents; `astro dev stop` to end).
- `develop` is where work lands, through pull requests; merge your own once checks are green.
