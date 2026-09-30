---
id: w52-l2-graduation-transcription
title: "Graduation 2: The Transcription"
week: 52
order: 2
phase: p5
duration_min: 50
goals:
  - Decompose a hidden 8-bar song with the seven passes, answering before revealing
  - Name its chords as numerals, checking the bass under each one
  - Rebuild its bass and chords in the DAW and check them against the original
prerequisites: [w52-l1-final-assessments]
tags: [assessment, transcription, graduation, daw]
---

# Graduation 2: The Transcription

One hidden song, eight bars, the year in miniature: key, groove, layers, bass, chords and melody, with whatever the year
taught you hiding inside them. Use the passes in order and keep a form map. It is diagnostic like lesson 1: answer
everything, reveal, and note which pass let you down.

Budget: about 30 minutes for the passes, 15 for the rebuild.

## The method from week 41, pass by pass

Loop the song and ask one question per listen. Write each answer on the form map before the next pass.

1. **Key.** Listen to where the melody comes to rest — the long notes at the ends of bars 2, 4 and 8. Find that note
   on the keyboard (higher/lower from the middle). Then test candidates: hold each one low under the loop for a full
   pass. *Check:* home sounds settled all the way through; a wrong candidate clashes somewhere.
2. **Groove and layers.** One drum per listen: kick (low thump), then snare, then hats; tap along. Then count the
   instruments on your fingers. *Check:* tap the kick pattern with the loop — your taps and the thumps coincide.
3. **Bass.** Ignore everything but the lowest pitched thump. For bar 1, search low keys (octaves 1–2) with
   higher/lower until one merges; then each next bar from the one before — step or jump, up or down? *Check:* play your
   eight notes along with the loop; the bass line and yours become one line.
4. **Chords.** On each bass note, play the major chord along with the loop, then the minor one; keep the one that
   blends. If neither blends, the bass may not be the root (try chords that *contain* the bass note), or the chord may
   change inside the bar (listen to each half). *Check:* play all eight
   chords with the loop — a wrong one rubs.
5. **Melody.** Chunk it: bars 5–6, then 7–8. Find the first note by search, then follow up/down, step/leap. A note
   that sounds 'bent' is probably the black key next to your guess. *Check:* play each chunk along with the replay.

**When stuck:** loop only the bar you're stuck on; isolate one layer (the slower keys-and-bass version below helps);
compare two candidates by playing each with the loop; guess and check — a guess you test is worth more than a blank.
Then answer, reveal, and note which pass let you down.

```example
{
  "title": "Graduation mystery song",
  "bpm": 92,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q"},
    {"instrument": "drums", "seq": "r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q"},
    {"instrument": "drums", "seq": "hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 ohat:8 ohat:8"},
    {"instrument": "bass", "seq": "Bb1:h. r:q | A1:h. r:q | G1:h. r:q | Eb2:h. r:q | C2:h. r:q | F2:h. r:q | Eb2:h. r:q | Bb1:h. r:q"},
    {"instrument": "epiano", "seq": "[F3 A3 Bb3 D4]:h [F3 A3 Bb3 D4]:h | [F3 A3 C4]:h [F3 A3 C4]:h | [F3 Bb3 D4]:h [F3 Bb3 D4]:h | [G3 Bb3 D4]:h [G3 Bb3 D4]:h | [G3 Bb3 Eb4]:h [G3 Bb3 Eb4]:h | [F3 Bb3 Eb4]:h [F3 A3 Eb4]:h | [Gb3 Bb3 Eb4]:h [Gb3 Bb3 Eb4]:h | [F3 Bb3 D4]:w"},
    {"instrument": "lead", "seq": "r:8 D5:8 D5:8 C5:8 D5:q F5:q | C5:q. A4:8 F4:h | r:8 G4:8 Bb4:8 D5:8 F5:q. D5:8 | D5:h. r:q | r:8 Eb5:8 Eb5:8 D5:8 C5:q Bb4:q | Bb4:h A4:h | Gb4:q. F4:8 Eb4:q Gb4:q | F4:8 G4:8 A4:8 Bb4:8~ Bb4:h"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```exercise
{
  "id": "w52l2-passes",
  "type": "listen",
  "title": "Passes 1, 2, 6 and 7",
  "spec": {
    "example": {
      "title": "Graduation mystery song",
      "bpm": 92,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q"},
        {"instrument": "drums", "seq": "r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q"},
        {"instrument": "drums", "seq": "hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 ohat:8 ohat:8"},
        {"instrument": "bass", "seq": "Bb1:h. r:q | A1:h. r:q | G1:h. r:q | Eb2:h. r:q | C2:h. r:q | F2:h. r:q | Eb2:h. r:q | Bb1:h. r:q"},
        {"instrument": "epiano", "seq": "[F3 A3 Bb3 D4]:h [F3 A3 Bb3 D4]:h | [F3 A3 C4]:h [F3 A3 C4]:h | [F3 Bb3 D4]:h [F3 Bb3 D4]:h | [G3 Bb3 D4]:h [G3 Bb3 D4]:h | [G3 Bb3 Eb4]:h [G3 Bb3 Eb4]:h | [F3 Bb3 Eb4]:h [F3 A3 Eb4]:h | [Gb3 Bb3 Eb4]:h [Gb3 Bb3 Eb4]:h | [F3 Bb3 D4]:w"},
        {"instrument": "lead", "seq": "r:8 D5:8 D5:8 C5:8 D5:q F5:q | C5:q. A4:8 F4:h | r:8 G4:8 Bb4:8 D5:8 F5:q. D5:8 | D5:h. r:q | r:8 Eb5:8 Eb5:8 D5:8 C5:q Bb4:q | Bb4:h A4:h | Gb4:q. F4:8 Eb4:q Gb4:q | F4:8 G4:8 A4:8 Bb4:8~ Bb4:h"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Pass 1: key?", "choices": ["F major", "B♭ major", "G minor", "E♭ major"], "answer": 1, "explain": "B♭ major: the song starts and ends on B♭."},
      {"q": "Pass 6: where is the second kick of each bar?", "choices": ["Beat 2", "The last 16th before beat 2", "Beat 3"], "answer": 1},
      {"q": "Pass 7: how many layers (drums count as one)?", "choices": ["3", "4", "5", "6"], "answer": 1, "explain": "Four: drums, bass, electric piano, lead."},
      {"q": "Bar 6: the bass holds one note. What happens in the keys above it?", "choices": ["A sus4 resolves", "The chord turns minor", "Nothing"], "answer": 0, "explain": "F7sus4 → F7: the B♭ slides down to A."}
    ]
  }
}
```

```exercise
{
  "id": "w52l2-bass",
  "type": "ear-bass",
  "title": "Pass 3: the bass",
  "instructions": "One bass note per bar. Play all eight.",
  "srs": false,
  "spec": {
    "key": "Bb",
    "chords": ["I", "ii", "iii", "IV", "V", "vi"],
    "answer": "play",
    "example": {
      "title": "Graduation song",
      "bpm": 92,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q"},
        {"instrument": "drums", "seq": "r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q"},
        {"instrument": "drums", "seq": "hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 ohat:8 ohat:8"},
        {"instrument": "bass", "seq": "Bb1:h. r:q | A1:h. r:q | G1:h. r:q | Eb2:h. r:q | C2:h. r:q | F2:h. r:q | Eb2:h. r:q | Bb1:h. r:q"},
        {"instrument": "epiano", "seq": "[F3 A3 Bb3 D4]:h [F3 A3 Bb3 D4]:h | [F3 A3 C4]:h [F3 A3 C4]:h | [F3 Bb3 D4]:h [F3 Bb3 D4]:h | [G3 Bb3 D4]:h [G3 Bb3 D4]:h | [G3 Bb3 Eb4]:h [G3 Bb3 Eb4]:h | [F3 Bb3 Eb4]:h [F3 A3 Eb4]:h | [Gb3 Bb3 Eb4]:h [Gb3 Bb3 Eb4]:h | [F3 Bb3 D4]:w"},
        {"instrument": "lead", "seq": "r:8 D5:8 D5:8 C5:8 D5:q F5:q | C5:q. A4:8 F4:h | r:8 G4:8 Bb4:8 D5:8 F5:q. D5:8 | D5:h. r:q | r:8 Eb5:8 Eb5:8 D5:8 C5:q Bb4:q | Bb4:h A4:h | Gb4:q. F4:8 Eb4:q Gb4:q | F4:8 G4:8 A4:8 Bb4:8~ Bb4:h"}
      ]
    },
    "track": 3
  }
}
```

```exercise
{
  "id": "w52l2-chords",
  "type": "ear-progression",
  "title": "Pass 4: the chords",
  "instructions": "One numeral per bar. Answer with plain numerals: an inversion counts as its chord.",
  "srs": false,
  "spec": {
    "key": "Bb",
    "mode": "major",
    "chords": ["I", "Imaj7", "ii", "ii7", "iii", "IV", "IVmaj7", "iv", "V", "V7", "vi", "vi7", "bVII"],
    "example": {
      "title": "Graduation song",
      "bpm": 92,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q"},
        {"instrument": "drums", "seq": "r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q"},
        {"instrument": "drums", "seq": "hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 ohat:8 ohat:8"},
        {"instrument": "bass", "seq": "Bb1:h. r:q | A1:h. r:q | G1:h. r:q | Eb2:h. r:q | C2:h. r:q | F2:h. r:q | Eb2:h. r:q | Bb1:h. r:q"},
        {"instrument": "epiano", "seq": "[F3 A3 Bb3 D4]:h [F3 A3 Bb3 D4]:h | [F3 A3 C4]:h [F3 A3 C4]:h | [F3 Bb3 D4]:h [F3 Bb3 D4]:h | [G3 Bb3 D4]:h [G3 Bb3 D4]:h | [G3 Bb3 Eb4]:h [G3 Bb3 Eb4]:h | [F3 Bb3 Eb4]:h [F3 A3 Eb4]:h | [Gb3 Bb3 Eb4]:h [Gb3 Bb3 Eb4]:h | [F3 Bb3 D4]:w"},
        {"instrument": "lead", "seq": "r:8 D5:8 D5:8 C5:8 D5:q F5:q | C5:q. A4:8 F4:h | r:8 G4:8 Bb4:8 D5:8 F5:q. D5:8 | D5:h. r:q | r:8 Eb5:8 Eb5:8 D5:8 C5:q Bb4:q | Bb4:h A4:h | Gb4:q. F4:8 Eb4:q Gb4:q | F4:8 G4:8 A4:8 Bb4:8~ Bb4:h"}
      ]
    },
    "progression": ["Imaj7", "V", "vi7", "IVmaj7", "ii7", "V7", "iv", "I"]
  }
}
```

```exercise
{
  "id": "w52l2-detail",
  "type": "listen",
  "title": "Pass 4, the details",
  "spec": {
    "example": {
      "title": "Graduation song — keys and bass",
      "bpm": 80,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "bass", "seq": "Bb1:h. r:q | A1:h. r:q | G1:h. r:q | Eb2:h. r:q | C2:h. r:q | F2:h. r:q | Eb2:h. r:q | Bb1:h. r:q"},
        {"instrument": "epiano", "seq": "[F3 A3 Bb3 D4]:h [F3 A3 Bb3 D4]:h | [F3 A3 C4]:h [F3 A3 C4]:h | [F3 Bb3 D4]:h [F3 Bb3 D4]:h | [G3 Bb3 D4]:h [G3 Bb3 D4]:h | [G3 Bb3 Eb4]:h [G3 Bb3 Eb4]:h | [F3 Bb3 Eb4]:h [F3 A3 Eb4]:h | [Gb3 Bb3 Eb4]:h [Gb3 Bb3 Eb4]:h | [F3 Bb3 D4]:w"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Bar 2: which chord symbol?", "choices": ["Am", "F/A", "F", "Dm/A"], "answer": 1, "explain": "F/A — V6 in B♭: an F triad over its third, A."},
      {"q": "Bar 7: which chord?", "choices": ["IV (E♭)", "iv (E♭m)", "♭VI (G♭)", "V/V (C7)"], "answer": 1, "explain": "E♭m, iv — borrowed from B♭ minor; compare the major IV in bar 4."}
    ]
  }
}
```

```exercise
{
  "id": "w52l2-melody",
  "type": "ear-melody",
  "title": "Pass 5: bars 5–8 of the melody",
  "instructions": "Fifteen notes (a tied note counts once). Answer as degrees of B♭; all twelve degree buttons are available.",
  "srs": false,
  "spec": {
    "key": "Bb",
    "degrees": [1, 2, 3, 4, 5, 6, 7],
    "chromatic": true,
    "answer": "degrees",
    "example": {
      "title": "Bars 5–8",
      "bpm": 80,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "epiano", "seq": "[G3 Bb3 Eb4]:h [G3 Bb3 Eb4]:h | [F3 Bb3 Eb4]:h [F3 A3 Eb4]:h | [Gb3 Bb3 Eb4]:h [Gb3 Bb3 Eb4]:h | [F3 Bb3 D4]:w"},
        {"instrument": "lead", "seq": "r:8 Eb5:8 Eb5:8 D5:8 C5:q Bb4:q | Bb4:h A4:h | Gb4:q. F4:8 Eb4:q Gb4:q | F4:8 G4:8 A4:8 Bb4:8~ Bb4:h"}
      ]
    },
    "track": 1
  }
}
```

```exercise
{
  "id": "w52l2-rebuild",
  "type": "daw-task",
  "title": "Rebuild the bass and chords",
  "spec": {
    "template": {"bpm": 92, "key": "Bb", "tracks": [{"instrument": "bass", "seq": ""}, {"instrument": "epiano", "seq": ""}]},
    "task": "From your answers, rebuild the 8 bars: the bass on track 1, the electric-piano chords on track 2 (with the inversion, the sus resolution and the borrowed chord you found). Voice the keys as you like — the original leaves some roots to the bass. The checks compare the bass with the original and its roots with the progression, and look for the borrowed chord in the keys. Then reveal and A/B.",
    "checks": [
      {"kind": "bars", "min": 8, "max": 8},
      {
        "kind": "matches-reference",
        "reference": {
          "bpm": 92,
          "tracks": [
            {"instrument": "bass", "seq": "Bb1:h. r:q | A1:h. r:q | G1:h. r:q | Eb2:h. r:q | C2:h. r:q | F2:h. r:q | Eb2:h. r:q | Bb1:h. r:q"}
          ]
        },
        "track": 0,
        "refTrack": 0,
        "minSimilarity": 0.75,
        "octave": "any"
      },
      {
        "kind": "plays-progression",
        "progression": ["I", "V", "vi", "IV", "ii", "V", "iv", "I"],
        "barsPerChord": 1,
        "mode": "roots",
        "minRatio": 0.75,
        "track": 0
      },
      {"kind": "uses-chord", "roman": "iv", "min": 1, "track": 1}
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```

## Ear: one last bass round

Same as pass 3: lowest thump only, search low keys with higher/lower, check your note under the chord. The *How to do
it* box under the drill shows the exact method for your current rung.

```ladder
{"skill": "roots", "unlocks": 15, "intro": "One last bass round at your own rung."}
```

## Between lessons

Pick one pop song you like and do pass 1 and pass 3 on its chorus only: home note and the bass notes. Bring the notes
to lesson 3.
