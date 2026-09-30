---
id: w43-l1-polish-song-one
title: Portfolio — Polish Song One
week: 43
order: 1
phase: p4
duration_min: 50
goals:
  - Choose three pieces from Phase 4 to finish as a portfolio
  - Run an arrangement pass (energy map, clutter, register clashes) on song one
  - Run a basic mix pass (levels, pan, note lengths) and save a final version
prerequisites: [w42-l3-toplines-over-beats-daw, w29-l1-capstone-song-one]
tags: [portfolio, arrangement, mixing, daw]
---

# Portfolio — Polish Song One

Phase 4 has left you a drawer full of sketches: a neo-soul loop, jazz comping, reharmonisations, a counter-melody, an EDM build and drop, a 7/8 groove, six genre sketches, a film cue, a developed motif and three toplines. This week you pick **three** and make them finished, [[portfolio]]-ready pieces.

Polishing takes time, so week 43 is spread out: **this lesson is one to two sessions (song one), the next is two sessions (songs two and three, one each), and the last is the review.** Take the sessions you need; finished beats fast.

## Choosing

Pick pieces that are **different**: one song-form piece (pop/rock/folk/topline), one groove piece (EDM/house/lo-fi/hip-hop), one "composed" piece (film cue, developed motif or jazz). Among candidates, pick the ones you still enjoy — you're about to hear them many times.

## Pass 1: arrangement

Loop the whole piece and answer honestly:

1. **Energy map.** Rate the energy of each 8-bar block from 1 to 5 on paper. Is there a rise to a peak and a release? If two neighbouring sections have the same energy, change one (add or remove a layer, change register, change the drum pattern).
2. **Clutter.** Solo each track. Does each have a job? If two tracks play in the same register with the same rhythm, mute one or move it an octave.
3. **Register clashes.** Melody and chords in the same octave? Move the chords lower.
4. **Transitions.** Does every section change have something that announces it — a fill, a pickup, a gap? (More on this next lesson.)

Hear point 3 — the same melody and chords, first fighting, then separated:

```example
{
  "title": "Register clash (bars 1–2) fixed by dropping the chords an octave (bars 3–4)",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "E4:q G4:q A4:q G4:q | F4:h E4:h | E4:q G4:q A4:q G4:q | F4:h E4:h |" },
    { "instrument": "piano", "seq": "[C4 E4 G4]:w | [F4 A4 C5]:w | [C3 E3 G3]:w | [F3 A3 C4]:w |" }
  ],
  "show": ["pianoroll"]
}
```

What you'll probably hear: in bars 1–2 the melody seems to sink into the chords; in bars 3–4 it sits clearly on top. If the difference seems small, listen once more and follow only the melody.

## Pass 2: mix basics

1. **Levels, from zero:** pull every track's volume down. Bring up the lead until it's comfortable, then drums and bass until they feel solid under it, then chords and pads until you just notice them. Check: play 8 bars and look away — can you still follow the melody from start to end? If it disappears anywhere, lower whatever is louder there.
2. **Pan:** kick, bass and lead in the centre; chords, counter-lines and percussion spread a little left and right. Check: toggle the pan off and on — the centre should feel less crowded with it on.
3. **Note lengths:** solo the chords. Do they ring over into the next chord (a blur at each change)? Shorten them. Do pads stop with a gap? Lengthen them.
4. Listen once on different speakers or headphones and write down three things you'd still change.

**Stuck or everything sounds the same after many loops?** Stop for ten minutes, then listen once from the start and write down the first thing that bothers you. That is your next fix.

## Warm-up

```exercise
{
  "id": "e1-play-voicings",
  "type": "play-chord",
  "title": "Voicing warm-up",
  "passScore": 0.7,
  "spec": { "chords": ["Cmaj9", "Am9", "Dm9", "G9", "Fmaj7", "Bbmaj7", "Ebmaj7", "Abmaj7"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

Progressions: find home first, then follow the bass and name each chord by its role and colour. The *How to do it* box under the drill shows the exact method for your current rung.

```ladder
{ "skill": "progressions", "unlocks": 20, "intro": "Review: progressions at your current rung — the chords of your own songs are made of these." }
```

## Make it

```exercise
{
  "id": "e2-daw-polish-one",
  "type": "daw-task",
  "title": "Song one: final version",
  "instructions": "Open your chosen piece in the DAW, apply both passes, then rebuild or paste the finished version here so the checks can run (at least 32 bars, 4+ tracks). This project is kept, so you can come back to it in a second session.",
  "spec": {
    "template": {
      "bpm": 100, "key": "C", "timeSig": "4/4",
      "tracks": [
        { "instrument": "lead", "seq": "" },
        { "instrument": "piano", "seq": "" },
        { "instrument": "bass", "seq": "" },
        { "instrument": "drums", "seq": "" },
        { "instrument": "pad", "seq": "" }
      ]
    },
    "projectRef": "w40-portfolio-1",
    "task": "Finished, polished version of portfolio piece one.",
    "checks": [
      { "kind": "bars", "min": 32, "max": 128 },
      { "kind": "note-count", "min": 24, "track": 0 },
      { "kind": "custom", "id": "four-tracks", "note": "Self-check: at least four tracks, each with a distinct job." },
      { "kind": "custom", "id": "energy-map", "note": "Self-check: the energy map rises to a clear peak and releases." },
      { "kind": "custom", "id": "no-clashes", "note": "Self-check: no two tracks fight in the same register with the same rhythm." },
      { "kind": "custom", "id": "mix", "note": "Self-check: the hook is clearest; kick/bass/lead centred; chords and extras panned." }
    ],
    "minBars": 32, "maxBars": 128
  }
}
```

```exercise
{
  "id": "e3-reflect",
  "type": "reflect",
  "title": "Before and after",
  "spec": {
    "prompt": "List the three biggest changes you made to song one and why. What would a listener notice first?",
    "minWords": 30
  }
}
```

## Between lessons

Play song one once a day on a different device (phone, headphones, laptop) and add to your list only what bothers you twice.
