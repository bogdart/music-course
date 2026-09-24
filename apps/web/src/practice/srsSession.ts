/**
 * Practice-session helpers shared by the Practice page and the lesson warm-up: adaptive difficulty per SRS card
 * (level + rolling item scores, kept in localStorage — per device, not synced) and grading/review.
 */
import { adaptBlock, describeAdaptation, gradeFromScore, nextLevel, type ExerciseBlock, type SetSummary, type SrsCardDTO } from '@music/core';
import { api } from '../api/client';

const KEY = 'mc.practice.adaptive.v1';

interface CardState {
  level: number;
  recent: number[];
}

function load(): Record<string, CardState> {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Record<string, CardState>) : {};
  } catch {
    return {};
  }
}

function save(all: Record<string, CardState>): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(all));
  } catch {
    /* private mode */
  }
}

export function cardState(card: Pick<SrsCardDTO, 'key'>): CardState {
  return load()[card.key] ?? { level: 0, recent: [] };
}

/** The card's exercise block adapted to its current level, plus a description of the changes. */
export function adaptedBlock(card: SrsCardDTO): { block: ExerciseBlock; level: number; changes: string[] } {
  const { level } = cardState(card);
  const block = adaptBlock(card.block, level);
  return { block, level, changes: level ? describeAdaptation(card.block, block) : [] };
}

/** Record item scores for a card, move its level by rolling accuracy (>85% widen, <60% narrow). */
export function recordScores(card: Pick<SrsCardDTO, 'key'>, scores: number[]): { from: number; to: number; accuracy: number } {
  const all = load();
  const st = all[card.key] ?? { level: 0, recent: [] };
  const recent = [...st.recent, ...scores].slice(-10);
  const to = nextLevel(st.level, recent);
  // after a level change start a fresh window so one good run does not jump two levels
  all[card.key] = { level: to, recent: to === st.level ? recent : [] };
  save(all);
  const accuracy = recent.length ? recent.reduce((a, b) => a + b, 0) / recent.length : 0;
  return { from: st.level, to, accuracy };
}

/** Grade the set and post the SRS review. */
export async function reviewCard(card: SrsCardDTO, summary: SetSummary): Promise<number> {
  const grade = gradeFromScore(summary.score);
  try {
    await api.srsReview(card.id, grade);
  } catch {
    /* offline: the card stays due */
  }
  return grade;
}

export function levelLabel(level: number): string {
  if (level === 0) return 'standard';
  return level > 0 ? `harder +${level}` : `easier ${level}`;
}
