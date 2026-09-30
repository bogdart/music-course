---
id: w08-l2-phase-1-review-and-ear-assessment
title: Phase 1 Review and Ear Check-up
week: 8
order: 2
phase: p1
duration_min: 50
goals:
  - Review the theory and keyboard skills of weeks 1–8 in one sitting
  - Rehearse the practical method for every ear ladder, including the keyboard fallbacks
  - See honestly where each ear ladder stands and pick one or two to focus on in Phase 2
prerequisites: [w08-l1-phrases-and-cadences]
tags: [review, assessment, ear]
---

# Phase 1 review

Eight weeks ago you started with the ear near zero and chords were new. Here is what you have worked on since:

- finding and naming any key, and reading the treble clef from middle C up;
- counting and tapping rhythms in 4/4 and 3/4;
- building the major scale from its step pattern, in C, G and F;
- hearing scale degrees, first after the home run, then after the cadence;
- naming and hearing intervals from the half step to the fifth;
- building, playing and hearing major and minor triads, and the seven chords of a key;
- writing melodies and chord parts in the DAW, and transposing them.

Today is a check-up, not an exam: nothing new, pass mark 0.7, and every result simply tells the practice queue where to focus.

## How to take it

- **One sitting**, headphones, a quiet room, keyboard within reach.
- **Replay freely.** There's no penalty; real listening involves replaying.
- **Use your tools** — the keyboard, the walk home, the anchor tunes. That's how trained musicians work too, just faster.
- If you truly don't know, take your best guess and move on.

## Your method card

Every drill below has its **How to do it** box. Here are the same methods on one card — read it once now, and come back to it whenever a drill feels like guessing. The right column is the part that works *before* the ear does.

| Ladder | Listen for | If you can't hear it yet |
|---|---|---|
| Octaves | Together: one note or two fighting? Apart: does the second note match the first "echoed" higher? | Play the first note and the key 12 above it, then replay and compare. |
| Degrees | Hold home from the reference. At rest (1 3 5) or leaning? Down (2 4 6) or up (7)? | Find the note on the keyboard and count scale keys up from home; or walk from it to home, counting steps. |
| Intervals | Size first: step, skip or leap. Then colour (3rds) or anchor tune (4th: Bride, 5th: Twinkle). | Play the first note and each candidate yourself, replay, pick the match; or count half steps. |
| Chords | Bright or dark (your own words)? | Find the root, play major and minor on it, replay, pick the match. |
| Roots | The chord's floor — the lowest note. | Search the bottom note like any single note: higher or lower? move. |
| Progressions | Rest (I) or needs to move on (V)? | Find the bass note: C = I, G = V. |
| Melody | Say the path first: up/down, step/skip. | One note at a time: find note 1, then each next move's direction. |
| Rhythm | Count the beat with your foot. | Tap along with the replay, counting out loud. |

## Refresher

The two reference sounds of Phase 1 — the home run (1 2 3 4 5 4 3 2 1), then the cadence (C – F – G – C):

```example
{
  "title": "Refresher: the home run, then the cadence",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | [C4 E4 G4]:h [C4 F4 A4]:h | [B3 D4 G4]:h [C4 E4 G4]:h" } ],
  "show": ["keyboard"]
}
```

The intervals you've drilled, all from C:

```example
{
  "title": "Refresher: m2, M2, m3, M3, P4, P5 from C",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q Db4:q r:h | C4:q D4:q r:h | C4:q Eb4:q r:h | C4:q E4:q r:h | C4:q F4:q r:h | C4:q G4:q r:h" } ]
}
```

**Try it** (3 minutes, before the check-up): play each interval above yourself from C, then from G, naming it as it sounds. Then play the cadence once, and after it C, E, G, then D, F, A, B — at rest or leaning?

## Ear check-up

Each ladder below drills your **current rung**, so this check-up is at your level by design, and the rung counter above each drill is your honest result. No new rungs open today. For each: read its **How to do it** box first, then use the right-hand column of the method card on anything you're unsure about.

```ladder
{ "skill": "pitch", "unlocks": 10, "intro": "Pitch — up/down and finding the note — at your current rung." }
```

```ladder
{ "skill": "octave", "unlocks": 8, "intro": "Octaves at your current rung." }
```

```ladder
{ "skill": "degrees", "unlocks": 12, "intro": "Scale degrees at your current rung." }
```

```ladder
{ "skill": "intervals", "unlocks": 7, "intro": "Intervals at your current rung." }
```

```ladder
{ "skill": "chords", "unlocks": 2, "intro": "Chord colours at your current rung." }
```

```ladder
{ "skill": "melody", "unlocks": 10, "intro": "Melodies at your current rung." }
```

```ladder
{ "skill": "rhythm", "unlocks": 6, "intro": "Rhythm at your current rung." }
```

## Reading your results

The Dashboard shows each ladder as a bar:

- **Rungs mastered, nothing behind:** solid. Reviews will keep it fresh.
- **One or two open rungs not yet mastered:** normal at this stage. The Practice page drills the skill furthest behind first.
- **Three or more open rungs behind:** the Dashboard says *practise first*. You can still continue with lessons, but give that skill a few extra short sessions.

Common weak spots after eight weeks are **P4 vs P5**, **degrees 4 and 6**, **octaves one after the other** and **roots**. If one of those is yours, you're on schedule. What matters more than the rung number: are you using the method, or guessing? If a skill feels like guessing, go back to its right-hand column and use it on every item for a session — slow and right beats fast and random.

## Theory and hands

```exercise
{
  "id": "e10",
  "type": "quiz",
  "title": "Theory check",
  "spec": { "questions": [
    { "q": "The major scale step pattern:", "choices": ["W W H W W W H", "W H W W H W W", "W W W H W W H"], "answer": 0 },
    { "q": "Half steps in a perfect 5th:", "choices": ["5", "7", "8"], "answer": 1 },
    { "q": "A minor triad is built…", "choices": ["M3 + m3", "m3 + M3", "m3 + m3"], "answer": 1 },
    { "q": "In G major, the IV chord is…", "choices": ["C", "D", "Am"], "answer": 0 },
    { "q": "F major's key signature has…", "choices": ["one sharp: F♯", "one flat: B♭", "no sharps or flats"], "answer": 1 },
    { "q": "A dotted half note in 3/4 lasts…", "choices": ["2 beats", "3 beats", "a whole bar of 4/4"], "answer": 1 },
    { "q": "A phrase ending V → I is…", "choices": ["a half cadence", "an authentic cadence"], "answer": 1 },
    { "q": "vi in C major is…", "choices": ["Am", "A", "Em"], "answer": 0 },
    { "q": "A diminished triad is made of…", "choices": ["two minor 3rds", "two major 3rds", "a major 3rd and a 4th"], "answer": 0 }
  ] },
  "passScore": 0.7
}
```

```exercise
{
  "id": "e7",
  "type": "read-note",
  "title": "Reading: see it, play it",
  "count": 12,
  "passScore": 0.7,
  "spec": { "clef": "treble", "range": ["C4", "C5"], "accidentals": false, "answer": "play", "timed": 0 }
}
```

```exercise
{
  "id": "e11",
  "type": "play-chord",
  "title": "Chords of C major",
  "instructions": "Any arrangement of the right notes counts.",
  "passScore": 0.7,
  "spec": { "chords": ["C", "Dm", "Em", "F", "G", "Am"], "inversion": "any", "sequence": true, "bpm": 50 }
}
```

## Between lessons

- **Pick your focus:** on the Dashboard, the one or two bars with the most open, unmastered rungs.
- **Two or three Practice sessions of about 10 minutes** before Phase 2. In each, use the method card's right-hand column on every item you're not sure of.
- **Ready for Phase 2?** No bar has to be full. If the Dashboard says *practise first*, take one extra session on that skill; otherwise carry on — minor keys start in week 9, and the ladders keep your pace.
