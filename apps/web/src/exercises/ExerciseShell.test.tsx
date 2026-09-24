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

  it('ear-interval renders choices and evaluates', () => {
    const block: ExerciseBlock = { id: 'i', type: 'ear-interval', seed: 7, count: 1, spec: { intervals: ['M3'], direction: 'asc' } };
    render(<ExerciseShell block={block} lessonId="x" record={false} />);
    fireEvent.click(screen.getByRole('button', { name: /M3/ }));
    expect(screen.getByRole('status').textContent).toMatch(/Correct/);
  });
});
