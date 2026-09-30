---
id: w05-l1-la-ti-and-the-whole-octave
title: "La, Ti and the Whole Octave"
week: 5
order: 1
phase: p1
duration_min: 40
goals:
  - Hear la (6) as a soft note that leans down to sol, and ti (7) as the note that pulls up into do'
  - Name all seven degrees of C major inside one octave, do (C4) to do' (C5)
  - Find any degree by walking home — down to do from 2–5, up to do' from 6 and 7
prerequisites: [w04-l3-reading-rhythm-and-treble-clef]
tags: [scale-degrees, solfege, ear, keyboard, songs]
songs:
  - { title: "Frère Jacques", composer: "Traditional", public_domain: true }
---

# La, ti and the whole octave

You know five degrees: **do re mi fa sol** (1–5), C to G. Above sol the octave has two more notes before home comes
round again: **la** (6, A) and **ti** (7, B). Then **do'** (C5) — "high do", the same home one octave up. Today the
whole octave, do to do', becomes yours. Everything still happens between C4 and C5.

```keyboard
{ "range": ["C4", "C5"], "highlight": ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"], "labels": "degrees", "key": "C", "colors": { "C4": "root", "C5": "root", "A4": "other", "B4": "other" } }
```

## La (6): soft, leans down to sol

La sits one step above sol. After the home run most people hear it as **soft, a little wistful** — not at rest, but
not urgent either. In tunes it usually **leans down to sol** (6 → 5), the way fa leans down to mi.

```example
{
  "title": "Home run, then la (A4) held… and falling to sol, then home",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | A4:w | G4:h r:h | G4:q E4:q C4:h" } ],
  "show": ["keyboard"]
}
```

**Try it:**

1. Play the home run, then hold A4 for three seconds. Then G4. Did something settle?
2. Play the third line of Frère Jacques: **G A G F E C** — *sol la sol fa mi do*. La is the little lift that falls
   straight back to sol.
3. Home run, then A4 — now walk *up* instead: A B C5. Two steps to do'. The rule to keep: **6 (la) feels like it
   leans down onto 5 (sol); the app's walk home takes the short way, up through ti to do** (la, ti, do').

## Ti (7): pulls up into do'

Ti is a **half step below do'** — the same squeezed distance as E–F. It's the most restless note of the scale: it
sounds like it's *about to* arrive, and most people want it to step up into C5. That's why it has a name of its own,
the [[leading tone]]: it leads into home.

```example
{
  "title": "The scale up to ti… held… then do'",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 A4:8 B4:q~ | B4:w | C5:w" } ],
  "show": ["keyboard"]
}
```

**Try it:**

1. Play C D E F G A B slowly and **stop on B**. Count to three. Most people find it hard *not* to press C5.
2. Now press C5. That's the arrival.
3. Home run, then B4 alone. Compare with A4 alone: la is soft and drifts down; ti is sharp and points up.

**Honestly about do':** C5 at the end of the scale will probably sound like "arriving home" — that's the scale
leading you there, not yet hearing C4 and C5 as the same note. That second skill is the octave strand, and it's
slower. In degree questions the note stays between do and ti; do' only turns up in tunes.

### Check it

```exercise
{
  "id": "e1",
  "type": "listen",
  "title": "Sol, la or ti?",
  "instructions": "Each clip: the home run, then one note. Answer, then walk it home on the keyboard.",
  "spec": {
    "examples": [
      { "title": "Clip 1", "bpm": 100, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | B4:w" } ] },
      { "title": "Clip 2", "bpm": 100, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | G4:w" } ] },
      { "title": "Clip 3", "bpm": 100, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | A4:w" } ] }
    ],
    "questions": [
      { "q": "Clip 1: the last note is…", "choices": ["5 (sol)", "6 (la)", "7 (ti)"], "answer": 2, "explain": "B = 7: sharp, pointing up; one half step to do'." },
      { "q": "Clip 2: the last note is…", "choices": ["5 (sol)", "6 (la)", "7 (ti)"], "answer": 0, "explain": "G = 5: the top of the home run, stable and open." },
      { "q": "Clip 3: the last note is…", "choices": ["5 (sol)", "6 (la)", "7 (ti)"], "answer": 1, "explain": "A = 6: soft, a step above sol." }
    ]
  }
}
```

## Walking home, both ways

With seven notes you need a method, not a guess. Two steps, the same as the drill's **How to do it**:

1. **At rest or leaning?** Do, mi, sol (1 3 5) sit still. Re, fa, la, ti (2 4 6 7) want to move.
2. **Which way home is shorter?** From 2–5 walk **down** to do. From 6 and 7 walk **up** to do': la-ti-do' (two
   steps), ti-do' (one). Count the steps and you have the number.

**Try it:** play the home run, then any white key between C4 and B4 without looking. Walk it home the short way,
counting steps aloud ("sol: four down… la: two up"). Then look. Do this five times.

**If you can't hear it yet:** the keyboard answer always works — find the key with the pitch search and count from
C: C D E F G A B = 1 2 3 4 5 6 7. After each drill answer, listen to the automatic walk home; it's the same path you
just played.

The drill opens two rungs, one new note each: *1 to 6* (la joins), then *all seven* (ti joins). It runs at your
current rung, which may still be an earlier one — that's fine.

```ladder
{ "skill": "degrees", "unlocks": 7, "intro": "Degrees at your current rung — up to all seven in C, after the home run." }
```

## Echo the whole octave

The next melody rung plays four notes chosen from **all seven degrees plus do'** (C4 to C5). Same method as before:
home run first, then find the first note, then follow the moves. One new habit: for high notes, **start from do'**
(C5) and walk down — la is two keys below it, ti one.

**Try it:** play these endings and say the degrees: G A B C5 (*5 6 7 1'* — the climb home), C5 B A G (*1' 7 6 5*),
E G A G (*3 5 6 5*).

```ladder
{ "skill": "melody", "unlocks": 7, "intro": "Echoes at your current rung — up to four notes anywhere from C4 to C5." }
```

## Hands

```exercise
{
  "id": "e2",
  "type": "play-notes",
  "title": "Play by degree: the whole octave",
  "instructions": "Degrees in C major, C4 to B4 (1 is middle C). Say the solfège as you play: la sol, ti la…",
  "passScore": 0.75,
  "spec": { "prompt": "degrees", "notes": [["A4", "G4"], ["B4", "A4", "G4"], ["E4", "G4", "A4"], ["G4", "A4", "B4"], ["A4", "F4", "D4"], ["B4", "G4", "E4", "C4"]], "ordered": true, "key": "C" }
}
```

```exercise
{
  "id": "e3",
  "type": "play-melody",
  "title": "Frère Jacques, lines 1–3",
  "instructions": "Say the degrees as you play: 1 2 3 1 (twice), 3 4 5 (twice), 5 6 5 4 3 1 (twice). Line 3 has quick eighth notes on 5 6 5 4.",
  "passScore": 0.7,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "C4:q D4:q E4:q C4:q | C4:q D4:q E4:q C4:q | E4:q F4:q G4:h | E4:q F4:q G4:h | G4:8 A4:8 G4:8 F4:8 E4:q C4:q | G4:8 A4:8 G4:8 F4:8 E4:q C4:q", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e4",
  "type": "play-scale",
  "title": "C major, do to do'",
  "instructions": "Right hand, thumb under on F going up, 3 over on E going down. Pause for a beat on B going up and feel the pull.",
  "passScore": 0.75,
  "spec": { "root": "C", "scale": "major", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 60, "metronome": true }
}
```

```exercise
{
  "id": "e5",
  "type": "quiz",
  "title": "La, ti, do'",
  "spec": { "questions": [
    { "q": "In C major, la (6) is…", "choices": ["G", "A", "B"], "answer": 1 },
    { "q": "Ti (7) is how far below do'?", "choices": ["a half step", "a whole step"], "answer": 0, "explain": "B to C: no black key between." },
    { "q": "In a tune, la most often moves to…", "choices": ["sol, a step down", "do, a big jump"], "answer": 0 },
    { "q": "The shortest walk home from ti is…", "choices": ["up one step to do'", "down six steps to do"], "answer": 0 },
    { "q": "At rest after the home run:", "choices": ["1, 3 and 5", "2, 4 and 6", "6 and 7"], "answer": 0 },
    { "q": "C5 at the top of the scale sounds like arriving home. That means you now hear octaves…", "choices": ["yes, fully", "not necessarily — the scale leads you there; octaves are their own, slower strand"], "answer": 1 }
  ] }
}
```

## Between lessons

- Two or three **Practice** sessions of about 10 minutes. On degree questions: at rest or leaning, then walk home the
  short way — and listen to the app's walk home after every answer.
- Once a day: play C major up to B, hold it, then resolve to C5. Then Frère Jacques line 3, saying *5 6 5 4 3 1*.
- Ready for the next lesson when *1 to 6* feels mostly right. *All seven* may take a week or two more — Practice
  keeps it going while you continue.
