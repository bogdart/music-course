---
id: w40-l1-polish-song-one
title: Portfolio — Polish Song One
week: 40
order: 1
phase: p4
duration_min: 50
goals:
  - Choose three pieces from Phase 4 to finish as a portfolio
  - Run an arrangement pass (energy map, clutter, register clashes) on song one
  - Run a basic mix pass (levels, pan, note lengths) and bounce a final version
prerequisites: [w39-l3-toplines-over-beats-daw, w26-l1-capstone-song-one]
tags: [portfolio, arrangement, mixing, daw]
---

# Portfolio — Polish Song One

Fourteen weeks of Phase 4 have given you a drawer full of sketches: a neo-soul loop, a jazz trio arrangement, reharmonisations, a counter-melody chorus, an EDM build and drop, a 7/8 groove, six genre sketches, a film cue, a developed motif and three toplines. This week you pick **three** and make them finished, [[portfolio]]-ready pieces.

## Choosing

Pick pieces that are **different** from each other — say one song-form piece (pop/rock/folk/topline), one groove-based piece (EDM/house/lo-fi/hip-hop), and one "composed" piece (film cue, developed motif or jazz). A varied portfolio shows range. Among candidates, pick the ones you still enjoy hearing: you're about to listen to them many times.

## Pass 1: arrangement

Loop the whole piece and answer honestly:

1. **Energy map.** Sketch the energy of each 8-bar block from 1 to 5. Is there a clear rise to a peak and a release? If two neighbouring sections have the same energy, change one (add/remove a layer, change register, change drum pattern).
2. **Clutter.** Solo each track. Does every one have a job? If two tracks play the same register and rhythm, mute one or move it an octave.
3. **Register clashes.** Melody and chords fighting in the same octave? Drop the chords, or voice them lower.
4. **Transitions.** Does every section change have something that announces it — a fill, a pickup, a gap?

Hear point 3 in action — the same melody and chords, first fighting, then separated:

```example
{
  "title": "Register clash (bars 1–2) fixed by dropping the chords an octave (bars 3–4)",
  "bpm": 90,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "lead",
      "seq": "E4:q G4:q A4:q G4:q | F4:h E4:h | E4:q G4:q A4:q G4:q | F4:h E4:h |"
    },
    {
      "instrument": "piano",
      "seq": "[C4 E4 G4]:w | [F4 A4 C5]:w | [C3 E3 G3]:w | [F3 A3 C4]:w |"
    }
  ],
  "show": [
    "pianoroll"
  ]
}
```

## Pass 2: mix basics

- **Levels:** the melody (or the main hook) should be clearly the loudest idea; kick and bass solid; pads underneath.
- **Pan:** keep kick, bass and lead centred; spread chords, counter-lines and percussion left and right.
- **Note lengths:** shorten chord notes that ring into the next chord; lengthen pad notes that stop abruptly.

Then listen once on different speakers or headphones, and write down three things you'd still change.

## Drills

```exercise
{
  "id": "e1-ear-chords",
  "type": "ear-chord",
  "title": "Warm-up: the colours in your songs",
  "count": 10,
  "passScore": 0.8,
  "spec": {
    "qualities": [
      "maj7",
      "min7",
      "dom7",
      "m7b5",
      "sus4"
    ],
    "inversions": [
      0
    ],
    "voicing": "mixed",
    "range": [
      "C3",
      "C5"
    ]
  }
}
```

```exercise
{
  "id": "e2-ear-prog",
  "type": "ear-progression",
  "title": "Warm-up: progressions with borrowed chords and V7",
  "count": 8,
  "passScore": 0.75,
  "spec": {
    "key": "random",
    "mode": "major",
    "length": 4,
    "chords": [
      "I",
      "ii",
      "IV",
      "iv",
      "V7",
      "vi",
      "bVI",
      "bVII"
    ],
    "style": "pad-bass"
  }
}
```

```exercise
{
  "id": "e3-play-voicings",
  "type": "play-chord",
  "title": "Warm-up: voicing drill",
  "count": 8,
  "passScore": 0.8,
  "spec": {
    "chords": [
      "Cmaj9",
      "Am9",
      "Dm9",
      "G9",
      "Fmaj7",
      "Bbmaj7",
      "Ebmaj7",
      "Abmaj7"
    ],
    "inversion": "any",
    "sequence": true,
    "bpm": 60
  }
}
```

```exercise
{
  "id": "e4-daw-polish-one",
  "type": "daw-task",
  "title": "Song one: final version",
  "instructions": "Open your chosen piece in the DAW, apply both passes, then rebuild or paste the finished version here so the checks can run (at least 32 bars, 4+ tracks). Name the project '<title> – final'.",
  "spec": {
    "template": {
      "bpm": 100,
      "key": "C",
      "timeSig": "4/4",
      "tracks": [
        {
          "instrument": "lead",
          "seq": ""
        },
        {
          "instrument": "piano",
          "seq": ""
        },
        {
          "instrument": "bass",
          "seq": ""
        },
        {
          "instrument": "drums",
          "seq": ""
        },
        {
          "instrument": "pad",
          "seq": ""
        }
      ]
    },
    "task": "Finished, polished version of portfolio piece one.",
    "checks": [
      {
        "kind": "bars",
        "min": 32,
        "max": 128
      },
      {
        "kind": "note-count",
        "min": 24,
        "track": 0
      },
      {
        "kind": "custom",
        "id": "four-tracks",
        "note": "Self-check: at least four tracks, each with a distinct job."
      },
      {
        "kind": "custom",
        "id": "energy-map",
        "note": "Self-check: energy map rises to a clear peak and releases."
      },
      {
        "kind": "custom",
        "id": "transitions",
        "note": "Self-check: every section change has a fill, pickup or gap."
      },
      {
        "kind": "custom",
        "id": "mix",
        "note": "Self-check: hook is loudest; kick/bass/lead centred; chords and extras panned."
      }
    ],
    "minBars": 32,
    "maxBars": 128
  }
}
```

```exercise
{
  "id": "e5-reflect",
  "type": "reflect",
  "title": "Before and after",
  "spec": {
    "prompt": "List the three biggest changes you made to song one and why. What would a listener notice first?",
    "minWords": 30
  }
}
```
