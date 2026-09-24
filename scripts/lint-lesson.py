#!/usr/bin/env python3
"""Quick lint for content/lessons/*/lesson.md until the real validator exists.
Usage: python3 scripts/lint-lesson.py [content/lessons/<id> ...]  (default: all)
Checks: front matter id == folder, fenced blocks are valid JSON, exercise types
are in the catalogue, exercise ids unique, >=1 ear-* and >=1 keyboard exercise.
"""
import json, re, sys, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
TYPES = {"ear-note","ear-octave","ear-interval","ear-chord","ear-chord-root","ear-scale","ear-progression","ear-melody","ear-rhythm","ear-bass",
 "play-notes","play-scale","play-chord","play-melody","rhythm-tap","build-chord","build-scale","build-interval",
 "read-note","read-rhythm","quiz","quiz-input","key-signature","roman-analysis","daw-task","listen","reflect"}
KEYBOARD = {"play-notes","play-scale","play-chord","play-melody","rhythm-tap","build-chord","build-scale","build-interval","read-note","read-rhythm","ear-melody","ear-bass","ear-chord-root","daw-task"}
BLOCKS = {"example","exercise","keyboard","staff","chords"}
cur = json.load(open(ROOT/"content/curriculum.json"))
known_ids = {l for w in cur["weeks"] for l in w["lessons"]}
targets = [pathlib.Path(a) for a in sys.argv[1:]] or sorted((ROOT/"content/lessons").glob("w*"))
bad = 0
def err(p, m):
    global bad; bad += 1; print(f"{p}: {m}")
for d in targets:
    f = d/"lesson.md"
    if not f.exists(): err(d, "missing lesson.md"); continue
    txt = f.read_text()
    m = re.match(r"^---\n(.*?)\n---\n", txt, re.S)
    if not m: err(f, "missing front matter"); continue
    fm = m.group(1)
    idm = re.search(r"^id:\s*(\S+)", fm, re.M)
    if not idm or idm.group(1) != d.name: err(f, f"front matter id != folder name ({idm and idm.group(1)})")
    if d.name not in known_ids: err(f, "id not in curriculum.json")
    for key in ("title","week","order","phase","duration_min","goals"):
        if not re.search(rf"^{key}:", fm, re.M): err(f, f"front matter missing {key}")
    ids=set(); types=[]
    for lang, body in re.findall(r"^```(\w+)\n(.*?)^```", txt, re.S|re.M):
        if lang not in BLOCKS: continue
        try: j = json.loads(body)
        except Exception as e: err(f, f"invalid JSON in ```{lang} block: {e}"); continue
        if lang == "exercise":
            t = j.get("type"); i = j.get("id")
            if t not in TYPES: err(f, f"unknown exercise type {t!r}")
            if not i: err(f, "exercise without id")
            elif i in ids: err(f, f"duplicate exercise id {i}")
            ids.add(i); types.append(t)
            if "spec" not in j: err(f, f"exercise {i} missing spec")
    if not ids: err(f, "no exercises")
    if not any(t and t.startswith("ear-") for t in types): err(f, "no ear-* exercise")
    if not any(t in KEYBOARD for t in types): err(f, "no keyboard exercise")
print(f"{len(targets)} lessons checked, {bad} problems")
sys.exit(1 if bad else 0)
