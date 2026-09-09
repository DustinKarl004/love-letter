// ─────────────────────────────────────────────────────────────
//  MONTHLY MEMORY · FEBRUARY 2026
//
//  Design only for now — palette, petals, envelope. No words yet.
//
//  When you are ready to write it:
//    1. drop photos into public/photos/2026-02/
//    2. add them to gallery.photos below
//    3. fill in the `letter` block (copy the shape from 2026-01.js)
//    4. set meta.dateLabel if it was one specific day
//    5. delete the `empty` block
//  The page turns from a placeholder into a real memory on its own.
// ─────────────────────────────────────────────────────────────

export default {
  kind: 'memory',
  slug: '2026-02',

  meta: {
    to: 'Jaz',
    from: 'Dustin',
    monthLabel: 'February',
    yearLabel: '2026',
    sealMark: 'D',
    blurb: 'Not written yet.',
  },

  // February: deep wine and rose, with petals instead of leaves.
  theme: {
    name: 'rose-february',
    ambient: 'petals',
    colors: {
      bg: '#1A0B12',
      bgGlow: '#3A1526',
      paper: '#FFF6F3',
      paperEdge: '#F4E2DE',
      ink: '#3A2028',
      inkSoft: '#7C5A62',
      accent: '#D9738C',
      accentDeep: '#A32E4F',
      seal: '#9E1F3D',
      sealHighlight: '#C94765',
    },
  },

  // Nothing written yet.
  letter: null,
  reasons: null,
  gallery: { title: 'February, in pictures', photos: [] },
  signoff: null,

  empty: {
    title: 'February is not written yet',
    body: [
      'The page is built and waiting — there are just no words in it yet.',
    ],
  },
}
