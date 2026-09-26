---
id: w29-l3-comping-a-standard-daw
title: Comping a Standard in the DAW
week: 29
order: 3
phase: p4
duration_min: 50
goals:
  - Play "When the Saints Go Marching In" with jazz changes
  - Comp in the Charleston rhythm with shell voicings
  - "Produce a 16-bar trio arrangement: melody, comping, bass"
prerequisites: [w29-l2-jazz-blues]
tags: [jazz, comping, daw, public-domain]
songs:
  - { title: "When the Saints Go Marching In", composer: "Traditional", public_domain: true }
---

# Comping a Standard in the DAW

Time to comp a real tune. "When the Saints Go Marching In" is traditional (public domain) and a New Orleans staple, so we can use its melody in full. We'll dress it in jazz chords and a proper comping rhythm.

## The Charleston rhythm

Long whole-note chords make a band sound like a church organ. Jazz comping is *rhythmic*. The most famous comping figure is the [[Charleston rhythm]]: a hit on beat 1, and a second short hit on the "and" of 2. Then silence. It leaves the rest of the bar for the melody.

```example
{
  "title": "Charleston comping on C6 and G7",
  "bpm": 110, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [G2 F3 B3]:q. [G2 F3 B3]:8 r:h | [G2 F3 B3]:q. [G2 F3 B3]:8 r:h |" },
    { "instrument": "drums", "seq": "ride:q ride:8t r:8t ride:8t ride:q ride:8t r:8t ride:8t | ride:q ride:8t r:8t ride:8t ride:q ride:8t r:8t ride:8t | ride:q ride:8t r:8t ride:8t ride:q ride:8t r:8t ride:8t | ride:q ride:8t r:8t ride:8t ride:q ride:8t r:8t ride:8t |" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

Listen to the ride cymbal: "ding, ding-a-ding" — the triplet-based swing pattern, written here with 8th-note triplets.

## The tune with jazz changes

Bars 1–7 stay on C6. Bar 8 is G7. Bar 10 turns C into C7 to lead to F. Bar 12 borrows Fm6 — a sweet minor iv you will study properly next week — and bars 14–15 add vi–ii–V on the way home.

```example
{
  "title": "When the Saints — melody, shells, bass (16 bars)",
  "bpm": 110, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:h E4:h | C4:h E4:h | D4:w | r:q E4:q E4:q D4:q | C4:h. C4:q | E4:h G4:h | G4:q F4:h. | r:q E4:q F4:q G4:q | E4:h C4:h | D4:w | C4:w |" },
    { "instrument": "epiano", "seq": "[C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [G2 F3 B3]:q. [G2 F3 B3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [C3 E3 Bb3]:q. [C3 E3 Bb3]:8 r:h | [F2 E3 A3]:q. [F2 E3 A3]:8 r:h | [F2 D3 Ab3]:q. [F2 D3 Ab3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [A2 C3 G3]:q. [A2 C3 G3]:8 r:h | [D3 F3 C4]:h [G2 F3 B3]:h | [C3 E3 A3]:w |" },
    { "instrument": "bass", "seq": "C2:h G1:h | C2:h G1:h | C2:h G1:h | C2:h G1:h | C2:h G1:h | C2:h G1:h | C2:h E2:h | G1:h D2:h | C2:h G1:h | C2:h E2:h | F1:h C2:h | F1:h Ab1:h | C2:h G1:h | A1:h E2:h | D2:h G1:h | C2:w |" }
  ],
  "show": ["pianoroll"]
}
```

## Comping etiquette

Three habits separate a comper from someone just playing chords. **Stay out of the melody's way**: when the tune holds a long note (bars 2, 4, 8), that is where your hits can speak; when it is busy, lay back. **Vary the rhythm** — a Charleston every bar gets predictable, so try a *push*: hit the chord on the "and" of 4, a beat early, and let it ring over the barline. **Keep it low and light**: shells between E2 and C4 leave the melody's register clear.

## Drills

```exercise
{
  "id": "e1-tap-charleston",
  "type": "rhythm-tap",
  "title": "Tap the Charleston",
  "count": 6, "passScore": 0.8,
  "spec": { "bpm": 100, "timeSig": "4/4", "seq": "x:q. x:8 r:h | x:q. x:8 r:h |", "showNotation": true, "countIn": 1, "loops": 4 }
}
```

```exercise
{
  "id": "e2-play-saints",
  "type": "play-melody",
  "title": "Play the melody",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 100, "timeSig": "4/4", "key": "C", "seq": "r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:h E4:h | C4:h E4:h | D4:w | r:q E4:q E4:q D4:q | C4:h. C4:q | E4:h G4:h | G4:q F4:h. | r:q E4:q F4:q G4:q | E4:h C4:h | D4:w | C4:w |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "bass", "seq": "C2:w | C2:w | C2:w | C2:w | C2:w | C2:w | C2:w | G1:w | C2:w | C2:w | F1:w | F1:w | C2:w | A1:w | D2:h G1:h | C2:w |" } }
}
```

```exercise
{
  "id": "e3-comp-last-eight",
  "type": "play-melody",
  "title": "Comp bars 9–16 in Charleston rhythm",
  "count": 6, "passScore": 0.7,
  "spec": { "bpm": 90, "timeSig": "4/4", "key": "C", "seq": "[C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [C3 E3 Bb3]:q. [C3 E3 Bb3]:8 r:h | [F2 E3 A3]:q. [F2 E3 A3]:8 r:h | [F2 D3 Ab3]:q. [F2 D3 Ab3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [A2 C3 G3]:q. [A2 C3 G3]:8 r:h | [D3 F3 C4]:h [G2 F3 B3]:h | [C3 E3 A3]:w |", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e4-ear-prog-iv",
  "type": "ear-progression",
  "title": "Spot the minor iv",
  "count": 6, "passScore": 0.7,
  "spec": { "key": "random", "mode": "major", "length": 4, "chords": ["I", "IV", "iv", "V7", "vi"], "style": "block" }
}
```

```exercise
{
  "id": "e5-ear-melody",
  "type": "ear-melody",
  "title": "Saints-style fragments",
  "count": 6, "passScore": 0.7,
  "spec": { "key": "random", "degrees": [1, 2, 3, 4, 5, 6], "length": 5, "rhythm": "simple", "answer": "play" }
}
```

```exercise
{
  "id": "e6-daw-trio",
  "type": "daw-task",
  "title": "Saints trio arrangement",
  "instructions": "The melody is provided on track 1. Track 2 (epiano): comp with shells, mostly Charleston rhythm, but vary it in at least two bars (try a push: hit on the 'and' of 4, tied over). Track 3 (bass): two notes per bar — root then 5th or a note leading to the next root. Track 4 (drums): ride in triplet swing, hi-hat or snare on 2 and 4.",
  "spec": {
    "template": { "bpm": 110, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "piano", "seq": "r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:h E4:h | C4:h E4:h | D4:w | r:q E4:q E4:q D4:q | C4:h. C4:q | E4:h G4:h | G4:q F4:h. | r:q E4:q F4:q G4:q | E4:h C4:h | D4:w | C4:w |" },
      { "instrument": "epiano", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "drums", "seq": "" } ] },
    "task": "Complete the 16-bar trio: comping, bass and swing drums under the Saints melody.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "epiano", "bass", "drums"] },
      { "kind": "bars", "min": 16, "max": 16 },
      { "kind": "range", "low": "E2", "high": "C4", "track": 1 },
      { "kind": "uses-rhythm", "values": ["q", "8", "h"], "minDistinct": 2, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "I", "I", "I", "I", "I", "I", "V7", "I", "I", "IV", "iv", "I", "vi", "ii", "I"], "barsPerChord": 1, "minRatio": 0.8, "track": 2 },
      { "kind": "drum-pattern", "requires": ["ride"], "track": 3 }
    ],
    "minBars": 16, "maxBars": 16
  }
}
```
