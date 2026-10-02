import { render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { LADDER_SKILLS, skillState, type LadderStateDTO } from '@music/core';
import { LadderBlock } from './LadderBlock';
import { useLadderStore } from '../../stores/ladder';

let unlocked: Record<string, number> = {};
let fetchMock: ReturnType<typeof vi.fn>;
const st = (): LadderStateDTO => ({ session: 1, skills: LADDER_SKILLS.map((k) => skillState(k, unlocked[k] ?? 0, {})) });
beforeEach(() => {
  unlocked = {};
  useLadderStore.setState({ state: null });
  fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
    if (String(url).endsWith('/api/ladder/unlock')) {
      const b = JSON.parse(String(init?.body)) as { skill: string; unlocks: number };
      unlocked[b.skill] = Math.max(unlocked[b.skill] ?? 0, b.unlocks);
    }
    return new Response(JSON.stringify(st()), { status: 200 });
  });
  vi.stubGlobal('fetch', fetchMock);
});
afterEach(() => vi.unstubAllGlobals());

describe('ladder block', () => {
  it('unlocks its rungs and drills the learner’s current rung, explaining the gap', async () => {
    render(<LadderBlock data={{ skill: 'octave', unlocks: 4, intro: 'Octaves, step by step.' }} />);
    await waitFor(() => expect(screen.getByText(/rung 1 of 14/)).toBeTruthy());
    expect(unlocked.octave).toBe(4);
    expect(screen.getByText(/opens the ladder up to rung 4/)).toBeTruthy();
    expect(screen.getByText('Octaves, step by step.')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'One note (octave)' })).toBeTruthy();
  });
});

describe('ladder block when the rungs are already the learner\'s', () => {
  it('shows a done line instead of a drill, with an optional practice', async () => {
    const { fireEvent } = await import('@testing-library/react');
    const known = Array.from({ length: 10 }, () => ({ correct: true, session: 1 }));
    useLadderStore.setState({ state: null });
    fetchMock.mockImplementation(async () =>
      new Response(JSON.stringify({ session: 1, skills: LADDER_SKILLS.map((k) => skillState(k, k === 'pitch' ? 2 : 0, k === 'pitch' ? { 'pitch-1': known, 'pitch-2': known } : {})) }), { status: 200 }));
    render(<LadderBlock data={{ skill: 'pitch', unlocks: 2 }} />);
    await waitFor(() => expect(screen.getByText(/already yours/)).toBeTruthy());
    expect(screen.queryByRole('button', { name: 'Higher' })).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'practise anyway' }));
    expect(screen.getByRole('button', { name: 'Higher' })).toBeTruthy();
  });
});
