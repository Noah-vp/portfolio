import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Fully static: the build output in dist/ is served as plain files (nginx), no Node server.
export default defineConfig({
  site: 'https://noahvp.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
