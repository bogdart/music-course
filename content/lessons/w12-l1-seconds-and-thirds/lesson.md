---
id: w12-l1-seconds-and-thirds
title: Intervals I — Seconds and Thirds
week: 12
order: 1
phase: p2
duration_min: 45
goals:
  - Name an interval by its number (letters) and its size (half steps), and see it as the distance between two scale degrees you already hear
  - Build and play half steps, whole steps and major 3rds, and find each one as a degree pair (mi–fa, do–re, do–mi)
  - Hear half step vs whole step, and step vs skip (M2 vs M3), with the keyboard as the fallback
prerequisites: [w11-l4-hands-together-and-revoicing-daw]
tags: [intervals, degrees, ear, keyboard]
songs:
  - { title: "When the Saints Go Marching In", composer: "Traditional", public_domain: true }
  - { title: "Frère Jacques", composer: "Traditional", public_domain: true }
---

# Intervals: names for what you already hear

For eleven weeks you've heard notes as degrees: where they sit relative to home. Every time a note walked home (mi – re – do), you were hearing distances. An [[interval]] is simply the *name* of such a distance, and it doesn't need a home: C to E and F to A are both "a major 3rd", in any key. You met "major 3rd" and "perfect 5th" on paper in week 6, as the building blocks of triads. This week they become sounds you can name.

The trick for the whole week: **hear the first note as do**. Then the second note is a degree you already know, and the degree tells you the interval: do → re is a 2nd, do → mi a 3rd, do → fa a 4th, do → sol a 5th.

Today, three things: **half step or whole step**, **step or skip**, and how both look as degree pairs.

## Counting the number

An interval's **number** counts **letter names**, including both ends: C → D is C, D = a **2nd**; C → E is C, D, E = a **3rd**. So a 2nd is a step to the next letter, a 3rd skips one letter.

Two intervals can have the same number but a different number of half steps. That's the **quality**:

| Interval | App label | Half steps | As degrees in a major key | In C |
|---|---|---|---|---|
| minor 2nd | m2 | 1 | mi → fa, ti → do | E–F, B–C |
| major 2nd | M2 | 2 | do → re, re → mi, sol → la | C–D, D–E, G–A |
| major 3rd | M3 | 4 | do → mi, fa → la, sol → ti | C–E, F–A, G–B |

Your "half step" is a minor 2nd, your "whole step" a major 2nd (week 2). The half-step count is your safety net for the whole week: whatever your ear says, counting keys (black keys included) always gives the right answer. The minor 3rd (3 half steps) comes next lesson.

```exercise
{
  "id": "e1",
  "type": "quiz-input",
  "title": "Count the interval",
  "spec": { "questions": [
    { "q": "How many half steps in a major 3rd?", "answer": ["4"], "kind": "number" },
    { "q": "How many half steps in a major 2nd?", "answer": ["2"], "kind": "number" },
    { "q": "A major 3rd above C is…", "answer": ["E"], "kind": "note" },
    { "q": "A major 2nd above F is…", "answer": ["G"], "kind": "note" },
    { "q": "A major 3rd above G is…", "answer": ["B"], "kind": "note" },
    { "q": "A minor 2nd above E is…", "answer": ["F"], "kind": "note" },
    { "q": "In any major key, do up to mi is a… (answer M2, M3 or m2)", "answer": ["M3", "major 3rd", "major third"], "kind": "text" }
  ] },
  "passScore": 0.75
}
```

## Half step or whole step

You know the major scale's pattern: W-W-H-W-W-W-H. The two half steps are **mi → fa** and **ti → do**; every other step is whole. So you've been hearing both sizes inside every scale since week 3.

```example
{
  "title": "C major, slowly: whole, whole, HALF (E–F), whole, whole, whole, HALF (B–C)",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q F4:q | G4:q A4:q B4:q C5:q" } ],
  "show": ["keyboard"]
}
```

**Try it** (keyboard, 3 minutes):

1. Play C major slowly and say "whole" or "half" as each new note sounds. The two "half"s land on F and on the top C.
2. Play **E4 → F4**, then **F4 → G4**. The half step is squeezed: the two notes almost touch. The whole step has a little air between them.
3. Now from notes that are not in C: **A4 → B♭4** (half), **A4 → B4** (whole). The same two sizes, anywhere on the keyboard.
4. The do-trick: play **B3 → C4** and think "ti → do". Then **C4 → D4**: "do → re". A half step up often sounds like *arriving*; a whole step up like *moving on*.

**If you can't hear it yet:** find both notes by searching (play a key, higher or lower?, move), then look: no key between them = half step; one key between = whole step.

```exercise
{
  "id": "c0",
  "type": "listen",
  "title": "Check: half step or whole step?",
  "instructions": "Play each pair as often as you like. Use the keyboard to check before answering if you want: that's the method, not cheating.",
  "spec": {
    "examples": [
      { "title": "Pair 1", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "E4:h F4:h" } ] },
      { "title": "Pair 2", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "G4:h A4:h" } ] },
      { "title": "Pair 3", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "B3:h C4:h" } ] }
    ],
    "questions": [
      { "q": "Pair 1 is…", "choices": ["a half step (m2)", "a whole step (M2)"], "answer": 0, "explain": "E–F: no key between them, mi → fa in C." },
      { "q": "Pair 2 is…", "choices": ["a half step (m2)", "a whole step (M2)"], "answer": 1, "explain": "G–A: a black key between them, sol → la in C." },
      { "q": "Pair 3 is…", "choices": ["a half step (m2)", "a whole step (M2)"], "answer": 0, "explain": "B–C: ti → do, the leading tone arriving home." }
    ]
  }
}
```

## Step or skip

```example
{
  "title": "A step (C–D, a 2nd), then a skip (C–E, a 3rd), twice",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h D4:h | r:w | C4:h E4:h | r:w | C4:h D4:h | r:w | C4:h E4:h" } ],
  "show": ["keyboard"]
}
```

With the do-trick this is a question you've answered hundreds of times: is the second note **re** (one step up) or **mi** (the middle of the home chord)?

**Try it** (keyboard, 3 minutes):

1. Thumb on C4. Play C then D, the next key along. Then C then E, one white key jumped over. Repeat C–D, C–E three times, slowly, thinking "do–re", "do–mi".
2. As the second note sounds, say "step" or "skip" (out loud or in your head). You're tying the sound to what your hand just did.
3. Move the same two moves to F (F–G, F–A) and G (G–A, G–B). Think of F, then G, as do: the moves still feel like do–re and do–mi.
4. Now the anchor tunes. Play the opening of "Frère Jacques": C D E C, do re mi do, all steps. Then the opening of "When the Saints" (below): C E F G, do mi fa sol; its first move is a skip.

```example
{
  "title": "When the Saints (opening): the first move, C–E (do–mi), is a skip (a major 3rd)",
  "bpm": 110, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:h E4:h | C4:h E4:h | D4:w" } ],
  "show": ["staff"]
}
```

What to listen for: a step sounds like the tune **moves on** to the next note; a skip sounds like it **jumped over** one. If both simply sound "higher", that's normal: at first the *size* of a jump is much harder to hear than its *direction*.

**If you can't hear it yet:** find both notes on your keyboard with the search you already know, then count half steps from the first to the second: **2 = step (M2), 4 = skip (M3)**. Or play the first note and walk up the major scale from it (whole, whole): landing after one step = M2, after two = M3. Getting the answer this way is still ear training: every check lets you hear the pair again *knowing* the answer.

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Check: step or skip?",
  "instructions": "Hear the first note as do: is the second re or mi? Check on the keyboard if you're unsure.",
  "spec": {
    "examples": [
      { "title": "Pair 1", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "D4:h E4:h" } ] },
      { "title": "Pair 2", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "F4:h A4:h" } ] },
      { "title": "Pair 3", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "G4:h B4:h" } ] },
      { "title": "Pair 4", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "A4:h B4:h" } ] }
    ],
    "questions": [
      { "q": "Pair 1 is…", "choices": ["a step (M2)", "a skip (M3)"], "answer": 0, "explain": "D–E: 2 half steps, a whole step." },
      { "q": "Pair 2 is…", "choices": ["a step (M2)", "a skip (M3)"], "answer": 1, "explain": "F–A: 4 half steps, a major 3rd (do–mi in F)." },
      { "q": "Pair 3 is…", "choices": ["a step (M2)", "a skip (M3)"], "answer": 1, "explain": "G–B: 4 half steps, a major 3rd (do–mi in G)." },
      { "q": "Pair 4 is…", "choices": ["a step (M2)", "a skip (M3)"], "answer": 0, "explain": "A–B: 2 half steps, a whole step." }
    ]
  }
}
```

```exercise
{
  "id": "e2",
  "type": "build-interval",
  "title": "Play a M2 or M3 up",
  "count": 10,
  "passScore": 0.75,
  "spec": { "intervals": ["M2", "M3"], "direction": "asc", "root": "random" },
  "hints": ["M2 = 2 half steps, M3 = 4 half steps. Count every key, black ones too."]
}
```

### Before the interval drill

Your interval ladder starts today. This lesson opens its first two rungs, half step vs whole step and then step vs skip; both notes stay within one octave (C4 to C5), and a new starting note comes with every question. The **How to do it** box above the drill gives the method for your rung, and it's the routine you just rehearsed:

1. Press Play and just listen. Replay once.
2. Hear the first note as do. **Size first**: does the second note sit right against it, one step up, or a skip up?
3. Not sure? Play the first note on your keyboard, then each candidate, replay the question and pick the closer match.
4. After answering, replay once more *knowing* the answer.

```ladder
{ "skill": "intervals", "unlocks": 2, "intro": "Opens \"Half step or whole step\", then \"Whole step or major 3rd\"; the drill runs at your current rung." }
```

## Keyboard

```exercise
{
  "id": "e6",
  "type": "play-melody",
  "title": "When the Saints",
  "passScore": 0.75,
  "spec": { "bpm": 100, "timeSig": "4/4", "key": "C", "seq": "r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:h E4:h | C4:h E4:h | D4:w", "showStaff": true, "showKeyboard": false, "countIn": 1 }
}
```

## Between lessons

- **Two Practice sessions of about 10 minutes** before the next lesson. The Practice page picks the skill furthest behind first.
- **Start each with 2 minutes at the keyboard, no app:** from three different notes, play a half step, a whole step and a major 3rd, thinking "ti–do", "do–re", "do–mi" as each sounds.
- **On every wrong answer:** replay, play both notes on your keyboard, replay again. One slow correction teaches more than five fast guesses.
- **How to tell you're ready:** the interval bar on the Dashboard fills as rungs are mastered. You don't need it full to start the next lesson; the drills wait for you. If the Dashboard says *practise first*, give that skill one extra session.
