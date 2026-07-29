# TBD — brand identity system

## Positioning

TBD is a premium AI-powered digital agency: senior strategy, expressive design, and dependable systems for teams ready to grow. The identity should feel like a product company with taste—not a generic web-services vendor.

## What the live product already says

The public site is a dark, grid-led editorial interface. Its large white headlines create authority; acid lime is reserved for action and emphasis; teal and coral appear as small moments of energy. Orbital/radial motion, crisp borders, and generous negative space make the experience feel futuristic without becoming noisy.

## The mark

The TBD mark is an open geometric frame. Three balanced horizontal declarations create a compact monogram while the central vertical counterform gives it a distinctive internal rhythm. It is deliberately not an icon of a service: no globe, cursor, rocket, bolt, robot, or brackets. The open frame expresses a company still becoming—an unfinished space with a strong point of view.

## Logo family

- `tbd-lockup-horizontal.svg` — primary website, proposals, social headers.
- `tbd-lockup-stacked.svg` — title cards, presentations, square placements.
- `tbd-symbol.svg` — favicon source, app navigation, avatars.
- `tbd-wordmark.svg` — wordmark-only use when the context already carries the mark.
- `tbd-light.svg` / `tbd-dark.svg` — reversed and light-surface versions.
- `tbd-monochrome.svg` — one-ink printing and embossing.
- `tbd-favicon.svg` / `tbd-app-icon.svg` — small digital surfaces.

## Color system

| Token   | Hex       | Role                                         |
| ------- | --------- | -------------------------------------------- |
| Ink     | `#101411` | Primary dark surface, wordmark dark version  |
| Paper   | `#F5F4EE` | Light surface and reversed wordmark          |
| Signal  | `#D9FF57` | Primary action, active state, mark accent    |
| Current | `#00D1C3` | Secondary accent, data/interaction cue       |
| Heat    | `#FF6A3D` | Rare emphasis, success-to-action punctuation |
| Mist    | `#A9ADA6` | Secondary copy and metadata                  |

Use Signal sparingly: one dominant lime action per view. Current and Heat should behave like punctuation, never a rainbow palette.

## Typography

- **Display:** Space Grotesk (Google Fonts), 600–700. Its wide, engineered forms match the mark and support the site’s oversized editorial headlines.
- **Body/UI:** Inter (Google Fonts), 400–600. It is neutral, extremely legible, and reliable across product surfaces.
- **Microcopy:** IBM Plex Mono (Google Fonts), 400–500. Use for section labels, metadata, and the “TO BE DECLARED” descriptor.

## Spacing and sizing

- Safe area: keep clear space equal to the height of the mark’s central counterform on every side.
- Layout grid: 12 columns desktop, 4 columns mobile; align lockups to the same container as page content.
- Minimum digital size: symbol 20px; horizontal lockup 120px wide; stacked lockup 72px wide.
- At 20px, use `tbd-favicon.svg` and remove the descriptor. Never scale the full lockup below 120px.

## Usage

Do not stretch, rotate, outline, add shadows, place over noisy photography, recolor the symbol with gradients, or recreate the wordmark in a substitute typeface. On dark surfaces use `tbd-light.svg`; on light surfaces use `tbd-dark.svg`; for one-color production use `tbd-monochrome.svg` with `currentColor`.

## Recommended lockup behavior

The website header should use the symbol plus `TBD` and the descriptor as separate text so it remains responsive. The favicon should be the open-frame symbol on Ink with Signal fill. Motion, when used, should be limited to a 150ms optical nudge or a single counterform reveal—never a spinning logo.
