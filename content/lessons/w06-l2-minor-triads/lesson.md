---
id: w06-l2-minor-triads
title: Minor Triads
week: 6
order: 2
phase: p1
duration_min: 45
goals:
  - Build a minor triad (m3 + M3) and turn any major triad into minor by lowering its 3rd
  - Tell major and minor triads apart by ear — or by comparing on the keyboard — and find the root of both
  - Hear one note after another and judge it the same note an octave up, or a different note
prerequisites: [w06-l1-major-triads]
tags: [chords, triads, minor, ear, keyboard]
songs:
  - { title: "Frère Jacques (and its minor-key version in Mahler's Symphony No. 1, 3rd movement)", composer: "Traditional / Gustav Mahler", public_domain: true }
---

# Minor triads

Swap the order of the two 3rds and you get the other great colour of music. A [[minor triad]] is a **minor 3rd** (3 half steps) from root to 3rd, then a **major 3rd** (4) — still a **perfect 5th** from root to 5th.

The quickest way to build one: take the major triad and **lower the 3rd by one half step**. C–E–G becomes C–**E♭**–G. One note moves, by the smallest possible distance.

```keyboard
{ "range": ["C3", "C5"], "highlight": ["C4", "D#4", "G4"], "labels": "names", "colors": { "C4": "root", "D#4": "third", "G4": "fifth" } }
```

The chord symbol adds a small **m**: C minor = **Cm**. Among C major's white keys, three triads are naturally minor: **Dm** (D–F–A), **Em** (E–G–B) and **Am** (A–C–E). It works the other way too: **raise** their 3rd a half step and they turn major — D–**F♯**–A, E–**G♯**–B, A–**C♯**–E. That's how you build the major triads that need a black key.

```exercise
{
  "id": "e2",
  "type": "build-chord",
  "title": "Build the triad (minor, and the black-key majors)",
  "count": 10,
  "passScore": 0.75,
  "spec": { "chords": ["Am", "Dm", "Em", "Cm", "Fm", "Gm", "D", "E", "A"], "root": "given", "prompt": "symbol", "key": "C" }
}
```

```exercise
{
  "id": "e3",
  "type": "play-chord",
  "title": "Major, then minor",
  "instructions": "Hold the chord, then move only your middle finger down a half step.",
  "passScore": 0.75,
  "spec": { "chords": ["C", "Cm", "F", "Fm", "G", "Gm"], "inversion": "root", "sequence": true, "bpm": 50 }
}
```

## Hearing major and minor

Major is often described as "bright", minor as "dark" or "sad". That's a starting point, not a law — plenty of dance hits are in minor. What actually differs is one note, the 3rd.

```example
{
  "title": "C major vs C minor: note by note, then together (twice)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q E4:q G4:h | [C4 E4 G4]:w | C4:q Eb4:q G4:q r:q | [C4 Eb4 G4]:w | [C4 E4 G4]:w | [C4 Eb4 G4]:w" } ],
  "show": ["keyboard"]
}
```

**Try it:**

1. Hold C E G. Move only the middle finger down to E♭, then back up. Four times, slowly, listening to the whole chord change, not just the moving note.
2. Now play them **separately**: C major, lift, pause, C minor. Label each with whatever word fits for you (bright/dark, open/closed, happy/serious) — and keep that word.
3. Same on F (F A C → F A♭ C) and G (G B D → G B♭ D).
4. A preview, just listen once — nothing to answer: Mahler (Symphony No. 1, 1888) turned "Frère Jacques" into a gloomy
   march by lowering its 3rd. Minor *tunes* and keys are week 13; today only the chord colour matters.

```example
{
  "title": "Preview: Frère Jacques, major then minor",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q C4:q | C4:q D4:q E4:q C4:q | E4:q F4:q G4:h | r:w | C4:q D4:q Eb4:q C4:q | C4:q D4:q Eb4:q C4:q | Eb4:q F4:q G4:h" } ],
  "show": ["staff"]
}
```

**If you can't hear it yet:** compare instead of judging. After the chord, **find its root** (the lowest note, as last lesson), play the major chord and the minor chord on that root, then replay the question: which of your two was it? Comparing two sounds is far easier than naming one alone. Still stuck? Play your two versions back to back three times, then the question once more — pick the one that is *more like* it, even if unsure.

```exercise
{
  "id": "e8",
  "type": "listen",
  "title": "Check: three mystery chords",
  "instructions": "Listen first and decide; compare on your keyboard if unsure. The notes appear after you answer.",
  "spec": {
    "example": { "title": "Mystery chords", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[E4 G4 B4]:w | [F4 A4 C5]:w | [D4 F4 A4]:w" } ], "show": ["keyboard"] },
    "questions": [
      { "q": "Chord 1 is…", "choices": ["major", "minor"], "answer": 1, "explain": "E–G–B, E minor." },
      { "q": "Chord 2 is…", "choices": ["major", "minor"], "answer": 0, "explain": "F–A–C, F major." },
      { "q": "Chord 3 is…", "choices": ["major", "minor"], "answer": 1, "explain": "D–F–A, D minor." }
    ]
  }
}
```

```exercise
{
  "id": "e6",
  "type": "play-chord",
  "title": "The white-key minor chords",
  "passScore": 0.75,
  "spec": { "chords": ["Am", "Dm", "Em", "Am"], "inversion": "root", "sequence": true, "bpm": 50 }
}
```

### Before the chord drill

Your chord ladder starts with major vs minor, both in the middle of the keyboard. (A third colour, the diminished triad, comes next lesson and joins the drill in week 8.) The **How to do it** box has the rung's method. Rehearse it:

1. Play, replay once. Bright or dark (in your own words)?
2. Unsure: find the root, play major and minor on it yourself, replay, pick the match.
3. After answering, replay once knowing the answer.

```ladder
{ "skill": "chords", "unlocks": 1, "intro": "Opens the chords ladder: one triad in the middle register — major (bright) or minor (dark)?" }
```

## Roots of minor chords

Minor chords have a root too, and in these drills it's still the lowest note. The colour changes; the job doesn't.

```example
{
  "title": "Dm, then its root D; Em, then E",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[D4 F4 A4]:h D4:h | [E4 G4 B4]:h E4:h" } ],
  "show": ["keyboard"]
}
```

**Try it:** play Dm (D F A), then D alone; Em (E G B), then E. Then Em followed by G alone and by B alone — do they sound like the floor, or like something sitting higher up?

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Check: the root of a minor chord",
  "instructions": "Search for the lowest note on your keyboard before answering.",
  "spec": {
    "example": { "title": "Mystery chord", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[E4 G4 B4]:w" } ] },
    "questions": [
      { "q": "Its root is…", "choices": ["E", "G", "B"], "answer": 0, "explain": "E–G–B, E minor: E is the lowest note." }
    ]
  }
}
```

### Before the roots drill

The roots drill runs at your current rung. Same routine as last lesson (and in the **How to do it** box): listen to the bottom, search low keys — higher or lower? — and press Check when a key sits under the chord like its floor.

```ladder
{ "skill": "roots", "unlocks": 2, "intro": "Opens roots of major or minor chords; the drill runs at your current roots rung." }
```

## Octaves: one note, then the other

A short octave step to finish, because next week is all about octaves. So far the octave drills gave you two candidates to compare (A or B?). The next rung plays just **one pair**, one note after the other: is the second note the *same note an octave up or down*, or a *different* note? Here the different note is far off (a tritone, 6 half steps away from the octave), so the difference is big — but there's nothing to compare with except your memory of the first note.

```example
{
  "title": "Same (D3 → D4), then different (D3 → G♯4), then same (A4 → A3)",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "D3:h D4:h | r:w | D3:h G#4:h | r:w | A4:h A3:h" } ],
  "show": ["keyboard"]
}
```

**Try it — the echo test:**

1. Play D3, then D4. Say "echo". Play D3 again and *imagine* D4 before you play it.
2. Play D3, then G♯4. Does it land on your imagined echo, or somewhere else?
3. Same with F3 → F4 and F3 → B4, then downwards: A4 → A3 and A4 → D♯3.

Honest expectation: many people at this stage hear an octave one after the other as "two different notes that go well together". That's normal — telling "same name" from "different" by ear improves slowly over months, and this course keeps an octave rung open all year. The echo test works from day one.

**If you can't hear it yet:** find the first note (search), play it and the key 12 above (or below), then replay the question: does the second note match what you just played?

```exercise
{
  "id": "c2",
  "type": "listen",
  "title": "Check: echo or not?",
  "instructions": "Answer, then check with the echo test on your keyboard.",
  "spec": {
    "examples": [
      { "title": "Pair 1", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "E3:h E4:h" } ] },
      { "title": "Pair 2", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "G4:h C#4:h" } ] }
    ],
    "questions": [
      { "q": "Pair 1:", "choices": ["the same note, an octave apart", "a different note"], "answer": 0, "explain": "E3 → E4: the same letter, 12 keys up." },
      { "q": "Pair 2:", "choices": ["the same note, an octave apart", "a different note"], "answer": 1, "explain": "G4 → C♯4: the octave below would be G3." }
    ]
  }
}
```

### Before the octave drill

The **How to do it** box for this rung: imagine the first note played again, higher (or lower) — does the second note match that echo? If you can't tell, play the echo yourself and replay.

```ladder
{ "skill": "octave", "unlocks": 5, "intro": "Opens \"Same or different, one after the other\"; the drill runs at your current octave rung." }
```

## Theory check

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "Major or minor on paper",
  "spec": { "questions": [
    { "q": "A minor triad is…", "choices": ["M3 then m3", "m3 then M3", "m3 then m3"], "answer": 1 },
    { "q": "To turn C major into C minor you change…", "choices": ["the root", "the 3rd", "the 5th"], "answer": 1 },
    { "q": "Notes of A minor?", "choices": ["A C E", "A C♯ E", "A B E"], "answer": 0 },
    { "q": "Which of these is minor using only white keys?", "choices": ["F", "G", "D"], "answer": 2, "explain": "D–F is a minor 3rd (3 half steps)." },
    { "q": "The symbol 'Em' means…", "choices": ["E major", "E minor", "E melody"], "answer": 1 },
    { "q": "Root to 5th in a minor triad is…", "choices": ["a perfect 5th", "a minor 5th", "a major 3rd"], "answer": 0 }
  ] },
  "passScore": 0.75
}
```

## Between lessons

- **Two Practice sessions of about 10 minutes.** Chords and roots are your newest ladders, so they'll often come first.
- **Warm up 2 minutes at the keyboard:** C–Cm, F–Fm, G–Gm, moving only the middle finger, naming each with your word.
- **On a wrong chord answer:** find the root, play both versions on it, replay. On a wrong root: search from the answer the app showed you and listen to it under the chord.
- **Octaves, 1 minute:** play any note, then its echo 12 keys up, then a wrong note near it. Say "echo" or "not" each time.
- **Ready?** The chords bar shows "Major or minor" mastered when you're at ≈85% over two sessions. It's normal for this to take a week or more.
