---
id: w12-l3-sixths-sevenths-and-the-fifth-trap
title: Sixths, Sevenths and the Fifth Trap
week: 12
order: 3
phase: p2
duration_min: 45
goals:
  - Tell an octave from a fifth, together and one after the other (do or sol?)
  - Build and hear the minor and major sixth (m6, M6), and find them as degree pairs
  - Build the minor and major seventh (m7, M7) using the interval flip
  - Sort the small intervals by size in the ear drill
prerequisites: [w12-l2-fourths-and-fifths]
tags: [intervals, octaves, ear]
songs:
  - { title: "My Bonnie Lies Over the Ocean", composer: "Traditional (Scottish)", public_domain: true }
---

# Sixths, Sevenths and the Fifth Trap

Earlier this week you named every distance from a half step to a fifth. Today your hands and eyes fill in the wide ones, up to the octave, each as a pair of degrees you know; their ear drills come later in the year, one at a time. Your ear drill today gathers the small intervals together. We start with the most common mix-up of all.

## The fifth trap

Play C4 and G4 together, then C4 and C5 together. Both sound clean and open, with no rub at all. That's why so many learners hear a fifth as "the same note, higher": after the octave, the fifth is the most blended, hollow interval there is. You've met this trap before, in week 7: "home or sol, in another octave?" is exactly octave or fifth, seen from home. Here's how to tell them apart:

- **Together:** an octave melts into *one* sound, a single richer note. A fifth stays *two* notes, open and hollow, like a horn call or an empty guitar chord.
- **One after the other:** the octave comes back to the same name. The fifth lands on a different note, and it's a smaller jump than the octave.

```example
{
  "title": "Together: fifth C–G, octave C–C (twice). Then one after the other: C→G, C→C",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 G4]:h [C4 C5]:h | [C4 G4]:h [C4 C5]:h | r:w | C4:q G4:q r:h | C4:q C5:q r:h" } ],
  "show": ["keyboard"]
}
```

### Try it: one note or two?

1. Hold **C4 + C5** together for three seconds, then **C4 + G4**. Ask only: *one* sound, or a *pair*? The octave is one fuller C; the fifth is two notes getting along.
2. Now one after the other: **C4 → C5**, then **C4 → G4**. After each, play C4 again: the octave "comes back" to it; the G stays somewhere new.
3. Repeat from F3 (F3 + F4, F3 + C4) and from A3 (A3 + A4, A3 + E4).

```exercise
{
  "id": "e4", "type": "listen", "title": "Check: octave or fifth?",
  "instructions": "Both notes together in each. One sound, or an open pair? A short diagnostic, not a test: this pair gets its own drill rung later. If you are unsure, play both candidates on your keyboard (the low note + its octave, the low note + its fifth) and compare before answering.",
  "spec": {
    "examples": [
      { "title": "Sound 1", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[D3 A3]:w" } ] },
      { "title": "Sound 2", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[E3 E4]:w" } ] }
    ],
    "questions": [
      { "q": "Sound 1 is…", "choices": ["an octave", "a fifth"], "answer": 1, "explain": "A fifth: D3 + A3. Play D3 + D4 right after it to hear the difference." },
      { "q": "Sound 2 is…", "choices": ["an octave", "a fifth"], "answer": 0, "explain": "An octave: E3 + E4. Play E3 + B3 after it: that's the open pair." }
    ]
  }
}
```

**If you can't hear it yet:** replay the question, then play both candidates yourself from its low note: that note plus 12 keys up (octave), and plus 7 keys up (fifth). Which of your two matched? Finding the low note first is the slow part; search with higher/lower until your key blends with it.

The fifth vs octave drill comes in week 15. Until then, whenever a degree question leaves you torn between do and sol, play both candidates against the note on your keyboard and ask "one note or two?"

## Sixths: a third, flipped

C up to A is a **major sixth (M6)**: 9 half steps. Now flip it: A up to C is a minor third (3 half steps). Flipping an interval (moving the bottom note up an octave) is called [[interval inversion]]. The two sizes always add up to 12 half steps, and major flips to minor:

| interval | half steps | flips to |
|---|---|---|
| m6 | 8 | M3 |
| M6 | 9 | m3 |
| m7 | 10 | M2 |
| M7 | 11 | m2 |

This makes wide intervals easy to *find*: for a M6 above C, go a minor third *down* from C (to A) and take that A an octave up. It doesn't tell you what they *sound* like, so here are both sixths.

```example
{
  "title": "From C4: minor 6th (C–A♭), then major 6th (C–A), each up then together",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q Ab4:q [C4 Ab4]:h | C4:q A4:q [C4 A4]:h" } ],
  "show": ["keyboard", "staff"]
}
```

The major sixth is bright and open: it's the first leap of *My Bonnie Lies Over the Ocean* ("My Bon-"). As degrees it's **do → la**, or **low sol → mi**, which is exactly how *My Bonnie* starts. The minor sixth is a half step narrower and sounds darker, a little bittersweet: **mi → do'** or **la → fa'** in a major key. It's the step just past a fifth: C to G, then one more half step to A♭.

```example
{
  "title": "My Bonnie (traditional): the first leap, G up to E, is a major sixth",
  "bpm": 100, "timeSig": "3/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "r:h G4:q | E5:q. D5:8 C5:q | D5:q C5:q A4:q | G4:q E4:h |" } ],
  "show": ["staff"]
}
```

```exercise
{
  "id": "e1", "type": "play-melody", "title": "My Bonnie, first phrase",
  "instructions": "Right hand. Feel how wide the first leap is: your hand has to stretch or move.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 90, "timeSig": "3/4", "key": "C", "seq": "r:h G4:q | E5:q. D5:8 C5:q | D5:q C5:q A4:q | G4:q E4:h |", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

### Try it: the two sixths

1. Play **G4 → E5** and hum "My Bon-" in your head: that's a major sixth. Now **G4 → E♭5**: one key narrower, darker.
2. From C4: count 8 keys up (A♭4) and 9 keys up (A4). Play C4 → A♭4, C4 → A4, three times each.
3. Play C4 → G4 → A♭4: the minor sixth is "just past the fifth". Then C4 → A4 → C5: the major sixth is "a bit below the octave".

```exercise
{
  "id": "e5", "type": "listen", "title": "Check: which sixth?",
  "instructions": "Both leaps go up from the same note. A short diagnostic, not a test: minor vs major 6th gets its own drill rung later. Play D4 → B♭4 and D4 → B4 yourself and compare before answering.",
  "spec": {
    "examples": [
      { "title": "Leap 1", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "D4:h B4:h" } ] },
      { "title": "Leap 2", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "D4:h Bb4:h" } ] }
    ],
    "questions": [
      { "q": "Leap 1 is…", "choices": ["a minor 6th", "a major 6th"], "answer": 1, "explain": "Major 6th: D → B (9 keys). It fits \"My Bon-\"." },
      { "q": "Leap 2 is…", "choices": ["a minor 6th", "a major 6th"], "answer": 0, "explain": "Minor 6th: D → B♭ (8 keys), darker, just past the fifth A." }
    ]
  }
}
```

**If you can't hear it yet:** replay, then play the first note and both candidates (8 and 9 keys up) yourself; pick the one that matches. Or start the "My Bon-" tune in your head from the first note: if the second note fits, it's major.

Their ear drill comes in week 16; for now the keyboard comparison is the method.

## Sevenths: one step short of the octave

A seventh is easiest to find from the top: go to the octave, then step back down.

- **Major seventh (M7)**, 11 half steps: a half step below the octave (C–B), **do → ti**. It sounds like an octave that just missed: sharp and tense, and ti wants to go on to do.
- **Minor seventh (m7)**, 10 half steps: a whole step below the octave (C–B♭); in a major key **sol → fa'** or **re → do'**. Wide, but softer; you'll meet it again inside seventh chords in week 15.

```example
{
  "title": "From C4: minor 7th (C–B♭), major 7th (C–B), octave (C–C)",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q Bb4:q [C4 Bb4]:h | C4:q B4:q [C4 B4]:h | C4:q C5:q [C4 C5]:h" } ],
  "show": ["keyboard"]
}
```

Today your hands learn them; their ear drill comes in week 17.

### Try it: sevenths from the top

1. Play C4 → C5, then step back one key: C4 → B4 (major 7th). Step back two: C4 → B♭4 (minor 7th).
2. Play C4 + B4 together, then C4 + B♭4. The major 7th grates; the minor 7th is wide and softer. Then resolve each: B4 → C5, B♭4 → A4.

```exercise
{
  "id": "e2", "type": "build-interval", "title": "Build the wide intervals",
  "instructions": "Use the tricks: a sixth is a flipped third; a seventh is one or two half steps below the octave.",
  "count": 10, "passScore": 0.7,
  "spec": { "intervals": ["P5", "m6", "M6", "m7", "M7", "P8"], "direction": "asc", "root": "random" }
}
```

```exercise
{
  "id": "e3", "type": "quiz", "title": "Flip check",
  "spec": { "questions": [
    { "q": "A major sixth flips to a…", "choices": ["major third", "minor third", "perfect fourth", "minor sixth"], "answer": 1, "explain": "9 + 3 = 12 half steps; major flips to minor." },
    { "q": "How many half steps in a minor seventh?", "choices": ["9", "10", "11", "12"], "answer": 1, "explain": "An octave (12) minus a whole step (2)." },
    { "q": "C up to B is a…", "choices": ["m7", "M7", "M6", "P8"], "answer": 1, "explain": "One half step short of the octave." },
    { "q": "Played together, which one melts into a single sound?", "choices": ["The fifth", "The octave"], "answer": 1, "explain": "The fifth stays two notes, open and hollow. That's the tell." }
  ] }
}
```

## Today's drill: the small intervals together

Your ear drill stays with the intervals up to the fifth, now mixed. This lesson opens two rungs: **3rd, 4th or 5th** (three choices), then **Seconds and thirds** (half step, whole step, minor and major 3rd together). With more choices, sort by size first.

**Try it:** thumb on C, play C–E (finger 3), C–F (finger 4), C–G (finger 5), then in a mixed order: C–G, C–E, C–F. Feel how far the hand reaches; listen for the 3rd as a *skip* that still has a bright colour (do–mi), the 4th and 5th as wider, plainer *leaps* (do–fa, do–sol). Then do the same with the four small ones from D: D–E♭, D–E, D–F, D–F♯.

```exercise
{
  "id": "c2",
  "type": "listen",
  "title": "Check: 3rd, 4th or 5th?",
  "instructions": "Size first: skip or leap? Then, for a leap, the anchor tunes.",
  "spec": {
    "examples": [
      { "title": "Pair 1", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:h E4:h" } ] },
      { "title": "Pair 2", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "G4:h D5:h" } ] },
      { "title": "Pair 3", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "E4:h A4:h" } ] }
    ],
    "questions": [
      { "q": "Pair 1 is…", "choices": ["major 3rd", "perfect 4th", "perfect 5th"], "answer": 0, "explain": "C–E: 4 half steps, a skip (do–mi)." },
      { "q": "Pair 2 is…", "choices": ["major 3rd", "perfect 4th", "perfect 5th"], "answer": 2, "explain": "G–D: 7 half steps (Twinkle, do–sol)." },
      { "q": "Pair 3 is…", "choices": ["major 3rd", "perfect 4th", "perfect 5th"], "answer": 1, "explain": "E–A: 5 half steps (Here comes…)." }
    ]
  }
}
```

**If you can't hear it yet:** count half steps: **4, 5 or 7** for the three; **1, 2, 3 or 4** for the small ones. Or play the first note and each candidate yourself, replay, and pick the match.

**Before the drill, rehearse the method** (in the *How to do it* box above the drill, for the rung you're on): size first (step, skip or leap?), then the colour for skips (bright or dark) or the anchor for leaps (Bride or Twinkle); keyboard check when unsure. The drill runs at your current interval rung.

```ladder
{ "skill": "intervals", "unlocks": 6, "intro": "Opens \"3rd, 4th or 5th\", then \"Seconds and thirds\"; the drill runs at your current rung." }
```

## Between lessons

- **3 minutes, daily:** octave vs fifth from random low notes, together then one after the other; ask "one note or two?"
- **2 minutes:** My Bonnie's first phrase; then G → E (M6) and G → E♭ (m6), eyes closed, name each.
- **2 minutes:** from any key, find its 6ths and 7ths: M6 = a minor 3rd down, then up an octave; M7 = one key below the octave.
- One Practice-page session: intervals at your rung.
