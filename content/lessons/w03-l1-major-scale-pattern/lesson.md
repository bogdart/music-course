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

Try building G major: G →W→ A →W→ B →H→ C →W→ D →W→ E →W→ **F♯** →H→ G. The pattern forces one black key, F♯. You'll play in G properly in week 9.

```keyboard
{ "range": ["C4", "C6"], "highlight": ["G4", "A4", "B4", "C5", "D5", "E5", "F#5", "G5"], "labels": "names", "colors": { "G4": "root", "G5": "root" } }
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
normal in week 3. **If you can't hear it yet:** put a finger on each key as the example plays (the keyboard picture
lights them) and play it yourself: C D E F♯, stop. Then C D E F, stop. Go back and forth three times, only the first
four notes, listening to the last step: E→F is squeezed (a half step), E→F♯ is airy (a whole step). Hearing a wrong
note inside a scale is a later skill; today it is enough to notice that one key changed. The *Spot the wrong note*
demo below is a second, unscored try.

## Ear practice: the scale you already echo

No new ear rungs today — the scale is the new idea, and your ear needs time with what's open. Notice that the notes
you echo (C D E F G) are the first five notes of C major, and the run before each echo is the scale's bottom half,
up and back. The drills below run at your current melody and octave rungs.

**Try it:** play the C major scale up to G and back (C D E F G F E D C). Then play just C, E, G: those are the skips
inside the run. Your echo tunes are made of exactly these steps and skips.

```ladder
{ "skill": "melody", "unlocks": 4, "intro": "Echoes at your current melody rung (review: up to four notes from C to G)." }
```

```ladder
{ "skill": "octave", "unlocks": 3, "intro": "Octaves at your current rung (review: together, and which of two is the octave)." }
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

Another "almost" C major, unscored. Listen, guess which note is odd, then press "Reveal notation" and compare with
the real scale underneath it. If nothing sounded odd, that's fine — play both on your keyboard, slowly, and listen
to the last two notes of each.

```exercise
{
  "id": "e5",
  "type": "listen",
  "title": "Spot the wrong note (demo, not scored)",
  "spec": {
    "examples": [
      { "title": "C major… almost", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q F4:q | G4:q A4:q Bb4:q C5:q" } ], "show": ["keyboard"] },
      { "title": "The real C major", "bpm": 80, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q F4:q | G4:q A4:q B4:q C5:q" } ], "show": ["keyboard"] }
    ]
  }
}
```

After revealing, find the changed key on your keyboard and play its last step up to C: it arrives without the usual
squeeze.

## Between lessons

- Two **Practice** sessions of about 10 minutes.
- Play C major up and down once a day, slowly, with the thumb tuck; say the step pattern (W W H W W W H) as you go.
- Ready for the next lesson when the dashboard doesn't say **practise first**.
