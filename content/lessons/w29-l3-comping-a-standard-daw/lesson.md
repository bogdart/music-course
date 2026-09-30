---
id: w29-l3-comping-a-standard-daw
title: The Minor ii–V–i and Comping a Standard
week: 29
order: 3
phase: p4
duration_min: 50
goals:
  - Play the minor ii–V–i (m7b5 – V7 – i) with shells
  - Comp in the Charleston rhythm with shell voicings
  - "Comp the Saints in the DAW over a given melody, bass and drums"
prerequisites: [w29-l2-jazz-blues]
tags: [jazz, comping, minor, daw, public-domain]
songs:
  - { title: "When the Saints Go Marching In", composer: "Traditional", public_domain: true }
  - { title: "Autumn Leaves", composer: "Joseph Kosma", public_domain: false }
---

# The Minor ii–V–i and Comping a Standard

Two things today: the minor-key version of the ii–V–I, and a proper comping rhythm, which you then use on "When the Saints". In week 5 you played its first 8 bars; today you hear all 16.

**This lesson spans two sessions.** Session 1: the minor ii–V–i and the Charleston rhythm, with their two drills (play the ii–V–is, tap the Charleston). Session 2: the Saints (listen, comp bars 9–16 by hand, then the DAW task) and the ear drill.

## The minor ii–V–i

Build the ii–V–i of A minor from what you already know:

- **ii** comes from the A natural minor scale: B–D–F–A. That is **Bm7♭5**, the half-diminished chord (week 24). Written **iiø7**.
- **V** is E7, with G♯: the raised 7th of harmonic minor (week 9), so it pulls hard to A.
- **i** is Am, often with a 7th: **Am7**.

Compared with the major ii–V–I, the minor one sounds darker and more dramatic: the ♭5 in the ii chord and the G♯ of the V7 both lean strongly toward home. By reference: "Autumn Leaves" (Kosma) alternates a major ii–V–I and a minor ii–V–i, which is why it feels like light and shadow taking turns.

```example
{
  "title": "Minor ii–V–i in A: Bm7b5 – E7 – Am7 (shells)",
  "bpm": 70, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "piano", "seq": "[B2 D3 A3]:w | [E2 D3 G#3]:w | [A2 C3 G3]:w | [A2 C3 G3]:w |" },
    { "instrument": "bass", "seq": "B1:w | E2:w | A1:w | A1:w |" }
  ],
  "show": ["keyboard", "staff"]
}
```

Follow the upper notes as you did in major: D→D→C and A→G♯→G. Half steps again.

### Try it

1. Play the pair below: first the major ii–V–I in C, then the minor ii–V–i in A.
2. Listen to the **first chord** of each: Dm7 is mellow; Bm7♭5 has a sour, pinched edge (that's the ♭5, F).
3. Listen to the **last chord**: Cmaj7 lands in daylight; Am7 lands in shadow.

```example
{
  "title": "Major ii–V–I in C, then minor ii–V–i in A",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w | r:w | [B2 D3 A3]:w | [E2 D3 G#3]:w | [A2 C3 G3]:w | r:w |" },
    { "instrument": "bass", "seq": "D2:w | G1:w | C2:w | r:w | B1:w | E2:w | A1:w | r:w |" }
  ],
  "show": ["keyboard"]
}
```

**Check:** on a replay with eyes closed, you can say "light" or "dark" at the start of each group, before the last chord.

**If you can't hear it yet:** play Dm7 (D F A C) and Bm7♭5 (B D F A) back to back yourself, slowly. Three notes are shared; only the bottom moves. Then play just D–A (a clean fifth) and B–F (a tritone): that rub is the whole difference.

## The Charleston rhythm

Long whole-note chords make a band sound like a church organ. Jazz comping is rhythmic. The most famous comping figure is the [[Charleston rhythm]]: a hit on beat 1, a second short hit on the "and" of 2, then silence for the rest of the bar, which leaves room for the melody.

```example
{
  "title": "Charleston comping on C6 and G7, with a swing ride",
  "bpm": 110, "timeSig": "4/4", "key": "C",
  "swing": 0.6,
  "tracks": [
    { "instrument": "piano", "seq": "[C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [G2 F3 B3]:q. [G2 F3 B3]:8 r:h | [G2 F3 B3]:q. [G2 F3 B3]:8 r:h |" },
    { "instrument": "drums", "seq": "ride:q ride:8 ride:8 ride:q ride:8 ride:8 | ride:q ride:8 ride:8 ride:q ride:8 ride:8 | ride:q ride:8 ride:8 ride:q ride:8 ride:8 | ride:q ride:8 ride:8 ride:q ride:8 ride:8 |" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

## Comping the Saints

"When the Saints Go Marching In" is traditional (public domain). With jazz changes it becomes a little standard: C6 for most of the first 8 bars, G7 in bar 8, C7 in bar 10 (the tonic turned V7/IV, as in rhythm changes), the borrowed Fm6 in bar 12 (the minor iv from week 16), and vi–ii–V on the way home.

```example
{
  "title": "When the Saints: melody, Charleston comping, bass (16 bars)",
  "bpm": 110, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:h E4:h | C4:h E4:h | D4:w | r:q E4:q E4:q D4:q | C4:h. C4:q | E4:h G4:h | G4:q F4:h. | r:q E4:q F4:q G4:q | E4:h C4:h | D4:w | C4:w |" },
    { "instrument": "epiano", "seq": "[C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [G2 F3 B3]:q. [G2 F3 B3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [C3 E3 Bb3]:q. [C3 E3 Bb3]:8 r:h | [F2 E3 A3]:q. [F2 E3 A3]:8 r:h | [F2 D3 Ab3]:q. [F2 D3 Ab3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [A2 C3 G3]:q. [A2 C3 G3]:8 r:h | [D3 F3 C4]:h [G2 F3 B3]:h | [C3 E3 A3]:w |" },
    { "instrument": "bass", "seq": "C2:h G1:h | C2:h G1:h | C2:h G1:h | C2:h G1:h | C2:h G1:h | C2:h G1:h | C2:h E2:h | G1:h D2:h | C2:h G1:h | C2:h E2:h | F1:h C2:h | F1:h Ab1:h | C2:h G1:h | A1:h E2:h | D2:h G1:h | C2:w |" }
  ],
  "show": ["pianoroll"]
}
```

Three comping habits: **stay out of the melody's way** (hits speak best where the tune holds a long note, as in bars 2, 4 and 8); **vary the rhythm** (try a *push*: hit on the "and" of 4, a beat early, and let it ring over the bar line); **keep it low and light** (shells between E2 and C4).

## Drills

```exercise
{
  "id": "e1-minor-ii-v-i",
  "type": "play-melody",
  "title": "Minor ii–V–i in A, then in D",
  "instructions": "Left-hand shells. In D minor: Em7b5 – A7 – Dm7 (spell each chord to yourself before you play it).",
  "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "Am", "seq": "[B2 D3 A3]:w | [E2 D3 G#3]:w | [A2 C3 G3]:w | r:w | [E3 G3 D4]:w | [A2 G3 C#4]:w | [D3 F3 C4]:w | r:w |", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e3-tap-charleston",
  "type": "rhythm-tap",
  "title": "Tap the Charleston",
  "passScore": 0.7,
  "spec": { "bpm": 100, "timeSig": "4/4", "seq": "x:q. x:8 r:h | x:q. x:8 r:h |", "showNotation": true, "countIn": 1, "loops": 4 }
}
```

```exercise
{
  "id": "e4-comp-last-eight",
  "type": "play-melody",
  "title": "Comp bars 9–16 in the Charleston rhythm",
  "passScore": 0.7,
  "spec": { "bpm": 90, "timeSig": "4/4", "key": "C", "seq": "[C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [C3 E3 Bb3]:q. [C3 E3 Bb3]:8 r:h | [F2 E3 A3]:q. [F2 E3 A3]:8 r:h | [F2 D3 Ab3]:q. [F2 D3 Ab3]:8 r:h | [C3 E3 A3]:q. [C3 E3 A3]:8 r:h | [A2 C3 G3]:q. [A2 C3 G3]:8 r:h | [D3 F3 C4]:h [G2 F3 B3]:h | [C3 E3 A3]:w |", "showStaff": false, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "bass", "seq": "C2:h G1:h | C2:h E2:h | F1:h C2:h | F1:h Ab1:h | C2:h G1:h | A1:h E2:h | D2:h G1:h | C2:w |" } }
}
```

## Make it

1. **Mute the melody first** and comp bars 1–8 against bass and ride only: C6 shell (C E A) in Charleston rhythm, G7 shell (G F B) in bar 8. Copy-paste bar 1 for bars 2–7.
2. **Unmute the melody.** Where the tune moves (bars 1, 3, 5), keep your hits short; where it holds a long note (bars 2, 4, 8), that's your space.
3. **Bars 9–16:** reuse the shells from the drill above (C7, Fmaj7, Fm6, Am7, Dm7 G7, C6).
4. **Vary two bars:** try a push (hit on the "and" of 4, tied over the bar line) into bar 10 or bar 13, and one long whole-note chord where the melody is busy.

**Judge it by ear:** play the whole thing and listen to the melody only. If you notice the comping more than the tune, thin it out (fewer hits, lower velocity). If bar 12 doesn't sound suddenly darker, check the A♭ in the Fm6 shell.

**If you're stuck:** leave all 16 bars in plain Charleston first — that already works — and add the variations last.

```exercise
{
  "id": "e5-daw-comp-saints",
  "type": "daw-task",
  "title": "Comp the Saints",
  "instructions": "Melody (track 1), bass (track 3) and a swing ride (track 4) are ready. On the epiano track, comp all 16 bars with shells, mostly in the Charleston rhythm, following the changes above. Vary the rhythm in at least two bars (a push, or a single long chord where the melody is busy). About 30 minutes, the main part of session 2; copy and paste repeated bars. (The automatic check reads the tonic as plain C, so the A of your C6 shell counts against it a little; that is expected.)",
  "spec": {
    "template": { "bpm": 110, "key": "C", "timeSig": "4/4", "swing": 0.6, "tracks": [
      { "instrument": "piano", "seq": "r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:h E4:h | C4:h E4:h | D4:w | r:q E4:q E4:q D4:q | C4:h. C4:q | E4:h G4:h | G4:q F4:h. | r:q E4:q F4:q G4:q | E4:h C4:h | D4:w | C4:w |" },
      { "instrument": "epiano", "seq": "" },
      { "instrument": "bass", "seq": "C2:h G1:h | C2:h G1:h | C2:h G1:h | C2:h G1:h | C2:h G1:h | C2:h G1:h | C2:h E2:h | G1:h D2:h | C2:h G1:h | C2:h E2:h | F1:h C2:h | F1:h Ab1:h | C2:h G1:h | A1:h E2:h | D2:h G1:h | C2:w |" },
      { "instrument": "drums", "seq": "ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 |" } ] },
    "task": "Comp 16 bars of the Saints on epiano: shells, mostly Charleston rhythm, with some variation.",
    "checks": [
      { "kind": "bars", "min": 16, "max": 16 },
      { "kind": "note-count", "min": 40, "track": 1 },
      { "kind": "range", "low": "E2", "high": "C4", "track": 1 },
      { "kind": "uses-rhythm", "values": ["q.", "8", "h", "w"], "minDistinct": 2, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "I", "I", "I", "I", "I", "I", "V7", "I", "I7", "IVmaj7", "iv", "I", "vi7", "ii7", "I"], "barsPerChord": 1, "minRatio": 0.65, "track": 1 },
      { "kind": "custom", "id": "vary-rhythm", "note": "Self-check: at least two bars use a rhythm other than the plain Charleston." }
    ],
    "minBars": 16, "maxBars": 16
  }
}
```

## Ear review

**Before the drill** — the method (see *How to do it* beside it): bass first; 2 → 5 → 1 in the bass is the ii–V–I path, then colour confirms it. At an earlier rung, the box shows that rung's method.

```ladder
{ "skill": "progressions", "unlocks": 18, "intro": "Progressions at your level, up to the ii–V–I in sevenths." }
```

## Between lessons

Play the minor ii–V–i in A and D once a day, then in one new key of your choice. Loop your Saints comp and listen once with fresh ears: does it leave the melody room?
