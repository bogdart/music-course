/**
 * Shared Playwright fixtures.
 *
 *   import { test, expect } from './fixtures';
 *   test.use({ isolated: true });     // this spec FILE gets its own server + fresh SQLite DB
 *
 * Every page gets the e2e hooks + fake Web MIDI (helpers/browser-shims.ts). Console errors and uncaught
 * page errors fail the test unless matched by `consoleAllow` or `checkConsole: false`.
 */
import { test as base, expect, request as pwRequest, type APIRequestContext, type ConsoleMessage } from '@playwright/test';
import { installShims, type FakeMidiInputInit } from './helpers/browser-shims';
import { e2eContentDir } from './helpers/content-fixture';
import { startServer, type ServerHandle } from './helpers/server';

export interface ServerInfo {
  url: string;
  dbFile: string;
  isolated: boolean;
  /** only for isolated servers */
  handle: ServerHandle | null;
}

interface Options {
  isolated: boolean;
  /** isolated server with CONTENT_DIR = content/ + e2e/fixture-content (see helpers/content-fixture.ts) */
  contentFixture: boolean;
  midiInputs: FakeMidiInputInit[];
  checkConsole: boolean;
  consoleAllow: RegExp[];
}

interface Fixtures {
  server: ServerInfo;
  api: APIRequestContext;
  consoleErrors: string[];
}

interface WorkerFixtures {
  isoServer: { handle: ServerHandle | null; file: string | null };
}

/**
 * Console noise from known bugs, ignored by the generic console check (each has its own failing test).
 * Empty: BUG-01 (sampled-piano probe 404) is fixed.
 */
export const KNOWN_CONSOLE_NOISE: RegExp[] = [];

export const DEFAULT_MIDI: FakeMidiInputInit[] = [{ id: 'e2e-keys-1', name: 'E2E Keys' }];

export const test = base.extend<Options & Fixtures, WorkerFixtures>({
  isolated: [false, { option: true }],
  contentFixture: [false, { option: true }],
  midiInputs: [DEFAULT_MIDI, { option: true }],
  checkConsole: [true, { option: true }],
  consoleAllow: [[], { option: true }],

  isoServer: [
    async ({}, use) => {
      const state: { handle: ServerHandle | null; file: string | null } = { handle: null, file: null };
      await use(state);
      await state.handle?.stop();
    },
    { scope: 'worker' },
  ],

  server: async ({ isolated, contentFixture, isoServer }, use, testInfo) => {
    if (!isolated) {
      await use({ url: `http://127.0.0.1:${process.env.E2E_PORT}`, dbFile: process.env.E2E_SHARED_DB!, isolated: false, handle: null });
      return;
    }
    const want = `${testInfo.file}|${contentFixture}`;
    if (!isoServer.handle) {
      isoServer.handle = await startServer(contentFixture ? { env: { CONTENT_DIR: e2eContentDir() } } : {});
      isoServer.file = want;
    } else if (isoServer.file !== want) {
      // new spec file in this worker → fresh DB (and the right content dir)
      await isoServer.handle.stop();
      isoServer.handle = await startServer(contentFixture ? { env: { CONTENT_DIR: e2eContentDir() } } : {});
      isoServer.file = want;
    }
    const h = isoServer.handle;
    await use({ url: h.url, dbFile: h.dbFile, isolated: true, handle: h });
  },

  baseURL: async ({ server }, use) => {
    await use(server.url);
  },

  api: async ({ server }, use) => {
    const ctx = await pwRequest.newContext({ baseURL: server.url });
    await use(ctx);
    await ctx.dispose();
  },

  context: async ({ context, midiInputs }, use) => {
    await context.addInitScript(installShims, midiInputs);
    await use(context);
  },

  consoleErrors: [
    async ({ context, checkConsole, consoleAllow }, use, testInfo) => {
      const errors: string[] = [];
      const allowed = (t: string) => [...KNOWN_CONSOLE_NOISE, ...consoleAllow].some((r) => r.test(t));
      const onPage = (page: import('@playwright/test').Page) => {
        page.on('console', (m: ConsoleMessage) => {
          const full = `[console] ${m.text()} @ ${m.location().url}`;
          if (m.type() === 'error' && !allowed(full)) errors.push(full);
        });
        page.on('pageerror', (e) => {
          if (!allowed(String(e.message))) errors.push(`[pageerror] ${e.message}`);
        });
      };
      context.pages().forEach(onPage);
      context.on('page', onPage);
      await use(errors);
      if (errors.length) await testInfo.attach('console-errors', { body: errors.join('\n'), contentType: 'text/plain' });
      if (checkConsole && testInfo.expectedStatus === 'passed' && testInfo.status === 'passed') {
        expect(errors, 'console errors / unhandled page errors').toEqual([]);
      }
    },
    { auto: true },
  ],
});

export { expect };
