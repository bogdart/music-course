import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { LADDER_SKILLS, skillState, type ExerciseBlock, type LadderStateDTO, type SrsCardDTO } from '@music/core';
import { Practice } from './Practice';
import { Warmup } from '../lesson/Warmup';

const quizBlock: ExerciseBlock = { id: 'q', type: 'quiz', srs: true, spec: { questions: [1, 2, 3, 4, 5].map((n) => ({ q: `Pick A (${n})`, choices: ['A', 'B'], answer: 0 })) } };
const card = (id: number, block: ExerciseBlock, extra: Partial<SrsCardDTO> = {}): SrsCardDTO => ({
  id, key: `k${id}`, type: block.type, lessonId: 'w01-l1-x', exerciseId: block.id, block, ease: 2.5, interval: 1, reps: 1, lapses: 0, dueSession: 1, ...extra,
});

let cards: SrsCardDTO[] = [];
let unlocked: Record<string, number> = {};
const ladderState = (): LadderStateDTO => ({ session: 3, skills: LADDER_SKILLS.map((k) => skillState(k, unlocked[k] ?? 0, {})) });
let fetchMock: ReturnType<typeof vi.fn>;
beforeEach(() => {
  unlocked = {};
  localStorage.clear();
  sessionStorage.clear();
  fetchMock = vi.fn(async (url: string) => {
    const u = String(url);
    if (u.includes('/api/ladder')) return new Response(JSON.stringify(ladderState()), { status: 200 });
    if (u.includes('/api/srs/due')) return new Response(JSON.stringify({ session: 3, cards }), { status: 200 });
    if (u.includes('/api/progress') && !u.includes('attempts') && !u.includes('complete')) return new Response(JSON.stringify(null), { status: 200 });
    return new Response(JSON.stringify({ ok: true, card: {} }), { status: 200 });
  });
  vi.stubGlobal('fetch', fetchMock);
});
afterEach(() => vi.unstubAllGlobals());

async function answerQuizItems(n: number) {
  for (let i = 0; i < n; i++) {
    fireEvent.click(screen.getByRole('button', { name: 'A' }));
    await act(async () => {
      fireEvent.click(screen.getByText(i + 1 < n ? 'Next →' : 'Finish'));
    });
  }
}

async function toCards() {
  fireEvent.click(await screen.findByText('Review cards'));
}

describe('Practice page', () => {
  it('starts with an ear-ladder session at the learner\'s current rungs', async () => {
    unlocked = { octave: 3, degrees: 1 };
    render(<MemoryRouter><Practice /></MemoryRouter>);
    await screen.findByText(/Set 1 of 2/);
    // octave is furthest behind (3 open rungs) → first
    expect(screen.getByText(/Octaves · rung 1/)).toBeTruthy();
    fireEvent.click(screen.getByText('end session'));
    expect(await screen.findByTestId('ladder-summary')).toBeTruthy();
  });

  it('says so when no ladder is open yet', async () => {
    render(<MemoryRouter><Practice /></MemoryRouter>);
    await screen.findByText(/No ear-training ladders are open yet/);
  });

  it('runs due + new cards, adapts the level and shows a session summary', { timeout: 30_000 }, async () => {
    cards = [card(1, quizBlock), card(2, { ...quizBlock, id: 'q2' }, { reps: 0, lastSession: undefined } as Partial<SrsCardDTO>)];
    render(<MemoryRouter><Practice /></MemoryRouter>);
    await toCards();
    await screen.findByText(/Card 1 of 2/);
    expect(fetchMock.mock.calls.some((c) => String(c[0]).includes('newLimit=5'))).toBe(true);
    expect(screen.getByText('standard')).toBeTruthy();
    await answerQuizItems(5);
    await screen.findByText(/Card 2 of 2/, undefined, { timeout: 8000 });
    expect(screen.getByText('new')).toBeTruthy();
    await answerQuizItems(5);
    await waitFor(() => expect(screen.getByTestId('session-summary')).toBeTruthy(), { timeout: 8000 });
    expect(screen.getByTestId('session-summary').textContent).toMatch(/Session done — 2 card\(s\) reviewed/);
    expect(screen.getByTestId('session-summary').textContent).toMatch(/100%/);
    const reviews = fetchMock.mock.calls.filter((c) => String(c[0]).endsWith('/api/srs/review'));
    expect(reviews).toHaveLength(2);
    // 5/5 correct → rolling accuracy > 85% → level up
    expect(JSON.parse(localStorage.getItem('mc.practice.adaptive.v1')!)).toMatchObject({ k1: { level: 1 } });
  });

  it('applies a stored difficulty level to the card', async () => {
    localStorage.setItem('mc.practice.adaptive.v1', JSON.stringify({ k5: { level: 1, recent: [] } }));
    cards = [card(5, { id: 'i', type: 'ear-interval', spec: { intervals: ['M2', 'M3'] } })];
    render(<MemoryRouter><Practice /></MemoryRouter>);
    await toCards();
    const tag = await screen.findByText('harder +1');
    expect(tag.getAttribute('title')).toMatch(/intervals/);
    // the widened set (3 intervals) is offered
    expect(screen.getAllByRole('button').filter((b) => /^(M2|M3|m2|m3) · /.test(b.textContent ?? '')).length).toBe(3);
  });

  it('empty deck message', async () => {
    cards = [];
    render(<MemoryRouter><Practice /></MemoryRouter>);
    await toCards();
    await screen.findByText(/Nothing due right now/);
  });
});

describe('lesson warm-up', () => {
  it('is hidden when no ladder is open', async () => {
    const { container } = render(<Warmup lessonId="w02-l1-x" />);
    await waitFor(() => expect(fetchMock).toHaveBeenCalled());
    expect(container.textContent).toBe('');
  });
  it('offers the most-behind skill at its current rung, runs and can be ended; remembers completion for the visit', async () => {
    unlocked = { octave: 2 };
    const { unmount } = render(<Warmup lessonId="w02-l1-x" />);
    expect((await screen.findByTestId('warmup')).textContent).toMatch(/Octaves, rung 1/);
    fireEvent.click(screen.getByText('Start warm-up'));
    expect(screen.getByRole('button', { name: 'One note (octave)' })).toBeTruthy();
    fireEvent.click(screen.getByText('end warm-up'));
    unmount();
    render(<Warmup lessonId="w02-l1-x" />);
    await waitFor(() => expect(fetchMock.mock.calls.length).toBeGreaterThan(1));
    expect(screen.queryByText('Start warm-up')).toBeNull();
  });
  it('can be skipped', async () => {
    unlocked = { octave: 2 };
    render(<Warmup lessonId="w02-l2-x" />);
    fireEvent.click(await screen.findByText('Skip'));
    expect(screen.queryByTestId('warmup')).toBeNull();
  });
});
