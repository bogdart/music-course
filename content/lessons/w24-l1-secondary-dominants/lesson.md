---
id: w24-l1-secondary-dominants
title: Secondary Dominants
week: 24
order: 1
phase: p3
duration_min: 45
goals:
  - Build V/V, V/vi, V/IV and V/ii in any major key
  - Use a secondary dominant to make the next chord feel like a small arrival
  - Recognise the out-of-key note (often a raised note) that signals a secondary dominant
prerequisites: [w23-l3-riff-and-solo-daw]
tags: [harmony, secondary-dominants, chromaticism, ear]
songs:
  - { title: "Yesterday", composer: "Lennon-McCartney (The Beatles)", public_domain: false }
  - { title: "Something", composer: "George Harrison (The Beatles)", public_domain: false }
  - { title: "Creep", composer: "Radiohead (with Albert Hammond, Mike Hazlewood)", public_domain: false }
---

# Secondary Dominants

You know that V7 pulls strongly to I (G7 → C). What if you want that same pull towards a *different* chord — say Am or G? Borrow **its** dominant. A [[secondary dominant]] is the V7 of a chord that isn't I. It's written **V/x** ("five of x").

## How to build one

1. Pick the target chord (e.g. Am, the vi in C).
2. Go up a perfect fifth from its root: A → **E**.
3. Build a **dominant 7th** there: E G# B D = **E7**. That's V/vi.

| Target | In C | Secondary dominant | Out-of-key note |
|---|---|---|---|
| V (G) | V/V | **D7** (D F# A C) | F# |
| vi (Am) | V/vi | **E7** (E G# B D) | G# |
| IV (F) | V/IV | **C7** (C E G Bb) | Bb |
| ii (Dm) | V/ii | **A7** (A C# E G) | C# |

That out-of-key note is the fingerprint. Your ear hears it as a new *leading tone* — G# pulls up to A, F# up to G, C# up to D — or, for C7, Bb falls down to A. For a moment, the target chord feels like a home of its own: that is [[tonicisation]].

## Hear it

Compare a plain C–Am–F–C–G–C with this version: E7 before Am and D7 before G. The melody sings the new leading tones (G# in bar 2, F# in bar 6).

```example
{
  "title": "C - E7 - Am - F - C - D7 - G7 - C",
  "bpm": 84, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "E4:q G4:q C5:q G4:q | G#4:h. B4:q | A4:h C5:h | A4:q G4:q F4:h | E4:q G4:q C5:q E5:q | F#5:h. D5:q | D5:q B4:q G4:q F4:q | E4:w" },
    { "instrument": "piano", "seq": "[C3 E3 G3]:w | [B2 D3 G#3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w | [C3 E3 G3]:w | [A2 C3 F#3]:w | [B2 D3 F3]:w | [C3 E3 G3]:w" },
    { "instrument": "bass", "seq": "C2:w | E2:w | A1:w | F1:w | C2:w | D2:w | G1:w | C2:w" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

Chain several and you get the "ragtime" progression, each dominant resolving to the next: E7 → A7 → D7 → G7 → C.

```chords
{ "key": "C", "bars": ["C", "E7", "A7", "D7", "G7", "C"], "roman": true, "play": true, "bpm": 90 }
```

**By reference:** "Yesterday" (The Beatles, F) moves Em7 → A7 → Dm in its opening line — A7 is V/vi. "Something" (George Harrison) goes C → Cmaj7 → C7 → F — the C7 is V/IV. "Creep" (Radiohead, G) uses G → B → C → Cm: B major is V/vi, but it moves to C instead of Em — a surprise resolution.

```exercise
{
  "id": "find-secondary",
  "type": "quiz-input",
  "title": "Find the secondary dominant",
  "passScore": 0.8,
  "spec": { "questions": [
    { "q": "In G major, what is V/V? (chord symbol)", "answer": ["A7"], "kind": "text" },
    { "q": "In G major, what is V/vi? (chord symbol)", "answer": ["B7"], "kind": "text" },
    { "q": "In F major, what is V/IV? (chord symbol)", "answer": ["F7"], "kind": "text" },
    { "q": "In D major, what is V/ii? (chord symbol)", "answer": ["F#7", "Gb7"], "kind": "text" },
    { "q": "Which out-of-key note does E7 add in C major?", "answer": ["G#", "Ab"], "kind": "note" },
    { "q": "In C, D7 resolves to which chord?", "answer": ["G", "G7"], "kind": "text" }
  ] }
}
```

```exercise
{
  "id": "build-sec-doms",
  "type": "build-chord",
  "title": "Build secondary dominants",
  "count": 8,
  "passScore": 0.8,
  "spec": { "chords": ["D7", "E7", "C7", "A7", "B7", "A7", "F7", "F#7"], "root": "given", "prompt": "symbol", "key": "C" }
}
```

```exercise
{
  "id": "play-sec-dom-progression",
  "type": "play-chord",
  "title": "Play the progression",
  "count": 8,
  "passScore": 0.8,
  "spec": { "chords": ["C", "E7", "Am", "F", "C", "D7", "G7", "C"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "ear-dom7-vs-minor",
  "type": "ear-chord",
  "title": "Minor, major or dominant 7th?",
  "instructions": "A secondary dominant often replaces a chord you expect to be minor (Em becomes E7). Train the difference.",
  "count": 10,
  "passScore": 0.75,
  "spec": { "qualities": ["maj", "min", "dom7"], "inversions": [0], "voicing": "close", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "ear-sec-dom-progressions",
  "type": "ear-progression",
  "title": "Hear V/V and V/vi",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "C", "mode": "major", "length": 4, "chords": ["I", "IV", "V", "vi", "V/V", "V/vi"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "daw-add-sec-doms",
  "type": "daw-task",
  "title": "Spice up a progression",
  "spec": {
    "template": { "bpm": 90, "key": "G", "tracks": [
      { "instrument": "piano", "seq": "[G3 B3 D4]:w | [E3 G3 B3]:w | [C3 E3 G3]:w | [D3 F#3 A3]:w | [G3 B3 D4]:w | [E3 G3 B3]:w | [A3 C4 E4]:w | [D3 F#3 A3]:w" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "The progression is G Em C D | G Em Am D. Add two secondary dominants: in bar 2 play Em for beats 1-2 and G7 (V/IV) for beats 3-4, so it pulls into C; replace bar 6 (Em) with E7 (V/ii), so it pulls into Am. Then write a melody that sings F natural over G7 and G# over E7, and ends on D over the last D chord - open, ready to loop.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "has-tracks", "instruments": ["piano", "lead"] },
      { "kind": "note-count", "min": 8, "max": 40, "track": 1 },
      { "kind": "ends-on", "degree": 5, "track": 1 },
      { "kind": "custom", "id": "sec-doms-placed", "note": "Self-check: G7 on beats 3-4 of bar 2 resolving to C; E7 in bar 6 resolving to Am; the melody uses F natural and G#." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "daw-melody-over-v-of-ii",
  "type": "daw-task",
  "title": "Sing the new leading tone",
  "spec": {
    "template": { "bpm": 84, "key": "C", "tracks": [
      { "instrument": "piano", "seq": "[C3 E3 G3]:w | [A2 C#3 G3]:w | [A2 D3 F3]:w | [B2 D3 F3 G3]:w" },
      { "instrument": "bass", "seq": "C2:w | A1:w | D2:w | G1:w" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "C - A7 - Dm - G7. Write a 4-bar melody where C# (the fingerprint of A7 = V/ii) sits on a strong beat of bar 2 and rises by a half step to D at the start of bar 3. End on G or B over G7.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "V/ii", "ii", "V"], "barsPerChord": 1, "minRatio": 0.75, "track": 2 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": true, "track": 2 },
      { "kind": "max-leap", "semitones": 7, "track": 2 },
      { "kind": "custom", "id": "c-sharp-to-d", "note": "Self-check: a C# in bar 2 moves up to D in bar 3." }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```
