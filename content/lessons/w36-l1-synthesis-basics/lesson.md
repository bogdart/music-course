---
id: w36-l1-synthesis-basics
title: Synthesis Basics
week: 36
order: 1
phase: p4
duration_min: 40
goals:
  - Explain a synth sound as oscillator → filter → envelope
  - Choose between the app's pad, pluck, lead, bass and strings by attack and sustain
  - "Voice the minor dance loop i–VI–III–VII (Am–F–C–G) for pad, pluck and bass"
prerequisites: [w35-l4-counter-melody-daw, w24-l1-frequency-roles-and-doubling]
tags: [production, synthesis, electronic, sound-design]
---

# Synthesis Basics

Every synth sound — from a warm pad to a razor lead — is built from three stages. Knowing them lets you pick and arrange sounds on purpose.

1. **Oscillator** — makes the raw tone. A *sine* is pure and round; a *sawtooth* is bright and buzzy (full of harmonics); a *square* is hollow, like a clarinet.
2. **Filter** — removes some of those harmonics. A low-pass filter with a low cutoff makes a sound darker and softer; opening it makes it brighter.
3. **Envelope** — shapes loudness over time with [[ADSR]]: Attack (how fast it starts), Decay (how fast it falls), Sustain (level while held), Release (how long it rings after you let go).

## The app's synths as presets

The app's instruments are fixed presets — you can't turn knobs yet — but each one is a clear recipe:

| Instrument | Attack | Sustain | Best role |
|------------|--------|---------|-----------|
| pad | slow | long, soft release | harmony bed, atmosphere |
| pluck | instant | none — decays fast | arps, rhythmic chords |
| lead | fast | full | melodies, hooks |
| bass | fast | full, filtered dark | low end |
| strings | medium | full | swells, counter-lines |

Because you can't change the envelope, **note length is your envelope control**. A pad chord held for a whole bar blooms; the same chord as a 16th is barely there. A pluck ignores length almost entirely — it's always short.

```example
{
  "title": "Same Am chord: pad, pluck, strings, epiano",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "pad", "seq": "[A3 C4 E4]:w | r:w | r:w | r:w |" },
    { "instrument": "pluck", "seq": "r:w | [A3 C4 E4]:w | r:w | r:w |" },
    { "instrument": "strings", "seq": "r:w | r:w | [A3 C4 E4]:w | r:w |" },
    { "instrument": "epiano", "seq": "r:w | r:w | r:w | [A3 C4 E4]:w |" }
  ],
  "show": ["pianoroll"]
}
```

### Try it

Two questions tell every synth apart: **how does it start** (a click, or a fade-in?) and **how long does it stay** (rings on, or dies away?).

1. Play the example above. For each bar, clap once when you first hear the chord. With the pad your clap comes *late* — the sound swells in; with the pluck it's exactly on the beat.
2. Play it again and count slowly "one, two, three, four" through each bar. Stop counting when the sound is gone. The pluck is gone by "two"; the pad and strings last the whole bar.

**Check:** you should get *pad* = slow start, long; *pluck* = instant, short; *strings* = medium start, long.

**If you can't hear it yet:** in the DAW, put the Am chord on a pad track as a whole note, then as a single 16th, and play each twice. The 16th pad barely sounds at all — that's the slow attack you couldn't hear in isolation.

## The dance loop

Countless dance tracks loop **Am – F – C – G**. You know it from week 13 as the minor loop **i – VI – III – VII** in A minor (the same four chords are vi–IV–I–V in C major; which one sounds like home decides the name). Voice it with close shapes that barely move, let the pad hold, and let the pluck repeat on the off-beats.

```example
{
  "title": "Am – F – C – G: pad bed + pluck chords",
  "bpm": 124, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "pad", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w |" },
    { "instrument": "pluck", "seq": "r:8 [A4 C5 E5]:8 r:8 [A4 C5 E5]:8 r:8 [A4 C5 E5]:8 r:8 [A4 C5 E5]:8 | r:8 [A4 C5 F5]:8 r:8 [A4 C5 F5]:8 r:8 [A4 C5 F5]:8 r:8 [A4 C5 F5]:8 | r:8 [G4 C5 E5]:8 r:8 [G4 C5 E5]:8 r:8 [G4 C5 E5]:8 r:8 [G4 C5 E5]:8 | r:8 [G4 B4 D5]:8 r:8 [G4 B4 D5]:8 r:8 [G4 B4 D5]:8 r:8 [G4 B4 D5]:8 |" },
    { "instrument": "bass", "seq": "A1:w | F1:w | C2:w | G1:w |" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

## Drills

```exercise
{
  "id": "e1-synth-quiz",
  "type": "quiz",
  "title": "Oscillator, filter, envelope",
  "passScore": 0.7,
  "spec": { "questions": [
    { "q": "Which stage makes a sound darker by removing high harmonics?", "choices": ["oscillator", "low-pass filter", "attack", "release"], "answer": 1 },
    { "q": "A pad fades in slowly because of its…", "choices": ["long attack", "short decay", "square wave", "low cutoff"], "answer": 0 },
    { "q": "The brightest raw waveform of these is…", "choices": ["sine", "sawtooth", "triangle"], "answer": 1 },
    { "q": "You want a short, bouncy chord stab. Best app instrument?", "choices": ["pad", "strings", "pluck", "bass"], "answer": 2 }
  ] }
}
```

```exercise
{
  "id": "e2-listen-roles",
  "type": "listen",
  "title": "Which synth is which?",
  "instructions": "The same Am chord twice, on two different instruments.",
  "passScore": 0.7,
  "spec": {
    "example": { "bpm": 100, "timeSig": "4/4", "key": "Am", "hidden": true, "tracks": [ { "instrument": "pluck", "seq": "[A3 C4 E4]:w | r:w |" }, { "instrument": "pad", "seq": "r:w | [A3 C4 E4]:w |" } ] },
    "questions": [
      { "q": "Bar 1 sound: attack and sustain?", "choices": ["instant attack, no sustain", "slow attack, long sustain"], "answer": 0 },
      { "q": "Bar 2 sound is best used for…", "choices": ["arpeggios", "a harmony bed", "a kick drum", "a bass line"], "answer": 1 }
    ]
  }
}
```

```exercise
{
  "id": "e3-play-loop",
  "type": "play-chord",
  "title": "Play the EDM loop voicings",
  "count": 8, "passScore": 0.7,
  "spec": { "chords": ["Am", "F", "C", "G"], "inversion": "any", "sequence": true, "bpm": 70 }
}
```

```exercise
{
  "id": "e4-play-minor",
  "type": "play-scale",
  "title": "A natural minor",
  "count": 6, "passScore": 0.7,
  "spec": { "root": "A", "scale": "natural-minor", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 100, "metronome": true }
}
```

**Building the loop:**

1. **Bass first:** one whole note per bar, A1 F1 C2 G1, twice.
2. **Pad:** copy the whole-note voicings from the example (they barely move). Loop bass + pad: it should already sound like a finished bed.
3. **Pluck:** one bar of off-beat chords (rest, chord, rest, chord…), then copy it and change the notes for each chord.
4. **The swap test:** move the pad's whole notes to the pluck track and the off-beats to the pad. Listen once, then undo.

**Judge it by ear:** in the right version the pad is a soft carpet and the pluck bounces on top; swapped, the pluck chords vanish and the pad off-beats smear. **If you're stuck:** get bass + pad playing for all 8 bars before touching the pluck.

```exercise
{
  "id": "e5-daw-sound-roles",
  "type": "daw-task",
  "title": "One loop, three roles",
  "instructions": "Write Am–F–C–G (one bar each, twice = 8 bars) three ways at once: pad holds whole-note chords, pluck plays the chords in an off-beat 8th pattern, bass plays roots. Then try swapping pad and pluck parts and listen to how wrong it sounds. About 20 minutes.",
  "spec": {
    "template": { "bpm": 124, "key": "Am", "timeSig": "4/4", "tracks": [ { "instrument": "pad", "seq": "" }, { "instrument": "pluck", "seq": "" }, { "instrument": "bass", "seq": "" } ] },
    "task": "8 bars: pad bed, pluck off-beats and bass roots on i–VI–III–VII in A minor.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["pad", "pluck", "bass"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "A", "scale": "natural-minor", "allowPassing": false },
      { "kind": "uses-rhythm", "values": ["w"], "minDistinct": 1, "track": 0 },
      { "kind": "uses-rhythm", "values": ["8"], "minDistinct": 1, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["i", "VI", "III", "VII"], "barsPerChord": 1, "minRatio": 0.9, "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

## Ear review

**Method** (see each drill's *How to do it* box): for chord colour, listen to the whole sound first — bright, dark, tense, stretched or rich — and name that before any theory. For the bass in a band, tap your foot with the deepest sound and find its notes one by one. Both drills run at your current rungs.

```ladder
{ "skill": "chords", "unlocks": 15, "intro": "Chord colours at your level: a pad is the clearest way to hear them." }
```

```ladder
{ "skill": "roots", "unlocks": 15, "intro": "Bass lines in a full mix, like the loop you just built; the drill runs at your current roots rung." }
```

## Between lessons

In three songs you like, pick one sound and answer the two questions: click or fade-in? rings on or dies away? That's enough to choose pad, pluck or lead when you recreate it.
