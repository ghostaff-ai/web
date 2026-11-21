// The legal pages are written and built into the site but not published until they are
// complete and reviewed (web plan, decision 6). The controller is Álvaro Francisco Gil
// as autónomo until the SL exists (founders, 2026-11-21); his NIF and address are still
// blank. Until then the pages exist only under `pnpm dev`; `pnpm build` leaves them out,
// and the footer hides their links. Publishing them is this one line.
export const LEGAL_PUBLISHED = false;

/** Whether the legal pages are part of this build (always in dev, for review). */
export const legalVisible = LEGAL_PUBLISHED || import.meta.env.DEV;

/** Spanish paths; English versions follow once the Spanish text is final. */
export const legalPaths = { privacy: '/privacidad', terms: '/terminos' } as const;
