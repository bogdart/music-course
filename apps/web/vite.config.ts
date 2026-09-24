import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@music/core': r('../../packages/core/src/index.ts'),
      '@music/content-schema/glossary': r('../../packages/content-schema/src/glossary.ts'),
      '@music/content-schema': r('../../packages/content-schema/src/index.ts'),
    },
  },
  server: {
    host: true,
    port: 5173,
    proxy: { '/api': 'http://localhost:3001' },
  },
  preview: { host: true, port: 4173, proxy: { '/api': 'http://localhost:3001' } },
  build: { outDir: 'dist', emptyOutDir: true, chunkSizeWarningLimit: 2500 },
});
