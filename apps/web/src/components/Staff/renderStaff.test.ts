import { describe, expect, it } from 'vitest';
import { autoClef, renderStaff } from './renderStaff';
import { parseSeqDetailed } from '@music/core';

describe('renderStaff (VexFlow)', () => {
  it('renders notes, chords, rests, dots, triplets and ties into bars', () => {
    const el = document.createElement('div');
    document.body.appendChild(el);
    const h = renderStaff(el, {
      seq: '>C4:q D4:q E4:q F4:q | [C4 E4 G4]:h r:q C4:8 D4:8 | C4:8t D4:8t E4:8t F4:q. G4:8~ G4:q | Bb4:w',
      key: 'F', timeSig: '4/4', width: 700, highlight: 2,
    });
    expect(h).toBeGreaterThan(0);
    expect(el.querySelector('svg')).toBeTruthy();
    expect(el.querySelectorAll('.vf-stavenote').length).toBeGreaterThanOrEqual(15);
    el.remove();
  });
  it('picks clefs automatically', () => {
    expect(autoClef(parseSeqDetailed('C2:q E2:q').items)).toBe('bass');
    expect(autoClef(parseSeqDetailed('kick:q snare:q').items)).toBe('percussion');
    expect(autoClef(parseSeqDetailed('C5:q').items)).toBe('treble');
  });
});
