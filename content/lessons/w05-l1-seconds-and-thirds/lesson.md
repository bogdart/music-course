---
id: w05-l1-seconds-and-thirds
title: Intervals I — Seconds and Thirds
week: 5
order: 1
phase: p1
duration_min: 45
goals:
  - Understand what an interval is and how its number is counted
  - Build and play major and minor 2nds and 3rds
  - Hear a step vs a skip (M2 vs M3), then a minor vs a major 3rd — and get the answer from the keyboard when the ear can't yet
prerequisites: [w04-l3-reading-rhythm-and-treble-clef]
tags: [intervals, ear, keyboard]
songs:
  - { title: "When the Saints Go Marching In", composer: "Traditional", public_domain: true }
  - { title: "Frère Jacques", composer: "Traditional", public_domain: true }
---

# Intervals: the distance between two notes

An [[interval]] is the distance between two notes. You already know two: the half step and the whole step. Today they get their proper names, and we add the next size up, the 3rd. Three things to take away: **step or skip**, **minor or major 3rd**, and **degree 5** in the degree drill.

## Counting the number

An interval's **number** counts **letter names**, including both ends: C → D is C, D = a **2nd**; C → E is C, D, E = a **3rd**. So a 2nd is a step to the next letter, a 3rd skips one letter.

Two intervals can have the same number but a different number of half steps. That's the **quality**:

| Interval | App label | Half steps | Example |
|---|---|---|---|
| minor 2nd | m2 | 1 | E–F |
| major 2nd | M2 | 2 | C–D |
| minor 3rd | m3 | 3 | E–G |
| major 3rd | M3 | 4 | C–E |

Your "half step" is a minor 2nd, your "whole step" a major 2nd. The half-step count is your safety net for the whole lesson: whatever your ear says, counting keys (black keys included) always gives the right answer.

```exercise
{
  "id": "e1",
  "type": "quiz-input",
  "title": "Count the interval",
  "spec": { "questions": [
    { "q": "How many half steps in a major 3rd?", "answer": ["4"], "kind": "number" },
    { "q": "How many half steps in a minor 3rd?", "answer": ["3"], "kind": "number" },
    { "q": "A major 3rd above C is…", "answer": ["E"], "kind": "note" },
    { "q": "A minor 3rd above A is…", "answer": ["C"], "kind": "note" },
    { "q": "A major 2nd above F is…", "answer": ["G"], "kind": "note" },
    { "q": "A major 3rd above F is…", "answer": ["A"], "kind": "note" },
    { "q": "A minor 3rd above D is…", "answer": ["F"], "kind": "note" }
  ] },
  "passScore": 0.75
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

**Try it** (keyboard, 3 minutes):

1. Thumb on C4. Play C then D — the next key along. Then C then E — one white key jumped over. Repeat C–D, C–E three times, slowly.
2. As the second note sounds, say "step" or "skip" (out loud or in your head). You're tying the sound to what your hand just did.
3. Move the same two moves to F (F–G, F–A) and G (G–A, G–B). Does "step" still feel like the same kind of move?
4. Now the anchor tunes. Play the opening of "Frère Jacques": C D E C — it moves by steps. Then the opening of "When the Saints" (below): C E F G — its first move is a skip.

```example
{
  "title": "When the Saints (opening) — the first move, C–E, is a skip (a 3rd)",
  "bpm": 110, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:h E4:h | C4:h E4:h | D4:w" } ],
  "show": ["staff"]
}
```

What to listen for: a step sounds like the tune **moves on** to the next note; a skip sounds like it **jumped over** one. If both simply sound "higher", that's normal: at first the *size* of a jump is much harder to hear than its *direction*.

**If you can't hear it yet:** find both notes on your keyboard with the search you already know (play a key — higher or lower? — move), then count half steps from the first to the second: **2 = step (M2), 4 = skip (M3)**. Getting the answer this way is still ear training: every check lets you hear the pair again *knowing* the answer.

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Check: step or skip?",
  "instructions": "Play each pair as often as you like. Use the keyboard to check before answering if you want — that's the method, not cheating.",
  "spec": {
    "examples": [
      { "title": "Pair 1", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "D4:h E4:h" } ] },
      { "title": "Pair 2", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "F4:h A4:h" } ] },
      { "title": "Pair 3", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "G4:h B4:h" } ] },
      { "title": "Pair 4", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "A4:h B4:h" } ] }
    ],
    "questions": [
      { "q": "Pair 1 is…", "choices": ["a step (M2)", "a skip (M3)"], "answer": 0, "explain": "D–E: 2 half steps, a whole step." },
      { "q": "Pair 2 is…", "choices": ["a step (M2)", "a skip (M3)"], "answer": 1, "explain": "F–A: 4 half steps, a major 3rd." },
      { "q": "Pair 3 is…", "choices": ["a step (M2)", "a skip (M3)"], "answer": 1, "explain": "G–B: 4 half steps, a major 3rd." },
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

## Minor or major 3rd

Both are skips; they differ by one half step. Listen from the same note:

```example
{
  "title": "Major 3rd vs minor 3rd: C–E, C–E♭, then E–G♯, E–G",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h E4:h | C4:h Eb4:h | r:w | E4:h G#4:h | E4:h G4:h" } ],
  "show": ["keyboard"]
}
```

**Try it:**

1. Play C4 then E4 (4 half steps), then C4 then E♭4 (3). Alternate: C–E, C–E♭, C–E, C–E♭.
2. Now play each pair **together**: C+E, then C+E♭. Together the difference is often easier to notice. Then go back to one after the other.
3. Pick your own labels. Many people call the major 3rd brighter and the minor 3rd darker; others hear "open vs closed" or "plain vs sad". Any label works as long as it stays the same.
4. Repeat from F (F–A, F–A♭) and G (G–B, G–B♭).

Be honest with yourself: this is subtle — the two versions differ by the smallest step on the keyboard. It usually takes weeks of short drills, not one lesson.

**If you can't hear it yet:** play the first note, then both candidates yourself — 3 keys up and 4 keys up — then replay the pair and pick the one that matches. Or find both notes and count: **3 = minor, 4 = major**.

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
      { "q": "Pair 1 is…", "choices": ["minor 3rd (m3)", "major 3rd (M3)"], "answer": 0, "explain": "D–F: 3 half steps." },
      { "q": "Pair 2 is…", "choices": ["minor 3rd (m3)", "major 3rd (M3)"], "answer": 1, "explain": "F–A: 4 half steps." },
      { "q": "Pair 3 is…", "choices": ["minor 3rd (m3)", "major 3rd (M3)"], "answer": 0, "explain": "E–G: 3 half steps." }
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

### Before the interval drill

This lesson opens two interval rungs — step vs skip, then minor vs major 3rd — but the drill runs at **your current rung**, which may still be half step vs whole step. Whichever it is, the **How to do it** box above the drill gives that rung's method, and it's the routine you just rehearsed:

1. Press Play and just listen. Replay once.
2. **Size first** (step or skip?); only then colour.
3. Not sure? Play the first note on your keyboard, then each candidate, replay the question and pick the closer match.
4. After answering, replay once more *knowing* the answer.

```ladder
{ "skill": "intervals", "unlocks": 3, "intro": "Opens \"Whole step or major 3rd\" and \"Minor or major 3rd\"; the drill runs at your current rung." }
```

## Degree 5 in the degree drill

Last week you met sol (5) in melodies. This lesson opens the single-note rung with 5: after the home run, which degree, 1 to 5?

**Try it:**

1. Play the home run yourself: C D E F G F E D C. G is the turning point — the top.
2. Play C, then G, and hold G. Walk home from it: G F E D C — **four** steps down. Do the same from E: E D C — two steps.
3. Play the home run again, then G; then the home run, then E. Some people hear G as "stable but open, like a second home up high" and E as "settled, close to home". Your own words are fine — or none at all.

```example
{
  "title": "Home run, then 5 (G) and 3 (E) — two notes that often get mixed up",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | G4:w | r:w | E4:w" } ],
  "show": ["keyboard"]
}
```

**If you can't hear it yet:** two keyboard routes. (a) **Find the key**: search for the note between C and G; its key tells the degree — C D E F G = 1 2 3 4 5. (b) **Walk home**: play from the note down the white keys to C and count the steps: 4 steps = 5, 3 = 4, 2 = 3, 1 = 2. At this stage the search is often faster than any feeling. That's fine: the feeling grows out of many searches.

```exercise
{
  "id": "c3",
  "type": "listen",
  "title": "Check: which degree?",
  "instructions": "Each example plays the home run, then one note. Walk home or find the key before you answer.",
  "spec": {
    "examples": [
      { "title": "Question 1", "bpm": 90, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | G4:w" } ] },
      { "title": "Question 2", "bpm": 90, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | E4:w" } ] },
      { "title": "Question 3", "bpm": 90, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | F4:w" } ] }
    ],
    "questions": [
      { "q": "Question 1: the last note is degree…", "choices": ["3", "4", "5"], "answer": 2, "explain": "G: sol, four steps above home." },
      { "q": "Question 2: the last note is degree…", "choices": ["3", "4", "5"], "answer": 0, "explain": "E: mi, two steps above home." },
      { "q": "Question 3: the last note is degree…", "choices": ["3", "4", "5"], "answer": 1, "explain": "F: fa, the one that leans down to E." }
    ]
  }
}
```

### Before the degree drill

The drill runs at your current degree rung (maybe still 1–4). The method in its **How to do it** box is the same two routes: after the home run, keep its last C in your head; when the question note sounds, walk down from it to C and count — or find the key. After you answer, the app walks the note home: follow it with your finger on the keys.

```ladder
{ "skill": "degrees", "unlocks": 5, "intro": "Opens degrees 1 to 5 after the home run; the drill runs at your current rung." }
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
- **Start each with 2 minutes at the keyboard, no app:** from three different notes, play a step, a skip, a major 3rd and a minor 3rd, naming each as it sounds.
- **On every wrong answer:** replay, play both notes on your keyboard, replay again. One slow correction teaches more than five fast guesses.
- **How to tell you're ready:** the interval and degree bars on the Dashboard fill as rungs are mastered. You don't need them full to start the next lesson — the drills wait for you. If the Dashboard says *practise first*, give that skill one extra session.
