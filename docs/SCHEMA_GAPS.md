# Schema gaps reported by content authors (to resolve in M2)

Resolution policy: extend the schema + engine where cheap and clearly useful;
otherwise document the limitation in CONTENT_SCHEMA.md. Update this file's
"Status" column when done.

| # | Reported by | Gap | Proposed resolution | Status |
|---|-------------|-----|---------------------|--------|
| 1 | p1 | `ear-octave` "same-or-different" ambiguous | Define: "same pitch class (any octave) or different?" plus new mode `higher-or-lower` (pitch direction) | done (dev-foundation): same-or-different = same pitch class in any octave; new mode `higher-or-lower` implemented |
| 2 | p1 | No high/low direction and no "2 vs 3 notes" drill for week 1 | `ear-octave` mode `higher-or-lower`; add `ear-count` { "counts":[2,3] } ... or accept substitute | partly: `higher-or-lower` done; `ear-count` not added (not in catalogue) |
| 3 | p1 | `ear-rhythm` lacks quarter-only subdivision and a `choices` count | add subdivision `"q"`, field `choices` (2–4) | schema done (`subdivision:"q"`, `choices` 2–4); engine pending (ear-rhythm is M2) |
| 4 | p1 | `ear-interval` lacks unison `P1`; p2: no compound intervals | add `P1`, `m9`, `M9`, `M10` | done: P1 and compound m9 M9 m10 M10 P11 P12 m13 M13 accepted and played |
| 5 | p1 | single-item exercises shouldn't need `count` | make `count` optional; default 1 for play-melody/rhythm-tap/daw-task/listen/reflect/quiz | done: `count` optional; default = natural count (quiz questions, note sets), 1 for play-melody/rhythm-tap/daw-task/listen/reflect/play-scale, else 10 |
| 6 | p1/p2 | `play-melody`/`seq` single voice: LH cannot hold while RH moves; no velocity/accents; no swing | add optional `tracks` (multi-voice) to play-melody; `seq` accents via `>` prefix (velocity), `"swing": 0..1` in envelope | partly: seq accents `>` done (velocity 1); `swing` (envelope & play-melody) and play-melody `tracks` accepted by schema, playback/grading pending |
| 7 | p1 | no staff-interval reading exercise | `read-note` gains `"mode":"interval"` or new `read-interval` | open (M2) |
| 8 | p1/p2 | missing daw-task predicates: contains-rest, min-leap, track-plays-progression, transposition-of-track, per-track key for ends-on, common-tones/voice-leading, chord-contains-7th, borrowed-chord-used, hat/clap positions in drum-pattern, syncopation, tempo | implement: `has-rest`, `min-leap`, `plays-progression`, `is-transposition`, `track` on all predicates, `voice-leading` {maxMove}, `chord-has-seventh`, `uses-chord` {roman}, `drum-pattern` gains `hatOn`, `clapOn`; `tempo` {min,max}; `syncopation` {minOffbeatRatio} | schema accepts the new kinds (+ `track` on all); predicates pending (M3) |
| 9 | p1 | `chord-tones-on-beats.progression` loop behaviour; template `timeSig` | progression loops; template accepts timeSig | schema: template is free-form (timeSig accepted); looping to be implemented with predicates (M3) |
| 10 | p1/p2 | doc details: `Bdim` symbol, `[kick hh]:8`, `hh` vs `hihat`, `artist`/`year` in songs, glossary link case-insensitive | document all | documented in CONTENT_SCHEMA "Implementation notes" (`[kick hh]:8` works; `hihat`=`hh`; `artist`/`year` accepted; glossary case-insensitive) |
| 11 | p2 | `ear-chord-root`, `ear-bass`, `ear-progression` cannot request inversions | add `inversions: [0,1,2]` to all three | schema done (`inversions` on ear-chord-root/ear-bass/ear-progression); engine pending (M2) |
| 12 | p2 | `ear-bass` minor mode undocumented; minor-key numerals (`i VI III VII V7`), `"key":"Am"` form, seventh numerals (`Imaj7`, `ii7`) | document; engine accepts `Imaj7 ii7 V7 vi7 iv` etc | done in theory lib: minor numerals, `"key":"Am"`, `Imaj7 ii7 V7 vi7 iv` etc; documented |
| 13 | p2 | `ear-note` chromatic degrees unspecified | document: adds b2 #2/b3 #4 b6 b7 | done: chromatic shows all 12 degrees (major: 1 b2 2 b3 3 4 #4 5 b6 6 b7 7); documented |
| 14 | p2 | `play-chord` cannot ask for a specific inversion | `inversion` accepts number | schema done (`inversion` may be 0–3); engine pending (M2) |
| 15 | p2 | `listen` holds one example only | allow `examples: [...]` | schema done (`examples: [...]` or `example`); engine pending (M2) |
| 16 | p5 | No full-mix dictation: `ear-bass`/`ear-melody`/`ear-progression` cannot take an attached `example` mix | add optional `example` (envelope) to these types: play the mix, ask about it | open |
| 17 | p5/p2 | `ear-bass`, `ear-melody` lack `mode`; minor key form `"Em"` unclear for example/roman-analysis/daw-task | accept `"Em"`/`"E minor"` everywhere a key is taken; document | open |
| 18 | p5 | `ear-melody`: no chromatic option, no backing harmony, no leap control | add `chromatic`, `backing` (progression), `maxLeap` | open |
| 19 | p5 | `ear-chord` qualities stop at sus4; add9/9/13/6 not testable | extend qualities list to all core-supported | open |
| 20 | p5 | `ear-rhythm` single line; no multi-voice drum dictation | add `"voices": ["kick","snare","hihat"]` mode → answer per voice | open |
| 21 | p5 | no tempo (BPM) identification exercise | `ear-tempo` { "range":[60,160], "tolerance": 4 } | open |
| 22 | p5 | daw-task: no reference-comparison check, no duration/tempo, no key relative to learner's key, no timer, no project continuity across checkpoints | `matches-reference` {similarity}, `duration-seconds` {min}, `in-key` with `"key":"project"`, `"timerMin"` spec field, `"projectRef": "<slug>"` to continue the same saved project | open |
| 23 | p5 | no guitar/distortion instrument; examples lack volume/pan | add `guitar` (distorted) patch; envelope tracks accept `volume`,`pan` | open |
| 24 | p5 | `chords` block: two chords per bar, slash chords undocumented | allow `"C G/B"` in one bar string; document slash chords | open |
| 25 | p3/p4 | No section markers in projects/templates | project `markers: [{bar, name}]`; template accepts them; `sections` check | open |
| 26 | p3/p4 | `in-key`/`build-scale`/`play-scale` scale names: accept all `ear-scale` ids; `uses-rhythm` dotted values like `"8."` | accept + document | open |
| 27 | p3/p4 | `ear-chord` lacks dim7, 6, add9, 9, 11, 13 | extend qualities (merge with row 19) | open |
| 28 | p3/p4 | drum-pattern ambiguity: clap vs snare, "at least" vs "exactly", "no snare", bar ranges | add `mode: "at-least"|"exact"`, `forbid: {snare:[2,4]}`, `bars: [from,to]`; clap counts only as clap | open |
| 29 | p3 | no flag to hide notation in an example (dictation) | example `"hidden": true` → play-only with Reveal button | open |
| 30 | p3 | `play-notes` single note set; can't drill a list of voicings | `play-notes` accepts `sets: [[...],[...]]` | open |
| 31 | p4 | `play-chord` requires all chord tones: can't grade shell/rootless voicings | `play-chord` gains `voicing: "shell"|"rootless-a"|"rootless-b"|"any-required": ["3","7"]` | open |
| 32 | p4 | no meter identification exercise | `ear-meter` { meters: ["3/4","4/4","5/4","6/8","7/8"] } | open |
| 33 | p4 | no synth parameters (osc/filter/envelope) | per-track `synth: {osc, cutoff, attack, release}` for lead/pad/bass/pluck | open |
| 34 | p4 | no tempo change inside a snippet; no lyrics display | `tempoChanges` in envelope; example `lyrics` line under staff | open |
| 35 | p4 | `ear-melody` rejects `"key":"random"` | accept | open |
