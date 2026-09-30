/**
 * 3. Every lesson in content/ (data-driven from disk, so new lessons are covered automatically).
 *
 * Per lesson: title + goals, every fenced block rendered (counts match lesson.md), staff notation drawn,
 * no raw ``` / JSON leaking, glossary [[links]] resolve, {{note:}} / {{chord:}} chips are clickable and
 * sound, first example plays, no console errors. Exercise blocks are classified as a real component,
 * "coming soon" or broken; per-lesson stats go to e2e/artifacts/render-stats/ and are aggregated by
 * e2e/global-teardown.ts into e2e/artifacts/render-stats.json (+ a printed table). "Coming soon" is
 * reported, not failed; a *broken* block (error card) fails.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { test, expect } from './fixtures';
import { audioLog, clearAudio, expectSound, goto, unlockAudio } from './helpers/app';
import { lessons, noteToMidi, type SourceLesson } from './helpers/content';
import { ROOT } from './helpers/server';

test.describe.configure({ mode: 'parallel' });

const STATS_DIR = join(ROOT, 'e2e/artifacts/render-stats');
mkdirSync(STATS_DIR, { recursive: true });

async function check(page: import('@playwright/test').Page, l: SourceLesson) {
  await goto(page, `/lesson/${l.id}`);
  const article = page.locator('article.lesson');
  await expect(article.locator('header.lesson-header h1')).toHaveText(l.title);
  await expect(article.locator('ul.goals > li')).toHaveCount(l.goals.length);
  await expect(page.locator('details.problems'), 'server reported content problems').toHaveCount(0);

  // ---- blocks ----
  const body = page.locator('.lesson-body');
  // top-level ```example blocks only: `listen` exercises render their own examples inside the exercise card
  await expect(body.locator('[data-testid="example-block"]:not(section.exercise [data-testid="example-block"])')).toHaveCount(l.blocks.example);
  for (const ex of l.exercises.filter((e) => e.type === 'listen')) {
    const n = ex.spec.example ? 1 : ((ex.spec.examples as unknown[] | undefined)?.length ?? 0);
    await expect(body.locator(`[data-testid="exercise-${ex.id}"] [data-testid="example-block"]`), `listen ${ex.id} examples`).toHaveCount(n);
  }
  await expect(body.getByTestId('keyboard-block')).toHaveCount(l.blocks.keyboard);
  await expect(body.getByTestId('staff-block')).toHaveCount(l.blocks.staff);
  await expect(body.getByTestId('chords-block')).toHaveCount(l.blocks.chords);
  await expect(body.locator(".exercise-anchor")).toHaveCount(l.blocks.exercise + l.blocks.ladder);
  await expect(body.getByTestId('block-error'), 'broken block cards').toHaveCount(0);
  await expect(page.locator('.error-card'), '"could not be generated" cards').toHaveCount(0);
  // rail lists every exercise
  await expect(page.locator("aside.rail li.rail-item")).toHaveCount(l.blocks.exercise + l.blocks.ladder);

  // ---- no raw markdown/JSON leaking ----
  const text = await body.innerText();
  expect(text).not.toContain('```');
  expect(text).not.toMatch(/\{\s*"(spec|tracks|seq|type|id|range|bars)"\s*:/);
  expect(text).not.toMatch(/\{\{\s*(note|chord)\s*:/);
  expect(text).not.toMatch(/\[\[[^\]]+\]\]/);
  await expect(body.locator('pre code[class*="language-"]').filter({ hasText: /^\s*\{/ })).toHaveCount(0);

  // ---- notation: every staff is drawn (VexFlow SVG), no "Notation error" ----
  const staffs = page.getByTestId('staff');
  const nStaff = await staffs.count();
  if (nStaff) {
    await expect(page.locator('[data-testid="staff"] [data-staff-canvas] svg')).toHaveCount(nStaff, { timeout: 15_000 });
    await expect(page.getByText(/Notation error:/)).toHaveCount(0);
  }

  // ---- exercises: real vs coming soon ----
  const rendered: { id: string; type: string; status: 'real' | 'coming-soon' | 'error' | 'missing' }[] = [];
  for (const ex of l.exercises) {
    const anchor = page.locator(`[id="ex-${ex.id}"]`);
    let status: 'real' | 'coming-soon' | 'error' | 'missing' = 'missing';
    if (await anchor.locator(`[data-testid="exercise-${ex.id}"][data-type="${ex.type}"]`).count()) status = 'real';
    else if (await anchor.getByTestId('coming-soon').count()) status = 'coming-soon';
    else if (await anchor.locator('.error-card').count()) status = 'error';
    rendered.push({ id: ex.id, type: ex.type, status });
  }
  writeFileSync(join(STATS_DIR, `${l.id}.json`), JSON.stringify({ lesson: l.id, exercises: rendered }));
  const bad = rendered.filter((r) => r.status === 'error' || r.status === 'missing');
  expect(bad, 'exercise blocks that neither render nor show "coming soon"').toEqual([]);
  const soon = rendered.filter((r) => r.status === 'coming-soon');
  if (soon.length) test.info().annotations.push({ type: 'coming-soon', description: soon.map((s) => `${s.id}:${s.type}`).join(', ') });

  // ---- glossary [[terms]] ----
  const terms = body.locator('button.term');
  await expect(terms).toHaveCount(l.terms.length);
  if (l.terms.length) {
    // glossary loads async; unresolved terms keep the generic "Glossary" title
    await expect.poll(async () => (await terms.evaluateAll((els) => els.filter((e) => e.getAttribute('title') === 'Glossary').map((e) => e.textContent))).join(', '), {
      message: 'unresolved [[glossary]] terms',
    }).toBe('');
    await terms.first().click();
    const pop = body.locator('.term-pop').first();
    await expect(pop).toBeVisible();
    await expect(pop).not.toContainText('not in the glossary yet');
    await terms.first().click();
  }

  // ---- {{note:}} / {{chord:}} chips ----
  const notes = body.locator('button.note-chip');
  const chords = body.locator('button.chord-chip');
  await expect(notes).toHaveCount(l.notes.length);
  await expect(chords).toHaveCount(l.chords.length);
  for (let i = 0; i < l.notes.length; i++) await expect(notes.nth(i), `note chip ${l.notes[i]}`).toBeEnabled();
  for (let i = 0; i < l.chords.length; i++) await expect(chords.nth(i), `chord chip ${l.chords[i]}`).toBeEnabled();

  const needsAudio = l.notes.length || l.chords.length || l.blocks.example;
  if (needsAudio) await unlockAudio(page);
  if (l.notes.length) {
    await clearAudio(page);
    await notes.first().click();
    const v = l.notes[0]!;
    await expectSound(page, { midi: [noteToMidi(/\d$/.test(v) ? v : v + '4')], kinds: ['playNote'] });
  }
  if (l.chords.length) {
    await clearAudio(page);
    await chords.first().click();
    await expectSound(page, { min: 3, kinds: ['scheduled'], message: `chord chip ${l.chords[0]} scheduled notes` });
  }
  if (l.blocks.example) {
    await clearAudio(page);
    const ex = body.locator('[data-testid="example-block"]:not(section.exercise [data-testid="example-block"])').first();
    await ex.getByRole('button', { name: 'Play' }).click();
    await expectSound(page, { kinds: ['scheduled'], message: 'first example block plays' });
    const stop = ex.getByRole('button', { name: 'Stop' });
    // the example may already have ended (button back to "Play")
    await stop.click({ timeout: 1000 }).catch(() => {});
    expect((await audioLog(page)).length).toBeGreaterThan(0);
  }
}

for (const l of lessons()) {
  test(`${l.id}`, async ({ page }) => {
    await check(page, l);
  });
}
