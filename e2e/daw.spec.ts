/**
 * The micro-DAW page (/daw): transport, tracks & mixer (instrument / mute / solo), piano roll editing (draw, move,
 * resize, delete, drum lanes), undo/redo, recording from the fake MIDI keyboard with count-in and input quantize,
 * the Quantize command, autosave + reload, .mid export (download parsed by an independent SMF reader) and import,
 * keyboard shortcuts, and phone-sized usability. State is read from the DAW store through the e2e hook
 * (window.__MC_E2E__.daw.main); audio through the engine's audio log.
 */
import { readFileSync } from 'node:fs';
import { test, expect } from './fixtures';
import { audioLog, clearAudio, expectSound, goto, midi, unlockAudio } from './helpers/app';
import { clickRoll, daw, dawDo, dragRoll, newProject, openClip, openNotes, playMidiAt, transportClock, type Note } from './helpers/daw';
import { parseSmf } from './helpers/smf';

test.use({ isolated: true });

const BAR = 1920;

async function openDaw(page: import('@playwright/test').Page) {
  await goto(page, '/daw');
  await expect(page.getByRole('heading', { level: 1, name: 'DAW' })).toBeAttached();
  await expect(page.getByRole('toolbar', { name: 'Transport' })).toBeVisible();
  await expect.poll(async () => (await daw(page)).persistent, { message: 'project loaded from the server' }).toBe(true);
  return newProject(page);
}

/** Replace the notes of track `t`'s first clip (through the store, like an edit). */
async function setNotes(page: import('@playwright/test').Page, t: number, notes: Note[]) {
  await dawDo(page, `st.mutate((p) => { const tr = p.tracks[${t}]; if (!tr.clips.length) tr.clips.push({ id: 'c-e2e-${t}', name: 'Clip', startTick: 0, lengthTicks: ${BAR}, notes: [] }); tr.clips[0].notes = ${JSON.stringify(notes)}; });`);
}

const n = (midi: number, beat: number, beats = 1): Note => ({ midi, startTick: beat * 480, durationTicks: beats * 480, velocity: 0.8 });

test.describe('micro-DAW', () => {
  test('transport: play schedules the project, stop, loop region, metronome, BPM and time signature', async ({ page }) => {
    await openDaw(page);
    await unlockAudio(page);
    await setNotes(page, 0, [n(60, 0), n(64, 1), n(67, 2)]);
    const transport = page.getByRole('toolbar', { name: 'Transport' });
    // BPM
    await transport.getByLabel('BPM').fill('240');
    await expect.poll(async () => (await daw(page)).project.bpm).toBe(240);
    // time signature
    await transport.getByLabel('Beats per bar').selectOption('3');
    await expect.poll(async () => (await daw(page)).project.timeSig).toEqual({ num: 3, den: 4 });
    await transport.getByLabel('Beats per bar').selectOption('4');
    // metronome toggle
    const click = transport.getByRole('button', { name: /click/ });
    const metOn = (await daw(page)).metronome;
    await click.click();
    await expect(click).toHaveAttribute('aria-pressed', String(!metOn));
    expect((await daw(page)).metronome).toBe(!metOn);
    // play → the notes are scheduled, playhead moves; stop
    await clearAudio(page);
    await transport.getByRole('button', { name: 'Play' }).click();
    await expect.poll(async () => (await daw(page)).playing).toBe(true);
    await expectSound(page, { kinds: ['scheduled'], midi: [60, 64, 67] });
    await expect.poll(async () => (await daw(page)).playhead).toBeGreaterThan(0);
    await transport.getByRole('button', { name: 'Stop' }).click();
    await expect.poll(async () => (await daw(page)).playing).toBe(false);
    // loop: on → bars 1–4 region; narrow it to bar 1 and hear the first note again and again
    const loop = transport.getByRole('button', { name: 'Loop' });
    await loop.click();
    await expect(loop).toHaveAttribute('aria-pressed', 'true');
    await expect(transport.getByLabel('Loop start bar')).toHaveValue('1');
    await expect(transport.getByLabel('Loop end bar')).toHaveValue('4');
    await transport.getByLabel('Loop end bar').fill('1');
    await expect.poll(async () => (await daw(page)).project.loop).toEqual({ startTick: 0, endTick: BAR });
    await transport.getByTitle('Return to start (Enter)').click();
    await clearAudio(page);
    await transport.getByRole('button', { name: 'Play' }).click();
    // one bar at 240 BPM = 1 s: within ~3.5 s the C must have sounded at least 3 times
    await expect.poll(async () => (await audioLog(page)).filter((e) => e.kind === 'scheduled' && e.midi === 60).length, { timeout: 8000 }).toBeGreaterThanOrEqual(3);
    await transport.getByRole('button', { name: 'Stop' }).click();
    await loop.click();
    await expect(loop).toHaveAttribute('aria-pressed', 'false');
    await expect(transport.getByLabel('Loop end bar')).toHaveCount(0);
  });

  test('tracks: add tracks with instruments, rename, change instrument, mute / solo decide what plays, delete', async ({ page }) => {
    await openDaw(page);
    await unlockAudio(page);
    await page.getByLabel('New track instrument').selectOption('bass');
    await page.getByRole('button', { name: '+ Track' }).click();
    await page.getByLabel('New track instrument').selectOption('drums');
    await page.getByRole('button', { name: '+ Track' }).click();
    await expect.poll(async () => (await daw(page)).project.tracks.map((t) => t.instrument)).toEqual(['piano', 'bass', 'drums']);
    const heads = page.locator('.daw-track-head');
    await expect(heads).toHaveCount(3);
    // the new track is selected + armed
    expect((await daw(page)).armedTrackId).toBe((await daw(page)).project.tracks[2]!.id);
    // rename + change instrument of track 2
    await page.getByLabel('Track 2 name').fill('Low end');
    await heads.nth(1).getByLabel('Instrument').selectOption('strings');
    await expect.poll(async () => (await daw(page)).project.tracks[1]).toMatchObject({ name: 'Low end', instrument: 'strings' });
    await heads.nth(1).getByLabel('Instrument').selectOption('bass');
    await setNotes(page, 0, [n(72, 0)]);
    await setNotes(page, 1, [n(36, 0)]);
    await setNotes(page, 2, [n(38, 0)]);
    const played = async () => {
      await dawDo(page, 'st.set({ playhead: 0 })');
      await clearAudio(page);
      await page.getByRole('toolbar', { name: 'Transport' }).getByRole('button', { name: 'Play' }).click();
      await page.waitForTimeout(700);
      await page.getByRole('toolbar', { name: 'Transport' }).getByRole('button', { name: 'Stop' }).click();
      return [...new Set((await audioLog(page)).filter((e) => e.kind === 'scheduled').map((e) => e.instrument))].sort();
    };
    expect(await played()).toEqual(['bass', 'drums', 'piano']);
    await heads.nth(1).getByTitle('Mute').click();
    await expect(heads.nth(1).getByTitle('Mute')).toHaveAttribute('aria-pressed', 'true');
    expect(await played()).toEqual(['drums', 'piano']);
    await heads.nth(2).getByTitle('Solo').click();
    expect(await played()).toEqual(['drums']);
    await heads.nth(0).getByTitle('Solo').click();
    expect(await played()).toEqual(['drums', 'piano']);
    await heads.nth(2).getByTitle('Solo').click();
    await heads.nth(0).getByTitle('Solo').click();
    await heads.nth(1).getByTitle('Mute').click();
    expect(await played()).toEqual(['bass', 'drums', 'piano']);
    // volume slider
    await heads.nth(0).getByLabel('Volume').fill('0.3');
    await expect.poll(async () => (await daw(page)).project.tracks[0]!.volume).toBe(0.3);
    // delete track 3
    await heads.nth(2).getByRole('button', { name: 'Delete track' }).click();
    await expect(heads).toHaveCount(2);
    // the last track cannot be deleted
    await heads.nth(1).getByRole('button', { name: 'Delete track' }).click();
    await expect(heads.nth(0).getByRole('button', { name: 'Delete track' })).toBeDisabled();
  });

  test('piano roll: draw, move, resize and delete notes with the mouse', async ({ page }) => {
    await openDaw(page);
    await openClip(page);
    await expect(page.getByRole('radio', { name: '✎ Draw' })).toHaveAttribute('aria-checked', 'true');
    // draw C4 at beat 1 and E4 at beat 3 (default length 1/4)
    await clickRoll(page, 0, 60);
    await clickRoll(page, 960, 64);
    await expect.poll(() => openNotes(page)).toEqual([
      { midi: 60, startTick: 0, durationTicks: 480, velocity: 0.8 },
      { midi: 64, startTick: 960, durationTicks: 480, velocity: 0.8 },
    ]);
    await expect(page.locator('.daw-roll-grid rect.note')).toHaveCount(2);
    // move the C4 one beat later and two semitones up
    await dragRoll(page, { tick: 200, row: 60 }, { tick: 680, row: 62 });
    await expect.poll(async () => (await openNotes(page))[0]).toMatchObject({ midi: 62, startTick: 480, durationTicks: 480 });
    // resize E4 from its right edge: +1 beat
    await dragRoll(page, { tick: 960 + 470, row: 64 }, { tick: 960 + 950, row: 64 });
    await expect.poll(async () => (await openNotes(page))[1]).toMatchObject({ midi: 64, startTick: 960, durationTicks: 960 });
    // right-click deletes
    await clickRoll(page, 500, 62, { button: 'right' });
    await expect.poll(async () => (await openNotes(page)).map((x) => x.midi)).toEqual([64]);
    // select + Del button
    await clickRoll(page, 1000, 64);
    await expect.poll(async () => (await daw(page)).selectedNotes).toEqual([0]);
    await page.locator('.daw-roll-toolbar').getByTitle('Delete (Del)').click();
    await expect.poll(() => openNotes(page)).toEqual([]);
    // chord tool stamps a chord
    await page.getByRole('radio', { name: '♫ Chord' }).click();
    await page.locator('.daw-chord-input').fill('Am');
    await clickRoll(page, 0, 60);
    await expect.poll(async () => (await openNotes(page)).map((x) => x.midi % 12).sort((a, b) => a - b)).toEqual([0, 4, 9]);
  });

  test('drum track: the piano roll shows named drum lanes; drawing on a lane writes that drum', async ({ page }) => {
    await openDaw(page);
    await page.getByLabel('New track instrument').selectOption('drums');
    await page.getByRole('button', { name: '+ Track' }).click();
    // double-click the empty drum lane to add a clip (opens it)
    await page.locator('.daw-arr-row').nth(2).locator('.daw-lane').dblclick({ position: { x: 10, y: 20 } });
    await expect(page.getByRole('application', { name: 'Piano roll grid' })).toBeVisible();
    const lanes = await page.locator('.daw-roll-keys .daw-key').allTextContents();
    for (const l of ['kick', 'snare', 'hihat', 'clap', 'crash']) expect(lanes).toContain(l);
    for (let b = 0; b < 4; b++) await clickRoll(page, b * 480, b % 2 ? 'snare' : 'kick');
    await clickRoll(page, 240, 'hihat');
    await expect.poll(async () => (await openNotes(page)).map((x) => [x.midi, x.startTick])).toEqual([[36, 0], [38, 480], [36, 960], [38, 1440], [42, 240]]);
    const s = await daw(page);
    expect(s.project.tracks[1]!.instrument).toBe('drums');
    await unlockAudio(page);
    await clearAudio(page);
    await dawDo(page, 'st.set({ playhead: 0 })');
    await page.getByRole('toolbar', { name: 'Transport' }).getByRole('button', { name: 'Play' }).click();
    await expectSound(page, { kinds: ['scheduled'], midi: [36, 38, 42] });
    await page.getByRole('toolbar', { name: 'Transport' }).getByRole('button', { name: 'Stop' }).click();
  });

  test('undo / redo with the buttons and Ctrl+Z / Ctrl+Y / Ctrl+Shift+Z', async ({ page }) => {
    await openDaw(page);
    await openClip(page);
    await clickRoll(page, 0, 60);
    await clickRoll(page, 480, 62);
    await expect.poll(async () => (await openNotes(page)).length).toBe(2);
    const undo = page.getByTitle('Undo (Ctrl+Z)');
    const redo = page.getByTitle('Redo (Ctrl+Y)');
    await expect(redo).toBeDisabled();
    await undo.click();
    await expect.poll(async () => (await openNotes(page)).length).toBe(1);
    await expect(redo).toBeEnabled();
    await redo.click();
    await expect.poll(async () => (await openNotes(page)).length).toBe(2);
    await page.keyboard.press('Control+z');
    await page.keyboard.press('Control+z');
    await expect.poll(async () => (await openNotes(page)).length).toBe(0);
    await page.keyboard.press('Control+y');
    await expect.poll(async () => (await openNotes(page)).length).toBe(1);
    await page.keyboard.press('Control+Shift+z');
    await expect.poll(async () => (await openNotes(page)).map((x) => x.midi)).toEqual([60, 62]);
    // a new edit clears the redo stack
    await page.keyboard.press('Control+z');
    await clickRoll(page, 960, 64);
    await expect(redo).toBeDisabled();
    // undoing a track add restores the track list
    await page.getByRole('button', { name: '+ Track' }).click();
    await expect(page.locator('.daw-track-head')).toHaveCount(2);
    await undo.click();
    await expect(page.locator('.daw-track-head')).toHaveCount(1);
  });

  test('record from the MIDI keyboard: count-in, notes land on the armed track at the right time', async ({ page }) => {
    const s0 = await openDaw(page);
    await unlockAudio(page);
    await dawDo(page, 'st.mutate((p) => { p.bpm = 120; })');
    const transport = page.getByRole('toolbar', { name: 'Transport' });
    await transport.getByRole('combobox', { name: 'count-in' }).selectOption('1');
    const armed = page.locator('.daw-track-head').first().getByTitle('Arm for recording');
    await expect(armed).toHaveAttribute('aria-pressed', 'true');
    await page.evaluate(() => ((window as any).__MC_E2E__.transport = undefined));
    await transport.getByRole('button', { name: 'Record' }).click();
    await expect.poll(async () => (await daw(page)).recording).toBe(true);
    const clock = await transportClock(page);
    // count-in: 1 bar at 120 BPM = 2 s before tick 0; a note in the middle of the count-in is ignored
    expect(await page.evaluate(() => performance.now())).toBeLessThan(clock.startPerf - 500);
    await playMidiAt(page, clock.startPerf, 120, [{ midi: 50, beat: -2, holdBeats: 0.5 }]);
    await expect.poll(async () => (await daw(page)).countingIn, { timeout: 3000 }).toBe(true);
    // C D E G on beats 1-4, eighth-note long
    await playMidiAt(page, clock.startPerf, 120, [0, 1, 2, 3].map((b, i) => ({ midi: [60, 62, 64, 67][i]!, beat: b, holdBeats: 0.5 })));
    await page.waitForFunction((t) => performance.now() > t, clock.startPerf + 4 * 500 + 300);
    await transport.getByRole('button', { name: 'Stop' }).click();
    await expect.poll(async () => (await daw(page)).recording).toBe(false);
    const s = await daw(page);
    const track = s.project.tracks[0]!;
    const notes = track.clips.flatMap((c) => c.notes.map((x) => ({ ...x, startTick: x.startTick + c.startTick })));
    expect(notes.map((x) => x.midi), 'count-in note ignored, 4 notes recorded').toEqual([60, 62, 64, 67]);
    notes.forEach((x, i) => {
      expect(Math.abs(x.startTick - i * 480), `note ${i} start ${x.startTick}`).toBeLessThan(60);
      expect(Math.abs(x.durationTicks - 240), `note ${i} length ${x.durationTicks}`).toBeLessThan(80);
    });
    expect(s.project.id).toBe(s0.project.id);
    // one undo step removes the whole take
    await page.getByTitle('Undo (Ctrl+Z)').click();
    await expect.poll(async () => (await daw(page)).project.tracks[0]!.clips.flatMap((c) => c.notes).length).toBe(0);
  });

  test('record with input quantize 1/4 snaps the take; Quantize snaps sloppy notes afterwards', async ({ page }) => {
    await openDaw(page);
    await unlockAudio(page);
    await dawDo(page, 'st.mutate((p) => { p.bpm = 120; })');
    const transport = page.getByRole('toolbar', { name: 'Transport' });
    await transport.getByRole('combobox', { name: 'rec quantize' }).selectOption({ label: '1/4' });
    await transport.getByRole('combobox', { name: 'count-in' }).selectOption('1');
    await page.evaluate(() => ((window as any).__MC_E2E__.transport = undefined));
    await page.locator('body').press('r');
    await expect.poll(async () => (await daw(page)).recording).toBe(true);
    const clock = await transportClock(page);
    // deliberately sloppy: 0.15 beat late / early
    await playMidiAt(page, clock.startPerf, 120, [
      { midi: 60, beat: 0.15, holdBeats: 0.5 }, { midi: 62, beat: 0.88, holdBeats: 0.5 }, { midi: 64, beat: 2.12, holdBeats: 0.5 }, { midi: 65, beat: 2.86, holdBeats: 0.5 },
    ]);
    await page.waitForFunction((t) => performance.now() > t, clock.startPerf + 4 * 500);
    await page.locator('body').press('r');
    await expect.poll(async () => (await daw(page)).recording).toBe(false);
    const rec = (await daw(page)).project.tracks[0]!.clips.flatMap((c) => c.notes.map((x) => [x.midi, x.startTick + c.startTick]));
    expect(rec).toEqual([[60, 0], [62, 480], [64, 960], [65, 1440]]);

    // Quantize command on hand-placed sloppy notes (grid 1/16 by default → pick 1/8)
    await setNotes(page, 0, [n(60, 0.1), n(62, 0.95), n(64, 2.2)]);
    await openClip(page);
    await page.locator('.daw-roll-toolbar').getByRole('combobox', { name: 'grid' }).selectOption({ label: '1/8' });
    await page.locator('.daw-roll-toolbar').getByRole('button', { name: 'Quantize' }).click();
    await expect.poll(async () => (await openNotes(page)).map((x) => x.startTick)).toEqual([0, 480, 960]);
  });

  test('autosave: edits are saved to /api/projects and survive a reload (project in the URL)', async ({ page, api }) => {
    const s0 = await openDaw(page);
    await expect(page).toHaveURL(new RegExp(`project=${s0.project.id}`));
    await page.getByLabel('Project name').fill('E2E autosave song');
    await openClip(page);
    await clickRoll(page, 0, 60);
    await clickRoll(page, 480, 67);
    await expect(page.getByText('saved ✓')).toBeVisible({ timeout: 8000 });
    await expect.poll(async () => {
      const p = await (await api.get(`/api/projects/${s0.project.id}`)).json();
      return [p.name, p.tracks[0].clips[0].notes.map((x: Note) => x.midi)];
    }).toEqual(['E2E autosave song', [60, 67]]);
    const list = (await (await api.get('/api/projects')).json()) as { id: string; name: string }[];
    expect(list.find((p) => p.id === s0.project.id)?.name).toBe('E2E autosave song');
    // unsaved changes are flushed when leaving the page too
    await clickRoll(page, 960, 72);
    await page.reload();
    await expect.poll(async () => (await daw(page)).project.id).toBe(s0.project.id);
    await expect.poll(async () => (await daw(page)).project.tracks[0]!.clips[0]!.notes.map((x) => x.midi)).toEqual([60, 67, 72]);
    await expect(page.getByLabel('Project name')).toHaveValue('E2E autosave song');
    // Open… lists it; unknown ?project= starts a new one with a message (no console error)
    await page.getByRole('button', { name: 'Open…' }).click();
    await expect(page.locator('.daw-project-list').getByRole('button', { name: 'E2E autosave song' })).toBeVisible();
    await goto(page, '/daw?project=does-not-exist');
    await expect(page.getByText('Project "does-not-exist" was not found — started a new one.')).toBeVisible();
  });

  test('export .mid: the download is a valid type-1 SMF with the project’s tempo and notes', async ({ page }) => {
    await openDaw(page);
    await dawDo(page, 'st.mutate((p) => { p.bpm = 90; p.name = "Export me"; })');
    await setNotes(page, 0, [n(60, 0), n(64, 1, 0.5), n(67, 2, 2)]);
    await page.getByLabel('New track instrument').selectOption('drums');
    await page.getByRole('button', { name: '+ Track' }).click();
    await setNotes(page, 1, [n(36, 0), n(38, 1)]);
    const [download] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: 'Export .mid' }).click()]);
    expect(download.suggestedFilename()).toBe('Export me.mid');
    const smf = parseSmf(new Uint8Array(readFileSync((await download.path())!)));
    expect(smf.format).toBe(1);
    expect(smf.ntrks).toBe(3); // conductor + 2 tracks
    const ppq = smf.division;
    expect(smf.tracks.every((t) => t.endOfTrack)).toBe(true);
    expect(Math.round(60_000_000 / smf.tracks[0]!.tempoUsPerQuarter!)).toBe(90);
    expect(smf.tracks[0]!.timeSig).toEqual([4, 4]);
    const scale = ppq / 480;
    expect(smf.tracks[1]!.notes.map((x) => [x.midi, x.startTick / scale, x.durationTicks / scale])).toEqual([[60, 0, 480], [64, 480, 240], [67, 960, 960]]);
    expect(smf.tracks[1]!.program).toBe(0);
    expect(smf.tracks[2]!.notes.map((x) => [x.midi, x.channel])).toEqual([[36, 9], [38, 9]]);
  });

  test('import .mid creates a new project with the file’s tracks and notes', async ({ page }) => {
    await openDaw(page);
    await setNotes(page, 0, [n(60, 0), n(62, 1), n(64, 2), n(65, 3)]);
    await dawDo(page, 'st.mutate((p) => { p.bpm = 132; p.name = "Roundtrip"; })');
    const [download] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: 'Export .mid' }).click()]);
    const bytes = readFileSync((await download.path())!);
    const before = (await daw(page)).project.id;
    await page.locator('.daw-projectbar input[type="file"]').setInputFiles({ name: 'imported.mid', mimeType: 'audio/midi', buffer: bytes });
    await expect.poll(async () => (await daw(page)).project.id).not.toBe(before);
    const s = await daw(page);
    // the SMF's sequence name wins over the file name
    expect(s.project.name).toBe('Roundtrip');
    expect(s.project.bpm).toBe(132);
    const notes = s.project.tracks.flatMap((t) => t.clips.flatMap((c) => c.notes.map((x) => [x.midi, x.startTick + c.startTick])));
    expect(notes).toEqual([[60, 0], [62, 480], [64, 960], [65, 1440]]);
    await expect.poll(async () => (await daw(page)).saveState).toBe('saved');
    // a broken file shows an error instead of crashing
    await page.locator('.daw-projectbar input[type="file"]').setInputFiles({ name: 'broken.mid', mimeType: 'audio/midi', buffer: Buffer.from('not a midi file') });
    await expect(page.getByText(/Could not import/)).toBeVisible();
  });

  test('keyboard shortcuts: Space, Enter, Del, Ctrl+D, Ctrl+A, arrows; not while typing', async ({ page }) => {
    await openDaw(page);
    await unlockAudio(page);
    await openClip(page);
    await clickRoll(page, 0, 60);
    await expect.poll(async () => (await daw(page)).selectedNotes).toEqual([0]);
    await page.keyboard.press('ArrowUp');
    await expect.poll(async () => (await openNotes(page))[0]!.midi).toBe(61);
    await page.keyboard.press('Shift+ArrowUp');
    await expect.poll(async () => (await openNotes(page))[0]!.midi).toBe(73);
    await page.keyboard.press('Shift+ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowRight');
    await expect.poll(async () => (await openNotes(page))[0]).toMatchObject({ midi: 60, startTick: 120 });
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('Control+d');
    await expect.poll(async () => (await openNotes(page)).map((x) => [x.midi, x.startTick])).toEqual([[60, 0], [60, 480]]);
    await page.keyboard.press('Escape');
    await page.keyboard.press('Control+a');
    await expect.poll(async () => (await daw(page)).selectedNotes).toEqual([0, 1]);
    await page.keyboard.press('Delete');
    await expect.poll(() => openNotes(page)).toEqual([]);
    // Space toggles play, Enter stops and returns to the start
    await page.keyboard.press('Space');
    await expect.poll(async () => (await daw(page)).playing).toBe(true);
    await page.keyboard.press('Space');
    await expect.poll(async () => (await daw(page)).playing).toBe(false);
    await page.keyboard.press('Space');
    await expect.poll(async () => (await daw(page)).playhead).toBeGreaterThan(0);
    await page.keyboard.press('Enter');
    await expect.poll(async () => [(await daw(page)).playing, (await daw(page)).playhead]).toEqual([false, 0]);
    // typing a name does not trigger shortcuts
    // (regression BUG-12: clearing the name used to snap back to "Untitled" at once, so it could not be retyped)
    const name = page.getByLabel('Project name');
    await name.fill('');
    await expect(name).toHaveValue('');
    await name.pressSequentially('Rap ');
    await expect(name).toHaveValue('Rap ');
    expect((await daw(page)).playing).toBe(false);
    expect((await daw(page)).recording).toBe(false);
    // an empty name becomes "Untitled" when leaving the field (the server requires a name)
    await name.fill('');
    await name.press('Tab');
    await expect(name).toHaveValue('Untitled');
    await expect.poll(async () => (await daw(page)).saveState).toBe('saved');
  });

  test('live notes from MIDI sound through the armed track’s instrument', async ({ page }) => {
    await openDaw(page);
    await unlockAudio(page);
    await page.getByLabel('New track instrument').selectOption('strings');
    await page.getByRole('button', { name: '+ Track' }).click();
    await clearAudio(page);
    await midi.noteOn(page, 60, 100);
    await midi.noteOff(page, 60);
    await expect.poll(async () => (await audioLog(page)).find((e) => e.kind === 'noteOn')?.instrument).toBe('strings');
  });
});

test.describe('micro-DAW on a phone', () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true });

  test('no horizontal page scroll; transport, tracks and piano roll work with taps', async ({ page }) => {
    await openDaw(page);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow, 'page must not scroll horizontally').toBeLessThanOrEqual(1);
    const transport = page.getByRole('toolbar', { name: 'Transport' });
    for (const name of ['Play', 'Record', 'Loop']) {
      const b = transport.getByRole('button', { name, exact: true });
      await expect(b).toBeVisible();
      const box = (await b.boundingBox())!;
      expect(box.x, `${name} inside the screen`).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width).toBeLessThanOrEqual(390);
      expect(Math.min(box.width, box.height), `${name} is a usable tap target`).toBeGreaterThanOrEqual(24);
    }
    await transport.getByRole('button', { name: 'Play' }).tap();
    await expect.poll(async () => (await daw(page)).playing).toBe(true);
    await transport.getByRole('button', { name: 'Stop' }).tap();
    await expect.poll(async () => (await daw(page)).playing).toBe(false);
    // tap a clip, tap again → piano roll opens
    const clip = page.locator('.daw-clip').first();
    await clip.tap();
    await clip.tap();
    const grid = page.getByRole('application', { name: 'Piano roll grid' });
    await expect(grid).toBeVisible();
    const p = await (await import('./helpers/daw')).rollPoint(page, 0, 60);
    await page.touchscreen.tap(p.x, p.y);
    await expect.poll(async () => (await openNotes(page)).map((x) => x.midi)).toEqual([60]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(1);
  });
});
