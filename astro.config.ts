import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: false
    }
  },
  server: { port: 4000 },
  site: 'https://jrisner.dev',
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[hash][extname]'
        }
      }
    },
    plugins: [tailwindcss()]
  }
});
