import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jrisner.dev',
  integrations: [sitemap()],
  server: { port: 4000 },
});
