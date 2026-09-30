---
id: w23-l1-pentatonic-scales
title: The Pentatonic Scales
week: 23
order: 1
phase: p3
duration_min: 45
goals:
  - Build major pentatonic (1 2 3 5 6) and minor pentatonic (1 b3 4 5 b7) on any root
  - Explain why a pentatonic melody fits almost any chord of its key
  - Hear a pentatonic scale against the full major scale on the same root
prerequisites: [w22-l3-modal-sketches-daw]
tags: [pentatonic, scales, melody, ear]
songs:
  - { title: "Amazing Grace", composer: "John Newton (words), traditional tune", public_domain: true }
---

# The Pentatonic Scales

A [[pentatonic scale]] has five notes per octave instead of seven, and no half steps between neighbours. Folk tunes from Scotland to China, spirituals, blues, rock and pop all lean on it.

## Two pentatonics, one set of keys

- **Major pentatonic** = major scale **minus 4 and 7**: 1 2 3 5 6. In C: C D E G A.
- **Minor pentatonic** = natural minor **minus 2 and 6**: 1 ♭3 4 5 ♭7. In A: A C D E G.

Look again: **C major pentatonic and A minor pentatonic are the same five notes** with a different home — just like C major and A minor, the relative keys. On the keyboard it's easy to see which notes are left: in C, the two gaps are exactly where the half steps were (E–F and B–C).

```keyboard
{ "range": ["C4", "C5"], "highlight": ["C4", "D4", "E4", "G4", "A4", "C5"], "labels": "names", "colors": { "C4": "root", "C5": "root" } }
```

```example
{
  "title": "C major, then C major pentatonic",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q F4:q | G4:q A4:q B4:q C5:q | r:w | C4:q D4:q E4:q G4:q | A4:q C5:h. " } ],
  "show": ["staff", "keyboard"]
}
```

What you should hear: the pentatonic run has two small jumps where the scale "skips" a note, and it sounds a bit more open and folk-like. If it just sounds "shorter" to you, that's a perfectly good start.

### Try it

1. Play C D E F G A B C on your keyboard, slowly, one key per beat. Then play C D E G A C.
2. Play them again and watch your fingers: in the pentatonic run you jump over a key twice (E→G, A→C).
3. Now close your eyes and replay the example above. Listen for those two jumps — a little "skip" in the middle and a bigger stride at the top.

**Check:** you can say *where* in the run the skips are (middle and top), not just that one run is shorter.

**If you can't hear it yet:** play only the top half of each run — G A B C against G A C. The B→C half step at the top is a tiny, squeezed step; the A→C jump is a clear stride. Once that is obvious, go back to the full runs.

## Why it's hard to play wrong

Degrees 4 and 7 are the notes that clash most when held over chords: 4 rubs a half step against the 3rd of the I chord, 7 a half step against its root. Pentatonic simply leaves them out. The remaining five notes sit well over I, IV and vi, so you can wander through most of a progression. One spot to watch: over V, degree 1 (C in C major) sits a half step above the chord's 3rd (B), so don't hold it there. Even so, it is the easiest scale for hooks, riffs and your first solos.

Here an original A minor pentatonic melody (A C D E G) runs over Am – F – C – G. The same spot to watch exists here: over the G chord, C rubs a half step above its B, so this melody avoids C in bar 4. Listen for any clash:

```example
{
  "title": "A minor pentatonic melody over Am - F - C - G",
  "bpm": 96, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "lead", "seq": "E5:q. D5:8 C5:q A4:q | C5:q. A4:8 G4:h | E4:q G4:q A4:q C5:q | D5:q. G4:8 G4:h" },
    { "instrument": "pad", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

The first phrase of "Amazing Grace" uses only G major pentatonic — G A B D E:

```example
{
  "title": "Amazing Grace, first phrase (traditional) - G major pentatonic",
  "bpm": 80, "timeSig": "3/4", "key": "G",
  "tracks": [
    { "instrument": "lead", "seq": "r:h D4:q | G4:h B4:8 G4:8 | B4:h A4:q | G4:h E4:q | D4:h D4:q | G4:h B4:8 G4:8 | B4:h A4:q | D5:h. | D5:h. | r:h." },
    { "instrument": "piano", "seq": "r:h. | [G3 B3 D4]:h. | [G3 B3 D4]:h. | [G3 C4 E4]:h. | [G3 B3 D4]:h. | [G3 B3 D4]:h. | [G3 B3 E4]:h. | [F#3 A3 D4]:h. | [F#3 A3 D4]:h. | [G3 B3 D4]:h." }
  ],
  "show": ["staff"]
}
```

```exercise
{
  "id": "penta-facts",
  "type": "quiz-input",
  "title": "Which notes?",
  "spec": { "questions": [
    { "q": "Which two degrees does major pentatonic leave out of the major scale? (write them like 4 7)", "answer": ["4 7", "4, 7", "4 and 7", "47"], "kind": "text" },
    { "q": "G major pentatonic has the same notes as which minor pentatonic? (note name)", "answer": ["E"], "kind": "note" },
    { "q": "The 3rd note of A minor pentatonic (A, ?, ?) is...", "answer": ["D"], "kind": "note" },
    { "q": "How many notes in one octave of a pentatonic scale?", "answer": ["5"], "kind": "number" }
  ] }
}
```

```exercise
{
  "id": "build-major-penta",
  "type": "build-scale",
  "title": "Build major pentatonic",
  "count": 6,
  "spec": { "roots": ["C", "G", "D", "F", "A", "E"], "scale": "major-pentatonic", "prompt": "name" }
}
```

```exercise
{
  "id": "play-a-minor-penta-1oct",
  "type": "play-scale",
  "title": "Play A minor pentatonic",
  "instructions": "A C D E G A - all white keys.",
  "spec": { "root": "A", "scale": "minor-pentatonic", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 72, "metronome": true }
}
```

```exercise
{
  "id": "play-amazing-grace",
  "type": "play-melody",
  "title": "Play the first phrase of Amazing Grace",
  "spec": { "bpm": 72, "timeSig": "3/4", "key": "G", "seq": "r:h D4:q | G4:h B4:8 G4:8 | B4:h A4:q | G4:h E4:q | D4:h D4:q | G4:h B4:8 G4:8 | B4:h A4:q | D5:h. | D5:h. | r:h.", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "r:h. | [G3 B3 D4]:h. | [G3 B3 D4]:h. | [G3 C4 E4]:h. | [G3 B3 D4]:h. | [G3 B3 D4]:h. | [G3 B3 E4]:h. | [F#3 A3 D4]:h. | [F#3 A3 D4]:h. | [G3 B3 D4]:h." } }
}
```

## Seven notes or five? — the drill

The method (also in the *How to do it* box next to the drill): don't try to judge the "mood" — count the jumps. A run with small, even steps all the way has seven notes; a run with two little skips in it is pentatonic. Replay freely. If the drill is still on an earlier scales rung, its own box explains that one.

```ladder
{ "skill": "scales", "unlocks": 9, "intro": "Opens: seven notes or five? Major against major pentatonic on the same root. The drill runs at your current scales rung." }
```

## Make it: an 8-bar pentatonic melody

1. Loop the template and play only A C D E G along with it — no plan, just two minutes of noodling. Keep anything that makes you want to repeat it.
2. Pick one 2-bar idea you liked. Record or draw it into bars 1–2.
3. Bars 3–4: the same rhythm, different notes (or the same notes, different ending). Bars 5–8: repeat 1–4 and change only the last bar so it lands on A.
4. **Judge it by ear:** loop it three times. Does the last note feel finished? Does any held note rub against the chord? A rub over bars 4 and 8 is almost always a C against the G chord — move it to D or G.
5. **If you're stuck:** take the A minor pentatonic melody above, keep its rhythm, and change two notes per bar.

```exercise
{
  "id": "daw-penta-melody",
  "type": "daw-task",
  "title": "An 8-bar pentatonic melody",
  "spec": {
    "template": { "bpm": 96, "key": "Am", "tracks": [
      { "instrument": "pad", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" },
      { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "Loop the 8 bars and try ideas on the keyboard using only A C D E G. Then draw (or record) an 8-bar melody: bars 5-8 may repeat bars 1-4 with a changed ending. End on A. Afterwards, listen for clashes: if a bar rubs, it is most likely a C held over the G chord (bars 4 and 8) - move it to D or G.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "A", "scale": "minor-pentatonic", "track": 2 },
      { "kind": "note-count", "min": 12, "max": 48, "track": 2 },
      { "kind": "ends-on", "degree": 1, "key": "Am", "track": 2 },
      { "kind": "range", "low": "A3", "high": "A5", "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

## Between lessons

Five minutes: play A minor pentatonic up and down, then noodle over any looped chord from the DAW using only those five notes. Do one Practice session.
