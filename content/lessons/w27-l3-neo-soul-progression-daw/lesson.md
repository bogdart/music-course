---
id: w27-l3-neo-soul-progression-daw
title: A Neo-Soul Progression in the DAW
week: 27
order: 3
phase: p4
duration_min: 50
goals:
  - Voice a descending IVmaj9–iii7–ii9–Imaj9 loop with smooth right-hand shapes
  - Build an 8-bar neo-soul groove with epiano, bass and relaxed drums
  - Hear extended colours inside a real groove
prerequisites: [w27-l2-add9-and-sixth-chords]
tags: [daw, neo-soul, extended-chords, groove]
songs:
  - { title: "Brown Sugar", artist: "D'Angelo", public_domain: false }
  - { title: "On & On", artist: "Erykah Badu", public_domain: false }
---

# A Neo-Soul Progression in the DAW

Neo-soul lives on three things: extended chords on electric piano, a bass that sings rather than thumps, and drums that feel *behind* the beat. Today you build all three.

**Listen first (by reference):** D'Angelo's "Brown Sugar" — warm electric piano, lazy drums, a bass that leaves space. Erykah Badu's "On & On" — a hypnotic groove where the harmony barely moves and the feel does all the work. Don't copy them; notice how relaxed they are.

## The loop: stepping down the scale

Our progression walks down the C major scale one chord at a time: {{chord:Fmaj9}} – {{chord:Em7}} – {{chord:Dm9}} – {{chord:Cmaj9}} (IV–iii–ii–I). Descending diatonic steps like this sound effortless because every chord is a close cousin of the next.

The trick is the right hand. Instead of jumping to each root, play the **3–5–7–9** of each chord and let the bass handle roots. The shapes then slide down in parallel, almost like one hand-shape moving down the keys. On Em7 we use 3–5–7–1 to stay inside the key.

```example
{
  "title": "Neo-soul loop: epiano voicings, bass, drums",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "epiano", "seq": "[A3 C4 E4 G4]:h. r:q | [G3 B3 D4 E4]:h. r:q | [F3 A3 C4 E4]:h. r:q | [E3 G3 B3 D4]:w |" },
    { "instrument": "bass", "seq": "F2:q. F2:8 r:q C3:q | E2:q. E2:8 r:q B2:q | D2:q. D2:8 r:q A2:q | C2:h. G2:q |" },
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 r:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 r:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 r:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 r:8 [kick hihat]:8 [snare hihat]:8 hihat:8 |" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

## Feel: space is the groove

Notice what the bass does *not* do: it rests on beat 2, then answers on beat 4. Notice the drums skip a hi-hat on the "and" of 2 — a tiny gap that makes the groove breathe. Neo-soul players are famous for playing late; in the DAW you can suggest that by leaving holes and letting the snare land cleanly on 2 and 4.

## Warm up the hands

```exercise
{
  "id": "e1-build-loop",
  "type": "build-chord",
  "title": "Spell the loop",
  "count": 8, "passScore": 0.8,
  "spec": { "chords": ["Fmaj9", "Em7", "Dm9", "Cmaj9"], "root": "given", "prompt": "symbol", "key": "C" }
}
```

```exercise
{
  "id": "e2-play-voicings",
  "type": "play-melody",
  "title": "Play the right-hand shapes with the bass",
  "instructions": "Right hand only. Move each shape down with the smallest possible motion.",
  "count": 6, "passScore": 0.75,
  "spec": {
    "bpm": 70, "timeSig": "4/4", "key": "C",
    "seq": "[A3 C4 E4 G4]:w | [G3 B3 D4 E4]:w | [F3 A3 C4 E4]:w | [E3 G3 B3 D4]:w |",
    "showStaff": false, "showKeyboard": true, "countIn": 1,
    "backing": { "instrument": "bass", "seq": "F2:w | E2:w | D2:w | C2:w |" }
  }
}
```

```exercise
{
  "id": "e3-ear-colours",
  "type": "ear-chord",
  "title": "Colours in open voicings",
  "instructions": "Same four qualities as last lesson, now spread out like an epiano player would.",
  "count": 10, "passScore": 0.75,
  "spec": { "qualities": ["maj7", "min7", "dom7", "m7b5"], "inversions": [0], "voicing": "open", "range": ["C2", "C5"] }
}
```

```exercise
{
  "id": "e4-ear-rhythm-16",
  "type": "ear-rhythm",
  "title": "Syncopated 16ths",
  "count": 6, "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "16", "rests": true, "answer": "choose" }
}
```

```exercise
{
  "id": "e5-daw-neo-soul",
  "type": "daw-task",
  "title": "Your 8-bar neo-soul loop",
  "instructions": "Track 1 epiano: the four voicings, two bars each with your own rhythm — try anticipating a chord by an 8th. Track 2 bass: roots on the downbeat, a 5th or passing note to finish each bar. Track 3 drums: snare on 2 and 4, a sparse kick, hi-hats with at least one gap.",
  "spec": {
    "template": { "bpm": 80, "key": "C", "timeSig": "4/4", "tracks": [ { "instrument": "epiano", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "drums", "seq": "" } ] },
    "task": "Write 8 bars: IVmaj9–iii7–ii9–Imaj9 on epiano, a bass line and a laid-back drum groove.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["epiano", "bass", "drums"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": true, "track": 0 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["IV", "iii", "ii", "I"], "barsPerChord": 2, "minRatio": 0.75, "track": 1 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "snareOnBeats": [2, 4], "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "e6-reflect",
  "type": "reflect",
  "title": "What made it feel soulful?",
  "spec": { "prompt": "Loop your 8 bars three times. Which change made the biggest difference to the feel — the voicings, the bass rests, or the hi-hat gaps? What would you try next?", "minWords": 25 }
}
```
