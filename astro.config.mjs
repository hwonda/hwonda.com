// @ts-check
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.hwonda.com',
  redirects: {
    '/': '/fe',
    '/tpm': '/fe',
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/admin/') && !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
