import useReveal from '../hooks/useReveal'
import { KIND_LABEL, route } from '../content/index.js'

// Every other page, grouped by collection, shown at the bottom of the
// one she's reading.
export default function Archive({ memories, letters, current, onSelect }) {
  const [ref, shown] = useReveal({ threshold: 0.15 })

  const groups = [
    ['memory', memories],
    ['letter', letters],
  ]
    .map(([kind, items]) => [
      kind,
      items.filter((e) => !(e.kind === current.kind && e.slug === current.slug)),
    ])
    .filter(([, items]) => items.length)

  if (!groups.length) return null

  let delay = 0

  return (
    <section
      className={`archive ${shown ? 'is-shown' : ''}`}
      ref={ref}
      aria-label="Everything else"
    >
      <span className="archive-rule" />

      {groups.map(([kind, items]) => (
        <div className="archive-group" key={kind}>
          <h2 className="archive-title">{KIND_LABEL[kind]}</h2>

          <ul className="archive-list">
            {items.map((e) => (
              <li key={route(e)} style={{ transitionDelay: `${(delay++) * 110}ms` }}>
                <button type="button" onClick={() => onSelect(route(e))}>
                  <span className="archive-month">
                    {e.meta.monthLabel}{' '}
                    <span className="archive-year">{e.meta.yearLabel}</span>
                  </span>
                  {e.meta.blurb && (
                    <span className="archive-blurb">{e.meta.blurb}</span>
                  )}
                  <span className="archive-arrow" aria-hidden="true">
                    →
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
