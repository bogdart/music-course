---
id: w10-l3-bass-clef-and-left-hand
title: Bass Clef, the Left Hand and Low Notes
week: 10
order: 3
phase: p2
duration_min: 50
goals:
  - Read notes in the bass clef from C2 to C4 using three landmarks
  - Play a bass line with the left hand under chords, then under a melody
  - Find very low notes by ear on the keyboard, in any octave
  - Build a DAW sketch with a root bass line under a melody
prerequisites: [w10-l2-tritone-and-descending-intervals]
tags: [reading, bass-clef, left-hand, bass, octaves, daw]
songs:
  - { title: "Canon in D (ground bass)", composer: "Johann Pachelbel", public_domain: true }
  - { title: "Ode to Joy", composer: "Ludwig van Beethoven", public_domain: true }
---

# Bass Clef, the Left Hand and Low Notes

The treble clef covers your right hand. The low notes (the left hand, the bass guitar, the cello) live in the [[bass clef]]. Today you learn to read it, play a real bass line with your left hand, and start finding very low notes by ear. (Both hands together come next week.)

## Three landmarks

The bass clef is also called the F clef: its two dots sit around the 4th line, and that line is **F3**, the F just below middle C. From there:

- **Middle C (C4)** sits on one ledger line *above* the bass staff (the same C that sits one ledger line below the treble staff).
- **C3** is in the second space from the bottom.
- **G2** is the bottom line; **C2** is two ledger lines below the staff.

Careful: the lines are *not* the same notes as in the treble clef. Bass-clef lines from the bottom: **G B D F A** ("Good Boys Do Fine Always"); spaces: **A C E G** ("All Cows Eat Grass").

```staff
{ "clef": "bass", "key": "C", "timeSig": "4/4", "seq": "C2:q G2:q C3:q F3:q | A3:q C4:h. |" }
```

```example
{
  "title": "Bass-clef landmarks, low to high: C2, G2, C3, F3, C4",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C2:q G2:q C3:q F3:q | C4:w" } ],
  "show": ["keyboard"]
}
```

```exercise
{
  "id": "e1", "type": "read-note", "title": "Name bass-clef notes",
  "instructions": "Find the nearest landmark (C3, F3 or C4) and count lines and spaces from it.",
  "count": 12, "passScore": 0.7,
  "spec": { "clef": "bass", "range": ["C3", "C4"], "accidentals": false, "answer": "name", "timed": 0 }
}
```

```exercise
{
  "id": "e2", "type": "read-note", "title": "Play bass-clef notes, wider range",
  "instructions": "Play each note in the right octave. Shift your keyboard down if C2 is out of reach.",
  "count": 12, "passScore": 0.7,
  "spec": { "clef": "bass", "range": ["C2", "C4"], "accidentals": false, "answer": "play", "timed": 0 }
}
```

## A famous bass line

Pachelbel's *Canon* (around 1700) is built on an eight-note bass line repeated again and again, a *ground bass*. Countless pop songs built on a repeating chord loop are its descendants. Pachelbel wrote it in D major; here it's moved to **C major**, so you only need white keys. The bass notes are the roots of the chords: C G Am Em F C F G.

```example
{
  "title": "Pachelbel's Canon, ground bass with chords (moved to C major)",
  "bpm": 60, "timeSig": "4/4", "key": "C", "loop": true,
  "tracks": [
    { "instrument": "bass", "seq": "C3:h G2:h | A2:h E2:h | F2:h C2:h | F2:h G2:h" },
    { "instrument": "strings", "seq": "[E4 G4 C5]:h [D4 G4 B4]:h | [C4 E4 A4]:h [B3 E4 G4]:h | [A3 C4 F4]:h [G3 C4 E4]:h | [A3 C4 F4]:h [B3 D4 G4]:h" }
  ],
  "show": ["staff", "pianoroll"]
}
```

```exercise
{
  "id": "e3", "type": "play-melody", "title": "Canon bass, left hand",
  "instructions": "Left hand only, reading the bass clef. The strings play the chords above you.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "C3:h G2:h | A2:h E2:h | F2:h C2:h | F2:h G2:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "strings", "seq": "[E4 G4 C5]:h [D4 G4 B4]:h | [C4 E4 A4]:h [B3 E4 G4]:h | [A3 C4 F4]:h [G3 C4 E4]:h | [A3 C4 F4]:h [B3 D4 G4]:h" } }
}
```

## Low notes by ear

Here's something honest about the low register: very low notes are hard to name, for everyone at first. A bass note in octave 1 or 2 sounds more like a warm thump with a pitch somewhere inside it than like a clear note. Listen to the same C going down through four octaves on a bass sound:

```example
{
  "title": "C4, C3, C2, C1 on a bass sound, then G1 and C2",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "bass", "seq": "C4:q C3:q C2:q C1:q | G1:h C2:h" } ],
  "show": ["keyboard"]
}
```

The strategy that works: don't try to name the low note directly. **Search for it on your keyboard in a comfortable octave** (3 or 4), where your ear is sharper, and compare. The drill accepts the same note name in any octave.

### Try it: search for a low note

1. Play the example's C1, then C3 on your keyboard (any sound). Then C1 again: listen for the hum *inside* the thump. Does C3 feel like the same colour, higher?
2. Play a low key you can reach (C2 or lower if your keyboard has it), then the same letter 12 and 24 keys higher. Do it for G and A too.
3. Now the check below: play the low note, search on your keyboard from C3 with higher/lower, and pick the letter when a key blends with it.

```exercise
{
  "id": "e6", "type": "listen", "title": "Check: find two low notes",
  "instructions": "Search for each note on your keyboard in octave 3 before you answer.",
  "spec": {
    "examples": [
      { "title": "Low note 1", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "bass", "seq": "G1:w" } ] },
      { "title": "Low note 2", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "bass", "seq": "E2:w" } ] }
    ],
    "questions": [
      { "q": "Low note 1 is…", "choices": ["C", "E", "G", "A"], "answer": 2, "explain": "G (G1). Play G3 after it: the same colour, two octaves up." },
      { "q": "Low note 2 is…", "choices": ["C", "E", "G", "A"], "answer": 1, "explain": "E (E2). Play E3 after it and then F3: E blends, F rubs." }
    ]
  }
}
```

**If you can't hear it yet:** narrow it down in two steps. First pick the rough region in octave 3 (low C, middle F, high B?) by higher/lower. Then try neighbouring keys one at a time: the right one blends with the low note, a wrong one rubs or feels like a different "colour". Play your guess 12 keys lower if you can, right after the question note: the right key melts into it.

This lesson opens that rung — low bass notes, octaves 1 and 2.

**Before the drill, rehearse the method** (in the *How to do it* box above the drill, for the rung you're on): listen to the thump and the hum under it; find the region by trying keys (or any key, then jump down by 12); match the colour an octave or two higher, where it's clearer. You'll meet this rung once the fifth-trap rungs are solid. Expect lots of misses at first; this is the skill that will one day let you hear bass lines in songs.

```ladder
{ "skill": "octave", "unlocks": 13, "intro": "Opens \"Find the bass note\" (octaves 1–2, bass sound); the drill runs at your current octave rung." }
```

## Make it: roots under a melody

```exercise
{
  "id": "e5", "type": "daw-task", "title": "Bass line on roots + melody",
  "spec": {
    "template": { "bpm": 90, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "piano", "seq": "[C4 E4 G4]:w | [C4 E4 A4]:w | [C4 F4 A4]:w | [B3 D4 G4]:w | [C4 E4 G4]:w | [C4 E4 A4]:w | [C4 F4 A4]:w | [B3 D4 G4]:w" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "lead", "seq": "" } ] },
    "task": "The piano plays I – vi – IV – V twice (C, Am, F, G). 1) Record a bass line with your left hand: the root of each chord between C2 and C4, at least two notes per bar (try half notes, then quarter notes). 2) Add an 8-bar melody on the lead track in C major. Keep leaps to a fifth or less and end on C. Then look at the bass track in the staff view: can you read it in the bass clef?",
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

**If the bass part is hard to record:** play the roots as half notes first (C C | A A | F F | G G), one bar at a time, and record in several takes. Quarter notes can come later.

## Between lessons

- **3 minutes, daily:** the Canon bass with your left hand, reading the bass clef; then say each note name aloud as you play it.
- **2 minutes:** one bass-clef landmark per day (C2, G2, C3, F3, C4): find it on the staff and on the keys.
- **2 minutes:** play a random very low key with eyes closed, then find it in octave 3 by searching.
- One Practice-page session: octave at your rung.
