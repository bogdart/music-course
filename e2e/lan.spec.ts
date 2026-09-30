/**
 * 11. LAN: the production server binds 0.0.0.0 by default, prints its LAN URLs, and answers on a
 * non-loopback interface address (what `hostname -I` would show).
 */
import { networkInterfaces } from 'node:os';
import { request } from '@playwright/test';
import { test, expect } from './fixtures';
import { startServer, type ServerHandle } from './helpers/server';
import { lessons } from './helpers/content';

const lanIps = Object.values(networkInterfaces())
  .flat()
  .filter((i) => i && i.family === 'IPv4' && !i.internal)
  .map((i) => i!.address);

let srv: ServerHandle;
test.beforeAll(async () => {
  srv = await startServer({ host: null }); // no HOST env → the server's own default
});
test.afterAll(async () => {
  await srv?.stop();
});

test('startup log shows 0.0.0.0 binding and LAN URLs', async () => {
  const log = srv.logs.join('');
  expect(log).toContain(`production on http://0.0.0.0:${srv.port}`);
  if (lanIps.length) {
    expect(log).toMatch(/\[server\] LAN: /);
    for (const ip of lanIps) expect(log).toContain(`http://${ip}:${srv.port}`);
  }
});

test('API and SPA answer on every non-loopback IPv4 interface', async ({ page }) => {
  test.skip(lanIps.length === 0, 'no non-loopback IPv4 interface on this machine');
  for (const ip of lanIps) {
    const ctx = await request.newContext({ baseURL: `http://${ip}:${srv.port}` });
    const r = await ctx.get('/api/health');
    expect(r.status(), ip).toBe(200);
    expect((await r.json()).ok).toBe(true);
    const html = await (await ctx.get('/lesson/anything')).text();
    expect(html).toContain('<div id="root">');
    await ctx.dispose();
  }
  await page.goto(`http://${lanIps[0]}:${srv.port}/curriculum`);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Curriculum');
  await expect(page.locator('li.lesson-row a')).toHaveCount(lessons().length);
});

test('Web MIDI is unavailable over plain http on a LAN IP (insecure context) and the app says so', async ({ browser }) => {
  test.skip(lanIps.length === 0, 'no LAN interface');
  // fresh context WITHOUT the fake-MIDI shim, to see the real browser behaviour
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  await page.goto(`http://${lanIps[0]}:${srv.port}/settings`);
  const secure = await page.evaluate(() => window.isSecureContext);
  expect(secure).toBe(false);
  await expect(page.getByTestId('midi-status')).toContainText('not available on this address');
  await expect(page.getByRole('alert')).toContainText(`http://localhost:${srv.port}`);
  await expect(page.getByRole('alert')).toContainText('start:https');
  await expect(page.locator('.input-indicator')).toContainText('MIDI blocked');
  await ctx.close();
});

test('HTTPS mode (npm run start:https): https works on the LAN IP with Web MIDI, and http:// on the same port redirects', async ({ browser }) => {
  test.skip(lanIps.length === 0, 'no LAN interface');
  const s = await startServer({ https: true });
  try {
    const lan = `${lanIps[0]}:${s.port}`;
    // plain http → 308 to https, path kept (phones default to http://)
    const redirect = await fetch(`http://${lan}/lesson/w01-l1-welcome-and-setup?x=1`, { redirect: 'manual' });
    expect(redirect.status).toBe(308);
    expect(redirect.headers.get('location')).toBe(`https://${lan}/lesson/w01-l1-welcome-and-setup?x=1`);
    expect(s.logs.join('')).toContain(`https://${lanIps[0]}:${s.port}`);

    const ctx = await browser.newContext({ ignoreHTTPSErrors: true });
    const page = await ctx.newPage();
    await page.goto(`http://${lan}/settings`); // typed without https
    expect(page.url()).toBe(`https://${lan}/settings`);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Settings');
    expect(await page.evaluate(() => window.isSecureContext && typeof navigator.requestMIDIAccess === 'function')).toBe(true);
    await expect(page.getByTestId('midi-status')).not.toContainText('not available on this address');
    const health = await page.request.get(`https://${lan}/api/health`);
    expect(health.ok()).toBe(true);
    await ctx.close();
  } finally {
    await s.stop();
  }
});

test('HOST env override binds only that interface', async () => {
  const local = await startServer({ host: '127.0.0.1' });
  try {
    expect(local.logs.join('')).toContain(`http://127.0.0.1:${local.port}`);
    expect((await fetch(`${local.url}/api/health`)).ok).toBe(true);
    if (lanIps.length) {
      await expect(fetch(`http://${lanIps[0]}:${local.port}/api/health`)).rejects.toThrow();
    }
  } finally {
    await local.stop();
  }
});
