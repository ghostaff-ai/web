// The pages search engines should know about. The legal pages join once published.
import type { APIRoute } from 'astro';
import { LEGAL_PUBLISHED, legalPaths } from '../legal';

export const GET: APIRoute = ({ site }) => {
  const paths = ['/', '/en/', ...(LEGAL_PUBLISHED ? Object.values(legalPaths) : [])];
  const urls = paths.map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
