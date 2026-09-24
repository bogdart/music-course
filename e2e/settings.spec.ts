/** 7. Settings: volume, keyboard range, live instrument, key labels, metronome volume persist and apply. */
import { test, expect } from './fixtures';
import { audioLog, clearAudio, expectSound, goto, keyLocator, midi, unlockAudio } from './helpers/app';

test.use({ isolated: true });

test.afterEach(async ({ api }) => {
  await api.put('/api/settings', { data: { volume: 0.8, keyboardRange: ['C3', 'C5'], liveInstrument: 'piano', keyLabels: 'names', metronomeVolume: 0.6, midiInput: 'all', qwertyOctave: 4 } });
});

test('volume slider persists across reload and is applied to the engine', async ({ page, api }) => {
  await goto(page, '/settings');
  const slider = page.getByLabel(/^Volume \d+%/);
  await slider.fill('0.3');
  await expect(page.getByText('Volume 30%')).toBeVisible();
  await expect.poll(async () => (await (await api.get('/api/settings')).json()).volume).toBe(0.3);
  await page.reload();
  await expect(page.getByLabel(/^Volume \d+%/)).toHaveValue('0.3');
  await expect(page.getByText('Volume 30%')).toBeVisible();
  await unlockAudio(page);
  await expect.poll(async () => (await audioLog(page)).filter((e) => e.kind === 'volume').map((e) => e.value).pop()).toBe(0.3);
  // live change after the engine exists
  await clearAudio(page);
  await page.getByLabel(/^Volume \d+%/).fill('0');
  await expect.poll(async () => (await audioLog(page)).filter((e) => e.kind === 'volume').map((e) => e.value).pop()).toBe(0);
});

test('metronome volume persists', async ({ page, api }) => {
  await goto(page, '/settings');
  await page.getByLabel(/^Metronome volume/).fill('0.15');
  await expect.poll(async () => (await (await api.get('/api/settings')).json()).metronomeVolume).toBe(0.15);
  await page.reload();
  await expect(page.getByLabel(/^Metronome volume/)).toHaveValue('0.15');
});

test('keyboard range presets and custom range persist and resize every default keyboard', async ({ page, api }) => {
  await goto(page, '/settings');
  await page.getByRole('button', { name: 'C4–C5' }).click();
  await expect.poll(async () => (await (await api.get('/api/settings')).json()).keyboardRange).toEqual(['C4', 'C5']);
  await expect(page.getByRole('button', { name: 'C4–C5' })).toHaveClass(/primary/);
  const settingsKb = page.getByRole('group', { name: 'Piano keyboard' });
  await expect(settingsKb.locator('[data-midi]').first()).toHaveAttribute('data-midi', '60');
  await expect(settingsKb.locator('[data-midi]')).toHaveCount(13);
  await page.reload();
  await goto(page, '/daw');
  const kb = page.getByRole('group', { name: 'Piano keyboard' });
  await expect(kb.locator('[data-midi]')).toHaveCount(13);
  await expect(kb.locator('[data-midi="48"]')).toHaveCount(0);

  // full 88-key range
  await goto(page, '/settings');
  await page.getByRole('button', { name: 'A0–C8' }).click();
  await expect(page.getByRole('group', { name: 'Piano keyboard' }).locator('[data-midi]')).toHaveCount(88);

  // custom range; invalid input disables Apply
  const lo = page.getByLabel('Lowest note');
  const hi = page.getByLabel('Highest note');
  await lo.fill('H2');
  await expect(page.getByRole('button', { name: 'Apply' })).toBeDisabled();
  await lo.fill('E2');
  await hi.fill('G4');
  await page.getByRole('button', { name: 'Apply' }).click();
  await expect.poll(async () => (await (await api.get('/api/settings')).json()).keyboardRange).toEqual(['E2', 'G4']);
  const keys = page.getByRole('group', { name: 'Piano keyboard' }).locator('[data-midi]');
  await expect(keys.first()).toHaveAttribute('data-midi', '40');
  await page.reload();
  await expect(page.getByLabel('Lowest note')).toHaveValue('E2');
  await expect(page.getByLabel('Highest note')).toHaveValue('G4');
});

test('custom range given high-to-low is rejected or normalised (no empty keyboard)', async ({ page }) => {
  await goto(page, '/settings');
  await page.getByLabel('Lowest note').fill('C5');
  await page.getByLabel('Highest note').fill('C3');
  await page.getByRole('button', { name: 'Apply' }).click();
  // Keyboard swaps reversed ranges, so 25 keys are still shown
  await expect(page.getByRole('group', { name: 'Piano keyboard' }).locator('[data-midi]')).toHaveCount(25);
});

test('live instrument persists and is used for live notes', async ({ page, api }) => {
  await goto(page, '/settings');
  await page.getByLabel('Live instrument').selectOption('epiano');
  await expect.poll(async () => (await (await api.get('/api/settings')).json()).liveInstrument).toBe('epiano');
  await page.reload();
  await expect(page.getByLabel('Live instrument')).toHaveValue('epiano');
  await unlockAudio(page);
  await clearAudio(page);
  await midi.noteOn(page, 60, 100);
  const on = await expectSound(page, { midi: [60], kinds: ['noteOn'] });
  expect(on).toContain(60);
  expect((await audioLog(page)).find((e) => e.kind === 'noteOn')?.instrument).toBe('epiano');
  await midi.noteOff(page, 60);
  // Test sound uses the chosen instrument
  await clearAudio(page);
  await page.getByRole('button', { name: 'Test sound' }).click();
  await expect.poll(async () => (await audioLog(page)).find((e) => e.kind === 'playNote')?.instrument).toBe('epiano');
  // every instrument is selectable
  const options = await page.getByLabel('Live instrument').locator('option').allTextContents();
  expect(options.map((o) => o.replace(/\s*\(sampled\)/, '').trim())).toEqual(['piano', 'epiano', 'bass', 'pad', 'lead', 'pluck', 'strings', 'drums']);
});

test('key labels setting changes the on-screen keyboard labels and persists', async ({ page, api }) => {
  await goto(page, '/settings');
  const c4 = keyLocator(page, 60);
  await expect(c4).toContainText('C4');
  await page.getByLabel('Key labels').selectOption('degrees');
  await expect(c4).toContainText('1');
  await page.getByLabel('Key labels').selectOption('none');
  await expect.poll(async () => (await (await api.get('/api/settings')).json()).keyLabels).toBe('none');
  await page.reload();
  await expect(page.getByLabel('Key labels')).toHaveValue('none');
  await expect(keyLocator(page, 60)).not.toContainText('C4');
});

test('settings survive a server restart', async ({ page, api, server }) => {
  await goto(page, '/settings');
  await page.getByLabel('Live instrument').selectOption('strings');
  await expect.poll(async () => (await (await api.get('/api/settings')).json()).liveInstrument).toBe('strings');
  await server.handle!.restart();
  await page.reload();
  await expect(page.getByLabel('Live instrument')).toHaveValue('strings');
});

test.describe('server unreachable', () => {
  // aborted fetches log "Failed to load resource" by design here
  test.use({ consoleAllow: [/ERR_FAILED|Failed to load resource/] });
  test('settings changes are kept locally and a banner is shown', async ({ page }) => {
    await goto(page, '/settings');
    await page.route('**/api/**', (r) => r.abort());
    await page.getByLabel('Key labels').selectOption('none');
    await expect(page.getByLabel('Key labels')).toHaveValue('none');
    const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('music-course.settings') ?? '{}').keyLabels);
    expect(stored).toBe('none');
    await page.goto('/');
    await expect(page.locator('.banner.error')).toContainText('reach the server');
    await expect(page.getByLabel('Key labels')).toHaveCount(0);
  });
});
