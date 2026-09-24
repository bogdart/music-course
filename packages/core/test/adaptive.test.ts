import { describe, expect, it } from 'vitest';
import { adaptBlock, describeAdaptation, generateSet, nextLevel, type ExerciseBlock } from '../src/index.js';

const earInterval: ExerciseBlock = { id: 'a', type: 'ear-interval', spec: { intervals: ['M2', 'M3', 'P5'], direction: 'asc' } };

describe('adaptive difficulty', () => {
  it('levels move with rolling accuracy', () => {
    expect(nextLevel(0, [1, 1, 1])).toBe(0); // not enough items
    expect(nextLevel(0, [1, 1, 1, 1, 1, 0.8])).toBe(1);
    expect(nextLevel(0, [0, 1, 0, 0.5, 0, 1])).toBe(-1);
    expect(nextLevel(1, [1, 0.5, 1, 0.5, 1, 0.5])).toBe(1);
    expect(nextLevel(3, [1, 1, 1, 1, 1])).toBe(3);
  });
  it('widens and narrows option sets', () => {
    const w = adaptBlock(earInterval, 2);
    expect((w.spec as { intervals: string[] }).intervals).toHaveLength(4);
    expect((w.spec as { direction: string }).direction).toBe('mixed');
    const n = adaptBlock(earInterval, -1);
    expect((n.spec as { intervals: string[] }).intervals).toEqual(['M2', 'M3']);
    expect(adaptBlock(earInterval, 0)).toBe(earInterval);
    expect(describeAdaptation(earInterval, w).join(' ')).toMatch(/intervals/);
  });
  it('adds inversions / octaves / length and adapted blocks still generate', () => {
    const blocks: ExerciseBlock[] = [
      { id: 'b', type: 'ear-chord', spec: { qualities: ['maj', 'min'] } },
      { id: 'c', type: 'ear-note', spec: { key: 'C', degrees: [1, 3, 5] } },
      { id: 'd', type: 'ear-progression', spec: { key: 'C', chords: ['I', 'IV', 'V'], length: 3 } },
      { id: 'e', type: 'ear-bass', spec: { key: 'C', chords: ['I', 'IV', 'V'] } },
      { id: 'f', type: 'ear-melody', spec: { key: 'C', degrees: [1, 2, 3], length: 3 } },
      { id: 'g', type: 'ear-rhythm', spec: { subdivision: '8' } },
      { id: 'h', type: 'ear-chord-root', spec: { qualities: ['maj'] } },
      { id: 'i', type: 'ear-scale', spec: { scales: ['major', 'natural-minor'] } },
      { id: 'j', type: 'ear-octave', spec: { notes: ['C'], octaves: [3, 4], mode: 'which-octave' } },
      { id: 'k', type: 'quiz', spec: { questions: [{ q: 'x', choices: ['a', 'b'], answer: 0 }] } },
    ];
    for (const b of blocks) {
      for (const lvl of [-2, -1, 1, 2, 3]) {
        const a = adaptBlock(b, lvl);
        expect(() => generateSet(a, 1)).not.toThrow();
      }
    }
    const chord = adaptBlock(blocks[0]!, 2).spec as { qualities: string[]; inversions?: number[] };
    expect(chord.qualities.length).toBe(3);
    expect(chord.inversions).toEqual([0, 1]);
    expect((adaptBlock(blocks[1]!, 2).spec as { octaves: number[] }).octaves.length).toBe(2);
    expect((adaptBlock(blocks[3]!, 1).spec as { length: number }).length).toBe(5);
    expect(adaptBlock(blocks[9]!, 2)).toEqual(blocks[9]);
  });
});
