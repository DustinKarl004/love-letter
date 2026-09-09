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

// A sunflower: a ring of petals around a dark seeded centre. Drawn as
// SVG so it scales cleanly and costs nothing to load.
function Sunflower({ variant }) {
  const petals = variant === 1 ? 14 : 11
  const ry = variant === 1 ? 7.4 : 8.4
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      {Array.from({ length: petals }, (_, i) => (
        <ellipse
          key={i}
          cx="20"
          cy="8.6"
          rx="3"
          ry={ry}
          fill="currentColor"
          transform={`rotate(${(360 / petals) * i} 20 20)`}
        />
      ))}
      {/* a second, shorter ring so the flower reads as full */}
      {Array.from({ length: petals }, (_, i) => (
        <ellipse
          key={`i${i}`}
          cx="20"
          cy="12.4"
          rx="2.4"
          ry="5.2"
          fill="currentColor"
          opacity="0.75"
          transform={`rotate(${(360 / petals) * i + 360 / petals / 2} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" r="6.4" fill="#4A2E12" />
      <circle cx="20" cy="20" r="4.6" fill="#6B421B" />
      <circle cx="18.4" cy="18.4" r="1.5" fill="rgba(255,255,255,.18)" />
    </svg>
  )
}

const SUNFLOWER_TINTS = [
  '#F5C518',
  '#E8A61C',
  '#FFD75E',
  '#D98E12',
  '#F7CE3E',
  '#C97F10',
]

function Sunflowers({ count }) {
  const drops = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        // A few big ones in front, plenty of small ones behind.
        size: i % 6 === 0 ? 34 + Math.random() * 26 : 13 + Math.random() * 17,
        duration: 15 + Math.random() * 20,
        delay: -Math.random() * 34,
        sway: 40 + Math.random() * 90,
        spin: Math.random() > 0.5 ? 1 : -1,
        variant: i % 2,
        tint: SUNFLOWER_TINTS[i % SUNFLOWER_TINTS.length],
        opacity: 0.45 + Math.random() * 0.5,
      })),
    [count]
  )

  return (
    <div className="ambient" aria-hidden="true">
      {drops.map((d) => (
        <span
          key={d.id}
          className="sunflower"
          style={{
            left: `${d.left}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            color: d.tint,
            opacity: d.opacity,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
            '--sway': `${d.sway}px`,
            '--spin': `${d.spin * 400}deg`,
          }}
        >
          <Sunflower variant={d.variant} />
        </span>
      ))}
    </div>
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

// March: warm motes lifting off the ground at dusk. Every other month
// falls downward, so rising is what makes this one read differently.
// April: summer haze drifting sideways. The other months all move on
// the vertical axis, so horizontal drift is what sets this one apart.
const CLOUD_TINTS = ['#2FB6A8', '#7FD4CB', '#E0743F', '#F0C98A', '#4FA8A0', '#FFF3DC']

function Clouds({ count }) {
  const drifts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        // Wide, soft shapes rather than points.
        width: 90 + Math.random() * 190,
        height: 26 + Math.random() * 52,
        duration: 44 + Math.random() * 56,
        delay: -Math.random() * 100,
        // Alternate direction so the sky is not all sliding one way.
        reverse: i % 3 === 0,
        bob: 10 + Math.random() * 26,
        tint: CLOUD_TINTS[i % CLOUD_TINTS.length],
        opacity: 0.16 + Math.random() * 0.22,
        blur: 14 + Math.random() * 18,
      })),
    [count]
  )

  // Clouds alone are diffuse, so a sharp layer rides along with them.
  const spray = useMemo(
    () =>
      Array.from({ length: count * 2 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        size: 1.6 + Math.random() * 3,
        duration: 20 + Math.random() * 26,
        delay: -Math.random() * 46,
        reverse: i % 3 === 0,
        bob: 14 + Math.random() * 34,
        twinkle: 2.6 + Math.random() * 3.6,
        tint: i % 4 === 0 ? '#F0C98A' : '#9FE6DC',
        opacity: 0.45 + Math.random() * 0.5,
      })),
    [count]
  )

  return (
    <div className="ambient" aria-hidden="true">
      {drifts.map((c) => (
        <span
          key={c.id}
          className={`cloud ${c.reverse ? 'is-reverse' : ''}`}
          style={{
            top: `${c.top}%`,
            width: `${c.width}px`,
            height: `${c.height}px`,
            background: c.tint,
            filter: `blur(${c.blur}px)`,
            opacity: c.opacity,
            animationDuration: `${c.duration}s, ${c.duration / 3}s`,
            animationDelay: `${c.delay}s, ${c.delay}s`,
            '--bob': `${c.bob}px`,
          }}
        />
      ))}

      {spray.map((d) => (
        <span
          key={`s${d.id}`}
          className={`spray ${d.reverse ? 'is-reverse' : ''}`}
          style={{
            top: `${d.top}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            background: d.tint,
            boxShadow: `0 0 ${d.size * 3}px ${d.tint}`,
            opacity: d.opacity,
            animationDuration: `${d.duration}s, ${d.twinkle}s`,
            animationDelay: `${d.delay}s, ${d.delay}s`,
            '--bob': `${d.bob}px`,
          }}
        />
      ))}
    </div>
  )
}

const EMBER_TINTS = ['#F0B457', '#F0885A', '#FFD9A0', '#E86A4B', '#F5C77E', '#C2492F']

function Embers({ count }) {
  const motes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        // A few large, soft ones sit behind the small bright ones.
        size: i % 7 === 0 ? 7 + Math.random() * 7 : 2 + Math.random() * 3.5,
        blur: i % 7 === 0 ? 3 : 0,
        duration: 16 + Math.random() * 20,
        delay: -Math.random() * 36,
        sway: (Math.random() - 0.5) * 150,
        pulse: 2.4 + Math.random() * 3.4,
        tint: EMBER_TINTS[i % EMBER_TINTS.length],
        opacity: 0.35 + Math.random() * 0.5,
      })),
    [count]
  )

  return (
    <div className="ambient" aria-hidden="true">
      {motes.map((m) => (
        <span
          key={m.id}
          className="ember"
          style={{
            left: `${m.left}%`,
            width: `${m.size}px`,
            height: `${m.size}px`,
            background: m.tint,
            filter: m.blur ? `blur(${m.blur}px)` : undefined,
            boxShadow: `0 0 ${m.size * 2.4}px ${m.tint}`,
            opacity: m.opacity,
            animationDuration: `${m.duration}s, ${m.pulse}s`,
            animationDelay: `${m.delay}s, ${m.delay}s`,
            '--sway': `${m.sway}px`,
          }}
        />
      ))}
    </div>
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
  if (kind === 'embers') return <Embers count={Math.round(count * 1.8)} />
  if (kind === 'clouds') return <Clouds count={Math.round(count * 1.05)} />
  if (kind === 'sunflowers') return <Sunflowers count={Math.round(count * 1.4)} />
  return <Leaves count={count} />
}
