import { useMemo } from 'react'

// A leaf drawn as SVG so it scales cleanly and costs nothing to load.
function Leaf({ variant }) {
  if (variant === 0) {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 2C9 8 4 13 4 20a12 12 0 0 0 12 10c8 0 12-5 12-11C28 12 23 7 16 2Z"
          fill="currentColor"
        />
        <path d="M16 4v25" stroke="rgba(0,0,0,.22)" strokeWidth="1.1" fill="none" />
        <path
          d="M16 12 9 9M16 12l7-3M16 19l-8-3M16 19l8-3"
          stroke="rgba(0,0,0,.16)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    )
  }
  if (variant === 1) {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 1 20 9l8-3-4 8 7 4-7 4 4 8-8-3-4 8-4-8-8 3 4-8-7-4 7-4-4-8 8 3Z"
          fill="currentColor"
        />
        <path d="M16 6v22" stroke="rgba(0,0,0,.2)" strokeWidth="1" fill="none" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <ellipse cx="16" cy="16" rx="8" ry="14" fill="currentColor" />
      <path d="M16 2v28" stroke="rgba(0,0,0,.2)" strokeWidth="1.1" fill="none" />
      <path
        d="M16 10 10 7M16 10l6-3M16 18l-6-3M16 18l6-3"
        stroke="rgba(0,0,0,.15)"
        strokeWidth="0.9"
        fill="none"
      />
    </svg>
  )
}

const LEAF_TINTS = ['#C87941', '#A64B2A', '#D89B54', '#8C4A2F', '#E0A860', '#B5622F']

// Petal shapes for February. Three petals and, one time in four, a
// small heart — enough to read as the month without being cloying.
function Petal({ variant }) {
  if (variant === 3) {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 29C16 29 3 21 3 12.5A7.5 7.5 0 0 1 16 7a7.5 7.5 0 0 1 13 5.5C29 21 16 29 16 29Z"
          fill="currentColor"
        />
      </svg>
    )
  }
  if (variant === 0) {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 1c9 7 11 16 0 30C5 17 7 8 16 1Z"
          fill="currentColor"
        />
        <path d="M16 5c4 5 5 11 0 21" stroke="rgba(255,255,255,.28)" strokeWidth="1" fill="none" />
      </svg>
    )
  }
  if (variant === 1) {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M4 16C4 7 10 2 18 2c7 0 10 5 10 11 0 8-6 17-14 17C7 30 4 24 4 16Z"
          fill="currentColor"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <ellipse cx="16" cy="16" rx="9" ry="13" fill="currentColor" />
      <path d="M16 4c3 6 3 18 0 24" stroke="rgba(255,255,255,.22)" strokeWidth="1" fill="none" />
    </svg>
  )
}

const PETAL_TINTS = ['#E8A0B4', '#D9738C', '#F2C2CE', '#A32E4F', '#EFB0BE', '#C2506B']

function Petals({ count }) {
  const drops = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 15,
        // Petals are lighter than leaves, so they take longer to land.
        duration: 14 + Math.random() * 16,
        delay: -Math.random() * 30,
        sway: 50 + Math.random() * 90,
        spin: Math.random() > 0.5 ? 1 : -1,
        variant: i % 4,
        tint: PETAL_TINTS[i % PETAL_TINTS.length],
        opacity: 0.4 + Math.random() * 0.5,
      })),
    [count]
  )

  return (
    <div className="ambient" aria-hidden="true">
      {drops.map((d) => (
        <span
          key={d.id}
          className="petal"
          style={{
            left: `${d.left}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            color: d.tint,
            opacity: d.opacity,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
            '--sway': `${d.sway}px`,
            '--spin': `${d.spin * 540}deg`,
          }}
        >
          <Petal variant={d.variant} />
        </span>
      ))}
    </div>
  )
}

function Leaves({ count }) {
  // Positions are randomized once on mount, then handed to CSS so the
  // browser animates them off the main thread.
  const drops = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 12 + Math.random() * 18,
        duration: 11 + Math.random() * 14,
        delay: -Math.random() * 25,
        sway: 30 + Math.random() * 70,
        spin: Math.random() > 0.5 ? 1 : -1,
        variant: i % 3,
        tint: LEAF_TINTS[i % LEAF_TINTS.length],
        opacity: 0.4 + Math.random() * 0.45,
      })),
    [count]
  )

  return (
    <div className="ambient" aria-hidden="true">
      {drops.map((d) => (
        <span
          key={d.id}
          className="leaf"
          style={{
            left: `${d.left}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            color: d.tint,
            opacity: d.opacity,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
            '--sway': `${d.sway}px`,
            '--spin': `${d.spin * 360}deg`,
          }}
        >
          <Leaf variant={d.variant} />
        </span>
      ))}
    </div>
  )
}

// Three layers, so the night sky actually moves: a fixed field that
// only twinkles, a slower field that drifts down past it, and the
// occasional shooting star.
function Stars({ count }) {
  const fixed = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 2.4,
        duration: 2.5 + Math.random() * 5,
        delay: -Math.random() * 8,
      })),
    [count]
  )

  const drifting = useMemo(
    () =>
      Array.from({ length: Math.round(count * 0.45) }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1.4 + Math.random() * 2.2,
        duration: 26 + Math.random() * 34,
        delay: -Math.random() * 60,
        sway: (Math.random() - 0.5) * 90,
        twinkle: 3 + Math.random() * 4,
      })),
    [count]
  )

  const shooting = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => ({
        id: i,
        left: 8 + Math.random() * 55,
        top: 4 + Math.random() * 38,
        duration: 13 + Math.random() * 9,
        delay: i * 6 + Math.random() * 6,
        angle: 28 + Math.random() * 18,
      })),
    []
  )

  return (
    <div className="ambient" aria-hidden="true">
      {fixed.map((s) => (
        <span
          key={`f${s.id}`}
          className="star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {drifting.map((s) => (
        <span
          key={`d${s.id}`}
          className="star-drift"
          style={{
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDuration: `${s.duration}s, ${s.twinkle}s`,
            animationDelay: `${s.delay}s, ${s.delay}s`,
            '--sway': `${s.sway}px`,
          }}
        />
      ))}

      {shooting.map((s) => (
        <span
          key={`s${s.id}`}
          className="shooting-star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            '--angle': `${s.angle}deg`,
          }}
        />
      ))}
    </div>
  )
}

export default function Ambient({ kind = 'leaves', count = 26 }) {
  // Anyone who has asked their OS to reduce motion gets a still page.
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  if (reduced) return null
  if (kind === 'stars') return <Stars count={count * 3} />
  if (kind === 'petals') return <Petals count={Math.round(count * 1.3)} />
  return <Leaves count={count} />
}
