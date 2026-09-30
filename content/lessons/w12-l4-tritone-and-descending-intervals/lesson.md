---
id: w12-l4-tritone-and-descending-intervals
title: The Tritone, Intervals Going Down, and Bass Lines in Any Key
week: 12
order: 4
phase: p2
duration_min: 50
goals:
  - Build the tritone between the fourth and the fifth, and find it as fa–ti in a major key
  - Build and play intervals going down, and name them by flipping them
  - Mix all the intervals from a half step to a fifth in the ear drill
  - Follow a bass line in any key, using the intervals the bass moves by
prerequisites: [w12-l3-sixths-sevenths-and-the-fifth-trap]
tags: [intervals, bass, keys, ear, keyboard]
songs:
  - { title: "Joy to the World", composer: "Lowell Mason (1839), after Handel", public_domain: true }
---

# The Tritone, Intervals Going Down, and Bass Lines in Any Key

Three things today: the one interval we haven't met yet, intervals turned upside down in time (the second note *lower*), and a use for everything this week: following a bass line in any key.

## The tritone

Between the perfect fourth (5 half steps) and the perfect fifth (7) sits one more interval: the [[tritone]], 6 half steps, exactly half an octave. Above C it's F♯; above B it's F. It's the only interval that flips into itself (6 + 6 = 12). In a major key there's exactly one: **fa – ti** (F and B in C).

What it sounds like: neither the settled fourth nor the open fifth. It hangs in the air, unresolved, as if it's waiting for something. Compare the three:

```example
{
  "title": "From C4: fourth (C–F), tritone (C–F♯), fifth (C–G)",
  "bpm": 66, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q F4:q [C4 F4]:h | C4:q F#4:q [C4 F#4]:h | C4:q G4:q [C4 G4]:h" } ],
  "show": ["keyboard", "staff"]
}
```

You already know where fa and ti want to go: ti leans up to do, fa leans down to mi. Played together, they squeeze inward, B up to C and F down to E. That little move is the engine inside the V7 chord you'll build in week 15.

```example
{
  "title": "The tritone B–F (ti–fa) squeezing inward to C–E (do–mi), twice",
  "bpm": 66, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[B3 F4]:h [C4 E4]:h | [B3 F4]:h [C4 E4]:h" } ],
  "show": ["keyboard"]
}
```

### Try it: the tritone under your hands

1. From C4, play **C4 → F4**, **C4 → F♯4**, **C4 → G4**, slowly, three times. Give each a word: fourth = settled, tritone = hanging, fifth = open.
2. Play **F4 → B4** (fa → ti) in C, then **B3 + F4** together, then move both inward to **C4 + E4**. Feel the tension let go.
3. Find fa – ti in G (C – F♯) and in F (B♭ – E). Same sound, same pull.

```exercise
{
  "id": "e5", "type": "listen", "title": "Check: fourth, tritone or fifth?",
  "instructions": "Each leap goes up from G3. A short diagnostic, not a test: the tritone gets its own drill rung later. Play all three candidates from G3 on your keyboard (C4, C♯4, D4) and compare before answering.",
  "spec": {
    "examples": [
      { "title": "Leap 1", "bpm": 66, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "G3:h C#4:h" } ] },
      { "title": "Leap 2", "bpm": 66, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "G3:h D4:h" } ] },
      { "title": "Leap 3", "bpm": 66, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "G3:h C4:h" } ] }
    ],
    "questions": [
      { "q": "Leap 1 is…", "choices": ["a fourth", "a tritone", "a fifth"], "answer": 1, "explain": "Tritone: G → C♯ (6 keys). It hangs, unsettled." },
      { "q": "Leap 2 is…", "choices": ["a fourth", "a tritone", "a fifth"], "answer": 2, "explain": "Fifth: G → D (7 keys), open and stable, the Twinkle leap." },
      { "q": "Leap 3 is…", "choices": ["a fourth", "a tritone", "a fifth"], "answer": 0, "explain": "Fourth: G → C (5 keys), the \"Here Comes the Bride\" leap, sol → do." }
    ]
  }
}
```

**If you can't hear it yet:** replay, then play all three candidates from the first note yourself (5, 6 and 7 keys up) and pick the one that matches. The tritone's own ear drill comes in week 18; for now this comparison is the method.

## Going down

Melodies fall as often as they rise. A falling interval covers the same distance as a rising one, but it often *feels* different at first: you hear the high note first, and the lower note arrives like a landing. You've heard falling intervals since week 3 without the names: every walk home is one. **Sol → do**, falling, is a falling 5th; **mi → do** a falling major 3rd; **do → low sol** a falling 4th.

```example
{
  "title": "Up, then down: major 3rd (C–E, E–C), fifth (C–G, G–C), octave (C–C, C–C)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q E4:q E4:q C4:q | C4:q G4:q G4:q C4:q | C4:q C5:q C5:q C4:q" } ],
  "show": ["keyboard"]
}
```

### Try it: flip it to name it

1. Play **G4 → C4** (falling fifth, sol → do). Now play it the other way round, **C4 → G4**: the Twinkle leap you know. Same distance.
2. Do the same with **E4 → C4** (falling major 3rd) and **C5 → C4** (falling octave).
3. Whenever a falling interval puzzles you, play its two notes low-then-high and name the rising interval.

*Joy to the World* opens with the most common falling line of all: the major scale, straight down from do' to do. Every step is a falling second (whole or half step).

```example
{
  "title": "Joy to the World (Lowell Mason, public domain), opening, simplified rhythm",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C5:q. B4:8 A4:q. G4:8 | F4:q. E4:8 D4:q C4:q |" } ],
  "show": ["staff", "keyboard"]
}
```

```exercise
{
  "id": "e1", "type": "play-melody", "title": "Joy to the World, opening",
  "instructions": "Right hand, from C5 down to C4. Two of the steps are half steps, C–B and F–E: feel how close those keys are.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "C5:q. B4:8 A4:q. G4:8 | F4:q. E4:8 D4:q C4:q |", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

Falling intervals join your ear drills in week 21. Today your hands learn to find them: the target note is *below* the given one.

```exercise
{
  "id": "e2", "type": "build-interval", "title": "Build intervals going down",
  "instructions": "Play the note that is the given interval BELOW the shown note.",
  "count": 10, "passScore": 0.7,
  "spec": { "intervals": ["M2", "M3", "P4", "P5", "P8"], "direction": "desc", "root": "random" }
}
```

```exercise
{
  "id": "e3", "type": "build-interval", "title": "Fourth, tritone or fifth, going up",
  "count": 8, "passScore": 0.7,
  "spec": { "intervals": ["P4", "TT", "P5"], "direction": "asc", "root": "random" }
}
```

**If a falling interval won't come out right:** find the top note first, then count keys down (M2 = 2, M3 = 4, P4 = 5, P5 = 7, P8 = 12), or find the rising interval from the *answer* note up to the given one.

## Today's interval drill: half step to fifth

This lesson opens **Seconds to fifths**: all six intervals from the half step to the fifth, going up, one octave. Six choices is a lot, so split the question in two, as the *How to do it* box says:

1. **Size:** step (2nd), skip (3rd) or leap (4th/5th)?
2. **Within the size:** steps squeezed or airy; skips dark or bright; leaps Bride or Twinkle.

**Before the drill, rehearse the method** (in the *How to do it* box above the drill, for the rung you're on): first note = do, size first, then colour or anchor; play the candidates on the keyboard whenever you're unsure. The drill runs at your current interval rung.

```ladder
{ "skill": "intervals", "unlocks": 7, "intro": "Opens \"Seconds to fifths\": all six intervals from a half step to a fifth, going up; the drill runs at your current rung." }
```

## Bass lines in any key

Here's where interval names pay off. A bass line under I, IV, V and vi moves by a few fixed distances, whatever the key:

| Bass move | Up | Or down |
|---|---|---|
| I → IV (do → fa) | a 4th | a 5th |
| I → V (do → sol) | a 5th | a 4th |
| I → vi (do → la) | a major 6th | a minor 3rd |
| IV → V (fa → sol) | a whole step | |

So once you've found home, the next bass note is often a 4th, a 5th, a minor 3rd down, or a step away. Your bass drill has used the near keys (C, G, F, D, B♭) since last week. This lesson opens **any key**.

### Try it: one bass line in a far key

1. Play the cadence in **A major** yourself: A (A C♯ E), D (D F♯ A), E (E G♯ B), A. Stop on a low **A2**: home.
2. Play the bass of I – vi – IV – V: **A2 – F♯2 – D2 – E2**. Name each move: down a minor 3rd, down a major 3rd, up a whole step.
3. Now in **E♭**: E♭2 – C2 – A♭1 – B♭1. Same shape, same moves, a new home.

Check: a cadence in a far key, then four chords. Answer about the bass.

```exercise
{
  "id": "e6", "type": "listen", "title": "Check: a bass line in E major",
  "instructions": "Find home (the cadence's last bass note) first, then search each bass note from there.",
  "spec": {
    "example": {
      "title": "Cadence, then four chords", "bpm": 72, "timeSig": "4/4", "key": "E", "hidden": true,
      "tracks": [
        { "instrument": "piano", "seq": "[E3 G#3 B3]:q [E3 A3 C#4]:q [D#3 F#3 B3]:q [E3 G#3 B3]:q | r:w | [E3 G#3 B3]:w | [E3 A3 C#4]:w | [D#3 F#3 B3]:w | [E3 G#3 B3]:w" },
        { "instrument": "bass", "seq": "E2:q A1:q B1:q E2:q | r:w | E2:w | A1:w | B1:w | E2:w" }
      ]
    },
    "questions": [
      { "q": "Home (the cadence's last bass note) is…", "choices": ["C", "E", "G", "A"], "answer": 1, "explain": "E: the cadence ends on E, so E is 1." },
      { "q": "The bass line of the four chords is (in degrees)…", "choices": ["1 – 4 – 5 – 1", "1 – 6 – 4 – 5", "1 – 5 – 6 – 4"], "answer": 0, "explain": "1 – 4 – 5 – 1: E – A – B – E, I – IV – V – I. The first move drops a 5th (E down to A), the next steps up (A to B)." }
    ]
  }
}
```

**If you can't hear it yet:** home first: search for the cadence's last bass note until your key blends with it. Then for each chord, "higher or lower than my key?" and search. Name the degree at the end by counting from home. The interval names are a shortcut you'll grow into; the search always works.

**Before the drill, rehearse the method** (in the *How to do it* box above the drill, for the rung you're on): the cadence tells you home; find its lowest note on the keyboard first, then follow the bass up or down from there. The drill runs at your current roots rung, so if the near keys aren't solid yet, you'll practise those first.

```ladder
{ "skill": "roots", "unlocks": 10, "intro": "Opens \"Bass line, any key\": the key changes every time; the drill runs at your current roots rung." }
```

```exercise
{
  "id": "e4", "type": "quiz", "title": "Tritone, direction and bass check",
  "spec": { "questions": [
    { "q": "How many half steps in a tritone?", "choices": ["5", "6", "7", "8"], "answer": 1 },
    { "q": "In C major, the tritone is between…", "choices": ["C and G", "B and F", "E and A", "D and G"], "answer": 1, "explain": "B up to F is 6 half steps (ti and fa). Together they squeeze inward to C and E." },
    { "q": "G down to C is a…", "choices": ["fourth", "fifth", "sixth", "octave"], "answer": 1, "explain": "Count the letters down: G F E D C = 5. Same distance as C up to G: sol falling to do." },
    { "q": "In any key, the bass of I going down to IV falls by a…", "choices": ["third", "fourth", "fifth"], "answer": 2, "explain": "do down to fa is a fifth (C down to F). Going up, it's a fourth." }
  ] }
}
```

## Make it: a bass line and leaps in A major

```exercise
{
  "id": "e7", "type": "daw-task", "title": "Bass line and melody in A major",
  "spec": {
    "template": { "bpm": 84, "key": "A", "timeSig": "4/4", "tracks": [
      { "instrument": "piano", "seq": "[A3 C#4 E4]:w | [A3 C#4 F#4]:w | [A3 D4 F#4]:w | [G#3 B3 E4]:w | [A3 C#4 E4]:w | [A3 C#4 F#4]:w | [A3 D4 F#4]:w | [G#3 B3 E4]:w" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "lead", "seq": "" } ] },
    "task": "The piano plays I – vi – IV – V twice in A major (A, F♯m, D, E). 1) Bass track: find each root by ear first (play the piano part, search low keys until one blends), then record them between E1 and E3, at least on beats 1 and 3. 2) Lead track: an 8-bar melody in A major with at least two leaps of a 4th or 5th (5 or 7 half steps) and one stretch that falls by step, like Joy to the World. End on A.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "bass", "lead"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "range", "low": "E1", "high": "E3", "track": 1 },
      { "kind": "plays-progression", "progression": ["I", "vi", "IV", "V"], "barsPerChord": 1, "mode": "roots", "minRatio": 0.9, "track": 1 },
      { "kind": "in-key", "key": "A", "scale": "major", "allowPassing": false, "track": 2 },
      { "kind": "min-leap", "semitones": 5, "min": 2, "track": 2 },
      { "kind": "max-leap", "semitones": 7, "track": 2 },
      { "kind": "ends-on", "degree": 1, "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

This task can take a second sitting; that's fine.

**If the bass is hard to find:** start from the key: A major's I, vi, IV and V have the roots A, F♯, D and E (degrees 1, 6, 4, 5). Play them under the chords and keep the one that blends. The ear part is checking, not guessing.

## Between lessons

- **3 minutes, daily:** from random notes, play 4th, tritone and 5th up, eyes closed on the second pass; say the word (settled, hanging, open).
- **2 minutes:** Joy to the World, opening, then the same falling scale from G5 down to G4 (with F♯).
- **3 minutes:** play a cadence in a key you rarely use (A, E♭, E), then the bass of I – vi – IV – V there, naming each move.
- One Practice-page session: intervals and roots at your rung.
