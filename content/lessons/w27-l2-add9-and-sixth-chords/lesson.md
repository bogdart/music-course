---
id: w27-l2-add9-and-sixth-chords
title: Add9 and Sixth Chords
week: 27
order: 2
phase: p4
duration_min: 40
goals:
  - Tell add9 apart from a full 9th chord
  - Use 6 and m6 chords as tonic colours instead of maj7
  - Recognise the half-diminished (m7b5) sound among the four 7th colours
prerequisites: [w27-l1-ninths-elevenths-thirteenths]
tags: [harmony, extended-chords, ear, keyboard]
---

# Add9 and Sixth Chords

Not every colourful chord needs a 7th. Two families add sparkle to a plain triad without changing its function: [[add9 chord]]s and [[sixth chord]]s.

## Add9: colour without a 7th

{{chord:Cadd9}} is C–E–G plus D. There is **no** B. A {{chord:C9}}, by contrast, implies a 7th underneath. The add9 is the singer-songwriter and pop-ballad chord: bright, shimmering and still totally stable. Put the 9 right next to the 3rd (D against E) and you get a gentle rub that sounds like a ringing guitar.

## Sixth chords: the tonic that does not lean

A maj7 has a leading tone (B) sitting a half step under the root. If your melody lands on C, that B can clash. The {{chord:C6}} (C–E–G–A) keeps the tonic calm — which is why swing-era endings and big-band tonics love it. Add a 9th and you get the lush 6/9 chord (C–E–G–A–D), a jazz-ending favourite.

```example
{
  "title": "Cadd9 · Cmaj9 · C6 · C6/9",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "epiano", "seq": "[C3 E3 G3 D4]:h [C3 E3 G3 B3 D4]:h | [C3 E3 G3 A3]:h [C3 E3 A3 D4 G4]:h |" } ],
  "show": ["keyboard"]
}
```

## A hidden twin: m6 and m7b5

Play {{chord:Dm6}}: D–F–A–B. Now play {{chord:Bm7b5}}: B–D–F–A. Same four notes! Which one you *hear* depends on the bass. This is your first taste of a big jazz idea — chords are sets of notes, and the bass tells you what they mean.

The half-diminished chord (m7b5) is the one 7th colour you have heard least. It is dark but not as tense as a dim7: a minor 7th chord with a lowered 5th. It is the ii chord of minor keys, and it will come back in every minor ii–V from next week on.

```example
{
  "title": "Dm7 then Bm7b5 — only one note changes (C to B)",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[D3 F3 A3 C4]:w | [D3 F3 A3 B3]:w |" },
    { "instrument": "bass", "seq": "D2:w | B1:w |" }
  ],
  "show": ["keyboard"]
}
```

## Drills

```exercise
{
  "id": "e1-build-add-six",
  "type": "build-chord",
  "title": "Build add9, 6 and m6",
  "count": 8, "passScore": 0.8,
  "spec": { "chords": ["Cadd9", "Fadd9", "Gadd9", "C6", "F6", "G6", "Am6", "Dm6"], "root": "given", "prompt": "symbol", "key": "C" }
}
```

```exercise
{
  "id": "e2-play-pop-colours",
  "type": "play-chord",
  "title": "Pop progression with colour",
  "instructions": "I–vi–IV–V with add9 on the major chords and a 6 on the V. Keep your hand close; use inversions freely.",
  "count": 8, "passScore": 0.75,
  "spec": { "chords": ["Cadd9", "Am7", "Fadd9", "G6"], "inversion": "any", "sequence": true, "bpm": 56 }
}
```

```exercise
{
  "id": "e3-six-nine",
  "type": "play-notes",
  "title": "The 6/9 ending voicing",
  "instructions": "C3 E3 A3 D4 G4 — built from fourths on top. Play it, hold it, listen to it ring.",
  "count": 6, "passScore": 0.8,
  "spec": { "prompt": "names", "notes": ["C3", "E3", "A3", "D4", "G4"], "ordered": false }
}
```

```exercise
{
  "id": "e4-four-sevenths",
  "type": "ear-chord",
  "title": "Four 7th colours",
  "instructions": "New: m7b5. Tip — it sounds like a minor 7th chord with a shadow over it.",
  "count": 12, "passScore": 0.75,
  "spec": { "qualities": ["maj7", "min7", "dom7", "m7b5"], "inversions": [0], "voicing": "close", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e5-sus-vs-triad",
  "type": "ear-chord",
  "title": "Sus and triads",
  "instructions": "Sus2 is the triad cousin of add9 — the 3rd is replaced rather than joined.",
  "count": 8, "passScore": 0.8,
  "spec": { "qualities": ["maj", "min", "sus2", "sus4"], "inversions": [0], "voicing": "close", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e6-add-six-quiz",
  "type": "quiz",
  "title": "Which chord, and why?",
  "passScore": 0.75,
  "spec": { "questions": [
    { "q": "Cadd9 contains which notes?", "choices": ["C E G B D", "C E G D", "C D G", "C E G A"], "answer": 1 },
    { "q": "Your melody ends on the tonic C. Which tonic chord avoids a half-step clash?", "choices": ["Cmaj7", "C6", "C7", "Cm7b5"], "answer": 1, "explain": "C6 has no B under the melody's C." },
    { "q": "Dm6 has the same notes as…", "choices": ["Fmaj7", "Bm7b5", "G7", "Am7"], "answer": 1 },
    { "q": "In C major, the m7b5 chord is built on…", "choices": ["ii", "iii", "vi", "vii"], "answer": 3 }
  ] }
}
```

```exercise
{
  "id": "e7-rhythm",
  "type": "ear-rhythm",
  "title": "Comping rhythm dictation",
  "count": 6, "passScore": 0.75,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "8", "rests": true, "answer": "tap" }
}
```
