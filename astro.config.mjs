// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO(luis): reemplazar con dominio personalizado si compras uno.
const SITE_URL = process.env.SITE_URL ?? 'https://web-porfolio-luis-toro.vercel.app';

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
