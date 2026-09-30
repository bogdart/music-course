---
id: w01-l2-higher-lower-same
title: Higher, Lower, the Same
week: 1
order: 2
phase: p1
duration_min: 30
goals:
  - Tell up from down when the two notes are closer together
  - Recognise when a note is played twice — the same note, no movement
  - Settle any doubt on the keyboard by playing and comparing
prerequisites: [w01-l1-welcome-and-setup]
tags: [pitch, ear, keyboard]
---

# Higher, lower, the same

Last lesson the two notes were far apart. Today they come closer, and then we add the case where they don't move at
all. Three answers for any two notes: **up**, **down** or **the same**. Every melody you'll ever play is a chain of
exactly these three moves.

## Smaller jumps are still up or down

**Try it** (keyboard below or your own; keep your hand in the air ready to move):

1. Play C4, then C5 — a big lift of the hand.
2. Play C4, then G4 — a smaller lift.
3. Play C4, then E4, then C4, then D4 — small lifts. The notes are neighbours now; the move is small but it still
   has a direction.
4. Now backwards: G4 → C4, E4 → C4, D4 → C4. Drop the hand each time.

```keyboard
{ "range": ["C4", "C5"], "highlight": ["C4", "D4", "E4", "G4"], "labels": "names" }
```

```example
{
  "title": "Up: big, medium, small (C4→C5, C4→G4, C4→D4). Then down: small, medium, big",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h C5:h | C4:h G4:h | C4:h D4:h | r:w | D4:h C4:h | G4:h C4:h | C5:h C4:h" } ],
  "show": ["keyboard"]
}
```

What a small step often feels like: **up** = a slight lift, a little brighter; **down** = a slight sinking, a little
duller. Don't worry if that description doesn't match what you hear — the hand and the keyboard work anyway.

### Check it

```exercise
{
  "id": "e1",
  "type": "listen",
  "title": "Up or down? Smaller moves",
  "instructions": "Replay each pair as often as you like and move your hand with it.",
  "spec": {
    "examples": [
      { "title": "Pair 1", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "G4:h C4:h" } ] },
      { "title": "Pair 2", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:h E4:h" } ] },
      { "title": "Pair 3", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "E4:h D4:h" } ] },
      { "title": "Pair 4", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "D4:h E4:h" } ] }
    ],
    "questions": [
      { "q": "Pair 1: the second note went…", "choices": ["up", "down"], "answer": 1, "explain": "G4 → C4: down, a medium jump." },
      { "q": "Pair 2: the second note went…", "choices": ["up", "down"], "answer": 0, "explain": "C4 → E4: up, two white keys." },
      { "q": "Pair 3: the second note went…", "choices": ["up", "down"], "answer": 1, "explain": "E4 → D4: down, neighbours." },
      { "q": "Pair 4: the second note went…", "choices": ["up", "down"], "answer": 0, "explain": "D4 → E4: up, neighbours." }
    ]
  }
}
```

**If you can't hear it yet** (very common with neighbours): find the first note on the keyboard — try C4, D4, E4
until one sounds like it. Then play one key to the right and one key to the left of it. Which of those two sounds
like the second note? Right = up, left = down. At this stage most beginners get far jumps right and close ones about
half the time; the close ones come with practice, not with trying harder.

## The pitch drill

The drill runs at your current pitch rung — far apart, closer, or neighbours. The **How to do it** box changes with
the rung. For close notes it suggests *Slowly, with a pause*: a replay button that plays the first note twice, then
the second, so you hear exactly where it moved from.

```ladder
{ "skill": "pitch", "unlocks": 3, "intro": "Up or down? The notes come closer on the higher rungs." }
```

## The same note

Sometimes the second note doesn't move at all.

**Try it:**

1. Play E4, pause, E4 again. Your hand stays still: nothing moved. The second note lands exactly on the first.
2. Play E4, then G4. Something moved (up). Then E4, then C4 (down).
3. Play E4, E4, E4, then D4. The first three sit still; the last one steps away.

```example
{
  "title": "Same (E4 E4), different (E4 G4), same (C4 C4), different (C4 E4)",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "E4:h E4:h | r:w | E4:h G4:h | r:w | C4:h C4:h | r:w | C4:h E4:h" } ],
  "show": ["keyboard"]
}
```

What "the same" usually feels like: like knocking twice on the same door — no step, no lift, no sinking. A later
lesson opens a drill for this; today you check it here.

```exercise
{
  "id": "e2",
  "type": "listen",
  "title": "The same note, or did it move?",
  "spec": {
    "examples": [
      { "title": "Pair A", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "D4:h D4:h" } ] },
      { "title": "Pair B", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "D4:h G4:h" } ] },
      { "title": "Pair C", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "A4:h F4:h" } ] },
      { "title": "Pair D", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "F4:h F4:h" } ] }
    ],
    "questions": [
      { "q": "Pair A:", "choices": ["the same note twice", "it moved"], "answer": 0, "explain": "D4, D4." },
      { "q": "Pair B:", "choices": ["the same note twice", "it moved"], "answer": 1, "explain": "D4 → G4, up." },
      { "q": "Pair C:", "choices": ["the same note twice", "it moved"], "answer": 1, "explain": "A4 → F4, down." },
      { "q": "Pair D:", "choices": ["the same note twice", "it moved"], "answer": 0, "explain": "F4, F4." }
    ]
  }
}
```

**If you can't tell:** find the first note on the keyboard (try keys until one sounds like it), then play that key
twice. Does the pair sound like that? Then it's the same note.

## Hands

```exercise
{
  "id": "e3",
  "type": "play-notes",
  "title": "Up, up, down, same",
  "instructions": "Play slowly and move your hand with each note: C4 → G4 (up), → C5 (up), → G4 (down), → G4 (same).",
  "spec": { "prompt": "names", "notes": ["C4", "G4", "C5", "G4", "G4"], "ordered": true, "key": "C" }
}
```

```exercise
{
  "id": "e4",
  "type": "play-notes",
  "title": "Small steps",
  "instructions": "Neighbours now: C4 → D4 (up), → E4 (up), → D4 (down), → D4 (same), → C4 (down). Listen to each move as you play it.",
  "spec": { "prompt": "names", "notes": ["C4", "D4", "E4", "D4", "D4", "C4"], "ordered": true, "key": "C" }
}
```

```exercise
{
  "id": "e5",
  "type": "quiz",
  "title": "What to do",
  "spec": { "questions": [
    { "q": "Two notes are very close and you can't tell the direction. The best move is…", "choices": ["guess", "replay slowly, then find the first note and try the keys either side of it"], "answer": 1 },
    { "q": "The second note sounds one key to the RIGHT of the first. It went…", "choices": ["up", "down"], "answer": 0 },
    { "q": "The same note twice feels like…", "choices": ["a small step up", "no movement at all"], "answer": 1 },
    { "q": "Getting neighbours right only half the time this week is…", "choices": ["normal — it grows with practice", "a sign you have no ear"], "answer": 0 }
  ] }
}
```

## Between lessons

- Two **Practice** sessions of about 10 minutes. On every pair: replay, move your hand, and after a wrong answer
  use *Slowly, with a pause* and then the keyboard to hear why.
- Ready for lesson 3 when far and medium jumps are mostly right. Neighbours may still be shaky — that's expected;
  keep them in Practice.
