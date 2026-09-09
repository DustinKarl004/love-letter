import useReveal from '../hooks/useReveal'

export default function Reasons({ reasons, mark = '✦' }) {
  const [ref, shown] = useReveal({ threshold: 0.15 })

  if (!reasons?.items?.length) return null

  return (
    <section
      className={`reasons ${shown ? 'is-shown' : ''}`}
      ref={ref}
      aria-label={reasons.title}
    >
      <h2 className="section-title">{reasons.title}</h2>
      {reasons.subtitle && <p className="section-subtitle">{reasons.subtitle}</p>}

      <ul className="reasons-list">
        {reasons.items.map((item, i) => (
          <li
            className="reason"
            key={i}
            style={{ transitionDelay: `${i * 130}ms` }}
          >
            <span className="reason-mark" aria-hidden="true">
              {mark}
            </span>
            <span className="reason-text">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
