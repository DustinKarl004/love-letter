# Monthly Memory

A memory and a love letter, month by month. Frontend-only, static,
deploys to Vercel.

```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # → dist/
```

## Two kinds of page

**Monthly Memory** — a month you already lived. Has a date, a story, photos.
**Love Letter** — about right now. No photos needed, no date required.

They are separate collections with separate routes, so a month can have one,
the other, or both. September has an empty memory and a real love letter.

| URL | Page |
| --- | --- |
| `/` | whatever `DEFAULT_ROUTE` points at (currently January's memory) |
| `/#/memory/2026-01` | January's memory |
| `/#/memory/2026-09` | September's memory — empty for now |
| `/#/letter/2026-09` | September's love letter |
| `/#/2026-01` | old-style link, still resolves to the memory |

## What's here

```
src/
  content/
    index.js            ← the registry: both collections + routes
    memories/
      2026-01.js        January — the day you met
      2026-02.js        February — design only, no words yet
      2026-09.js        September — empty placeholder
    letters/
      2026-09.js        September — the love letter
  components/
    Envelope.jsx        sealed envelope, wax seal, open animation
    Letter.jsx          the letter itself
    EmptyMonth.jsx      shown when a month has nothing in it yet
    Reasons.jsx         optional revealed list
    Gallery.jsx         polaroid grid + lightbox
    Nav.jsx             both collections, under the envelope
    Archive.jsx         everything else, at the bottom
    Ambient.jsx         falling leaves / drifting stars + shooting stars
  hooks/
    useReveal.js        reveal-on-scroll
  App.jsx               routing + pushes the palette into CSS vars
  styles.css            everything visual
public/
  photos/
    2026-01/            January's photos
    2026-02/            empty until you have February photos
    2026-09/            empty until you have September photos
```

## Filling in September's memory

Everything is in [`src/content/memories/2026-09.js`](src/content/memories/2026-09.js):

1. Drop photos into `public/photos/2026-09/`
2. Add them to `gallery.photos`
3. Write the `letter` block — copy the shape from `memories/2026-01.js`
4. **Delete the `empty` block**

That last step is the switch. While `empty` exists the page shows the
placeholder and the envelope renders dimmed; delete it and the page becomes a
real memory. Nothing else to change.

## Adding a month

```bash
cp src/content/memories/2026-01.js src/content/memories/2026-10.js
mkdir -p public/photos/2026-10
```

Set `slug: '2026-10'`, rewrite the words, update `meta`, change
`theme.colors`. Then register it in
[`src/content/index.js`](src/content/index.js):

```js
import memoryOct2026 from './memories/2026-10.js'

export const memories = [memoryJan2026, memorySep2026, memoryOct2026]
```

Keep each array chronological — the app reverses it for the archive. A love
letter works the same way, in `letters/` and the `letters` array.

## Writing a page

- `meta.to` / `meta.from` / `meta.sealMark` — the initial on the wax seal
- `meta.dateLabel` — optional; shows a specific date instead of just the month
- `meta.blurb` — the one line shown in the nav and archive
- `letter.greeting` / `paragraphs` / `closing` / `postscript`
- `reasons` — optional list section, or `null`
- `gallery.photos` — `[]` hides the section entirely
- `signoff` — the last line, or `null`
- `empty` — presence of this block replaces the letter with a placeholder

## Photos

Each month gets its own folder, referenced from the root:

```js
{ src: '/photos/2026-01/01-quantum-arcade.webp', caption: 'where you beat me at Tekken' }
```

Cards crop to 4:5 portrait, biased to the upper third so faces survive the
crop. Click any photo for the full uncropped version. A missing file shows a
placeholder naming the path it wants.

## Which page opens by default

```js
// src/content/index.js
export const DEFAULT_ROUTE = 'memory/2026-01'
```

Deliberately not "the newest" — otherwise every month you add would silently
steal the landing page. Set it to `null` to fall back to the first entry.

## Themes

`theme.ambient` picks the background animation:

- `'leaves'` — falling autumn leaves, 6 tints, sway and spin
- `'stars'` — three layers: fixed twinkling, slow drifting, occasional
  shooting stars
- `'petals'` — rose petals that flutter as they turn over, plus the
  occasional small heart

Both are pure CSS off the main thread, and both go still under
`prefers-reduced-motion`.

Built and in use:

| Month | bg | accent | accentDeep | ambient |
| --- | --- | --- | --- | --- |
| January | `#0E0B1A` | `#E0A94F` | `#B0742A` | `stars` |
| February | `#1A0B12` | `#D9738C` | `#A32E4F` | `petals` |
| September | `#20150E` | `#C87941` | `#A64B2A` | `leaves` |

Suggestions for later months:

| Month | bg | accent | accentDeep | ambient |
| --- | --- | --- | --- | --- |
| October | `#1A1014` | `#C2571F` | `#8A2E12` | `leaves` |
| November | `#171310` | `#A8763F` | `#6E4522` | `leaves` |
| December | `#0C1420` | `#B8352F` | `#0F5132` | `stars` |


## Deploying

Push to GitHub, then import the repo at [vercel.com/new](https://vercel.com/new).
`vercel.json` already sets the framework, build command, and output directory,
so accept the defaults. Or from the CLI:

```bash
npx vercel --prod
```
