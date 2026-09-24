/** Page-level helpers: navigation, audio gate, audio log, fake MIDI. */
import { expect, type Page } from '@playwright/test';

export interface AudioEntry {
  kind: 'playNote' | 'noteOn' | 'noteOff' | 'schedule' | 'scheduled' | 'volume' | 'liveInstrument';
  notes?: number;
  midi?: number;
  instrument?: string;
  value?: number;
  velocity?: number;
  t: number;
}

export async function goto(page: Page, path: string): Promise<void> {
  await page.goto(path);
  await expect(page.locator('header.topbar')).toBeVisible();
  // let the startup fetches (progress, curriculum, glossary, settings) land: on lesson pages a late progress
  // summary remounts every block (BUG-03), which would otherwise race with the test's first interaction
  await page.waitForLoadState('networkidle');
}

/** Click the "Tap to enable audio" banner and wait until the engine is started. */
export async function unlockAudio(page: Page): Promise<void> {
  const gate = page.locator('.audio-gate');
  if (await gate.isVisible().catch(() => false)) await gate.click();
  await expect(gate).toBeHidden();
}

export async function audioLog(page: Page): Promise<AudioEntry[]> {
  return page.evaluate(() => ((window as unknown as { __MC_E2E__: { audio: AudioEntry[] } }).__MC_E2E__.audio ?? []).slice());
}

export async function clearAudio(page: Page): Promise<void> {
  await page.evaluate(() => {
    (window as unknown as { __MC_E2E__: { audio: unknown[] } }).__MC_E2E__.audio = [];
  });
}

/** Notes that actually sounded (live or scheduled) since the last clear. */
export async function soundedNotes(page: Page): Promise<number[]> {
  return (await audioLog(page)).filter((e) => e.kind === 'playNote' || e.kind === 'noteOn' || e.kind === 'scheduled').map((e) => e.midi!);
}

export async function expectSound(page: Page, opts: { midi?: number[]; kinds?: AudioEntry['kind'][]; min?: number; timeout?: number; message?: string } = {}): Promise<number[]> {
  const kinds = opts.kinds ?? ['playNote', 'noteOn', 'scheduled'];
  let got: number[] = [];
  await expect
    .poll(
      async () => {
        got = (await audioLog(page)).filter((e) => kinds.includes(e.kind)).map((e) => e.midi!);
        if (opts.midi) return opts.midi.every((m) => got.includes(m));
        return got.length >= (opts.min ?? 1);
      },
      { timeout: opts.timeout ?? 8000, message: opts.message ?? `expected audio ${JSON.stringify(opts)}` },
    )
    .toBe(true);
  return got;
}

export const midi = {
  noteOn: (page: Page, note: number, vel = 100, id?: string) => page.evaluate(([n, v, i]) => (window as any).__fakeMidi.noteOn(n, v, i ?? undefined), [note, vel, id ?? null] as const),
  noteOff: (page: Page, note: number, id?: string) => page.evaluate(([n, i]) => (window as any).__fakeMidi.noteOff(n, i ?? undefined), [note, id ?? null] as const),
  cc: (page: Page, c: number, v: number) => page.evaluate(([a, b]) => (window as any).__fakeMidi.cc(a, b), [c, v] as const),
  add: (page: Page, id: string, name: string) => page.evaluate(([a, b]) => (window as any).__fakeMidi.addInput(a, b), [id, name] as const),
  remove: (page: Page, id: string) => page.evaluate((a) => (window as any).__fakeMidi.removeInput(a), id),
  listening: (page: Page) => page.evaluate(() => (window as any).__fakeMidi.listening() as string[]),
  requests: (page: Page) => page.evaluate(() => (window as any).__fakeMidi.requests as number),
};

/** Tap a key with a real pointer (mouse) press + release. */
export async function clickKey(page: Page, scope: ReturnType<Page['locator']> | Page, midiNote: number): Promise<void> {
  const key = scope.locator(`[data-midi="${midiNote}"]`).first();
  await key.scrollIntoViewIfNeeded();
  const box = await key.boundingBox();
  if (!box) throw new Error(`key ${midiNote} not visible`);
  // black keys overlap white ones: press near the top for black, near the bottom for white
  const black = [1, 3, 6, 8, 10].includes(midiNote % 12);
  const x = box.x + box.width / 2;
  const y = box.y + box.height * (black ? 0.4 : 0.85);
  await page.mouse.move(x, y);
  await page.mouse.down();
  await page.mouse.up();
}

/** Is the key shown as held (aria-pressed)? */
export function keyLocator(scope: ReturnType<Page['locator']> | Page, midiNote: number) {
  return scope.locator(`[data-midi="${midiNote}"]`).first();
}
