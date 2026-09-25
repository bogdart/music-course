/** DAW helpers: read the zustand store through the e2e hook, geometry of the piano roll, transport clock. */
import { expect, type Locator, type Page } from '@playwright/test';

export interface Note { midi: number; startTick: number; durationTicks: number; velocity: number }
export interface Clip { id: string; name: string; startTick: number; lengthTicks: number; notes: Note[] }
export interface Track { id: string; name: string; instrument: string; clips: Clip[]; volume: number; pan: number; mute: boolean; solo: boolean }
export interface Project { id: string; name: string; bpm: number; timeSig: { num: number; den: number }; key?: string; tracks: Track[]; loop?: { startTick: number; endTick: number } }
export interface DawSnapshot {
  project: Project; playing: boolean; recording: boolean; countingIn: boolean; selectedNotes: number[]; openClipId: string | null;
  selectedClipId: string | null; selectedTrackId: string | null; armedTrackId: string | null; saveState: string; past: number; future: number;
  loopOn: boolean; metronome: boolean; countIn: number; inputQuantize: number; rollZoomX: number; rollRowH: number; playhead: number; persistent: boolean;
}

export async function daw(page: Page, key = 'main'): Promise<DawSnapshot> {
  return page.evaluate((k) => {
    const s = (window as any).__MC_E2E__.daw?.[k]?.getState();
    if (!s) throw new Error(`no DAW store "${k}"`);
    const pick = ['project', 'playing', 'recording', 'countingIn', 'selectedNotes', 'openClipId', 'selectedClipId', 'selectedTrackId', 'armedTrackId', 'saveState', 'loopOn', 'metronome', 'countIn', 'inputQuantize', 'rollZoomX', 'rollRowH', 'playhead', 'persistent'];
    const out: Record<string, unknown> = Object.fromEntries(pick.map((x) => [x, s[x]]));
    out.past = s.past.length;
    out.future = s.future.length;
    return JSON.parse(JSON.stringify(out));
  }, key);
}

/** Notes of the open clip. */
export async function openNotes(page: Page, key = 'main'): Promise<Note[]> {
  // (open clip of store `key`)
  const s = await daw(page, key);
  for (const t of s.project.tracks) for (const c of t.clips) if (c.id === s.openClipId) return c.notes;
  throw new Error('no open clip');
}

/** Run a store action in the page, e.g. `st => st.set({grid: 480})`. */
export async function dawDo(page: Page, fn: string, key = 'main'): Promise<void> {
  await page.evaluate(([k, src]) => {
    const st = (window as any).__MC_E2E__.daw[k].getState();
    // eslint-disable-next-line no-new-func
    new Function('st', src)(st);
  }, [key, fn] as const);
}

/** A fresh, empty project on /daw (New), waiting until it is saved on the server. */
export async function newProject(page: Page): Promise<DawSnapshot> {
  const before = await daw(page).catch(() => null);
  await page.getByRole('button', { name: 'New', exact: true }).click();
  await expect.poll(async () => (await daw(page)).project.id).not.toBe(before?.project.id ?? '');
  await expect.poll(async () => (await daw(page)).saveState).toBe('saved');
  return daw(page);
}

/** Open clip `clipIndex` of track `trackIndex` in the piano roll (select, then tap again). */
export async function openClip(page: Page, trackIndex = 0, clipIndex = 0): Promise<Locator> {
  const clip = page.locator('.daw-arr-row').nth(trackIndex + 1).locator('.daw-clip').nth(clipIndex);
  await clip.dblclick();
  const grid = page.getByRole('application', { name: 'Piano roll grid' });
  await expect(grid).toBeVisible();
  return grid;
}

export interface RollScope {
  /** DAW store key (default "main") */
  key?: string;
  /** element containing the workspace (default: the page) — e.g. a lesson's daw-task section */
  scope?: Locator;
}

/** Viewport point of (tick, row) in the piano roll. Row = the key element for `midi` (piano) or lane name (drums). */
export async function rollPoint(page: Page, tick: number, row: number | string, o: RollScope = {}): Promise<{ x: number; y: number }> {
  const s = await daw(page, o.key ?? 'main');
  const root = o.scope ?? page.locator('body');
  const keys = root.locator('.daw-roll-keys .daw-key');
  const rowEl = typeof row === 'string' ? keys.filter({ hasText: new RegExp(`^${row}$`) }).first() : keys.nth(108 - row);
  const pxPerTick = s.rollZoomX / 480;
  // bring the (tick, row) point into the visible part of the roll scroller and of the viewport — only when needed, so
  // consecutive points of a drag stay valid
  await rowEl.evaluate(
    (el, { tick, pxPerTick }) => {
      const sc = el.closest('.daw-roll-scroll') as HTMLElement;
      const grid = sc.querySelector('svg.daw-roll-grid') as SVGSVGElement;
      const r = el.getBoundingClientRect();
      const sr = sc.getBoundingClientRect();
      const header = document.querySelector('header.topbar')?.getBoundingClientRect().bottom ?? 0;
      // sticky ruler (22 px) on top and velocity lane (64 px) at the bottom of the scroller
      const top = Math.max(sr.top + 22, header) + 6;
      const bottom = Math.min(sr.bottom - 64, window.innerHeight) - 6;
      if (r.top < top || r.bottom > bottom) {
        sc.scrollTop += r.top + r.height / 2 - (sr.top + 22 + (sr.height - 86) / 2);
        const r2 = el.getBoundingClientRect();
        if (r2.top < header + 8 || r2.bottom > window.innerHeight - 8) window.scrollBy(0, r2.top + r2.height / 2 - window.innerHeight / 2);
      }
      const gx = grid.getBoundingClientRect().left + tick * pxPerTick;
      const left = r.right + 8;
      const right = sr.right - 8;
      if (gx < left || gx > right) sc.scrollLeft += gx - (left + right) / 2;
    },
    { tick, pxPerTick },
  );
  const kb = (await rowEl.boundingBox())!;
  const gb = (await root.getByRole('application', { name: 'Piano roll grid' }).boundingBox())!;
  return { x: gb.x + tick * pxPerTick + 1, y: kb.y + kb.height / 2 };
}

export async function clickRoll(page: Page, tick: number, row: number | string, opts: { button?: 'left' | 'right' } & RollScope = {}) {
  const p = await rollPoint(page, tick, row, opts);
  await page.mouse.click(p.x, p.y, opts.button ? { button: opts.button } : {});
}

export async function dragRoll(page: Page, from: { tick: number; row: number | string }, to: { tick: number; row: number | string }, o: RollScope = {}) {
  const a = await rollPoint(page, from.tick, from.row, o);
  const b = await rollPoint(page, to.tick, to.row, o);
  await page.mouse.move(a.x, a.y);
  await page.mouse.down();
  await page.mouse.move((a.x + b.x) / 2, (a.y + b.y) / 2, { steps: 4 });
  await page.mouse.move(b.x, b.y, { steps: 4 });
  await page.mouse.up();
}

/** performance.now() of the transport's start tick (after the count-in) once playback/recording runs. */
export async function transportClock(page: Page): Promise<{ startPerf: number; bpm: number; fromTick: number }> {
  let v: { startPerf: number; bpm: number; fromTick: number } | null = null;
  await expect
    .poll(async () => {
      v = await page.evaluate(() => (window as any).__MC_E2E__.transport ?? null);
      return !!v;
    }, { message: 'DAW transport started', intervals: [50] })
    .toBe(true);
  return v!;
}

/** Schedule fake-MIDI notes inside the page at `startPerf + beat offsets`. */
export async function playMidiAt(page: Page, startPerf: number, bpm: number, notes: { midi: number; beat: number; holdBeats: number }[]): Promise<void> {
  await page.evaluate(
    ({ startPerf, bpm, notes }) => {
      const fm = (window as any).__fakeMidi;
      const beat = 60_000 / bpm;
      for (const n of notes) {
        setTimeout(() => fm.noteOn(n.midi, 100), Math.max(0, startPerf + n.beat * beat - performance.now()));
        setTimeout(() => fm.noteOff(n.midi), Math.max(0, startPerf + (n.beat + n.holdBeats) * beat - performance.now()));
      }
    },
    { startPerf, bpm, notes },
  );
}
