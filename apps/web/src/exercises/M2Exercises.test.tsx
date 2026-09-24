import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { generateSet, type ExerciseBlock, type Item } from '@music/core';
import { noteInputBus } from '../input/NoteInputBus';
import { ExerciseShell } from './ExerciseShell';

let fetchMock: ReturnType<typeof vi.fn>;
beforeEach(() => {
  fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true, id: 1 }), { status: 200 }));
  vi.stubGlobal('fetch', fetchMock);
});
afterEach(() => {
  vi.unstubAllGlobals();
  noteInputBus.releaseAll();
});

const status = () => screen.getByRole('status').textContent ?? '';
const firstItem = <T extends ExerciseBlock>(b: T, seed: number) => generateSet(b, seed).items[0] as Item;
/** Emit a note-on at a performance time (ms); the fake engine maps audio time 0 → perf time 0 (= first music tick). */
const hit = (midi: number, ms: number) => noteInputBus.emit({ type: 'on', midi, velocity: 0.8, source: 'midi', time: ms });

describe('timing exercises (performance capture)', () => {
  it('rhythm-tap: count-in, taps from MIDI, scored in time', async () => {
    const block: ExerciseBlock = { id: 'rt', type: 'rhythm-tap', spec: { bpm: 60, seq: 'x:q x:q x:h' } };
    render(<ExerciseShell block={block} lessonId="x" record={false} />);
    await act(async () => {
      fireEvent.click(screen.getByTestId('perf-start'));
    });
    act(() => {
      hit(60, 10);
      hit(60, 1020);
      hit(60, 1990);
    });
    await act(async () => {
      fireEvent.click(screen.getByTestId('perf-stop'));
    });
    expect(status()).toMatch(/Right in time/);
    expect(screen.getByTestId('perf-strip').querySelectorAll('[data-status="ok"]').length).toBe(3);
  });

  it('rhythm-tap: space bar taps, late taps reported', async () => {
    const block: ExerciseBlock = { id: 'rt2', type: 'rhythm-tap', spec: { bpm: 120, seq: 'x:q x:q' } };
    const now = vi.spyOn(performance, 'now');
    render(<ExerciseShell block={block} lessonId="x" record={false} />);
    await act(async () => {
      fireEvent.click(screen.getByTestId('perf-start'));
    });
    act(() => {
      now.mockReturnValue(0);
      fireEvent.keyDown(window, { key: ' ' });
      now.mockReturnValue(500 + 200); // 200 ms late at 120 BPM (tolerance 125 ms)
      fireEvent.keyDown(window, { key: ' ' });
    });
    await act(async () => {
      fireEvent.click(screen.getByTestId('perf-stop'));
    });
    now.mockRestore();
    expect(status()).toMatch(/1 late/);
  });

  it('play-melody: wrong note is marked on the timeline', async () => {
    const block: ExerciseBlock = { id: 'pm', type: 'play-melody', spec: { bpm: 60, seq: 'C4:q D4:q E4:h', showStaff: false } };
    render(<ExerciseShell block={block} lessonId="x" record={false} />);
    await act(async () => {
      fireEvent.click(screen.getByTestId('perf-start'));
    });
    act(() => {
      hit(60, 0);
      hit(63, 1000);
      hit(64, 2000);
    });
    await act(async () => {
      fireEvent.click(screen.getByTestId('perf-stop'));
    });
    expect(status()).toMatch(/1 wrong note/);
    expect(screen.getByTestId('perf-strip').querySelectorAll('[data-status="wrong"]').length).toBe(1);
    expect(screen.getByTestId('perf-start').textContent).toMatch(/Try again/);
  });

  it('play-scale without tempo: untimed, auto-submits after the last note', async () => {
    const block: ExerciseBlock = { id: 'ps', type: 'play-scale', spec: { root: 'C', scale: 'major-pentatonic', direction: 'asc' } };
    render(<ExerciseShell block={block} lessonId="x" record={false} />);
    await act(async () => {
      fireEvent.click(screen.getByTestId('perf-start'));
    });
    act(() => {
      [60, 62, 64, 67, 69, 72].forEach((m, i) => hit(m + 12, i * 100));
    });
    expect(status()).toMatch(/Well played/);
  });
});

describe('ear & theory exercises', () => {
  it('ear-progression: fill the slots from the palette', () => {
    const block: ExerciseBlock = { id: 'ep', type: 'ear-progression', spec: { key: 'C', chords: ['I', 'IV', 'V', 'vi'], length: 3 } };
    const item = firstItem(block, 7) as Item<'ear-progression'>;
    render(<ExerciseShell block={block} lessonId="x" record={false} seed={7} />);
    const palette = screen.getByRole('group', { name: 'Choices' });
    for (const s of item.slots) fireEvent.click([...palette.querySelectorAll('button')].find((b) => b.textContent === s)!);
    fireEvent.click(screen.getByText('Check'));
    expect(status()).toMatch(/Correct/);
  });

  it('roman-analysis shows the chords and grades per slot', () => {
    const block: ExerciseBlock = { id: 'ra', type: 'roman-analysis', spec: { key: 'C', chords: ['C', 'F', 'G7'] } };
    render(<ExerciseShell block={block} lessonId="x" record={false} />);
    expect(screen.getByText('G7')).toBeTruthy();
    const palette = screen.getByRole('group', { name: 'Choices' });
    for (const s of ['I', 'IV', 'V']) fireEvent.click([...palette.querySelectorAll('button')].find((b) => b.textContent === s)!);
    fireEvent.click(screen.getByText('Check'));
    expect(status()).toMatch(/2\/3 right/);
  });

  it('ear-melody play: plays back through the input bus (any octave)', () => {
    const block: ExerciseBlock = { id: 'em', type: 'ear-melody', spec: { key: 'C', degrees: [1, 2, 3], length: 3, answer: 'play' } };
    const item = firstItem(block, 3) as Item<'ear-melody'>;
    render(<ExerciseShell block={block} lessonId="x" record={false} seed={3} />);
    act(() => item.midis.forEach((m, i) => hit(m + 12, i)));
    expect(status()).toMatch(/Correct/);
  });

  it('play-chord: submits the held chord on release', () => {
    const block: ExerciseBlock = { id: 'pc', type: 'play-chord', spec: { chords: ['C'], inversion: 'root' } };
    render(<ExerciseShell block={block} lessonId="x" record={false} />);
    act(() => {
      noteInputBus.noteOn(48, 0.8, 'midi');
      noteInputBus.noteOn(52, 0.8, 'midi');
    });
    act(() => {
      noteInputBus.noteOn(55, 0.8, 'midi');
    });
    act(() => {
      noteInputBus.noteOff(48, 'midi');
      noteInputBus.noteOff(52, 'midi');
      noteInputBus.noteOff(55, 'midi');
    });
    expect(status()).toMatch(/Correct/);
  });

  it('build-chord: toggle keys on the on-screen keyboard, then check', () => {
    const block: ExerciseBlock = { id: 'bc', type: 'build-chord', spec: { chords: ['Am'] } };
    render(<ExerciseShell block={block} lessonId="x" record={false} />);
    for (const m of [57, 60, 64]) {
      fireEvent.pointerDown(screen.getByTestId(`key-${m}`), { pointerId: m });
      fireEvent.pointerUp(screen.getByTestId(`key-${m}`), { pointerId: m });
    }
    fireEvent.click(screen.getByText('Check'));
    expect(status()).toMatch(/Correct/);
  });

  it('ear-rhythm grid: toggling the right cells is correct', () => {
    const block: ExerciseBlock = { id: 'eg', type: 'ear-rhythm', spec: { voices: ['kick', 'snare'], subdivision: '8' } };
    const item = firstItem(block, 11) as Item<'ear-rhythm'>;
    render(<ExerciseShell block={block} lessonId="x" record={false} seed={11} />);
    for (const v of ['kick', 'snare']) item.grid![v]!.forEach((on, i) => on && fireEvent.click(screen.getByLabelText(`${v} step ${i + 1}`)));
    fireEvent.click(screen.getByText('Check'));
    expect(status()).toMatch(/Correct/);
  });

  it('ear-rhythm choose renders notation options', () => {
    const block: ExerciseBlock = { id: 'ec', type: 'ear-rhythm', spec: { subdivision: '8', answer: 'choose', choices: 3 } };
    const item = firstItem(block, 5) as Item<'ear-rhythm'>;
    render(<ExerciseShell block={block} lessonId="x" record={false} seed={5} />);
    const letter = item.choices!.find((c) => c.value === item.answer)!.label;
    fireEvent.click(screen.getByRole('button', { name: `Rhythm ${letter}` }));
    expect(status()).toMatch(/Correct/);
  });

  it('ear-tempo, key-signature, listen and reflect', () => {
    const tempo: ExerciseBlock = { id: 'et', type: 'ear-tempo', spec: { range: [90, 90] } };
    const { unmount } = render(<ExerciseShell block={tempo} lessonId="x" record={false} />);
    fireEvent.change(screen.getByLabelText('BPM'), { target: { value: '92' } });
    fireEvent.click(screen.getByText('Check'));
    expect(status()).toMatch(/Correct/);
    unmount();

    const ks: ExerciseBlock = { id: 'ks', type: 'key-signature', spec: { keys: ['D'], answer: 'count' } };
    const k = render(<ExerciseShell block={ks} lessonId="x" record={false} />);
    fireEvent.click(screen.getByRole('button', { name: '2 ♯' }));
    expect(status()).toMatch(/Correct/);
    k.unmount();

    const listen: ExerciseBlock = { id: 'li', type: 'listen', spec: { example: { title: 'Tune', tracks: [{ instrument: 'piano', seq: 'C4:q' }] } } };
    const l = render(<ExerciseShell block={listen} lessonId="x" record={false} />);
    expect(screen.getByText('Tune')).toBeTruthy();
    fireEvent.click(screen.getByText(/I've listened/));
    expect(status()).toMatch(/Nice listening/);
    l.unmount();

    const reflect: ExerciseBlock = { id: 're', type: 'reflect', spec: { prompt: 'How did it feel?', minWords: 3 } };
    render(<ExerciseShell block={reflect} lessonId="x" record={false} />);
    const save = screen.getByText('Save to journal') as HTMLButtonElement;
    fireEvent.change(screen.getByLabelText('Your reflection'), { target: { value: 'too short' } });
    expect(save.disabled).toBe(true);
    fireEvent.change(screen.getByLabelText('Your reflection'), { target: { value: 'It felt calm and warm' } });
    fireEvent.click(save);
    expect(status()).toMatch(/journal/);
  });

  it('reflect posts the text as the attempt answer', async () => {
    const reflect: ExerciseBlock = { id: 're2', type: 'reflect', spec: { prompt: 'p' } };
    render(<ExerciseShell block={reflect} lessonId="w01-l1-x" />);
    fireEvent.change(screen.getByLabelText('Your reflection'), { target: { value: 'my thoughts' } });
    await act(async () => {
      fireEvent.click(screen.getByText('Save to journal'));
    });
    const posted = fetchMock.mock.calls.filter((c) => String(c[0]).endsWith('/api/progress/attempts')).map((c) => JSON.parse(String((c[1] as RequestInit).body)));
    expect(posted[0]).toMatchObject({ exerciseId: 're2', type: 'reflect', answer: 'my thoughts', correct: true });
  });
});

describe('note-input focus', () => {
  it('only the exercise last interacted with receives played notes', () => {
    const a: ExerciseBlock = { id: 'fa', type: 'build-interval', spec: { intervals: ['P5'], root: 'C4' } };
    const b: ExerciseBlock = { id: 'fb', type: 'build-interval', spec: { intervals: ['M3'], root: 'C4' } };
    render(<><ExerciseShell block={a} lessonId="x" record={false} /><ExerciseShell block={b} lessonId="x" record={false} /></>);
    const secA = screen.getByTestId('exercise-fa');
    const secB = screen.getByTestId('exercise-fb');
    act(() => hit(67, 0)); // first mounted exercise has focus
    expect(secA.querySelector('[role=status]')?.textContent).toMatch(/Correct/);
    expect(secB.querySelector('[role=status]')).toBeNull();
    // the first click on B's on-screen keyboard both focuses B and counts as its answer
    const keyE = secB.querySelector('[data-testid="key-64"]')!;
    fireEvent.pointerDown(keyE, { pointerId: 9 });
    fireEvent.pointerUp(keyE, { pointerId: 9 });
    expect(secB.querySelector('[role=status]')?.textContent).toMatch(/Correct/);
    expect(secB.className).toMatch(/input-active/);
  });
});

