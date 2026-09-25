/** 1. Smoke: every page loads without console errors / unhandled rejections; audio gate; health. */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { test, expect } from './fixtures';
import { audioLog, expectSound, goto, unlockAudio } from './helpers/app';
import { lessons } from './helpers/content';
import { ROOT } from './helpers/server';

const first = lessons()[0]!;

const PAGES: { path: string; heading: RegExp | string }[] = [
  { path: '/', heading: /Welcome back/ },
  { path: '/curriculum', heading: 'Curriculum' },
  { path: `/lesson/${first.id}`, heading: first.title },
  { path: '/practice', heading: 'Practice' },
  { path: '/settings', heading: 'Settings' },
  { path: '/daw', heading: 'DAW' },
  { path: '/dev/demo', heading: /.+/ },
];

test.describe('smoke', () => {
  for (const p of PAGES) {
    test(`page ${p.path} renders without errors`, async ({ page }) => {
      await goto(page, p.path);
      await expect(page.getByRole('heading', { level: 1 }).first()).toHaveText(p.heading);
      await expect(page.locator('.banner.error')).toHaveCount(0);
      // let lazy chunks / async effects settle so late errors are caught
      await page.waitForLoadState('networkidle');
    });
  }

  test('top navigation reaches every page', async ({ page }) => {
    await goto(page, '/');
    for (const [name, h] of [['Curriculum', 'Curriculum'], ['Practice', 'Practice'], ['DAW', 'DAW'], ['Settings', 'Settings'], ['Home', /Welcome back/]] as const) {
      await page.locator('header.topbar nav').getByRole('link', { name, exact: true }).click();
      await expect(page.getByRole('heading', { level: 1 }).first()).toHaveText(h);
    }
  });

  test('unknown client route shows Not found (SPA fallback serves index.html)', async ({ page }) => {
    const res = await page.goto('/no/such/page');
    expect(res?.status()).toBe(200);
    await expect(page.getByRole('heading', { name: 'Not found' })).toBeVisible();
  });

  test.describe('unknown lesson', () => {
    test.use({ consoleAllow: [/Failed to load resource.*404/] });
    test('shows "Lesson unavailable" with a way back', async ({ page }) => {
      await goto(page, '/lesson/w99-l9-nope');
      await expect(page.getByRole('heading', { name: 'Lesson unavailable' })).toBeVisible();
      await expect(page.getByText('Unknown lesson')).toBeVisible();
      await page.getByRole('link', { name: 'Back to curriculum' }).click();
      await expect(page).toHaveURL(/\/curriculum$/);
    });
  });

  test('audio gate: banner visible until first gesture, then audio plays', async ({ page }) => {
    await goto(page, '/settings');
    const gate = page.locator('.audio-gate');
    await expect(gate).toBeVisible();
    await expect(gate).toContainText('Tap to enable audio');
    expect(await audioLog(page)).toEqual([]);
    await unlockAudio(page);
    await page.getByRole('button', { name: 'Test sound' }).click();
    await expectSound(page, { midi: [60], kinds: ['playNote'] });
  });

  test('audio gate also unlocks on the first key press anywhere', async ({ page }) => {
    await goto(page, '/daw');
    await expect(page.locator('.audio-gate')).toBeVisible();
    await page.locator('body').press('Shift');
    await expect(page.locator('.audio-gate')).toBeHidden();
  });

  test('GET /api/health', async ({ api }) => {
    const r = await api.get('/api/health');
    expect(r.status()).toBe(200);
    const b = await r.json();
    expect(b.ok).toBe(true);
    expect(typeof b.contentVersion).toBe('number');
  });

  test('static assets are served with hashed names and index.html has a root', async ({ page, api }) => {
    const html = await (await api.get('/')).text();
    expect(html).toContain('<div id="root">');
    const js = /src="(\/assets\/[^"]+\.js)"/.exec(html)?.[1];
    expect(js).toBeTruthy();
    const r = await api.get(js!);
    expect(r.status()).toBe(200);
    expect(r.headers()['content-type']).toContain('javascript');
    const missing = await api.get('/assets/does-not-exist.js');
    expect(missing.status()).toBe(404);
    await goto(page, '/');
  });
});

test('/dev/demo renders every block type client-side and records no progress', async ({ page }) => {
  const posts: string[] = [];
  page.on('request', (r) => {
    if (r.method() !== 'GET' && r.url().includes('/api/')) posts.push(r.url());
  });
  await goto(page, '/dev/demo');
  for (const id of ['example-block', 'keyboard-block', 'staff-block', 'chords-block']) await expect(page.getByTestId(id).first()).toBeVisible();
  // every exercise block of the fixture renders a real component (all types are implemented)
  const fixture = readFileSync(join(ROOT, 'apps/web/src/lesson/__fixtures__/demo-lesson.md'), 'utf8');
  const nEx = (fixture.match(/^```exercise\s*$/gm) ?? []).length;
  expect(nEx).toBeGreaterThan(20);
  await expect(page.locator('section.exercise[data-type]')).toHaveCount(nEx);
  await expect(page.getByTestId('coming-soon')).toHaveCount(0);
  await expect(page.getByTestId('block-error')).toHaveCount(0);
  const quiz = page.locator('section.exercise[data-type="quiz"]');
  await quiz.getByRole('button', { name: 'Reveal' }).click();
  await expect(quiz.locator('.feedback')).toBeVisible();
  await page.waitForTimeout(300);
  expect(posts).toEqual([]);
});

test.describe('console noise', () => {
  // Regression for BUG-01 (fixed): unlocking audio used to probe /samples/piano/C4.mp3, which 404s when no samples
  // are installed; the client now reads `pianoSamples` from /api/health.
  test('unlocking audio does not log a 404 for the optional sampled piano', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (m) => {
      if (m.type() === 'error') errors.push(`${m.text()} ${m.location().url}`);
    });
    await goto(page, '/settings');
    await unlockAudio(page);
    await page.waitForTimeout(1500);
    expect(errors).toEqual([]);
  });
});
