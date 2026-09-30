---
id: w26-l3-listening-review-and-ear-assessment
title: Listening Review and Phase 3 Ear Check
week: 26
order: 3
phase: p3
duration_min: 50
goals:
  - Review your two capstone songs with a three-pass listening method
  - See where each ear ladder stands after Phase 3 (a diagnostic, not an exam)
  - Take apart a short hidden mystery song - tempo, backbeat, form, bass and chords - and rebuild it in the DAW
prerequisites: [w26-l2-capstone-song-two]
tags: [review, diagnostic, ear, transcription, daw]
songs: []
---

# Listening Review and Phase 3 Ear Check

Ten weeks ago you had never written a chorus; now you have two finished songs. This last lesson of Phase 3 has
three parts: **listen to your own work like a producer**, **check where your ears are**, and take apart a
small **mystery song**.

## Part 1 — The listening review (10 min)

Play each capstone song three times, each time with one job:

1. **As a fan** — no stopping. Where did your attention drift? Where did you enjoy it?
2. **As an arranger** — does every section change something? Is the last chorus (or drop) the biggest?
3. **As a mixer** — at low volume. Is the lead always clear? Do kick and bass sit together?

Then write **three stars and a wish** per song: three specific things that work, one thing you would change.
"The bass going silent in the breakdown works" is useful; "it's nice" is not.

```exercise
{
  "id": "reflect-stars-wish",
  "type": "reflect",
  "spec": { "prompt": "Three stars and a wish for Song One, then for Song Two. Be specific: name the section, the bar or the track.", "minWords": 50 }
}
```

## Part 2 — Ear check (20 min)

This is **diagnostic**: nothing here is a gate. Each drill below runs at your current rung of that ladder, so
it shows exactly where each skill is. Rungs you haven't mastered stay in your Practice sessions — that is
where they get better, not by repeating them now. Two ladders open one more rung today:

- **Scale colours** — four scales in one set: major, minor, Dorian and Mixolydian. In week 22 you heard them
  only in pairs on the same root (major vs Mixolydian, minor vs Dorian). Listen for two things: is the 3rd
  bright or dark, then is the 7th (or the 6th) the usual one or the altered one?
- **Melodies** — eight-note phrases with freer rhythm. Longer phrases are mostly a memory task: sing or hum
  along silently in your head, and chunk the melody into two halves of four.

If a drill starts at a lower rung than the one opened, that is the ladder doing its job.

```ladder
{ "skill": "scales", "unlocks": 11, "intro": "Opens: four scales mixed — bright or dark first, then listen for the one altered note. The drill runs at your current scales rung." }
```

```ladder
{ "skill": "melody", "unlocks": 18, "intro": "Opens: eight-note phrases — hear them as two halves. The drill runs at your current melody rung." }
```

```ladder
{ "skill": "progressions", "unlocks": 17, "intro": "Name each chord by its role in the key, secondary dominants included once you reach them." }
```

```ladder
{ "skill": "roots", "unlocks": 14, "intro": "Play the bass notes you hear." }
```

```ladder
{ "skill": "rhythm", "unlocks": 14, "intro": "Rhythm and drum grooves at your level." }
```

```ladder
{ "skill": "degrees", "unlocks": 21, "intro": "Where does the note sit in the key? Chromatic degrees join as you climb." }
```

And one for the hands — the secondary dominants of week 24, V/vi and V/V, each resolving:

```exercise
{
  "id": "play-secondary-chain",
  "type": "play-chord",
  "title": "C – E7 – Am – F – D7 – G7",
  "instructions": "E7 is V/vi (it resolves to Am); D7 is V/V (it resolves to G7). Any inversion; then play C to finish.",
  "passScore": 0.7,
  "spec": { "chords": ["C", "E7", "Am", "F", "D7", "G7"], "inversion": "any", "sequence": true, "bpm": 66, "key": "C" }
}
```

## Part 3 — The mystery song (20 min)

Your first "take a song apart" task, and a preview of Phase 5. The song is 8 bars, on loop, and its notation is
hidden. Work in this order: **tempo and groove → form → bass → chords**. Answer each question before you look at
anything; the facts appear after you answer.

```exercise
{
  "id": "mystery-listen",
  "type": "listen",
  "title": "Mystery song: first listens",
  "passScore": 0.7,
  "spec": {
    "example": {"title":"Mystery song","bpm":96,"timeSig":"4/4","key":"D","hidden":true,"loop":true,"tracks":[{"instrument":"lead","seq":"F#4:q A4:q D5:q. C#5:8 | C#5:q B4:8 A4:8 E4:h | D4:q F#4:q B4:q. A4:8 | G4:h. r:q | F#4:q A4:q D5:q. E5:8 | D5:h. B4:q | E5:q D5:8 B4:8 G4:q E4:q | E4:h. r:q"},{"instrument":"pad","seq":"[F#3 A3 D4]:w | [E3 A3 C#4]:w | [F#3 B3 D4]:w | [G3 B3 D4]:w | [F#3 A3 D4]:w | [G3 B3 D4]:w | [G3 B3 E4]:w | [E3 A3 C#4]:w","volume":0.7},{"instrument":"bass","seq":"D2:w | A1:w | B1:w | G1:w | D2:w | G1:w | E2:w | A1:w"},{"instrument":"drums","seq":"[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"}]},
    "questions": [
      { "q": "About how fast is the beat?", "choices": ["About 70 BPM", "About 96 BPM", "About 130 BPM"], "answer": 1, "explain": "96 BPM: a relaxed mid-tempo pop groove. Tap along to check — a tap-tempo count over 10 seconds gives about 16 beats." },
      { "q": "Where does the snare hit?", "choices": ["Beats 1 and 3", "Beats 2 and 4", "On every beat"], "answer": 1, "explain": "Beats 2 and 4 — the backbeat (week 14). The kick plays beats 1 and 3, plus the 'and' after 3." },
      { "q": "How do bars 5–6 of the melody begin?", "choices": ["The same way as bars 1–2", "With a completely new idea"], "answer": 0, "explain": "Bar 5 starts exactly like bar 1 (F♯ A D), but its last note climbs to E instead of falling to C♯, and from there the phrase goes somewhere new — repetition with variation (week 18)." },
      { "q": "Does the last bar sound finished (at home) or open, like a question?", "choices": ["Finished, at home", "Open, like a question"], "answer": 1, "explain": "Open: it stops on the V chord (A in D major) — a half cadence (weeks 8 and 13)." }
    ]
  }
}
```

```exercise
{
  "id": "mystery-bass",
  "type": "ear-bass",
  "title": "Mystery song: the bass line",
  "instructions": "Key of D major. The bass plays one note per bar. Play all 8, in any octave.",
  "passScore": 0.7,
  "spec": { "key": "D", "mode": "major", "chords": ["I", "ii", "IV", "V", "vi"], "answer": "play", "example": {"title":"Mystery song","bpm":96,"timeSig":"4/4","key":"D","hidden":true,"loop":true,"tracks":[{"instrument":"lead","seq":"F#4:q A4:q D5:q. C#5:8 | C#5:q B4:8 A4:8 E4:h | D4:q F#4:q B4:q. A4:8 | G4:h. r:q | F#4:q A4:q D5:q. E5:8 | D5:h. B4:q | E5:q D5:8 B4:8 G4:q E4:q | E4:h. r:q"},{"instrument":"pad","seq":"[F#3 A3 D4]:w | [E3 A3 C#4]:w | [F#3 B3 D4]:w | [G3 B3 D4]:w | [F#3 A3 D4]:w | [G3 B3 D4]:w | [G3 B3 E4]:w | [E3 A3 C#4]:w","volume":0.7},{"instrument":"bass","seq":"D2:w | A1:w | B1:w | G1:w | D2:w | G1:w | E2:w | A1:w"},{"instrument":"drums","seq":"[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"}]} }
}
```

```exercise
{
  "id": "mystery-chords",
  "type": "ear-progression",
  "title": "Mystery song: the chords",
  "instructions": "One chord per bar, all from the key of D major. Your bass notes are the roots.",
  "passScore": 0.7,
  "spec": { "key": "D", "mode": "major", "length": 8, "chords": ["I", "ii", "IV", "V", "vi"], "progression": ["I", "V", "vi", "IV", "I", "IV", "ii", "V"], "example": {"title":"Mystery song","bpm":96,"timeSig":"4/4","key":"D","hidden":true,"loop":true,"tracks":[{"instrument":"lead","seq":"F#4:q A4:q D5:q. C#5:8 | C#5:q B4:8 A4:8 E4:h | D4:q F#4:q B4:q. A4:8 | G4:h. r:q | F#4:q A4:q D5:q. E5:8 | D5:h. B4:q | E5:q D5:8 B4:8 G4:q E4:q | E4:h. r:q"},{"instrument":"pad","seq":"[F#3 A3 D4]:w | [E3 A3 C#4]:w | [F#3 B3 D4]:w | [G3 B3 D4]:w | [F#3 A3 D4]:w | [G3 B3 D4]:w | [G3 B3 E4]:w | [E3 A3 C#4]:w","volume":0.7},{"instrument":"bass","seq":"D2:w | A1:w | B1:w | G1:w | D2:w | G1:w | E2:w | A1:w"},{"instrument":"drums","seq":"[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"}]} }
}
```

Now rebuild it — and make it yours. Program what you heard (the backbeat groove, the bass, the chords), then
write **your own** 8-bar melody over it instead of the original. This is the week's DAW task.

```exercise
{
  "id": "daw-rebuild-mystery",
  "type": "daw-task",
  "title": "Rebuild the mystery song with your own melody",
  "spec": {
    "template": { "bpm": 96, "key": "D", "timeSig": "4/4", "tracks": [
      { "instrument": "drums", "seq": "" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "pad", "seq": "" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "From your answers: drums with a backbeat (kick on 1 and 3, snare on 2 and 4, eighth-note hats), the bass line (one root per bar) and one chord per bar on the pad. Then write your own 8-bar melody in D major on the lead — a new tune, not the mystery one — that ends open on the last bar.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "has-tracks", "instruments": ["drums", "bass", "pad", "lead"] },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "snareOnBeats": [2, 4], "hatOn": "8", "track": 0 },
      { "kind": "plays-progression", "progression": ["I", "V", "vi", "IV", "I", "IV", "ii", "V"], "barsPerChord": 1, "mode": "roots", "minRatio": 0.75, "track": 1 },
      { "kind": "plays-progression", "progression": ["I", "V", "vi", "IV", "I", "IV", "ii", "V"], "barsPerChord": 1, "mode": "chords", "minRatio": 0.75, "track": 2 },
      { "kind": "in-key", "key": "D", "scale": "major", "allowPassing": true, "track": 3 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

## What's next

Phase 4 opens the composer's studio: extended chords, jazz voicings, reharmonisation, counterpoint, film cues
and genre writing. It all rests on what you did here — form, hooks, bass, grooves, layers. Keep both capstone
projects; you will come back to them.

```exercise
{
  "id": "reflect-phase3",
  "type": "reflect",
  "spec": { "prompt": "Which ladder surprised you today — higher or lower than you expected? In the mystery song, what did you get wrong at first, and what finally made you hear it?", "minWords": 30 }
}
```
