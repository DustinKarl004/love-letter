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
    blurb: 'You made me more confident than I have ever been.',
  },

  theme: {
    name: 'sunflower-september',
    mark: '🌻',
    ambient: 'sunflowers',
    colors: {
      bg: '#141A10',
      bgGlow: '#33421F',
      paper: '#FFFBEF',
      paperEdge: '#F2E6C9',
      ink: '#33301B',
      inkSoft: '#6F6944',
      accent: '#E8A61C',
      accentDeep: '#A8760C',
      seal: '#8A6A10',
      sealHighlight: '#C79A1E',
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
      `I have never been good at doing things on my own strength, and I have stopped pretending otherwise. But you have helped me become more confident than I have ever been, and I am so thankful for that. Being with you makes me so happy.`,

      `You give me your time, and I know what that costs you. You have spent whole days on me, travelled far out of your way for me, and been kind to me the entire time you were doing it. I notice all of it, even when I do not say so.`,

      `You are patient with me when I am too much. You think of other people before you think of yourself. And you have a way of making an ordinary day into something I end up remembering for months. That is not a small thing to be able to do.`,

      `And I know things have not been easy for you lately. I am not going to pretend I can fix any of it, or that I always know what to say. But I want you to hear this plainly, so there is no doubt about it.`,

      // The line the whole letter exists for, so it is set larger.
      {
        feature: true,
        text: `I am not going anywhere. Whatever this season turns out to be, you are not carrying it by yourself.`,
      },

      `That verse at the top is not really about me. It is the thing I want you to have. You can do all things through Christ who strengthens you — and while He is doing that, I will be right here.`,

      `So I am not walking into Friday relying on myself. There are still things I cannot do on my own — I have only gotten better at knowing Who to ask.`,
    ],

    // Set apart from the prose, so it reads as spoken rather than
    // written. Addressed to God, but about Jaz.
    prayer: {
      lines: [
        `Lord God, thank You for Jaz. Thank You for her kindness, for her patience with me, and for the time she keeps choosing to give me. None of that was ever mine to arrange.`,

        `Look after her, Lord. She is carrying more than she lets on — carry it with her. Keep both of us safe on the way there and on the way home. Give her rest when she is tired, and people around her who are good to her. And when she doubts herself, let her know how she is seen.`,

        `As for Friday — give me the strength to be good to her, and to listen more than I talk. Send us good weather, Lord, a clear sky and a kind afternoon, so nothing gets in the way of the time we have. Let the day be good; it does not have to be perfect. And whatever comes after it, help me to keep trusting that You know the timing far better than I do.`,
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
