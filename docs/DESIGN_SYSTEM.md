# Design system and identity

**Identity:** Agency OS is precise, editorial, and technically fluent—not a generic gradient-heavy agency template. The visual voice is _quiet confidence_: deep ink, ultraviolet signal, high contrast, structured grids, and restrained motion.

| Token       | Decision                                                                                       |
| ----------- | ---------------------------------------------------------------------------------------------- |
| Typography  | Geist Sans for interface and headings; Geist Mono for metadata and system state.               |
| Palette     | Ink `oklch(0.145 .022 264)`, cloud `oklch(.985 .005 255)`, signal violet `oklch(.49 .17 273)`. |
| Spacing     | 4px base; common steps 8, 12, 16, 24, 32, 48, 64, 96.                                          |
| Radius      | 8px controls, 12px cards, 16px feature surfaces.                                               |
| Shadows     | One diffuse ink shadow; never stacked ornamental shadows.                                      |
| Grid        | 12 columns desktop, 8 tablet, 4 mobile; 24px gutters desktop, 16px mobile.                     |
| Breakpoints | Tailwind defaults: 640, 768, 1024, 1280, 1536px.                                               |

Dark mode is token-driven through `next-themes`, not duplicated component styles. Glass surfaces are reserved for elevated, contextual layers and use accessible foreground contrast. Lucide is the only icon set.

## Motion

The motion language is purposeful and fast: 160ms micro-interactions, 280ms reveals, 500ms only for spatial transitions. Use Framer Motion for component lifecycle, GSAP for sequenced editorial sequences, Lenis only on public immersive experiences, and React Three Fiber only where the visual improves comprehension or brand recall. Honor `prefers-reduced-motion` for all new motion.
