# Planhat object profile slideout

A rebuild of the Trend AI object profile slideout ([Figma node](https://www.figma.com/design/6ej8HLSDXdtXO8UivMGNAz/?node-id=2038-9999) `2038:9999`) in Vite + Vue 3 + Tailwind v4.

```bash
npm install
npm run dev
```

The panel renders at its designed 710px on the page background. `npm run build` type-checks and builds.

## How it is put together

Tailwind v4's CSS-first theming is the reason for the version choice: the Figma variable
collections map one-to-one onto `@theme` in `src/styles/tokens.css`, so `text-subtle`,
`bg-soft`, `text-3` and `border-hairline` resolve to the real design values instead of
being sprinkled through the markup as arbitrary values.

Content lives in `src/data/trendAi.ts` behind the types in `src/types.ts`. Nothing fetches,
and there is no router or store — the brief is a static screen.

Components split along the seam between design-system primitives and this screen:

- `src/components/ui/` — `FieldPill`, `HealthScore`, `Avatar`, `AvatarStack`, `Tag`,
  `IconButton`, `AppIcon`
- `src/components/profile/` — the sections of this particular panel
- `src/components/ObjectProfilePanel.vue` — composes them

`FieldPill` is the one worth pointing at. It is a fixed 28px shell with a hairline border, a
hairline separator and a value half, and the value is chosen from a discriminated union
(`text` / `person` / `tags`) rather than by sniffing the content. The same component covers
`Owner: | Mick`, `Phase | Adoption`, `Attachments | 2` and `ARR | €13,800`.

Icons are the SVGs exported from Figma, downloaded into `src/assets/` and committed. The
Figma asset URLs expire after about a week, and hand-tracing the paths would drift from the
source, so the exported bytes are the artifact.

`Avatar` takes a photo when one exists and otherwise falls back to a letter on a solid
fill. The fallback colour is derived from a hash of the name rather than picked at random,
so a person keeps the same colour across renders and sessions — random-per-render would
make the same list look different on every reload. An explicit `tone` overrides it.

`SessionItem` is the other piece of layout worth pointing at. Title and preview share one
text track: the title sizes to its content up to 50% of that track, the preview takes the
rest and clips mid-word, and the avatar stack plus timestamp stay pinned on the right. The
Figma frame instead uses two equal columns with a 240px cap on the title, which makes every
preview start at the same x. The live product does not, so this follows the live layout.

## Interaction states

None are drawn in the file, so these are inferred from the component vocabulary:

- **Icon buttons** — `bg-soft` on hover, one step darker on press, 2px green focus ring.
  The 20px and 24px sizes in the design are a `size` prop rather than two components.
- **Field pills** — the border darkens on hover and the fill goes soft on press. They render
  as buttons because the pill is how you edit the field; a `readOnly` variant renders a
  static `div` with a soft fill, which is the treatment the lock icons elsewhere in the
  Planhat design system imply.
- **Session rows** — hover and press fills on the 6px-radius row target, not the full-bleed
  row, so the timeline rail stays clear of the highlight.
- **Featured Pages rows** — the whole row is one focusable target with a hover fill; the
  focus ring is inset so it does not collide with the row rule.
- **Tickets** — row hover fill, plus separate targets on the disclosure triangle, the title
  link and the column-settings button.

Everything is a Tailwind variant. No animation library, and transitions are a 75ms colour
fade so nothing feels sticky. Every clickable target carries `cursor-pointer`, since
Tailwind v4's preflight gives buttons the default arrow — only the read-only pill keeps
`cursor-default`.

## Fidelity

Verified by screenshotting the running panel at 710px and diffing it against the Figma
export pixel by pixel. Section, row and column positions line up; the residual differences
are text antialiasing and about 4px of cumulative width across the four field pills, which
is glyph-metric variance between Figma's renderer and Chrome's.

Sessions is the deliberate exception. The Figma frame repeats one row three times and
clips the list at four rows; the fixture uses five distinct rows from Planhat's own UI,
sizes the section to that content, and follows the live title/preview packing instead of
Figma's two-column track.

## Assumptions

- **Copy is verbatim.** Breadcrumb, description, page names, ticket titles and descriptions
  are taken from the Figma node rather than rewritten, so line wrapping and truncation
  match the source. Three exceptions, all deliberate: the participant names behind the
  avatars, the Featured Pages timestamps, and the Sessions rows — the Figma frame repeats
  one session three times, so those use the five distinct rows from Planhat's own UI
  instead. Two of them are long enough to clip, which is what exercises the preview track.
- **Health score ring.** The 8/10 arc is an exported vector, so `score` currently drives
  only the number. A real component would compute the arc from the value; that is a
  deliberate cut, not an oversight.
- **Avatars.** The design ships two photos and one orange `Z` letter fallback. The fixture
  varies this deliberately — eight photos across the stacks, plus orange `Z` and indigo
  `J` letter avatars — so the component is exercised against a realistic mix rather than
  the same two faces repeated. The extra portraits come from
  [randomuser.me](https://randomuser.me), are committed locally so nothing is fetched at
  runtime, and are placeholders to swap for real user images. `Z` and `J` pin their tones
  in the fixture because the screenshot specifies those colours; everyone else still
  derives theirs from the name.
- **The avatar palette beyond orange and moss.** Those two are the only fallback fills in
  the file. Planhat's tokens follow Radix naming (`colors/<hue>/tokens/bg-solid`), so
  indigo, plum, ruby and bronze are the matching Radix solid steps — a reasonable
  inference, but they should be confirmed against the real palette. Worth noting that white
  text on these fills is low contrast; the design's own moss is about 2.8:1, so I matched
  its bar rather than raising it unilaterally, but it is a question for the design system.
- **Section collapse.** The chevrons are labelled and focusable but do not collapse
  anything, since the file has no collapsed state to match.

## What I would question rather than quietly fix

- **The session connector overshoots its row.** The rail line is 44px on a 36px row, so it
  runs into the following item, and in the design it also trails below the last one until
  the section's 178px clip cuts it mid-stroke. I kept the 44px connector between rows but
  gave the last one an explicit 8px stub — 2px past its dot — so the list ends the same way
  at any row count. Whether it should end there or stop flush at the dot depends on whether
  the list is meant to read as a continuing timeline.
- **The tickets table is unreachable past 678px.** It is authored at 1050px
  (40 / 280 / 420 / 160 / 150) inside a 678px column with no scroll container, so
  "Combined ARR (USD)" and the settings column are cut off and cannot be reached. I assume
  there would be a side scroll, but then I wonder if the play button is sticky... something
  to be clarified.
- **Featured Pages rows are 41px.** 40px of content plus a 0.5px rule reads as 40.5px, and
  the frame is rounded to 41. Harmless here, but it means the row height and the grid it
  sits in disagree by half a pixel.
