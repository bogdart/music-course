---
id: w48-l2-syncopated-groove-by-ear
title: "Transcribe 3: R&B — Syncopated Groove by Ear"
week: 48
order: 2
phase: p5
duration_min: 45
goals:
  - Place syncopated kicks, bass notes and chord stabs on the 16th grid
  - Hear which bass notes share the kick and which fall between
  - Rebuild the Velvet drums and bass in the DAW and check them against the original
prerequisites: [w48-l1-extended-harmony-by-ear]
tags: [transcription, rnb, groove, rhythm, syncopation, daw]
---

# Transcribe 3: R&B — Syncopated Groove by Ear

What makes *Velvet* feel like R&B rather than a jazz ballad is the groove. R&B lives on the 16th grid, with notes landing
just before or just after the beat.

## The pocket, one layer per pass

The [[pocket]] is how kick, bass and snare lock together. In R&B some notes land a 16th or an eighth *before* the beat
(the pushed kick from week 45), and the bass shares some kicks but not all. Transcribe it like this:

1. **Grid.** Loop the slowed rhythm section and count "1 e & a 2 e & a…" out loud — four syllables per beat. Tap your
   foot on the numbers only. *Check:* the snare should land on your "2" and "4".
2. **Kick.** Listen only for the low thump. For each kick, say which syllable it falls on. Write it down as, e.g.,
   "1, a(1), &3". *Check:* tap your written kicks along with the loop; if a tap comes late or early, move it one
   syllable.
3. **Bass.** For each bass note ask one question: *with a kick, or between kicks?* Mark it on the same list.
4. **Keys.** Where is the chord change actually *heard* — on the "1", or a little before? Count it; write it there.

Stuck? Slow down (the example is already slowed), loop one bar, and tap your guess against it until it lines up.

Real records add **swing** (16ths played long–short) and **ghost notes** (very quiet snare taps between the
backbeats). When you hear them in a reference, note them in words on your form map.

```exercise
{
  "id": "w48l2-listen",
  "type": "listen",
  "title": "Kick, bass, keys",
  "spec": {
    "example": {
      "title": "Velvet — rhythm section",
      "bpm": 72,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q"},
        {"instrument": "drums", "seq": "r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q"},
        {"instrument": "bass", "seq": "G2:q. G2:16 r:16 r:8 D3:8 F2:q | C2:q. C2:16 r:16 r:8 G2:8 Bb2:q | F2:q. F2:16 r:16 r:8 C3:8 E2:q | D2:q. D2:16 r:16 r:8 A2:8 F#2:q"},
        {"instrument": "epiano", "seq": "[Bb3 D4 F4 A4]:h. r:8 [Bb3 E4 A4 D5]:8 | [Bb3 E4 A4 D5]:h. r:8 [A3 E4 G4 C5]:8 | [A3 E4 G4 C5]:h. r:8 [C4 E4 F4 A4]:8 | [C4 E4 F4 A4]:h. r:8 [Bb3 D4 F4 A4]:8"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Where is the second kick of each bar?", "choices": ["Beat 2", "The last 16th before beat 2", "The 'and' of 2", "Beat 3"], "answer": 1, "explain": "The last 16th before beat 2: pushed into the snare. The third kick falls on the 'and' of 3."},
      {"q": "When do the keys change chord?", "choices": ["Exactly on beat 1", "An eighth early, on the 'and' of 4", "On beat 3", "On beat 2"], "answer": 1, "explain": "On the 'and' of 4: each new chord is anticipated by an eighth and held across the bar line."},
      {"q": "The last bass note of bar 4 is outside F major. What is it doing?", "choices": ["A chromatic approach into the next loop's first note", "The root of a new chord", "A wrong note", "Doubling the melody"], "answer": 0, "explain": "It's F#, a half step below the G that starts the loop again."}
    ]
  }
}
```

```exercise
{
  "id": "w48l2-tap",
  "type": "rhythm-tap",
  "title": "Tap the bass rhythm from memory",
  "instructions": "No notation: tap the rhythm of one bar of the bass line, twice. Press Listen first to hear it again.",
  "spec": {
    "bpm": 72,
    "timeSig": "4/4",
    "seq": "x:q. x:16 r:16 r:8 x:8 x:q | x:q. x:16 r:16 r:8 x:8 x:q",
    "showNotation": false,
    "countIn": 1,
    "loops": 2
  }
}
```

```exercise
{
  "id": "w48l2-bass",
  "type": "ear-bass",
  "title": "The bass line, bars 1–2",
  "instructions": "Eight notes, slowed, bass alone. Play every note, including the repeated ones.",
  "srs": false,
  "spec": {
    "key": "F",
    "chords": ["ii", "V", "I", "vi"],
    "answer": "play",
    "example": {
      "title": "Velvet bass, bars 1–2",
      "bpm": 60,
      "timeSig": "4/4",
      "tracks": [{"instrument": "bass", "seq": "G2:q. G2:16 r:16 r:8 D3:8 F2:q | C2:q. C2:16 r:16 r:8 G2:8 Bb2:q"}]
    }
  }
}
```

## Ear: rhythm at your level

Routine: keep your foot on the beat, count the subdivisions out loud, and place each note on a syllable. The *How to do
it* box under the drill shows the exact method for your current rung.

```ladder
{"skill": "rhythm", "unlocks": 16, "intro": "Rhythm and drum grids at your own rung."}
```

## Rebuild the pocket

1. Hats first (steady 16ths, open hat at the end of each bar), then snare on 2 and 4.
2. Kick from your written list. *Check:* play yours against the original; if the groove leans differently, one kick is
   on the wrong 16th — solo drums in both and compare bar 1.
3. Bass from your notes and your with/between list. *Check:* mute the kick and listen to bass alone against the original.

```exercise
{
  "id": "w48l2-daw",
  "type": "daw-task",
  "title": "Rebuild the Velvet pocket",
  "spec": {
    "template": {
      "bpm": 84,
      "key": "F",
      "tracks": [
        {"instrument": "drums", "seq": ""},
        {"instrument": "bass", "seq": ""},
        {"instrument": "epiano", "seq": "[Bb3 D4 F4 A4]:h. r:8 [Bb3 E4 A4 D5]:8 | [Bb3 E4 A4 D5]:h. r:8 [A3 E4 G4 C5]:8 | [A3 E4 G4 C5]:h. r:8 [C4 E4 F4 A4]:8 | [C4 E4 F4 A4]:h. r:8 [Bb3 D4 F4 A4]:8"}
      ]
    },
    "task": "The chords are given. From your transcription, program the drums (pushed kick, snare on 2 and 4, 16th hats with an open hat at the end of each bar) and the bass line for 4 bars. The checks compare both with the original.",
    "checks": [
      {"kind": "bars", "min": 4, "max": 4},
      {
        "kind": "drum-pattern",
        "requires": ["kick", "snare", "hihat"],
        "kickOnBeats": [1],
        "snareOnBeats": [2, 4],
        "track": 0
      },
      {
        "kind": "matches-reference",
        "reference": {
          "bpm": 84,
          "tracks": [
            {"instrument": "drums", "seq": "[kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 ohat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 ohat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 ohat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 ohat:16"}
          ]
        },
        "track": 0,
        "refTrack": 0,
        "minSimilarity": 0.75
      },
      {
        "kind": "matches-reference",
        "reference": {
          "bpm": 84,
          "tracks": [
            {"instrument": "bass", "seq": "G2:q. G2:16 r:16 r:8 D3:8 F2:q | C2:q. C2:16 r:16 r:8 G2:8 Bb2:q | F2:q. F2:16 r:16 r:8 C3:8 E2:q | D2:q. D2:16 r:16 r:8 A2:8 F#2:q"}
          ]
        },
        "track": 1,
        "refTrack": 0,
        "minSimilarity": 0.75,
        "octave": "any"
      }
    ],
    "minBars": 4,
    "maxBars": 4
  }
}
```

## Between lessons

Pick an R&B song and write only its kick on the "1 e & a" grid for one bar. Tap it along with the record to check.
