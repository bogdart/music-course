---
id: w14-l1-eighths-sixteenths-syncopation
title: Sixteenths and Syncopation
week: 14
order: 1
phase: p2
duration_min: 40
goals:
  - Count and tap sixteenth notes with "1 e & a"
  - Feel and tap syncopated rhythms that accent the off-beats
  - Take down simple eighth- and sixteenth-note rhythms by ear
prerequisites: [w13-l3-analysing-three-pop-songs]
tags: [rhythm, groove, ear]
---

# Sixteenths and Syncopation

Four weeks of harmony — time to move your body. Modern music lives or dies by its groove, and groove comes from two things: dividing the beat into small pieces, and putting accents in *unexpected* places.

## Sixteenth notes

You already count eighths as "1 & 2 & 3 & 4 &". Split each eighth again and you get sixteenth notes — four per beat (see [[sixteenth note]]), counted **"1 e & a, 2 e & a…"** (say "one-ee-and-uh"). At 90 BPM that's six notes a second: the busy hi-hat of funk, disco and a lot of pop.

Tap along: quarter, eighths, sixteenths — the beat stays the same, only the subdivision changes.

```example
{
  "title": "Quarters → eighths → sixteenths on the hi-hat, kick on every beat",
  "bpm": 80, "timeSig": "4/4",
  "tracks": [
    { "instrument": "drums", "seq": "hihat:q hihat:q hihat:q hihat:q | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16" },
    { "instrument": "drums", "seq": "kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q" }
  ],
  "show": ["staff"]
}
```

```exercise
{
  "id": "e1", "type": "rhythm-tap", "title": "Mixing values",
  "instructions": "Count out loud: '1, 2 &, 3 e & a, 4'.",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 70, "timeSig": "4/4", "seq": "x:q x:8 x:8 x:16 x:16 x:16 x:16 x:q", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "e2", "type": "read-rhythm", "title": "Read and tap sixteenths",
  "count": 8, "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "16" }
}
```

```exercise
{
  "id": "e3", "type": "ear-rhythm", "title": "Which rhythm did you hear?",
  "count": 8, "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "16", "rests": false, "answer": "choose" }
}
```

## Syncopation

[[Syncopation]] means accenting a note that falls *between* the beats — on an "&" or an "e"/"a" — and often *not* playing on the beat that follows. The ear expects the beat; when the accent arrives early, it creates a push, a lean forward. That push is most of what makes music feel groovy. A useful test: clap the rhythm while tapping your foot on every beat. If your clap and your foot often miss each other, the rhythm is syncopated.

The most famous syncopation in pop is the **3 + 3 + 2** pattern: eight eighths grouped as dotted quarter, dotted quarter, quarter. Accents land on 1, the "&" of 2, and 4. You hear it in reggaeton, dancehall, Latin music and countless pop choruses.

```example
{
  "title": "Straight quarters vs. 3+3+2 syncopation (clap), over a steady kick",
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
  "id": "e4", "type": "rhythm-tap", "title": "Tap 3 + 3 + 2",
  "instructions": "Count all eight eighths in your head: ONE two three ONE two three ONE two.",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 90, "timeSig": "4/4", "seq": "x:q. x:q. x:q | x:q. x:q. x:q", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "e5", "type": "play-melody", "title": "A syncopated melody",
  "instructions": "Right hand. Several notes start on an '&' and hold across the beat — don't rush them.",
  "count": 6, "passScore": 0.7,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "C4:8 E4:q G4:q E4:q C4:8 | D4:8 F4:q A4:q. r:q | G4:q. E4:q. C4:q | D4:8 E4:8 r:8 C4:8 r:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[C3 E3 G3]:w | [D3 F3 A3]:w | [C3 E3 G3]:w | [B2 D3 G3]:h [C3 E3 G3]:h" } }
}
```

```exercise
{
  "id": "e6", "type": "ear-rhythm", "title": "Rhythm dictation: tap it back",
  "instructions": "Eighths with rests. Listen twice, then tap.",
  "count": 8, "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "8", "rests": true, "answer": "tap" }
}
```
