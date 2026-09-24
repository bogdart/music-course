/**
 * DAW page. Today it is a placeholder (keyboard + "under construction"); the micro-DAW (milestone M3) is being
 * built. The `micro-DAW` describe below holds the specs for it: they skip (annotated `daw-placeholder`) while the
 * placeholder is shown and start running once the real DAW mounts. Extend them as the DAW lands — suggested
 * selectors are the roles/labels from docs/ARCHITECTURE.md (transport, tracks, piano roll, mixer).
 */
import type { Page } from '@playwright/test';
import { test, expect } from './fixtures';
import { expectSound, goto, keyLocator, midi, unlockAudio } from './helpers/app';

test.use({ isolated: true });

async function isPlaceholder(page: Page) {
  return (await page.getByText('The micro-DAW is under construction').count()) > 0;
}

test.describe('DAW placeholder', () => {
  test('shows the jam keyboard; MIDI, QWERTY and mouse play through the live instrument', async ({ page }) => {
    await goto(page, '/daw');
    test.skip(!(await isPlaceholder(page)), 'real DAW is mounted');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('DAW');
    await unlockAudio(page);
    await midi.noteOn(page, 60, 100);
    await expect(keyLocator(page, 60)).toHaveAttribute('aria-pressed', 'true');
    await midi.noteOff(page, 60);
    await page.keyboard.down('c');
    await expect(keyLocator(page, 64)).toHaveAttribute('aria-pressed', 'true');
    await page.keyboard.up('c');
    await expectSound(page, { midi: [60, 64], kinds: ['noteOn'] });
  });
});

test.describe('micro-DAW', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, '/daw');
    if (await isPlaceholder(page)) {
      test.info().annotations.push({ type: 'daw-placeholder', description: 'DAW not implemented yet' });
      test.skip(true, 'DAW placeholder');
    }
  });

  test('transport: play / stop / loop / metronome / bpm', async ({ page }) => {
    await unlockAudio(page);
    await expect(page.getByRole('button', { name: /play/i }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /stop/i }).first()).toBeVisible();
    // TODO(daw): press play on a project with notes and assert `scheduled` entries in the audio log
  });

  test('tracks: add a track with an instrument, mute/solo', async ({ page }) => {
    await expect(page.getByRole('button', { name: /add track/i })).toBeVisible();
    // TODO(daw): add track → choose instrument → mute/solo → projectToSnippet honours it (audio log instruments)
  });

  test('piano roll: draw, move, resize, delete notes', async ({ page }) => {
    await expect(page.getByRole('region', { name: /piano roll/i }).or(page.locator('[data-testid="piano-roll"]'))).toBeVisible();
    // TODO(daw): draw notes with the mouse, verify the project via GET /api/projects/:id
  });

  test('recording from MIDI into an armed track (quantize)', async ({ page }) => {
    await expect(page.getByRole('button', { name: /rec/i }).first()).toBeVisible();
    // TODO(daw): arm, record, send fake MIDI notes (helpers/app midi.noteOn), stop, assert a clip with those notes
  });

  test('save / load via /api/projects and MIDI export', async ({ page, api }) => {
    await expect(page.getByRole('button', { name: /save/i }).first()).toBeVisible();
    // TODO(daw): save → project appears in GET /api/projects; reload → load it back; export .mid via page.waitForEvent('download')
    expect((await api.get('/api/projects')).ok()).toBe(true);
  });
});
