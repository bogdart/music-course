/**
 * Playwright e2e suite (docs/QA_REPORT.md).
 *
 *   npm run test:e2e                 build + run everything (headless Chromium)
 *   npm run test:e2e -- e2e/api.spec.ts
 *   E2E_SKIP_BUILD=1 npm run test:e2e   reuse an existing build (apps/web/dist, apps/server/dist, packages/*\/dist)
 *   npm run test:e2e:ui              Playwright UI mode
 *
 * Browser: system Chromium at /usr/bin/chromium when present (override with PW_CHROMIUM_PATH), else the
 * Playwright-managed one (`npx playwright install chromium`).
 *
 * Servers: `webServer` builds and starts ONE shared production server (throwaway SQLite DB in the OS temp
 * dir) used by read-only specs. Specs that change progress/settings call `test.use({ isolated: true })`
 * (see e2e/fixtures.ts): every such spec FILE gets its own server process + fresh DB on a free port.
 */
import { existsSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { defineConfig, devices } from '@playwright/test';

// Computed once in the runner process; workers inherit the env, so every process agrees.
process.env.E2E_PORT ??= String(20000 + Math.floor(Math.random() * 20000));
process.env.E2E_TMP ??= mkdtempSync(join(tmpdir(), 'music-course-e2e-'));
process.env.E2E_SHARED_DB ??= join(process.env.E2E_TMP, 'shared.db');

const port = Number(process.env.E2E_PORT);
const chromiumPath = process.env.PW_CHROMIUM_PATH ?? (existsSync('/usr/bin/chromium') ? '/usr/bin/chromium' : undefined);
const build = process.env.E2E_SKIP_BUILD ? '' : 'npm run build && ';

export default defineConfig({
  testDir: './e2e',
  outputDir: './e2e/artifacts/test-results',
  globalSetup: './e2e/global-setup.ts',
  globalTeardown: './e2e/global-teardown.ts',
  timeout: 60_000,
  expect: { timeout: 7_000 },
  fullyParallel: false,
  workers: process.env.E2E_WORKERS ? Number(process.env.E2E_WORKERS) : 4,
  retries: 0,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'e2e/artifacts/html-report', open: 'never' }],
    ['json', { outputFile: 'e2e/artifacts/results.json' }],
  ],
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    launchOptions: {
      ...(chromiumPath ? { executablePath: chromiumPath } : {}),
      args: ['--autoplay-policy=no-user-gesture-required', '--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
    },
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: `${build}node apps/server/dist/index.js`,
    url: `http://127.0.0.1:${port}/api/health`,
    reuseExistingServer: false,
    timeout: 240_000,
    stdout: 'pipe',
    stderr: 'pipe',
    env: {
      NODE_ENV: 'production',
      HOST: '0.0.0.0',
      PORT: String(port),
      DB_FILE: process.env.E2E_SHARED_DB,
      WATCH_CONTENT: '0',
    },
  },
});
