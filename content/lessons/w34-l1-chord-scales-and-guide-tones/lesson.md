---
id: w34-l1-chord-scales-and-guide-tones
title: Chord-Scales and Guide-Tone Lines
week: 34
order: 1
phase: p4
duration_min: 45
goals:
  - Match each chord of a major ii–V–I to its chord-scale (Dorian, Mixolydian, major)
  - Play guide-tone lines (3rds and 7ths) through a ii–V–I
  - Write a stepwise guide-tone melody in the DAW
prerequisites: [w33-l4-reharmonise-three-ways-daw, w26-l1-dorian-and-mixolydian]
tags: [improvisation, chord-scales, guide-tones, jazz]
---

# Chord-Scales and Guide-Tone Lines

Making up a melody over changes feels impossible until you realise you need only two things: **which notes are safe** over each chord, and **which notes carry the harmony**. Today covers both.

## Chord-scales

A [[chord-scale]] is a scale that fits a chord: its four chord tones plus the in-between notes. For the ii–V–I in C, the chord-scales are modes you know from week 26:

| Chord | Chord-scale | Chord tones | In-between notes | Careful |
|-------|-------------|-------------|------------------|---------|
| Dm7 | D Dorian | D F A C | E, G, B | — |
| G7 | G Mixolydian | G B D F | A, C, E | C: sitting on it sounds like a sus4 |
| Cmaj7 | C major | C E G B | D, F, A | F: rubs a half step above E |

Notice something? D Dorian, G Mixolydian and C major are **the same seven notes**. In a ii–V–I inside one key, the notes don't change. What changes is *which notes are the chord tones*, the places a phrase can land. That is why "just playing C major" over these chords often sounds aimless: it ignores the moving targets. The "careful" notes are the same rub you met with the 11th in week 30: pass through them, don't park on them.

```example
{
  "title": "D Dorian over Dm7 → G Mixolydian over G7 → C major over Cmaj7",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "D4:8 E4:8 F4:8 G4:8 A4:8 B4:8 C5:8 D5:8 | G4:8 A4:8 B4:8 C5:8 D5:8 E5:8 F5:8 G5:8 | C5:8 D5:8 E5:8 F5:8 G5:8 A5:8 B5:8 C6:8 | C6:w |" },
    { "instrument": "piano", "seq": "[D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w | [C3 E3 B3]:w |" }
  ],
  "show": ["keyboard"]
}
```

## Guide-tone lines

Last week you named the 3rd and 7th of a chord its [[guide tones]]. Through a ii–V–I they form two smooth lines: **C → B → B** (7th → 3rd → 7th) and **F → F → E** (3rd → 7th → 3rd). If a melody lands on these notes when the chords change, a listener hears the changes even with no piano playing. Listen: only a bass and one guide-tone line.

```example
{
  "title": "A guide-tone line over the bass alone",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "F4:w | F4:w | E4:w | E4:w | C5:w | B4:w | B4:w | B4:w |" },
    { "instrument": "bass", "seq": "D2:w | G1:w | C2:w | C2:w | D2:w | G1:w | C2:w | C2:w |" }
  ],
  "show": ["staff"]
}
```

### Try it

1. Play the example above and listen to the lead only. When the bass moves from G to C, the lead's F slips down to E. Does that half step make the arrival feel like a "click" into place?
2. Now hold **D4** with your right hand through all four bass notes of the example (press it again on each bar). D fits every chord, but nothing clicks — the changes blur.
3. Play the guide-tone line F F E E yourself over the example's bass and compare with your flat D line.

**Check:** you can point to the bar where the guide-tone line makes the music "arrive", and say why the plain D line doesn't.

**If you can't hear it yet:** play the full chords with your left hand (the shells from week 31) while your right plays F F E E. Then remove the left hand and play the line alone: listen for the ghost of the chords that stays behind.

## Drills

```exercise
{
  "id": "e1-play-dorian",
  "type": "play-scale",
  "title": "D Dorian",
  "passScore": 0.7,
  "spec": { "root": "D", "scale": "dorian", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 80, "metronome": true }
}
```

```exercise
{
  "id": "e2-play-mixolydian",
  "type": "play-scale",
  "title": "G Mixolydian",
  "passScore": 0.7,
  "spec": { "root": "G", "scale": "mixolydian", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 80, "metronome": true }
}
```

```exercise
{
  "id": "e3-play-guide-tones",
  "type": "play-melody",
  "title": "Play the guide-tone lines",
  "instructions": "One note per chord: F, F, E, E, then C, B, B, B. You are playing the harmony as a single line.",
  "passScore": 0.7,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "F4:w | F4:w | E4:w | E4:w | C5:w | B4:w | B4:w | B4:w |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "piano", "seq": "[D3 A3]:w | [G2 D3]:w | [C3 G3]:w | [C3 G3]:w | [D3 A3]:w | [G2 D3]:w | [C3 G3]:w | [C3 G3]:w |" } }
}
```

```exercise
{
  "id": "e4-chord-scale-quiz",
  "type": "quiz",
  "title": "Match chord and scale",
  "passScore": 0.7,
  "spec": { "questions": [
    { "q": "Gm7 as the ii chord in F major takes which chord-scale?", "choices": ["G Dorian", "G Mixolydian", "G major", "G Phrygian"], "answer": 0, "explain": "ii chords take Dorian: G A Bb C D E F, all notes of F major." },
    { "q": "C7 as the V chord in F major takes…", "choices": ["C major", "C Mixolydian", "C Dorian", "C Lydian"], "answer": 1 },
    { "q": "The guide tones of G7 are…", "choices": ["G and D", "B and F", "D and A", "G and B"], "answer": 1 },
    { "q": "Over Cmaj7, which scale note should you pass through rather than land on?", "choices": ["D", "F", "A", "B"], "answer": 1, "explain": "F sits a half step above the 3rd, E, and rubs against it." }
  ] }
}
```

## Ear: six scale colours

Chord-scales are modes, so today's ear rung is about mode colours. **Honest note:** Lydian vs major is usually the hardest pair at first, because they differ by a single note (the ♯4).

**Before the drill** — the method (see *How to do it* beside it): **sort first, then hunt one note.** Bright group: major, Mixolydian (♭7, bluesy near the top), Lydian (♯4, floating as the scale passes the 4th). Dark group: minor, Dorian (hopeful raised 6), Phrygian (♭2, a dark half step right above home). If unsure, play the candidate scales on the same root and compare. The drill runs at your current scales rung; its box has that rung's method.

```ladder
{ "skill": "scales", "unlocks": 12, "intro": "Opens the six-scale rung (Lydian and Phrygian join major, minor, Dorian and Mixolydian); the drill runs at your current scales rung." }
```

## Make it

1. **Bar by bar, pick the two guide tones** of the chord (Dm7: F, C · G7: B, F · Cmaj7: E, B) and write them on paper.
2. **Beat 1 of each bar:** choose the guide tone nearest to your previous note. Start on F4 or C5.
3. **Beat 3:** repeat it, or step to the other guide tone / a neighbour — a whole step at most.
4. Play the loop; change one note at a time.

**Judge it by ear:** mute the piano and play your line with nothing else. If you can still "feel" where the chords change, it works.

**If you're stuck:** start with the two lines from the lesson (F F E E, then C B B B) and change only beat 3 of each bar.

```exercise
{
  "id": "e5-daw-guide-melody",
  "type": "daw-task",
  "title": "A guide-tone melody",
  "instructions": "Write a slow melody in half notes over the ii–V–I–I loop. Put a 3rd or 7th of the current chord on beats 1 and 3, and never move more than a whole step. It will sound surprisingly like a real tune. About 15 minutes.",
  "spec": {
    "template": { "bpm": 80, "key": "C", "timeSig": "4/4", "tracks": [ { "instrument": "lead", "seq": "" }, { "instrument": "piano", "seq": "[D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w | [C3 E3 B3]:w | [D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w | [C3 E3 B3]:w |" } ] },
    "task": "8 bars of half notes built from guide tones, moving by step.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "uses-rhythm", "values": ["h"], "minDistinct": 1, "track": 0 },
      { "kind": "max-leap", "semitones": 2, "track": 0 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["ii7", "V7", "Imaj7", "Imaj7"], "barsPerChord": 1, "minRatio": 0.85, "track": 0 },
      { "kind": "range", "low": "C4", "high": "C6", "track": 0 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

## Between lessons

Play the guide-tone lines through ii–V–I in C and then in F (Gm7 C7 Fmaj7: B♭ B♭ A, F E E), once a day.
