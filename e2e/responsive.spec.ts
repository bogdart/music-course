/** 8. Responsive: phone (390×844) and tablet (820×1180) — no horizontal page scrolling; keyboard usable. */
import type { Page } from '@playwright/test';
import { test, expect } from './fixtures';
import { expectSound, goto, keyLocator, unlockAudio } from './helpers/app';
import { lessons } from './helpers/content';

test.use({ isolated: true });
test.describe.configure({ mode: 'parallel' });

const busy = [...lessons()].sort((a, b) => Object.values(b.blocks).reduce((x, y) => x + y) - Object.values(a.blocks).reduce((x, y) => x + y))[0]!;
const PAGES = ['/', '/curriculum', `/lesson/${lessons()[0]!.id}`, `/lesson/${busy.id}`, '/practice', '/settings', '/daw', '/dev/demo'];

const DEVICES = [
  { name: 'phone', use: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 3 } },
  { name: 'tablet', use: { viewport: { width: 820, height: 1180 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 } },
];

async function horizontalOverflow(page: Page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    const vw = doc.clientWidth;
    const offenders: string[] = [];
    if (doc.scrollWidth > vw + 1) {
      for (const el of Array.from(document.querySelectorAll('body *'))) {
        const r = el.getBoundingClientRect();
        if (r.right > vw + 1 && r.width > 0) {
          // ignore children of horizontally scrollable containers (e.g. the keyboard scroller, tables)
          let p = el.parentElement;
          let contained = false;
          while (p && p !== document.body) {
            const s = getComputedStyle(p);
            if ((s.overflowX === 'auto' || s.overflowX === 'scroll' || s.overflowX === 'hidden') && p.getBoundingClientRect().right <= vw + 1) {
              contained = true;
              break;
            }
            p = p.parentElement;
          }
          if (!contained) offenders.push(`${el.tagName.toLowerCase()}.${String(el.className).slice(0, 40)} right=${Math.round(r.right)}`);
        }
      }
    }
    return { scrollWidth: doc.scrollWidth, clientWidth: vw, offenders: offenders.slice(0, 8) };
  });
}

for (const d of DEVICES) {
  test.describe(d.name, () => {
    test.use(d.use);
    for (const path of PAGES) {
      test(`${path}: no horizontal page scroll`, async ({ page }) => {
        // (phone /settings: regression for BUG-06, fixed)
        await goto(page, path);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(300);
        const o = await horizontalOverflow(page);
        if (o.offenders.length) await page.screenshot({ path: `e2e/artifacts/screenshots/overflow-${d.name}${path.replace(/[^a-z0-9]+/gi, '-')}.png`, fullPage: true });
        expect(o.scrollWidth, `page is wider than the viewport; offenders: ${o.offenders.join(' | ')}`).toBeLessThanOrEqual(o.clientWidth + 1);
      });
    }

    test('top navigation links are all visible and tappable', async ({ page }) => {
      await goto(page, '/');
      for (const name of ['Home', 'Curriculum', 'Practice', 'DAW', 'Settings']) {
        const link = page.locator('header.topbar nav').getByRole('link', { name, exact: true });
        await expect(link).toBeInViewport();
      }
      await page.locator('header.topbar nav').getByRole('link', { name: 'Settings', exact: true }).tap();
      await expect(page.getByRole('heading', { level: 1 })).toHaveText('Settings');
    });

    test('on-screen keyboard: keys are big enough and a tap plays the note', async ({ page }) => {
      await goto(page, '/daw');
      await unlockAudio(page);
      const key = keyLocator(page, 60);
      await key.scrollIntoViewIfNeeded();
      const box = (await key.boundingBox())!;
      expect(box.width, 'white key width (px)').toBeGreaterThanOrEqual(28);
      expect(box.height).toBeGreaterThanOrEqual(100);
      await expect(key).toBeInViewport();
      await page.touchscreen.tap(box.x + box.width / 2, box.y + box.height * 0.85);
      await expectSound(page, { midi: [60], kinds: ['noteOn'] });
    });

    test('lesson exercises are usable: a choice can be tapped', async ({ page }) => {
      const l = lessons().find((x) => x.exercises.some((e) => e.type === 'quiz'))!;
      const ex = l.exercises.find((e) => e.type === 'quiz')!;
      await goto(page, `/lesson/${l.id}`);
      const section = page.locator(`[data-testid="exercise-${ex.id}"]`);
      await section.scrollIntoViewIfNeeded();
      const choice = section.locator('.choice-grid button').first();
      await expect(choice).toBeInViewport();
      await choice.tap();
      await expect(section.locator('.feedback')).toBeVisible();
    });
  });
}
