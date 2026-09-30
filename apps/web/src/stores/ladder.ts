import { create } from 'zustand';
import type { LadderSkill, LadderStateDTO, SkillState } from '@music/core';
import { api } from '../api/client';

export interface LadderStore {
  state: LadderStateDTO | null;
  load(): Promise<void>;
  /** A lesson's ```ladder block was reached: open rungs 1…n of the skill */
  unlock(skill: LadderSkill, n: number): Promise<void>;
  skill(skill: LadderSkill): SkillState | undefined;
}

/** Ear-ladder state (unlocked / mastered / current rung per skill), shared by lessons, practice and the dashboard. */
export const useLadderStore = create<LadderStore>((set, get) => ({
  state: null,
  async load() {
    try {
      set({ state: await api.ladder() });
    } catch {
      /* offline: keep what we have */
    }
  },
  async unlock(skill, n) {
    const cur = get().skill(skill);
    if (cur && cur.unlocked >= n) return;
    try {
      set({ state: await api.ladderUnlock(skill, n) });
    } catch {
      /* offline */
    }
  },
  skill(skill) {
    return get().state?.skills.find((s) => s.skill === skill);
  },
}));
