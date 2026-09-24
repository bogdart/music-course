---
id: w48-l3-rnb-reference-analysis
title: "Transcribe 3: R&B and Soul — Reference Analysis"
week: 48
order: 3
phase: p5
duration_min: 50
goals:
  - Decompose three soul/R&B classics by reference — the roots of today's neo-soul sound
  - Hear a secondary dominant (VI7 → ii) inside a looping progression
  - Write a 16-bar neo-soul sketch with extended chords and a syncopated pocket
prerequisites: [w48-l2-syncopated-groove-by-ear]
tags: [transcription, rnb, soul, reference-songs, secondary-dominant, daw]
songs:
  - { title: "Isn't She Lovely", artist: "Stevie Wonder", year: 1976, public_domain: false }
  - { title: "Ain't No Sunshine", artist: "Bill Withers", year: 1971, public_domain: false }
  - { title: "What's Going On", artist: "Marvin Gaye", year: 1971, public_domain: false }
---

# Transcribe 3: R&B and Soul — Reference Analysis

Modern neo-soul grew out of 1970s soul records, and those records are the clearest place to hear its harmony. Today's three classics each teach one idea. Open your own copies, cover the facts, and do each pass before checking. Chord charts for these songs vary in their extensions (7 vs 9 vs 13) — that's normal; get the root and family right and treat the colour as your own judgement.

## A loop with a secondary dominant

First, an original loop built the way many soul tunes are: ii7 – V7 – Imaj7 – VI7. The last chord is a *major* chord with a b7 on degree 6 — a dominant pointing back to ii. You met secondary dominants in week 24; in a loop they're what keep the cycle turning.

```example
{
  "title": "Original: ii7–V7–Imaj7–VI7 loop in F",
  "bpm": 112, "timeSig": "4/4", "key": "F",
  "tracks": [
    { "instrument": "drums", "seq": "kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q" },
    { "instrument": "drums", "seq": "r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q" },
    { "instrument": "bass", "seq": "G2:q. G2:8 r:8 D2:8 G2:q | C2:q. C2:8 r:8 G2:8 C2:q | F2:q. F2:8 r:8 C2:8 F2:q | D2:q. D2:8 r:8 A2:8 D2:q" },
    { "instrument": "epiano", "seq": "[F3 Bb3 D4]:h. r:8 [E3 Bb3 D4]:8 | [E3 Bb3 D4]:h. r:8 [E3 A3 C4]:8 | [E3 A3 C4]:h. r:8 [F#3 C4 E4]:8 | [F#3 C4 E4]:h. r:8 [F3 Bb3 D4]:8" }
  ],
  "show": ["keyboard"],
  "loop": true
}
```

Listen to bar 4: the F# in the keys is the giveaway — it's not in F major. A chromatic note that pulls up by half step to the next chord almost always means a secondary dominant.

## "Isn't She Lovely" — Stevie Wonder (1976)

**Home C# minor, about 119 BPM.** Pass 4: a four-chord loop commonly charted as **C#m7 – F#7 – B – G#7** (with various extensions). In B major that's ii7 – V7 – I – VI7: exactly the pattern of the loop above, just in a different key. Pass 1 is interesting: the loop starts on C#m7, and many listeners hear C# minor as home. Decide for yourself. Pass 6: a relaxed shuffle-ish groove; note the feel in words.

## "Ain't No Sunshine" — Bill Withers (1971)

**A minor, about 78 BPM.** Pass 4: **Am – Em7 – G – Am** (i – v7 – VII – i) — minor-key soul, with the *minor* v rather than a major V. Pass 2: an unusual, very short form; count the bars of each verse. Pass 7: strings enter and leave; mark where.

## "What's Going On" — Marvin Gaye (1971)

**E major, about 102 BPM.** Pass 4: the opening alternates **Emaj7 and C#m7** (Imaj7 – vi7) — two soft, extended chords that hardly resolve. Pass 6: congas and a busy, melodic bass; listen to the bass *only* for one full verse. Pass 7: an early concept-album production — list every layer you can hear.

```exercise
{
  "id": "w48l3-refs",
  "type": "quiz",
  "title": "Reference check",
  "spec": { "questions": [
    { "q": "\"Isn't She Lovely\": what is the G#7 doing in a loop centred on B/C#m?", "choices": ["It's a secondary dominant pointing to C#m7 (V/ii)", "It's the tonic", "It's a borrowed iv", "It's a mistake in the charts"], "answer": 0 },
    { "q": "\"Ain't No Sunshine\": which chord replaces the usual major V?", "choices": ["A minor v7 (Em7)", "bVI", "A diminished chord", "IV"], "answer": 0 },
    { "q": "\"What's Going On\": the opening two chords?", "choices": ["Imaj7 – vi7", "I – V", "ii7 – V7", "i – bVII"], "answer": 0 },
    { "q": "Charts disagree on '9' vs '13' on a chord. What should a transcriber prioritise?", "choices": ["Root and family first; colour second", "Only the colour", "Whatever the first chart says", "Ignore 7ths"], "answer": 0 }
  ] }
}
```

```exercise
{
  "id": "w48l3-prog",
  "type": "ear-progression",
  "title": "Loops with a secondary dominant",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "E", "mode": "major", "length": 4, "chords": ["Imaj7", "ii7", "V7", "vi7", "VI7", "IVmaj7"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "w48l3-minor",
  "type": "ear-progression",
  "title": "Minor soul loops in A",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "A", "mode": "minor", "length": 4, "chords": ["i", "iv", "v7", "VI", "VII"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "w48l3-analysis",
  "type": "roman-analysis",
  "title": "Analyse in B major",
  "spec": { "key": "B", "chords": ["C#m7", "F#7", "Bmaj7", "G#7"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "w48l3-play",
  "type": "play-chord",
  "title": "Play the soul loop",
  "spec": { "chords": ["Gm7", "C7", "Fmaj7", "D7"], "inversion": "any", "sequence": true, "bpm": 72 }
}
```

```exercise
{
  "id": "w48l3-daw",
  "type": "daw-task",
  "title": "Your neo-soul sketch",
  "spec": {
    "template": { "bpm": 86, "key": "Eb", "tracks": [
      { "instrument": "drums", "seq": "" }, { "instrument": "bass", "seq": "" },
      { "instrument": "epiano", "seq": "" }, { "instrument": "lead", "seq": "" } ] },
    "task": "Write 16 bars in Eb: a 4-bar loop of extended chords (at least one m9 or maj9, one dominant, and one secondary dominant), chord anticipations on the '&' of 4, a pushed-kick pocket with 16th hats, a syncopated bass that shares some kicks, and a lead melody that uses 9ths on strong beats.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "epiano", "lead"] },
      { "kind": "bars", "min": 16, "max": 16 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "snareOnBeats": [2, 4], "track": 0 },
      { "kind": "uses-rhythm", "values": ["16", "8"], "minDistinct": 2, "track": 1 },
      { "kind": "in-key", "key": "Eb", "scale": "major", "allowPassing": true, "track": 3 },
      { "kind": "custom", "id": "w48-extended-chords", "note": "Self-check: name every chord in your loop with its full symbol and roman numeral in the clip name." }
    ],
    "minBars": 16, "maxBars": 16
  }
}
```
