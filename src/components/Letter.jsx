import Gallery from './Gallery'

export default function Letter({ letter, meta }) {
  return (
    <article className="letter" aria-label="Your letter">
      <header className={`letter-head ${letter.verse ? 'has-verse' : ''}`}>
        <span className="letter-date">
          {meta.dateLabel || `${meta.monthLabel} ${meta.yearLabel}`}
        </span>

        {letter.verse ? (
          <blockquote className="letter-verse">
            <p className="letter-verse-text">{letter.verse.text}</p>
            <cite className="letter-verse-ref">{letter.verse.reference}</cite>
          </blockquote>
        ) : (
          <span className="letter-rule" />
        )}
      </header>

      <p className="letter-greeting">{letter.greeting}</p>

      {(letter.paragraphs || []).map((text, i) => (
        <p className="letter-paragraph" key={i}>
          {text}
        </p>
      ))}

      {/* Optional. For a month with more than one day worth writing up,
          each gets its own dated section. */}
      {letter.sections?.map((section, i) => (
        <section className="letter-section" key={i}>
          <header className="letter-section-head">
            <span className="letter-section-date">{section.date}</span>
            {section.title && (
              <h2 className="letter-section-title">{section.title}</h2>
            )}
          </header>

          {section.paragraphs.map((text, j) => (
            <p className="letter-paragraph" key={j}>
              {text}
            </p>
          ))}

          {/* A day's own photos, laid on the page under its words. */}
          {section.photos?.length > 0 && (
            <Gallery gallery={{ photos: section.photos }} inline />
          )}
        </section>
      ))}

      {letter.prayer && (
        <aside className="letter-prayer" aria-label="A prayer">
          {letter.prayer.lines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          {letter.prayer.amen && (
            <p className="letter-prayer-amen">{letter.prayer.amen}</p>
          )}
        </aside>
      )}

      <p className="letter-closing">{letter.closing}</p>
      <p className="letter-signature">{meta.from}</p>

      {letter.postscript && (
        <p className="letter-postscript">{letter.postscript}</p>
      )}
    </article>
  )
}
