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

## Memory hooks and landmarks

- **Lines**, bottom to top: **E G B D F** — "Every Good Boy Does Fine".
- **Spaces**, bottom to top: **F A C E** — spells "face".
- **Middle C (C4)** sits on its own short extra line *below* the staff, called a [[ledger line]]. D4 hangs just under the bottom line.

Don't recite the whole rhyme every time. Use **landmarks**, like on the keyboard: middle C (ledger line), G4 (the clef's line) and C5 (third space). Find the nearest landmark and count steps.

**Try it** with the staff above: first note (bottom line) — one step below G's line is a space, below that the
bottom line: G → F → E. So it's E4; play it. Next note, G4: the clef's line. Say the landmark and the count out loud
each time ("G, down two: E"). Slow and sure beats fast guessing.

```example
{
  "title": "The three landmarks: C4, G4, C5",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h G4:h | C5:w" } ],
  "show": ["staff", "keyboard"]
}
```

## Reading a whole tune

Here is "Twinkle, Twinkle, Little Star" — read it before you press play. It opens with a leap from C up to G (degrees 1 to 5), then walks down by step.

```example
{
  "title": "Twinkle, Twinkle, Little Star",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q C4:q G4:q G4:q | A4:q A4:q G4:h | F4:q F4:q E4:q E4:q | D4:q D4:q C4:h | G4:q G4:q F4:q F4:q | E4:q E4:q D4:h | G4:q G4:q F4:q F4:q | E4:q E4:q D4:h | C4:q C4:q G4:q G4:q | A4:q A4:q G4:h | F4:q F4:q E4:q E4:q | D4:q D4:q C4:h" } ],
  "show": ["staff"]
}
```

For A4 your hand moves: shift so your little finger can reach A, or put your thumb on C and stretch. Moving the hand is normal.

## Tapping in 3

The next rhythm rung taps back a bar in **3/4**. **Try it** below: count "ONE 2 3" out loud during the count-in and
keep counting through the whole bar; tap only where a note starts.

```exercise
{
  "id": "e10",
  "type": "rhythm-tap",
  "title": "Tap in 3, with the count",
  "instructions": "Count 'ONE 2 3' out loud. The half note lasts through '2'.",
  "passScore": 0.7,
  "spec": { "bpm": 80, "timeSig": "3/4", "seq": "x:q x:q x:q | x:h x:q | x:q x:q x:q | x:h.", "showNotation": true, "countIn": 1, "loops": 1 }
}
```

**If a tap-back goes wrong:** replay and write the counts where notes start ("1, 3 | 1 2 3"), then tap from what
you wrote.

```ladder
{ "skill": "rhythm", "unlocks": 6, "intro": "Rhythm at your current rung — up to tapping back a bar in 3/4." }
```

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

**Before the DAW task, try it with your hands:** play the example and say "kick, snare, kick, snare" with the beats
(1 2 3 4). Then tap it on the table: left hand = kick on 1 and 3, right hand = snare on 2 and 4. In the DAW, build
it one sound at a time — kick first, loop it, add the snare, loop it, then the hi-hat — and listen after each layer.

## Drills

```exercise
{
  "id": "e1",
  "type": "read-note",
  "title": "Name it: middle C to C5",
  "count": 10,
  "passScore": 0.75,
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

## Between lessons (and the end of week 4)

- Two **Practice** sessions of about 10 minutes.
- Five minutes of note reading a day: the *See it, play it* exercise, saying the landmark and the count.
- Ready for week 5 when the dashboard doesn't say **practise first**. Week 5 completes the octave: la and ti join
  do-re-mi-fa-sol, so your degree bar should be on or near *1 to 5* first — if it's behind, give it a few extra
  Practice sessions.
