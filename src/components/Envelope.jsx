import { useState } from 'react'
import { KIND_LABEL } from '../content/index.js'

export default function Envelope({ entry, onOpen, nav }) {
  const [breaking, setBreaking] = useState(false)
  const { meta, kind, empty } = entry

  function handleOpen() {
    if (breaking) return
    setBreaking(true)
    // Let the wax crack and the flap swing before the page takes over.
    window.setTimeout(onOpen, 1500)
  }

  return (
    <div className={`envelope-stage ${breaking ? 'is-opening' : ''}`}>
      <header className="envelope-heading">
        <p className="envelope-kind">{KIND_LABEL[kind]}</p>
        <p className="envelope-eyebrow">
          {meta.monthLabel} <span>·</span> {meta.yearLabel}
        </p>
        {meta.occasion && (
          <p className="envelope-occasion">{meta.occasion}</p>
        )}
      </header>

      <button
        type="button"
        className={`envelope ${empty ? 'is-empty' : ''}`}
        onClick={handleOpen}
        aria-label={
          empty
            ? `${meta.monthLabel} is not written yet — open anyway`
            : `Open ${KIND_LABEL[kind]} for ${meta.monthLabel}`
        }
      >
        <div className="envelope-body">
          <div className="envelope-back" />
          <div className="envelope-peek" />
          <div className="envelope-flap" />
          <div className="envelope-front-left" />
          <div className="envelope-front-right" />

          <span className="envelope-addressee">for {meta.to}</span>

          <span className="wax-seal">
            <span className="wax-seal-mark">{meta.sealMark}</span>
          </span>
        </div>
      </button>

      <p className="envelope-hint">
        {breaking ? 'opening…' : empty ? 'nothing inside yet' : 'click the seal'}
      </p>

      {nav}
    </div>
  )
}
