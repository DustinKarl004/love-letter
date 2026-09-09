// ─────────────────────────────────────────────────────────────
//  MONTHLY MEMORY · SEPTEMBER 2026
//  Empty on purpose — our September day is Friday, September 11, 2026.
//
//  To fill it in later:
//    1. drop photos into public/photos/2026-09/
//    2. add them to gallery.photos below
//    3. write the `letter` block (copy the shape from 2026-01.js)
//    4. delete the `empty` block
//  The page switches from the empty state to a real memory on its own.
// ─────────────────────────────────────────────────────────────

export default {
  kind: 'memory',
  slug: '2026-09',

  meta: {
    to: 'Jaz',
    from: 'Dustin',
    monthLabel: 'September',
    yearLabel: '2026',
    sealMark: 'D',
    blurb: 'Happening Friday, September 11.',
  },

  theme: {
    name: 'early-autumn',
    mark: '🍂',
    ambient: 'leaves',
    colors: {
      bg: '#20150E',
      bgGlow: '#3A2416',
      paper: '#FDF6EC',
      paperEdge: '#EFE1CC',
      ink: '#3D2B1F',
      inkSoft: '#7A6353',
      accent: '#C87941',
      accentDeep: '#A64B2A',
      seal: '#9E3B26',
      sealHighlight: '#C75B41',
    },
  },

  // Nothing to look back on yet, so there is no letter and no list.
  letter: null,
  reasons: null,
  gallery: { title: 'September, in pictures', photos: [] },
  signoff: null,

  // Shown instead of a letter while this month is still empty.
  empty: {
    title: 'September has not happened yet',
    body: [
      'We are going out on Friday, September 11. Until then there is nothing to remember here — no photos, no story, nothing written down.',
      'This page is holding the space for it.',
    ],
    // Points her at the letter that does exist for this month.
    link: { label: 'There is a love letter for September', to: 'letter/2026-09' },
  },
}
