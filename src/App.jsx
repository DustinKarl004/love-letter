import { useCallback, useEffect, useState } from 'react'

import {
  memories,
  letters,
  memoryArchive,
  letterArchive,
  defaultEntry,
  resolve,
  route,
} from './content/index.js'

import Ambient from './components/Ambient'
import Envelope from './components/Envelope'
import Letter from './components/Letter'
import Reasons from './components/Reasons'
import Gallery from './components/Gallery'
import Archive from './components/Archive'
import EmptyMonth from './components/EmptyMonth'
import Nav from './components/Nav'

// #/memory/2026-01 · #/letter/2026-09 · bare #/2026-01 still works.
function pathFromHash() {
  return window.location.hash.replace(/^#\/?/, '').trim() || null
}

export default function App() {
  const [path, setPath] = useState(() => pathFromHash())
  const [opened, setOpened] = useState(false)

  const entry = resolve(path) || defaultEntry
  const { meta, theme, letter, reasons, gallery, signoff, empty } = entry
  // Each month's own little glyph, used by the placeholder states.
  const mark = theme.mark || '✦'

  useEffect(() => {
    function onHashChange() {
      setPath(pathFromHash())
      setOpened(false)
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const go = useCallback((next) => {
    window.location.hash = `/${next}`
  }, [])

  // Push this entry's palette into CSS custom properties so every
  // component picks it up without prop-drilling colors.
  useEffect(() => {
    const root = document.documentElement
    Object.entries(theme.colors).forEach(([key, value]) => {
      const prop = '--' + key.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase())
      root.style.setProperty(prop, value)
    })
  }, [theme])

  useEffect(() => {
    const kind = entry.kind === 'letter' ? 'Love Letter' : 'Monthly Memory'
    document.title = `${kind} — ${meta.monthLabel} ${meta.yearLabel}`
  }, [entry, meta])

  const key = route(entry)

  return (
    <div className={`app theme-${theme.name} ${opened ? 'is-opened' : ''}`}>
      <Ambient key={theme.ambient} kind={theme.ambient} />

      {!opened ? (
        <Envelope
          entry={entry}
          onOpen={() => setOpened(true)}
          nav={
            <Nav
              memories={memories}
              letters={letters}
              current={entry}
              onSelect={go}
            />
          }
        />
      ) : (
        <main className="reading">
          {empty ? (
            <EmptyMonth empty={empty} meta={meta} mark={mark} onSelect={go} />
          ) : (
            <>
              <Letter letter={letter} meta={meta} />
              <Reasons key={`${key}-reasons`} reasons={reasons} mark={mark} />
              <Gallery key={`${key}-gallery`} gallery={gallery} mark={mark} />

              {signoff && (
                <footer className="signoff">
                  <span className="signoff-rule" />
                  <p className="signoff-text">{signoff}</p>
                  <p className="signoff-from">— {meta.from}</p>
                </footer>
              )}
            </>
          )}

          <Archive
            key={`${key}-archive`}
            memories={memoryArchive}
            letters={letterArchive}
            current={entry}
            onSelect={go}
          />
        </main>
      )}
    </div>
  )
}
