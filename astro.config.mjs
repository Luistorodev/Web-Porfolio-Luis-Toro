// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO(luis): reemplazar con el dominio de producción real.
// De aquí salen canonical, Open Graph, hreflang, robots.txt y sitemap con URLs absolutas.
const SITE_URL = process.env.SITE_URL ?? 'https://example.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
