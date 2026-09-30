---
id: w15-l1-maj7-dom7-min7
title: "Seventh Chords: maj7, 7 and m7"
week: 15
order: 1
phase: p2
duration_min: 45
goals:
  - Build maj7, dominant 7 and minor 7 chords from a triad plus a 7th
  - Explain what makes each one sound the way it does (half-step rub, tritone, neither)
  - Hear a triad against a dominant 7, and a major 7 against a dominant 7
prerequisites: [w14-l2-minor-in-other-keys-and-minor-bass]
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

All three below are built on C. They differ in two places only: the 3rd (major or minor) and the 7th (major 7th, 11 half steps, or minor 7th, 10 half steps: the sevenths from week 12). Find the 7th from the top: one half step below the octave for a major 7th, one whole step below for a minor 7th.

| name | symbol | recipe | notes on C |
|---|---|---|---|
| major seventh | Cmaj7 | major triad + major 7th | C E G B |
| dominant seventh | C7 | major triad + minor 7th | C E G B♭ |
| minor seventh | Cm7 | minor triad + minor 7th | C E♭ G B♭ |

**Why they sound different:**

- **Cmaj7** has a note, B, just a half step below the root's octave. That near-clash (a major 7th) gives a soft, slightly blurred brightness, often called "dreamy".
- **C7** has a [[tritone]] inside it: E (the 3rd) up to B♭ (the 7th) is 6 half steps. That's the restless interval from week 12, so the chord sounds unfinished, as if it's asking to move somewhere. There's no half-step rub.
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

This lesson opens two chord rungs, both two-way choices: **triad or seventh?** (a plain major triad or the dominant 7) and **major 7 or dominant 7?** (both have a major triad underneath). Minor 7 joins next lesson.

### Try it: add the 7th yourself

1. Play C E G and hold it. Now add **B♭** on top. Take it away, add it again. Listen to what changes: with B♭ the chord stops sounding finished and seems to lean forward, a little bluesy.
2. Hold C E G again and add **B** instead. Swap between B and B♭ several times. B makes a tight, shimmering rub right under the top C; B♭ sounds rougher and more restless.
3. Play the three chords in a row with your eyes closed: C, C7, Cmaj7. Say "rest", "leans on", "dreamy".

Check: three chords on C.

```exercise
{
  "id": "e4", "type": "listen", "title": "Check: triad, 7 or maj7?",
  "instructions": "Play each chord, then play your guess yourself right after it and compare.",
  "spec": {
    "examples": [
      { "title": "Chord 1", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "epiano", "seq": "[C3 E3 G3 Bb3]:w" } ] },
      { "title": "Chord 2", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "epiano", "seq": "[C3 E3 G3]:w" } ] },
      { "title": "Chord 3", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "epiano", "seq": "[C3 E3 G3 B3]:w" } ] }
    ],
    "questions": [
      { "q": "Chord 1 is…", "choices": ["C (triad)", "C7", "Cmaj7"], "answer": 1, "explain": "C7: C E G B♭. The restless, bluesy lean comes from E–B♭, a tritone." },
      { "q": "Chord 2 is…", "choices": ["C (triad)", "C7", "Cmaj7"], "answer": 0, "explain": "The plain triad C E G: nothing leans, it just rests." },
      { "q": "Chord 3 is…", "choices": ["C (triad)", "C7", "Cmaj7"], "answer": 2, "explain": "Cmaj7: C E G B. The B rubs gently against the octave above C: soft, dreamy." }
    ]
  }
}
```

**If you can't hear it yet:** compare, don't remember. Replay the question, then play C E G yourself on the same root, then C E G B♭, then C E G B. The one that sounds like the replay wins. If the drill's chord is on another root, find its lowest note first (search low keys), build the triad on it, and add the two candidate 7ths yourself.

**Before the drill, rehearse the method** (it's in the *How to do it* box above the drill, for the rung you're on): for triad or seventh, ask "does it want to go somewhere?" A plain triad rests; the dominant 7 has a bluesy edge and pulls on. For maj7 or 7: dreamy and soft (maj7) or bluesy and restless (7). The drill runs at your current chord rung, so you'll meet these once major, minor and diminished are solid.

```ladder
{ "skill": "chords", "unlocks": 5, "intro": "Opens \"Triad or seventh?\" and \"Major 7 or dominant 7\"; the drill runs at your current rung." }
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

## Ear corner: intervals, low or high

The 7ths inside these chords are the sevenths you named in week 12 (a step short of the octave), and E–B♭ in C7 is the tritone. Their own interval rungs open over the next weeks, one pair at a time: 5th or octave next lesson, the 6ths in week 16, the 7ths in week 18. Seventh chords spread over a wide range, so today's interval step is about **register**.

Your interval drill has stayed in one octave, C4 to C5. This lesson opens the same six intervals (half step to fifth) anywhere from C3 up to C5. Low intervals sound muddier, and the size is harder to judge down there.

**Try it:** play C4–E4, then C3–E3, then C2–E2: the same major 3rd, three heights. Then G3–D4 and G2–D3 (a 5th). Ask of each low pair: step, skip or leap?

**If you can't hear it yet:** play the two notes yourself an octave or two higher, in the middle of the keyboard, where the size is clearer, and name it there. The interval doesn't change when you move both notes by 12.

**Before the drill, rehearse the method** (in the *How to do it* box above the drill): listen to the size, not the sound; play the pair in the middle of the keyboard, then walk up the scale from the first note and count the steps; for 4ths and 5ths, check against your anchor songs. The drill runs at your current interval rung.

```ladder
{ "skill": "intervals", "unlocks": 8, "intro": "Opens \"Seconds to fifths, any register\": the same intervals, low or high; the drill runs at your current rung." }
```

## Between lessons

- **3 minutes:** on C, F and G, play triad → 7 → maj7 → m7, saying the name of each, then eyes closed in random order.
- **2 minutes:** the seventh chords of C (Cmaj7 to Am7), root position, right hand.
- **2 minutes:** in C7, F7 and G7, play just the 3rd and the 7th together: that's the tritone that makes the chord lean.
- One chords session and one intervals session on the Practice page.
