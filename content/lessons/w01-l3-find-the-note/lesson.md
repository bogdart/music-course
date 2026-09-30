---
id: w01-l3-find-the-note
title: Find the Note You Hear
week: 1
order: 3
phase: p1
duration_min: 35
goals:
  - Find a note you heard on the keyboard by searching — middle first, then higher or lower
  - Recognise the moment your key and the heard note merge into the same note
  - Search among C, D, E and then among C to G
prerequisites: [w01-l2-higher-lower-same]
tags: [pitch, ear, keyboard]
---

# Find the note you hear

> **Fast path.** If placement mastered pitch rungs 4–5 (*Find it: C, D or E* and *C to G*), or you can already find
> any note between C4 and G4 in two or three tries: read **The search** (the five steps — later rungs build on them),
> answer the two *Search* blocks, run the drill once and move on to lesson 4.

Finding on the keyboard a note you just heard is the most useful ear skill in this course: it's how you'll play
tunes by ear, find bass lines and chords, and later take songs apart. It is **not** a gift you either have or don't.
It's a **search**, built from the two things you practised last lesson: *up or down?* and *the same note?*

## The search

1. **Listen** to the mystery note. Replay it whenever you like.
2. **Start in the middle** of the keys you're allowed to use.
3. **Compare:** play the mystery note, then your key. Is your key higher, lower, or the same?
4. **Move** the other way: if your key was too high, go left; too low, go right. Take bigger moves while you're
   far off, smaller ones as you get close.
5. **Merge:** when mystery-then-your-key sounds like *the same note twice* — no lift, no sinking — you've found it.

## A guided search

Here the answer is shown, so you can practise the moves. The mystery note is **E4**. Use the keyboard below.

```example
{
  "title": "Guided search: the mystery note is E4",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "E4:w" } ],
  "show": ["keyboard"]
}
```

```keyboard
{ "range": ["C4", "C5"], "highlight": ["C4", "D4", "E4"], "labels": "names" }
```

**Try it:**

1. Play the example. Then play **D4**, the middle of C–D–E. Mystery, then D4: the D is one step *lower* (you may
   or may not hear that yet — listen for a small sinking). So the mystery note is higher — go right.
2. Play the example, then **E4**. No movement: the same note twice. Found.
3. Now pretend you started badly: play the example, then **C4** — lower, clearly. Go right: D4 — still a bit
   lower. E4 — merge. Three tries is fine; the search always gets there.

## Your turn

The notes below are hidden. For each one, search with the keyboard above (start on D4), then answer.

```exercise
{
  "id": "e1",
  "type": "listen",
  "title": "Search: C, D or E",
  "spec": {
    "examples": [
      { "title": "Mystery note 1", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:w" } ] },
      { "title": "Mystery note 2", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "E4:w" } ] },
      { "title": "Mystery note 3", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "D4:w" } ] }
    ],
    "questions": [
      { "q": "Mystery note 1 is…", "choices": ["C4", "D4", "E4"], "answer": 0, "explain": "C4: from D4 it sits lower — one key left." },
      { "q": "Mystery note 2 is…", "choices": ["C4", "D4", "E4"], "answer": 2, "explain": "E4: from D4 it sits higher — one key right." },
      { "q": "Mystery note 3 is…", "choices": ["C4", "D4", "E4"], "answer": 1, "explain": "D4: it merged with your first try." }
    ]
  }
}
```

**If you can't hear it yet:** turn the comparison into last lesson's question. Play the mystery note, then your key,
and ask only "up or down?" — the pair tells you which way to go. Still unsure? Walk: try C4, D4, E4 in turn,
replaying the mystery note before each, and pick the one that sounds most like the same note twice. Needing
three or four tries is normal at the start; **fewer tries** is how you'll notice progress.

## Five keys: bigger moves first

With C D E F G the middle is **E**. From there you're at most two keys away, so one comparison tells you the side and
one or two more find the key. Rehearse a search where the mystery note is F: start on E (too low → go right, skip
one), G (too high → back one), F (merge).

```exercise
{
  "id": "e2",
  "type": "play-notes",
  "title": "Rehearse the search path",
  "instructions": "Play the search moves for a mystery F: E4 (middle), G4 (jumped right), F4 (back one — found). Say 'too low', 'too high', 'found' as you go.",
  "spec": { "prompt": "names", "notes": ["E4", "G4", "F4"], "ordered": true, "key": "C" }
}
```

```exercise
{
  "id": "e3",
  "type": "listen",
  "title": "Search: C to G",
  "instructions": "Start on E4 every time.",
  "spec": {
    "examples": [
      { "title": "Mystery note 4", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "G4:w" } ] },
      { "title": "Mystery note 5", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "D4:w" } ] },
      { "title": "Mystery note 6", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "F4:w" } ] }
    ],
    "questions": [
      { "q": "Mystery note 4 is…", "choices": ["C4", "D4", "E4", "F4", "G4"], "answer": 4, "explain": "G4, the top key: from E, clearly higher; F still a bit low; G merges." },
      { "q": "Mystery note 5 is…", "choices": ["C4", "D4", "E4", "F4", "G4"], "answer": 1, "explain": "D4: from E, a little lower; D merges." },
      { "q": "Mystery note 6 is…", "choices": ["C4", "D4", "E4", "F4", "G4"], "answer": 3, "explain": "F4: from E, a little higher; F merges." }
    ]
  }
}
```

## The pitch drill

The drill runs at your current pitch rung. If you're still on *higher or lower*, keep going with that — it's the
skill the search is made of. On the **Find it** rungs, each key you press sounds, the app says *higher* or *lower*,
and tried keys stay marked. Follow the **How to do it** box: middle first, compare, move, merge.

```ladder
{ "skill": "pitch", "unlocks": 5, "intro": "Up or down, or find the exact note — at your current rung." }
```

```exercise
{
  "id": "e4",
  "type": "quiz",
  "title": "The search",
  "spec": { "questions": [
    { "q": "Searching among C4 to G4, which key do you try first?", "choices": ["C4", "E4 (the middle)", "G4"], "answer": 1 },
    { "q": "Mystery note, then your key: your key sounds LOWER. You move…", "choices": ["right", "left"], "answer": 0, "explain": "Your key is too low, so the mystery note is higher: go right." },
    { "q": "How do you know you've found it?", "choices": ["Mystery then your key sounds like the same note twice", "It sounds nice"], "answer": 0 },
    { "q": "You needed four tries. That means…", "choices": ["you failed", "the search worked; fewer tries will come with practice"], "answer": 1 }
  ] }
}
```

## Between lessons

- Two **Practice** sessions of about 10 minutes. On *Find it* questions, always start in the middle and say the
  comparison to yourself ("too low", "too high") before moving.
- Watch the number of tries: when most notes take one or two, the rung is close to solid. The dashboard's
  **pitch** bar shows it.
- Ready for lesson 4 when *higher or lower* feels comfortable for far and medium jumps. The *Find it* rungs can keep
  growing in Practice while you continue.
