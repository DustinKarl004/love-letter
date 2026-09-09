// Shown in place of a letter when a month has not been written yet.
export default function EmptyMonth({ empty, meta, onSelect }) {
  return (
    <article className="empty-month">
      <span className="empty-month-mark" aria-hidden="true">
        🍂
      </span>

      <p className="empty-month-date">
        {meta.monthLabel} {meta.yearLabel}
      </p>

      <h1 className="empty-month-title">{empty.title}</h1>

      {empty.body.map((line, i) => (
        <p className="empty-month-body" key={i}>
          {line}
        </p>
      ))}

      {empty.link && (
        <button
          type="button"
          className="empty-month-link"
          onClick={() => onSelect(empty.link.to)}
        >
          {empty.link.label}
          <span aria-hidden="true">→</span>
        </button>
      )}
    </article>
  )
}
