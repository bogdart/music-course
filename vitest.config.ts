import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url));

/** Workspace packages resolve to their TypeScript sources in tests (no build needed). */
export const sourceAliases = {
  '@music/core': r('./packages/core/src/index.ts'),
  '@music/content-schema/glossary': r('./packages/content-schema/src/glossary.ts'),
  '@music/content-schema/node': r('./packages/content-schema/src/node.ts'),
  '@music/content-schema': r('./packages/content-schema/src/index.ts'),
};

export default defineConfig({
  resolve: { alias: sourceAliases },
  test: {
    projects: [
      { extends: true, test: { name: 'core', root: r('./packages/core'), environment: 'node' } },
      { extends: true, test: { name: 'content-schema', root: r('./packages/content-schema'), environment: 'node' } },
      { extends: true, test: { name: 'server', root: r('./apps/server'), environment: 'node' } },
      {
        extends: true,
        test: {
          name: 'web',
          root: r('./apps/web'),
          environment: 'jsdom',
          setupFiles: [r('./apps/web/src/test/setup.ts')],
        },
      },
    ],
  },
});
