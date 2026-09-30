---
id: w39-l2-topline-writing
title: Topline Writing
week: 39
order: 2
phase: p4
duration_min: 45
goals:
  - Write a vocal-style melody (topline) over an existing track, on the keyboard
  - Work rhythm first (tapped on one key), then pitch
  - Contrast a talky verse with a higher, longer-note chorus
prerequisites: [w39-l1-stress-range-prosody]
tags: [songwriting, topline, melody, lyrics]
---

# Topline Writing

In much of today's pop, R&B and dance music the **track** (beat, bass, chords) is made first; a songwriter then writes the [[topline]] — the vocal melody (and lyric) on top. It's a distinct skill: you're not choosing chords, you're finding the catchiest, most singable path through chords that already exist. You write it for a singer; you play it yourself on the keyboard.

## Rhythm first

Loop the track and **tap rhythms on a single key** — any note, no pitch decisions yet. Try several: busy and talky, sparse and long, syncopated, starting before the beat. Record the one that feels best into the DAW. Only then move its notes up and down to choose pitches. Rhythm is where most hooks live, and it's easier to judge without pitch in the way.

## Find the pocket

Where the topline sits against the beat is its **pocket**. Starting phrases *after* beat 1 (on the "and" of 1, or on beat 2) leaves room for the downbeat and sounds conversational. Landing long notes on chord changes ties the melody to the track.

## Verse vs chorus

| | Verse | Chorus |
|---|---|---|
| Register | lower, narrow | higher, wider |
| Rhythm | busy, speech-like 8ths | longer notes, a repeated hook rhythm |
| Phrases | start off the beat, end with rests | start strong, repeat |

One track (D – Bm – G – A) with an original verse topline, then a chorus topline:

```example
{
  "title": "Verse topline (talky, low) then chorus topline (long, high) over the same track",
  "bpm": 92, "timeSig": "4/4", "key": "D",
  "tracks": [
    { "instrument": "lead", "seq": "r:8 F#4:8 F#4:8 E4:8 D4:q r:q | r:8 F#4:8 F#4:8 A4:8 F#4:q r:q | r:8 G4:8 G4:8 F#4:8 E4:q D4:q | E4:h r:h | A4:q. B4:8 A4:q F#4:q | B4:h. r:q | A4:q. B4:8 A4:q F#4:q | E4:h. r:q |" },
    { "instrument": "piano", "seq": "[D3 F#3 A3]:w | [B2 D3 F#3]:w | [G2 B2 D3]:w | [A2 C#3 E3]:w | [D3 F#3 A3]:w | [B2 D3 F#3]:w | [G2 B2 D3]:w | [A2 C#3 E3]:w |" },
    { "instrument": "bass", "seq": "D2:w | B1:w | G1:w | A1:w | D2:w | B1:w | G1:w | A1:w |" },
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 |" }
  ],
  "show": ["staff"]
}
```

The verse starts every phrase on the "and" of 1 and rests at the end of each bar — room to breathe, like speech. The chorus hits beat 1, climbs to B, and repeats its rhythm exactly: that repetition is the hook.

```exercise
{
  "id": "e1-tap-verse",
  "type": "rhythm-tap",
  "title": "Tap the verse rhythm (the pocket)",
  "passScore": 0.7,
  "spec": { "bpm": 92, "timeSig": "4/4", "seq": "r:8 x:8 x:8 x:8 x:q r:q | r:8 x:8 x:8 x:8 x:q r:q |", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "e2-play-chorus",
  "type": "play-melody",
  "title": "Play the chorus topline",
  "passScore": 0.7,
  "spec": {
    "bpm": 88, "timeSig": "4/4", "key": "D",
    "seq": "A4:q. B4:8 A4:q F#4:q | B4:h. r:q | A4:q. B4:8 A4:q F#4:q | E4:h. r:q |",
    "showStaff": true, "showKeyboard": true, "countIn": 1,
    "backing": { "instrument": "piano", "seq": "[D3 F#3 A3]:w | [B2 D3 F#3]:w | [G2 B2 D3]:w | [A2 C#3 E3]:w |" }
  }
}
```

```exercise
{
  "id": "e3-topline-quiz",
  "type": "quiz",
  "title": "Topline craft",
  "passScore": 0.7,
  "spec": {
    "questions": [
      { "q": "In the rhythm-first method, what do you decide first?", "choices": ["the lyric", "the rhythm", "the key", "the chords"], "answer": 1 },
      { "q": "Compared with the verse, a chorus topline usually…", "choices": ["is lower and busier", "is higher, with longer notes and a repeated rhythm", "has no rests"], "answer": 1 },
      { "q": "Starting a verse phrase on the 'and' of 1 makes it sound…", "choices": ["conversational", "stiff", "out of key"], "answer": 0 }
    ]
  }
}
```

## Ear

```ladder
{ "skill": "progressions", "unlocks": 19, "intro": "A topliner hears the track's chords first — progressions at your current rung." }
```

```ladder
{ "skill": "melody", "unlocks": 18, "intro": "Melody play-back at your current rung." }
```

## Make it

```exercise
{
  "id": "e4-daw-topline",
  "type": "daw-task",
  "title": "Your verse + chorus topline",
  "instructions": "Over the provided track: first tap rhythms on one key, keep the best, then choose pitches. 4 bars of verse (mostly 8ths, phrases starting off the beat, range D4–A4) and 4 bars of chorus (higher, longer notes, a repeated 1-bar rhythm).",
  "spec": {
    "template": {
      "bpm": 92, "key": "D", "timeSig": "4/4",
      "tracks": [
        { "instrument": "lead", "seq": "" },
        { "instrument": "piano", "seq": "[D3 F#3 A3]:w | [B2 D3 F#3]:w | [G2 B2 D3]:w | [A2 C#3 E3]:w | [D3 F#3 A3]:w | [B2 D3 F#3]:w | [G2 B2 D3]:w | [A2 C#3 E3]:w |" },
        { "instrument": "bass", "seq": "D2:w | B1:w | G1:w | A1:w | D2:w | B1:w | G1:w | A1:w |" },
        { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 |" }
      ]
    },
    "task": "8-bar topline: talky verse + hooky chorus.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "D", "scale": "major", "allowPassing": true, "track": 0 },
      { "kind": "range", "low": "A3", "high": "E5", "track": 0 },
      { "kind": "max-leap", "semitones": 9, "track": 0 },
      { "kind": "repetition", "motifBars": 1, "minRepeats": 2, "allowTransposed": true, "track": 0 },
      { "kind": "custom", "id": "verse-chorus-contrast", "note": "Self-check: the chorus sits higher and uses longer notes than the verse." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
