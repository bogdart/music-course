---
id: w03-l3-ode-to-joy-and-daw-melody
title: Ode to Joy and Your First Composed Melody
week: 3
order: 3
phase: p1
duration_min: 50
goals:
  - Play "Ode to Joy" with the right hand in C major
  - Read a melody as scale degrees and hear why it ends where it does
  - Write a 4-bar melody from degrees 1–5 in the DAW
prerequisites: [w03-l2-scale-degrees-and-solfege]
tags: [melody, songs, scale-degrees, daw]
songs:
  - { title: "Ode to Joy (Symphony No. 9, 4th movement)", composer: "Ludwig van Beethoven", public_domain: true }
---

# Ode to Joy

Beethoven's "Ode to Joy" (1824) is one of the most famous melodies ever written, and it uses almost nothing: five neighbouring notes, moving mostly by **step**. That's the lesson hiding inside it — a great melody doesn't need big jumps or many notes. It needs a clear shape and a good ending.

## The tune in degrees

Your right hand sits on C–G (thumb on C, one finger per key), so every finger *is* a degree: thumb = 1, index = 2, middle = 3, ring = 4, little = 5.

```example
{
  "title": "Ode to Joy (Beethoven), C major",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | E4:q. D4:8 D4:h | E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | D4:q. C4:8 C4:h | D4:q D4:q E4:q C4:q | D4:q E4:8 F4:8 E4:q C4:q | D4:q E4:8 F4:8 E4:q D4:q | C4:q D4:q G3:h | E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | D4:q. C4:8 C4:h" } ],
  "show": ["staff", "keyboard"]
}
```

Degrees of the first line: **3 3 4 5 | 5 4 3 2 | 1 1 2 3 | 3 2 2**. Now compare the ends of the first two lines:

- Line 1 ends on **2** — restless. It sounds like a question.
- Line 2 ends on **1** — home. It sounds like the answer.

Same notes, different ending, totally different feeling. That's the power of degrees: you now know *why* the second line feels finished. (In bar 12, the melody dips to a low G — degree 5 below the tonic. Stretch your thumb down, or shift your hand for that one note.)

The long-short rhythm in bars 4 and 8 (`q.` then `8`) is a dotted quarter plus an eighth: hold the first note a bit longer, then hurry to the next. You'll learn the maths next week — for now, copy what you hear.

## Composing with five notes

In the DAW today you'll write your own 4-bar melody with the same tools Beethoven used here: degrees 1–5, mostly steps, ending on 1. Some tips that always work:

- **Start on 1, 3 or 5** — they sound stable.
- Move mostly by step; allow one small leap.
- Use at least two note lengths (quarters and halves) so it breathes.
- **End on 1**, ideally with a long note. Try ending on 2 first, then fix it — hear the difference.

## Drills

```exercise
{
  "id": "e1",
  "type": "ear-note",
  "title": "1, 2 or 3? (review)",
  "count": 12,
  "passScore": 0.75,
  "spec": { "key": "random", "mode": "major", "degrees": [1, 2, 3], "reference": "cadence", "octaves": [4], "instrument": "piano" }
}
```

```exercise
{
  "id": "e2",
  "type": "quiz-input",
  "title": "Ode to Joy in degrees",
  "spec": { "questions": [
    { "q": "Degrees of bar 1 (E E F G), separated by spaces:", "answer": ["3 3 4 5"], "kind": "text" },
    { "q": "Degrees of bar 3 (C C D E):", "answer": ["1 1 2 3"], "kind": "text" },
    { "q": "Line 1 ends on degree…", "answer": ["2"], "kind": "number" },
    { "q": "Line 2 ends on degree…", "answer": ["1"], "kind": "number" },
    { "q": "The highest degree used in the tune is…", "answer": ["5"], "kind": "number" },
    { "q": "Which finger plays degree 4 (thumb = 1)?", "answer": ["4"], "kind": "number" }
  ] },
  "passScore": 0.8
}
```

```exercise
{
  "id": "e3",
  "type": "play-melody",
  "title": "Ode to Joy, lines 1–2",
  "instructions": "Thumb on C4. Slow and even.",
  "passScore": 0.75,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | E4:q. D4:8 D4:h | E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | D4:q. C4:8 C4:h", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e4",
  "type": "play-melody",
  "title": "Ode to Joy, complete",
  "instructions": "All four lines. Watch for the low G3 in bar 12.",
  "passScore": 0.7,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | E4:q. D4:8 D4:h | E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | D4:q. C4:8 C4:h | D4:q D4:q E4:q C4:q | D4:q E4:8 F4:8 E4:q C4:q | D4:q E4:8 F4:8 E4:q D4:q | C4:q D4:q G3:h | E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | D4:q. C4:8 C4:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 D3 G3]:h [C3 E3 G3]:h | [B2 D3 G3]:w | [C3 E3 G3]:h [B2 D3 G3]:h | [C3 E3 G3]:h [B2 D3 G3]:h | [C3 E3 G3]:h [B2 D3 G3]:h | [C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 D3 G3]:h [C3 E3 G3]:h" } }
}
```

```exercise
{
  "id": "e5",
  "type": "ear-melody",
  "title": "Degrees by ear",
  "instructions": "Four notes using 1, 2 and 3. Enter the degrees.",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "random", "degrees": [1, 2, 3], "length": 4, "rhythm": "quarters", "answer": "degrees" }
}
```

```exercise
{
  "id": "e6",
  "type": "daw-task",
  "title": "A 4-bar melody from degrees 1–5",
  "spec": {
    "template": { "bpm": 90, "key": "C", "tracks": [ { "instrument": "piano", "seq": "" } ] },
    "task": "Write (draw or record) a 4-bar melody in C major using only C D E F G (degrees 1–5). Start on 1, 3 or 5. Move mostly by step. Use both quarter notes and half notes. End on C (degree 1) with a long note. Play it back; then try changing only the last note to D and listen to how it stops sounding finished — then change it back.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false },
      { "kind": "range", "low": "C4", "high": "G4" },
      { "kind": "note-count", "min": 8, "max": 16 },
      { "kind": "starts-on", "degrees": [1, 3, 5] },
      { "kind": "ends-on", "degree": 1 },
      { "kind": "uses-rhythm", "values": ["q", "h"], "minDistinct": 2 },
      { "kind": "max-leap", "semitones": 4 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```
