---
id: w37-l1-odd-meters
title: Odd Meters — 5/4 and 7/8
week: 37
order: 1
phase: p4
duration_min: 40
goals:
  - Count 5/4 and 7/8 as groups of 2s and 3s
  - Tap and play grooves in 5/4 (3+2) and 7/8 (2+2+3)
  - "Open the meter rung 'Four or five?': 5/4 against 4/4"
prerequisites: [w36-l3-build-and-drop-daw, w04-l2-time-signatures-and-counting]
tags: [rhythm, meter, odd-meters, ear]
songs:
  - { title: "Take Five", composer: "Paul Desmond", public_domain: false }
  - { title: "Money", artist: "Pink Floyd", public_domain: false }
  - { title: "Mission: Impossible Theme", composer: "Lalo Schifrin", public_domain: false }
  - { title: "Mars, the Bringer of War (The Planets)", composer: "Gustav Holst", public_domain: true }
---

# Odd Meters — 5/4 and 7/8

Almost everything you've written is in 4/4 or 3/4. Step outside and music suddenly limps, dances or lurches in a way that grabs attention. The secret to [[odd meter]]s: **nobody counts to seven.** Every odd meter is a chain of 2s and 3s.

## 5/4 = 3 + 2 (or 2 + 3)

"Take Five" (Desmond, recorded by the Dave Brubeck Quartet, 1959) is the famous 5/4: its piano vamp feels like **ONE**-two-three-**FOUR**-five. Holst's "Mars" (1914, public domain) pounds a relentless 5/4 ostinato; the "Mission: Impossible" theme is in 5/4 too. Count it as "1-2-3-1-2".

```example
{
  "title": "5/4 vamp, grouped 3+2 (original, Dm7 – Am7)",
  "bpm": 150,
  "timeSig": "5/4",
  "key": "F",
  "tracks": [
    {
      "instrument": "piano",
      "seq": "[D3 F3 A3 C4]:q r:8 [D3 F3 A3 C4]:8 r:q [A2 G3 C4]:q [A2 G3 C4]:q | [D3 F3 A3 C4]:q r:8 [D3 F3 A3 C4]:8 r:q [A2 G3 C4]:q [A2 G3 C4]:q | [D3 F3 A3 C4]:q r:8 [D3 F3 A3 C4]:8 r:q [A2 G3 C4]:q [A2 G3 C4]:q | [D3 F3 A3 C4]:q r:8 [D3 F3 A3 C4]:8 r:q [A2 G3 C4]:q [A2 G3 C4]:q |"
    },
    {
      "instrument": "drums",
      "seq": "[kick hihat]:q hihat:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q hihat:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q hihat:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q hihat:q [snare hihat]:q [kick hihat]:q [snare hihat]:q |"
    }
  ],
  "show": [
    "pianoroll"
  ],
  "loop": true
}
```

## 7/8 = 2 + 2 + 3

In 7/8 the pulse is the 8th note, grouped unevenly. The most common grouping is **2+2+3**: "1-2, 1-2, 1-2-3" — or say it with words, "**ap**-ple **ap**-ple **pine**-ap-ple". The long group at the end gives it a lopsided, rolling feel. Pink Floyd's "Money" is in 7/4 — the same idea at a slower pulse.

```example
{
  "title": "7/8 groove, grouped 2+2+3",
  "bpm": 100,
  "timeSig": "7/8",
  "key": "G",
  "tracks": [
    {
      "instrument": "drums",
      "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 |"
    },
    {
      "instrument": "bass",
      "seq": "E2:8 E2:8 G2:8 E2:8 A2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 G2:8 D2:8 |"
    }
  ],
  "show": [
    "pianoroll"
  ],
  "loop": true
}
```

Listen for the kick and snare: they mark the start of each group (1, 3, 5), so your body can find the pattern without counting to seven.

**What you will probably hear at first.** An odd bar often sounds like "a normal bar that trips" or "one beat too short". That is a perfectly good first perception, and it is how you spot odd meters in songs.

### Try it

1. Loop the 7/8 groove and say "**ap**-ple **ap**-ple **pine**-ap-ple" along with it, tapping the table on each bold syllable.
2. Now loop the 5/4 vamp and say "1-2-3-1-2", tapping on each "1".
3. Switch back to 4/4 in your head — say "1-2-3-4" over the 7/8 groove — and notice where it stops fitting.

**Check:** your taps on the bold syllables should land with the kicks and snares, and the loop should start again right after "pine-ap-ple" every time.

**If you can't hear it yet:** turn off the sound and read the piano roll of the 7/8 groove: point at each 8th with a finger while saying the words. Then play it again at the same pace with your finger still moving. Seeing the groups first is fine; the ear follows.

## Four or five?

The first odd-meter ear rung is a two-way choice: **4/4 or 5/4?** This lesson opens it; the drill below runs at your current rhythm rung, so you may meet it later. Here is how to count it, without guessing:

1. **Count beats, not hi-hat ticks.** In the drill, every beat has one drum hit (kick or snare); the hi-hat ticks twice as fast in between. Count only the drum hits.
2. **Start on the loudest kick.** Beat 1 of every bar is a loud kick; the other kicks are softer. Count "1" on the loud kick and keep counting drum hits until the next loud kick: you get to 4 or to 5.
3. **A shortcut at the bar line.** In the drill's 4/4 pattern, kick and snare alternate (kick–snare–kick–snare), so a snare comes right before the loud kick. In 5/4 the fifth beat is a soft kick, so you hear **two kicks in a row**: the soft one on 5, then the loud one on 1.

Listen to both, one after the other, and count along.

```example
{
  "title": "Four bars of 4/4",
  "bpm": 100, "timeSig": "4/4",
  "tracks": [ { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 |" } ],
  "show": ["pianoroll"]
}
```

```example
{
  "title": "Four bars of 5/4",
  "bpm": 100, "timeSig": "5/4",
  "tracks": [ { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 |" } ],
  "show": ["pianoroll"]
}
```

## Drills

```exercise
{
  "id": "e1-tap-five",
  "type": "rhythm-tap",
  "title": "Tap 5/4 group starts",
  "instructions": "Tap beats 1 and 4 only — the start of each group.",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "bpm": 120,
    "timeSig": "5/4",
    "seq": "x:q r:q r:q x:q r:q | x:q r:q r:q x:q r:q |",
    "showNotation": true,
    "countIn": 1,
    "loops": 4
  }
}
```

```exercise
{
  "id": "e2-tap-seven",
  "type": "rhythm-tap",
  "title": "Tap 7/8 as 2+2+3",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "bpm": 100,
    "timeSig": "7/8",
    "seq": "x:q x:q x:q. | x:q x:q x:q. |",
    "showNotation": true,
    "countIn": 1,
    "loops": 4
  }
}
```

```exercise
{
  "id": "e3-play-vamp",
  "type": "play-melody",
  "title": "Play the 5/4 vamp",
  "instructions": "Left hand. Say '1-2-3-1-2' out loud.",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "bpm": 110,
    "timeSig": "5/4",
    "key": "F",
    "seq": "[D3 F3 A3 C4]:q r:8 [D3 F3 A3 C4]:8 r:q [A2 G3 C4]:q [A2 G3 C4]:q | [D3 F3 A3 C4]:q r:8 [D3 F3 A3 C4]:8 r:q [A2 G3 C4]:q [A2 G3 C4]:q |",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1,
    "backing": {
      "instrument": "drums",
      "seq": "[kick hihat]:q hihat:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q hihat:q [snare hihat]:q [kick hihat]:q [snare hihat]:q |"
    }
  }
}
```

```exercise
{
  "id": "e4-listen-meter",
  "type": "listen",
  "title": "What's the meter?",
  "passScore": 0.7,
  "spec": {
    "example": {
      "bpm": 110,
      "timeSig": "7/8",
      "hidden": true,
      "tracks": [
        {
          "instrument": "drums",
          "seq": "[kick hihat]:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8 [snare hihat]:8 hihat:8 |"
        }
      ]
    },
    "questions": [
      {
        "q": "How many 8th notes before the pattern repeats?",
        "choices": [
          "5",
          "6",
          "7",
          "8"
        ],
        "answer": 2
      },
      {
        "q": "How is it grouped?",
        "choices": [
          "2+2+3",
          "3+2+2",
          "4+3",
          "2+3+2"
        ],
        "answer": 1
      }
    ]
  }
}
```

```exercise
{
  "id": "e5-meter-quiz",
  "type": "quiz",
  "title": "Grouping",
  "passScore": 0.7,
  "spec": {
    "questions": [
      {
        "q": "'Ap-ple, ap-ple, pine-ap-ple' describes…",
        "choices": [
          "5/4 as 3+2",
          "7/8 as 2+2+3",
          "6/8",
          "7/8 as 3+2+2"
        ],
        "answer": 1
      },
      {
        "q": "5/4 can be felt as…",
        "choices": [
          "3+2 or 2+3",
          "4+1 only",
          "5 equal beats, no groups",
          "2+2+2"
        ],
        "answer": 0
      },
      {
        "q": "In 7/8, which note value gets the pulse?",
        "choices": [
          "whole",
          "quarter",
          "8th",
          "16th"
        ],
        "answer": 2
      }
    ]
  }
}
```

## Ear: four or five?

Use the three counting steps from "Four or five?" above — they are the drill's method too (see its *How to do it* box, which also covers any earlier rung you may be on).

```ladder
{ "skill": "rhythm", "unlocks": 15, "intro": "Opens the meter rung 'Four or five?' (4/4 against 5/4); the drill runs at your current rhythm rung." }
```

## Between lessons

Tap "apple apple pineapple" along with any music you hear for a minute a day. Listen to "Take Five" and count "1-2-3-1-2" through the piano vamp.
