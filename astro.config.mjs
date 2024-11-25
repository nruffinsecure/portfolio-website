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
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
    optimizeDeps: {
      exclude: ['@astrojs/cloudflare'],
    },
    ssr: {
      noExternal: ['@astrojs/cloudflare'],
    },
  },
});
