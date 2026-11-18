// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const SITE_URL = process.env.SITE_URL ?? 'https://www.luistoro.me';

// Match the canonical URLs from Layout.astro: no trailing slash, except the site root.
/** @param {string} url */
const noTrailingSlash = (url) => (new URL(url).pathname === '/' ? url : url.replace(/\/+$/, ''));

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
      serialize(item) {
        item.url = noTrailingSlash(item.url);
        item.links?.forEach((link) => (link.url = noTrailingSlash(link.url)));
        return item;
      },
    }),
  ],
  security: {
    // Astro emits a <meta http-equiv="content-security-policy"> with hashes for every
    // bundled/inline script and style. Header-only directives (frame-ancestors) live in vercel.json.
    csp: {
      algorithm: 'SHA-256',
      directives: [
        "default-src 'self'",
        "connect-src 'self' https://*.clarity.ms https://c.bing.com",
        "img-src 'self' data: https://*.clarity.ms",
        "font-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ],
      scriptDirective: {
        resources: ["'self'", 'https://*.clarity.ms'],
      },
      styleDirective: {
        resources: ["'self'", "'unsafe-inline'"],
      },
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
