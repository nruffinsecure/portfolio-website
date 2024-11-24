import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    mode: 'directory'
  }),
  server: {
    port: 4321,
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
