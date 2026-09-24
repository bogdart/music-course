---
id: w42-l1-bass-in-full-mixes
title: Hearing the Bass in a Full Mix
week: 42
order: 1
phase: p5
duration_min: 45
goals:
  - Pull the bass out of a full mix by register, timing and humming an octave up
  - Separate the bass's landing notes (roots) from passing and approach notes
  - Dictate bass roots in F and Bb major over full-band loops
prerequisites: [w41-l3-mystery-song-one]
tags: [transcription, bass, ear, full-mix]
---

# Hearing the Bass in a Full Mix

Pass 3 is where the harmony starts to appear, and it rests entirely on one skill: following the lowest line while everything else keeps playing. In earlier phases you dictated bass over a pad. Real mixes are crowded — drums, chords, a melody, maybe a synth hook. Here's how to hear through them.

## Three tricks for finding the bass

1. **Listen *under* the kick.** The bass usually hits with the kick drum. Fix your attention on the kick, then notice the pitch that sounds together with it.
2. **Hum it an octave up.** Bass notes are low enough to feel more like texture than pitch. Humming is how you turn them back into notes. Octave equivalence — which you worked on in week 1 — does the rest: your hummed note has the same name.
3. **Beat 1 first.** Only name the note on the downbeat of each chord change. That note is almost always the chord's root. Fill in the rest later — or never, if roots are all you need.

## Landing notes and passing notes

A good bass line doesn't just sit on roots. It walks, approaches and decorates. The note it arrives on at a chord change is its [[landing note]]; the notes in between connect one landing to the next. For transcribing harmony you only need the landing notes. Listen first to the full mix, then to the bass alone:

```example
{
  "title": "Mystery Song #2 — full mix",
  "bpm": 100, "timeSig": "4/4", "key": "F",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 ohat:8" },
    { "instrument": "bass", "seq": "F2:q. F2:8 r:8 F2:8 G2:q | A2:q. A2:8 r:8 E2:8 A2:q | Bb2:q. Bb2:8 r:8 Bb2:8 B2:q | C3:q. C3:8 r:8 C3:8 E2:q" },
    { "instrument": "epiano", "seq": "[F3 A3 C4]:q. [F3 A3 C4]:8 r:q [F3 A3 C4]:q | [E3 A3 C4]:q. [E3 A3 C4]:8 r:q [E3 A3 C4]:q | [F3 Bb3 D4]:q. [F3 Bb3 D4]:8 r:q [F3 Bb3 D4]:q | [E3 G3 C4]:q. [E3 G3 C4]:8 r:q [E3 G3 C4]:q" },
    { "instrument": "lead", "seq": "C5:8 C5:8 A4:8 C5:8 r:8 D5:8 C5:q | E5:q E5:8 D5:8 C5:h | D5:8 D5:8 Bb4:8 D5:8 r:8 F5:8 E5:q | D5:q C5:q G4:h" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```example
{
  "title": "Mystery Song #2 — bass solo",
  "bpm": 100, "timeSig": "4/4", "key": "F",
  "tracks": [
    { "instrument": "bass", "seq": "F2:q. F2:8 r:8 F2:8 G2:q | A2:q. A2:8 r:8 E2:8 A2:q | Bb2:q. Bb2:8 r:8 Bb2:8 B2:q | C3:q. C3:8 r:8 C3:8 E2:q" }
  ],
  "show": ["staff", "pianoroll"],
  "loop": true
}
```

The landing notes are F – A – Bb – C: a I–iii–IV–V progression. The G, the B natural and the low E are connectors, each one step away from the next landing. That B natural isn't even in the key — a chromatic approach, and a big clue that it is *not* a root.

```exercise
{
  "id": "w42l1-listen",
  "type": "listen",
  "title": "Landing or passing?",
  "spec": {
    "example": {
      "title": "Mystery Song #2 — bass solo",
      "bpm": 100, "timeSig": "4/4", "key": "F",
      "tracks": [ { "instrument": "bass", "seq": "F2:q. F2:8 r:8 F2:8 G2:q | A2:q. A2:8 r:8 E2:8 A2:q | Bb2:q. Bb2:8 r:8 Bb2:8 B2:q | C3:q. C3:8 r:8 C3:8 E2:q" } ],
      "loop": true
    },
    "questions": [
      { "q": "What does the bass land on at the start of bar 3?", "choices": ["F", "A", "Bb", "B"], "answer": 2 },
      { "q": "The B natural at the end of bar 3 is…", "choices": ["The root of a B chord", "A chromatic approach note leading to C", "A mistake", "The tonic"], "answer": 1 },
      { "q": "Which roman numerals do the landing notes spell in F major?", "choices": ["I–vi–IV–V", "I–iii–IV–V", "I–V–vi–IV", "I–ii–V–I"], "answer": 1 }
    ]
  }
}
```

```exercise
{
  "id": "w42l1-bass-f",
  "type": "ear-bass",
  "title": "Bass roots in F major",
  "count": 10,
  "passScore": 0.8,
  "spec": { "key": "F", "chords": ["I", "ii", "iii", "IV", "V", "vi"], "answer": "play" }
}
```

```exercise
{
  "id": "w42l1-bass-bb",
  "type": "ear-bass",
  "title": "Bass roots in Bb major",
  "count": 10,
  "passScore": 0.8,
  "spec": { "key": "Bb", "chords": ["I", "ii", "IV", "V", "vi"], "answer": "play" }
}
```

```exercise
{
  "id": "w42l1-root",
  "type": "ear-chord-root",
  "title": "Name the root",
  "count": 10,
  "passScore": 0.8,
  "spec": { "qualities": ["maj", "min"], "answer": "name", "range": ["C2", "C4"] }
}
```

```exercise
{
  "id": "w42l1-playbass",
  "type": "play-melody",
  "title": "Play the Mystery Song #2 bass line",
  "instructions": "Play the full bass line with your left hand (shift octave down if your keyboard is small). Accent the landing notes.",
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "F", "seq": "F2:q. F2:8 r:8 F2:8 G2:q | A2:q. A2:8 r:8 E2:8 A2:q | Bb2:q. Bb2:8 r:8 Bb2:8 B2:q | C3:q. C3:8 r:8 C3:8 E2:q", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "w42l1-daw",
  "type": "daw-task",
  "title": "Connect the landings",
  "spec": {
    "template": { "bpm": 100, "key": "F", "tracks": [
      { "instrument": "epiano", "seq": "[F3 A3 C4]:w | [F3 A3 D4]:w | [F3 Bb3 D4]:w | [E3 G3 C4]:w" },
      { "instrument": "bass", "seq": "" } ] },
    "task": "Write a 4-bar bass line for F–Dm–Bb–C. Land on the root on beat 1 of every bar, and use at least two passing or approach notes to connect the landings.",
    "checks": [
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "vi", "IV", "V"], "barsPerChord": 1, "minRatio": 1, "track": 1 },
      { "kind": "in-key", "key": "F", "scale": "major", "allowPassing": true, "track": 1 },
      { "kind": "note-count", "min": 10, "max": 32, "track": 1 },
      { "kind": "range", "low": "C2", "high": "C4", "track": 1 },
      { "kind": "bars", "min": 4, "max": 4 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```
