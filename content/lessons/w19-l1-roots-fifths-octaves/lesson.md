---
id: w19-l1-roots-fifths-octaves
title: "Bass Lines: Roots, Fifths, Octaves and Approach Notes"
week: 19
order: 1
phase: p3
duration_min: 45
goals:
  - Write bass lines from roots, fifths and octaves over any progression
  - Lead into chord changes with diatonic and chromatic approach notes
  - Hear the root movement of a progression and play it back
prerequisites: [w18-l3-chorus-hook-daw]
tags: [bass, groove, arrangement, ear]
songs: []
---

# Bass Lines: Roots, Fifths, Octaves and Approach Notes

The bass does two jobs at once. **Harmonically**, it tells the ear what the chord is — the bass note is heard as the root (you drilled this in week 11). **Rhythmically**, it glues the drums to the harmony. A great bass line is usually *simple*: most of the time it plays the root on beat 1.

## The three safe notes

For any chord, three bass notes always work: the **root**, the **fifth** and the **octave** of the root. Changing between them adds movement without changing the harmony.

- **Root pulse** — eighth-note roots. Driving pop and rock.
- **[[Root-fifth bass]]** — root on 1, fifth on 2 or 3. Country, folk, ballads.
- **Octaves** — jumping root to octave. Disco and dance.

## Approach notes

An [[approach note]] is played on the last beat before a chord change and sits one step above or below the *next* root. It makes the change feel inevitable. Diatonic approach (a scale step) sounds smooth; chromatic approach (a half step, even outside the key) sounds jazzy and pulling. This is the seed of the [[walking bass]].

Listen to one progression (C–Am–F–G) with four bass lines, four bars each:

```example
{
  "title": "Four bass lines on C-Am-F-G: root pulse, root-fifth, octaves, approach notes",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "bass", "seq": "C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 | A1:8 A1:8 A1:8 A1:8 A1:8 A1:8 A1:8 A1:8 | F1:8 F1:8 F1:8 F1:8 F1:8 F1:8 F1:8 F1:8 | G1:8 G1:8 G1:8 G1:8 G1:8 G1:8 G1:8 G1:8 | C2:q G2:q C2:q G2:q | A1:q E2:q A1:q E2:q | F1:q C2:q F1:q C2:q | G1:q D2:q G1:q D2:q | C2:8 C3:8 C2:8 C3:8 C2:8 C3:8 C2:8 C3:8 | A1:8 A2:8 A1:8 A2:8 A1:8 A2:8 A1:8 A2:8 | F1:8 F2:8 F1:8 F2:8 F1:8 F2:8 F1:8 F2:8 | G1:8 G2:8 G1:8 G2:8 G1:8 G2:8 G1:8 G2:8 | C2:q. C2:8 C2:q B1:q | A1:q. A1:8 A1:q G1:q | F1:q. F1:8 F1:q F#1:q | G1:q. G1:8 G1:q B1:q" },
    { "instrument": "piano", "seq": "[C3 E3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w | [B2 D3 G3]:w" },
    { "instrument": "drums", "seq": "kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

In the last four bars: B1 approaches A from above, G1 approaches F from above, F#1 approaches G chromatically from below, and B1 leads back up to C.

```exercise
{
  "id": "bass-note-quiz",
  "type": "quiz-input",
  "title": "Find the bass notes",
  "passScore": 0.8,
  "spec": { "questions": [
    { "q": "What is the fifth of A (for an Am root-fifth line)?", "answer": ["E"], "kind": "note" },
    { "q": "What is the fifth of F?", "answer": ["C"], "kind": "note" },
    { "q": "The next chord is G. Name the chromatic approach note from a half step below.", "answer": ["F#", "Gb"], "kind": "note" },
    { "q": "The next chord is Dm in C major. Name the diatonic approach note one step above its root.", "answer": ["E"], "kind": "note" },
    { "q": "The fifth of Bb?", "answer": ["F"], "kind": "note" },
    { "q": "The next chord is C. Name the chromatic approach note from a half step above.", "answer": ["C#", "Db"], "kind": "note" }
  ] }
}
```

```exercise
{
  "id": "play-root-fifth",
  "type": "play-melody",
  "title": "Play a root-fifth line (one octave up for your keyboard)",
  "passScore": 0.75,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "C3:q G3:q C3:q G3:q | A2:q E3:q A2:q E3:q | F2:q C3:q F2:q C3:q | G2:q D3:q G2:q B2:q", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[C4 E4 G4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w | [B3 D4 G4]:w" } }
}
```

```exercise
{
  "id": "ear-bass-intervals",
  "type": "ear-interval",
  "title": "Root to fifth, fourth or octave?",
  "count": 10,
  "passScore": 0.8,
  "spec": { "intervals": ["P4", "P5", "P8"], "direction": "mixed", "root": "random", "range": ["C2", "C4"] }
}
```

```exercise
{
  "id": "ear-bass-roots",
  "type": "ear-bass",
  "title": "Play the bass roots",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "random", "chords": ["I", "IV", "V", "vi"], "answer": "play" }
}
```

```exercise
{
  "id": "daw-root-fifth",
  "type": "daw-task",
  "title": "Root-fifth bass in G",
  "spec": {
    "template": { "bpm": 90, "key": "G", "tracks": [
      { "instrument": "piano", "seq": "[G3 B3 D4]:w | [G3 B3 E4]:w | [G3 C4 E4]:w | [F#3 A3 D4]:w | [G3 B3 D4]:w | [G3 B3 E4]:w | [G3 C4 E4]:w | [F#3 A3 D4]:w" },
      { "instrument": "drums", "seq": "kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q" },
      { "instrument": "bass", "seq": "" }
    ] },
    "task": "G - Em - C - D, twice. Write a root-fifth bass line: root on beats 1 and 3, fifth on 2 and 4 (above or below). Stay between E1 and C3.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "G", "scale": "major", "track": 2 },
      { "kind": "chord-tones-on-beats", "beats": [1, 2, 3, 4], "progression": ["I", "vi", "IV", "V", "I", "vi", "IV", "V"], "barsPerChord": 1, "minRatio": 0.9, "track": 2 },
      { "kind": "range", "low": "E1", "high": "C3", "track": 2 },
      { "kind": "note-count", "min": 32, "max": 32, "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "daw-approach-notes",
  "type": "daw-task",
  "title": "Add approach notes",
  "spec": {
    "template": { "bpm": 90, "key": "G", "tracks": [
      { "instrument": "piano", "seq": "[G3 B3 D4]:w | [G3 B3 E4]:w | [G3 C4 E4]:w | [F#3 A3 D4]:w | [G3 B3 D4]:w | [G3 B3 E4]:w | [G3 C4 E4]:w | [F#3 A3 D4]:w" },
      { "instrument": "bass", "seq": "G1:q D2:q G1:q D2:q | E1:q B1:q E1:q B1:q | C2:q G2:q C2:q G2:q | D2:q A2:q D2:q A2:q | G1:q D2:q G1:q D2:q | E1:q B1:q E1:q B1:q | C2:q G2:q C2:q G2:q | D2:q A2:q D2:q A2:q" }
    ] },
    "task": "Keep beat 1 of every bar on the root, but change beat 4 of each bar into an approach note to the next root - at least two diatonic and two chromatic ones. Bar 8 leads back to G.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "G", "scale": "major", "allowPassing": true, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "vi", "IV", "V", "I", "vi", "IV", "V"], "barsPerChord": 1, "minRatio": 1.0, "track": 1 },
      { "kind": "range", "low": "E1", "high": "C3", "track": 1 },
      { "kind": "custom", "id": "approach-on-beat-4", "note": "Self-check: beat 4 of each bar is a step or half step from the next bar's root." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
