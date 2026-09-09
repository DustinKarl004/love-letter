import { KIND_LABEL, route } from '../content/index.js'

// The two collections, side by side, shown under the envelope.
export default function Nav({ memories, letters, current, onSelect }) {
  const groups = [
    ['memory', memories],
    ['letter', letters],
  ].filter(([, items]) => items.length)

  // With only one page in the whole thing, the nav is just noise — the
  // envelope already says which month it is.
  const total = memories.length + letters.length
  if (!groups.length || total <= 1) return null

  return (
    <nav className="nav" aria-label="Choose a page">
      {groups.map(([kind, items]) => (
        <div className="nav-group" key={kind}>
          <span className="nav-group-label">{KIND_LABEL[kind]}</span>

          <div className="nav-pills">
            {items.map((e) => {
              const isCurrent = e.kind === current.kind && e.slug === current.slug
              return (
                <button
                  key={route(e)}
                  type="button"
                  className={isCurrent ? 'is-current' : ''}
                  aria-current={isCurrent ? 'true' : undefined}
                  onClick={() => onSelect(route(e))}
                >
                  {e.meta.monthLabel}
                  <span className="nav-year">{e.meta.yearLabel}</span>
                  {e.empty && <span className="nav-flag">empty</span>}
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </nav>
  )
}
