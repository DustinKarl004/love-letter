// ─────────────────────────────────────────────────────────────
//  MONTHLY MEMORY · FEBRUARY 2026
//  Valentine's Day — February 14, 2026. She came to the house.
//
//  Photos: drop them into public/photos/2026-02/ and add them to
//  gallery.photos below. The section stays hidden while it is empty.
// ─────────────────────────────────────────────────────────────

export default {
  kind: 'memory',
  slug: '2026-02',

  meta: {
    to: 'Jaz',
    from: 'Dustin',
    monthLabel: 'February',
    yearLabel: '2026',
    dateLabel: 'February 14, 2026',
    sealMark: 'D',
    blurb: 'My first Valentine’s, and you came to the house.',
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

  letter: {
    greeting: 'Jaz,',

    paragraphs: [
      `Valentine's Day. I want to start with this, because it is the part I still cannot quite believe: I had never gone out with anyone on Valentine's Day before. Not once in my entire life. I had never had a date on the fourteenth. I had gotten so used to it being an ordinary day for me that I stopped expecting anything from it at all.`,

      `I had work that Saturday, so I only did half the day. And then you messaged me to say you were coming here, and I do not think a chat message has ever shocked me more. You came to the house for the first time. You met my Mom, and you met my sisters.`,

      `I was nervous about that, but honestly, I was more nervous about something else — I did not have a gift for you. So before we met I went out and tried my best to find anywhere I could actually buy flowers. Then I saw that stuffed toy, and I bought that too. I just wanted you to have something in your hands when you got here.`,

      `And then you gave me what you made. I had no idea you were that good at puzzles. You put the whole thing together yourself and turned it into a flower, for me. Thank you for that. Thank you for the effort even more than the flower, because the effort is the part I keep coming back to.`,

      `Then the rain. I still remember how hard it came down on the way home — it was unbelievable. Thank You, Lord, that she made it home safe that night, and that I did too.`,

      `Twenty-something Valentine's Days of it meaning nothing to me, and then this one. You did not just show up on the fourteenth of February. You made it the first one I will actually remember.`,
    ],

    closing: 'Yours, and grateful,',
    postscript: `P.S. — I still have the flower you made.`,
  },

  reasons: null,

  // No photos from this day yet. Add them as:
  //   { src: '/photos/2026-02/01.jpg', caption: 'something short' }
  gallery: { title: 'February 14, in pictures', photos: [] },

  signoff: 'My first Valentine’s Day. I am glad it was you.',
}
