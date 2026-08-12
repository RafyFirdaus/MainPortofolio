# Design System & UI Specifications: Portfolio App

## 1. Design Aesthetics & Visual Tokens
- **Theme Concept**: Modern Glassmorphism & Interactive Cards with subtle neon blue highlights.
- **Color Palette**:
  - Primary Accent: Blue (`#137fec`, `rgba(19, 127, 236, 0.1)`)
  - Gradient Accents: Blue to Purple (`#137fec` to `#9c40ff`)
  - Dark Surface: `bg-slate-900`, `bg-surface-dark`
  - Light Surface: `bg-white`, `bg-slate-50`
  - Text Dark: `text-slate-900`, `text-white`
  - Text Muted: `text-slate-500`, `text-slate-400`
  - Border: `border-slate-100`, `dark:border-slate-800`

## 2. Iconography & Typography
- **Font Family**: Default Sans / Inter.
- **Icon Set**: Google Material Symbols Outlined (`<span className="material-symbols-outlined">icon_name</span>`).

## 3. Core UI Component Primitives
- **`MagicCard`** (`@/components/ui/magic-card`): Interactive card with dynamic mouse spotlight gradient background (`gradientColor="rgba(19, 127, 236, 0.1)"`).
- **`BorderBeam`** (`@/components/ui/border-beam`): Animated glowing border around video and main hero frames.
- **`DotPattern`** (`@/components/ui/dot-pattern`): Subtle background dot grid pattern for technical deep dive sections.
- **`Badge`** (`@/components/ui/badge`): Pill badges for tech stack tags.
- **`Button`** (`@/components/ui/button`): Standardized buttons with variant support (`default`, `outline`, `ghost`).

## 4. Standard Project Page Layout Pattern
Each project page (`src/app/projects/[slug]/page.tsx`) MUST follow this section hierarchy:
1. **Header**: Sticky navigation with back button (`t.nav.backToHome`) and brand title.
2. **Hero Section**: Centered title, subtitle, and flex wrap tech stack badges (`Badge`).
3. **Showcase Section**: 16:9 aspect-ratio video/image container wrapped with `BorderBeam`.
4. **Content Grid**: 12-column grid (`lg:grid-cols-12`):
   - **Left Column (7 cols)**:
     - *The Context*: Problem statement (`t.projectDetails.[slug].problemText`) and Solution statement (`t.projectDetails.[slug].solutionText`).
     - *Key Features*: 2x2 grid of `MagicCard` items with Material Symbol icons.
   - **Right Column (5 cols - Sticky)**:
     - *Technical Deep-Dive*: Sticky timeline box with `DotPattern` background, listing 4 architecture points.
5. **Footer**: Clean bottom bar with copyright notice and back links.
