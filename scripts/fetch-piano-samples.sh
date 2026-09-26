#!/usr/bin/env bash
# One-time download of the Salamander Grand Piano samples (CC-BY 3.0, Alexander Holm) used by the `piano`
# instrument. Files land in apps/web/public/samples/piano/ (gitignored); run `npm run build` afterwards.
set -euo pipefail
dir="$(cd "$(dirname "$0")/.." && pwd)/apps/web/public/samples/piano"
base="https://tonejs.github.io/audio/salamander"
mkdir -p "$dir"
for o in 0 1 2 3 4 5 6 7 8; do
  for n in A C Ds Fs; do
    [[ $o == 0 && $n != A ]] && continue
    [[ $o == 8 && $n != C ]] && continue
    f="$n$o.mp3"
    [[ -s "$dir/$f" ]] || curl -sSf -o "$dir/$f" "$base/$f"
  done
done
echo "piano samples in $dir: $(ls "$dir" | wc -l) files"
