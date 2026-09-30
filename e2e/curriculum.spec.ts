/** 2. Curriculum page: 5 phases, 52 weeks, every lesson of curriculum.json; every lesson reachable from it and via Next/Previous. */
import { test, expect } from './fixtures';
import { goto } from './helpers/app';
import { curriculum, lessons } from './helpers/content';

test.describe.configure({ mode: 'parallel' });

const cur = curriculum();
const byId = new Map(lessons().map((l) => [l.id, l]));

test('lists 5 phases, 52 weeks and every lesson in curriculum order', async ({ page }) => {
  await goto(page, '/curriculum');
  await expect(page.locator('section.phase')).toHaveCount(5);
  await expect(page.locator('section.phase h2')).toHaveText(cur.phases.map((p) => p.title));
  await expect(page.locator('.card.week')).toHaveCount(52);
  await expect(page.locator('.card.week .week-head .muted')).toHaveText(cur.weeks.map((w) => `Week ${w.week}`));
  await expect(page.locator('.card.week .week-head strong')).toHaveText(cur.weeks.map((w) => w.title));
  const links = page.locator('li.lesson-row a');
  await expect(links).toHaveCount(lessons().length);
  await expect(page.locator('li.lesson-row.missing')).toHaveCount(0);
  const hrefs = await links.evaluateAll((els) => els.map((e) => e.getAttribute('href')));
  expect(hrefs).toEqual(cur.weeks.flatMap((w) => w.lessons).map((id) => `/lesson/${id}`));
  await expect(links).toHaveText(cur.weeks.flatMap((w) => w.lessons).map((id) => byId.get(id)!.title));
  await expect(page.getByText(/content problem/)).toHaveCount(0);
  // each phase section lists exactly its weeks
  for (const [i, p] of cur.phases.entries()) {
    await expect(page.locator('section.phase').nth(i).locator('.card.week')).toHaveCount(p.weeks[1] - p.weeks[0] + 1);
  }
});

test('Dashboard phase cards link to the phase anchors', async ({ page }) => {
  await goto(page, '/');
  const cards = page.locator('a.phase-card');
  await expect(cards).toHaveCount(5);
  for (const [i, p] of cur.phases.entries()) {
    await expect(cards.nth(i)).toHaveAttribute('href', `/curriculum#${p.id}`);
    await expect(cards.nth(i)).toContainText(p.title);
  }
  await cards.nth(2).click();
  await expect(page).toHaveURL(new RegExp(`/curriculum#${cur.phases[2]!.id}$`));
  await expect(page.locator(`section#${cur.phases[2]!.id}`)).toBeVisible();
});

for (const phase of cur.phases) {
  test(`every lesson of ${phase.id} (${phase.title}) opens from the curriculum`, async ({ page }) => {
    const ids = cur.weeks.filter((w) => w.week >= phase.weeks[0] && w.week <= phase.weeks[1]).flatMap((w) => w.lessons);
    await goto(page, '/curriculum');
    for (const id of ids) {
      await page.locator(`a[href="/lesson/${id}"]`).click();
      await expect(page.locator('header.lesson-header h1'), id).toHaveText(byId.get(id)!.title);
      await expect(page.locator('header.lesson-header .muted').first()).toContainText(`Week ${byId.get(id)!.week}`);
      await page.goBack();
      await expect(page.locator('section.phase').first()).toBeVisible();
    }
  });
}

test('Next / Previous buttons walk the whole course in order', async ({ page }) => {
  test.setTimeout(180_000);
  const ids = lessons().map((l) => l.id);
  await goto(page, `/lesson/${ids[0]}`);
  await expect(page.getByRole('link', { name: '← Previous' })).toHaveCount(0);
  for (let i = 1; i < ids.length; i++) {
    await page.getByRole('link', { name: 'Next lesson →' }).click();
    await expect(page).toHaveURL(new RegExp(`/lesson/${ids[i]}$`));
    await expect(page.locator('header.lesson-header h1')).toHaveText(byId.get(ids[i]!)!.title);
  }
  await expect(page.getByRole('link', { name: 'Next lesson →' })).toHaveCount(0);
  await page.getByRole('link', { name: '← Previous' }).click();
  await expect(page).toHaveURL(new RegExp(`/lesson/${ids[ids.length - 2]}$`));
});

test('navigating to another lesson scrolls to the top', async ({ page }) => {
  const ids = lessons().map((l) => l.id);
  await goto(page, `/lesson/${ids[0]}`);
  await page.getByRole('link', { name: 'Next lesson →' }).scrollIntoViewIfNeeded();
  expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
  await page.getByRole('link', { name: 'Next lesson →' }).click();
  await expect(page.locator('header.lesson-header h1')).toHaveText(byId.get(ids[1]!)!.title);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
});
