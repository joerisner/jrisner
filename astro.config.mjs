import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jrisner.dev',
  integrations: [
    sitemap(),
    tailwind({
      config: { applyBaseStyles: false }, // Importing these already in src/styles/global.css
    }),
  ],
  server: { port: 4000 },
});
