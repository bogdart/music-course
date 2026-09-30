---
id: w06-l2-minor-triads
title: Minor Triads
week: 6
order: 2
phase: p1
duration_min: 45
goals:
  - Build a minor triad (m3 + M3) and turn any major triad into minor by lowering its 3rd
  - Play major/minor pairs with the right hand
  - Tell major and minor triads apart by ear, and find the root of both
  - Build the diminished triad (two minor 3rds) and hear how it differs
prerequisites: [w06-l1-major-triads]
tags: [chords, triads, minor, ear, keyboard]
songs:
  - { title: "Frère Jacques (and its minor-key version in Mahler's Symphony No. 1, 3rd movement)", composer: "Traditional / Gustav Mahler", public_domain: true }
---

# Minor triads

Swap the order of the two 3rds and you get the other great colour of music. A [[minor triad]] is:

- a **minor 3rd** (3 half steps) from root to 3rd, then
- a **major 3rd** (4 half steps) from 3rd to 5th,
- still a **perfect 5th** from root to 5th.

The quickest way to build one: take the major triad and **lower the 3rd by one half step**. C–E–G becomes C–**E♭**–G. Only one note moves, by the smallest possible distance — and the mood changes.

```keyboard
{ "range": ["C3", "C5"], "highlight": ["C4", "D#4", "G4"], "labels": "names", "colors": { "C4": "root", "D#4": "third", "G4": "fifth" } }
```

The chord symbol adds a small **m**: C minor = **Cm**, A minor = **Am**. Among C major's white keys, three triads are naturally minor: **Dm** (D–F–A), **Em** (E–G–B) and **Am** (A–C–E).

## Hearing it

Major is often described as "bright", minor as "dark" or "sad". That's a useful starting point, not a law — plenty of dance hits are in minor. What actually differs is one note, the 3rd: a half step lower in minor. Listen to the pair from the same root:

```example
{
  "title": "C major vs C minor: note by note, then together (twice)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q E4:q G4:h | [C4 E4 G4]:w | C4:q Eb4:q G4:q r:q | [C4 Eb4 G4]:w | [C4 E4 G4]:w | [C4 Eb4 G4]:w" } ],
  "show": ["keyboard"]
}
```

The same trick works on a whole melody. Mahler used it in his First Symphony (1888): "Frère Jacques" with its 3rd lowered becomes a slow, gloomy march.

```example
{
  "title": "Frère Jacques, major then minor",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q C4:q | C4:q D4:q E4:q C4:q | E4:q F4:q G4:h | r:w | C4:q D4:q Eb4:q C4:q | C4:q D4:q Eb4:q C4:q | Eb4:q F4:q G4:h" } ],
  "show": ["staff"]
}
```

**How to practise the ear drill:** if a chord leaves you unsure, play C major and C minor on your keyboard right after it and ask which one it resembled. Comparing two is far easier than judging one alone — and that's exactly how the chord ladder starts: only these two choices.

## One more colour: the diminished triad

Lower the 5th of a minor triad by a half step too and you get a third colour. Next lesson you'll find it on degree 7 of C major, B–D–F — neither major nor minor. Count it: B→D is 3 half steps (a minor 3rd), D→F is 3 again. **Two minor 3rds.** So its outer notes, B→F, are only **6** half steps apart — not the perfect 5th that every major and minor triad has. That squeezed outer interval is what makes a [[diminished]] triad (symbol °) sound tense and unstable. Compare three chords on the same root, changing one note at a time:

```example
{
  "title": "C major (C E G), C minor (C E♭ G), C diminished (C E♭ G♭)",
  "bpm": 66, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:w | [C4 Eb4 G4]:w | [C4 Eb4 Gb4]:w | r:w | [B3 D4 F4]:w" } ],
  "show": ["keyboard"]
}
```

The last chord is B° (B diminished), the one you'll meet on degree 7 next lesson. You'll rarely use it for now. This lesson opens it as a third choice in the chord ladder, after major vs minor — you'll meet it once major vs minor is solid.

```ladder
{ "skill": "chords", "unlocks": 2, "intro": "Opens \"Major, minor or diminished\" (after major vs minor); the drill runs at your current rung." }
```

## Roots of minor chords

Minor chords have a root too, and in these drills it's still the lowest note. This lesson opens the roots rung that mixes major and minor chords (you'll meet it once major-chord roots are solid) — the colour changes, the job doesn't: find the bottom note.

```example
{
  "title": "Am, then its root A; Dm, then D",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[A3 C4 E4]:h A3:h | [D3 F3 A3]:h D3:h" } ],
  "show": ["keyboard"]
}
```

```ladder
{ "skill": "roots", "unlocks": 2, "intro": "Opens roots of major or minor chords; the drill runs at your current roots rung." }
```

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "Major or minor on paper",
  "spec": { "questions": [
    { "q": "A minor triad is…", "choices": ["M3 then m3", "m3 then M3", "m3 then m3"], "answer": 1 },
    { "q": "To turn C major into C minor you change…", "choices": ["the root", "the 3rd", "the 5th"], "answer": 1 },
    { "q": "Notes of A minor?", "choices": ["A C E", "A C♯ E", "A B E"], "answer": 0 },
    { "q": "Which of these is minor using only white keys?", "choices": ["F", "G", "D"], "answer": 2, "explain": "D–F is a minor 3rd (3 half steps)." },
    { "q": "The symbol 'Em' means…", "choices": ["E major", "E minor", "E melody"], "answer": 1 },
    { "q": "Root to 5th in a minor triad is…", "choices": ["a perfect 5th", "a minor 5th", "a major 3rd"], "answer": 0 }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e2",
  "type": "build-chord",
  "title": "Build the minor triad",
  "count": 8,
  "passScore": 0.75,
  "spec": { "chords": ["Am", "Dm", "Em", "Cm", "Fm", "Gm"], "root": "given", "prompt": "symbol", "key": "C" }
}
```

```exercise
{
  "id": "e3",
  "type": "play-chord",
  "title": "Major, then minor",
  "instructions": "Hold the chord, then move only your middle finger down a half step.",
  "passScore": 0.75,
  "spec": { "chords": ["C", "Cm", "F", "Fm", "G", "Gm"], "inversion": "root", "sequence": true, "bpm": 50 }
}
```

```exercise
{
  "id": "e8",
  "type": "listen",
  "title": "Three mystery chords",
  "instructions": "Listen first and decide; the notes are shown only after you answer.",
  "spec": {
    "example": { "title": "Mystery chords", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[A3 C4 E4]:w | [F3 A3 C4]:w | [D4 F4 A4]:w" } ], "show": ["keyboard"] },
    "questions": [
      { "q": "Chord 1 is…", "choices": ["major", "minor"], "answer": 1, "explain": "A–C–E, A minor." },
      { "q": "Chord 2 is…", "choices": ["major", "minor"], "answer": 0, "explain": "F–A–C, F major." },
      { "q": "Chord 3 is…", "choices": ["major", "minor"], "answer": 1, "explain": "D–F–A, D minor." }
    ]
  }
}
```

```exercise
{
  "id": "e6",
  "type": "play-chord",
  "title": "The white-key minor chords",
  "passScore": 0.75,
  "spec": { "chords": ["Am", "Dm", "Em", "Am"], "inversion": "root", "sequence": true, "bpm": 50 }
}
```

```exercise
{
  "id": "e9",
  "type": "quiz-input",
  "title": "Diminished by numbers",
  "spec": { "questions": [
    { "q": "Half steps from B up to D?", "answer": ["3"], "kind": "number" },
    { "q": "Half steps from D up to F?", "answer": ["3"], "kind": "number" },
    { "q": "Half steps from B up to F (root to 5th of B°)?", "answer": ["6"], "kind": "number" },
    { "q": "Half steps from root to 5th in a major or minor triad?", "answer": ["7"], "kind": "number" }
  ] }
}
```
