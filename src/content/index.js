// ─────────────────────────────────────────────────────────────
//  Two separate collections, two separate kinds of page.
//
//    Monthly Memory  — a month we already lived. Dates, photos.
//    Love Letter     — about right now. No photos needed.
//
//  Routes:  #/letter/2026-09     (#/memory/<slug> once memories are
//                                  unhidden again)
//
//  To add an entry: create the file, import it, append it below.
// ─────────────────────────────────────────────────────────────

import letterSep2026 from './letters/2026-09.js'

// Monthly Memory is gone. The collection stays wired up, so a memory
// can be added again later, but nothing is registered.
export const memories = []
export const letters = [letterSep2026]

export const KIND_LABEL = {
  memory: 'Monthly Memory',
  letter: 'Love Letter',
}

// Newest first — the order both nav lists display in.
export const memoryArchive = [...memories].reverse()
export const letterArchive = [...letters].reverse()

const all = [...memories, ...letters]

export function route(entry) {
  return `${entry.kind}/${entry.slug}`
}

export function findEntry(kind, slug) {
  const pool = kind === 'letter' ? letters : memories
  return pool.find((e) => e.slug === slug) || null
}

// Accepts 'memory/2026-01', 'letter/2026-09', or a bare '2026-01'.
export function resolve(path) {
  if (!path) return null

  const parts = path.split('/').filter(Boolean)
  if (parts.length >= 2) return findEntry(parts[0], parts[1])
  return findEntry('memory', parts[0])
}

// Which page a bare link opens. Deliberately not "the newest" — point
// it at whichever entry is most worth landing on.
export const DEFAULT_ROUTE = 'letter/2026-09'

export const defaultEntry = resolve(DEFAULT_ROUTE) || all[0]

// Has this month been written up as a memory yet?
export function isEmpty(entry) {
  return Boolean(entry?.empty)
}
