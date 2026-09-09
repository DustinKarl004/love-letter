import { useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal'

// Fixed tilts, so cards don't re-shuffle on every render.
const TILTS = [-3.2, 2.4, -1.6, 3.1, -2.6, 1.8, -3.8, 2.1]

function Polaroid({ photo, index, onOpen }) {
  const [failed, setFailed] = useState(false)

  return (
    <figure
      className="polaroid"
      style={{
        '--tilt': `${TILTS[index % TILTS.length]}deg`,
        transitionDelay: `${index * 90}ms`,
      }}
    >
      <button
        type="button"
        className="polaroid-frame"
        onClick={() => !failed && onOpen(photo)}
        aria-label={photo.caption || `Photo ${index + 1}`}
      >
        {failed ? (
          <span className="polaroid-empty">
            <span className="polaroid-empty-mark">🍂</span>
            <span className="polaroid-empty-text">
              drop a photo at
              <code>{photo.src}</code>
            </span>
          </span>
        ) : (
          <img
            src={photo.src}
            alt={photo.caption || ''}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </button>
      {photo.caption && (
        <figcaption className="polaroid-caption">{photo.caption}</figcaption>
      )}
    </figure>
  )
}

function Lightbox({ photo, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <figure className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.caption || ''} />
        {photo.caption && <figcaption>{photo.caption}</figcaption>}
      </figure>
      <button type="button" className="lightbox-close" onClick={onClose}>
        close
      </button>
    </div>
  )
}

export default function Gallery({ gallery }) {
  const [ref, shown] = useReveal({ threshold: 0.1 })
  const [active, setActive] = useState(null)

  if (!gallery?.photos?.length) return null

  return (
    <section
      className={`gallery ${shown ? 'is-shown' : ''}`}
      ref={ref}
      aria-label={gallery.title}
    >
      <h2 className="section-title">{gallery.title}</h2>

      <div className="polaroid-grid">
        {gallery.photos.map((photo, i) => (
          <Polaroid key={photo.src} photo={photo} index={i} onOpen={setActive} />
        ))}
      </div>

      {active && <Lightbox photo={active} onClose={() => setActive(null)} />}
    </section>
  )
}
