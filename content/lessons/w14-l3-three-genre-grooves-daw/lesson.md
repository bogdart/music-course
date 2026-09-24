---
id: w14-l3-three-genre-grooves-daw
title: "Three Grooves: Rock, Hip-Hop, House"
week: 14
order: 3
phase: p2
duration_min: 50
goals:
  - Describe rock, boom-bap hip-hop and house by tempo, kick pattern and hi-hat
  - Play a bass line that locks with the kick (rock) or fills its gaps (house)
  - Build a 4-bar beat + bass + chords loop in each of the three genres
prerequisites: [w14-l2-drum-kit-and-basic-beats]
tags: [rhythm, drums, genres, groove, daw]
---

# Three Grooves: Rock, Hip-Hop, House

A genre's rhythmic fingerprint is mostly three choices: **tempo**, **where the kick goes**, and **what the hi-hats do**. The snare stays on 2 and 4 almost everywhere. Learn these three recipes and you can recognise — and fake — a lot of music.

| | tempo | kick | hats | feel |
|---|---|---|---|---|
| **Rock** | 110–140 | 1 and 3 | straight 8ths | driving, even |
| **Hip-hop (boom bap)** | 85–95 | syncopated, off the grid | 8ths, often swung | laid-back, heavy |
| **House** | 118–128 | every beat ([[four-on-the-floor]]) | open hat on every "&" | hypnotic, danceable |

```example
{
  "title": "Rock at 120: kick 1 & 3, snare 2 & 4, straight hats",
  "bpm": 120, "timeSig": "4/4", "loop": true,
  "tracks": [
    { "instrument": "drums", "seq": "hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8" },
    { "instrument": "drums", "seq": "kick:q r:8 kick:8 kick:q r:q" },
    { "instrument": "drums", "seq": "r:q snare:q r:q snare:q" },
    { "instrument": "bass", "seq": "G1:q r:8 G1:8 G1:q r:q" }
  ],
  "show": ["pianoroll"]
}
```

```example
{
  "title": "Boom bap at 90: kick on 1, the '&' of 2 and the '&' of 3",
  "bpm": 90, "timeSig": "4/4", "loop": true,
  "tracks": [
    { "instrument": "drums", "seq": "hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8" },
    { "instrument": "drums", "seq": "kick:8 r:8 r:8 kick:16 r:16 r:8 kick:8 r:q" },
    { "instrument": "drums", "seq": "r:q snare:q r:q snare:q" }
  ],
  "show": ["pianoroll"]
}
```

```example
{
  "title": "House at 124: four-on-the-floor, clap on 2 & 4, open hat off-beats, bass between kicks",
  "bpm": 124, "timeSig": "4/4", "loop": true,
  "tracks": [
    { "instrument": "drums", "seq": "kick:q kick:q kick:q kick:q" },
    { "instrument": "drums", "seq": "r:q clap:q r:q clap:q" },
    { "instrument": "drums", "seq": "r:8 ohat:8 r:8 ohat:8 r:8 ohat:8 r:8 ohat:8" },
    { "instrument": "bass", "seq": "r:8 A1:8 r:8 A1:8 r:8 A1:8 r:8 A1:8" }
  ],
  "show": ["pianoroll"]
}
```

Notice the bass. In rock it **locks** with the kick. In house it plays **between** the kicks, on the off-beats — the kick and bass take turns, which makes the groove bounce.

## Hearing grooves in real songs

This works on any track you like. Put a song on and listen in three passes. **Pass 1:** tap your foot with the beat and find the tempo (the app's metronome helps — match it). **Pass 2:** follow only the lowest drum; does the kick hit every beat, beats 1 and 3, or somewhere unexpected? **Pass 3:** listen high: is the hi-hat ticking in eighths or sixteenths, straight or swung, closed or open? Three answers, and you can usually name the genre — and rebuild the beat.

```exercise
{
  "id": "e1", "type": "ear-rhythm", "title": "Kick-pattern dictation",
  "instructions": "Imagine these as kick drum patterns. Choose what you heard.",
  "count": 8, "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "16", "rests": true, "answer": "choose" }
}
```

```exercise
{
  "id": "e2", "type": "rhythm-tap", "title": "Tap the house off-beat hat",
  "instructions": "Tap only on the '&'s while the kick plays the beats in your head.",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 120, "timeSig": "4/4", "seq": "r:8 x:8 r:8 x:8 r:8 x:8 r:8 x:8", "showNotation": true, "countIn": 1, "loops": 4 }
}
```

```exercise
{
  "id": "e3", "type": "play-melody", "title": "House bass between the kicks",
  "instructions": "Left hand. Play only on the '&'s. A minor to D minor.",
  "count": 6, "passScore": 0.7,
  "spec": { "bpm": 110, "timeSig": "4/4", "key": "Am", "seq": "r:8 A2:8 r:8 A2:8 r:8 A2:8 r:8 A2:8 | r:8 D3:8 r:8 D3:8 r:8 D3:8 r:8 D3:8", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "drums", "seq": "kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q" } }
}
```

## Make it: one loop per genre

Do all three in one session if you can; the contrast is the lesson. Each loop is 4 bars. Start with drums, then bass, then chords.

```exercise
{
  "id": "e4", "type": "daw-task", "title": "Rock loop in G",
  "spec": {
    "template": { "bpm": 120, "key": "G", "timeSig": "4/4", "tracks": [
      { "instrument": "drums", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "piano", "seq": "" } ] },
    "task": "Rock, 120 BPM, G – C – D – C (I – IV – V – IV), one bar each. Drums: kick on 1 and 3 (add the '&' of 2 if you like), snare on 2 and 4, straight eighth hi-hats. Bass: roots, hitting with the kick. Piano: eighth-note chords.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "piano"] },
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "kickOnBeats": [1, 3], "snareOnBeats": [2, 4], "track": 0 },
      { "kind": "uses-rhythm", "values": ["8"], "minDistinct": 1, "track": 0 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["I", "IV", "V", "IV"], "barsPerChord": 1, "minRatio": 0.9, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "IV", "V", "IV"], "barsPerChord": 1, "minRatio": 1.0, "track": 2 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

```exercise
{
  "id": "e5", "type": "daw-task", "title": "Boom-bap loop in A minor",
  "spec": {
    "template": { "bpm": 90, "key": "Am", "timeSig": "4/4", "tracks": [
      { "instrument": "drums", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "epiano", "seq": "" } ] },
    "task": "Hip-hop, 90 BPM, Am7 – Fmaj7 (i – VI), one bar each, twice. Drums: snare on 2 and 4, kick on 1 plus two or three syncopated kicks (try the '&' of 2 and the '&' of 3), eighth hats — swing them with triplets if you're feeling brave. Bass: follow the kick, roots only. E-piano: long seventh chords.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "epiano"] },
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "kickOnBeats": [1], "snareOnBeats": [2, 4], "track": 0 },
      { "kind": "uses-rhythm", "values": ["8", "16"], "minDistinct": 2, "track": 0 },
      { "kind": "in-key", "key": "A", "scale": "natural-minor", "allowPassing": false, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["i", "VI"], "barsPerChord": 1, "minRatio": 1.0, "track": 2 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

```exercise
{
  "id": "e6", "type": "daw-task", "title": "House loop in A minor",
  "spec": {
    "template": { "bpm": 124, "key": "Am", "timeSig": "4/4", "tracks": [
      { "instrument": "drums", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "pad", "seq": "" } ] },
    "task": "House, 124 BPM, Am – Dm (i – iv), one bar each, twice. Drums: kick on every beat, clap on 2 and 4, open hat on every '&'. Bass: off-beat notes between the kicks (like the exercise above). Pad: sustained chords. Self-check: do bass notes avoid the kick hits?",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "pad"] },
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "drum-pattern", "requires": ["kick", "clap", "ohat"], "kickOnBeats": [1, 2, 3, 4], "track": 0 },
      { "kind": "in-key", "key": "A", "scale": "natural-minor", "allowPassing": false, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["i", "iv"], "barsPerChord": 1, "minRatio": 1.0, "track": 2 },
      { "kind": "custom", "id": "offbeat-bass", "note": "Self-check: bass notes sit on the '&'s, between the kicks." }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```
