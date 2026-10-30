// ─────────────────────────────────────────────────────────────
//  LOVE LETTER · OCTOBER 2026
//  Built around 1 Peter 5:7. Written in Taglish.
//  Given to her Friday, October 30, 2026.
//  Keep the text free of any reference to WHEN she reads this — it gets
//  shown to her on the day itself.
// ─────────────────────────────────────────────────────────────

export default {
  kind: 'letter',
  slug: '2026-10',

  meta: {
    to: 'Jaz',
    from: 'Dustin',
    monthLabel: 'October',
    yearLabel: '2026',
    dateLabel: 'October 2026',
    // The day this letter is for.
    occasion: 'Friday, October 30',
    sealMark: 'D',
    blurb: 'You do not have to carry everything alone.',
  },

  theme: {
    name: 'autumn-october',
    mark: '🍂',
    ambient: 'leaves',
    colors: {
      bg: '#1A1014',
      bgGlow: '#3D1F1A',
      paper: '#FFF8EF',
      paperEdge: '#F0DCC4',
      ink: '#33201A',
      inkSoft: '#75513F',
      accent: '#C2571F',
      accentDeep: '#8A2E12',
      seal: '#7A2A12',
      sealHighlight: '#B8461E',
    },
  },

  letter: {
    // Shown as an epigraph above the greeting.
    verse: {
      text: 'Casting all your care upon Him, for He cares for you.',
      reference: '1 Peter 5:7',
    },

    greeting: 'Jaz,',

    paragraphs: [
      `Alam kong marami kang iniisip lately. Yung mga bagay na hindi mo sinasabi, yung pagod na tinatago mo kasi sometimes you are just too tired to talk it over. Napapansin ko 'yon, kahit hindi mo i-kwento.`,

      `Kaya ito yung verse na pinili ko para sa'yo. Hindi Niya sinabing ayusin mo muna lahat bago ka lumapit sa Kanya. Ang sabi lang Niya, ibigay mo. Lahat. Kasi He cares for you. Hindi dahil obligado Siya, kundi dahil mahal ka Niya.`,

      `Alam kong hindi 'yon madali para sa'yo. Madalas kang mag-overthink, paulit-ulit mong iniisip yung mga bagay-bagay. But you do not have to figure everything out at once, and you do not have to be strong all the time. You are allowed to get tired. You are allowed to cry. That does not make you any less.`,

      // The line the whole letter exists for, so it is set larger.
      {
        feature: true,
        text: `Hindi mo kailangang buhatin lahat mag-isa. Ibigay mo sa Kanya yung bigat, at habang hinihintay mo, nandito lang ako sa tabi mo.`,
      },

      `Hindi ko kayang alisin lahat ng iniisip mo. Pero kaya kong makinig. Kaya kitang samahan. At kaya kitang ipag-pray.`,

      `Thank you for trusting me, even when it is not easy. I will never take that for granted.`,
    ],

    // Set apart from the prose, so it reads as spoken rather than
    // written. Addressed to God, but about Jaz.
    prayer: {
      lines: [
        `Lord God, salamat po kay Jaz. Thank You for her heart, her kindness, and her patience with me. I did not arrange any of that. It is Your gift.`,

        `Kayo na po ang bahala sa lahat ng iniisip niya, yung mga sinasabi niya at yung mga hindi. Turuan Niyo po siyang ibigay sa Inyo yung bigat, at ipaalala Niyo sa kanya kung gaano Niyo siya kamahal. Bigyan Niyo po siya ng pahinga at ng kapayapaang hindi kayang ibigay ng mundo.`,

        `Para po sa Friday, ingatan Niyo po kami sa biyahe, papunta at pauwi. Sana maganda ang panahon buong araw, at sana maging magaan at masaya yung oras namin together. Tulungan Niyo po akong makinig nang mabuti at maging mabuti sa kanya.`,
      ],
      amen: `In Jesus' name, amen.`,
    },

    closing: 'Always here for you,',
    postscript: null,

    // Valorant agent icons, under the signature. Files live in
    // public/valorant/. Set to null to drop the row.
    stickers: {
      items: [
        { src: '/valorant/iso.webp', label: 'Iso' },
        { src: '/valorant/gekko.webp', label: 'Gekko' },
        { src: '/valorant/clove.webp', label: 'Clove' },
        { src: '/valorant/sova.webp', label: 'Sova' },
        { src: '/valorant/fade.webp', label: 'Fade' },
        { src: '/valorant/sage.webp', label: 'Sage' },        { src: '/valorant/neon.webp', label: 'Neon' },
      ],
      caption: 'Duo queue, always.',
    },
  },

  reasons: null,
  gallery: { photos: [] },

  signoff: 'October 30, date with Jaz.',
}
