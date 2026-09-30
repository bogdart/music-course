---
id: w24-l3-reharmonise-your-song-daw
title: Reharmonise a Chorus
week: 24
order: 3
phase: p3
duration_min: 50
goals:
  - Keep a melody and give it new chords with a five-tool kit you already know
  - Check every new chord against the melody note on beat 1
  - Reharmonise an 8-bar chorus (your week-18 one, re-entered, or a given one) with at least one secondary dominant
prerequisites: [w24-l2-chromatic-passing-chords]
tags: [harmony, reharmonisation, daw, songwriting, ear]
songs: []
---

# Reharmonise a Chorus

[[Reharmonisation]] means keeping the melody and changing the chords under it. It is how a plain tune becomes a moving one — and how the last chorus of a song can sound fresh without a new melody. Nothing today is new theory: it is the tools of the last twelve weeks, used on purpose.

## The kit

Try one tool at a time and listen to the melody note on each beat 1:

1. **Family swap** — replace a chord with one from the same family (week 13) that shares two notes: I ↔ vi or iii, IV ↔ ii.
2. **Add 7ths** (week 12) — Am → Am7, F → Fmaj7. Softer, richer.
3. **Secondary dominant** (this week) — V/V before V, V/vi before vi.
4. **Passing dim7** (last lesson) — between two chords a whole step apart, bass moving by half steps.
5. **Borrowed iv** (week 16) — Fm instead of F in C: bittersweet.

**The golden rule:** the melody note must be in the new chord, or be a gentle colour on top of it (its 7th) — never a half step away from a note the chord holds underneath. When in doubt, play the melody note and the chord together and trust the clash you hear.

## Before and after

The Glasshouse chorus, an 8-bar melody in C, first with its plain I–V–vi–IV chords:

```example
{
  "title": "Glasshouse chorus — original chords",
  "bpm": 88, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "G4:q G4:8 A4:8 G4:q E4:q | D4:q D4:8 E4:8 D4:h | E4:q E4:8 G4:8 A4:q C5:q | A4:h. r:q | G4:q G4:8 A4:8 G4:q E4:q | B4:q B4:8 C5:8 D5:h | E5:h. D5:q | C5:w" },
    { "instrument": "piano", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w | [C3 E3 G3]:w | [B2 D3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w" },
    { "instrument": "bass", "seq": "C2:w | G1:w | A1:w | F1:w | C2:w | G1:w | A1:w | F1:w" }
  ],
  "show": ["pianoroll"]
}
```

Now the same melody, reharmonised. Listen twice, then answer before reading the chord names.

```exercise
{
  "id": "listen-reharm-v2",
  "type": "listen",
  "title": "Which tools?",
  "spec": {
    "example": { "bpm": 88, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [
      { "instrument": "lead", "seq": "G4:q G4:8 A4:8 G4:q E4:q | D4:q D4:8 E4:8 D4:h | E4:q E4:8 G4:8 A4:q C5:q | A4:h. r:q | G4:q G4:8 A4:8 G4:q E4:q | B4:q B4:8 C5:8 D5:h | E5:h. D5:q | C5:w" },
      { "instrument": "piano", "seq": "[C3 E3 G3]:w | [B2 D3 G#3]:w | [A2 C3 E3 G3]:w | [A2 C3 F3]:h [G2 B2 F3]:h | [B2 D3 E3 G3]:w | [B2 D3 G3]:h [B2 D3 F3 G#3]:h | [C3 E3 F3 A3]:w | [Ab2 C3 F3]:h [G2 C3 E3]:h" },
      { "instrument": "bass", "seq": "C2:w | E2:w | A1:w | D2:h G1:h | E2:w | G1:h G#1:h | A1:w | F1:h C2:h" }
    ] },
    "questions": [
      { "q": "Bar 2 used to be G. What is it now?", "choices": ["still V (G)", "iii (Em)", "V/vi (E7)"], "answer": 2, "explain": "E7 — V/vi. The melody's D is its 7th, and the G♯ inside leans into Am7 in bar 3." },
      { "q": "Bar 6 has two chords, leading into bar 7. Which tool is the second one?", "choices": ["A passing dim7", "A secondary dominant", "A borrowed iv"], "answer": 0, "explain": "G♯dim7: the bass climbs G → G♯ → A, connecting G to the A in the bass of bar 7 (Fmaj7/A — IV over the note A; the melody's E is its major 7th)." },
      { "q": "The last bar has two chords and ends on C. Which tool is the first one?", "choices": ["Family swap", "Borrowed iv", "Passing dim7"], "answer": 1, "explain": "Fm → C: the borrowed iv from C minor, a bittersweet plagal ending. Also: bar 4 became ii–V (Dm7 G7) and bar 5 swapped C for its family member Em7." }
    ]
  }
}
```

The full reharm: **C | E7 | Am7 | Dm7 G7 | Em7 | G G♯dim7 | Fmaj7/A | Fm C**.

```exercise
{
  "id": "play-reharm-v2",
  "type": "play-chord",
  "title": "Play the reharmonised chorus",
  "spec": { "chords": ["C", "E7", "Am7", "Dm7", "G7", "Em7", "G", "G#dim7", "Fmaj7/A", "Fm", "C"], "inversion": "any", "sequence": true, "bpm": 56 }
}
```

```ladder
{ "skill": "progressions", "unlocks": 17, "intro": "Review: the key's chords plus V/V and V/vi, at your own rung." }
```

```ladder
{ "skill": "degrees", "unlocks": 21, "intro": "Review: single degrees, raised and lowered notes included." }
```

## Your turn: reharmonise a chorus

The task opens a fresh project (F major, 98 BPM: piano, lead, bass, drums) so your week-18 project stays exactly as you left it. Bars 1–8 hold a stand-in chorus on I–V–vi–IV in F. Better: replace its lead with **your own week-18 chorus melody** — open the week-18 lesson's last task in another tab, and re-enter your 8 bars here (about 5 minutes). Either way, the original stays in bars 1–8 and the reharmonised pass goes in bars 9–16: the "last chorus" version. In F, V/V is G(7) → C and V/vi is A(7) → Dm. Work bar by bar and play each new chord with the melody before moving on. Plan about 25 minutes.

```exercise
{
  "id": "daw-reharm-own-chorus-v2",
  "type": "daw-task",
  "title": "Reharmonise a chorus",
  "spec": {
    "projectRef": "w24-reharm",
    "template": { "bpm": 98, "key": "F", "tracks": [
      { "instrument": "piano", "seq": "[F3 A3 C4]:w | [E3 G3 C4]:w | [F3 A3 D4]:w | [F3 Bb3 D4]:w | [F3 A3 C4]:w | [E3 G3 C4]:w | [F3 A3 D4]:w | [F3 Bb3 D4]:w" },
      { "instrument": "lead", "seq": "A4:q C5:q A4:8 G4:8 F4:q | G4:q E4:q C4:h | A4:q C5:q A4:8 G4:8 F4:q | D5:q C5:q Bb4:h | A4:q C5:q A4:8 G4:8 F4:q | G4:q E4:q C4:h | D5:q F5:q D5:8 C5:8 A4:q | Bb4:q A4:q F4:h" },
      { "instrument": "bass", "seq": "F2:w | C2:w | D2:w | Bb1:w | F2:w | C2:w | D2:w | Bb1:w" },
      { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8" }
    ] },
    "task": "Optional first: replace the lead in bars 1-8 with your own week-18 chorus melody. Then copy bars 1-8 of every track to bars 9-16 and leave bars 1-8 as they are. In bars 9-16 change the piano and bass: use at least three tools from the kit, including one secondary dominant (G or G7 before C, A or A7 before Dm). Check every beat 1: the melody note is in the chord or is its 7th.",
    "timerMin": 25,
    "checks": [
      { "kind": "bars", "min": 16, "max": 16 },
      { "kind": "has-tracks", "instruments": ["piano", "lead", "bass"] },
      { "kind": "repetition", "motifBars": 8, "minRepeats": 2, "allowTransposed": false, "track": 1 },
      { "kind": "uses-chord", "roman": ["V/V", "V/vi"], "key": "F" },
      { "kind": "range", "low": "E1", "high": "C3", "track": 2 },
      { "kind": "custom", "id": "three-tools-v2", "note": "Self-check: bars 9-16 use three kit tools; no melody note a half step against a chord tone held underneath." }
    ],
    "minBars": 8, "maxBars": 16
  }
}
```

```exercise
{
  "id": "reflect-reharm-v2",
  "type": "reflect",
  "spec": { "prompt": "List your chords bar by bar and name the tool behind each change. Which change surprised you most when you heard it? Would you use this version as the last chorus of a song — why?", "minWords": 30 }
}
```
