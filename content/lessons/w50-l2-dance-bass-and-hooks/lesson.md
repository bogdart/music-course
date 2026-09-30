---
id: w50-l2-dance-bass-and-hooks
title: "Transcribe 2: Dance Pop — Bass and Hooks"
week: 50
order: 2
phase: p5
duration_min: 45
goals:
  - Identify three dance bass patterns — offbeat, octave, sustained — by where they sit against the kick
  - Dictate a short repetitive synth hook by transcribing bar 1 and listening for changes
  - Rebuild the Neon Hours drop in the DAW and check it against the original
prerequisites: [w50-l1-dance-form-and-chords]
tags: [transcription, dance-pop, bass, hook, daw]
---

# Transcribe 2: Dance Pop — Bass and Hooks

In dance pop the bass and the hook are the song's personality. You found the notes last lesson; today you hear how the
bass *moves* and dictate the hook of *Neon Hours*.

## Three dance bass patterns

Once you know the notes, dance bass is mostly a question of rhythm against the kick:

1. **Offbeat** — a note on every "and", never on the beat. The kick owns the beat, the bass fills the gap: the pumping
   house/disco see-saw.
2. **Octave** — steady eighths jumping between a note and its octave. Disco, synth-pop. (Honest note: the jump can sound
   like two different notes — it is one note name in two registers.)
3. **Sustained** — long notes under a verse or build, leaving space.

How to tell them apart, per clip:

1. Tap your foot on the kick (it hits every beat here).
2. Now listen only to the bass: does it land *with* your foot, *between* your taps, or *both*?
3. If it lands on both, play the bass note on your keyboard and the same note 12 keys up, alternating — if that matches
   the clip, it's the octave pattern. If it holds one note for the whole bar, it's sustained.

*Check:* tap on the "and"s yourself along with a clip; if your taps and the bass coincide, it's offbeat.

```exercise
{
  "id": "w47l2-patterns",
  "type": "listen",
  "title": "Which pattern?",
  "spec": {
    "examples": [
      {
        "title": "Clip 1",
        "bpm": 122,
        "timeSig": "4/4",
        "tracks": [
          {"instrument": "drums", "seq": "kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q"},
          {"instrument": "bass", "seq": "G1:8 G2:8 G1:8 G2:8 G1:8 G2:8 G1:8 G2:8 | Eb1:8 Eb2:8 Eb1:8 Eb2:8 Eb1:8 Eb2:8 Eb1:8 Eb2:8"}
        ],
        "show": ["staff", "pianoroll"],
        "hidden": true,
        "loop": true
      },
      {
        "title": "Clip 2",
        "bpm": 122,
        "timeSig": "4/4",
        "tracks": [
          {"instrument": "drums", "seq": "kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q"},
          {"instrument": "bass", "seq": "G1:w | Eb1:w"}
        ],
        "show": ["staff", "pianoroll"],
        "hidden": true,
        "loop": true
      },
      {
        "title": "Clip 3",
        "bpm": 122,
        "timeSig": "4/4",
        "tracks": [
          {"instrument": "drums", "seq": "kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q"},
          {"instrument": "bass", "seq": "r:8 G2:8 r:8 G2:8 r:8 G2:8 r:8 G2:8 | r:8 Eb2:8 r:8 Eb2:8 r:8 Eb2:8 r:8 Eb2:8"}
        ],
        "show": ["staff", "pianoroll"],
        "hidden": true,
        "loop": true
      }
    ],
    "questions": [
      {"q": "Clip 1 is…", "choices": ["Offbeat", "Octave", "Sustained"], "answer": 1, "explain": "Octave: eighths on and between the kicks, jumping between G1 and G2."},
      {"q": "Clip 2 is…", "choices": ["Offbeat", "Octave", "Sustained"], "answer": 2},
      {"q": "Clip 3 is…", "choices": ["Offbeat", "Octave", "Sustained"], "answer": 0, "explain": "Offbeat: only between the kicks."},
      {"q": "Which pattern did the Neon Hours drop use?", "choices": ["Offbeat", "Octave", "Sustained"], "answer": 0}
    ]
  }
}
```

```exercise
{
  "id": "w47l2-tap",
  "type": "rhythm-tap",
  "title": "Tap the offbeat bass",
  "instructions": "Tap only on the 'and's. The metronome clicks the beats — stay between them.",
  "spec": {
    "bpm": 110,
    "timeSig": "4/4",
    "seq": "r:8 x:8 r:8 x:8 r:8 x:8 r:8 x:8 | r:8 x:8 r:8 x:8 r:8 x:8 r:8 x:8",
    "showNotation": true,
    "countIn": 1,
    "loops": 2
  }
}
```

## Hooks are small

A dance hook is short (one or two bars), built from a handful of notes (often a pentatonic scale) and repeated with a
small change at the end. That makes it easy to dictate *if* you use the repetition: transcribe the first bars, then
listen only for what's different.

**Dictating the hook, step by step:**

1. Find the first note: play a key, ask "higher or lower?", move until it merges. *Check:* play it along with the loop's
   first note.
2. For each next note ask: same, up or down? Step or jump? Play it and compare. Chunk it: the first five notes, replay,
   then the next five.
3. Rhythm last: tap along and notice where the gaps fall.

Stuck on one note? Loop, play your two best guesses back to back against it, pick one and move on — a wrong note is
fixed faster at the reveal than by staring at it.

```exercise
{
  "id": "w47l2-hook",
  "type": "ear-melody",
  "title": "Hook, bars 1–2",
  "instructions": "Ten notes, slowed down, over the pad. The rests are part of the rhythm, not played.",
  "srs": false,
  "spec": {
    "key": "Gm",
    "degrees": [1, 2, 3, 4, 5, 6, 7],
    "answer": "play",
    "example": {
      "title": "Hook bars 1–2",
      "bpm": 90,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "pad", "seq": "[G3 Bb3 D4]:w | [G3 Bb3 Eb4]:w"},
        {"instrument": "lead", "seq": "D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 D5:8 r:8 C5:8 r:8 Bb4:8 G4:q"}
      ]
    },
    "track": 1
  }
}
```

```exercise
{
  "id": "w47l2-rest",
  "type": "listen",
  "title": "Bars 3–4: what changes?",
  "spec": {
    "example": {
      "title": "Hook, all four bars",
      "bpm": 100,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "pad", "seq": "[G3 Bb3 D4]:w | [G3 Bb3 Eb4]:w | [F3 Bb3 D4]:w | [F3 A3 C4]:w"},
        {"instrument": "lead", "seq": "D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 D5:8 r:8 C5:8 r:8 Bb4:8 G4:q | D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 G5:8 r:8 F5:8 r:8 D5:8 C5:q"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Which bar is an exact repeat of bar 1?", "choices": ["Bar 2", "Bar 3", "Bar 4", "None"], "answer": 1},
      {"q": "What does bar 4 change compared with bar 2?", "choices": ["It climbs to the top note before falling", "It goes silent", "It changes key", "It uses triplets"], "answer": 0, "explain": "Bar 4 goes F – G – F – D – C: up to G at the top, then falls to C."},
      {"q": "Which rhythm feature repeats in every bar?", "choices": ["Rests on beats 2 and 3, so those notes land on the 'and's", "Only quarter notes", "Triplets", "A whole note"], "answer": 0, "explain": "Each bar: note, note on the 'and' of 1, rest on beat 2, note on the 'and' of 2, rest on beat 3, note on the 'and' of 3, quarter on beat 4."}
    ]
  }
}
```

## Ear: melody at your level

The same routine as the hook: first note by searching, then up/down and step/jump for each next note, in short chunks.
The *How to do it* box under the drill shows the exact method for your current rung.

```ladder
{"skill": "melody", "unlocks": 24, "intro": "Melody at your own rung."}
```

## Rebuild the drop

1. Drums first: kick on every beat, claps on 2 and 4, open hats on the "and"s. Loop it and compare with section C of
   last lesson — the pulse should feel the same.
2. Bass: the offbeat pattern on the four notes you found. Play the original, then yours; if a bar sounds wrong, solo that
   bar in both and compare.
3. Pad on the offbeats, then the hook you dictated.

*Check:* play your version and the original back to back. If the groove matches but something feels thin, count the
layers — one is probably missing.

```exercise
{
  "id": "w47l2-daw",
  "type": "daw-task",
  "title": "Rebuild the drop",
  "spec": {
    "template": {
      "bpm": 122,
      "key": "Gm",
      "tracks": [
        {"instrument": "drums", "seq": ""},
        {"instrument": "bass", "seq": ""},
        {"instrument": "pad", "seq": ""},
        {"instrument": "lead", "seq": ""}
      ]
    },
    "task": "Rebuild the 4-bar Neon Hours drop from your transcription: kick on every beat, claps on 2 and 4, open hats on the offbeats; the offbeat bass on the four notes you found last lesson (compare with that lesson's reveal); an offbeat pad; the hook. The checks compare drums, bass and hook with the original.",
    "checks": [
      {"kind": "bars", "min": 4, "max": 4},
      {"kind": "has-tracks", "instruments": ["drums", "bass", "pad", "lead"]},
      {"kind": "drum-pattern", "requires": ["kick", "clap", "ohat"], "kickOnBeats": [1, 2, 3, 4], "track": 0},
      {
        "kind": "matches-reference",
        "reference": {
          "bpm": 122,
          "tracks": [
            {"instrument": "bass", "seq": "r:8 G2:8 r:8 G2:8 r:8 G2:8 r:8 G2:8 | r:8 Eb2:8 r:8 Eb2:8 r:8 Eb2:8 r:8 Eb2:8 | r:8 Bb1:8 r:8 Bb1:8 r:8 Bb1:8 r:8 Bb1:8 | r:8 F2:8 r:8 F2:8 r:8 F2:8 r:8 F2:8"}
          ]
        },
        "track": 1,
        "refTrack": 0,
        "minSimilarity": 0.75,
        "octave": "any"
      },
      {
        "kind": "matches-reference",
        "reference": {
          "bpm": 122,
          "tracks": [
            {"instrument": "lead", "seq": "D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 D5:8 r:8 C5:8 r:8 Bb4:8 G4:q | D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 G5:8 r:8 F5:8 r:8 D5:8 C5:q"}
          ]
        },
        "track": 3,
        "refTrack": 0,
        "minSimilarity": 0.7,
        "octave": "any"
      }
    ],
    "minBars": 4,
    "maxBars": 4
  }
}
```

```exercise
{
  "id": "w47l1-play",
  "type": "play-chord",
  "title": "After the rebuild: the loop, pumping",
  "instructions": "Neon Hours' loop from last lesson: play each chord on the offbeats (the 'and's), like the drop's pad.",
  "spec": {"chords": ["Gm", "Eb", "Bb", "F"], "inversion": "any", "sequence": true, "bpm": 100}
}
```

## Between lessons

In one dance track you know, tap the kick with your foot and decide which bass pattern it uses. Then find the first note
of its hook on your keyboard.
