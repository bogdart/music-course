---
id: w51-l3-rnb-reference-analysis
title: "Transcribe 3: R&B and Soul — Reference Analysis"
week: 51
order: 3
phase: p5
duration_min: 50
goals:
  - Find a secondary dominant inside a hidden loop
  - Listen to three soul classics and commit to home, loop and colour before reading the facts
  - Write an 8-bar neo-soul sketch with extended chords and a pushed pocket
prerequisites: [w51-l2-syncopated-groove-by-ear]
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

Soul loops often use a secondary dominant (week 27): a *major* chord with a ♭7 on a degree where the key would put a
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

1. Find the four bass notes (low key, higher/lower until it merges). *Check:* play them in a row along with the loop.
2. On each bass note play the minor 7 and the dominant 7 (or maj7) along with the loop; keep the one that blends.
3. Compare with the key: a chord that comes out *major/dominant* where F major would give a minor chord is your
   secondary-dominant candidate. *Check:* listen for one note from outside the key (a sharp, in F major) that moves by a half step as the next chord
   arrives.

Stuck on a chord? Loop that bar and play the two candidates back to back, then commit.

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

````reveal Show the hidden soul loop
**Gm7 – C7 – Fmaj7 – D7 = ii7 – V7 – Imaj7 – VI7** in F. D7 is the secondary dominant: its F♯ is foreign to F major
and it pushes the loop back round to Gm7 (D7 = V7/ii).
````

Before the drill: the same routine — bass note first, then colour (a surprise major chord that pushes somewhere is a
secondary dominant). The *How to do it* box under the drill shows the exact method for your current rung.

```ladder
{"skill": "progressions", "unlocks": 21, "intro": "Secondary dominants are rungs 16–18; at your own rung."}
```

## Three records, verdict first

Your own copies; answer, then read. For each record:

1. **Home** — loop the intro or first verse; find the note the tune or bass keeps returning to by searching on your
   keyboard, and hold it low under the record. *Check:* it sounds like it could ring forever.
2. **The loop** — count chords until it repeats. Find each bass note on the keyboard.
3. **Colour** — on each bass note play major, minor, then the seventh chords, along with the record; keep what blends.
4. **Layers** — one pass just for percussion and bass.

Stuck? Loop two bars, compare two candidates back to back, and answer anyway.

```exercise
{
  "id": "w48l3-lovely",
  "type": "quiz",
  "title": "\"Isn't She Lovely\" — Stevie Wonder (1976)",
  "spec": {
    "questions": [
      {"q": "Pass 1: where is home?", "choices": ["C#", "B", "F#", "E"], "answer": 0, "explain": "C# minor (about 119 BPM): the loop keeps coming back to C#m7 and rests there, and C# held under the record rings through everything. Some chord books analyse the loop in B major instead; this course hears C# minor as home."},
      {"q": "The second chord of the four-chord loop sounds…", "choices": ["Minor, like the first", "Major"], "answer": 1, "explain": "Major: F#7, a major IV7 — the Dorian colour from week 50."},
      {"q": "What is the fourth chord of the loop?", "choices": ["The dominant V7 (G#7)", "Another tonic", "A borrowed iv"], "answer": 0, "explain": "G#7, V7 of C# minor, with the raised 7th (B#) of harmonic minor, pulling back to the start. The third chord, B major, is VII — written without a flat in a minor key (week 48). The whole loop: C#m7 – F#7 – B – G#7 (i7 – IV7 – VII – V7)."}
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

## Your sketch, step by step

1. Write the 4-bar chord loop first in the epiano: start from the hidden soul loop (see its reveal) moved to E♭, or your
   own with one secondary dominant. *Check:* loop it — the secondary dominant should push into
   the next chord.
2. Move each chord change to the "and" of 4. *Check:* it should feel like leaning forward, not late.
3. Drums: hats, snare on 2 and 4, then a pushed kick. Bass: roots, sharing some kicks.
4. A short lead melody last; copy the 4 bars to make 8.

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

## Between lessons

Play the soul loop with a pushed feel once a day. Listen to one soul song and find just its home and the colour of its
first two chords.
