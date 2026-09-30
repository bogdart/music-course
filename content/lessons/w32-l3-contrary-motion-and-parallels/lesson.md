---
id: w32-l3-contrary-motion-and-parallels
title: Contrary Motion, Passing Tones and Power Chords
week: 32
order: 3
phase: p4
duration_min: 45
goals:
  - Name the four kinds of motion between two voices
  - Write passing tones in second species (two notes against one)
  - Know the power chord, the one place where parallel fifths are the point
prerequisites: [w32-l2-first-species]
tags: [counterpoint, voice-leading, composition]
---

# Contrary Motion, Passing Tones and Power Chords

## Four kinds of motion

Two voices can move in four ways relative to each other:

- **Parallel**: same direction, same interval (3rd → 3rd).
- **Similar**: same direction, different intervals.
- **Oblique**: one voice holds, the other moves.
- **Contrary**: opposite directions.

[[contrary motion]] is the most independent: the voices clearly sound like two players. Parallel 3rds and 6ths are sweet and common (think of any vocal harmony). Parallel 5ths and octaves are the ones first species forbids, as you saw last lesson. The standard fix is contrary or oblique motion. Here are two hands in contrary motion, moving away from each other and back:

```example
{
  "title": "Contrary motion: the hands mirror each other",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C3 C4]:q [B2 D4]:q [A2 E4]:q [G2 F4]:q | [F2 G4]:q [G2 F4]:q [A2 E4]:q [B2 D4]:q | [C3 C4]:w |" } ],
  "show": ["staff", "keyboard"]
}
```

## Two notes against one

**Second species** puts two half notes against each whole note. Beat 1 must be consonant. Beat 3 may be a **passing tone**, a dissonance, as long as it moves *by step* between two consonances (you met passing tones in week 15). This is how the upper line gets to move more freely.

```example
{
  "title": "Second species with passing tones",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "strings", "seq": "G3:h A3:h | B3:h C4:h | D4:h B3:h | C4:w |" },
    { "instrument": "piano", "seq": "C3:w | G2:w | G2:w | C3:w |" }
  ],
  "show": ["staff"]
}
```

In bar 1, G over C is a 5th (consonant), and A over C is a 6th. In bar 2, B over G is a 3rd, and C over G a 4th: a dissonance, but it passes by step from B to D, so it is allowed.

## Power chords: when fusion is the point

Remember why parallel fifths are avoided: the two voices fuse into one. Sometimes fusing is exactly what you want. A [[power chord]] is just a root and its 5th (often with the octave on top), no 3rd, so it is neither major nor minor. Symbol: **E5**, **G5**. Rock guitarists move the same shape up and down the neck, which means every change is a parallel fifth, and the result is one huge, thick sound. That is not a mistake: in a riff, nobody wants two independent lines.

```example
{
  "title": "Power chords E5 – G5 – A5 on distorted guitar",
  "bpm": 100, "timeSig": "4/4", "key": "Em",
  "tracks": [ { "instrument": "guitar", "seq": "[E2 B2 E3]:8 [E2 B2 E3]:8 [E2 B2 E3]:8 [E2 B2 E3]:8 [G2 D3 G3]:q [A2 E3 A3]:q | [E2 B2 E3]:8 [E2 B2 E3]:8 [E2 B2 E3]:8 [E2 B2 E3]:8 [A2 E3 A3]:q [G2 D3 G3]:q |" } ],
  "show": ["pianoroll"]
}
```

So the rule is about goals: independent lines (counterpoint, a counter-melody, string parts) avoid parallels; one fused riff sound welcomes them.

### Try it

1. Put both thumbs on C4 (or C3 and C4). Move both hands **up** together by step three times: parallel.
2. Back to C. Now the right hand steps up while the left steps down: contrary.
3. Hold the left hand still while the right hand moves: oblique.
4. Replay each and ask: do I hear one block moving, or two separate people?

**Check:** contrary motion usually sounds most like two people; parallel octaves like one; oblique sits in between (one note is a "floor", the other walks).

**If you can't hear it yet:** watch the keyboard and follow only with your eyes — hands opening like scissors (contrary), sliding together (parallel), one still (oblique). For the listening question below, replay it and point with each hand in the air: one hand per voice.

## Drills

```exercise
{
  "id": "e1-listen-motion",
  "type": "listen",
  "title": "Which motion?",
  "instructions": "Two voices, four bars. Listen to how they move, then answer.",
  "spec": {
    "example": { "bpm": 72, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "strings", "seq": "E4:w | F4:w | G4:w | G4:w |" }, { "instrument": "piano", "seq": "C4:w | D4:w | E4:w | C4:w |" } ] },
    "questions": [
      { "q": "Bars 1–3: how do the two voices move?", "choices": ["in contrary motion", "in parallel"], "answer": 1, "explain": "Both rise by step, a 3rd apart: parallel 3rds (C–E, D–F, E–G)." },
      { "q": "Bar 3 → 4: the upper voice holds, the lower drops. That is…", "choices": ["contrary", "similar", "oblique", "parallel"], "answer": 2 }
    ]
  }
}
```

```exercise
{
  "id": "e2-motion-quiz",
  "type": "quiz",
  "title": "Motion and power chords",
  "passScore": 0.7,
  "spec": { "questions": [
    { "q": "Lower voice G→C, upper voice D→C. What kind of motion?", "choices": ["parallel", "contrary", "oblique", "similar"], "answer": 1, "explain": "The lower voice rises, the upper voice falls." },
    { "q": "In second species, beat 3 may be dissonant if…", "choices": ["it is a leap", "it moves by step between two consonances", "it is an octave", "never"], "answer": 1 },
    { "q": "A power chord contains…", "choices": ["root and 3rd", "root and 5th (plus octave)", "root, 3rd and 5th", "root and 7th"], "answer": 1 },
    { "q": "Why do power-chord riffs use parallel 5ths happily?", "choices": ["They are not meant to be independent lines; the fused sound is the point", "Rock ignores theory", "Guitars cannot play 3rds", "They are really 4ths"], "answer": 0 }
  ] }
}
```

```exercise
{
  "id": "e3-play-contrary",
  "type": "play-melody",
  "title": "Hands in contrary motion",
  "instructions": "Both hands start on C, an octave apart, move away from each other by step, then back.",
  "passScore": 0.7,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "[C3 C4]:q [B2 D4]:q [A2 E4]:q [G2 F4]:q | [F2 G4]:q [G2 F4]:q [A2 E4]:q [B2 D4]:q | [C3 C4]:w |", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e4-play-second-species",
  "type": "play-melody",
  "title": "Play the second-species line",
  "passScore": 0.7,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "G3:h A3:h | B3:h C4:h | D4:h B3:h | C4:w |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "piano", "seq": "C3:w | G2:w | G2:w | C3:w |" } }
}
```

**Fixing parallels, step by step** (for the DAW task below):

1. Play both tracks and mark every pair of half notes where the upper line is a 5th (or octave) above the bass *and* stays so on the next note.
2. For each such spot, keep the bass and try the note a 3rd or 6th above it instead; choose the one that is a step from your previous upper note.
3. Where the bass goes up, try moving your line down (contrary) — it rarely creates new parallels.
4. End on C, arriving by step.

**Judge it by ear:** play your new line with the bass and listen for two different tunes rather than one thick one. **If you're stuck:** start from the last bar and work backwards — the ending (D → C over G → C) is fixed, so every earlier note only has to lead into the next.

```exercise
{
  "id": "e5-daw-fix-parallels",
  "type": "daw-task",
  "title": "Fix the parallels",
  "instructions": "Track 1 moves in parallel 5ths with the bass on track 2 almost all the way (plus one tritone, F over B, in bar 3). Rewrite track 1 only: keep the rhythm (half notes), stay in C major, and use contrary or oblique motion so that no parallel 5ths or octaves remain. End on C. About 15 minutes.",
  "spec": {
    "template": { "bpm": 80, "key": "C", "timeSig": "4/4", "tracks": [ { "instrument": "strings", "seq": "G4:h A4:h | B4:h C5:h | G4:h F4:h | E4:h D4:h | C4:w |" }, { "instrument": "piano", "seq": "C3:h D3:h | E3:h F3:h | C3:h B2:h | A2:h G2:h | C3:w |" } ] },
    "task": "Remove all parallel 5ths and octaves from the upper line.",
    "checks": [
      { "kind": "no-parallel-fifths", "tracks": [0, 1], "octaves": true },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 0 },
      { "kind": "note-count", "min": 9, "max": 9, "track": 0 },
      { "kind": "ends-on", "degree": 1, "track": 0 }
    ],
    "minBars": 5, "maxBars": 5
  }
}
```

## Ear review

**Method** (see each drill's *How to do it* box): intervals together — one, hollow, sweet or rough first, then choose inside the group. Octaves — is it one note (octave) or a hollow pair (the fifth trap)? If far apart, walk the octaves. Both drills run at your current rungs.

```ladder
{ "skill": "intervals", "unlocks": 20, "intro": "Intervals played together, at your current rung: hear two voices as one sound." }
```

```ladder
{ "skill": "octave", "unlocks": 14, "intro": "Octaves at your level, including the fifth trap: the two most blended intervals." }
```

## Between lessons

Play the contrary-motion exercise hands together once a day. Take any riff you know and play it once with power chords, once with only the top note — notice how the fused 5ths thicken it.
