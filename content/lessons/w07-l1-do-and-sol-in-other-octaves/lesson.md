---
id: w07-l1-do-and-sol-in-other-octaves
title: "Do and Sol in Other Octaves"
week: 7
order: 1
phase: p1
duration_min: 40
goals:
  - "Know why a note in another octave sounds unrelated at first, and what to listen for instead: function, not height"
  - Tell do (finished) from sol (open) after the cadence, in octave 3, 4 or 5
  - "Bring any note into home's octave on the keyboard: find it, then jump by 12 keys"
prerequisites: [w06-l3-diatonic-triads-and-roman-numerals]
tags: [ear, octaves, register, degrees, keyboard]
---

# Do and sol in other octaves

Until now every degree question sat in one octave: the cadence ends on the home chord (C4 E4 G4 on top, the bass C3 underneath), and the question note came from C4 to B4. Real music doesn't stay there. A bass line lives two octaves below the melody; a tune may start high and end low. This week keeps **everything else fixed** — C major, the cadence, the degrees you know — and changes only the [[register]]: how high or low the note sounds.

## Why other octaves sound unrelated

Play C4, then C5. Same letter, same degree — and yet, to most beginners, C5 sounds like a different, brighter note. That's not a flaw in your ear. The brain tracks **height** first; hearing that two notes an [[octave]] apart share a name is a separate skill that grows slowly, over months, even with daily practice. Research on octave hearing says the same: it improves with training, but gradually. So this course never waits for it. Instead you'll use two things that already work:

1. **Function:** after the cadence, do feels *finished* in any octave; sol feels *open*, like it could go on. That feeling survives the jump in height better than the note's "sound" does.
2. **The keyboard:** find the note, then jump by 12 keys into the cadence's octave, and name it there.

## Do in three octaves

```example
{
  "title": "Cadence, then do in octave 4 (C4), octave 5 (C5) and octave 3 (C3)",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | C4:w | [C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | C5:w | [C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | C3:w" }, { "instrument": "piano", "seq": "C3:q F3:q G3:q C3:q | r:w | C3:q F3:q G3:q C3:q | r:w | C3:q F3:q G3:q C3:q | r:w" } ],
  "show": ["keyboard"]
}
```

**Try it:**

1. Play the cadence (C E G → C F A → B D G → C E G), then C4. It ends the story.
2. Cadence again, then C5. Ask only one question: *is the story over?* Ignore that it's higher.
3. Cadence again, then C3. Same question. Many people find the low C still "finished", just heavier — it is the same note the cadence's bass just ended on.
4. Now **walk the octaves**: play C3, C4, C5 slowly, then back down. Each step is 12 keys. Say "do, do, do".

## Sol in three octaves

```example
{
  "title": "Cadence, then sol in octave 4 (G4), octave 5 (G5) and octave 3 (G3)",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | G4:w | [C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | G5:w | [C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | G3:w" }, { "instrument": "piano", "seq": "C3:q F3:q G3:q C3:q | r:w | C3:q F3:q G3:q C3:q | r:w | C3:q F3:q G3:q C3:q | r:w" } ],
  "show": ["keyboard"]
}
```

**Try it:**

1. Cadence, then G4: open, stable, but not the end — it could go on.
2. Cadence, then G5; then G3. Is each one "finished" or "open"?
3. Contrast directly: cadence → C5, then cadence → G5. Then cadence → C3, then cadence → G3. Compare the pair in the same octave: finished or open?
4. Walk the octaves: G3, G4, G5 and back.

Low G3 is a trap to know about: it sits *below* home and many people hear it as "leading up into C". Next week (below do) is all about that, so today's check leaves it out; in the drill, if a low note sounds open rather than finished, it's sol.

**If you can't hear it yet:** bring the note home. Search for it on the keyboard (higher or lower?) until your key and the note merge. Then jump by 12 keys toward the cadence's octave — the C4 area — and play it there, right after the cadence. C = 1, G = 5. That takes 20 seconds per question at first, and it always works.

```exercise
{
  "id": "k1",
  "type": "play-notes",
  "title": "Walk the octaves",
  "instructions": "Play each set low to high: the same letter in three octaves, 12 keys apart.",
  "passScore": 0.75,
  "spec": { "prompt": "names", "notes": [["C3", "C4", "C5"], ["G3", "G4", "G5"], ["E3", "E4", "E5"]], "ordered": true, "octave": "exact" }
}
```

```exercise
{
  "id": "k2",
  "type": "play-notes",
  "title": "Bring it home",
  "instructions": "Each set: a far note, then the same letter in home's octave (octave 4). Jump by 12 keys; don't search.",
  "passScore": 0.75,
  "spec": { "prompt": "names", "notes": [["G5", "G4"], ["C3", "C4"], ["C5", "C4"], ["G3", "G4"]], "ordered": true, "octave": "exact" }
}
```

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Check: finished or open?",
  "instructions": "Each example plays the cadence, then one note in some octave. Decide, then bring the note home on your keyboard to check.",
  "spec": {
    "examples": [
      { "title": "Question 1", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | r:h C5:h" }, { "instrument": "piano", "seq": "C3:q F3:q G3:q C3:q | r:w" } ] },
      { "title": "Question 2", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | r:h G5:h" }, { "instrument": "piano", "seq": "C3:q F3:q G3:q C3:q | r:w" } ] },
      { "title": "Question 3", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | r:h C3:h" }, { "instrument": "piano", "seq": "C3:q F3:q G3:q C3:q | r:w" } ] }
    ],
    "questions": [
      { "q": "Question 1: the note is…", "choices": ["1 (do)", "5 (sol)"], "answer": 0, "explain": "C5: do, an octave above the C4 on top of the cadence." },
      { "q": "Question 2: the note is…", "choices": ["1 (do)", "5 (sol)"], "answer": 1, "explain": "G5: sol, an octave above G4." },
      { "q": "Question 3: the note is…", "choices": ["1 (do)", "5 (sol)"], "answer": 0, "explain": "C3: do — the very note the cadence's bass ended on, an octave below C4." }
    ]
  }
}
```

## Adding mi

The drill's second new rung adds **mi** (3): the three notes of the home chord, in any of three octaves. Mi is at rest like do, but brighter — it sits *on top* rather than feeling like the floor. Same method: judge by function, or bring it home. E = 3.

```example
{
  "title": "Cadence, then mi in octave 5 (E5), then the home chord spread over three octaves: C3 E4 G5",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | E5:w | C3:q E4:q G5:h | [C3 E4 G5]:w" }, { "instrument": "piano", "seq": "C3:q F3:q G3:q C3:q | r:w | r:w | r:w" } ],
  "show": ["keyboard"]
}
```

**Try it:** play C3, then E4, then G5, then all three together. Still C major — the letters decide the chord, not the octaves. Then play C4 E4 G4 together and compare: same chord, closer together.

### Before the degree drill

This lesson opens "Do and sol, other octaves" and "Do, mi, sol, other octaves". The drill runs at your current degree rung, so you'll meet other octaves once all seven after the cadence are solid. Rehearse the **How to do it** routine now:

1. Let the cadence finish. Hold home, C, in your head — the bass C3 and the C4 on top are both do (or play C4).
2. The question note: **don't judge its height.** Finished (1), bright on top (3) or open (5)?
3. Unsure: find the note, jump by 12 keys into the C4 octave, play it after pressing **Reference**. Name it there.
4. After answering, press **Question, then walk home**: the walk lands on the C *in the note's own octave*. Then play C4 yourself — the same do, one octave apart.

```ladder
{ "skill": "degrees", "unlocks": 10, "intro": "Opens do and sol, then do, mi and sol, in octaves 3 to 5; the drill runs at your current rung." }
```

## Octave review

The octave ladder stays at the rung opened last week (same or different, one after the other). It's the same skill from another side: there you decide *whether* two notes share a name; here you use that shared name to find home.

```ladder
{ "skill": "octave", "unlocks": 5, "intro": "Review: octaves at your current rung." }
```

## Theory check

```exercise
{
  "id": "q1",
  "type": "quiz",
  "title": "Octaves and home",
  "spec": { "questions": [
    { "q": "From C4 up to C5 is how many keys (half steps)?", "choices": ["7", "8", "12"], "answer": 2 },
    { "q": "After the cadence in C, G5 is degree…", "choices": ["1", "5", "it depends on the octave"], "answer": 1, "explain": "A degree is a letter's job in the key; every G is 5 in C major." },
    { "q": "The most reliable way to name a far-away note right now:", "choices": ["judge how high it is", "find it, jump by 12 into home's octave, name it there"], "answer": 1 },
    { "q": "C3, E4 and G5 played together make…", "choices": ["a C major chord, spread out", "no chord, the notes are too far apart"], "answer": 0 }
  ] }
}
```

## Between lessons

- **Two Practice sessions of about 10 minutes.** If other-octave questions come up, use the keyboard method on every one you're unsure of — slow and right is the goal this week.
- **Keyboard, 2 minutes a day:** walk the octaves on C, G and E (3 → 4 → 5 → 4 → 3). Then play the cadence, then a random C or G anywhere on the keyboard: finished or open?
- **Honest expectation:** other octaves may keep sounding "different" for weeks. That's the long strand of octave hearing; the method carries you meanwhile.
