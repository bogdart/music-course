---
id: w45-l1-drum-pattern-dictation
title: Drum Pattern Dictation
week: 45
order: 1
phase: p5
duration_min: 45
goals:
  - "Transcribe a groove one layer at a time: kick, then snare, then hats"
  - "Place syncopated kicks on the 16th grid by counting \"1 e & a\""
  - Rebuild a hidden groove in the DAW and check it against the original
prerequisites: [w44-l3-eight-bar-dictation]
tags: [transcription, drums, rhythm, groove, ear]
---

# Drum Pattern Dictation

Pass 6 is groove. Drums carry the genre: keep the chords, swap the beat, and a ballad becomes a dance track. Luckily drum
patterns are short and repetitive — one or two bars — so one good loop gives you a whole section.

## One layer per loop

A kit is at least three instruments at once. Don't try to hear all three. Loop one bar and listen three times, tapping
your foot on the beat the whole time:

1. **Kick** — the low thump. Tap it with your hand on the table while your foot keeps the beat. Check: say the count and
   write the syllable of every thump ("1 … & of 3").
2. **Snare / clap** — the crack. In pop it's usually on 2 and 4 (only on 3 in half-time). Confirm, don't assume. Check:
   count "1 2 3 4" aloud — does the crack land on your "2" and "4"?
3. **Hats** — the ticking top. Just decide the grid: count the ticks in one beat — two (eighths) or four (sixteenths)?
   Any longer, hissing hit? That's an open hat; note which count it's on.

The kick is the layer that really varies from song to song, so spend most of your time there. Stuck on a kick? Loop the
slowed kick-only version, count the 16ths slowly, and guess one syllable; then play the loop again and tap your guess
along with it — a wrong guess flams (two hits instead of one).

## The 16th grid

Count every beat as four slots: **1 e & a, 2 e & a…** A syncopated kick lands on an "e", "&" or "a" instead of the beat.
Say the count out loud while the loop plays and notice which syllable each kick hits. Here is a straight groove, shown
(this is the explanation): kick on 1, 3 and the "&" of 3, snare on 2 and 4.

```example
{
  "title": "Groove A — straight pop",
  "bpm": 96,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "kick:q r:q kick:8 kick:8 r:q | kick:q r:q kick:8 kick:8 r:q"},
    {"instrument": "drums", "seq": "r:q snare:q r:q snare:q | r:q snare:q r:q snare:q"},
    {"instrument": "drums", "seq": "hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 ohat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 ohat:8"}
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

Now a hidden groove. Loop the kick-only version first, then the whole kit.

```example
{
  "title": "Groove B — kick only, slowed",
  "bpm": 70,
  "timeSig": "4/4",
  "tracks": [{"instrument": "drums", "seq": "kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q"}],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```exercise
{
  "id": "w45l1-listen",
  "type": "listen",
  "title": "Groove B, layer by layer",
  "spec": {
    "example": {
      "title": "Groove B — full kit",
      "bpm": 90,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:16 r:16 hihat:16 kick:16 [snare hihat]:16 r:16 hihat:16 r:16 hihat:16 r:16 [kick hihat]:16 r:16 [snare hihat]:16 r:16 ohat:16 r:16 | [kick hihat]:16 r:16 hihat:16 kick:16 [snare hihat]:16 r:16 hihat:16 r:16 hihat:16 r:16 [kick hihat]:16 r:16 [snare hihat]:16 r:16 ohat:16 r:16"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Where does the kick play?", "choices": ["1 and 3", "1, the 'a' of 1, the '&' of 3", "1, 2, 3, 4", "The '&' of 2 and 4"], "answer": 1, "explain": "1, the 'a' of 1 (the last 16th before beat 2) and the '&' of 3. That pushed kick right before the snare makes it feel R&B rather than rock."},
      {"q": "Where does the snare play?", "choices": ["2 and 4", "3 only", "1 and 3", "Every eighth"], "answer": 0},
      {"q": "Hats: which grid, and anything special?", "choices": ["Sixteenths, all closed", "Eighths, with an open hat on the last eighth", "Quarters only", "No hats"], "answer": 1}
    ]
  }
}
```

```exercise
{
  "id": "w45l1-kick",
  "type": "rhythm-tap",
  "title": "Tap groove B's kick from memory",
  "instructions": "No notation: tap the kick pattern you heard. Press Listen first to hear it again.",
  "spec": {
    "bpm": 80,
    "timeSig": "4/4",
    "seq": "x:8. x:16 r:q r:8 x:8 r:q | x:8. x:16 r:q r:8 x:8 r:q",
    "showNotation": false,
    "countIn": 1,
    "loops": 2
  }
}
```

For the drill: one drum per listen, foot on the beat, count the grid out loud and mark only what you're sure of first.
The *How to do it* box under the drill shows the exact method for your current rung.

```ladder
{
  "skill": "rhythm",
  "unlocks": 16,
  "intro": "Rhythm at your own rung; the drum-grid rungs of this ladder are exactly today's routine."
}
```

```exercise
{
  "id": "w45l1-read",
  "type": "read-rhythm",
  "title": "Read 16th rhythms",
  "count": 8,
  "spec": {"timeSig": "4/4", "bars": 1, "subdivision": "16"}
}
```

## Rebuild it

1. Program the snare first (2 and 4) — it's the grid you hang everything on.
2. Add the kick from your dictation, then the hats, then the open hat.
3. A/B: loop groove B, then your track, back to back. Judge one drum at a time — mute the others in your track if that
   helps. A kick that sounds "late" or "early" is one 16th off: move it one slot.

```exercise
{
  "id": "w45l1-daw",
  "type": "daw-task",
  "title": "Rebuild groove B",
  "spec": {
    "template": {"bpm": 90, "key": "C", "tracks": [{"instrument": "drums", "seq": ""}]},
    "task": "From your dictation, program 2 bars of groove B on one drum track: kick, snare, hats and the open hat. The check compares every hit with the original (on the 16th grid). Then reveal groove B and compare.",
    "checks": [
      {"kind": "bars", "min": 2, "max": 2},
      {"kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "snareOnBeats": [2, 4], "track": 0},
      {
        "kind": "matches-reference",
        "reference": {
          "bpm": 90,
          "tracks": [
            {"instrument": "drums", "seq": "[kick hihat]:16 r:16 hihat:16 kick:16 [snare hihat]:16 r:16 hihat:16 r:16 hihat:16 r:16 [kick hihat]:16 r:16 [snare hihat]:16 r:16 ohat:16 r:16 | [kick hihat]:16 r:16 hihat:16 kick:16 [snare hihat]:16 r:16 hihat:16 r:16 hihat:16 r:16 [kick hihat]:16 r:16 [snare hihat]:16 r:16 ohat:16 r:16"}
          ]
        },
        "track": 0,
        "refTrack": 0,
        "minSimilarity": 0.8
      }
    ],
    "minBars": 2,
    "maxBars": 2
  }
}
```

## Between lessons

One Practice session. With any song you hear this week, find just the kick for one bar: count "1 e & a" and name its
syllables.
