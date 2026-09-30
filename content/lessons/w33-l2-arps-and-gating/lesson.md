---
id: w33-l2-arps-and-gating
title: Arpeggiators and Gating
week: 33
order: 2
phase: p4
duration_min: 45
goals:
  - Turn chords into 16th-note arpeggio patterns (up, down, up-down, broken)
  - Fake a sidechain "pump" by gating pad chords around the kick
  - Build an 8-bar arp + gated pad + four-on-the-floor loop
prerequisites: [w33-l1-synthesis-basics]
tags: [production, electronic, arpeggio, groove]
---

# Arpeggiators and Gating

Electronic music turns static chords into *motion*. Two tricks do most of the work: arpeggios and gating.

## Arpeggios

An [[arpeggiator]] plays the notes of a held chord one at a time in a repeating pattern. Our DAW has no arp button, so we write the pattern by hand — which is better practice anyway, because you choose every note.

Common patterns over a 3-note chord plus its octave: **up** (1-3-5-8), **down** (8-5-3-1), **up-down** (1-3-5-8-5-3), **broken** (1-5-3-8). In 16th notes at 124 bpm they shimmer; on a pluck they sparkle.

```example
{
  "title": "Up-pattern arp in 16ths on pluck: Am \u2013 F \u2013 C \u2013 G",
  "bpm": 124,
  "timeSig": "4/4",
  "key": "Am",
  "tracks": [
    {
      "instrument": "pluck",
      "seq": "A3:16 C4:16 E4:16 A4:16 A3:16 C4:16 E4:16 A4:16 A3:16 C4:16 E4:16 A4:16 A3:16 C4:16 E4:16 A4:16 | F3:16 A3:16 C4:16 F4:16 F3:16 A3:16 C4:16 F4:16 F3:16 A3:16 C4:16 F4:16 F3:16 A3:16 C4:16 F4:16 | G3:16 C4:16 E4:16 G4:16 G3:16 C4:16 E4:16 G4:16 G3:16 C4:16 E4:16 G4:16 G3:16 C4:16 E4:16 G4:16 | G3:16 B3:16 D4:16 G4:16 G3:16 B3:16 D4:16 G4:16 G3:16 B3:16 D4:16 G4:16 G3:16 B3:16 D4:16 G4:16 |"
    },
    {
      "instrument": "bass",
      "seq": "A1:w | F1:w | C2:w | G1:w |"
    }
  ],
  "show": [
    "pianoroll"
  ],
  "loop": true
}
```

## Gating and the sidechain "pump"

In dance music the kick drum is king. Producers use *sidechain compression* so that every time the kick hits, the pad ducks out of the way and swells back — the famous pumping sound. We can’t compress yet, but we can *gate* the pad ([[gating]]): leave a tiny rest exactly where the kick lands and let the chord come in just after.

Pattern per beat: a 16th rest (the kick's spot), then a dotted-8th chord. Four times a bar.

```example
{
  "title": "Gated pad pumping against a four-on-the-floor kick",
  "bpm": 124,
  "timeSig": "4/4",
  "key": "Am",
  "tracks": [
    {
      "instrument": "pad",
      "seq": "r:16 [A3 C4 E4]:8. r:16 [A3 C4 E4]:8. r:16 [A3 C4 E4]:8. r:16 [A3 C4 E4]:8. | r:16 [A3 C4 F4]:8. r:16 [A3 C4 F4]:8. r:16 [A3 C4 F4]:8. r:16 [A3 C4 F4]:8. | r:16 [G3 C4 E4]:8. r:16 [G3 C4 E4]:8. r:16 [G3 C4 E4]:8. r:16 [G3 C4 E4]:8. | r:16 [G3 B3 D4]:8. r:16 [G3 B3 D4]:8. r:16 [G3 B3 D4]:8. r:16 [G3 B3 D4]:8. |"
    },
    {
      "instrument": "drums",
      "seq": "kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 |"
    }
  ],
  "show": [
    "pianoroll"
  ],
  "loop": true
}
```

(Our note format has no velocity marks, so "ducking" is all-or-nothing here — a rest, not a dip.)

### Try it

Here is the same bar twice: first the pad simply held, then gated. The kick is identical.

```example
{
  "title": "Held pad (bar 1), then gated pad (bar 2), same kick",
  "bpm": 124, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "pad", "seq": "[A3 C4 E4]:w | r:16 [A3 C4 E4]:8. r:16 [A3 C4 E4]:8. r:16 [A3 C4 E4]:8. r:16 [A3 C4 E4]:8. |" },
    { "instrument": "drums", "seq": "kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q |" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

1. Loop it and nod on every kick. In bar 1, does the kick sit *on top of* the pad or *in a hole*?
2. Listen only to the pad in bar 2: does it breathe in and out?

**Check:** in bar 2 the pad pulses four times a bar and each kick lands in a small hole — the kick sounds a little punchier there.

**If you can't hear it yet:** tap the table on each pad re-entry in bar 2 (just after each kick). If your taps fall slightly *after* your nods, you are feeling the pump — the ear notices the rhythm before it notices the "clarity".

## Drills

```exercise
{
  "id": "e1-play-arp",
  "type": "play-melody",
  "title": "Play the up-arp (Am and F)",
  "instructions": "Right hand. Keep your hand in one position per chord; the pinky takes the octave.",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "bpm": 80,
    "timeSig": "4/4",
    "key": "Am",
    "seq": "A3:16 C4:16 E4:16 A4:16 A3:16 C4:16 E4:16 A4:16 A3:16 C4:16 E4:16 A4:16 A3:16 C4:16 E4:16 A4:16 | F3:16 A3:16 C4:16 F4:16 F3:16 A3:16 C4:16 F4:16 F3:16 A3:16 C4:16 F4:16 F3:16 A3:16 C4:16 F4:16 |",
    "showStaff": false,
    "showKeyboard": true,
    "countIn": 1,
    "backing": {
      "instrument": "pad",
      "seq": "[A2 E3]:w | [F2 C3]:w |"
    }
  }
}
```

```exercise
{
  "id": "e2-build-arp-chords",
  "type": "build-chord",
  "title": "Chords you will arpeggiate",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "chords": [
      "Am",
      "F",
      "C",
      "G",
      "Asus2",
      "Fmaj7"
    ],
    "root": "given",
    "prompt": "symbol",
    "key": "Am"
  }
}
```

```exercise
{
  "id": "e3-tap-gate",
  "type": "rhythm-tap",
  "title": "Tap the gate pattern",
  "instructions": "Tap only the chord hits \u2014 the off-16ths after each beat.",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "bpm": 100,
    "timeSig": "4/4",
    "seq": "r:16 x:8. r:16 x:8. r:16 x:8. r:16 x:8. |",
    "showNotation": true,
    "countIn": 1,
    "loops": 4
  }
}
```

**Building the loop:**

1. **Drums first:** one bar of kick on every beat, clap on 2 and 4, open hat on the "ands"; copy to all 8 bars. Loop it with the bass.
2. **Pad:** one bar of the gated pattern (16th rest, dotted 8th chord, ×4) on Am; copy it, then change the notes bar by bar.
3. **Pluck:** pick one pattern (up-down or broken) and write it for Am only. Copy it to the other chords by moving each note to the matching chord tone (root, 3rd, 5th, octave).

**Judge it by ear:** mute the pad for a pass, then unmute — the loop should feel like it gained a pulse, not just more notes. If the arp and pad sound blurred together, move the arp up an octave. **If you're stuck:** use the up pattern from the example and change only one thing (the order of the four notes).

```exercise
{
  "id": "e4-daw-arp-gate",
  "type": "daw-task",
  "title": "Arp + gated pad + kick",
  "instructions": "8 bars on Am\u2013F\u2013C\u2013G (each chord one bar, twice). Pluck: your own 16th-note arp pattern (try up-down or broken). Pad: gated chords with a 16th rest on every beat. Drums: kick on every beat, clap on 2 and 4, open hat on the off-beats. The bass is ready. About 25 minutes; copy and paste repeated bars.",
  "spec": {
    "template": {
      "bpm": 124,
      "key": "Am",
      "timeSig": "4/4",
      "tracks": [
        {
          "instrument": "pluck",
          "seq": ""
        },
        {
          "instrument": "pad",
          "seq": ""
        },
        {
          "instrument": "drums",
          "seq": ""
        },
        {
          "instrument": "bass",
          "seq": "A1:w | F1:w | C2:w | G1:w | A1:w | F1:w | C2:w | G1:w |"
        }
      ]
    },
    "task": "8-bar loop with a hand-written arp, a gated pad and a four-on-the-floor beat.",
    "checks": [
      {
        "kind": "has-tracks",
        "instruments": [
          "pluck",
          "pad",
          "drums",
          "bass"
        ]
      },
      {
        "kind": "bars",
        "min": 8,
        "max": 8
      },
      {
        "kind": "uses-rhythm",
        "values": [
          "16"
        ],
        "minDistinct": 1,
        "track": 0
      },
      {
        "kind": "note-count",
        "min": 96,
        "track": 0
      },
      {
        "kind": "in-key",
        "key": "A",
        "scale": "natural-minor",
        "allowPassing": false,
        "track": 0
      },
      {
        "kind": "drum-pattern",
        "requires": [
          "kick",
          "clap"
        ],
        "kickOnBeats": [
          1,
          2,
          3,
          4
        ],
        "track": 2
      },
      {
        "kind": "custom",
        "id": "gated-pad",
        "note": "Self-check: the pad has a short rest on each beat where the kick hits."
      }
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```

## Ear review

**Method** (see each drill's *How to do it* box): for drums, one voice per pass — first only the low kick, then the snare or clap, then the ticking hi-hat — replaying as often as you need. For progressions, bass first, colour second; borrowed chords sound like a sudden darker or brighter turn. Both drills run at your current rungs.

```ladder
{ "skill": "rhythm", "unlocks": 14, "intro": "Drum dictation at your level: kick, snare (or clap) and hi-hat on a grid." }
```

```ladder
{ "skill": "progressions", "unlocks": 19, "intro": "Progressions at your level: dance loops are built from these same chords." }
```

## Between lessons

Play the up-arp and the broken arp on Am and F for two minutes a day. In one dance track, listen for the pad or bass dipping on each kick.
