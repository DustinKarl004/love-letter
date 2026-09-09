// ─────────────────────────────────────────────────────────────
//  LOVE LETTER · SEPTEMBER 2026
//  Built around Philippians 4:13. We go out Friday, September 11, 2026.
//  Keep the text free of any reference to WHEN she reads this — it gets
//  shown to her on the day itself.
// ─────────────────────────────────────────────────────────────

export default {
  kind: 'letter',
  slug: '2026-09',

  meta: {
    to: 'Jaz',
    from: 'Dustin',
    monthLabel: 'September',
    yearLabel: '2026',
    dateLabel: 'September 2026',
    // The day this letter is for.
    occasion: 'Friday, September 11',
    sealMark: 'D',
    blurb: 'Thank You for the strength, and for Friday.',
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

  letter: {
    // Shown as an epigraph above the greeting.
    verse: {
      text: 'I can do all things through Christ who strengthens me.',
      reference: 'Philippians 4:13',
    },

    greeting: 'Jaz,',

    paragraphs: [
      `I am not a brave person by default. I overthink things, I wait longer than I should, and I talk myself out of what I actually want to do. So when something good turns up in my life, I have learned not to hand myself the credit for it.`,

      `Thank You, Lord, for letting me go out with her. I do not take it lightly, and I know it is not something I managed on my own strength.`,

      `And thank You for the time. Not only for the days themselves, but for the fact that I get any at all. Time is the one thing I cannot make more of, so I would rather say thank You for it now than assume there will always be more of it later.`,

      `There are still things I cannot do on my own. I have only gotten better at knowing Who to ask.`,
    ],

    // Set apart from the prose, so it reads as spoken rather than written.
    prayer: {
      lines: [
        `So Lord, I am asking now instead of waiting for Friday to come. Give me the same strength You gave me the first time, because I have not gotten any braver on my own since then.`,

        `Let me be present with her instead of stuck inside my own head. Let me listen more than I talk. Keep her safe on the way there and on the way home. And let the day be good — it does not have to be perfect, it just has to be good.`,

        `And whatever comes after Friday, help me to keep trusting that You know the timing far better than I do.`,
      ],
      amen: `In Jesus' name, amen.`,
    },

    closing: 'See you Friday,',
    postscript: null,
  },

  reasons: null,
  gallery: { photos: [] },

  signoff: 'Friday, September 11. I have already cleared the day.',
}
