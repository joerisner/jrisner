import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    sitemap(),
    tailwind({ applyBaseStyles: false }), // Importing these already in src/styles/global.css
  ],
  markdown: {
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: false,
    },
  },
  server: { port: 4000 },
  site: 'https://jrisner.dev',
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[hash][extname]',
        },
      },
    },
  },
});
