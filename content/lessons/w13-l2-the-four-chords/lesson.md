---
id: w13-l2-the-four-chords
title: The Four Chords and Their Cousins
week: 13
order: 2
phase: p2
duration_min: 45
goals:
  - Play I–V–vi–IV, vi–IV–I–V, I–vi–IV–V and I–IV–V in C and G
  - Explain why rotating the same four chords changes the mood
  - Identify 4-chord progressions in major by ear
prerequisites: [w13-l1-functions-and-cadences]
tags: [harmony, progressions, pop, ear]
songs:
  - { title: "Canon in D", composer: "Johann Pachelbel", public_domain: true }
  - { title: "La Bamba", composer: "Traditional (Mexican son jarocho)", public_domain: true }
  - { title: "Don't Stop Believin'", composer: "Journey (1981)", public_domain: false }
  - { title: "With or Without You", composer: "U2 (1987)", public_domain: false }
---

# The Four Chords and Their Cousins

A huge number of pop songs use just four chords: **I, V, vi and IV**. That isn't laziness. Those four cover all three functions — tonic (I, vi), subdominant (IV) and dominant (V) — and they sit a comfortable fifth or third apart, so they connect smoothly. The trick is **which one you start on**: the same loop feels different depending on where it "begins".

## One loop, four rotations

| name | in C | mood |
|---|---|---|
| **I – V – vi – IV** | C G Am F | bright, anthemic |
| **vi – IV – I – V** | Am F C G | wistful; sounds almost minor |
| **I – vi – IV – V** | C Am F G | '50s doo-wop, sweet |
| **IV – I – V – vi** | F C G Am | yearning, "never quite home" |

The first two use the same chords in the same cycle — just a different starting point. Starting on vi puts a minor chord on the strongest bar, so the whole loop leans sad. (Remember week 9: vi – IV – I – V in C is i – VI – III – VII in A minor.)

```example
{
  "title": "I – V – vi – IV, then vi – IV – I – V (same four chords)",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 G3 C4]:w | [D3 G3 B3]:w | [E3 A3 C4]:w | [F3 A3 C4]:w | [E3 A3 C4]:w | [F3 A3 C4]:w | [E3 G3 C4]:w | [D3 G3 B3]:w" },
    { "instrument": "bass", "seq": "C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h | A1:h A1:h | F1:h F1:h | C2:h C2:h | G1:h G1:h" }
  ],
  "show": ["pianoroll"]
}
```

These four have a long history. Pachelbel's *Canon* (c. 1700), in D, runs **D – A – Bm – F#m – G – D – G – A**: its first half is I – V – vi – iii, the ancestor of today's loop. Songs like Journey's *Don't Stop Believin'* (1981, E major) and U2's *With or Without You* (1987, D major) are built on I – V – vi – IV.

```chords
{ "key": "D", "bars": ["D", "A", "Bm", "F#m", "G", "D", "G", "A"], "roman": true, "play": true, "bpm": 70 }
```

```exercise
{
  "id": "e1", "type": "play-chord", "title": "The four rotations in C",
  "instructions": "Use smooth voicings from week 11 — hold common tones.",
  "count": 8, "passScore": 0.8,
  "spec": { "chords": ["C", "G", "Am", "F", "Am", "F", "C", "G"], "inversion": "any", "sequence": true, "bpm": 72 }
}
```

```exercise
{
  "id": "e2", "type": "play-chord", "title": "I – vi – IV – V in G",
  "count": 8, "passScore": 0.8,
  "spec": { "chords": ["G", "Em", "C", "D", "G", "Em", "C", "D"], "inversion": "any", "sequence": true, "bpm": 72 }
}
```

## The three-chord cousin: I – IV – V

Before the four chords, there were three. **I – IV – V** is the backbone of blues, early rock'n'roll and folk. The Mexican folk song *La Bamba* just loops I – IV – V over and over. No minor chord at all: it feels bright and driving.

```example
{
  "title": "I – IV – V – IV loop in C, rock-and-roll style",
  "bpm": 130, "timeSig": "4/4", "key": "C", "loop": true,
  "tracks": [
    { "instrument": "piano", "seq": "[C4 E4 G4]:8 [C4 E4 G4]:8 r:q [C4 E4 G4]:8 [C4 E4 G4]:8 r:q | [C4 F4 A4]:8 [C4 F4 A4]:8 r:q [C4 F4 A4]:8 [C4 F4 A4]:8 r:q | [B3 D4 G4]:8 [B3 D4 G4]:8 r:q [B3 D4 G4]:8 [B3 D4 G4]:8 r:q | [C4 F4 A4]:8 [C4 F4 A4]:8 r:q [C4 F4 A4]:8 [C4 F4 A4]:8 r:q" },
    { "instrument": "bass", "seq": "C2:q E2:q G2:q E2:q | F2:q A2:q C3:q A2:q | G2:q B2:q D3:q B2:q | F2:q A2:q C3:q A2:q" }
  ],
  "show": ["pianoroll"]
}
```

```exercise
{
  "id": "e3", "type": "ear-bass", "title": "Follow the bass",
  "instructions": "Play each root as the chords go by. The bass tells you the progression.",
  "count": 8, "passScore": 0.75,
  "spec": { "key": "C", "chords": ["I", "IV", "V", "vi"], "answer": "play" }
}
```

```exercise
{
  "id": "e4", "type": "ear-progression", "title": "Which rotation? (block chords)",
  "instructions": "First chord: major (I or IV) or minor (vi)? Then follow the bass.",
  "count": 10, "passScore": 0.7,
  "spec": { "key": "C", "mode": "major", "length": 4, "chords": ["I", "IV", "V", "vi"], "style": "block" }
}
```

```exercise
{
  "id": "e5", "type": "ear-progression", "title": "Same, broken chords, other keys",
  "count": 10, "passScore": 0.7,
  "spec": { "key": "random", "mode": "major", "length": 4, "chords": ["I", "IV", "V", "vi"], "style": "arpeggio" }
}
```

```exercise
{
  "id": "e6", "type": "roman-analysis", "title": "Analyse in D major",
  "count": 8, "passScore": 0.8,
  "spec": { "key": "D", "chords": ["D", "A", "Bm", "G", "Bm", "G", "D", "A"], "prompt": "symbols" }
}
```
