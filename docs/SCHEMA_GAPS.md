# Schema gaps reported by content authors (to resolve in M2)

Resolution policy: extend the schema + engine where cheap and clearly useful;
otherwise document the limitation in CONTENT_SCHEMA.md. Update this file's
"Status" column when done.

| # | Reported by | Gap | Proposed resolution | Status |
|---|-------------|-----|---------------------|--------|
| 1 | p1 | `ear-octave` "same-or-different" ambiguous | Define: "same pitch class (any octave) or different?" plus new mode `higher-or-lower` (pitch direction) | open |
| 2 | p1 | No high/low direction and no "2 vs 3 notes" drill for week 1 | `ear-octave` mode `higher-or-lower`; add `ear-count` { "counts":[2,3] } ... or accept substitute | open |
| 3 | p1 | `ear-rhythm` lacks quarter-only subdivision and a `choices` count | add subdivision `"q"`, field `choices` (2–4) | open |
| 4 | p1 | `ear-interval` lacks unison `P1`; p2: no compound intervals | add `P1`, `m9`, `M9`, `M10` | open |
| 5 | p1 | single-item exercises shouldn't need `count` | make `count` optional; default 1 for play-melody/rhythm-tap/daw-task/listen/reflect/quiz | open |
| 6 | p1/p2 | `play-melody`/`seq` single voice: LH cannot hold while RH moves; no velocity/accents; no swing | add optional `tracks` (multi-voice) to play-melody; `seq` accents via `>` prefix (velocity), `"swing": 0..1` in envelope | open |
| 7 | p1 | no staff-interval reading exercise | `read-note` gains `"mode":"interval"` or new `read-interval` | open |
| 8 | p1/p2 | missing daw-task predicates: contains-rest, min-leap, track-plays-progression, transposition-of-track, per-track key for ends-on, common-tones/voice-leading, chord-contains-7th, borrowed-chord-used, hat/clap positions in drum-pattern, syncopation, tempo | implement: `has-rest`, `min-leap`, `plays-progression`, `is-transposition`, `track` on all predicates, `voice-leading` {maxMove}, `chord-has-seventh`, `uses-chord` {roman}, `drum-pattern` gains `hatOn`, `clapOn`; `tempo` {min,max}; `syncopation` {minOffbeatRatio} | open |
| 9 | p1 | `chord-tones-on-beats.progression` loop behaviour; template `timeSig` | progression loops; template accepts timeSig | open |
| 10 | p1/p2 | doc details: `Bdim` symbol, `[kick hh]:8`, `hh` vs `hihat`, `artist`/`year` in songs, glossary link case-insensitive | document all | open |
| 11 | p2 | `ear-chord-root`, `ear-bass`, `ear-progression` cannot request inversions | add `inversions: [0,1,2]` to all three | open |
| 12 | p2 | `ear-bass` minor mode undocumented; minor-key numerals (`i VI III VII V7`), `"key":"Am"` form, seventh numerals (`Imaj7`, `ii7`) | document; engine accepts `Imaj7 ii7 V7 vi7 iv` etc | open |
| 13 | p2 | `ear-note` chromatic degrees unspecified | document: adds b2 #2/b3 #4 b6 b7 | open |
| 14 | p2 | `play-chord` cannot ask for a specific inversion | `inversion` accepts number | open |
| 15 | p2 | `listen` holds one example only | allow `examples: [...]` | open |
