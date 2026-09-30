import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { LADDER_SKILLS, skillState, type LadderStateDTO, type RungResult } from '@music/core';
import { Placement } from './Placement';
import { useLadderStore } from '../stores/ladder';

const perfect: RungResult[] = Array.from({ length: 10 }, () => ({ correct: true, session: 1 }));
beforeEach(() => {
  useLadderStore.setState({ state: null });
  const st: LadderStateDTO = { session: 1, skills: LADDER_SKILLS.map((k) => skillState(k, 0, k === 'pitch' ? { 'pitch-1': perfect } : {})) };
  vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify(st), { status: 200 })));
});
afterEach(() => vi.unstubAllGlobals());

describe('placement', () => {
  it('lists every skill and starts at the first rung not yet mastered', async () => {
    render(<MemoryRouter><Placement /></MemoryRouter>);
    expect(await screen.findByText('1/10 mastered', { exact: false })).toBeTruthy();
    fireEvent.click(screen.getAllByRole('button', { name: 'Test me' })[0]!); // pitch
    expect(await screen.findByText(/Rung 2 of 10: Higher or lower: closer/)).toBeTruthy();
    expect(screen.getByText(/All 10 right to move on/)).toBeTruthy();
  });
});
