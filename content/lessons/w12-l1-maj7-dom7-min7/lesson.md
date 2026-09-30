---
id: w12-l1-maj7-dom7-min7
title: "Seventh Chords: maj7, 7 and m7"
week: 12
order: 1
phase: p2
duration_min: 45
goals:
  - Build maj7, dominant 7 and minor 7 chords from a triad plus a 7th
  - Explain what makes each one sound the way it does (half-step rub, tritone, neither)
  - Hear a triad against a dominant 7, and a major 7 against a dominant 7
prerequisites: [w11-l3-hands-together-and-revoicing-daw]
tags: [chords, sevenths, ear, keyboard]
---

# Seventh Chords: maj7, 7 and m7

A triad is three notes stacked in thirds. Stack one more third on top and you get a [[seventh chord]]: root, 3rd, 5th and **7th**. The new note is called the 7th because it's a seventh above the root. It adds colour (soul, jazz, R&B and ballads are full of sevenths) and, in one case, a strong urge to move.

Listen to a plain C major triad, then the same triad with a B♭ on top:

```example
{
  "title": "C major triad, then C7 (the same triad plus B♭)",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "epiano", "seq": "[C3 E3 G3]:w | [C3 E3 G3 Bb3]:w | [C3 E3 G3]:w | [C3 E3 G3 Bb3]:w" } ],
  "show": ["keyboard"]
}
```

## Three sevenths, built and explained

All three below are built on C. They differ in two places only: the 3rd (major or minor) and the 7th (major 7th, 11 half steps, or minor 7th, 10 half steps: the sevenths from week 10). Find the 7th from the top: one half step below the octave for a major 7th, one whole step below for a minor 7th.

| name | symbol | recipe | notes on C |
|---|---|---|---|
| major seventh | Cmaj7 | major triad + major 7th | C E G B |
| dominant seventh | C7 | major triad + minor 7th | C E G B♭ |
| minor seventh | Cm7 | minor triad + minor 7th | C E♭ G B♭ |

**Why they sound different:**

- **Cmaj7** has a note, B, just a half step below the root's octave. That near-clash (a major 7th) gives a soft, slightly blurred brightness, often called "dreamy".
- **C7** has a [[tritone]] inside it: E (the 3rd) up to B♭ (the 7th) is 6 half steps. That's the restless interval from week 10, so the chord sounds unfinished, as if it's asking to move somewhere. There's no half-step rub.
- **Cm7** has neither a tritone nor a half-step rub. It's the smoothest of the three: a minor chord, softened and widened.

The name "dominant" comes from where this chord lives in a key: on degree 5, the dominant. Next lesson is all about that.

```example
{
  "title": "Cmaj7, C7, Cm7: each as a block, then broken upward",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "epiano", "seq": "[C3 E3 G3 B3]:w | C3:q E3:q G3:q B3:q | [C3 E3 G3 Bb3]:w | C3:q E3:q G3:q Bb3:q | [C3 Eb3 G3 Bb3]:w | C3:q Eb3:q G3:q Bb3:q" } ],
  "show": ["keyboard", "staff"]
}
```

```exercise
{
  "id": "e1", "type": "build-chord", "title": "Build seventh chords",
  "instructions": "Root first, then the triad, then the 7th: a half step (maj7) or a whole step (7, m7) below the root's octave.",
  "count": 9, "passScore": 0.7,
  "spec": { "chords": ["Cmaj7", "C7", "Cm7", "Fmaj7", "G7", "Dm7", "Am7", "D7", "Gmaj7"], "root": "given", "prompt": "symbol", "key": "C" }
}
```

## Your ear: two small steps

This lesson opens two chord rungs, both two-way choices (the drill runs at your current chord rung, so you'll meet them once major, minor and diminished are solid):

1. **Triad or seventh?** A plain major triad, or the dominant 7 (the same triad plus the restless tritone). Ask yourself: is there an extra, unsettled note on top?
2. **Major 7 or dominant 7?** Both have a major triad underneath. Listen for the kind of tension: the tight, shimmering rub of the maj7, or the "question mark" of the dominant 7.

Minor 7 comes at the end of this week.

```ladder
{ "skill": "chords", "unlocks": 4, "intro": "Opens \"Triad or seventh?\" and \"Major 7 or dominant 7\"; the drill runs at your current rung." }
```

## The seventh chords of C major

Stack four notes of the C major scale on each degree, white keys only, and you get the key's own seventh chords:

**Cmaj7 – Dm7 – Em7 – Fmaj7 – G7 – Am7** (and one more on B, a special chord for later).

Only one of them is a dominant 7: the chord on degree 5, **G7**. The chords on 1 and 4 are major 7ths; those on 2, 3 and 6 are minor 7ths.

```example
{
  "title": "Seventh chords of C major, degrees 1 to 6",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "epiano", "seq": "[C3 E3 G3 B3]:h [D3 F3 A3 C4]:h | [E3 G3 B3 D4]:h [F3 A3 C4 E4]:h | [G3 B3 D4 F4]:h [A3 C4 E4 G4]:h | [C4 E4 G4 B4]:w" } ],
  "show": ["keyboard"]
}
```

```exercise
{
  "id": "e2", "type": "play-chord", "title": "Play the seventh chords of C",
  "instructions": "Root position, right hand: four white keys, every other one.",
  "count": 6, "passScore": 0.7,
  "spec": { "chords": ["Cmaj7", "Dm7", "Em7", "Fmaj7", "G7", "Am7"], "inversion": "root", "sequence": true, "bpm": 60, "key": "C" }
}
```

```exercise
{
  "id": "e3", "type": "quiz", "title": "Seventh-chord check",
  "spec": { "questions": [
    { "q": "Which notes make G7?", "choices": ["G B D F♯", "G B D F", "G B♭ D F", "G B D E"], "answer": 1, "explain": "Major triad G B D + minor 7th F." },
    { "q": "Which seventh chord contains a tritone between its 3rd and 7th?", "choices": ["maj7", "dominant 7", "minor 7"], "answer": 1, "explain": "In C7, E up to B♭ is 6 half steps." },
    { "q": "Am7 is…", "choices": ["A C E G", "A C♯ E G", "A C E G♯", "A C♯ E G♯"], "answer": 0 },
    { "q": "In C major, which degree carries the dominant 7 chord?", "choices": ["1", "2", "4", "5"], "answer": 3 },
    { "q": "Fmaj7's 7th is…", "choices": ["E♭", "E", "F♯", "D"], "answer": 1, "explain": "E is a half step below F: a major 7th." }
  ] }
}
```

## Ear corner: the big intervals together

The 7ths inside these chords are the intervals from week 10. This lesson opens one more interval rung that mixes all the big ones you've met: **tritone, minor and major 6th, minor and major 7th, and the octave**, all going up. Size first: is it a bit more than a fifth (tritone, 6ths), nearly an octave (7ths), or the octave itself? Then the details. The drill runs at your current interval rung, so you'll meet this mix once the 6ths, 7ths and tritone are solid on their own.

```ladder
{ "skill": "intervals", "unlocks": 12, "intro": "Opens \"Big intervals, up\" (TT, 6ths, 7ths, P8); the drill runs at your current rung." }
```
