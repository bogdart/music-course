---
id: w48-l3-rnb-reference-analysis
title: "Transcribe 3: R&B and Soul — Reference Analysis"
week: 48
order: 3
phase: p5
duration_min: 50
goals:
  - Find a secondary dominant inside a hidden loop
  - Listen to three soul classics and commit to home, loop and colour before reading the facts
  - Write an 8-bar neo-soul sketch with extended chords and a pushed pocket
prerequisites: [w48-l2-syncopated-groove-by-ear]
tags: [transcription, rnb, soul, reference-songs, secondary-dominant, daw]
songs:
  - { title: "Isn't She Lovely", artist: "Stevie Wonder", year: 1976, public_domain: false }
  - { title: "Ain't No Sunshine", artist: "Bill Withers", year: 1971, public_domain: false }
  - { title: "What's Going On", artist: "Marvin Gaye", year: 1971, public_domain: false }
---

# Transcribe 3: R&B and Soul — Reference Analysis

Neo-soul grew out of 1970s soul, and those records are the clearest place to hear its harmony. Charts for these songs
disagree about extensions (7 vs 9 vs 13) — that's normal: get the **root and family** right and treat the colour as your
own judgement.

## A loop that keeps turning

Soul loops often use a secondary dominant (week 24): a *major* chord with a ♭7 on a degree where the key would put a
minor one, pulling towards the chord a fifth below it. Its note from outside the key usually rises by half step into the
next chord. Here is one in C major, shown (this is the explanation): the E7 in bar 2, whose G♯ rises to the A of Am7.

```example
{
  "title": "Secondary dominant in C: Cmaj7 – E7 – Am7",
  "bpm": 80,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {"instrument": "epiano", "seq": "[E3 G3 B3]:w | [D3 G#3 B3]:w | [C3 E3 G3 A3]:w | [C3 E3 G3 A3]:w"},
    {"instrument": "bass", "seq": "C2:w | E2:w | A1:w | A1:w"}
  ],
  "show": ["keyboard"],
  "loop": false
}
```

Where a secondary dominant sits, and which chord it points to, varies from song to song. Now a hidden loop in F major:
listen to each chord's colour, not just its bass note.

```exercise
{
  "id": "w48l3-loop",
  "type": "ear-progression",
  "title": "Hidden soul loop",
  "srs": false,
  "spec": {
    "key": "F",
    "mode": "major",
    "chords": ["Imaj7", "ii7", "V7", "vi7", "VI7"],
    "example": {
      "title": "Hidden soul loop",
      "bpm": 108,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q"},
        {"instrument": "drums", "seq": "r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q"},
        {"instrument": "bass", "seq": "G2:q. G2:8 r:8 D2:8 G2:q | C2:q. C2:8 r:8 G2:8 C2:q | F2:q. F2:8 r:8 C2:8 F2:q | D2:q. D2:8 r:8 A2:8 D2:q"},
        {"instrument": "epiano", "seq": "[F3 Bb3 D4]:h. r:8 [E3 Bb3 D4]:8 | [E3 Bb3 D4]:h. r:8 [E3 A3 C4]:8 | [E3 A3 C4]:h. r:8 [F#3 C4 E4]:8 | [F#3 C4 E4]:h. r:8 [F3 Bb3 D4]:8"}
      ]
    },
    "progression": ["ii7", "V7", "Imaj7", "VI7"]
  }
}
```

```ladder
{"skill": "progressions", "unlocks": 20, "intro": "Secondary dominants are rungs 15–17; at your own rung."}
```

## Three records, verdict first

Your own copies; answer, then read.

```exercise
{
  "id": "w48l3-lovely",
  "type": "quiz",
  "title": "\"Isn't She Lovely\" — Stevie Wonder (1976)",
  "spec": {
    "questions": [
      {"q": "Pass 1: where is home?", "choices": ["C#", "B", "F#", "E"], "answer": 0, "explain": "C# minor (about 119 BPM): the loop starts on C#m7 and keeps coming back to it. Some chord books analyse the loop in B major instead; this course hears C# minor as home."},
      {"q": "The second chord of the four-chord loop sounds…", "choices": ["Minor, like the first", "Major"], "answer": 1, "explain": "Major: F#7, a major IV7 — the Dorian colour from week 47."},
      {"q": "What is the fourth chord of the loop?", "choices": ["The dominant V7 (G#7)", "Another tonic", "A borrowed iv"], "answer": 0, "explain": "G#7, V7 of C# minor, with the raised 7th (B#) of harmonic minor, pulling back to the start. The third chord, B major, is VII — written without a flat in a minor key (week 45). The whole loop: C#m7 – F#7 – B – G#7 (i7 – IV7 – VII – V7)."}
    ]
  }
}
```

```exercise
{
  "id": "w48l3-sunshine",
  "type": "quiz",
  "title": "\"Ain't No Sunshine\" — Bill Withers (1971)",
  "spec": {
    "questions": [
      {"q": "Home and quality?", "choices": ["A minor", "C major", "E minor", "G major"], "answer": 0, "explain": "A minor, about 78 BPM."},
      {"q": "The chord right after the home chord — the 'dominant' on degree 5 — is it major or minor?", "choices": ["Major V", "Minor v"], "answer": 1, "explain": "Minor: Em7, a v7 instead of the usual major V. The loop is Am – Em7 – G – Am (i – v7 – VII – i)."},
      {"q": "How long is the song compared with most pop songs?", "choices": ["Much shorter — about two minutes", "About the same", "Much longer"], "answer": 0}
    ]
  }
}
```

```exercise
{
  "id": "w48l3-goingon",
  "type": "quiz",
  "title": "\"What's Going On\" — Marvin Gaye (1971)",
  "spec": {
    "questions": [
      {"q": "How many chords alternate in the opening?", "choices": ["Two", "Three", "Four"], "answer": 0, "explain": "Two chords alternate, in E major, about 102 BPM."},
      {"q": "Do those chords sound like plain triads or seventh chords?", "choices": ["Plain triads", "Seventh chords"], "answer": 1, "explain": "Sevenths: Emaj7 and C#m7 (Imaj7 – vi7), soft chords that hardly resolve."},
      {"q": "Pass 7: which percussion stands out?", "choices": ["Congas", "A drum machine", "Timpani"], "answer": 0, "explain": "Congas, with a busy, melodic bass — listen to the bass alone for one verse."}
    ]
  }
}
```

```exercise
{
  "id": "w48l3-play",
  "type": "play-chord",
  "title": "Play the soul loop",
  "spec": {"chords": ["Gm7", "C7", "Fmaj7", "D7"], "inversion": "any", "sequence": true, "bpm": 72}
}
```

```exercise
{
  "id": "w48l3-daw",
  "type": "daw-task",
  "title": "Your neo-soul sketch",
  "spec": {
    "template": {
      "bpm": 86,
      "key": "Eb",
      "tracks": [
        {"instrument": "drums", "seq": ""},
        {"instrument": "bass", "seq": ""},
        {"instrument": "epiano", "seq": ""},
        {"instrument": "lead", "seq": ""}
      ]
    },
    "task": "Write 8 bars in E♭: a 4-bar loop of extended chords played twice (at least one m9 or maj9, one dominant, and one secondary dominant), chord changes anticipated on the 'and' of 4, a pushed-kick pocket with 16th hats, a bass that shares some kicks, and a short lead melody.",
    "checks": [
      {"kind": "has-tracks", "instruments": ["drums", "bass", "epiano", "lead"]},
      {"kind": "bars", "min": 8, "max": 8},
      {"kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "snareOnBeats": [2, 4], "track": 0},
      {"kind": "uses-rhythm", "values": ["16", "8"], "minDistinct": 2, "track": 1},
      {"kind": "chord-has-seventh", "min": 2, "track": 2},
      {"kind": "uses-chord", "roman": ["V7/ii", "V7/iii", "V7/IV", "V7/V", "V7/vi"], "min": 1},
      {
        "kind": "custom",
        "id": "w48-extended-chords",
        "note": "Self-check: every chord in the clip name with its symbol and numeral."
      }
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```
