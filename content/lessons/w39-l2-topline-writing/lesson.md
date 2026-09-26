---
id: w39-l2-topline-writing
title: Topline Writing
week: 39
order: 2
phase: p4
duration_min: 45
goals:
  - Write a vocal-style melody (topline) over an existing track
  - Work rhythm-first, then pitch
  - Contrast a talky verse with a higher, longer-note chorus
prerequisites: [w39-l1-stress-range-prosody]
tags: [songwriting, topline, melody, voice]
---

# Topline Writing

In much of today's pop, R&B and dance music the **track** (beat, bass, chords) is made first, and a songwriter then writes the [[topline]] — the vocal melody (and lyric) on top. It's a distinct skill: you're not choosing chords, you're finding the most catchy, singable path through chords that already exist.

## Rhythm first

Loop the track and **"mumble"** along: nonsense syllables, no pitch worries, just rhythm. Try several: busy and talky, sparse and long, syncopated, starting before the beat. Record or note the one that feels best. Only then choose pitches. Rhythm is where most hooks live.

## Find the pocket

Where the topline sits against the beat is its **pocket**. Starting phrases *after* beat 1 (on the "and" of 1, or on beat 2) leaves room for the downbeat and sounds conversational. Landing long notes on chord changes makes the melody feel tied to the track.

## Verse vs chorus

| | Verse | Chorus |
|---|---|---|
| Register | lower, narrow | higher, wider |
| Rhythm | busy, speech-like 8ths | longer notes, repeated hook rhythm |
| Phrases | start off the beat, end with rests | start strong, repeat |

Here is one track (D – Bm – G – A) with an original verse topline and then a chorus topline.

```example
{
  "title": "Verse topline (talky, low) then chorus topline (long, high) over the same track",
  "bpm": 92,
  "timeSig": "4/4",
  "key": "D",
  "tracks": [
    {
      "instrument": "lead",
      "seq": "r:8 F#4:8 F#4:8 E4:8 D4:q r:q | r:8 F#4:8 F#4:8 A4:8 F#4:q r:q | r:8 G4:8 G4:8 F#4:8 E4:q D4:q | E4:h r:h | A4:q. B4:8 A4:q F#4:q | B4:h. r:q | A4:q. B4:8 A4:q F#4:q | E4:h. r:q |"
    },
    {
      "instrument": "piano",
      "seq": "[D3 F#3 A3]:w | [B2 D3 F#3]:w | [G2 B2 D3]:w | [A2 C#3 E3]:w | [D3 F#3 A3]:w | [B2 D3 F#3]:w | [G2 B2 D3]:w | [A2 C#3 E3]:w |"
    },
    {
      "instrument": "bass",
      "seq": "D2:w | B1:w | G1:w | A1:w | D2:w | B1:w | G1:w | A1:w |"
    },
    {
      "instrument": "drums",
      "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 |"
    }
  ],
  "show": [
    "staff"
  ]
}
```

The verse starts every phrase on the "and" of 1 and rests at the end of each bar — room to breathe, like speech. The chorus hits beat 1, climbs to B, and repeats its rhythm exactly: that repetition is the hook.

## Drills

```exercise
{
  "id": "e1-tap-verse",
  "type": "rhythm-tap",
  "title": "Tap the verse rhythm (the pocket)",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 92,
    "timeSig": "4/4",
    "seq": "r:8 x:8 x:8 x:8 x:q r:q | r:8 x:8 x:8 x:8 x:q r:q |",
    "showNotation": true,
    "countIn": 1,
    "loops": 2
  }
}
```

```exercise
{
  "id": "e2-play-chorus",
  "type": "play-melody",
  "title": "Play the chorus topline",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 88,
    "timeSig": "4/4",
    "key": "D",
    "seq": "A4:q. B4:8 A4:q F#4:q | B4:h. r:q | A4:q. B4:8 A4:q F#4:q | E4:h. r:q |",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1,
    "backing": {
      "instrument": "piano",
      "seq": "[D3 F#3 A3]:w | [B2 D3 F#3]:w | [G2 B2 D3]:w | [A2 C#3 E3]:w |"
    }
  }
}
```

```exercise
{
  "id": "e3-ear-prog",
  "type": "ear-progression",
  "title": "Hear the track's chords",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "key": "random",
    "mode": "major",
    "length": 4,
    "chords": [
      "I",
      "ii",
      "IV",
      "V",
      "vi"
    ],
    "style": "pad-bass"
  }
}
```

```exercise
{
  "id": "e4-ear-melody",
  "type": "ear-melody",
  "title": "Topline dictation",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "key": "random",
    "degrees": [
      1,
      2,
      3,
      5,
      6
    ],
    "length": 5,
    "rhythm": "free",
    "answer": "play"
  }
}
```

```exercise
{
  "id": "e5-topline-quiz",
  "type": "quiz",
  "title": "Topline craft",
  "passScore": 0.75,
  "spec": {
    "questions": [
      {
        "q": "What do you decide first in the 'mumble' method?",
        "choices": [
          "the lyric",
          "the rhythm",
          "the key",
          "the chords"
        ],
        "answer": 1
      },
      {
        "q": "Compared with the verse, a chorus topline usually…",
        "choices": [
          "is lower and busier",
          "is higher with longer notes and a repeated rhythm",
          "has no rests",
          "uses more chromatic notes"
        ],
        "answer": 1
      },
      {
        "q": "Starting a verse phrase on the 'and' of 1 makes it sound…",
        "choices": [
          "conversational",
          "stiff",
          "faster",
          "out of key"
        ],
        "answer": 0
      }
    ]
  }
}
```

```exercise
{
  "id": "e6-daw-topline",
  "type": "daw-task",
  "title": "Your verse + chorus topline",
  "instructions": "Over the provided track, write 4 bars of verse topline and 4 bars of chorus topline. Verse: mostly 8ths, phrases starting off the beat, range D4–A4. Chorus: higher, longer notes, a repeated 1-bar rhythm.",
  "spec": {
    "template": {
      "bpm": 92,
      "key": "D",
      "timeSig": "4/4",
      "tracks": [
        {
          "instrument": "lead",
          "seq": ""
        },
        {
          "instrument": "piano",
          "seq": "[D3 F#3 A3]:w | [B2 D3 F#3]:w | [G2 B2 D3]:w | [A2 C#3 E3]:w | [D3 F#3 A3]:w | [B2 D3 F#3]:w | [G2 B2 D3]:w | [A2 C#3 E3]:w |"
        },
        {
          "instrument": "bass",
          "seq": "D2:w | B1:w | G1:w | A1:w | D2:w | B1:w | G1:w | A1:w |"
        },
        {
          "instrument": "drums",
          "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 |"
        }
      ]
    },
    "task": "8-bar topline: talky verse + hooky chorus.",
    "checks": [
      {
        "kind": "bars",
        "min": 8,
        "max": 8
      },
      {
        "kind": "in-key",
        "key": "D",
        "scale": "major",
        "allowPassing": true,
        "track": 0
      },
      {
        "kind": "range",
        "low": "A3",
        "high": "E5",
        "track": 0
      },
      {
        "kind": "max-leap",
        "semitones": 9,
        "track": 0
      },
      {
        "kind": "repetition",
        "motifBars": 1,
        "minRepeats": 2,
        "allowTransposed": true,
        "track": 0
      },
      {
        "kind": "custom",
        "id": "verse-chorus-contrast",
        "note": "Self-check: the chorus sits higher and uses longer notes than the verse."
      }
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```
