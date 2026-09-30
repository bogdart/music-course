---
id: w21-l1-frequency-roles-and-doubling
title: Frequency Roles and Doubling
week: 21
order: 1
phase: p3
duration_min: 45
goals:
  - Give each layer its own register so the arrangement sounds clear, not muddy
  - Use spread chord voicings that leave room for the bass and the melody
  - Strengthen a melody by doubling it an octave lower on a second instrument
prerequisites: [w20-l3-drum-arrangement-with-fills-daw]
tags: [arrangement, layering, voicing, daw, ear]
songs: []
---

# Frequency Roles and Doubling

Your songs now have four or five tracks. When they all play in the same register they blur together — you can't pick out the melody, the bass loses its punch, the chords go grey ("mud"). The fix is not a mixing trick, it is **arranging**: give each layer its own floor of the building. These are its [[frequency roles]]:

| Floor | Roughly | Who lives there |
|---|---|---|
| **Low** | E1–C3 | Bass, kick |
| **Low-mid** | C3–E4 | Chords, pads |
| **Mid-high** | E4–C6 | Lead melody, counter-melodies |
| **Top** | above C6 | Hi-hats, cymbals |

Two rules follow. **Keep chords below the melody**: the top chord note sits under the melody's lowest note. **Keep chords above the bass**: packed triads below C3 sound muddy, so use a [[spread voicing]] — root low, the other notes spread out above it (C3 G3 E4 instead of C3 E3 G3).

Listen to the same four bars twice. First everything is squeezed around C3–E4:

```example
{
  "title": "Crowded: bass, pad, piano and lead all in the same register",
  "bpm": 92, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "E4:q. D4:8 C4:q G3:q | B3:q. C4:8 D4:h | C4:q. B3:8 A3:q C4:q | A3:w" },
    { "instrument": "pad", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w" },
    { "instrument": "piano", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w" },
    { "instrument": "bass", "seq": "C3:h C3:h | G2:h G2:h | A2:h A2:h | F2:h F2:h" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

Now each layer has its own floor. Look at the piano roll: four separate bands of notes.

```example
{
  "title": "Arranged: bass low, spread pad in the middle, lead on top, hats above",
  "bpm": 92, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "E5:q. D5:8 C5:q G4:q | B4:q. C5:8 D5:h | C5:q. B4:8 A4:q C5:q | A4:w" },
    { "instrument": "pad", "seq": "[C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w" },
    { "instrument": "bass", "seq": "C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h" },
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

### Try it: crowded vs arranged

1. Play the crowded example. Try to follow the melody from start to end. Then try to follow the bass.
2. Play the arranged one and do the same.
3. Ask one question per version: could I hum or point along to the melody without losing it?

**Check:** in the crowded version the melody keeps slipping into the chords (it dips to G3 and A3, inside the pad); in the arranged one it stays on top and the bass is a clear low floor under everything.

**If you can't hear it yet:** play the chord C3 E3 G3 on your keyboard and add the melody's first notes E4 D4 C4 G3 in the same range — your fingers literally bump into each other. Then play C3 G3 E4 with E5 D5 C5 G4 above: the hands have room, and so do the sounds.

```exercise
{
  "id": "play-spread-voicings-v2",
  "type": "play-notes",
  "title": "Play spread voicings",
  "instructions": "Play each voicing as one chord, left hand on the low note, right hand on the other two: C, G, Am, F.",
  "spec": { "prompt": "names", "notes": [["C3", "G3", "E4"], ["B2", "G3", "D4"], ["C3", "A3", "E4"], ["C3", "A3", "F4"]], "ordered": false, "key": "C" }
}
```

## Hearing through a band

Frequency roles are also how you *listen*. In a full band the bass lives on the bottom floor: to find it, ignore the melody on top and follow the lowest, darkest line. This lesson opens the roots rung that plays a small band — drums, a pad, a bass and a melody — arranged exactly like the second example. The drill runs at your current roots rung, which may still be an earlier one. (The same band arrives in the progression drill next lesson — one hard band rung at a time.)

**Before the drill** — the method (also in the *How to do it* box next to the drill): ignore drums and melody and listen to the deepest, thumping sound. Replay, tap your foot with it, then find its first note on the keyboard by searching up or down; the rest one by one. Rehearse it now on the arranged example: can you tap along with only the bass (C – G – A – F)?

```ladder
{ "skill": "roots", "unlocks": 14, "intro": "Opens: find the bass notes inside a full band — listen to the bottom floor. The drill runs at your current roots rung." }
```

## Doubling

[[Doubling]] means a second instrument plays the same line. Chorus melodies are often doubled **an octave lower** by strings or a synth: the line gets bigger and more present, and the verse (without the double) sounds smaller by comparison — exactly the contrast you want.

Honest expectation: to you the octave double may not sound like "one fatter melody" yet. It may sound like a second, lower tune that happens to move in step with the first — a new layer. That is normal while octave hearing is still developing (the octave ladder works on exactly this). Listen for the effect anyway: with the double, the chorus feels heavier and fuller.

**Try it:** play the example, then play the lead's first bar (E5 D5 C5 G4) on your keyboard with one hand and the same notes an octave lower with the other. **Check:** bars 5–8 sound louder and thicker, even if you hear two lines. **If you can't hear it yet:** compare only bar 1 with bar 5 — replay each twice. Heavier is enough; "one melody" comes later with the octave ladder.

```example
{
  "title": "Lead alone (bars 1-4), then doubled an octave lower by strings (bars 5-8)",
  "bpm": 92, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "E5:q. D5:8 C5:q G4:q | B4:q. C5:8 D5:h | C5:q. B4:8 A4:q C5:q | A4:w | E5:q. D5:8 C5:q G4:q | B4:q. C5:8 D5:h | C5:q. B4:8 A4:q C5:q | A4:w" },
    { "instrument": "strings", "seq": "r:w | r:w | r:w | r:w | E4:q. D4:8 C4:q G3:q | B3:q. C4:8 D4:h | C4:q. B3:8 A3:q C4:q | A3:w" },
    { "instrument": "bass", "seq": "C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h | C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

```exercise
{
  "id": "register-quiz-v2",
  "type": "quiz",
  "spec": { "questions": [
    { "q": "Where should the top note of your chord voicing sit?", "choices": ["Above the melody", "Below the melody's lowest note"], "answer": 1 },
    { "q": "Packed triads below C3 tend to sound...", "choices": ["Bright", "Muddy"], "answer": 1 },
    { "q": "C3 G3 E4 is a spread voicing of which chord?", "choices": ["C major", "E minor", "G major"], "answer": 0, "explain": "The notes are C, E and G — only spread over more than an octave." },
    { "q": "Doubling a melody an octave lower adds...", "choices": ["New pitch names", "No new pitch names, but more weight"], "answer": 1, "explain": "Same note names an octave apart. Your ear may still hear it as a second line for now — the weight is there either way." }
  ] }
}
```

```exercise
{
  "id": "daw-demud",
  "type": "daw-task",
  "title": "Un-muddy the arrangement",
  "spec": {
    "template": { "bpm": 92, "key": "C", "tracks": [
      { "instrument": "lead", "seq": "E4:q. D4:8 C4:q G3:q | B3:q. C4:8 D4:h | C4:q. B3:8 A3:q C4:q | A3:w" },
      { "instrument": "pad", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w" },
      { "instrument": "bass", "seq": "C3:h C3:h | G2:h G2:h | A2:h A2:h | F2:h F2:h" }
    ] },
    "task": "This is the crowded version. Give each part its own floor, one step at a time, playing after each: 1) move the bass down an octave (the low end gets firmer); 2) move the lead up an octave (the melody pops out); 3) spread the pad (C3 G3 E4 style, top note below the melody). Change only octaves and voicings, never the note names. Stuck? Copy the voicings from the arranged example above.",
    "checks": [
      { "kind": "range", "low": "E4", "high": "C6", "track": 0 },
      { "kind": "range", "low": "B2", "high": "G4", "track": 1 },
      { "kind": "range", "low": "E1", "high": "C3", "track": 2 },
      { "kind": "in-key", "key": "C", "scale": "major", "track": 1 },
      { "kind": "bars", "min": 4, "max": 4 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

```exercise
{
  "id": "daw-double-lead",
  "type": "daw-task",
  "title": "Double your chorus",
  "spec": {
    "template": { "bpm": 92, "key": "C", "tracks": [
      { "instrument": "lead", "seq": "E5:q. D5:8 C5:q G4:q | B4:q. C5:8 D5:h | C5:q. B4:8 A4:q C5:q | A4:w" },
      { "instrument": "pad", "seq": "[C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w" },
      { "instrument": "bass", "seq": "C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h" },
      { "instrument": "strings", "seq": "" }
    ] },
    "task": "Copy the lead into the strings track and move it down an octave. Then try a second version where the strings double only bars 3-4. Keep the version you prefer.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["lead", "pad", "bass", "strings"] },
      { "kind": "range", "low": "G3", "high": "E5", "track": 3 },
      { "kind": "in-key", "key": "C", "scale": "major", "track": 3 },
      { "kind": "note-count", "min": 4, "track": 3 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

## Between lessons

Open an earlier song of yours, look at the piano roll and move any track that sits on another's floor. Play before and after.
