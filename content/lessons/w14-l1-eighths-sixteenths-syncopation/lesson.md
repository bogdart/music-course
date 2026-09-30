---
id: w14-l1-eighths-sixteenths-syncopation
title: Sixteenths and Syncopation
week: 14
order: 1
phase: p2
duration_min: 45
goals:
  - Count and tap sixteenth notes with "1 e & a"
  - Feel and tap syncopated rhythms that accent the off-beats
  - Recognise and tap back one-bar rhythms with sixteenths
prerequisites: [w13-l3-analysing-three-pop-songs]
tags: [rhythm, groove, ear]
---

# Sixteenths and Syncopation

Four weeks of harmony: time to move. Groove comes from two things: dividing the beat into small pieces, and putting accents where the ear doesn't expect them.

## Sixteenth notes

You count eighths as "1 & 2 & 3 & 4 &". Split each eighth in half again and you get [[sixteenth note]]s: four per beat, counted **"1 e & a, 2 e & a…"** (say "one-ee-and-uh"). At 90 BPM that's six notes a second, the busy hi-hat of funk, disco and a lot of pop. In notation a sixteenth has two flags (or two beams).

Listen: the kick stays on every beat while the hi-hat goes from quarters to eighths to sixteenths. The beat never changes, only how finely it's divided.

```example
{
  "title": "Hi-hat in quarters, then eighths, then sixteenths; kick on every beat",
  "bpm": 80, "timeSig": "4/4",
  "tracks": [
    { "instrument": "drums", "seq": "hihat:q hihat:q hihat:q hihat:q | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16" },
    { "instrument": "drums", "seq": "kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q" }
  ],
  "show": ["staff"]
}
```

The most common sixteenth figures mix an eighth with two sixteenths: "1 & a" (eighth, sixteenth, sixteenth) or "1 e &" (sixteenth, sixteenth, eighth). Count them aloud as you tap.

```exercise
{
  "id": "e1", "type": "rhythm-tap", "title": "Mixing values",
  "instructions": "Count out loud: '1, 2 &, 3 e & a, 4'.",
  "passScore": 0.7,
  "spec": { "bpm": 70, "timeSig": "4/4", "seq": "x:q x:8 x:8 x:16 x:16 x:16 x:16 x:q", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "e2", "type": "read-rhythm", "title": "Read and tap sixteenths",
  "count": 8, "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "16", "bpm": 66 }
}
```

This lesson opens two rhythm rungs with sixteenths: first choosing which rhythm you heard, then tapping it back. The drill runs at your current rhythm rung, which may still be an earlier one.

```ladder
{ "skill": "rhythm", "unlocks": 8, "intro": "Opens: sixteenths — choose the rhythm you heard, then tap it back. The drill runs at your current rhythm rung." }
```

## Syncopation

[[Syncopation]] means accenting a note that falls *between* the beats (on an "&", "e" or "a") and often *not* playing on the beat that follows. The ear expects the beat; when the accent comes early, it creates a push, a lean forward. That push is a large part of what makes music feel groovy.

A test: tap your foot on every beat and clap the rhythm. If clap and foot often miss each other, the rhythm is syncopated.

The most famous syncopation in pop is **3 + 3 + 2**: eight eighths grouped as dotted quarter, dotted quarter, quarter. Accents land on 1, the "&" of 2, and 4. You hear it in reggaeton, dancehall, Latin music and countless pop choruses.

```example
{
  "title": "Straight quarters, then 3+3+2 (twice), then a syncopated bar; the kick stays on the beat",
  "bpm": 96, "timeSig": "4/4", "loop": true,
  "tracks": [
    { "instrument": "drums", "seq": "clap:q clap:q clap:q clap:q | clap:q. clap:q. clap:q | clap:q. clap:q. clap:q | clap:8 clap:q clap:8 r:8 clap:8 clap:q" },
    { "instrument": "drums", "seq": "kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q" }
  ],
  "show": ["staff"]
}
```

```exercise
{
  "id": "e3", "type": "rhythm-tap", "title": "Tap 3 + 3 + 2",
  "instructions": "Count all eight eighths in your head: ONE two three ONE two three ONE two.",
  "passScore": 0.7,
  "spec": { "bpm": 90, "timeSig": "4/4", "seq": "x:q. x:q. x:q | x:q. x:q. x:q", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "e4", "type": "play-melody", "title": "A syncopated melody",
  "instructions": "Right hand. Several notes start on an '&' and hold across the beat. Don't rush them.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "C4:8 E4:q G4:q E4:q C4:8 | D4:8 F4:q A4:q. r:q | G4:q. E4:q. C4:q | D4:8 E4:8 r:8 C4:8 r:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[C3 E3 G3]:w | [D3 F3 A3]:w | [C3 E3 G3]:w | [B2 D3 G3]:h [C3 E3 G3]:h" } }
}
```
