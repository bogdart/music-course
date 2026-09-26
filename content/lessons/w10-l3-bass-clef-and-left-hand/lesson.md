---
id: w10-l3-bass-clef-and-left-hand
title: Bass Clef and the Left Hand
week: 10
order: 3
phase: p2
duration_min: 50
goals:
  - Read notes in the bass clef from C2 to C4 using three landmarks
  - Play a bass line with the left hand while hearing chords above it
  - Build a DAW sketch with a root bass line under a melody
prerequisites: [w10-l2-harmonic-intervals]
tags: [reading, bass-clef, left-hand, bass, daw]
songs:
  - { title: "Canon in D (ground bass)", composer: "Johann Pachelbel", public_domain: true }
  - { title: "Ode to Joy", composer: "Ludwig van Beethoven", public_domain: true }
---

# Bass Clef and the Left Hand

Treble clef covers your right hand. The low notes — the left hand, the bass guitar, the cello — live in the [[bass clef]]. Learning it now pays off twice: you'll read left-hand parts, and you'll start *thinking* in bass lines, the foundation of every song.

## Three landmarks

The bass clef is also called the F clef: its two dots sit around the 4th line, and that line is **F3** (the F just below middle C). From there:

- **Middle C (C4)** sits on one ledger line *above* the bass staff — the same C that sits one ledger line *below* the treble staff.
- **C3** is in the second space from the bottom.
- **G2** is the bottom line; **C2** is two ledger lines below.

Warning: the lines are *not* the same notes as in treble clef. Bottom-line-to-top in bass: **G B D F A** ("Good Boys Do Fine Always"); spaces: **A C E G** ("All Cows Eat Grass").

```staff
{ "clef": "bass", "key": "C", "timeSig": "4/4", "seq": "C2:q G2:q C3:q F3:q | A3:q C4:h. |" }
```

```example
{
  "title": "Bass-clef landmarks, played low to high: C2, G2, C3, F3, C4",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C2:q G2:q C3:q F3:q | C4:w" } ],
  "show": ["keyboard"]
}
```

```exercise
{
  "id": "e1", "type": "read-note", "title": "Name bass-clef notes",
  "instructions": "Find the nearest landmark (C3, F3, C4) and count lines and spaces from it.",
  "count": 12, "passScore": 0.8,
  "spec": { "clef": "bass", "range": ["C3", "C4"], "accidentals": false, "answer": "name", "timed": 0 }
}
```

```exercise
{
  "id": "e2", "type": "read-note", "title": "Play bass-clef notes, wider range",
  "instructions": "Play each note in the right octave. Shift your keyboard down if C2 is out of reach.",
  "count": 12, "passScore": 0.75,
  "spec": { "clef": "bass", "range": ["C2", "C4"], "accidentals": false, "answer": "play", "timed": 0 }
}
```

## A famous bass line

Pachelbel's *Canon in D* (around 1700) is built on an eight-note bass line repeated over and over — a ground bass. Every pop song built on repeating chords is its descendant.

```example
{
  "title": "Pachelbel, Canon in D — ground bass with chords",
  "bpm": 60, "timeSig": "4/4", "key": "D", "loop": true,
  "tracks": [
    { "instrument": "bass", "seq": "D3:h A2:h | B2:h F#2:h | G2:h D2:h | G2:h A2:h" },
    { "instrument": "strings", "seq": "[F#4 A4 D5]:h [E4 A4 C#5]:h | [D4 F#4 B4]:h [C#4 F#4 A4]:h | [B3 D4 G4]:h [A3 D4 F#4]:h | [B3 D4 G4]:h [C#4 E4 A4]:h" }
  ],
  "show": ["staff", "pianoroll"]
}
```

```exercise
{
  "id": "e3", "type": "play-melody", "title": "Canon bass, left hand",
  "instructions": "Left hand only, reading bass clef. The strings play the chords above you.",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "D", "seq": "D3:h A2:h | B2:h F#2:h | G2:h D2:h | G2:h A2:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "strings", "seq": "[F#4 A4 D5]:h [E4 A4 C#5]:h | [D4 F#4 B4]:h [C#4 F#4 A4]:h | [B3 D4 G4]:h [A3 D4 F#4]:h | [B3 D4 G4]:h [C#4 E4 A4]:h" } }
}
```

```exercise
{
  "id": "e4", "type": "ear-bass", "title": "Find the bass note",
  "instructions": "You'll hear a chord with its root in the bass. Play that lowest note. Hum it first — the bass is the note you'd hum along to without thinking.",
  "count": 8, "passScore": 0.7,
  "spec": { "key": "random", "chords": ["I", "IV", "V"], "answer": "play" }
}
```

## Hands together

Now the left hand plays the chord root on beat 1 while the right hand carries the melody. Start slowly: the hands only have to meet on beat 1.

```exercise
{
  "id": "e5", "type": "play-melody", "title": "Ode to Joy with left-hand roots",
  "instructions": "LH: C3 or G2 on the first beat of each bar. RH: the melody you know from Phase 1.",
  "count": 6, "passScore": 0.7,
  "spec": { "bpm": 66, "timeSig": "4/4", "key": "C", "seq": "[C3 E4]:q E4:q F4:q G4:q | [G2 G4]:q F4:q E4:q D4:q | [C3 C4]:q C4:q D4:q E4:q | [C3 E4]:q. D4:8 [G2 D4]:h |", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

## Make it: roots under a melody

```exercise
{
  "id": "e6", "type": "daw-task", "title": "Bass line on roots + melody",
  "spec": {
    "template": { "bpm": 90, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "piano", "seq": "[C4 E4 G4]:w | [C4 E4 A4]:w | [C4 F4 A4]:w | [B3 D4 G4]:w | [C4 E4 G4]:w | [C4 E4 A4]:w | [C4 F4 A4]:w | [B3 D4 G4]:w" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "lead", "seq": "" } ] },
    "task": "The piano plays I – vi – IV – V twice (C, Am, F, G). 1) Record a bass line with your left hand: the root of each chord between C2 and C4, at least two notes per bar (try half notes, then quarter notes). 2) Add an 8-bar melody on the lead track in C major. Keep leaps to a fifth or less and end on C. Look at the bass track in the staff view — can you read it in bass clef?",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "bass", "lead"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "range", "low": "C2", "high": "C4", "track": 1 },
      { "kind": "note-count", "min": 16, "max": 64, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["I", "vi", "IV", "V"], "barsPerChord": 1, "minRatio": 0.9, "track": 1 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 2 },
      { "kind": "max-leap", "semitones": 7, "track": 2 },
      { "kind": "ends-on", "degree": 1, "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
