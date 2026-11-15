// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const SITE_URL = process.env.SITE_URL ?? 'https://www.luistoro.me';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  fonts: [
    { provider: fontProviders.google(), name: 'Inter', cssVariable: '--font-inter', weights: ['400 700'], styles: ['normal', 'italic'], subsets: ['latin'], fallbacks: ['sans-serif'] },
    { provider: fontProviders.google(), name: 'Geist Mono', cssVariable: '--font-geist-mono', weights: [400], styles: ['normal'], subsets: ['latin'], fallbacks: ['monospace'] },
    { provider: fontProviders.google(), name: 'Instrument Serif', cssVariable: '--font-instrument-serif', weights: [400], styles: ['normal', 'italic'], subsets: ['latin'], fallbacks: ['serif'] },
  ],
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
