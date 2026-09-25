/**
 * Colour theme: applies `data-theme="light|dark"` to <html> from the `theme` setting.
 *
 * - 'system' follows `prefers-color-scheme` and reacts live to OS changes.
 * - The preference is mirrored to localStorage (THEME_LS_KEY) so the inline script in index.html can set
 *   data-theme before the first paint (no dark flash); keep that script in sync with `resolveTheme`.
 * - Colours live in CSS variables (styles/global.css). Code that draws with resolved colours (VexFlow)
 *   reads them with `cssVar()` and redraws when `useTheme()` changes.
 */
import { resolveTheme, type ResolvedTheme, type ThemePref } from '@music/core';
import { useSyncExternalStore } from 'react';

export const THEME_LS_KEY = 'music-course.theme';

const META_COLOR: Record<ResolvedTheme, string> = { dark: '#14161c', light: '#f6f3ee' };

let pref: ThemePref = 'system';
let mql: MediaQueryList | null = null;
const listeners = new Set<() => void>();

function systemDark(): boolean {
  return typeof matchMedia === 'function' ? matchMedia('(prefers-color-scheme: dark)').matches : true;
}

function current(): ResolvedTheme {
  const t = typeof document !== 'undefined' ? document.documentElement.dataset.theme : undefined;
  return t === 'light' || t === 'dark' ? t : resolveTheme(pref, systemDark());
}

function render() {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const next = resolveTheme(pref, systemDark());
  root.dataset.themePref = pref;
  const changed = root.dataset.theme !== next;
  root.dataset.theme = next;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_COLOR[next]);
  if (changed) listeners.forEach((l) => l());
}

const onSystemChange = () => {
  if (pref === 'system') render();
};

/** Apply a theme preference (idempotent). Called whenever the settings store's `theme` changes. */
export function applyTheme(p: ThemePref | undefined): void {
  pref = p ?? 'system';
  try {
    localStorage.setItem(THEME_LS_KEY, pref);
  } catch {
    /* ignore */
  }
  if (!mql && typeof matchMedia === 'function') {
    mql = matchMedia('(prefers-color-scheme: dark)');
    mql.addEventListener?.('change', onSystemChange);
  }
  render();
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

/** The theme currently shown ('light' | 'dark'); re-renders on change. */
export function useTheme(): ResolvedTheme {
  return useSyncExternalStore(subscribe, current, () => 'dark');
}

/** Resolve a CSS custom property (e.g. '--staff-ink') or a `var(--x)` reference to its current value. */
export function cssVar(nameOrVar: string, el: Element = document.documentElement, fallback = ''): string {
  const m = /^var\((--[\w-]+)\)$/.exec(nameOrVar.trim());
  const name = m ? m[1]! : nameOrVar;
  if (!name.startsWith('--')) return nameOrVar;
  const v = getComputedStyle(el).getPropertyValue(name).trim();
  return v || fallback;
}
