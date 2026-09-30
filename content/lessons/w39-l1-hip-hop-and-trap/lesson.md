---
id: w39-l1-hip-hop-and-trap
title: Hip-Hop and Trap
week: 39
order: 1
phase: p4
duration_min: 45
goals:
  - Program a boom-bap beat and a half-time trap beat with hi-hat rolls
  - Write an 808-style bass that starts with the kick
  - Make a short "sample-style" chord loop with the app's instruments
prerequisites: [w38-l3-three-genre-sketches-daw, w23-l2-genre-grooves]
tags: [songwriting, hip-hop, trap, production, genre]
songs:
  - { title: "Still D.R.E.", artist: "Dr. Dre feat. Snoop Dogg", public_domain: false }
  - { title: "Mask Off", artist: "Future", public_domain: false }
---

# Hip-Hop and Trap

Last week's genres were song-first. This week's are **beat-first**. Hip-hop production started with **sampling**: looping a bar or two of an old record and rapping over it. The musical lesson inside that history: **a short loop, repeated, can carry a whole track** if the drums and bass are strong. We can't sample, but we can write *sample-style* loops.

## Boom-bap

Classic 90s hip-hop (about 85–95 BPM): a punchy kick, a fat snare on 2 and 4, 8th-note hats. Over it, a 1–2 bar loop — "Still D.R.E." (by reference) is little more than a short, stabbing piano figure over a hard beat. Our loop: Am7 and Fmaj7, two short hits per bar.

```example
{
  "title": "Boom-bap at 90 with a 2-bar sample-style loop (original)",
  "bpm": 90, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 |" },
    { "instrument": "epiano", "seq": "[A3 C4 E4 G4]:q. [A3 C4 E4 G4]:8 r:h | [F3 A3 C4 E4]:q. [F3 A3 C4 E4]:8 r:h | [A3 C4 E4 G4]:q. [A3 C4 E4 G4]:8 r:h | [F3 A3 C4 E4]:q. [F3 A3 C4 E4]:8 r:h |" },
    { "instrument": "bass", "seq": "A1:q. A1:8 r:h | F1:q. F1:8 r:h | A1:q. A1:8 r:h | F1:q. F1:8 r:h |" }
  ],
  "show": ["pianoroll"], "loop": true
}
```

Listen twice: first only the low **boom** (kick), then only the **crack** (snare), counting "1 and 2 and 3 and 4 and". The kick hits beat 1 and the "and" of 3; the snare hits 2 and 4. Tap that kick–snare pattern:

```exercise
{
  "id": "e1-tap-boombap",
  "type": "rhythm-tap",
  "title": "Tap the boom-bap kick and snare",
  "instructions": "Kick on 1, snare on 2, kick on the 'and' of 3, snare on 4.",
  "passScore": 0.7,
  "spec": { "bpm": 90, "timeSig": "4/4", "seq": "x:q x:q r:8 x:8 x:q |", "showNotation": true, "countIn": 1, "loops": 4 }
}
```

```exercise
{
  "id": "e2-play-loop",
  "type": "play-melody",
  "title": "Play the sample-style loop",
  "passScore": 0.7,
  "spec": {
    "bpm": 85, "timeSig": "4/4", "key": "Am",
    "seq": "[A3 C4 E4 G4]:q. [A3 C4 E4 G4]:8 r:h | [F3 A3 C4 E4]:q. [F3 A3 C4 E4]:8 r:h |",
    "showStaff": false, "showKeyboard": true, "countIn": 1,
    "backing": { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 |" }
  }
}
```

## Trap

Trap (about 130–150 BPM) is in [[half-time]] (week 23): the clap lands only on **beat 3**, so the groove feels half as fast as the hi-hats. Two signature moves:

- **Hi-hat rolls** — bursts of 32nd notes between steady 16ths.
- **[[808]] bass** — long, deep bass notes that start together with a kick and ring on.

Trap melodies are often dark and minor, a single short motif looped (think of the looping flute in Future's "Mask Off", by reference). Ours sits in A minor and leans on **F**, the 6th note of A natural minor. F falling a half step to E (♭6 to 5) is a small sighing move that sounds dark. Note what it is *not*: the Phrygian colour (week 26) is the ♭2 — B♭ in A — and this motif doesn't use it.

```example
{
  "title": "Half-time trap at 140: 16th hats, 32nd roll, 808 bass on the kicks",
  "bpm": 140, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [clap hihat]:16 hihat:16 [kick hihat]:16 hihat:16 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 | [kick hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [clap hihat]:16 hihat:16 [kick hihat]:16 hihat:16 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 | [kick hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [clap hihat]:16 hihat:16 [kick hihat]:16 hihat:16 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 | [kick hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [clap hihat]:16 hihat:16 [kick hihat]:16 hihat:16 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 |" },
    { "instrument": "bass", "seq": "A1:q. A1:q A1:q. | F1:q. F1:q F1:q. | A1:q. A1:q A1:q. | F1:q. F1:q F1:q. |" },
    { "instrument": "pluck", "seq": "E5:8 r:8 E5:8 F5:8 E5:q r:q | C5:8 r:8 C5:8 B4:8 A4:q r:q | E5:8 r:8 E5:8 F5:8 E5:q r:q | C5:8 r:8 B4:8 C5:8 A4:q r:q |" }
  ],
  "show": ["pianoroll"], "loop": true
}
```

```exercise
{
  "id": "e3-play-trap-melody",
  "type": "play-melody",
  "title": "Play the trap motif",
  "passScore": 0.7,
  "spec": {
    "bpm": 120, "timeSig": "4/4", "key": "Am",
    "seq": "E5:8 r:8 E5:8 F5:8 E5:q r:q | C5:8 r:8 C5:8 B4:8 A4:q r:q |",
    "showStaff": true, "showKeyboard": true, "countIn": 1,
    "backing": { "instrument": "bass", "seq": "A1:q. A1:q A1:q. | F1:q. F1:q F1:q. |" }
  }
}
```

## Ear: grooves and bass

Rhythm method: tap your foot on the beat, find the strong ONE, then listen to one layer at a time. Bass method: listen only to the lowest sound, search low keys with higher/lower until one merges with it, then follow each move. The *How to do it* box under each drill shows the exact method for your current rung.

```ladder
{ "skill": "rhythm", "unlocks": 16, "intro": "Beat-first music lives on rhythm — this drill runs at your current rhythm rung." }
```

```ladder
{ "skill": "roots", "unlocks": 15, "intro": "An 808 line is just the roots, low and long — practise finding them at your current rung." }
```

## Make it

1. **Drums first.** Clap on beat 3 of every bar. Hats on every 16th; in bar 4 replace the last beat of hats with a 32nd roll. Then place kicks: start with beat 1 and the "and" of 2, and move one if it feels stiff.
2. **808.** On each kick that starts a phrase, put a long bass note: A for most of it, F or G for variety. Let each ring until the next one.
3. **Motif.** One bar on the pluck, using A, C, E and the F–E sigh; copy it to the other bars.
4. **Judge by ear:** does the loop feel slow and heavy even though the hats are fast? If it feels rushed, you have claps on more than beat 3. If the low end sounds messy, a bass note starts where there is no kick — line them up.
5. **Stuck?** Copy the drums from the trap example and write only the bass and motif.

```exercise
{
  "id": "e4-daw-trap",
  "type": "daw-task",
  "title": "A 4-bar trap loop",
  "instructions": "Drums: clap on beat 3 only, 16th hats with at least one 32nd roll, a kick pattern of your own. Bass: 808-style long notes, each starting on a kick. Pluck: a 1-bar motif in A minor, repeated (changed slightly if you like).",
  "spec": {
    "template": {
      "bpm": 140, "key": "Am", "timeSig": "4/4",
      "tracks": [
        { "instrument": "drums", "seq": "" },
        { "instrument": "bass", "seq": "" },
        { "instrument": "pluck", "seq": "" }
      ]
    },
    "task": "4-bar half-time trap loop.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "pluck"] },
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "drum-pattern", "requires": ["kick", "clap", "hihat"], "clapOn": [3], "forbid": { "clap": [1, 2, 4] }, "track": 0 },
      { "kind": "uses-rhythm", "values": ["16", "32"], "minDistinct": 2, "track": 0 },
      { "kind": "in-key", "key": "Am", "scale": "natural-minor", "allowPassing": true, "track": 2 },
      { "kind": "repetition", "motifBars": 1, "minRepeats": 2, "allowTransposed": true, "track": 2 },
      { "kind": "custom", "id": "808-on-kicks", "note": "Self-check: every bass note starts together with a kick." }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

## Between lessons

Loop your trap beat and the boom-bap example back to back and tap the snare/clap along: notice beat 2 and 4 versus beat 3 only.
