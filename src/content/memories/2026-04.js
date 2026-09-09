// ─────────────────────────────────────────────────────────────
//  MONTHLY MEMORY · APRIL 2026
//  April 25 (Sat) — Ayala Malls Manila Bay, the wrong SM, Tondo again.
//
//  Photos: drop them into public/photos/2026-04/ and add them to
//  gallery.photos. The section stays hidden while it is empty.
// ─────────────────────────────────────────────────────────────

export default {
  kind: 'memory',
  slug: '2026-04',

  meta: {
    to: 'Jaz',
    from: 'Dustin',
    monthLabel: 'April',
    yearLabel: '2026',
    dateLabel: 'April 25, 2026',
    sealMark: 'D',
    blurb: 'Manila Bay, the wrong SM, and Tondo again.',
  },

  // April: summer sea at dusk — teal and turquoise, with a warm coral
  // seal for contrast. Clouds drift sideways instead of anything
  // falling or rising.
  theme: {
    name: 'summer-april',
    mark: '🌊',
    ambient: 'clouds',
    colors: {
      bg: '#0C1A1E',
      bgGlow: '#265E64',
      paper: '#FFFCF4',
      paperEdge: '#EFE6D2',
      ink: '#23343A',
      inkSoft: '#5F757C',
      accent: '#2FB6A8',
      accentDeep: '#177F7A',
      seal: '#D0603A',
      sealHighlight: '#EE8B5C',
    },
  },

  letter: {
    greeting: 'Jaz,',

    paragraphs: [
      `Ayala Malls Manila Bay, and another place I had never set foot in before. You keep taking me to firsts without even meaning to.`,

      `We got off at the wrong SM that day, and that one was completely my fault. You were sleeping so well, and I woke you up because I was absolutely sure that was our stop. It was not. I am sorry.`,

      `Thank you for going out with me. Thank you for the effort and for the time — you gave up a whole Saturday for me, and I know that is not nothing.`,

      `And I am sorry for being too playful. That was the first time you ever had to tell me off, and I have learned from it. I felt bad about it. I really am sorry, Jaz.`,

      `And thank you for playing with me, even though the only things I have ever managed to beat you at are Chess and Scramble. This was also the day we bought our first bracelets.`,

      `Something happened that day that I was not expecting. After so many years I was back in Tondo, and when I saw Calderon it hit me all at once. It felt like I was still a high school student walking around there, like it was only last week.`,

      `And then you brought me all the way back to SM North, because the honest truth is that I did not know the way back there myself. Thank you so much, Jaz.`,
    ],

    closing: 'Sorry, and thank you — both at once,',
    postscript: null,
  },

  reasons: null,

  gallery: {
    title: 'April 25, in pictures',
    // Mixed portrait and landscape, so each frame keeps its own shape.
    layout: 'natural',
    photos: [
      {
        src: '/photos/2026-04/01-stitch-at-the-station.webp',
        caption: 'Stitch, at the station',
      },
      {
        src: '/photos/2026-04/02-matching-bracelets.webp',
        caption: 'matching bracelets',
      },
      {
        src: '/photos/2026-04/03-the-coffee-place.webp',
        caption: 'the coffee place',
      },
      {
        src: '/photos/2026-04/04-chess-and-scramble.webp',
        caption: 'Chess, Scramble, and other games',
      },
    ],
  },

  signoff:
    'You took me somewhere I had never been, then made sure I got home.',
}
