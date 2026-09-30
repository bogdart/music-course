---
id: w40-l3-self-critique-and-ear-assessment
title: Self-Critique and Phase 4 Ear Check
week: 40
order: 3
phase: p4
duration_min: 50
goals:
  - Critique your three portfolio pieces with a structured checklist
  - Take a diagnostic ear check at your own ladder level, plus a short keyboard check
  - Set goals for Phase 5 (transcription and mastery)
prerequisites: [w40-l2-polish-songs-two-and-three]
tags: [portfolio, assessment, ear, review]
---

# Self-Critique and Phase 4 Ear Check

Phase 4 is done. You started it with 9th chords and finish with three finished pieces in different styles. Today: an honest review of the music, then a check-up of your ears and hands. Nothing today is new material, and nothing here is a gate — it's a picture of where you are before Phase 5.

## The self-critique checklist

Listen to each portfolio piece once, start to finish, without stopping. Then score each item 1–3 (1 = needs work, 3 = strong):

| Area | Question |
|------|----------|
| Idea | Is there one clear, memorable idea (hook, motif, groove)? |
| Harmony | Do the chords support the melody? Is there at least one colourful moment (an extension, a borrowed chord, a substitution)? |
| Melody | Singable or playable? Good prosody and range? Does it peak somewhere? |
| Rhythm | Does the groove feel steady and intentional? |
| Form | Is there an arc — contrast, climax, release? Are the transitions clear? |
| Arrangement | Does every track have a job? Any clutter or register clashes? |
| Ending | Deliberate and satisfying? |

Circle the lowest score for each piece: that's the one thing to fix first. Don't fix everything — finished and imperfect beats perfect and abandoned.

```exercise
{
  "id": "e1-critique",
  "type": "reflect",
  "title": "Checklist scores",
  "spec": {
    "prompt": "For each of your three pieces, write its seven scores (Idea, Harmony, Melody, Rhythm, Form, Arrangement, Ending) and name its lowest item. Which piece is strongest overall, and why?",
    "minWords": 40
  }
}
```

## Diagnostic ear check

Five short ladder drills, one per skill that Phase 5 leans on. Each runs at **your current rung** of that ladder — not at a fixed "Phase 4 level" — so it tests only what you've actually been drilling. Read the result like this: around **70% or more** on your current rung means the ladder is healthy; clearly below that means this ladder is your Practice-page priority in the coming weeks. Roots and progressions matter most: Phase 5 starts by finding bass notes and chords in real songs.

Before you start, just listen — no need to name anything:

```example
{
  "title": "Phase 4 in eight bars: rootless ii–V–I, a turnaround, tritone sub, borrowed iv, 6/9 ending",
  "bpm": 76, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "epiano", "seq": "[F3 A3 C4 E4]:w | [F3 A3 B3 E4]:w | [E3 G3 B3 D4]:w | [C3 E3 G3 A3]:w | [F3 A3 C4 E4]:w | [F3 Ab3 B3 Eb4]:w | [F3 Ab3 C4 D4]:w | [C3 E3 A3 D4 G4]:w |" },
    { "instrument": "bass", "seq": "D2:w | G1:w | C2:w | A1:w | D2:w | Db2:w | F2:w | C2:w |" }
  ],
  "show": ["keyboard"]
}
```

```ladder
{ "skill": "roots", "unlocks": 14, "intro": "Check 1 of 5 — roots and bass lines, at your current rung." }
```

```ladder
{ "skill": "progressions", "unlocks": 19, "intro": "Check 2 of 5 — progressions, at your current rung." }
```

```ladder
{ "skill": "chords", "unlocks": 15, "intro": "Check 3 of 5 — chord colours, at your current rung." }
```

```ladder
{ "skill": "melody", "unlocks": 18, "intro": "Check 4 of 5 — melody play-back, at your current rung." }
```

```ladder
{ "skill": "scales", "unlocks": 13, "intro": "Check 5 of 5 — scale and mode colours, at your current rung." }
```

## Keyboard check

```exercise
{
  "id": "e2-build",
  "type": "build-chord",
  "title": "Build extended and altered chords",
  "passScore": 0.7,
  "spec": { "chords": ["Dm9", "G13", "Cmaj9", "Bm7b5", "E7", "Am6", "Db7", "C#dim7", "Fadd9", "Abmaj7"], "root": "given", "prompt": "symbol" }
}
```

```exercise
{
  "id": "e3-play-rootless",
  "type": "play-melody",
  "title": "Rootless ii–V–I in C and F",
  "passScore": 0.7,
  "spec": {
    "bpm": 70, "timeSig": "4/4", "key": "C",
    "seq": "[F3 A3 C4 E4]:w | [F3 A3 B3 E4]:w | [E3 G3 B3 D4]:w | r:w | [F3 A3 Bb3 D4]:w | [E3 A3 Bb3 D4]:w | [E3 G3 A3 C4]:w | r:w |",
    "showStaff": false, "showKeyboard": true, "countIn": 1,
    "backing": { "instrument": "bass", "seq": "D2:w | G1:w | C2:w | r:w | G1:w | C2:w | F2:w | r:w |" }
  }
}
```

## Make it: the one fix

```exercise
{
  "id": "e4-daw-one-fix",
  "type": "daw-task",
  "title": "Fix the lowest score",
  "instructions": "Pick the piece with the lowest checklist item. Open it in the DAW and fix that one thing only (for example: a clearer transition, a lower chord voicing, a real ending). Then rebuild or paste the changed section (at least 8 bars) here so you can compare it with the old version.",
  "spec": {
    "template": {
      "bpm": 100, "key": "C", "timeSig": "4/4",
      "tracks": [
        { "instrument": "lead", "seq": "" },
        { "instrument": "piano", "seq": "" },
        { "instrument": "bass", "seq": "" },
        { "instrument": "drums", "seq": "" }
      ]
    },
    "task": "One targeted fix to a portfolio piece.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 64 },
      { "kind": "note-count", "min": 16 },
      { "kind": "custom", "id": "one-fix", "note": "Self-check: the lowest-scoring item now scores at least one point higher." }
    ],
    "minBars": 8, "maxBars": 64
  }
}
```

```exercise
{
  "id": "e5-reflect",
  "type": "reflect",
  "title": "Phase 4 retrospective",
  "spec": {
    "prompt": "Which ladders came out healthy in the ear check, and which is your Practice priority? What was your biggest musical breakthrough in Phase 4? Which skill (voicings, reharmonisation, improvisation, production, form, topline) do you most want to keep developing, and what's one goal for Phase 5?",
    "minWords": 50
  }
}
```
