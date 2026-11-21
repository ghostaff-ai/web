// @ts-check
import { defineConfig } from 'astro/config';

// Spanish at the root (ghostaff.ai/), English under /en/.
export default defineConfig({
  site: 'https://ghostaff.ai',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
