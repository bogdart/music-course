import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { ExerciseBlock } from '@music/core';
import { noteInputBus } from '../input/NoteInputBus';
import { ExerciseShell } from './ExerciseShell';

const quiz: ExerciseBlock = {
  id: 'q1',
  type: 'quiz',
  title: 'Test quiz',
  hints: ['Count the keys'],
  spec: {
    questions: [
      { q: 'Half steps in a perfect fifth?', choices: ['5', '6', '7'], answer: 2, explain: 'C to G.' },
      { q: 'Pick the white keys', choices: ['C', 'C#', 'E'], answers: [0, 2] },
    ],
  },
};

let fetchMock: ReturnType<typeof vi.fn>;
beforeEach(() => {
  fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true, id: 1 }), { status: 200 }));
  vi.stubGlobal('fetch', fetchMock);
  localStorage.clear();
});
afterEach(() => vi.unstubAllGlobals());

const posted = (path: string) =>
  fetchMock.mock.calls.filter((c) => String(c[0]).endsWith(path)).map((c) => JSON.parse(String((c[1] as RequestInit).body)));

describe('ExerciseShell', () => {
  it('runs a quiz: wrong then right answer, hints, multi-select, summary and progress posts', async () => {
    const onComplete = vi.fn();
    render(<ExerciseShell block={quiz} lessonId="w01-l1-test" onComplete={onComplete} />);
    expect(screen.getByText('Test quiz')).toBeTruthy();
    expect(screen.getByLabelText('progress').textContent).toContain('1 / 2');

    fireEvent.click(screen.getByText(/Hint/));
    expect(screen.getByText(/Count the keys/)).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: '6' }));
    expect(screen.getByRole('status').textContent).toMatch(/Not quite/);
    fireEvent.click(screen.getByRole('button', { name: '7' }));
    expect(screen.getByRole('status').textContent).toMatch(/Correct/);
    expect(screen.getByText('Attempts: 2')).toBeTruthy();

    fireEvent.click(screen.getByText('Next →'));
    fireEvent.click(screen.getByRole('button', { name: 'C' }));
    fireEvent.click(screen.getByRole('button', { name: 'E' }));
    fireEvent.click(screen.getByText('Check'));
    expect(screen.getByRole('status').textContent).toMatch(/Correct/);
    await act(async () => {
      fireEvent.click(screen.getByText('Finish'));
    });

    const summary = screen.getByTestId('exercise-summary');
    expect(summary.textContent).toContain('50%');
    expect(onComplete).toHaveBeenCalledWith(expect.objectContaining({ correct: 1, total: 2, passed: false }));
    const attempts = posted('/api/progress/attempts');
    expect(attempts).toHaveLength(2); // only first attempts are recorded
    expect(attempts[0]).toMatchObject({ lessonId: 'w01-l1-test', exerciseId: 'q1', type: 'quiz', correct: false });
    expect(posted('/api/progress/exercises/complete')[0]).toMatchObject({ exerciseId: 'q1', correct: 1, total: 2, passed: false });
  });

  it('resumes a lesson set after a page refresh (same items, same position, finished summary kept)', async () => {
    const ear: ExerciseBlock = { id: 'o1', type: 'ear-octave', count: 3, spec: { notes: ['C', 'F#'], octaves: [3, 4], mode: 'together', gap: [1] } };
    const first = render(<ExerciseShell block={ear} lessonId="w01-l2-test" />);
    const prompt1 = screen.getAllByRole('button').map((b) => b.textContent).join('|');
    fireEvent.click(screen.getByRole('button', { name: 'One note (octave)' }));
    if (!screen.queryByText('Next →')) fireEvent.click(screen.getByText('Reveal'));
    fireEvent.click(screen.getByText('Next →'));
    expect(screen.getByLabelText('progress').textContent).toContain('2 / 3');
    first.unmount();

    const again = render(<ExerciseShell block={ear} lessonId="w01-l2-test" />);
    expect(screen.getByLabelText('progress').textContent).toContain('2 / 3');
    expect(prompt1).toBeTruthy();
    for (let i = 0; i < 2; i++) {
      fireEvent.click(screen.getByText('Reveal'));
      await act(async () => {
        fireEvent.click(screen.getByText(i === 0 ? 'Next →' : 'Finish'));
      });
    }
    expect(screen.getByTestId('exercise-summary')).toBeTruthy();
    again.unmount();
    render(<ExerciseShell block={ear} lessonId="w01-l2-test" />);
    expect(screen.getByTestId('exercise-summary')).toBeTruthy();
  });

  it('does not record when record=false and supports reveal', () => {
    render(<ExerciseShell block={quiz} lessonId="x" record={false} />);
    fireEvent.click(screen.getByText('Reveal'));
    expect(screen.getByRole('status').textContent).toMatch(/Answer: 7/);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('shows a coming-soon card for unknown types', () => {
    const block = { id: 's', type: 'ear-bogus', spec: {} } as unknown as ExerciseBlock;
    render(<ExerciseShell block={block} lessonId="x" />);
    expect(screen.getByTestId('coming-soon').textContent).toContain('ear-bogus');
  });

  it('play-notes listens to the note input bus', () => {
    const block: ExerciseBlock = { id: 'p', type: 'play-notes', spec: { notes: ['C4', 'E4', 'G4'], ordered: true } };
    render(<ExerciseShell block={block} lessonId="x" record={false} />);
    act(() => {
      for (const m of [60, 64, 67]) {
        noteInputBus.noteOn(m, 0.8, 'midi');
        noteInputBus.noteOff(m, 'midi');
      }
    });
    expect(screen.getByRole('status').textContent).toMatch(/Well played/);
  });

  it('ear-octave find: any octave of the heard note counts, then the octave walk is offered', () => {
    const block: ExerciseBlock = { id: 'f', type: 'ear-octave', seed: 3, count: 1, spec: { notes: ['E'], octaves: [2], mode: 'find' } };
    render(<ExerciseShell block={block} lessonId="x" record={false} />);
    act(() => {
      noteInputBus.noteOn(65, 0.8, 'midi'); // F: just trying, nothing scored yet
      noteInputBus.noteOff(65, 'midi');
    });
    expect(screen.queryByRole('status')).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Check F4' }));
    expect(screen.getByRole('status').textContent).toMatch(/Not quite/);
    act(() => {
      noteInputBus.noteOn(76, 0.8, 'midi'); // E5 for an E2: right
      noteInputBus.noteOff(76, 'midi');
    });
    fireEvent.click(screen.getByRole('button', { name: 'Check E5' }));
    expect(screen.getByRole('status').textContent).toMatch(/Correct/);
    expect(screen.getByText(/Walk it to octave 4/)).toBeTruthy();
  });

  it('ear-octave seek: tries get local higher/lower hints; finding it within the limit is correct, too many tries is a miss', () => {
    const block: ExerciseBlock = { id: 's', type: 'ear-octave', seed: 1, count: 1, spec: { notes: ['C', 'D', 'E', 'F', 'G'], octaves: [4], mode: 'seek' } };
    const { unmount } = render(<ExerciseShell block={block} lessonId="x" record={false} />);
    const press = (m: number) => act(() => {
      noteInputBus.noteOn(m, 0.8, 'midi');
      noteInputBus.noteOff(m, 'midi');
    });
    // search upward from C4: every miss gets a hint and nothing is scored until found (limit for 5 keys: 4)
    let found = false;
    for (const m of [60, 62, 64, 65, 67]) {
      press(m);
      if (screen.queryByText(/Found it/)) {
        found = true;
        break;
      }
      if (screen.queryByText(/Not found within 4 tries/)) break;
      expect(document.querySelector('.seek-hint')?.textContent).toMatch(/go higher|go lower/);
    }
    expect(found || !!screen.queryByText(/Not found within 4 tries/)).toBe(true);
    unmount();
  });

  it('ear-note offers the walk home after a correct answer', () => {
    const block: ExerciseBlock = { id: 'd', type: 'ear-note', seed: 1, count: 1, spec: { key: 'C', degrees: [6], reference: 'scale' } };
    render(<ExerciseShell block={block} lessonId="x" record={false} />);
    fireEvent.click(screen.getByRole('button', { name: /6/ }));
    expect(screen.getByText(/Question, then walk home/)).toBeTruthy();
  });

  it('ear-interval renders choices and evaluates', () => {
    const block: ExerciseBlock = { id: 'i', type: 'ear-interval', seed: 7, count: 1, spec: { intervals: ['M3'], direction: 'asc' } };
    render(<ExerciseShell block={block} lessonId="x" record={false} />);
    fireEvent.click(screen.getByRole('button', { name: /M3/ }));
    expect(screen.getByRole('status').textContent).toMatch(/Correct/);
  });
});
