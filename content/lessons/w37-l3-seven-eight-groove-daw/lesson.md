---
id: w37-l3-seven-eight-groove-daw
title: A 7/8 Groove in the DAW
week: 37
order: 3
phase: p4
duration_min: 50
goals:
  - Build drums, bass and chords that all agree on a 2+2+3 grouping
  - Write a melody that phrases across the odd bar
  - Produce a 16-bar 7/8 groove
prerequisites: [w37-l2-three-against-two]
tags: [rhythm, odd-meters, daw, groove]
songs:
  - { title: "Solsbury Hill", artist: "Peter Gabriel", public_domain: false }
---

# A 7/8 Groove in the DAW

The golden rule for odd-meter grooves: **every layer agrees on the grouping.** If drums say 2+2+3 but the bass says 3+2+2, the groove falls apart. (Sometimes composers do that on purpose, but only once they've mastered the basics.) By reference, Peter Gabriel's "Solsbury Hill" is a folk-pop song whose verses run mostly in 7/4 (with the odd bar of 4/4), and most listeners never notice, because everything lines up.

## The groove, layer by layer

- **Drums** mark groups: kick on 1, snare on 3 (start of the second 2), kick + snare on the 3-group. A doubled kick at the start of the 3-group gives it a push.
- **Bass** hits each group start and walks inside the long group.
- **Chords** hit on the groups too: quarter, quarter, then an 8th rest and a quarter — 2 + 2 + (1 + 2).

```example
{
  "title": "7/8 groove in E minor (Em7 – Am | Cmaj7 – D)",
  "bpm": 110,
  "timeSig": "7/8",
  "key": "Em",
  "tracks": [
    {
      "instrument": "drums",
      "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 |"
    },
    {
      "instrument": "bass",
      "seq": "E2:8 r:8 E2:8 G2:8 A2:8 r:8 B2:8 | E2:8 r:8 E2:8 G2:8 A2:8 r:8 B2:8 | C2:8 r:8 C2:8 E2:8 D2:8 r:8 F#2:8 | C2:8 r:8 C2:8 E2:8 D2:8 r:8 F#2:8 |"
    },
    {
      "instrument": "epiano",
      "seq": "[E3 G3 B3 D4]:q [E3 G3 B3 D4]:q r:8 [E3 A3 C4]:q | [E3 G3 B3 D4]:q [E3 G3 B3 D4]:q r:8 [E3 A3 C4]:q | [C3 G3 B3 E4]:q [C3 G3 B3 E4]:q r:8 [D3 F#3 A3]:q | [C3 G3 B3 E4]:q [C3 G3 B3 E4]:q r:8 [D3 F#3 A3]:q |"
    }
  ],
  "show": [
    "pianoroll"
  ],
  "loop": true
}
```

## Melody in 7/8

Melodies in odd meters feel natural when phrases **span two bars** (14 8ths) and the long note falls on the 3-group. Try "short-short-long": two quick notes on the 2-groups, a held note on the 3-group.

```example
{
  "title": "Melody phrased short-short-long (original)",
  "bpm": 110,
  "timeSig": "7/8",
  "key": "Em",
  "tracks": [
    {
      "instrument": "lead",
      "seq": "B4:q D5:q E5:q. | D5:q B4:q A4:q. | G4:q A4:q B4:q. | A4:q F#4:q E4:q. |"
    },
    {
      "instrument": "drums",
      "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 |"
    }
  ],
  "show": [
    "staff"
  ]
}
```

## Working method

1. **Drums first.** Write one bar, loop it and say "ap-ple ap-ple pine-ap-ple" over it until your body stops tripping. Then copy it to all 16 bars.
2. **Bass** on every group start (8ths 1, 3 and 5), locked to the kick; walk only inside the long group.
3. **Chords** on the group starts too.
4. **Melody last,** in two-bar phrases, short-short-long.

**Judge it by ear:** nod along. If a layer trips, mute everything but the drums and that layer, and check both put their accents on the same 8ths. **If you're stuck:** copy the example's drums and bass exactly, and make only the chords and melody your own. Keep the tempo moderate — 7/8 at 110 is plenty.

## Drills

```exercise
{
  "id": "e1-play-bass",
  "type": "play-melody",
  "title": "Play the bass riff",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "bpm": 90,
    "timeSig": "7/8",
    "key": "Em",
    "seq": "E2:8 r:8 E2:8 G2:8 A2:8 r:8 B2:8 | E2:8 r:8 E2:8 G2:8 A2:8 r:8 B2:8 |",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1,
    "backing": {
      "instrument": "drums",
      "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 |"
    }
  }
}
```

```exercise
{
  "id": "e2-play-melody",
  "type": "play-melody",
  "title": "Play the melody",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "bpm": 90,
    "timeSig": "7/8",
    "key": "Em",
    "seq": "B4:q D5:q E5:q. | D5:q B4:q A4:q. | G4:q A4:q B4:q. | A4:q F#4:q E4:q. |",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1,
    "backing": {
      "instrument": "drums",
      "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 |"
    }
  }
}
```

```exercise
{
  "id": "e3-daw-seven-eight",
  "type": "daw-task",
  "title": "Your 16-bar 7/8 groove",
  "instructions": "Choose a grouping (2+2+3 or 3+2+2) and stick to it in every layer. Drums: kick on each group start, snare on at least one. Bass: hit every group start. Chords: rhythm follows the groups. Lead: an 8-bar melody phrased in 2-bar units, entering at bar 9. Build in the order of the working method above; about 35 minutes (finish the melody next session if you run out of time).",
  "spec": {
    "template": {
      "bpm": 110,
      "key": "Em",
      "timeSig": "7/8",
      "tracks": [
        {
          "instrument": "drums",
          "seq": ""
        },
        {
          "instrument": "bass",
          "seq": ""
        },
        {
          "instrument": "epiano",
          "seq": ""
        },
        {
          "instrument": "lead",
          "seq": ""
        }
      ]
    },
    "task": "16 bars of 7/8 with consistent grouping in all layers.",
    "checks": [
      {
        "kind": "has-tracks",
        "instruments": [
          "drums",
          "bass",
          "epiano",
          "lead"
        ]
      },
      {
        "kind": "bars",
        "min": 16,
        "max": 16
      },
      {
        "kind": "drum-pattern",
        "requires": [
          "kick",
          "snare"
        ],
        "track": 0
      },
      {
        "kind": "in-key",
        "key": "E",
        "scale": "natural-minor",
        "allowPassing": true,
        "track": 3
      },
      {
        "kind": "note-count",
        "min": 12,
        "track": 3
      },
      {
        "kind": "custom",
        "id": "same-grouping",
        "note": "Self-check: kick, bass and chord hits all start groups at the same 8th positions."
      }
    ],
    "minBars": 16,
    "maxBars": 16
  }
}
```

```exercise
{
  "id": "e4-reflect",
  "type": "reflect",
  "title": "Did it groove?",
  "spec": {
    "prompt": "Play your groove and try to nod your head to it. Where did it feel natural, and where did it stumble? Which layer was hardest to keep in the grouping?",
    "minWords": 25
  }
}
```

## Ear: odd meters

This lesson opens the last meter rung: all five meters you now know (3/4, 4/4, 6/8, 5/4 and 7/8) in one drill. The drill below runs at your current rhythm rung, so you may meet this one later. When you do, the drums give you the cues. In the quarter-note meters (3/4, 4/4, 5/4) every beat has a kick or a snare, and you count drum hits from one loud kick to the next, as in the first lesson this week. In the 8th-note meters (6/8, 7/8) there is no snare: only kicks, one at the start of each group, with the hi-hat ticking the 8ths. Two even groups of three (kick, two ticks, kick, two ticks) is 6/8; three uneven groups, short-short-long like your groove (2+2+3), is 7/8.

This is the method in the drill's *How to do it* box too: count from ONE to ONE; 7/8 limps (2+2+3), 5/4 has five steady beats. For the bass drill after it: ignore the drums, tap your foot with the deepest sound, then find its notes one by one.

```ladder
{ "skill": "rhythm", "unlocks": 16, "intro": "Opens the rung with all five meters, 7/8 included; the drill runs at your current rhythm rung." }
```

```ladder
{ "skill": "roots", "unlocks": 15, "intro": "Bass lines in a band: the bass is the layer that locks a groove to its grouping; the drill runs at your current roots rung." }
```

## Between lessons

Loop your groove once a day and play the bass riff along with it until you can do it without counting. Listen to "Solsbury Hill" and try counting a verse bar in sevens (it is 7/4: a slower pulse, same idea).
