import { create } from 'zustand';
import type { CurriculumDTO, GlossaryTerm, ProgressSummaryDTO } from '@music/core';
import { slugifyTerm } from '@music/content-schema/glossary';
import { api } from '../api/client';
import { useAudioStore } from './audio';

export interface ProgressState {
  summary: ProgressSummaryDTO | null;
  curriculum: CurriculumDTO | null;
  glossary: Record<string, GlossaryTerm>;
  loading: boolean;
  error: string | null;
  /** Fetch progress + curriculum (+ glossary once) */
  refresh(): Promise<void>;
  loadGlossary(): Promise<void>;
}

/** Same slug rule as the server/validator (@music/content-schema). */
export function glossarySlug(term: string): string {
  return slugifyTerm(term);
}

/** Resolve `[[text]]` against the glossary map (case-insensitive, tolerant of plurals) — mirrors content-schema lookupTerm. */
export function findGlossaryTerm(map: Record<string, GlossaryTerm>, text: string): GlossaryTerm | undefined {
  const s = slugifyTerm(text);
  return map[s] ?? map[s.replace(/es$/, '')] ?? map[s.replace(/s$/, '')] ?? map[s + 's'];
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  summary: null,
  curriculum: null,
  glossary: {},
  loading: false,
  error: null,
  async refresh() {
    set({ loading: true });
    try {
      const [summary, curriculum] = await Promise.all([api.progress(), api.curriculum()]);
      set({ summary, curriculum, loading: false, error: null });
      useAudioStore.getState().setServer(true);
    } catch (e) {
      set({ loading: false, error: (e as Error).message });
      useAudioStore.getState().setServer(false, (e as Error).message);
    }
    if (Object.keys(get().glossary).length === 0) void get().loadGlossary();
  },
  async loadGlossary() {
    try {
      const { terms } = await api.glossary();
      const map: Record<string, GlossaryTerm> = {};
      for (const t of terms) {
        map[t.slug] = t;
        map[glossarySlug(t.term)] = t;
        for (const a of t.aliases) map[glossarySlug(a)] = t;
      }
      set({ glossary: map });
    } catch {
      /* optional */
    }
  },
}));
