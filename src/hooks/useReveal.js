import { useEffect, useRef, useState } from 'react'

// Reveals an element the first time it scrolls into view, then stops
// watching. Used for the reasons list and the gallery.
export default function useReveal({ threshold = 0.2, once = true } = {}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (!('IntersectionObserver' in window)) {
      setShown(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setShown(false)
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, shown]
}
