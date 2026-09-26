---
id: w04-l3-reading-rhythm-and-treble-clef
title: Reading the Treble Clef
week: 4
order: 3
phase: p1
duration_min: 50
goals:
  - Read notes on the treble clef from middle C to G5
  - Play a short tune from notation alone
  - Build a 4-bar drum beat and a rhythmic melody in the DAW
prerequisites: [w04-l2-time-signatures-and-counting]
tags: [notation, reading, treble-clef, rhythm, daw]
songs:
  - { title: "Twinkle, Twinkle, Little Star", composer: "Traditional (French melody 'Ah! vous dirai-je, maman')", public_domain: true }
---

# Reading the treble clef

You now read rhythm. Pitch on paper works like the piano roll turned into lines: **higher on the page = higher in pitch**. The [[staff]] has five lines and four spaces between them, and every line and space is one white-key letter — stepping from a line to the next space is one letter up.

The curly sign at the start is the [[treble clef]]. It curls around the second line from the bottom and fixes it as **G4** (it's also called the G clef). Everything else follows alphabetically from there.

```staff
{ "clef": "treble", "key": "C", "timeSig": "4/4", "seq": "E4:q G4:q B4:q D5:q | F5:w | F4:q A4:q C5:q E5:q | C4:w" }
```

## Two memory hooks

- **Lines**, bottom to top: **E G B D F** — "Every Good Boy Does Fine".
- **Spaces**, bottom to top: **F A C E** — spells "face".
- **Middle C (C4)** sits on its own short extra line *below* the staff, called a [[ledger line]]. D4 hangs just under the bottom line.

Don't read by reciting the whole rhyme every time. Use **landmarks**, like on the keyboard: middle C (ledger line), G4 (clef line), and C5 (third space). Find the nearest landmark and count steps.

## Reading a whole tune

Here is "Twinkle, Twinkle, Little Star" — read it before you press play. Notice it opens with a leap from C up to G (degrees 1 to 5), then walks down by step.

```example
{
  "title": "Twinkle, Twinkle, Little Star",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q C4:q G4:q G4:q | A4:q A4:q G4:h | F4:q F4:q E4:q E4:q | D4:q D4:q C4:h | G4:q G4:q F4:q F4:q | E4:q E4:q D4:h | G4:q G4:q F4:q F4:q | E4:q E4:q D4:h | C4:q C4:q G4:q G4:q | A4:q A4:q G4:h | F4:q F4:q E4:q E4:q | D4:q D4:q C4:h" } ],
  "show": ["staff"]
}
```

For A4 your hand moves: shift so your little finger can reach A, or put your thumb on C and stretch. Moving the hand is normal.

## Your first beat

In today's DAW task you'll write a basic rock/pop beat — the foundation of thousands of songs:

- **kick** (low thump) on beats 1 and 3,
- **snare** (crack) on beats 2 and 4,
- **hi-hat** (tick) on every eighth note.

```example
{
  "title": "Basic 4/4 beat with a rhythmic melody",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hh]:8 hh:8 [snare hh]:8 hh:8 [kick hh]:8 hh:8 [snare hh]:8 hh:8 | [kick hh]:8 hh:8 [snare hh]:8 hh:8 [kick hh]:8 hh:8 [snare hh]:8 hh:8" },
    { "instrument": "piano", "seq": "E4:q E4:8 E4:8 G4:h | F4:8 E4:8 D4:q C4:h" }
  ],
  "show": ["pianoroll"]
}
```

## Drills

```exercise
{
  "id": "e1",
  "type": "read-note",
  "title": "Name it: middle C to C5",
  "count": 10,
  "passScore": 0.8,
  "spec": { "clef": "treble", "range": ["C4", "C5"], "accidentals": false, "answer": "name", "timed": 0 },
  "hints": ["Landmarks: C4 on the ledger line, G4 on the clef's line, C5 in the third space."]
}
```

```exercise
{
  "id": "e2",
  "type": "read-note",
  "title": "Name it: up to G5",
  "count": 12,
  "passScore": 0.75,
  "spec": { "clef": "treble", "range": ["C4", "G5"], "accidentals": false, "answer": "name", "timed": 0 }
}
```

```exercise
{
  "id": "e3",
  "type": "read-note",
  "title": "See it, play it",
  "count": 10,
  "passScore": 0.75,
  "spec": { "clef": "treble", "range": ["C4", "C5"], "accidentals": false, "answer": "play", "timed": 0 }
}
```

```exercise
{
  "id": "e4",
  "type": "play-melody",
  "title": "Twinkle from the staff",
  "instructions": "No keyboard help this time — read the notes.",
  "passScore": 0.75,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "C4:q C4:q G4:q G4:q | A4:q A4:q G4:h | F4:q F4:q E4:q E4:q | D4:q D4:q C4:h | G4:q G4:q F4:q F4:q | E4:q E4:q D4:h | G4:q G4:q F4:q F4:q | E4:q E4:q D4:h | C4:q C4:q G4:q G4:q | A4:q A4:q G4:h | F4:q F4:q E4:q E4:q | D4:q D4:q C4:h", "showStaff": true, "showKeyboard": false, "countIn": 1 }
}
```

```exercise
{
  "id": "e5",
  "type": "ear-rhythm",
  "title": "Hear it, tap it",
  "instructions": "Listen to one bar, then tap it back.",
  "count": 8,
  "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "8", "rests": true, "answer": "tap" }
}
```

```exercise
{
  "id": "e6",
  "type": "ear-note",
  "title": "Degrees 1–5, two octaves",
  "instructions": "The note may now be in octave 3 or 4. Its degree doesn't change with the octave — listen for the colour.",
  "count": 12,
  "passScore": 0.7,
  "spec": { "key": "random", "mode": "major", "degrees": [1, 2, 3, 4, 5], "reference": "cadence", "octaves": [3, 4], "instrument": "piano" }
}
```

```exercise
{
  "id": "e7",
  "type": "daw-task",
  "title": "Beat + rhythmic melody",
  "spec": {
    "template": { "bpm": 90, "key": "C", "tracks": [ { "instrument": "drums", "seq": "" }, { "instrument": "piano", "seq": "" } ] },
    "task": "Track 1 (drums): 4 bars of kick on beats 1 and 3, snare on 2 and 4, hi-hat on every eighth note. Track 2 (piano): a 4-bar melody on C D E F G that uses at least three different note values (for example half, quarter and eighth notes), includes at least one rest, and ends on C. Loop it and listen: does the melody rhythm sit comfortably on the beat?",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "piano"] },
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "drum-pattern", "requires": ["kick", "snare"], "kickOnBeats": [1, 3], "snareOnBeats": [2, 4], "track": 0 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 1 },
      { "kind": "range", "low": "C4", "high": "G4", "track": 1 },
      { "kind": "uses-rhythm", "values": ["h", "q", "8"], "minDistinct": 3, "track": 1 },
      { "kind": "ends-on", "degree": 1, "track": 1 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```
