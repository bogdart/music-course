---
id: w48-l2-syncopated-groove-by-ear
title: "Transcribe 3: R&B — Syncopated Groove by Ear"
week: 48
order: 2
phase: p5
duration_min: 45
goals:
  - Place syncopated kicks, bass notes and chord stabs on the 16th grid
  - Hear how bass and kick lock together (or deliberately don't) in an R&B pocket
  - Rebuild the Velvet groove and bass line in the DAW
prerequisites: [w48-l1-extended-harmony-by-ear]
tags: [transcription, rnb, groove, rhythm, syncopation, daw]
---

# Transcribe 3: R&B — Syncopated Groove by Ear

Yesterday you heard the chords of *Velvet*. Today, the thing that makes it feel like R&B rather than a jazz ballad: the groove. R&B lives on the 16th-note grid, with notes landing just before or just after the beat.

## Listen for the pocket

The [[pocket]] is the rhythmic relationship between kick, bass and snare. In R&B, two features define it:

- **The pushed kick.** A kick on the "a" of 1 — the last 16th before beat 2 — pulls the groove forward into the snare. You met this in week 45 as groove B.
- **Bass that shares some kicks, not all.** Listen to *Velvet*: bass and kick hit together on beat 1 and on the "&" of 3; the bass adds its own notes on the "&" of 2 and on beat 4, where the kick is silent, and leaves the pushed "a" of 1 to the kick alone. Transcribe the kick first, then ask for each bass note: *with the kick, or between?*

## Chord anticipations

The keys hit each new chord an eighth early — on the "&" of 4 — and then restrike it on beat 1. This is the harmonic version of the melodic anticipation from week 44. When you transcribe the chords, write the change *where it's heard*, not where the bar line is; otherwise your rebuild will feel square.

Two things our mystery track can't show you, but real records will: **swing** (16ths played long–short, a lazy lilt) and **ghost notes** (very quiet snare taps between the backbeats). When you hear them in a reference, note them in words on your form map.

```example
{
  "title": "\"Velvet\" — kick, snare and bass only",
  "bpm": 84, "timeSig": "4/4", "key": "F",
  "tracks": [
    { "instrument": "drums", "seq": "kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q" },
    { "instrument": "drums", "seq": "r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q" },
    { "instrument": "bass", "seq": "G2:q. G2:16 r:16 r:8 D3:8 F2:q | C2:q. C2:16 r:16 r:8 G2:8 Bb2:q | F2:q. F2:16 r:16 r:8 C3:8 E2:q | D2:q. D2:16 r:16 r:8 A2:8 F#2:q" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```example
{
  "title": "\"Velvet\" — bass line alone at 60 BPM",
  "bpm": 60, "timeSig": "4/4", "key": "F",
  "tracks": [ { "instrument": "bass", "seq": "G2:q. G2:16 r:16 r:8 D3:8 F2:q | C2:q. C2:16 r:16 r:8 G2:8 Bb2:q | F2:q. F2:16 r:16 r:8 C3:8 E2:q | D2:q. D2:16 r:16 r:8 A2:8 F#2:q" } ],
  "show": ["staff", "pianoroll"],
  "loop": true
}
```

```exercise
{
  "id": "w48l2-listen",
  "type": "listen",
  "title": "Kick, bass, keys",
  "spec": {
    "example": {
      "title": "Velvet — rhythm section",
      "bpm": 72, "timeSig": "4/4", "key": "F",
      "tracks": [ { "instrument": "drums", "seq": "kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q" }, { "instrument": "bass", "seq": "G2:q. G2:16 r:16 r:8 D3:8 F2:q | C2:q. C2:16 r:16 r:8 G2:8 Bb2:q | F2:q. F2:16 r:16 r:8 C3:8 E2:q | D2:q. D2:16 r:16 r:8 A2:8 F#2:q" }, { "instrument": "epiano", "seq": "[Bb3 D4 F4 A4]:h. r:8 [Bb3 E4 A4 D5]:8 | [Bb3 E4 A4 D5]:h. r:8 [A3 E4 G4 C5]:8 | [A3 E4 G4 C5]:h. r:8 [C4 E4 F4 A4]:8 | [C4 E4 F4 A4]:h. r:8 [Bb3 D4 F4 A4]:8" } ],
      "loop": true
    },
    "questions": [
      { "q": "Where is the second kick of each bar?", "choices": ["Beat 2", "The 'a' of 1 (just before 2)", "The '&' of 2", "Beat 3"], "answer": 1 },
      { "q": "Where do the keys change chord?", "choices": ["Exactly on beat 1", "An eighth early, on the '&' of 4", "On beat 3", "On beat 2"], "answer": 1 },
      { "q": "What does the bass do at the end of bar 4 (F#)?", "choices": ["Chromatic approach up to G for the next loop", "Root of an F# chord", "A wrong note", "Doubles the melody"], "answer": 0 }
    ]
  }
}
```

```exercise
{
  "id": "w48l2-dict",
  "type": "ear-rhythm",
  "title": "Syncopated 16ths",
  "count": 10,
  "passScore": 0.75,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "16", "rests": true, "answer": "tap" }
}
```

```exercise
{
  "id": "w48l2-bassroots",
  "type": "ear-bass",
  "title": "Bass roots in F (warm-up for the rebuild)",
  "count": 8,
  "passScore": 0.8,
  "spec": { "key": "F", "chords": ["ii", "V", "I", "vi", "iii", "IV"], "answer": "play" }
}
```

```exercise
{
  "id": "w48l2-tap",
  "type": "rhythm-tap",
  "title": "Tap the bass rhythm",
  "spec": { "bpm": 72, "timeSig": "4/4", "seq": "x:q. x:16 r:16 r:8 x:8 x:q | x:q. x:16 r:16 r:8 x:8 x:q", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "w48l2-playbass",
  "type": "play-melody",
  "title": "Play the Velvet bass line",
  "spec": { "bpm": 66, "timeSig": "4/4", "key": "F", "seq": "G2:q. G2:16 r:16 r:8 D3:8 F2:q | C2:q. C2:16 r:16 r:8 G2:8 Bb2:q | F2:q. F2:16 r:16 r:8 C3:8 E2:q | D2:q. D2:16 r:16 r:8 A2:8 F#2:q", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "epiano", "seq": "[Bb3 D4 F4 A4]:h. r:8 [Bb3 E4 A4 D5]:8 | [Bb3 E4 A4 D5]:h. r:8 [A3 E4 G4 C5]:8 | [A3 E4 G4 C5]:h. r:8 [C4 E4 F4 A4]:8 | [C4 E4 F4 A4]:h. r:8 [Bb3 D4 F4 A4]:8" } }
}
```

```exercise
{
  "id": "w48l2-daw",
  "type": "daw-task",
  "title": "Rebuild the Velvet pocket",
  "spec": {
    "template": { "bpm": 84, "key": "F", "tracks": [
      { "instrument": "drums", "seq": "" }, { "instrument": "bass", "seq": "" },
      { "instrument": "epiano", "seq": "[Bb3 D4 F4 A4]:h. r:8 [Bb3 E4 A4 D5]:8 | [Bb3 E4 A4 D5]:h. r:8 [A3 E4 G4 C5]:8 | [A3 E4 G4 C5]:h. r:8 [C4 E4 F4 A4]:8 | [C4 E4 F4 A4]:h. r:8 [Bb3 D4 F4 A4]:8" } ] },
    "task": "The chords are given. From your transcription, program the drums (pushed kick, snare on 2 and 4, 16th hats) and the bass line for 4 bars. Then copy to 8 bars and vary the kick in bar 8 as a mini-fill.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "kickOnBeats": [1], "snareOnBeats": [2, 4], "track": 0 },
      { "kind": "uses-rhythm", "values": ["16", "8", "q"], "minDistinct": 3, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["ii", "V", "I", "vi"], "barsPerChord": 1, "minRatio": 1, "track": 1 },
      { "kind": "in-key", "key": "F", "scale": "major", "allowPassing": true, "track": 1 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
