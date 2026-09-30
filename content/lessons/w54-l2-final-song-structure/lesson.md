---
id: w54-l2-final-song-structure
title: "Final Project 2: Full Structure"
week: 54
order: 2
phase: p5
duration_min: 50
goals:
  - Lay out the whole 3-minute form with section markers
  - Program drums and bass for the full length (checkpoint 4)
  - Make verse 2 differ from verse 1 and give the bridge real contrast
prerequisites: [w54-l1-final-song-writing]
tags: [songwriting, final-project, form, drums, daw]
---

# Final Project 2: Full Structure

You have a core; today it becomes a whole song. This is where home-made songs lose steam: the core gets copy-pasted until
the timeline is long enough, and the result is three minutes of the same thing. The antidote is to make every repeat a
little different.

## Checkpoint 4 — full structure, drums and bass

1. **Markers (5 min).** Add a **section marker** at every section of your form map (the "+ marker" button).
2. **Copy (5 min).** Copy the core into every section. Check: the timeline shows at least three minutes.
3. **Drums (15 min).** Start with the plainest groove — kick on 1 and 3, snare on 2 and 4, eighth hats — and copy it
   through the song. Only then vary: verse 1 hats only or half the kicks, chorus full, bridge none or half-time.
   Check: close your eyes, press play from a random point — can you tell which section you are in from the drums alone?
4. **Bass (10 min).** Roots on the downbeat everywhere first; then in the choruses add eighth notes or an octave jump.
   Check: solo bass + drums; the kick and the bass notes should land together on beat 1.
5. **Fills (5 min).** One fill in the last bar before each new section (the rhythm below is a good default).
6. **Listen through once (5 min).** Where your attention drifts, the repeat is too exact: add or remove one layer there.

**Stuck on the bridge?** Take the chorus chords in a new order starting on IV or vi, drop the drums, and keep the bass
on long notes.

Rules of thumb (common pop habits, not laws — some of the songs you transcribed break them, so treat them as a
default you can override on purpose):

- The intro is a subset of the chorus (drums only, or keys only).
- Verse 2 is not verse 1: add one layer or change the drum pattern.
- A fill into every new section; a crash on its first beat.
- The bridge contrasts: a new chord order, no drums, or a half-time feel.

```exercise
{
  "id": "w51l2-fill",
  "type": "rhythm-tap",
  "title": "Tap a section fill",
  "spec": {
    "bpm": 90,
    "timeSig": "4/4",
    "seq": "x:q x:q x:q x:q | x:q x:q x:16 x:16 x:16 x:16 x:16 x:16 x:16 x:16",
    "showNotation": true,
    "countIn": 1,
    "loops": 2
  }
}
```

```exercise
{
  "id": "w51l2-cp4",
  "type": "daw-task",
  "title": "Checkpoint 4: full structure with drums and bass",
  "spec": {
    "template": {
      "bpm": 100,
      "key": "C",
      "tracks": [
        {"instrument": "piano", "seq": ""},
        {"instrument": "bass", "seq": ""},
        {"instrument": "lead", "seq": ""},
        {"instrument": "drums", "seq": ""},
        {"instrument": "pad", "seq": ""},
        {"instrument": "pluck", "seq": ""}
      ]
    },
    "task": "In your final-song project: lay out the whole form with section markers (at least three minutes), copy the core into every section, and program drums and bass for the full length — fills into each section, verse 2 different from verse 1, a contrasting bridge.",
    "checks": [
      {"kind": "has-tracks", "instruments": ["piano", "bass", "lead", "drums"]},
      {"kind": "duration-seconds", "min": 180},
      {"kind": "sections", "names": ["verse", "chorus"], "min": 5},
      {"kind": "drum-pattern", "requires": ["kick", "snare"], "track": 3},
      {
        "kind": "custom",
        "id": "w51-cp4-bridge",
        "note": "Self-check: verse 2 differs from verse 1, and the bridge contrasts."
      }
    ],
    "projectRef": "final-song"
  }
}
```

## Ear: rhythm

Count out loud ("1 and 2 and…") through the whole item, rests included; nail one bar before adding the next. The *How
to do it* box under the drill shows the exact method for your current rung.

```ladder
{"skill": "rhythm", "unlocks": 16, "intro": "Rhythm at your own rung."}
```

## Between lessons

Play the song once through with only drums and bass unmuted. Mark the one spot where it drags — session 3 starts there.
