---
id: w03-l1-major-scale-pattern
title: The Major Scale Pattern
week: 3
order: 1
phase: p1
duration_min: 45
goals:
  - Build a major scale from any root using W-W-H-W-W-W-H
  - Play C major, one octave up and down, with correct fingering
  - Notice when one note of the major scale is "wrong"
prerequisites: [w02-l3-pulse-tempo-first-daw]
tags: [scales, major, keyboard, ear]
---

# The major scale

A [[scale]] is a ladder of notes that a piece of music mostly stays on. Most of the songs you know — nursery rhymes, hymns, a huge share of pop — are built on one ladder: the [[major scale]]. It sounds bright and settled.

## Why C major is all white keys

Play the white keys from C4 to C5. That's C major. Now look at the steps between them, using last week's rule (no black key between E–F and B–C):

C →**W**→ D →**W**→ E →**H**→ F →**W**→ G →**W**→ A →**W**→ B →**H**→ C

**W W H W W W H.** That pattern *is* the major scale. The letters don't matter; the pattern of steps does. Start on any key, follow W-W-H-W-W-W-H, and you get a major scale — it will just need some black keys.

```example
{
  "title": "C major scale, up and down",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q F4:q | G4:q A4:q B4:q C5:q | C5:q B4:q A4:q G4:q | F4:q E4:q D4:q C4:q" } ],
  "show": ["staff", "keyboard"]
}
```

Try building G major: G →W→ A →W→ B →H→ C →W→ D →W→ E →W→ **F♯** →H→ G. The pattern forces one black key, F♯. You'll play in G properly in week 7.

```keyboard
{ "range": ["C3", "C5"], "highlight": ["G3", "A3", "B3", "C4", "D4", "E4", "F#4", "G4"], "labels": "names", "colors": { "G3": "root", "G4": "root" } }
```

## Fingering

Right hand, thumb = 1, little finger = 5. For C major going up: **1 2 3** (C D E), then tuck the **thumb under** onto F, and continue **1 2 3 4 5** (F G A B C). Going down, reverse it: 5 4 3 2 1, then cross finger **3 over** the thumb onto E. Slow and even beats fast and bumpy.

## A wrong note in the scale

Change one note and the scale sounds different. **Try it:** play C D E F G A B C slowly. Then play it again with
F♯ instead of F. Then once more with the real F. Listen at the 4th note each time.

```example
{
  "title": "C major with one wrong note (F♯ instead of F)",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q F#4:q | G4:q A4:q B4:q C5:q" } ],
  "show": ["keyboard"]
}
```

F♯ may sound slightly "off", as if it belongs to a different tune — or you may not notice anything yet. Both are
normal in week 3. **If you can't hear it:** play the scale with the wrong note and with the right one, back to
back, three times; then play the pattern W-W-H by eye and check where the step sizes break. The *Spot the wrong
note* exercise below practises it.

## Search across two octaves

The last pitch rung adds a new first question: **which register?** The mystery note is now anywhere from C3 to B4.

**Try it:** play C3, then C4. C3 is low and dark, C4 middle. Then play the guided example below and decide: closer to
C3 or to C4? (It's **A3** — shown on purpose: lowish, but not as dark as C3.) Start the search in that octave:
F3, then jump, then step.

```example
{
  "title": "Guided search: the mystery note is A3",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "A3:w" } ],
  "show": ["keyboard"]
}
```

**If you pick the wrong octave:** the search still works — the app says *higher* or *lower*; a note with the right
letter in the wrong octave gets its own message ("go up by a whole octave").

```ladder
{ "skill": "pitch", "unlocks": 10, "intro": "Pitch at your current rung — up to finding the note across two octaves." }
```

## Echo: from C to G

The next two melody rungs use all five fingers, **C D E F G** (thumb on C): three notes, then four. Now some moves
**skip** a key. For the four-note version the app plays a run **C D E F G F E D C** first, to remind your ear where
C is (next lesson explains why that run is so useful).

**Try it:** play C → E (a skip up), then C → D (a step up). Then E → C and D → C. Say "step" or "skip" each time. In
the echo, decide for each move: up or down, then step or skip.

```example
{
  "title": "The run the app plays first: C D E F G F E D C",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h" } ],
  "show": ["keyboard"]
}
```

**If a skip confuses you:** play the note you think it is, then the one next to it. Same method as the search:
compare, move, merge.

```ladder
{ "skill": "melody", "unlocks": 4, "intro": "Echoes at your current melody rung — up to four notes from C D E F G." }
```

## Octaves: a single pair

The next octave rung takes the comparison away: two notes one after the other, about an octave apart — **the same
note again, or a different one?** This is the hardest kind so far.

**Try it:** play D3 → D4 (same letter), then D3 → G♯3 and D3 → G♯4 (different letters). Then hold D3 and add
each: the octave is still, the other rubs. In the drill, before answering, imagine the first note played again, higher: does the second note
match that echo?

**If you can't hear it yet:** find the first note by search, count 12 keys up and play it, then replay the question:
is the second note that key? Use *Both together* after each answer — the together-sound is the clue you trust.

```ladder
{ "skill": "octave", "unlocks": 6, "intro": "Octaves at your current rung — up to 'same or different, one after the other'." }
```

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "The pattern",
  "spec": { "questions": [
    { "q": "The major scale step pattern is…", "choices": ["W W H W W W H", "W H W W H W W", "H W W W H W W"], "answer": 0 },
    { "q": "In C major, where are the half steps?", "choices": ["E–F and B–C", "C–D and G–A", "D–E and A–B"], "answer": 0 },
    { "q": "G major needs one black key. Which?", "choices": ["F♯", "B♭", "C♯"], "answer": 0 },
    { "q": "How many different notes are in a major scale (not counting the top repeat)?", "choices": ["5", "7", "8"], "answer": 1 },
    { "q": "C major going up: after playing E with finger 3, you…", "choices": ["tuck the thumb under onto F", "use finger 4 on F", "jump the hand"], "answer": 0 },
    { "q": "F major needs one black key. Following W-W-H from F: F G A ?", "choices": ["B", "B♭", "C"], "answer": 1, "explain": "A to the next note must be a half step: B♭." }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e2",
  "type": "build-scale",
  "title": "Build it with the pattern",
  "instructions": "Select the seven notes of the major scale on the given root. Count W-W-H-W-W-W-H on the keyboard.",
  "count": 6,
  "passScore": 0.75,
  "spec": { "roots": ["C", "G", "F"], "scale": "major", "prompt": "name" }
}
```

```exercise
{
  "id": "e3",
  "type": "play-scale",
  "title": "C major, slowly",
  "instructions": "Right hand, thumb under on F going up, 3 over on E going down.",
  "passScore": 0.75,
  "spec": { "root": "C", "scale": "major", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 60, "metronome": true }
}
```

```exercise
{
  "id": "e5",
  "type": "listen",
  "title": "Spot the wrong note",
  "spec": {
    "example": { "title": "C major… almost", "bpm": 80, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q F4:q | G4:q A4:q Bb4:q C5:q" } ] },
    "questions": [
      { "q": "Which note sounded out of place?", "choices": ["the 3rd", "the 5th", "the 7th"], "answer": 2, "explain": "B♭ replaced B, so the step to C became a whole step." },
      { "q": "What should the 7th note of C major be?", "choices": ["B", "B♭", "A"], "answer": 0 }
    ]
  }
}
```

## Between lessons

- Two **Practice** sessions of about 10 minutes.
- Play C major up and down once a day, slowly, with the thumb tuck; say the step pattern (W W H W W W H) as you go.
- Ready for the next lesson when the dashboard doesn't say **practise first**.
