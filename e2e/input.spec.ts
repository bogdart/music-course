/**
 * 5. Input: on-screen keyboard (mouse + multi-touch), QWERTY + octave shift, fake Web MIDI (note on/off,
 * velocity-0 note-off, sustain, all-notes-off), device selection persistence, hot-plug.
 */
import type { Page } from '@playwright/test';
import { test, expect } from './fixtures';
import { audioLog, clearAudio, expectSound, goto, keyLocator, midi, unlockAudio } from './helpers/app';
import { lessons } from './helpers/content';
import { currentItem, exerciseLocator } from './helpers/exercises';

test.use({ isolated: true });

async function daw(page: Page) {
  await goto(page, '/daw');
  const kb = page.getByRole('group', { name: 'Piano keyboard' });
  await expect(kb).toBeVisible();
  await unlockAudio(page);
  await clearAudio(page);
  return kb;
}

async function keyCenter(page: Page, m: number) {
  const k = keyLocator(page, m);
  await k.scrollIntoViewIfNeeded();
  const b = (await k.boundingBox())!;
  const black = [1, 3, 6, 8, 10].includes(m % 12);
  return { x: b.x + b.width / 2, y: b.y + b.height * (black ? 0.4 : 0.85) };
}

test.describe('on-screen keyboard', () => {
  test('mouse press holds the key and plays it; release stops it', async ({ page }) => {
    await daw(page);
    const { x, y } = await keyCenter(page, 60);
    await page.mouse.move(x, y);
    await page.mouse.down();
    await expect(keyLocator(page, 60)).toHaveAttribute('aria-pressed', 'true');
    await expectSound(page, { midi: [60], kinds: ['noteOn'] });
    await expect(page.locator('.input-indicator')).toContainText('screen');
    await page.mouse.up();
    await expect(keyLocator(page, 60)).toHaveAttribute('aria-pressed', 'false');
    await expectSound(page, { midi: [60], kinds: ['noteOff'] });
  });

  test('black keys are clickable on top of white keys', async ({ page }) => {
    await daw(page);
    const { x, y } = await keyCenter(page, 61);
    await page.mouse.move(x, y);
    await page.mouse.down();
    await expect(keyLocator(page, 61)).toHaveAttribute('aria-pressed', 'true');
    await expect(keyLocator(page, 60)).toHaveAttribute('aria-pressed', 'false');
    await page.mouse.up();
  });

  test('dragging across keys (glissando) moves the held note', async ({ page }) => {
    await daw(page);
    const a = await keyCenter(page, 60);
    const b = await keyCenter(page, 64);
    await page.mouse.move(a.x, a.y);
    await page.mouse.down();
    await page.mouse.move(b.x, b.y, { steps: 8 });
    await expect(keyLocator(page, 64)).toHaveAttribute('aria-pressed', 'true');
    await expect(keyLocator(page, 60)).toHaveAttribute('aria-pressed', 'false');
    await page.mouse.up();
    await expect(keyLocator(page, 64)).toHaveAttribute('aria-pressed', 'false');
    const on = (await audioLog(page)).filter((e) => e.kind === 'noteOn').map((e) => e.midi);
    expect(on).toEqual(expect.arrayContaining([60, 62, 64]));
  });

  test.describe('touch (tablet-sized touch screen)', () => {
    // NOTE: under full phone emulation (isMobile) CDP multi-touch hit-testing targets the wrong elements for
    // the 2nd finger, so multi-touch is checked with a desktop-sized touch screen (see QA_REPORT "Not verifiable").
    test.use({ hasTouch: true, viewport: { width: 1024, height: 768 } });

    test('multi-touch: two fingers hold two keys (chord), lifting releases them', async ({ page }) => {
      await daw(page);
      const a = await keyCenter(page, 60);
      const b = await keyCenter(page, 64);
      const cdp = await page.context().newCDPSession(page);
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: a.x, y: a.y, id: 1 }] });
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: a.x, y: a.y, id: 1 }, { x: b.x, y: b.y, id: 2 }] });
      await expect(keyLocator(page, 60)).toHaveAttribute('aria-pressed', 'true');
      await expect(keyLocator(page, 64)).toHaveAttribute('aria-pressed', 'true');
      await expectSound(page, { midi: [60, 64], kinds: ['noteOn'] });
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
      await expect(keyLocator(page, 60)).toHaveAttribute('aria-pressed', 'false');
      await expect(keyLocator(page, 64)).toHaveAttribute('aria-pressed', 'false');
      await expectSound(page, { midi: [60, 64], kinds: ['noteOff'] });
    });

  });

  test.describe('touch (phone)', () => {
    test.use({ hasTouch: true, isMobile: true, viewport: { width: 390, height: 844 } });
    test('tap plays a note', async ({ page }) => {
      await daw(page);
      const a = await keyCenter(page, 62);
      await page.touchscreen.tap(a.x, a.y);
      await expectSound(page, { midi: [62], kinds: ['noteOn'] });
      await expect(keyLocator(page, 62)).toHaveAttribute('aria-pressed', 'false');
    });
  });
});

test.describe('QWERTY', () => {
  test('z..,  s d g h j map to C4..C5 and black keys; keyup releases', async ({ page }) => {
    await daw(page);
    const map: [string, number][] = [['z', 60], ['s', 61], ['x', 62], ['d', 63], ['c', 64], ['v', 65], ['g', 66], ['b', 67], ['h', 68], ['n', 69], ['j', 70], ['m', 71], [',', 72], ['q', 72], ['w', 74], ['i', 84]];
    for (const [k, m] of map) {
      await page.keyboard.down(k);
      // the default on-screen range is C3–C5; notes above it are checked through the audio log only
      if (m <= 72) await expect(keyLocator(page, m), `${k} → ${m}`).toHaveAttribute('aria-pressed', 'true');
      await page.keyboard.up(k);
      if (m <= 72) await expect(keyLocator(page, m)).toHaveAttribute('aria-pressed', 'false');
    }
    const on = (await audioLog(page)).filter((e) => e.kind === 'noteOn').map((e) => e.midi);
    expect(on).toEqual(map.map(([, m]) => m));
    await expect(page.locator('.input-indicator')).toContainText('qwerty');
  });

  test('holding a key does not retrigger (auto-repeat ignored)', async ({ page }) => {
    await daw(page);
    await page.keyboard.down('z');
    await page.keyboard.down('z');
    await page.keyboard.down('z');
    await page.keyboard.up('z');
    const on = (await audioLog(page)).filter((e) => e.kind === 'noteOn');
    expect(on).toHaveLength(1);
  });

  test('octave shift with - and = changes the mapping and is saved to settings', async ({ page, api }) => {
    await daw(page);
    await page.keyboard.press('=');
    await expect.poll(async () => (await (await api.get('/api/settings')).json()).qwertyOctave).toBe(5);
    await page.keyboard.down('z');
    await expectSound(page, { midi: [72], kinds: ['noteOn'] });
    await page.keyboard.up('z');
    await page.keyboard.press('-');
    await page.keyboard.press('-');
    await expect.poll(async () => (await (await api.get('/api/settings')).json()).qwertyOctave).toBe(3);
    await clearAudio(page);
    await page.keyboard.down('z');
    await expectSound(page, { midi: [48], kinds: ['noteOn'] });
    await page.keyboard.up('z');
    // survives reload
    await page.reload();
    await expect(page.locator('.input-indicator')).toHaveAttribute('title', 'QWERTY octave 3');
    await page.keyboard.press('=');
    await expect.poll(async () => (await (await api.get('/api/settings')).json()).qwertyOctave).toBe(4);
  });

  test('octave is clamped at the extremes', async ({ page, api }) => {
    await daw(page);
    for (let i = 0; i < 12; i++) await page.keyboard.press('=');
    await expect(page.locator('.input-indicator')).toHaveAttribute('title', 'QWERTY octave 7');
    await expect.poll(async () => (await (await api.get('/api/settings')).json()).qwertyOctave).toBe(7);
    for (let i = 0; i < 12; i++) await page.keyboard.press('-');
    await expect(page.locator('.input-indicator')).toHaveAttribute('title', 'QWERTY octave 0');
    await expect.poll(async () => (await (await api.get('/api/settings')).json()).qwertyOctave).toBe(0);
    await api.put('/api/settings', { data: { qwertyOctave: 4 } });
  });

  test('typing in a text field does not play notes', async ({ page }) => {
    await goto(page, '/settings');
    await unlockAudio(page);
    await clearAudio(page);
    const low = page.getByLabel('Lowest note');
    await low.fill('');
    await low.pressSequentially('zxcv');
    await expect(low).toHaveValue('zxcv');
    expect((await audioLog(page)).filter((e) => e.kind === 'noteOn')).toEqual([]);
  });
});

test.describe('Web MIDI (fake device)', () => {
  test('note on/off drives the keyboard highlight and plays with velocity', async ({ page }) => {
    await daw(page);
    await expect(page.locator('.input-indicator')).toContainText('MIDI ×1');
    expect(await midi.listening(page)).toEqual(['e2e-keys-1']);
    await midi.noteOn(page, 67, 64);
    await expect(keyLocator(page, 67)).toHaveAttribute('aria-pressed', 'true');
    const [on] = (await audioLog(page)).filter((e) => e.kind === 'noteOn');
    expect(on).toMatchObject({ midi: 67 });
    expect(on!.velocity).toBeCloseTo(64 / 127, 3);
    await expect(page.locator('.input-indicator')).toContainText('midi');
    await midi.noteOff(page, 67);
    await expect(keyLocator(page, 67)).toHaveAttribute('aria-pressed', 'false');
    await expectSound(page, { midi: [67], kinds: ['noteOff'] });
  });

  test('note-on with velocity 0 is a note-off; chords are held together', async ({ page }) => {
    await daw(page);
    for (const m of [60, 64, 67]) await midi.noteOn(page, m, 100);
    for (const m of [60, 64, 67]) await expect(keyLocator(page, m)).toHaveAttribute('aria-pressed', 'true');
    await page.evaluate(() => (window as any).__fakeMidi.send([0x90, 64, 0]));
    await expect(keyLocator(page, 64)).toHaveAttribute('aria-pressed', 'false');
    await expect(keyLocator(page, 60)).toHaveAttribute('aria-pressed', 'true');
    // CC 123 all notes off
    await midi.cc(page, 123, 0);
    await expect(keyLocator(page, 60)).toHaveAttribute('aria-pressed', 'false');
    await expect(keyLocator(page, 67)).toHaveAttribute('aria-pressed', 'false');
  });

  test('sustain pedal (CC64) holds note-offs until released', async ({ page }) => {
    await daw(page);
    await midi.cc(page, 64, 127);
    await midi.noteOn(page, 62, 90);
    await midi.noteOff(page, 62);
    await page.waitForTimeout(200);
    await expect(keyLocator(page, 62)).toHaveAttribute('aria-pressed', 'true');
    await midi.cc(page, 64, 0);
    await expect(keyLocator(page, 62)).toHaveAttribute('aria-pressed', 'false');
  });

  test('MIDI before the audio gate is unlocked still highlights (no crash, no sound)', async ({ page }) => {
    await goto(page, '/daw');
    await expect(page.locator('.audio-gate')).toBeVisible();
    await midi.noteOn(page, 60, 100);
    await expect(keyLocator(page, 60)).toHaveAttribute('aria-pressed', 'true');
    expect(await audioLog(page)).toEqual([]);
    await midi.noteOff(page, 60);
  });

  test.describe('hot-plug', () => {
    test('a device plugged in later is listed and plays; unplugging marks it disconnected', async ({ page }) => {
      await goto(page, '/settings');
      await unlockAudio(page);
      const select = page.getByLabel('Input device');
      await expect(select.locator('option')).toHaveText(['All connected inputs', /E2E Keys/]);
      await midi.add(page, 'e2e-keys-2', 'Second Keys');
      await expect(select.locator('option')).toHaveText(['All connected inputs', /E2E Keys/, /Second Keys/]);
      await expect(page.locator('.input-indicator')).toContainText('MIDI ×2');
      await expect(page.getByText('2 device(s) connected')).toBeVisible();
      await clearAudio(page);
      await midi.noteOn(page, 65, 100, 'e2e-keys-2');
      await expectSound(page, { midi: [65], kinds: ['noteOn'] });
      await midi.noteOff(page, 65, 'e2e-keys-2');
      await midi.remove(page, 'e2e-keys-2');
      await expect(page.locator('.input-indicator')).toContainText('MIDI ×1');
      await expect(select.locator('option').nth(2)).toHaveText(/Second Keys\s*\(disconnected\)/);
      // re-plug
      await midi.add(page, 'e2e-keys-2', 'Second Keys');
      await expect(page.locator('.input-indicator')).toContainText('MIDI ×2');
    });
  });

  test.describe('no devices', () => {
    test.use({ midiInputs: [] });
    test('with no MIDI device the app says so and still works', async ({ page }) => {
      await goto(page, '/settings');
      await expect(page.locator('.input-indicator')).toContainText('no MIDI');
      await expect(page.getByText('0 device(s) connected')).toBeVisible();
      await midi.add(page, 'late', 'Late Keys');
      await expect(page.locator('.input-indicator')).toContainText('MIDI ×1');
    });
  });

  test('MIDI permission denied: Settings explains how to allow it and Connect MIDI retries', async ({ page }) => {
    // First request is refused (as when the user dismisses/blocks Chromium's prompt), later ones succeed.
    await page.addInitScript(() => {
      const real = navigator.requestMIDIAccess.bind(navigator);
      let calls = 0;
      Object.defineProperty(navigator, 'requestMIDIAccess', {
        configurable: true,
        value: (opts?: MIDIOptions) =>
          ++calls === 1 ? Promise.reject(new DOMException('Permission to use Web MIDI API was not granted.', 'NotAllowedError')) : real(opts),
      });
    });
    await goto(page, '/settings');
    await expect(page.locator('.input-indicator')).toContainText('MIDI blocked');
    await expect(page.getByTestId('midi-status')).toContainText('blocked for this site');
    await expect(page.getByRole('alert')).toContainText('MIDI device control');
    await page.getByRole('button', { name: 'Connect MIDI' }).click();
    await expect(page.getByTestId('midi-status')).toContainText('ready');
    await expect(page.locator('.input-indicator')).toContainText('MIDI ×1');
    await expect(page.getByRole('button', { name: 'Rescan MIDI' })).toBeVisible();
  });

  test('insecure origin (plain http on a LAN IP): Settings says to use localhost or HTTPS', async ({ page }) => {
    await page.addInitScript(() => Object.defineProperty(window, 'isSecureContext', { configurable: true, get: () => false }));
    await goto(page, '/settings');
    await expect(page.getByTestId('midi-status')).toContainText('not available on this address');
    await expect(page.getByRole('alert')).toContainText('localhost');
    await expect(page.getByRole('alert')).toContainText('start:https');
    await expect(page.getByRole('button', { name: 'Connect MIDI' })).toHaveCount(0);
  });

  test('selecting a device in Settings persists across reload and filters other devices', async ({ page, api }) => {
    await goto(page, '/settings');
    await midi.add(page, 'e2e-keys-2', 'Second Keys');
    const select = page.getByLabel('Input device');
    await select.selectOption('e2e-keys-1');
    await expect.poll(async () => (await (await api.get('/api/settings')).json()).midiInput).toBe('e2e-keys-1');
    await expect.poll(() => midi.listening(page)).toEqual(['e2e-keys-1']);
    await page.reload();
    await expect(page.getByLabel('Input device')).toHaveValue('e2e-keys-1');
    await expect.poll(() => midi.listening(page)).toEqual(['e2e-keys-1']);
    // after reload the second device is gone (fresh page); plug it again: it must not be listened to
    await midi.add(page, 'e2e-keys-2', 'Second Keys');
    await page.goto('/daw');
    await unlockAudio(page);
    await clearAudio(page);
    await midi.noteOn(page, 70, 100, 'e2e-keys-2');
    await page.waitForTimeout(200);
    await expect(keyLocator(page, 70)).toHaveAttribute('aria-pressed', 'false');
    await midi.noteOn(page, 69, 100, 'e2e-keys-1');
    await expect(keyLocator(page, 69)).toHaveAttribute('aria-pressed', 'true');
    await midi.noteOff(page, 69, 'e2e-keys-1');
    // back to all
    await goto(page, '/settings');
    await page.getByLabel('Input device').selectOption('all');
    await expect.poll(async () => (await (await api.get('/api/settings')).json()).midiInput).toBe('all');
  });
});

test.describe('input routing inside lessons', () => {
  test('notes played for one exercise do not answer another exercise on the same page', async ({ page, api }) => {
    // Regression for BUG-02 (fixed): every keyboard-driven exercise used to subscribe to the global NoteInputBus, so
    // playing into one play-notes exercise also fed (and recorded attempts for) all others on the page.
    const lesson = lessons().find((l) => l.exercises.filter((e) => e.type === 'play-notes').length >= 2)!;
    const [a, b] = lesson.exercises.filter((e) => e.type === 'play-notes');
    const beforeB = ((await (await api.get('/api/progress')).json()).exercises[lesson.id] ?? {})[b!.id]?.attempts ?? 0;
    await goto(page, `/lesson/${lesson.id}`);
    const { item } = await currentItem(page, a!.id);
    const sectionA = exerciseLocator(page, a!.id);
    for (const m of item.midis as number[]) {
      const { clickKey } = await import('./helpers/app');
      await clickKey(page, sectionA, m);
    }
    await expect(sectionA.locator('.feedback')).toBeVisible();
    await page.waitForTimeout(500);
    const prog = await (await api.get('/api/progress')).json();
    expect(prog.exercises[lesson.id]?.[b!.id]?.attempts ?? 0, `exercise ${b!.id} must not receive notes played for ${a!.id}`).toBe(beforeB);
    await expect(exerciseLocator(page, b!.id).getByText(/Played: 0\//)).toBeVisible();
  });

  test('note input follows focus: one exercise holds it, clicking / tabbing into another moves it (MIDI and QWERTY)', async ({ page, api }) => {
    const lesson = lessons().find((l) => l.id === 'w01-l1-welcome-and-setup')!;
    const aId = 'e3'; // play C3 C4 C5
    const bId = 'e2'; // play C4
    const before = (await (await api.get('/api/progress')).json()).exercises[lesson.id] ?? {};
    await goto(page, `/lesson/${lesson.id}`);
    const A = exerciseLocator(page, aId);
    const B = exerciseLocator(page, bId);
    await expect(page.locator('section.exercise.input-active')).toHaveCount(1);
    await A.locator('.exercise-head h3').click();
    await expect(A).toHaveClass(/input-active/);
    await expect(B).not.toHaveClass(/input-active/);
    await expect(page.locator('section.exercise.input-active')).toHaveCount(1);
    const itemA = (await currentItem(page, aId)).item.midis as number[];
    expect(itemA.length).toBeGreaterThanOrEqual(3);
    await midi.noteOn(page, itemA[0]!, 90);
    await midi.noteOff(page, itemA[0]!);
    await expect(A.getByText(`Played: 1/${itemA.length}`)).toBeVisible();
    await expect(B.getByText('Played: 0/1')).toBeVisible();
    // click B: QWERTY now goes to B only (z = C4)
    await B.locator('.exercise-head h3').click();
    await expect(B).toHaveClass(/input-active/);
    await expect(A).not.toHaveClass(/input-active/);
    await page.keyboard.press('z');
    await expect(B.locator('.feedback.ok')).toBeVisible();
    await expect(A.getByText(`Played: 1/${itemA.length}`)).toBeVisible();
    // tabbing into A (keyboard focus) gives it input focus back
    await A.getByRole('button', { name: 'Reveal' }).focus();
    await expect(A).toHaveClass(/input-active/);
    await midi.noteOn(page, itemA[1]!, 90);
    await midi.noteOff(page, itemA[1]!);
    await expect(A.getByText(`Played: 2/${itemA.length}`)).toBeVisible();
    await page.waitForTimeout(300);
    const prog = await (await api.get('/api/progress')).json();
    // (other tests in this file may have answered these exercises before: compare with the snapshot)
    expect(prog.exercises[lesson.id]?.[aId]?.attempts ?? 0, `${aId} has not been answered yet`).toBe(before[aId]?.attempts ?? 0);
    expect(prog.exercises[lesson.id]?.[bId]).toMatchObject({ attempts: (before[bId]?.attempts ?? 0) + 1, correct: (before[bId]?.correct ?? 0) + 1 });
  });
});
