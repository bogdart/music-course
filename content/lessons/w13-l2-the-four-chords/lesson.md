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
  - Hear ii join the four chords, and tell triads from dominant 7ths
prerequisites: [w13-l1-functions-and-cadences]
tags: [harmony, progressions, pop, ear]
songs:
  - { title: "Canon in D", composer: "Johann Pachelbel", public_domain: true }
  - { title: "La Bamba", composer: "Traditional (Mexican son jarocho)", public_domain: true }
  - { title: "Don't Stop Believin'", composer: "Journey (1981)", public_domain: false }
---

# The Four Chords and Their Cousins

A huge number of pop songs use just four chords: **I, V, vi and IV**. That isn't laziness. Between them they cover all three jobs: home (I, vi), away (IV) and tension (V). They also share notes with each other, so they connect smoothly. The trick is **which one you start on**: the same loop feels different depending on where it begins.

## One loop, four rotations

| name | in C | how it's often described |
|---|---|---|
| **I – V – vi – IV** | C G Am F | bright, anthemic |
| **vi – IV – I – V** | Am F C G | wistful, almost minor |
| **I – vi – IV – V** | C Am F G | '50s doo-wop, sweet |
| **IV – I – V – vi** | F C G Am | yearning, never quite home |

The first two use the same chords in the same cycle, just a different starting point. Starting on vi puts a minor chord on the strongest bar, so the whole loop leans sad. (In week 9 you heard vi – IV – I – V in C as i – VI – III – VII in A minor.) Listen and judge the moods for yourself:

```example
{
  "title": "I – V – vi – IV, then vi – IV – I – V (the same four chords)",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 G3 C4]:w | [D3 G3 B3]:w | [E3 A3 C4]:w | [F3 A3 C4]:w | [E3 A3 C4]:w | [F3 A3 C4]:w | [E3 G3 C4]:w | [D3 G3 B3]:w" },
    { "instrument": "bass", "seq": "C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h | A1:h A1:h | F1:h F1:h | C2:h C2:h | G1:h G1:h" }
  ],
  "show": ["pianoroll"]
}
```

These chords have a long history. Pachelbel's *Canon*, which you played in C in week 10, runs **I – V – vi – iii – IV – I – IV – V**: its first half is an ancestor of today's loop. Many songs, Journey's *Don't Stop Believin'* (1981) among them, are built on I – V – vi – IV.

```exercise
{
  "id": "e1", "type": "play-chord", "title": "Two rotations in C",
  "instructions": "I–V–vi–IV, then vi–IV–I–V. Use smooth voicings from week 11: hold common tones.",
  "count": 8, "passScore": 0.7,
  "spec": { "chords": ["C", "G", "Am", "F", "Am", "F", "C", "G"], "inversion": "any", "sequence": true, "bpm": 72, "key": "C" }
}
```

```exercise
{
  "id": "e2", "type": "play-chord", "title": "I – vi – IV – V in G",
  "instructions": "G, Em, C, D. The D chord has F♯ from G major.",
  "count": 4, "passScore": 0.7,
  "spec": { "chords": ["G", "Em", "C", "D"], "inversion": "any", "sequence": true, "bpm": 72, "key": "G" }
}
```

## The three-chord cousin: I – IV – V

Before the four chords there were three. **I – IV – V** is the backbone of blues, early rock'n'roll and folk. The Mexican folk song *La Bamba* just loops I – IV – V over and over. No minor chord at all: it feels bright and driving.

```example
{
  "title": "I – IV – V – IV loop in C, rock'n'roll style",
  "bpm": 130, "timeSig": "4/4", "key": "C", "loop": true,
  "tracks": [
    { "instrument": "piano", "seq": "[C4 E4 G4]:8 [C4 E4 G4]:8 r:q [C4 E4 G4]:8 [C4 E4 G4]:8 r:q | [C4 F4 A4]:8 [C4 F4 A4]:8 r:q [C4 F4 A4]:8 [C4 F4 A4]:8 r:q | [B3 D4 G4]:8 [B3 D4 G4]:8 r:q [B3 D4 G4]:8 [B3 D4 G4]:8 r:q | [C4 F4 A4]:8 [C4 F4 A4]:8 r:q [C4 F4 A4]:8 [C4 F4 A4]:8 r:q" },
    { "instrument": "bass", "seq": "C2:q E2:q G2:q E2:q | F2:q A2:q C3:q A2:q | G2:q B2:q D3:q B2:q | F2:q A2:q C3:q A2:q" }
  ],
  "show": ["pianoroll"]
}
```

## Adding ii

The favourite fifth chord is **ii** (Dm in C). It's minor like vi, but its job is different: it's an *away* chord, a predominant that leads naturally into V. Classic places: **I – vi – ii – V** (a doo-wop variant, where ii replaces IV) and ii – V – I. Clues: ii is minor, and its bass is degree 2, one step above home.

```example
{
  "title": "I – vi – IV – V, then I – vi – ii – V (IV swapped for ii)",
  "bpm": 84, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 G3 C4]:w | [E3 A3 C4]:w | [F3 A3 C4]:w | [D3 G3 B3]:w | [E3 G3 C4]:w | [E3 A3 C4]:w | [F3 A3 D4]:w | [D3 G3 B3]:w" },
    { "instrument": "bass", "seq": "C2:w | A1:w | F1:w | G1:w | C2:w | A1:w | D2:w | G1:w" }
  ],
  "show": ["pianoroll"]
}
```

This lesson opens the progressions rung where ii joins the four chords, in any key. The drill runs at your current progressions rung, so you'll meet ii once the four chords in any key are solid.

```ladder
{ "skill": "progressions", "unlocks": 7, "intro": "Opens \"Adding ii\" (I, ii, IV, V, vi in any key); the drill runs at your current rung." }
```

## Ear corner: triad or dominant 7?

Songs mix triads and sevenths freely, V7 above all. This lesson opens the chord rung that mixes major, minor and dominant 7 (you'll meet it once the three sevenths are solid): first ask "is there the restless extra note?" (dom 7); if not, "bright or dark?".

```ladder
{ "skill": "chords", "unlocks": 7, "intro": "Opens \"Triads and dominant 7\" (major, minor or dominant 7); the drill runs at your current rung." }
```

```exercise
{
  "id": "e3", "type": "roman-analysis", "title": "Analyse in G major",
  "passScore": 0.7,
  "spec": { "key": "G", "chords": ["G", "D", "Em", "C", "Em", "C", "G", "D"], "prompt": "symbols" }
}
```
