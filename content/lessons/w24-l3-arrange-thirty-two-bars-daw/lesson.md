---
id: w24-l3-arrange-thirty-two-bars-daw
title: Counter-Melody and a 32-Bar Arrangement
week: 24
order: 3
phase: p3
duration_min: 50
goals:
  - Write a counter-melody that moves when the main melody holds or rests
  - Arrange a 32-bar song (verse, chorus, verse, chorus) with a rising energy curve, over two sessions
  - Use layers, fills and velocity to make the second chorus the peak
prerequisites: [w24-l2-textural-build]
tags: [arrangement, counter-melody, dynamics, daw, ear]
songs: []
---

# Counter-Melody and a 32-Bar Arrangement

This lesson has two sittings. **Session 1** (today): the counter-melody, and the first half of the arrangement. **Session 2** (next time you sit down, before week 25): the second half and the energy curve. Both arrangement tasks open the same project, so nothing is lost in between; the counter-melody task has its own project, and you'll re-enter your counter-melody in session 2.

## Counter-melody

A [[counter-melody]] is a second tune that talks *with* the main melody instead of over it. Three rules keep it out of the way:

1. **Move when the melody holds.** When the lead sits on a long note or rests, the counter-melody moves; when the lead is busy, it holds a long note.
2. **Different register.** Usually below the lead (strings, a soft synth).
3. **Go your own way.** When the lead goes up, the counter-melody goes down or stays where it is. If both lines move in the same direction by the same distance all the time, they stop sounding like two voices. (Week 35 turns this into proper rules.)

Listen to the chorus of "Night Bus", an original song. The strings hold under the busy bars and move in bars 2, 4 and 8, where the lead holds. Watch both lines in the piano roll.

```example
{
  "title": "Night Bus chorus with a string counter-melody",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. A4:8 G4:h | r:8 A4:8 C5:8 C5:8 E5:q D5:q | C5:w | r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. C5:8 D5:h | E5:q. D5:8 C5:q A4:q | C5:h. r:q" },
    { "instrument": "strings", "seq": "E4:w | D4:h B3:8 C4:8 D4:q | C4:w | A3:q C4:q D4:q E4:q | E4:w | D4:h B3:h | C4:h E4:h | F4:q E4:q C4:h" },
    { "instrument": "epiano", "seq": "[C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w | [C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w" },
    { "instrument": "bass", "seq": "C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h | C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

**Try it:** play the loop twice. First pass, follow only the lead (the highest line) and tap when it holds a long note. Second pass, follow only the strings and tap when they move. **Check:** your taps land in the same bars (2, 4, 8) — the two lines take turns. **If you can't hear it yet:** play the counter-melody exercise below — its backing is the lead alone. With two lines only, the turn-taking is much easier to follow.

```exercise
{
  "id": "counter-quiz-v2",
  "type": "quiz",
  "spec": { "questions": [
    { "q": "When should a counter-melody move?", "choices": ["Exactly with the lead", "When the lead holds or rests"], "answer": 1 },
    { "q": "The lead jumps up. A good counter-melody...", "choices": ["Jumps up by the same distance", "Goes down or stays put"], "answer": 1 },
    { "q": "Where does the counter-melody usually sit?", "choices": ["Below the lead, in its own register", "Exactly on the lead's notes"], "answer": 0 },
    { "q": "Which section should be the peak of a verse-chorus-verse-chorus song?", "choices": ["Chorus 1", "Chorus 2"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "play-counter-melody",
  "type": "play-melody",
  "title": "Play the counter-melody under the lead",
  "spec": { "bpm": 84, "timeSig": "4/4", "key": "C", "seq": "E4:w | D4:h B3:8 C4:8 D4:q | C4:w | A3:q C4:q D4:q E4:q | E4:w | D4:h B3:h | C4:h E4:h | F4:q E4:q C4:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "lead", "seq": "r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. A4:8 G4:h | r:8 A4:8 C5:8 C5:8 E5:q D5:q | C5:w | r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. C5:8 D5:h | E5:q. D5:8 C5:q A4:q | C5:h. r:q" } }
}
```

Hearing a melody while chords play underneath is the listening side of the same skill; the melody drill has done this since week 18. This is a review at your current melody rung.

**Before the drill** — the method (also in the *How to do it* box next to the drill): the chords will distract you, so lock onto the highest, singing line and ignore the rest. Find its first note on the keyboard, then the next one, replaying as often as you need. Melody notes on strong beats are often notes of the chord underneath — a useful check when you're between two keys.

```ladder
{ "skill": "melody", "unlocks": 22, "intro": "Review: play back a melody while chords play underneath — follow the top line." }
```

```exercise
{
  "id": "daw-counter-melody-v2",
  "type": "daw-task",
  "title": "Write a counter-melody",
  "spec": {
    "template": { "bpm": 100, "key": "C", "tracks": [
      { "instrument": "lead", "seq": "r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. A4:8 G4:h | r:8 A4:8 C5:8 C5:8 E5:q D5:q | C5:w | r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. C5:8 D5:h | E5:q. D5:8 C5:q A4:q | C5:h. r:q" },
      { "instrument": "epiano", "seq": "[C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w | [C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w" },
      { "instrument": "strings", "seq": "" }
    ] },
    "task": "Write your own string counter-melody for the Night Bus chorus (not the one above). Steps: 1) put one whole note per bar, a chord note between G3 and G4 (C bar: C/E/G; G bar: G/B/D; Am: A/C/E; F: A/C/F), choosing each so it's close to the previous one; 2) play it with the lead — it should already sound calm; 3) in bars 2, 4, 6 and 8 (where the lead holds) split the whole note into two to four moving notes that step toward the next bar's note. Judge by ear: if the two lines trip over each other, you're moving where the lead is busy. Stuck? Keep the whole notes and move only in bars 4 and 8. This task saves to its own project; in session 2 you'll re-enter it on the strings of the full song (its chorus has the same melody and chords), so keep it short enough to remember or note it down.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "C", "scale": "major", "track": 2 },
      { "kind": "range", "low": "G3", "high": "G4", "track": 2 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "V", "vi", "IV"], "barsPerChord": 1, "minRatio": 0.85, "track": 2 },
      { "kind": "note-count", "min": 10, "max": 32, "track": 2 },
      { "kind": "custom", "id": "moves-when-lead-holds", "note": "Self-check: the strings hold in the busy lead bars and move where the lead holds." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

## The energy curve

A 32-bar song (verse 8, chorus 8, verse 8, chorus 8) needs an energy **curve**, not a flat line. A reliable plan:

- **Verse 1** (bars 1–8) — thin: lead, epiano, bass in half notes, no drums. Velocities around 70%.
- **Chorus 1** (9–16) — full drums, pad joins. Around 85%.
- **Verse 2** (17–24) — *don't drop all the way back*: keep kick and hats so the song keeps moving. Around 75–80%: above verse 1, still below chorus 1.
- **Chorus 2** (25–32) — everything: full drums with crash, pad, bass in eighths, your counter-melody on strings. Around 100%.

A fill in bar 8 and bar 24 leads into each chorus.

**Judge it by ear** after each session: play from the start with your eyes closed and raise your hand higher as the energy rises. If your hand drops at verse 2 as low as verse 1, verse 2 needs one more layer (keep the hats). **If you're stuck** on something, copy: take the drum grooves from your week-23 groove library and the bass patterns from week 22.

```exercise
{
  "id": "daw-arrange-32-part1",
  "type": "daw-task",
  "title": "Session 1: arrange bars 1-16 (verse 1, chorus 1)",
  "spec": {
    "projectRef": "w21-night-bus",
    "timerMin": 20,
    "template": { "bpm": 100, "key": "C", "tracks": [
      { "instrument": "lead", "seq": "E4:q. E4:8 D4:q C4:q | C4:q D4:8 C4:8 A3:h | E4:q. E4:8 G4:q E4:q | D4:w | E4:q. E4:8 D4:q C4:q | C4:q D4:8 C4:8 A3:h | G4:q. G4:8 E4:q C4:q | D4:h. r:q | r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. A4:8 G4:h | r:8 A4:8 C5:8 C5:8 E5:q D5:q | C5:w | r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. C5:8 D5:h | E5:q. D5:8 C5:q A4:q | C5:h. r:q | E4:q. E4:8 D4:q C4:q | C4:q D4:8 C4:8 A3:h | E4:q. E4:8 G4:q E4:q | D4:w | E4:q. E4:8 D4:q C4:q | C4:q D4:8 C4:8 A3:h | G4:q. G4:8 E4:q C4:q | D4:h. r:q | r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. A4:8 G4:h | r:8 A4:8 C5:8 C5:8 E5:q D5:q | C5:w | r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. C5:8 D5:h | E5:q. D5:8 C5:q A4:q | C5:h. r:q" },
      { "instrument": "epiano", "seq": "[A2 C3 E3]:w | [F2 A2 C3]:w | [C3 E3 G3]:w | [G2 B2 D3]:w | [A2 C3 E3]:w | [F2 A2 C3]:w | [C3 E3 G3]:w | [G2 B2 D3]:w | [C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w | [C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w | [A2 C3 E3]:w | [F2 A2 C3]:w | [C3 E3 G3]:w | [G2 B2 D3]:w | [A2 C3 E3]:w | [F2 A2 C3]:w | [C3 E3 G3]:w | [G2 B2 D3]:w | [C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w | [C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "drums", "seq": "" },
      { "instrument": "pad", "seq": "" },
      { "instrument": "strings", "seq": "" }
    ] },
    "task": "Melody and chords are given for all 32 bars: verse (Am F C G) twice, chorus (C G Am F) twice, then again. Today arrange bars 1-16 only. Bass: half-note roots in the verse, quarter notes in the chorus. Drums: none in bars 1-7, a fill in bar 8, a full groove with a crash from bar 9. Pad: spread chords in bars 9-16. Leave bars 17-32 for session 2.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["lead", "epiano", "bass", "drums", "pad"] },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": true, "track": 2 },
      { "kind": "range", "low": "E1", "high": "C3", "track": 2 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat", "crash"], "snareOnBeats": [2, 4], "bars": [9, 16], "track": 3 },
      { "kind": "in-key", "key": "C", "scale": "major", "track": 4 },
      { "kind": "custom", "id": "first-half-curve", "note": "Self-check: chorus 1 is clearly bigger than verse 1." }
    ],
    "minBars": 32, "maxBars": 32
  }
}
```

## Session 2

```exercise
{
  "id": "daw-arrange-32-part2",
  "type": "daw-task",
  "title": "Session 2: finish bars 17-32 and shape the curve",
  "spec": {
    "projectRef": "w21-night-bus",
    "timerMin": 30,
    "template": { "bpm": 100, "key": "C", "tracks": [
      { "instrument": "lead", "seq": "E4:q. E4:8 D4:q C4:q | C4:q D4:8 C4:8 A3:h | E4:q. E4:8 G4:q E4:q | D4:w | E4:q. E4:8 D4:q C4:q | C4:q D4:8 C4:8 A3:h | G4:q. G4:8 E4:q C4:q | D4:h. r:q | r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. A4:8 G4:h | r:8 A4:8 C5:8 C5:8 E5:q D5:q | C5:w | r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. C5:8 D5:h | E5:q. D5:8 C5:q A4:q | C5:h. r:q | E4:q. E4:8 D4:q C4:q | C4:q D4:8 C4:8 A3:h | E4:q. E4:8 G4:q E4:q | D4:w | E4:q. E4:8 D4:q C4:q | C4:q D4:8 C4:8 A3:h | G4:q. G4:8 E4:q C4:q | D4:h. r:q | r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. A4:8 G4:h | r:8 A4:8 C5:8 C5:8 E5:q D5:q | C5:w | r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. C5:8 D5:h | E5:q. D5:8 C5:q A4:q | C5:h. r:q" },
      { "instrument": "epiano", "seq": "[A2 C3 E3]:w | [F2 A2 C3]:w | [C3 E3 G3]:w | [G2 B2 D3]:w | [A2 C3 E3]:w | [F2 A2 C3]:w | [C3 E3 G3]:w | [G2 B2 D3]:w | [C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w | [C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w | [A2 C3 E3]:w | [F2 A2 C3]:w | [C3 E3 G3]:w | [G2 B2 D3]:w | [A2 C3 E3]:w | [F2 A2 C3]:w | [C3 E3 G3]:w | [G2 B2 D3]:w | [C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w | [C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "drums", "seq": "" },
      { "instrument": "pad", "seq": "" },
      { "instrument": "strings", "seq": "" }
    ] },
    "task": "Your session-1 project opens here. Verse 2 (bars 17-24): bass as in verse 1, drums with kick and hats only, a fill in bar 24. Chorus 2 (bars 25-32): crash on bar 25, full drums, pad, bass in eighths, and a counter-melody on the strings: re-enter the one you wrote in session 1's counter-melody task (open that task in the lesson to see it; the chorus here has the same melody and chords), or write a fresh one by the same rules. Finally set velocities for the curve: verse 1 (about 70%) < verse 2 (75-80%) < chorus 1 (85%) < chorus 2 (100%).",
    "checks": [
      { "kind": "bars", "min": 32, "max": 32 },
      { "kind": "has-tracks", "instruments": ["lead", "epiano", "bass", "drums", "pad", "strings"] },
      { "kind": "range", "low": "E1", "high": "C3", "track": 2 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat", "crash", "tom"], "snareOnBeats": [2, 4], "bars": [25, 32], "track": 3 },
      { "kind": "range", "low": "G3", "high": "G4", "track": 5 },
      { "kind": "custom", "id": "dynamic-curve", "note": "Self-check: listen through - verse 2 sits between verse 1 and chorus 1 in energy, and chorus 2 is the clear peak." }
    ],
    "minBars": 32, "maxBars": 32
  }
}
```

```exercise
{
  "id": "reflect-32",
  "type": "reflect",
  "spec": { "prompt": "Listen to your 32 bars with eyes closed. Draw the energy curve you actually hear (e.g. low - mid - mid - high). Does it match your plan? Which single change made the biggest difference?", "minWords": 30 }
}
```

## Between lessons

Do session 2 on a separate day, before week 25. In a song you like, listen once only for a second line under the melody (strings, backing vocals, a guitar) and note where it moves.
