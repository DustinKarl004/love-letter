// ─────────────────────────────────────────────────────────────
//  MONTHLY MEMORY · MARCH 2026
//  Three days out in one month, so the letter is split into dated
//  sections:
//    Mar 4  (Wed) — his birthday, the long trip, the sunset
//    Mar 14 (Sat) — day after her birthday, SM North, the movie
//    Mar 29 (Sun) — MOA for the first time, the museum, the TikTok
//
//  Photos: drop them into public/photos/2026-03/ and add them to
//  gallery.photos. The section stays hidden while it is empty.
// ─────────────────────────────────────────────────────────────

export default {
  kind: 'memory',
  slug: '2026-03',

  meta: {
    to: 'Jaz',
    from: 'Dustin',
    monthLabel: 'March',
    yearLabel: '2026',
    dateLabel: 'March 2026',
    sealMark: 'D',
    blurb: 'Three days out — my birthday, yours, and MOA.',
  },

  // March: dusk after the sunset we watched — coral and plum, with
  // warm motes rising instead of anything falling.
  theme: {
    name: 'sunset-march',
    ambient: 'embers',
    colors: {
      bg: '#1E0F17',
      bgGlow: '#5A2436',
      paper: '#FFF8F1',
      paperEdge: '#F5E4D8',
      ink: '#3B2420',
      inkSoft: '#7E5C55',
      accent: '#F0885A',
      accentDeep: '#C2492F',
      seal: '#B03A2A',
      sealHighlight: '#D9634A',
    },
  },

  letter: {
    greeting: 'Jaz,',

    // The opening, before the three days.
    paragraphs: [
      `This month was so full of you. Three times out in one month — I have never had a March like it. Thank you for the effort and for the time you keep giving me, because I know both of those cost you something.`,
    ],

    sections: [
      {
        date: 'March 4 · Wednesday',
        title: 'My birthday',
        paragraphs: [
          `I got to spend my birthday with you. That is the part I keep coming back to. I even wore the polo you gave me in January — thank you again for that.`,

          `We went so far that day, but I was so happy. Really happy.`,

          `And then two things happened that had never happened to me before. I held your hand for the first time. And I kissed your forehead — I was genuinely nervous doing it, because it was the first time in my life I had ever done that. Thank you for letting me.`,

          `Then the sunset. In my whole life I had never really stopped to look at one, and the first beautiful sunset I ever saw was that day, with you. It was beautiful the same way you are.`,
        ],

        photos: [
          { src: '/photos/2026-03/04-1-the-windmills.webp', caption: 'the windmills' },
          {
            src: '/photos/2026-03/04-2-the-sunset.webp',
            caption: 'the first sunset I ever really looked at',
          },
        ],
      },
      {
        date: 'March 14 · Saturday',
        title: 'The day after yours',
        paragraphs: [
          `One day after your own birthday and you still came out with me. Thank you for that.`,

          `Our second time at SM North. You watched a movie with me, and I know that took effort on your part. I enjoy watching and talking with you. It stayed with me — though honestly, not because of the film. It is because I got to hold your hand for so long. Thank you for letting me.`,
        ],

        photos: [
          {
            src: '/photos/2026-03/14-1-before-the-movie.webp',
            caption: 'before the movie',
          },
          { src: '/photos/2026-03/14-2-the-movie.webp', caption: 'the movie' },
        ],
      },
      {
        date: 'March 29 · Sunday',
        title: 'MOA, for the first time',
        paragraphs: [
          `The first time I ever set foot in MOA. In my whole life I had never been there. Thank you for taking me, and for letting me see it with you instead of on my own.`,

          `That was also the day I heard you sing in front of me for the first time. You are so good. And we did a photobooth together, which was another first for me — I still have the strip.`,

          `It was also the first time I have ever walked into a museum about the Lord Jesus. I did not expect that to be part of the day, and I am glad that it was.`,

          `And we made a TikTok. I had no idea what I was doing. Thank you for teaching me.`,
        ],

        photos: [
          { src: '/photos/2026-03/29-1-on-the-way.webp', caption: 'on the way there' },
          { src: '/photos/2026-03/29-2-jaz-cutiee.webp', caption: 'Jaz cutiee' },
          { src: '/photos/2026-03/29-3-you-singing.webp', caption: 'you, singing' },
          {
            src: '/photos/2026-03/29-4-sound-stage.jpg',
            caption: 'so cute and beautiful',
          },
          {
            src: '/photos/2026-03/29-5-the-photobooth.webp',
            caption: 'the strip we took home',
          },
          { src: '/photos/2026-03/29-6-our-shadows.webp', caption: 'our shadows' },
        ],
      },
    ],

    closing: 'Thankful, three times over,',
    postscript: null,
  },

  reasons: null,

  // Every photo lives under its own day, inside the letter.
  gallery: { photos: [] },

  signoff: 'Three days out in one month. I am still counting them.',
}
