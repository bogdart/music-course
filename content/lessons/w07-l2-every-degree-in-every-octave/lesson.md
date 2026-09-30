---
id: w07-l2-every-degree-in-every-octave
title: "Every Degree in Every Octave"
week: 7
order: 2
phase: p1
duration_min: 45
goals:
  - "Name any degree of C major in octave 3, 4 or 5: move it home first, then use the usual method"
  - Echo a short tune that plays an octave away from your hand, in whatever octave you like
  - Tell major from minor when the chord sits low or high
prerequisites: [w07-l1-do-and-sol-in-other-octaves]
tags: [ear, octaves, register, degrees, melody, chords, keyboard]
songs:
  - { title: "Mary Had a Little Lamb", composer: "Traditional", public_domain: true }
---

# Every degree in every octave

Last lesson: do, mi and sol in other octaves — the notes of the home chord, the easiest ones. Today the other four join, and the same idea spreads to tunes and chords. One change, three places.

## All seven, anywhere: move it home, then name it

For the leaning notes (2, 4, 6, 7), function still survives the octave jump, but more faintly than "finished vs open". So the method has **two steps**:

1. **Move it home.** In your head if you can; on the keyboard if you can't: find the note (search), then jump by 12 keys into the cadence's octave, around C4.
2. **Name it there**, exactly as in one octave: at rest or leaning? Which way? Walk home, or count up from C.

```example
{
  "title": "Cadence, then F5 (4) walking down to C5; cadence, then the same note as F4, walking to C4",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C3 C4 E4 G4]:q [F3 C4 F4 A4]:q [G3 B3 D4 G4]:q [C3 C4 E4 G4]:q | F5:h r:h | F5:q E5:q D5:q C5:q | [C3 C4 E4 G4]:q [F3 C4 F4 A4]:q [G3 B3 D4 G4]:q [C3 C4 E4 G4]:q | F4:h r:h | F4:q E4:q D4:q C4:q" } ],
  "show": ["keyboard"]
}
```

**Try it:**

1. Play the cadence, then F5. Hold it. Now play F4 — the same letter, in home's octave. Does F4 feel like it leans down to E? Walk it: F E D C. Then walk F5 E5 D5 C5: the same four steps, higher.
2. Cadence, then A5; move it to A4 and walk up: A B C. Cadence, then D3; move it to D4 and walk down: D C.
3. Octave 3 has its own do: C3. A note in octave 3 walks home to C3, a note in octave 5 to C5. After a drill answer, **Question, then walk home** does exactly this — then play C4 yourself to hear that it's the same do.

**If you can't hear it yet:** don't try to hear it — move it. Search, jump by 12, press **Reference**, play your moved note after the cadence. Count from C (C D E F G A B = 1 to 7). The first week of this takes a while per question; it speeds up.

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Check: 2, 4 or 6, far from home",
  "instructions": "Each example plays the cadence, then one note in another octave. Move it home on your keyboard, then name it.",
  "spec": {
    "examples": [
      { "title": "Question 1", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C3 C4 E4 G4]:q [F3 C4 F4 A4]:q [G3 B3 D4 G4]:q [C3 C4 E4 G4]:q | r:h A5:h" } ] },
      { "title": "Question 2", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C3 C4 E4 G4]:q [F3 C4 F4 A4]:q [G3 B3 D4 G4]:q [C3 C4 E4 G4]:q | r:h D3:h" } ] },
      { "title": "Question 3", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C3 C4 E4 G4]:q [F3 C4 F4 A4]:q [G3 B3 D4 G4]:q [C3 C4 E4 G4]:q | r:h F5:h" } ] }
    ],
    "questions": [
      { "q": "Question 1: the note is degree…", "choices": ["2", "4", "6"], "answer": 2, "explain": "A5: la, an octave above A4." },
      { "q": "Question 2: the note is degree…", "choices": ["2", "4", "6"], "answer": 0, "explain": "D3: re, an octave below D4." },
      { "q": "Question 3: the note is degree…", "choices": ["2", "4", "6"], "answer": 1, "explain": "F5: fa, an octave above F4." }
    ]
  }
}
```

### Before the degree drill

This lesson opens "All seven, other octaves". The **How to do it** box: first move the note home — in your head or on the keyboard (find it, jump by 12 keys into the cadence's octave) — then use your usual method: at rest or leaning, then walk home.

```ladder
{ "skill": "degrees", "unlocks": 11, "intro": "Opens all seven degrees in octaves 3, 4 and 5; the drill runs at your current rung." }
```

## The tune in another octave

A melody played an octave higher is the same melody: same steps, same path. But your fingers start from a different key, and at first your ear may not even recognise it. The melody drill's next rung plays short tunes (degrees 1–5) an octave **above or below** the cadence. The good news: **you may answer in any octave.** Play it where your hand already is.

```example
{
  "title": "Mary's first line in octave 4, then octave 5, then octave 3",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "E4:q D4:q C4:q D4:q | E4:q E4:q E4:h | E5:q D5:q C5:q D5:q | E5:q E5:q E5:h | E3:q D3:q C3:q D3:q | E3:q E3:q E3:h" } ],
  "show": ["staff", "keyboard"]
}
```

**Try it:**

1. Play Mary's first line with your thumb on C4: E D C D E E E.
2. Move your thumb to C5 and play the same fingers. Then thumb on C3. Your hand does the same thing three times.
3. Listen to the example with your eyes closed. Does the octave-5 version sound like "Mary, higher" or like a new tune? Either is normal today.

**Before the melody drill** (the **How to do it** routine):

1. Replay and say the path: up/down, step/skip. The path doesn't care about the octave.
2. Find the **first note** in any octave you like: search, or search near the tune and jump by 12 to your hand.
3. Play the path from there. Wrong note? Too high → one key left, as always.

```ladder
{ "skill": "melody", "unlocks": 9, "intro": "Opens \"The tune in another octave\": short tunes an octave away; answer in any octave." }
```

```exercise
{
  "id": "k1",
  "type": "play-melody",
  "title": "Mary, one octave up",
  "instructions": "Thumb on C5. On a small MIDI keyboard, use its octave-up button, or the on-screen keys.",
  "passScore": 0.75,
  "spec": { "bpm": 90, "timeSig": "4/4", "key": "C", "seq": "E5:q D5:q C5:q D5:q | E5:q E5:q E5:h | D5:q D5:q D5:h | E5:q G5:q G5:h", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

## Major or minor, low and high

The chord drill so far kept its triads in the middle of the keyboard. Its next rung moves them anywhere between C3 and C5 — low, middle or high. Higher chords are usually easy. **Low chords blur**: the notes sit close in frequency and rumble together, so the bright/dark difference is harder to hear.

```example
{
  "title": "C major then C minor: middle, high, low",
  "bpm": 66, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:h [C4 Eb4 G4]:h | [C5 E5 G5]:h [C5 Eb5 G5]:h | [C3 E3 G3]:h [C3 Eb3 G3]:h" } ],
  "show": ["keyboard"]
}
```

**Try it:** play C major and C minor in all three octaves, as in the example. In the low octave, listen to the overall mood rather than to single notes. Then play the low pair again and follow each with the same chord in the middle octave: does moving it up make the colour clearer?

**If you can't hear it yet:** move it up. Find the chord's root (the lowest note), play major and minor on that root in the middle octave, replay the question, pick the match.

```exercise
{
  "id": "c2",
  "type": "listen",
  "title": "Check: bright or dark, low or high",
  "instructions": "Decide; if unsure, rebuild each chord in the middle octave and compare.",
  "spec": {
    "example": { "title": "Two chords", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[D3 F3 A3]:w | r:h | [G4 B4 D5]:w" } ], "show": ["keyboard"] },
    "questions": [
      { "q": "Chord 1 (low) is…", "choices": ["major", "minor"], "answer": 1, "explain": "D–F–A, D minor, in octave 3." },
      { "q": "Chord 2 (high) is…", "choices": ["major", "minor"], "answer": 0, "explain": "G–B–D, G major, in octave 4–5." }
    ]
  }
}
```

```ladder
{ "skill": "chords", "unlocks": 2, "intro": "Opens \"Major or minor, any register\": the same two colours, low or high." }
```

## Between lessons

- **Two Practice sessions of about 10 minutes.** Three ladders moved today; the Practice page picks the one furthest behind.
- **Keyboard, 3 minutes:** Mary's first line from C3, C4 and C5. Then the cadence, then any white key anywhere: move it home, name it.
- **Honest expectation:** the degree rung in other octaves is one of the slowest of the year. If it hovers around 60–70% for a week while you use the method, that's normal progress, not failure. Next lesson is hands-on: octaves in the DAW.
