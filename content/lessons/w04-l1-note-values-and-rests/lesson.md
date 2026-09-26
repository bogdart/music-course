---
id: w04-l1-note-values-and-rests
title: Note Values, Rests, Ties and Dots
week: 4
order: 1
phase: p1
duration_min: 45
goals:
  - Know how long whole, half, quarter and eighth notes (and their rests) last
  - Lengthen notes with ties and dots
  - Tap and recognise simple one-bar rhythms; hear degree 4
prerequisites: [w03-l3-ode-to-joy-and-daw-melody]
tags: [rhythm, notation, note-values, ear]
---

# Note values and rests

So far you've copied rhythms by ear. This week you learn to *write* and *read* them, which lets you store any rhythm on paper or in the DAW grid. The whole system is based on one idea: **each note value is half the one before**.

| Value | Symbol in the app | Beats in 4/4 | Rest |
|---|---|---|---|
| [[whole note]] | `w` | 4 | whole rest |
| [[half note]] | `h` | 2 | half rest |
| quarter note | `q` | 1 | quarter rest |
| [[eighth note]] | `8` | ½ | eighth rest |

A [[rest]] is a *measured silence*. It's not "nothing" — it's part of the rhythm and lasts exactly as long as the matching note. Count through it.

To count eighth notes, split each beat with "and": **1 & 2 & 3 & 4 &**. The numbers land on the beat, the "&"s halfway between.

```example
{
  "title": "One bar each: whole, halves, quarters, eighths",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "C4:w | C4:h C4:h | C4:q C4:q C4:q C4:q | C4:8 C4:8 C4:8 C4:8 C4:8 C4:8 C4:8 C4:8" },
    { "instrument": "drums", "seq": "hh:q hh:q hh:q hh:q | hh:q hh:q hh:q hh:q | hh:q hh:q hh:q hh:q | hh:q hh:q hh:q hh:q" }
  ],
  "show": ["staff", "pianoroll"]
}
```

## Ties and dots: making notes longer

Sometimes a note needs a length that isn't on the menu — say, three beats. Two tools:

- A [[tie]] joins two notes of the same pitch into one long note: a half tied to a quarter = 3 beats. Written `C4:h~ C4:q`. You play once and hold.
- A [[dotted note]] is the note plus **half of itself**: a dotted half = 2 + 1 = 3 beats (`h.`); a dotted quarter = 1 + ½ = 1½ beats (`q.`).

The dotted quarter + eighth pair is everywhere: it's the "long–short" you played at the end of Ode to Joy's lines. Count it "**1 — — &** 2": hold through beat 2's start, play on its "&".

```example
{
  "title": "Tie vs dotted half (same length), then dotted quarter + eighth",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "E4:h~ E4:q r:q | E4:h. r:q | E4:q. D4:8 C4:q D4:q | E4:q E4:q E4:h" } ],
  "show": ["staff"]
}
```

The last two bars are how "Mary Had a Little Lamb" is really written — with a lilt on the first note.

## A new degree: 4 (fa)

Degree 4 sits right above 3, only a half step away, and it leans heavily **down** onto 3. After the cadence it sounds tense, as if it's waiting to resolve. Sing it and let it fall: fa → mi.

```example
{
  "title": "Cadence, then 4 resolving to 3",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:h [C4 F4 A4]:h | [B3 D4 G4]:h [C4 E4 G4]:h | r:w | F4:h E4:h" } ]
}
```

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "How long?",
  "spec": { "questions": [
    { "q": "A half note lasts…", "choices": ["1 beat", "2 beats", "4 beats"], "answer": 1 },
    { "q": "How many eighth notes fit in one quarter note?", "choices": ["2", "4", "8"], "answer": 0 },
    { "q": "A dotted half note lasts…", "choices": ["2 beats", "3 beats", "2½ beats"], "answer": 1 },
    { "q": "A dotted quarter lasts…", "choices": ["1½ beats", "2 beats", "¾ beat"], "answer": 0 },
    { "q": "A half note tied to a quarter note is played…", "choices": ["twice", "once, held 3 beats"], "answer": 1 },
    { "q": "A quarter rest lasts…", "choices": ["no time at all", "1 beat of silence", "until the next bar"], "answer": 1 },
    { "q": "How many half notes fill a 4/4 bar?", "choices": ["1", "2", "4"], "answer": 1 }
  ] },
  "passScore": 0.8
}
```

```exercise
{
  "id": "e2",
  "type": "rhythm-tap",
  "title": "Wholes, halves, quarters",
  "instructions": "Tap at the start of each note. Keep counting during long notes.",
  "passScore": 0.75,
  "spec": { "bpm": 80, "timeSig": "4/4", "seq": "x:h x:h | x:q x:q x:h | x:q x:q x:q x:q | x:w", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "e3",
  "type": "rhythm-tap",
  "title": "Eighths and rests",
  "instructions": "Count '1 & 2 & 3 & 4 &' out loud. Don't tap on rests.",
  "passScore": 0.75,
  "spec": { "bpm": 72, "timeSig": "4/4", "seq": "x:q x:8 x:8 x:q x:q | x:8 x:8 x:8 x:8 x:h | x:q r:q x:q r:q | x:q. x:8 x:h", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "e4",
  "type": "ear-rhythm",
  "title": "Which rhythm did you hear?",
  "instructions": "One bar in 4/4. Pick the matching notation.",
  "count": 8,
  "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "8", "rests": false, "answer": "choose" }
}
```

```exercise
{
  "id": "e5",
  "type": "ear-note",
  "title": "1, 2, 3 or 4?",
  "instructions": "4 is tense and wants to fall to 3.",
  "count": 12,
  "passScore": 0.7,
  "spec": { "key": "random", "mode": "major", "degrees": [1, 2, 3, 4], "reference": "cadence", "octaves": [4], "instrument": "piano" }
}
```

```exercise
{
  "id": "e6",
  "type": "play-melody",
  "title": "Mary, with the real rhythm",
  "instructions": "Dotted quarter + eighth at the start of lines 1 and 3.",
  "passScore": 0.75,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "E4:q. D4:8 C4:q D4:q | E4:q E4:q E4:h | D4:q D4:q D4:h | E4:q G4:q G4:h | E4:q. D4:8 C4:q D4:q | E4:q E4:q E4:q E4:q | D4:q D4:q E4:q D4:q | C4:w", "showStaff": true, "showKeyboard": false, "countIn": 1 }
}
```
