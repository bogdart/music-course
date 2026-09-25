/**
 * Light / dark theme (Settings → Appearance). `data-theme` on <html> is set by the inline script in index.html
 * before the app runs, then kept in sync by apps/web/src/theme.ts. 'system' follows prefers-color-scheme live.
 * Also writes theme-<light|dark>-<page>.png screenshots to e2e/artifacts/screenshots/ for visual review.
 */
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import type { Page } from '@playwright/test';
import { test, expect } from './fixtures';
import { goto, unlockAudio } from './helpers/app';
import { lessons } from './helpers/content';
import { daw, newProject, openClip } from './helpers/daw';
import { setDawNotes } from './helpers/exercises';
import { ROOT } from './helpers/server';

test.use({ isolated: true, contentFixture: true });

const SHOTS = join(ROOT, 'e2e/artifacts/screenshots');
mkdirSync(SHOTS, { recursive: true });

const BG = { light: '#f6f3ee', dark: '#14161c' } as const;

const theme = (page: Page) => page.evaluate(() => document.documentElement.dataset.theme);
const bgVar = (page: Page) => page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--bg').trim());
const bodyBg = (page: Page) => page.evaluate(() => getComputedStyle(document.body).backgroundColor);

/** Computed ink of the first staff (VexFlow SVG): notehead fill and stave-line stroke. */
function staffInk(page: Page) {
  return page.locator('[data-testid="staff"] svg').first().evaluate((svg) => {
    const head = svg.querySelector('.vf-notehead text, .vf-notehead path');
    const line = svg.querySelector('.vf-stave path');
    return { head: head ? getComputedStyle(head).fill : null, line: line ? getComputedStyle(line).stroke : null };
  });
}

test.afterEach(async ({ api }) => {
  await api.put('/api/settings', { data: { theme: 'system' } });
});

test('Settings → Appearance switches data-theme and --bg immediately and persists across reload', async ({ page, api }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await goto(page, '/settings');
  const group = page.getByRole('group', { name: 'Theme' });
  await expect(group.getByRole('button', { name: 'System' })).toHaveAttribute('aria-pressed', 'true');
  expect(await theme(page)).toBe('dark');
  expect(await bgVar(page)).toBe(BG.dark);

  await group.getByRole('button', { name: 'Light' }).click();
  await expect(group.getByRole('button', { name: 'Light' })).toHaveAttribute('aria-pressed', 'true');
  expect(await theme(page)).toBe('light');
  expect(await bgVar(page)).toBe(BG.light);
  expect(await bodyBg(page)).toBe('rgb(246, 243, 238)');
  await expect.poll(async () => (await (await api.get('/api/settings')).json()).theme).toBe('light');

  // the OS says dark, the explicit choice wins, also after a reload
  await page.reload();
  await expect(page.locator('header.topbar')).toBeVisible();
  expect(await theme(page)).toBe('light');
  expect(await bgVar(page)).toBe(BG.light);
  await expect(page.getByRole('group', { name: 'Theme' }).getByRole('button', { name: 'Light' })).toHaveAttribute('aria-pressed', 'true');

  await page.getByRole('group', { name: 'Theme' }).getByRole('button', { name: 'Dark' }).click();
  expect(await theme(page)).toBe('dark');
  await page.emulateMedia({ colorScheme: 'light' });
  await page.reload();
  await expect(page.locator('header.topbar')).toBeVisible();
  expect(await theme(page)).toBe('dark');
  expect(await bgVar(page)).toBe(BG.dark);
});

test("'system' follows prefers-color-scheme, including live OS changes", async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await goto(page, '/');
  expect(await theme(page)).toBe('light');
  expect(await bgVar(page)).toBe(BG.light);
  await page.emulateMedia({ colorScheme: 'dark' });
  await expect.poll(() => theme(page)).toBe('dark');
  expect(await bgVar(page)).toBe(BG.dark);
  await page.emulateMedia({ colorScheme: 'light' });
  await expect.poll(() => theme(page)).toBe('light');
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute('content', BG.light);
});

test.describe('before first paint', () => {
  test.use({ checkConsole: false });

  test('data-theme is set by index.html before any app script runs (no flash)', async ({ page, api }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await goto(page, '/settings');
    await page.getByRole('group', { name: 'Theme' }).getByRole('button', { name: 'Light' }).click();
    await expect.poll(async () => (await (await api.get('/api/settings')).json()).theme).toBe('light');

    // record data-theme at the moment <body> is parsed, before the module script can run
    await page.addInitScript(() => {
      const w = window as unknown as { __themeAtBody?: string | null };
      new MutationObserver((_, obs) => {
        if (document.body) {
          w.__themeAtBody = document.documentElement.getAttribute('data-theme');
          obs.disconnect();
        }
      }).observe(document, { childList: true, subtree: true });
    });
    await page.reload();
    await expect(page.locator('header.topbar')).toBeVisible();
    expect(await page.evaluate(() => (window as unknown as { __themeAtBody?: string }).__themeAtBody)).toBe('light');

    // and with the app bundle blocked entirely, the page is still light
    await page.route(/\/assets\/.*\.js$/, (r) => r.abort());
    await page.goto('/');
    expect(await theme(page)).toBe('light');
    expect(await bodyBg(page)).toBe('rgb(246, 243, 238)');
    await page.unroute(/\/assets\/.*\.js$/);
  });
});

// staff notation + exercises with an on-screen keyboard (play-*)
const staffLesson = lessons().find((l) => l.blocks.staff > 0 && l.exercises.some((e) => e.type.startsWith('play-')))!;

test('notation ink and DAW grid colours follow the theme without a reload', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await goto(page, `/lesson/${staffLesson.id}`);
  const staff = page.locator('[data-testid="staff"] svg').first();
  await expect(staff).toBeVisible();
  await expect.poll(async () => (await staffInk(page)).head).toBe('rgb(0, 0, 0)');
  const dark = await staffInk(page);

  await page.emulateMedia({ colorScheme: 'light' });
  await expect.poll(async () => (await staffInk(page)).head).toBe('rgb(28, 34, 48)');
  const light = await staffInk(page);
  expect(light.line).not.toBe(dark.line);
  const paper = await page.getByTestId('staff').first().evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(paper).toBe('rgb(255, 255, 255)');

  await goto(page, '/daw');
  await page.locator('.daw-clip').first().dblclick();
  const grid = page.getByRole('application', { name: 'Piano roll grid' });
  await expect(grid).toBeVisible();
  const gridColours = () =>
    grid.evaluate((svg) => {
      const pick = (sel: string, prop: 'fill' | 'stroke') => {
        const el = svg.querySelector(sel);
        return el ? getComputedStyle(el)[prop] : null;
      };
      return { bar: pick('.bar-line', 'stroke'), beat: pick('.beat-line', 'stroke'), row: pick('.row-white, .row-a', 'fill') };
    });
  const lightGrid = await gridColours();
  await page.emulateMedia({ colorScheme: 'dark' });
  await expect.poll(async () => (await gridColours()).row).not.toBe(lightGrid.row);
  const darkGrid = await gridColours();
  expect(darkGrid.bar).not.toBe(lightGrid.bar);
  expect(darkGrid.beat).not.toBe(lightGrid.beat);
  expect(darkGrid.row).toBe('rgb(31, 35, 45)');
});

// ---------------------------------------------------------------- screenshots
// 10 in total: dashboard, lesson (staff + keyboard + exercises), settings, DAW with notes, phone lesson × light/dark.

const MELODY = [60, 62, 64, 65, 67, 65, 64, 62, 60, 64, 67, 72].map((midi, i) => ({ midi, startTick: i * 480, durationTicks: 440, velocity: 0.5 + (i % 4) * 0.12 }));

async function shot(page: Page, name: string) {
  await page.waitForTimeout(400);
  await page.screenshot({ path: join(SHOTS, `theme-${name}.png`) });
}

for (const t of ['light', 'dark'] as const) {
  test.describe(`screenshots (${t})`, () => {
    test.use({ colorScheme: t, viewport: { width: 1280, height: 900 } });

    test(`${t}: dashboard, lesson, settings, DAW`, async ({ page }) => {
      await goto(page, '/');
      expect(await theme(page)).toBe(t);
      await shot(page, `${t}-dashboard`);
      await unlockAudio(page);

      // staff notation + a play-melody exercise (on-screen keyboard below it)
      await goto(page, `/lesson/${staffLesson.id}`);
      await page.locator('[data-testid="staff"] svg').first().scrollIntoViewIfNeeded();
      await shot(page, `${t}-lesson`);

      await goto(page, '/settings');
      await shot(page, `${t}-settings`);

      await goto(page, '/daw');
      await expect(page.getByRole('toolbar', { name: 'Transport' })).toBeVisible();
      await newProject(page);
      await setDawNotes(page, 'main', MELODY, 4);
      await openClip(page, 0, 0);
      await page.locator('.daw-roll-grid .note').nth(3).click();
      await expect.poll(async () => (await daw(page)).selectedNotes.length).toBeGreaterThan(0);
      await shot(page, `${t}-daw`);
    });
  });

  test.describe(`screenshots (${t}, phone)`, () => {
    test.use({ colorScheme: t, viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });

    test(`${t}: phone lesson`, async ({ page }) => {
      await goto(page, `/lesson/${staffLesson.id}`);
      await page.locator('[data-testid="staff"] svg').first().scrollIntoViewIfNeeded();
      await shot(page, `${t}-phone-lesson`);
    });
  });
}
