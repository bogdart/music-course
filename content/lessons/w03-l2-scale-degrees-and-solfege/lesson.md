---
id: w03-l2-scale-degrees-and-solfege
title: Scale Degrees and Solfège
week: 3
order: 2
phase: p1
duration_min: 45
goals:
  - Name the notes of a key by number (1–7) and by solfège (do re mi fa sol la ti)
  - Feel which note is "home" and use the home run (1 2 3 4 5 4 3 2 1) to set it before a question
  - Hear degrees 1, 2 and 3 in C major
prerequisites: [w03-l1-major-scale-pattern]
tags: [scale-degrees, solfege, ear, tonic]
songs:
  - { title: "Frère Jacques", composer: "Traditional", public_domain: true }
---

# Scale degrees and solfège

Letter names tell you *which key* to press. But your ear doesn't hear letters. It hears **roles**: "this note is home", "this note wants to go home", "this note is bright and settled". Those roles are the same in every major key, which is why we name notes by position in the scale — their [[scale degree]].

| Degree | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| Solfège | do | re | mi | fa | sol | la | ti |
| In C major | C | D | E | F | G | A | B |

[[Solfège]] syllables are just singable names for the numbers. Use whichever sticks; the app answers in numbers.

Degree 1 is the [[tonic]] — **home**. In C major, C is 1. In G major, G is 1. Same role, different key. For now, and for the next few weeks, we stay in **C major only**: one key, one home, until the roles feel familiar.

## What "home" means — hear it first

"Home" isn't a theory word; it's a feeling you already have. Listen to a tune you know, first ending where it should, then stopping one note early:

```example
{
  "title": "Twinkle Twinkle (first line): ends on C = home, finished",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q C4:q G4:q G4:q | A4:q A4:q G4:h | F4:q F4:q E4:q E4:q | D4:q D4:q C4:h" } ],
  "show": ["keyboard"]
}
```

```example
{
  "title": "Same tune, stopping on D = not home, left hanging",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q C4:q G4:q G4:q | A4:q A4:q G4:h | F4:q F4:q E4:q E4:q | D4:q D4:q D4:h" } ],
  "show": ["keyboard"]
}
```

The second version feels unfinished — you almost want to press C yourself. That pull towards C is what "C is home" means. Every note in the key has its own amount of pull; that's why we name them by number.

## Setting home before each question

A single note on its own has no role — it's just a pitch. So before each question the app plays a short **home run**: up the scale from home to 5 and back down to home, **do re mi fa sol fa mi re do**, ending on a long C:

```example
{
  "title": "The home run in C: 1 2 3 4 5 4 3 2 1",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h" } ],
  "show": ["keyboard"]
}
```

It always ends on home, in the **same octave** as the note you'll be asked about — no octave jumps. (Later, in week 6, once you know what chords are, this home run is replaced by a short chord pattern called a *cadence*. Not before.)

## The characters of 1, 2 and 3

Listen to each degree right after the home run, and notice how it *feels*:

- **1 (do)** — finished, stable, resting. It's the note the home run just ended on.
- **2 (re)** — unfinished, restless. It wants to step down to 1.
- **3 (mi)** — bright and fairly stable, but not quite "the end".

```example
{
  "title": "Home run, then 1… 2… 3…",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | C4:w | r:w | D4:w | r:w | E4:w" } ],
  "show": ["keyboard"]
}
```

**The trick that works:** when you hear the note, hum it, then hum *down the scale* to home — "mi re do". Count how many steps you took. If you don't need to move, it's 1. One step down: 2. Two steps down: 3. Or play it: find the note on the keyboard (C, D or E), and the key tells you the degree.

Now you can re-read old tunes: "Hot Cross Buns" is **3 2 1**. "Frère Jacques" starts **1 2 3 1**:

```example
{
  "title": "Frère Jacques, first line (degrees 1 2 3 1)",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q C4:q | C4:q D4:q E4:q C4:q | E4:q F4:q G4:h | E4:q F4:q G4:h" } ],
  "show": ["staff"]
}
```

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz-input",
  "title": "Degrees in C",
  "spec": { "questions": [
    { "q": "Degree 3 of C major is…", "answer": ["E"], "kind": "note" },
    { "q": "Degree 5 (sol) of C major is…", "answer": ["G"], "kind": "note" },
    { "q": "Which degree is 'fa'?", "answer": ["4"], "kind": "number" },
    { "q": "Degree 1 of G major is…", "answer": ["G"], "kind": "note" },
    { "q": "In C major, B is degree…", "answer": ["7"], "kind": "number" },
    { "q": "Solfège for degree 2?", "answer": ["re"], "kind": "text" }
  ] },
  "passScore": 0.8
}
```

```exercise
{
  "id": "e2",
  "type": "play-notes",
  "title": "Play by degree",
  "instructions": "Degrees in C major. Play the matching note around middle C.",
  "count": 10,
  "passScore": 0.8,
  "spec": { "prompt": "degrees", "notes": ["C4", "E4", "D4", "G4", "F4", "A4", "B4", "C5"], "ordered": true, "key": "C" }
}
```

```exercise
{
  "id": "e7",
  "type": "ear-note",
  "title": "1 or 3?",
  "instructions": "After the home run, one note. Home (1 — the note the run ended on) or bright-but-not-home (3)?",
  "count": 10,
  "passScore": 0.75,
  "spec": { "key": "C", "mode": "major", "degrees": [1, 3], "reference": "scale", "octaves": [4], "instrument": "piano" },
  "hints": ["Is it the same note the home run ended on? Then it's 1.", "Hum down to home: two steps means 3."]
}
```

```exercise
{
  "id": "e8",
  "type": "ear-note",
  "title": "1, 2 or 3?",
  "instructions": "Now 2 (restless, wants to fall to 1) joins in. Still C major, same octave as the home run.",
  "count": 12,
  "passScore": 0.7,
  "spec": { "key": "C", "mode": "major", "degrees": [1, 2, 3], "reference": "scale", "octaves": [4], "instrument": "piano" },
  "hints": ["You can also answer by playing the note on the keyboard: C = 1, D = 2, E = 3."]
}
```

```exercise
{
  "id": "e9",
  "type": "ear-melody",
  "title": "Name the tune in degrees",
  "instructions": "Three notes using 1, 2 and 3 in C major. Enter the degrees you hear.",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "C", "degrees": [1, 2, 3], "length": 3, "rhythm": "quarters", "answer": "degrees", "reference": "scale" }
}
```

```exercise
{
  "id": "e6",
  "type": "play-melody",
  "title": "Frère Jacques, first line",
  "instructions": "Say the degrees as you play: 1 2 3 1, 1 2 3 1, 3 4 5, 3 4 5.",
  "passScore": 0.75,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "C4:q D4:q E4:q C4:q | C4:q D4:q E4:q C4:q | E4:q F4:q G4:h | E4:q F4:q G4:h", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```
