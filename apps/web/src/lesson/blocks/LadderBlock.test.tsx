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
