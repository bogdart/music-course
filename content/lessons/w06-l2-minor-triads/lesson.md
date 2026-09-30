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
  - Build the diminished triad (two minor 3rds) and hear how it differs
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

The chord symbol adds a small **m**: C minor = **Cm**. Among C major's white keys, three triads are naturally minor: **Dm** (D–F–A), **Em** (E–G–B) and **Am** (A–C–E).

```exercise
{
  "id": "e2",
  "type": "build-chord",
  "title": "Build the minor triad",
  "count": 8,
  "passScore": 0.75,
  "spec": { "chords": ["Am", "Dm", "Em", "Cm", "Fm", "Gm"], "root": "given", "prompt": "symbol", "key": "C" }
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
4. Listen to the melody version: Mahler (Symphony No. 1, 1888) turned "Frère Jacques" into a gloomy march by lowering its 3rd.

```example
{
  "title": "Frère Jacques, major then minor",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q C4:q | C4:q D4:q E4:q C4:q | E4:q F4:q G4:h | r:w | C4:q D4:q Eb4:q C4:q | C4:q D4:q Eb4:q C4:q | Eb4:q F4:q G4:h" } ],
  "show": ["staff"]
}
```

**If you can't hear it yet:** compare instead of judging. After the chord, **find its root** (the lowest note, as last lesson), play the major chord and the minor chord on that root, then replay the question: which of your two was it? Comparing two sounds is far easier than naming one alone. Still stuck? Find the middle note and count from the root: **4 half steps = major, 3 = minor**.

```exercise
{
  "id": "e8",
  "type": "listen",
  "title": "Check: three mystery chords",
  "instructions": "Listen first and decide; compare on your keyboard if unsure. The notes appear after you answer.",
  "spec": {
    "example": { "title": "Mystery chords", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[A3 C4 E4]:w | [F3 A3 C4]:w | [D4 F4 A4]:w" } ], "show": ["keyboard"] },
    "questions": [
      { "q": "Chord 1 is…", "choices": ["major", "minor"], "answer": 1, "explain": "A–C–E, A minor." },
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

## One more colour: the diminished triad

Lower the 5th of a minor triad by a half step too, and you get a third colour: the [[diminished]] triad (symbol °). Next lesson you'll find it on degree 7 of C major: B–D–F. It is **two minor 3rds** (3 + 3 half steps), so its outer notes are only **6** half steps apart instead of the usual perfect 5th (7).

```example
{
  "title": "C major (C E G), C minor (C E♭ G), C diminished (C E♭ G♭); then B° (B D F)",
  "bpm": 66, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:w | [C4 Eb4 G4]:w | [C4 Eb4 Gb4]:w | r:w | [B3 D4 F4]:w" } ],
  "show": ["keyboard"]
}
```

**Try it:** hold C E G, lower the middle finger (C E♭ G), then lower the little finger too (C E♭ G♭). Then play B D F. Many people hear diminished as tense or squeezed, as if it has to go somewhere. After B D F, play C E G — does the tension let go?

**If you can't hear it yet:** find the outer notes and count: **6 half steps = diminished**, 7 = major or minor.

```exercise
{
  "id": "e9",
  "type": "quiz-input",
  "title": "Diminished by numbers",
  "spec": { "questions": [
    { "q": "Half steps from B up to D?", "answer": ["3"], "kind": "number" },
    { "q": "Half steps from D up to F?", "answer": ["3"], "kind": "number" },
    { "q": "Half steps from B up to F (root to 5th of B°)?", "answer": ["6"], "kind": "number" },
    { "q": "Half steps from root to 5th in a major or minor triad?", "answer": ["7"], "kind": "number" }
  ] }
}
```

### Before the chord drill

Your chord ladder starts with major vs minor; diminished joins as a third choice only once that's solid. The **How to do it** box has the rung's method. Rehearse it:

1. Play, replay once. Bright or dark (in your own words)?
2. Unsure: find the root, play major and minor on it yourself, replay, pick the match.
3. After answering, replay once knowing the answer.

```ladder
{ "skill": "chords", "unlocks": 2, "intro": "Opens \"Major, minor or diminished\" (after major vs minor); the drill runs at your current rung." }
```

## Roots of minor chords

Minor chords have a root too, and in these drills it's still the lowest note. The colour changes; the job doesn't.

```example
{
  "title": "Am, then its root A; Dm, then D",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[A3 C4 E4]:h A3:h | [D3 F3 A3]:h D3:h" } ],
  "show": ["keyboard"]
}
```

**Try it:** play Am (A C E), then A alone; Em (E G B), then E. Then Em followed by G alone and by B alone — do they sound like the floor, or like something sitting higher up?

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Check: the root of a minor chord",
  "instructions": "Search for the lowest note on your keyboard before answering.",
  "spec": {
    "example": { "title": "Mystery chord", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[E3 G3 B3]:w" } ] },
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
- **Ready?** The chords bar shows "Major or minor" mastered when you're at ≈85% over two sessions. It's normal for this to take a week or more.
