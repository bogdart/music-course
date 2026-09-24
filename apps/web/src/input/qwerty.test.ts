import { describe, expect, it, vi } from 'vitest';
import { NoteInputBus } from './NoteInputBus';
import { attachQwerty, midiToQwerty, qwertyToMidi } from './qwerty';

describe('QWERTY map', () => {
  it('maps the lower row to white keys C..C of the base octave', () => {
    expect(['z', 'x', 'c', 'v', 'b', 'n', 'm', ','].map((k) => qwertyToMidi(k, 4))).toEqual([60, 62, 64, 65, 67, 69, 71, 72]);
  });
  it('maps s d g h j to the black keys', () => {
    expect(['s', 'd', 'g', 'h', 'j'].map((k) => qwertyToMidi(k, 4))).toEqual([61, 63, 66, 68, 70]);
  });
  it('maps the upper row one octave up', () => {
    expect(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i'].map((k) => qwertyToMidi(k, 4))).toEqual([72, 74, 76, 77, 79, 81, 83, 84]);
    expect(['2', '3', '5', '6', '7'].map((k) => qwertyToMidi(k, 4))).toEqual([73, 75, 78, 80, 82]);
  });
  it('respects the octave and ignores unknown keys', () => {
    expect(qwertyToMidi('z', 3)).toBe(48);
    expect(qwertyToMidi('Z', 5)).toBe(72);
    expect(qwertyToMidi('a', 4)).toBeNull();
    expect(midiToQwerty(61, 4)).toBe('s');
  });
});

describe('attachQwerty', () => {
  it('emits note on/off, shifts octave with - and =, ignores repeats and text inputs', () => {
    const bus = new NoteInputBus();
    const events: string[] = [];
    bus.subscribe((e) => events.push(`${e.type}:${e.midi}:${e.source}`));
    let octave = 4;
    const setOctave = vi.fn((o: number) => (octave = o));
    const detach = attachQwerty(bus, { getOctave: () => octave, setOctave });
    const key = (type: 'keydown' | 'keyup', k: string, init: KeyboardEventInit = {}) => window.dispatchEvent(new KeyboardEvent(type, { key: k, ...init }));
    key('keydown', 'z');
    key('keydown', 'z', { repeat: true });
    expect(bus.held()).toEqual([60]);
    key('keyup', 'z');
    key('keydown', '=');
    expect(setOctave).toHaveBeenCalledWith(5);
    key('keydown', 'z');
    key('keyup', 'z');
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'x', bubbles: true }));
    expect(events).toEqual(['on:60:qwerty', 'off:60:qwerty', 'on:72:qwerty', 'off:72:qwerty']);
    detach();
    input.remove();
  });
});

describe('NoteInputBus', () => {
  it('tracks held notes across sources', () => {
    const bus = new NoteInputBus();
    bus.noteOn(60, 1, 'midi');
    bus.noteOn(60, 1, 'screen');
    bus.noteOff(60, 'midi');
    expect(bus.held()).toEqual([60]);
    bus.releaseAll();
    expect(bus.held()).toEqual([]);
  });
});
