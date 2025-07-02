import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 4321,
  },
  resolve: {
    alias: {
      '@components': '/src/components',
    },
  },
});
