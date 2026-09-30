---
id: w12-l2-fourths-and-fifths
title: Intervals II — Minor Thirds, Fourths and Fifths
week: 12
order: 2
phase: p2
duration_min: 45
goals:
  - Hear a minor vs a major 3rd, and find both as degree pairs (re–fa, la–do vs do–mi)
  - Build and play perfect 4ths and 5ths as do–fa and do–sol
  - Tell P4 and P5 apart with anchor tunes, and with the keyboard when the ear can't yet
prerequisites: [w12-l1-seconds-and-thirds]
tags: [intervals, ear, keyboard]
songs:
  - { title: "Twinkle, Twinkle, Little Star", composer: "Traditional", public_domain: true }
  - { title: "Bridal Chorus (Here Comes the Bride), from Lohengrin", composer: "Richard Wagner", public_domain: true }
---

# Minor thirds, fourths and fifths

Last lesson named the small distances: half step, whole step, major 3rd. Today: the **minor 3rd**, then the first **leaps**. Same trick as before: hear the first note as do, and the second note tells you the interval.

## Minor or major 3rd

Both are skips; they differ by one half step. The major 3rd is **do → mi**, the bottom of the major triad. The minor 3rd is 3 half steps, the bottom of the minor triad (week 6). In a major key you find it as **re → fa**, **mi → sol** and **la → do**. Listen from the same note:

```example
{
  "title": "Major 3rd vs minor 3rd: C–E, C–E♭, then E–G♯, E–G",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h E4:h | C4:h Eb4:h | r:w | E4:h G#4:h | E4:h G4:h" } ],
  "show": ["keyboard"]
}
```

**Try it:**

1. Play C4 then E4 (4 half steps), then C4 then E♭4 (3). Alternate: C–E, C–E♭, C–E, C–E♭. The first is do–mi; the second is a mi that sank a little.
2. Now play each pair **together**: C+E, then C+E♭. Together the difference is often easier to notice. Then go back to one after the other.
3. Find the minor 3rds inside C major: **D–F** (re–fa), **E–G** (mi–sol), **A–C** (la–do). Play each, then C–E again for comparison.
4. Pick your own labels. Many people call the major 3rd brighter and the minor 3rd darker; others hear "open vs closed" or "plain vs sad". Any label works as long as it stays the same.

Be honest with yourself: this is subtle, since the two differ by the smallest step on the keyboard. It usually takes weeks of short drills, not one lesson.

**If you can't hear it yet:** play the first note, then both candidates yourself (3 keys up and 4 keys up), then replay the pair and pick the one that matches. Or find both notes and count: **3 = minor, 4 = major**.

```exercise
{
  "id": "c2",
  "type": "listen",
  "title": "Check: minor or major 3rd?",
  "instructions": "Compare with your keyboard: play the first note, then 3 and 4 keys up.",
  "spec": {
    "examples": [
      { "title": "Pair 1", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "D4:h F4:h" } ] },
      { "title": "Pair 2", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "F4:h A4:h" } ] },
      { "title": "Pair 3", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "E4:h G4:h" } ] }
    ],
    "questions": [
      { "q": "Pair 1 is…", "choices": ["minor 3rd (m3)", "major 3rd (M3)"], "answer": 0, "explain": "D–F: 3 half steps, re–fa in C." },
      { "q": "Pair 2 is…", "choices": ["minor 3rd (m3)", "major 3rd (M3)"], "answer": 1, "explain": "F–A: 4 half steps, do–mi in F." },
      { "q": "Pair 3 is…", "choices": ["minor 3rd (m3)", "major 3rd (M3)"], "answer": 0, "explain": "E–G: 3 half steps, mi–sol in C." }
    ]
  }
}
```

```exercise
{
  "id": "e4",
  "type": "build-interval",
  "title": "Play a m3 or M3 up",
  "count": 10,
  "passScore": 0.75,
  "spec": { "intervals": ["m3", "M3"], "direction": "asc", "root": "random" }
}
```

## Fourths and fifths

Now the **leaps**. The 4th and the 5th are called [[perfect interval]]s, not because they're better, but because they sound open and plain, with little of the bright/dark colour a 3rd has. As degrees they're old friends: **do → fa** and **do → sol**.

| Interval | App label | Half steps | From C | Degrees |
|---|---|---|---|---|
| perfect 4th | P4 | 5 | C–F | do → fa, low sol → do |
| perfect 5th | P5 | 7 | C–G | do → sol, fa → do' |

Your hand already knows both: in five-finger position (thumb on C), finger 4 plays the 4th and finger 5 the 5th.

```example
{
  "title": "P4 (C–F), then P5 (C–G), twice",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h F4:h | r:w | C4:h G4:h | r:w | C4:h F4:h | r:w | C4:h G4:h" } ],
  "show": ["keyboard"]
}
```

```exercise
{
  "id": "e1",
  "type": "quiz-input",
  "title": "Perfect intervals",
  "spec": { "questions": [
    { "q": "Half steps in a perfect 5th?", "answer": ["7"], "kind": "number" },
    { "q": "Half steps in a perfect 4th?", "answer": ["5"], "kind": "number" },
    { "q": "A perfect 5th above D is…", "answer": ["A"], "kind": "note" },
    { "q": "A perfect 4th above G is…", "answer": ["C"], "kind": "note" },
    { "q": "A perfect 5th above F is…", "answer": ["C"], "kind": "note" },
    { "q": "A perfect 4th above E is…", "answer": ["A"], "kind": "note" },
    { "q": "P4 + P5 = which interval?", "answer": ["octave", "P8", "8"], "kind": "text" }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e2",
  "type": "build-interval",
  "title": "Play a P4 or P5 up",
  "count": 10,
  "passScore": 0.75,
  "spec": { "intervals": ["P4", "P5"], "direction": "asc", "root": "random" }
}
```

## Anchor tunes

P4 and P5 are the most confused pair for beginners: both are open and plain. The most reliable tool is an [[anchor tune]] — a tune you know that starts with that interval:

- **P5** — "Twinkle, Twinkle" (*Twin-kle, twin-kle*): C … G, do up to sol.
- **P4** — "Here Comes the Bride" (*Here comes*): G … C. That's low sol up to do, the move you drilled in week 8.

```example
{
  "title": "Twinkle (opening) — perfect 5th",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q C4:q G4:q G4:q | A4:q A4:q G4:h" } ],
  "show": ["staff"]
}
```

```example
{
  "title": "Here Comes the Bride (opening) — perfect 4th",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "r:h r:q G3:q | C4:q. C4:8 C4:h | r:h r:q G3:q | D4:q. B3:8 C4:h" } ],
  "show": ["staff"]
}
```

**Try it** (keyboard, 4 minutes):

1. Play "Twinkle" from C: C C G G A A G. Then play only its first leap, C–G. That's the 5th.
2. Play "Here Comes the Bride": G3 C4 C4 C4. Then only G–C. That's the 4th.
3. From C, play C–F, then C–G. For each, run both tunes in your head starting on the C: does "Here comes" fit, or "Twin-kle, twin-kle"? (Humming helps some people; it's never required.)
4. Move to D (D–G, D–A) and to G (G–C, G–D). Same test with the tunes.
5. Notice where each lands. Going up, the 4th often sounds like *arriving* ("Here comes the **bride**" lands on home); the 5th like *lifting off*.

Be honest with yourself: P4 vs P5 is a classic that takes weeks. If the tunes don't "click" yet, use the keyboard.

**If you can't hear it yet:** play the first note, then **both candidates yourself** — 5 keys up (4th) and 7 keys up (5th) — then replay the question and pick the one that matched. Or find the second note by searching and count half steps: **5 = 4th, 7 = 5th**.

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Check: 4th or 5th?",
  "instructions": "Replay freely; try the anchor tunes from the first note, or play both candidates on your keyboard.",
  "spec": {
    "examples": [
      { "title": "Pair 1", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "D4:h G4:h" } ] },
      { "title": "Pair 2", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "E4:h B4:h" } ] },
      { "title": "Pair 3", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "A3:h D4:h" } ] },
      { "title": "Pair 4", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "F4:h C5:h" } ] }
    ],
    "questions": [
      { "q": "Pair 1 is…", "choices": ["a perfect 4th", "a perfect 5th"], "answer": 0, "explain": "D–G: 5 half steps." },
      { "q": "Pair 2 is…", "choices": ["a perfect 4th", "a perfect 5th"], "answer": 1, "explain": "E–B: 7 half steps." },
      { "q": "Pair 3 is…", "choices": ["a perfect 4th", "a perfect 5th"], "answer": 0, "explain": "A–D: 5 half steps." },
      { "q": "Pair 4 is…", "choices": ["a perfect 4th", "a perfect 5th"], "answer": 1, "explain": "F–C: 7 half steps." }
    ]
  }
}
```

### Before the interval drill

This lesson opens "Minor or major 3rd" and "4th or 5th", but the drill runs at **your current interval rung**, possibly still the steps and skips from last lesson. Read the **How to do it** box above the drill: every interval rung uses the same routine with a different tool.

1. Play, replay once.
2. Hear the first note as do. For a skip: bright do–mi (major) or darker (minor)?
3. For a leap: start an anchor tune from the first note in your head. Bride (sol–do) or Twinkle (do–sol)?
4. Still unsure: play the first note and both candidates (3 and 4, or 5 and 7 keys up), replay, pick the match.

```ladder
{ "skill": "intervals", "unlocks": 4, "intro": "Opens \"Minor or major 3rd\", then \"4th or 5th\"; the drill runs at your current rung." }
```

A side note for later, no drill: a 4th plus a 5th from the same note add up to an octave (C–G–C). Played *together*, a 5th blends so smoothly that it can be mistaken for an octave; you met that trap in week 7 (do or sol in another octave?), and the next lesson looks at it again.

## Keyboard

```exercise
{
  "id": "e9",
  "type": "play-melody",
  "title": "Here Comes the Bride (opening)",
  "instructions": "Thumb on G3 for the pick-up note, then up a 4th to C4.",
  "passScore": 0.7,
  "spec": { "bpm": 66, "timeSig": "4/4", "key": "C", "seq": "r:h r:q G3:q | C4:q. C4:8 C4:h | r:h r:q G3:q | D4:q. B3:8 C4:h", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

## Between lessons

- **Two Practice sessions of about 10 minutes.**
- **Warm up 2 minutes at the keyboard:** play the openings of Twinkle and Here Comes the Bride from C, from D and from G, then the minor 3rds D–F, E–G, A–C next to C–E. The anchors only work if they're quick to recall.
- **In the drills:** first note = do, size first, anchor or colour second, keyboard check third. Don't skip the keyboard check on the ones you're unsure about.
- **Ready?** Watch the interval bar on the Dashboard. Minor vs major 3rd and P4 vs P5 staying unmastered for a week or two is normal; keep going with the lessons.
