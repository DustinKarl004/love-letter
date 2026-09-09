import { useEffect } from 'react'

import home from '../content/home.js'
import { letterArchive, memoryArchive, KIND_LABEL, route } from '../content/index.js'

import Ambient from './Ambient'

// The landing page: every letter, newest first.
export default function Index({ onSelect }) {
  const { theme } = home

  const groups = [
    ['letter', letterArchive],
    ['memory', memoryArchive],
  ].filter(([, items]) => items.length)

  useEffect(() => {
    const root = document.documentElement
    Object.entries(theme.colors).forEach(([key, value]) => {
      const prop = '--' + key.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase())
      root.style.setProperty(prop, value)
    })
  }, [theme])

  useEffect(() => {
    document.title = `${home.title} — ${home.eyebrow}`
  }, [])

  return (
    <div className="index-scene">
      <Ambient key={theme.ambient} kind={theme.ambient} />

      <main className="index">
        <header className="index-head">
          <p className="index-eyebrow">{home.eyebrow}</p>
          <h1 className="index-title">{home.title}</h1>
          <p className="index-subtitle">{home.subtitle}</p>
          <span className="index-rule" />
        </header>

        {groups.map(([kind, items]) => (
          <section className="index-group" key={kind}>
            {groups.length > 1 && (
              <h2 className="index-group-label">{KIND_LABEL[kind]}</h2>
            )}

            <ul className="index-list">
              {items.map((entry) => (
                <li key={route(entry)}>
                  <button type="button" onClick={() => onSelect(route(entry))}>
                    <span className="index-month">
                      {entry.meta.monthLabel}
                      <span className="index-year">{entry.meta.yearLabel}</span>
                    </span>
                    {entry.meta.blurb && (
                      <span className="index-blurb">{entry.meta.blurb}</span>
                    )}
                    <span className="index-arrow" aria-hidden="true">
                      →
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <p className="index-hint">{home.hint}</p>
      </main>
    </div>
  )
}
