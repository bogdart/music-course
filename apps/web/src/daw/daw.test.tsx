import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { projectFromEnvelope, trackNotes, type Project } from '@music/core';
import { deleteSelection, duplicateSelection, quantizeSelection, stampChord, transposeSelection } from './actions';
import { DawEmbed } from './DawEmbed';
import { parseSnippetText } from './io';
import { createDawStore, edits } from './store';
import { buildSnippet } from './transport';

const tpl = (): Project => projectFromEnvelope({ bpm: 100, key: 'C', tracks: [{ instrument: 'piano', seq: 'C4:q D4:q E4:q F4:q' }, { instrument: 'bass', seq: 'C2:w' }] });

function storeWith(p = tpl()) {
  const s = createDawStore('test-' + Math.random());
  s.getState().load(p);
  const clip = s.getState().project.tracks[0]!.clips[0]!;
  s.getState().set({ openClipId: clip.id });
  return s;
}

describe('DAW store', () => {
  it('mutate / undo / redo', () => {
    const s = storeWith();
    s.getState().mutate((p) => { p.bpm = 140; });
    expect(s.getState().project.bpm).toBe(140);
    s.getState().undo();
    expect(s.getState().project.bpm).toBe(100);
    s.getState().redo();
    expect(s.getState().project.bpm).toBe(140);
  });
  it('gestures make one undo step', () => {
    const s = storeWith();
    s.getState().beginGesture();
    for (let i = 0; i < 5; i++) s.getState().mutate((p) => { p.bpm += 1; }, { history: false });
    expect(s.getState().project.bpm).toBe(105);
    s.getState().undo();
    expect(s.getState().project.bpm).toBe(100);
  });
  it('tracks and clips', () => {
    const s = storeWith();
    s.getState().mutate((p) => { edits.addTrack(p, 'drums'); });
    expect(s.getState().project.tracks.map((t) => t.instrument)).toEqual(['piano', 'bass', 'drums']);
    const clipId = s.getState().project.tracks[0]!.clips[0]!.id;
    s.getState().set({ selectedClipId: clipId, openClipId: null });
    duplicateSelection(s);
    const clips = s.getState().project.tracks[0]!.clips;
    expect(clips).toHaveLength(2);
    expect(clips[1]!.startTick).toBe(clips[0]!.lengthTicks);
    s.getState().undo();
    expect(s.getState().project.tracks[0]!.clips).toHaveLength(1);
  });
  it('note actions: transpose, duplicate, quantize, delete, chord stamp', () => {
    const s = storeWith();
    const notes = () => s.getState().project.tracks[0]!.clips[0]!.notes;
    s.getState().set({ selectedNotes: [0, 1] });
    transposeSelection(s, 12);
    expect(notes().map((n) => n.midi)).toEqual([72, 74, 64, 65]);
    duplicateSelection(s);
    expect(notes()).toHaveLength(6);
    expect(notes()[4]!.startTick).toBe(960);
    expect(s.getState().selectedNotes).toEqual([4, 5]);
    deleteSelection(s);
    expect(notes()).toHaveLength(4);
    s.getState().mutate((p) => { p.tracks[0]!.clips[0]!.notes[0]!.startTick = 50; });
    s.getState().set({ selectedNotes: [0], grid: 480 });
    quantizeSelection(s, 1);
    expect(notes()[0]!.startTick).toBe(0);
    s.getState().set({ chordText: 'vi', selectedNotes: [] });
    expect(stampChord(s, 1920, 60, 480)).toBeNull();
    expect(notes().slice(-3).map((n) => n.midi)).toEqual([57, 60, 64]);
    s.getState().set({ chordText: 'Hxx' });
    expect(stampChord(s, 0, 60)).toMatch(/Unknown chord/);
  });
});

describe('playback snippet', () => {
  it('honours mute/solo, master volume and ranges', () => {
    const p = tpl();
    p.tracks[1]!.mute = true;
    let snip = buildSnippet(p, { from: 0, master: 0.5 });
    expect(snip.tracks).toHaveLength(1);
    expect(snip.tracks[0]!.volume).toBeCloseTo(0.4);
    p.tracks[1]!.mute = false;
    p.tracks[1]!.solo = true;
    snip = buildSnippet(p, { from: 0 });
    expect(snip.tracks.map((t) => t.instrument)).toEqual(['bass']);
    p.tracks[1]!.solo = false;
    snip = buildSnippet(p, { from: 480, to: 1440 });
    expect(snip.tracks[0]!.events.map((e) => [e.midi, e.startTick])).toEqual([[62, 0], [64, 480]]);
    expect(snip.tracks[1]!.events).toHaveLength(0);
  });
});

describe('snippet loading', () => {
  it('parses envelopes and bare seqs', () => {
    const p = parseSnippetText('{"bpm":80,"key":"G","tracks":[{"instrument":"bass","seq":"G2:h D2:h"}]}');
    expect(p.bpm).toBe(80);
    expect(trackNotes(p.tracks[0]!)).toHaveLength(2);
    expect(parseSnippetText('C4:q E4:q').tracks[0]!.instrument).toBe('piano');
    expect(() => parseSnippetText('{"tracks":[{"instrument":"kazoo","seq":""}]}')).toThrow(/instrument/);
    expect(() => parseSnippetText('H9:q')).toThrow();
  });
});

describe('<DawEmbed>', () => {
  it('renders the template, runs checks and submits', () => {
    const template = projectFromEnvelope({ bpm: 100, key: 'C', tracks: [{ instrument: 'piano', seq: 'C4:q D4:q E4:q G4:q' }] }, { minBars: 1 });
    let submitted: unknown = null;
    render(
      <DawEmbed storeKey="embed-test" projectId="task-x" template={template} persist={false}
        checks={[{ kind: 'in-key', key: 'C', track: 0 }, { kind: 'ends-on', degree: 1, track: 0 }, { kind: 'custom', id: 'listen', note: 'Listen back' }]}
        onSubmit={(a) => (submitted = a)} />,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByText(/1\/3 checks passed/)).toBeTruthy();
    expect(screen.getByText(/ends on degree 1/i)).toBeTruthy();
    fireEvent.click(screen.getByRole('checkbox', { name: /Listen back/ }));
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(screen.getByText(/2\/3 checks passed/)).toBeTruthy();
    expect((submitted as { selfChecks: Record<string, boolean> }).selfChecks).toEqual({ listen: true });
    // the piano roll opened on the first clip
    expect(screen.getByLabelText('Piano roll grid')).toBeTruthy();
  });
});
