// The legal pages are written and built into the site but not published until the
// founders decide who the data controller is (web plan, decision 6). Until then they
// exist only under `pnpm dev`; `pnpm build` leaves them out, and the footer hides
// their links. Publishing them is this one line, after the controller is filled in.
export const LEGAL_PUBLISHED = false;

/** Whether the legal pages are part of this build (always in dev, for review). */
export const legalVisible = LEGAL_PUBLISHED || import.meta.env.DEV;

/** Spanish paths; English versions follow once the Spanish text is final. */
export const legalPaths = { privacy: '/privacidad', terms: '/terminos' } as const;
