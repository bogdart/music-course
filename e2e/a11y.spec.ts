/**
 * 10. Accessibility basics: axe-core (WCAG 2.0/2.1 A + AA) on the main pages. Every violation is written to
 * e2e/artifacts/a11y/<page>.json; the test fails on serious/critical ones. Pages with known serious issues are
 * marked test.fail() and listed in docs/QA_REPORT.md ("Accessibility").
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import AxeBuilder from '@axe-core/playwright';
import { test, expect } from './fixtures';
import { goto } from './helpers/app';
import { lessons } from './helpers/content';
import { ROOT } from './helpers/server';

test.use({ isolated: true });
test.describe.configure({ mode: 'parallel' });

const OUT = join(ROOT, 'e2e/artifacts/a11y');
mkdirSync(OUT, { recursive: true });

const exLesson = [...lessons()].sort((a, b) => b.exercises.length - a.exercises.length)[0]!;
const PAGES: { name: string; path: string; knownSerious?: string }[] = [
  { name: 'dashboard', path: '/' },
  { name: 'curriculum', path: '/curriculum' },
  { name: 'lesson-first', path: `/lesson/${lessons()[0]!.id}` },
  // regression for A11Y-01 (fixed): overflowing staff notation was a scroll region without keyboard access
  { name: 'lesson-most-exercises', path: `/lesson/${exLesson.id}` },
  { name: 'practice', path: '/practice' },
  { name: 'settings', path: '/settings' },
  { name: 'daw', path: '/daw' },
  { name: 'dev-demo', path: '/dev/demo', knownSerious: 'A11Y-01' },
];

async function scan(page: import('@playwright/test').Page, name: string, path: string) {
    const res = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    const summary = res.violations.map((v) => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.length, sample: v.nodes.slice(0, 3).map((n) => n.target.join(' ')) }));
    writeFileSync(join(OUT, `${name}.json`), JSON.stringify({ path, violations: summary }, null, 2));
    await test.info().attach('axe-violations', { body: JSON.stringify(summary, null, 2), contentType: 'application/json' });
    const serious = summary.filter((v) => v.impact === 'serious' || v.impact === 'critical');
    for (const v of summary) test.info().annotations.push({ type: `a11y-${v.impact}`, description: `${v.id} ×${v.nodes}: ${v.help}` });
    expect(serious, 'serious/critical axe violations').toEqual([]);
}

for (const p of PAGES) {
  test(`axe: ${p.name} (${p.path})`, async ({ page }) => {
    test.fail(!!p.knownSerious, `known: ${p.knownSerious}`);
    await goto(page, p.path);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    await scan(page, p.name, p.path);
  });
}

test('axe: /daw with a clip open in the piano roll, several tracks and the loop on', async ({ page }) => {
  await goto(page, '/daw');
  await expect(page.getByRole('toolbar', { name: 'Transport' })).toBeVisible();
  await page.getByLabel('New track instrument').selectOption('drums');
  await page.getByRole('button', { name: '+ Track' }).click();
  await page.locator('.daw-clip').first().dblclick();
  await expect(page.getByRole('application', { name: 'Piano roll grid' })).toBeVisible();
  await page.getByRole('button', { name: 'Loop' }).click();
  await page.waitForTimeout(300);
  await scan(page, 'daw-editing', '/daw');
});

test('axe: /practice during a session (card on screen) and its summary', async ({ page, api }) => {
  const l = lessons().find((x) => x.exercises.some((e) => e.type === 'ear-interval'))!;
  const e = l.exercises.find((x) => x.type === 'ear-interval')!;
  await api.post('/api/progress/exercises/complete', { data: { lessonId: l.id, exerciseId: e.id, type: e.type, score: 1, passed: true, correct: 10, total: 10 } });
  await goto(page, '/practice');
  await expect(page.getByText(/Card 1 of \d+/)).toBeVisible();
  await scan(page, 'practice-session', '/practice');
});

test('axe: lesson with a daw-task embed', async ({ page }) => {
  const l = lessons().find((x) => x.exercises.some((e) => e.type === 'daw-task'))!;
  await goto(page, `/lesson/${l.id}`);
  await expect(page.locator('.daw-embed').first()).toBeVisible({ timeout: 15_000 });
  await page.waitForTimeout(500);
  await scan(page, 'lesson-daw-task', `/lesson/${l.id}`);
});

test('keyboard-only: the audio gate, nav links and exercise choices are reachable with Tab', async ({ page }) => {
  const l = lessons()[0]!;
  await goto(page, `/lesson/${l.id}`);
  const seen = new Set<string>();
  for (let i = 0; i < 40; i++) {
    await page.keyboard.press('Tab');
    const d = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement | null;
      return el ? `${el.tagName}:${el.className}:${(el.textContent ?? '').trim().slice(0, 20)}` : '';
    });
    seen.add(d);
  }
  const all = [...seen].join('\n');
  expect(all).toMatch(/A:.*Curriculum/);
  expect(all).toMatch(/BUTTON:choice/);
});

test('exercise feedback is announced (role=status) and the keyboard has an accessible name', async ({ page }) => {
  const l = lessons().find((x) => x.exercises.some((e) => e.type === 'quiz'))!;
  const ex = l.exercises.find((e) => e.type === 'quiz')!;
  await goto(page, `/lesson/${l.id}`);
  const section = page.locator(`[data-testid="exercise-${ex.id}"]`);
  await section.locator('.choice-grid button').first().click();
  await expect(section.getByRole('status')).toBeVisible();
  await goto(page, '/daw');
  await expect(page.getByRole('group', { name: 'Piano keyboard' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'C4', exact: true })).toBeVisible();
});
