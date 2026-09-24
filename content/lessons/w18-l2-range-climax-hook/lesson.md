---
id: w18-l2-range-climax-hook
title: Range, Climax and the Hook
week: 18
order: 2
phase: p3
duration_min: 45
goals:
  - Keep a melody inside a singable range and place one clear climax
  - Build a hook as a short, rhythmic, repeated idea (A A' A B)
  - Take melodic dictation across one octave of the major scale
prerequisites: [w18-l1-motif-repetition-variation]
tags: [melody, hook, songwriting, ear]
songs:
  - { title: "Hey Jude", composer: "Lennon-McCartney (The Beatles)", public_domain: false }
  - { title: "Seven Nation Army", composer: "Jack White (The White Stripes)", public_domain: false }
---

# Range, Climax and the Hook

## Range and climax

Even without lyrics, write melodies as if someone will sing them. A comfortable **range** is about an octave, rarely more than a 10th (for example C4 to E5). Staying inside it keeps the melody natural and leaves room for contrast: verses in the lower half, choruses in the upper half.

The [[climax]] is the single highest (or most intense) note. Place it **once**, around 60–80% of the way through the phrase — typically bar 6 or 7 of an 8-bar chorus. If you hit the top note in every bar, nothing feels like a peak. Approach it by step or a modest leap and come down afterwards: an *arch* contour.

```example
{
  "title": "Glasshouse chorus - range C4 to E5, climax in bar 7",
  "bpm": 92, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "G4:q G4:8 A4:8 G4:q E4:q | D4:q D4:8 E4:8 D4:h | E4:q E4:8 G4:8 A4:q C5:q | A4:h. r:q | G4:q G4:8 A4:8 G4:q E4:q | B4:q B4:8 C5:8 D5:h | E5:h. D5:q | C5:w" },
    { "instrument": "piano", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w | [C3 E3 G3]:w | [B2 D3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w" },
    { "instrument": "bass", "seq": "C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h | C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

Bars 1–4 stay low. Bar 5 repeats bar 1, then bar 6 climbs, bar 7 peaks on E5, bar 8 settles on C5.

## The hook

A [[hook]] is the part people hum after one listen. Hooks share four traits:

1. **Short** — one or two bars.
2. **Rhythmic** — a distinctive rhythm, often starting after the beat (a rest on beat 1 is powerful).
3. **Repeated** — at least three times in the chorus.
4. **Simple pitches** — few notes, small steps, one memorable leap at most.

A proven chorus shape is **A A' A B**: hook, hook with a new ending, hook again, then a payoff that goes somewhere new.

```example
{
  "title": "A hook in A A' A B over vi-IV-I-V",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "r:8 C5:8 C5:8 A4:8 C5:q D5:q | C5:h r:h | r:8 C5:8 C5:8 A4:8 C5:q D5:q | B4:h r:h | r:8 C5:8 C5:8 A4:8 C5:q D5:q | C5:h r:h | r:8 E5:8 E5:8 D5:8 C5:q D5:q | D5:w" },
    { "instrument": "piano", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" },
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

The payoff ends on D over G — open — so the chorus loops naturally.

**By reference:** the "na na na" coda of "Hey Jude" (The Beatles, F major) is a hook that only arrives at the end and then repeats for minutes over I–bVII–IV–I. The riff of "Seven Nation Army" (The White Stripes, ~124 BPM) shows a hook needs no words: seven notes, one rhythm, repeated through the whole song.

```exercise
{
  "id": "hook-quiz",
  "type": "quiz",
  "passScore": 0.8,
  "spec": { "questions": [
    { "q": "Where does the climax of an 8-bar chorus usually go?", "choices": ["Bar 1", "Bar 3", "Bar 6 or 7", "Every bar"], "answer": 2 },
    { "q": "A comfortable melody range is about...", "choices": ["A 3rd", "An octave to a 10th", "Two octaves", "Three octaves"], "answer": 1 },
    { "q": "In A A' A B, what is A'?", "choices": ["A new melody", "The hook with a changed ending", "The hook transposed up an octave", "A drum fill"], "answer": 1 },
    { "q": "Why does the hook above start with a rest?", "choices": ["To make the rhythm distinctive", "Because rests are required", "To change key", "To slow the tempo"], "answer": 0 },
    { "q": "What shape does the Glasshouse chorus have?", "choices": ["Descending", "Arch", "Flat", "Ascending only"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "ear-octave-dictation",
  "type": "ear-melody",
  "title": "One-octave dictation in C",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "C", "degrees": [1, 2, 3, 4, 5, 6, 7], "length": 6, "rhythm": "simple", "answer": "play" }
}
```

```exercise
{
  "id": "play-hook",
  "type": "play-melody",
  "title": "Play the hook",
  "passScore": 0.75,
  "spec": { "bpm": 90, "timeSig": "4/4", "key": "C", "seq": "r:8 C5:8 C5:8 A4:8 C5:q D5:q | C5:h r:h | r:8 C5:8 C5:8 A4:8 C5:q D5:q | B4:h r:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" } }
}
```

```exercise
{
  "id": "daw-climax-chorus",
  "type": "daw-task",
  "title": "An 8-bar chorus with one climax",
  "spec": {
    "template": { "bpm": 92, "key": "D", "tracks": [
      { "instrument": "piano", "seq": "[D3 F#3 A3]:w | [C#3 E3 A3]:w | [B2 D3 F#3]:w | [B2 D3 G3]:w | [D3 F#3 A3]:w | [C#3 E3 A3]:w | [B2 D3 F#3]:w | [B2 D3 G3]:w" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "Over I-V-vi-IV in D, write an 8-bar melody between D4 and F#5. Keep bars 1-4 in the lower half, reach your single highest note in bar 6 or 7, and end on D.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "D", "scale": "major", "track": 1 },
      { "kind": "range", "low": "D4", "high": "F#5", "track": 1 },
      { "kind": "contour", "shape": "arch", "track": 1 },
      { "kind": "max-leap", "semitones": 7, "track": 1 },
      { "kind": "ends-on", "degree": 1, "track": 1 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "daw-hook-aaab",
  "type": "daw-task",
  "title": "Write an A A' A B hook",
  "spec": {
    "template": { "bpm": 100, "key": "C", "tracks": [
      { "instrument": "piano", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" },
      { "instrument": "drums", "seq": "kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "Write your own 2-bar hook (bars 1-2) using eighth notes and at least one rest. Bars 3-4: same hook, new ending. Bars 5-6: exact repeat of bars 1-2. Bars 7-8: a payoff that goes higher or lower than the hook.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "C", "scale": "major", "track": 2 },
      { "kind": "repetition", "motifBars": 2, "minRepeats": 2, "allowTransposed": false, "track": 2 },
      { "kind": "uses-rhythm", "values": ["8", "q"], "minDistinct": 2, "track": 2 },
      { "kind": "note-count", "min": 12, "max": 48, "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "ear-hook-rhythms",
  "type": "ear-rhythm",
  "title": "Tap back hook rhythms",
  "count": 8,
  "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "8", "rests": true, "answer": "tap" }
}
```

```exercise
{
  "id": "reflect-hook",
  "type": "reflect",
  "spec": { "prompt": "Walk away for two minutes, then try to hum your hook without playing it. Could you remember it? If not, what made it hard - too many notes, no clear rhythm, too wide a range?", "minWords": 25 }
}
```
