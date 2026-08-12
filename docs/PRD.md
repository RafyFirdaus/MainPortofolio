# Product Requirement Document (PRD): Portfolio App

## 1. Overview
A modern, high-performance personal portfolio website built with Next.js (App Router), React 19, and Tailwind CSS. Designed to showcase developer identity, tech stack skills, and deep-dive case studies for highlighted web and mobile projects.

## 2. Core Features & Capabilities
1. **Interactive Home Page**:
   - **Hero Section**: Personal availability badge, developer role, call-to-actions (View Projects, Download CV).
   - **Projects Section**: Grid of highlighted project cards using `MagicCard` with dynamic visual hover effects.
   - **Tech Stack & About**: Organized breakdown of Web Frontend, Mobile Apps, Backend, and DevOps capabilities.
   - **Contact & Footer**: Quick links to GitHub, Email, and social profiles.

2. **Project Detail Pages (`/projects/[slug]`)**:
   - **Hero & Badge Header**: Big title, subtitle, and tech stack tags.
   - **Media / Video Showcase**: Embedded Cloudinary MP4 video or demo screenshot encased in a `BorderBeam` visual wrapper.
   - **The Context**: Structured breakdown of **The Problem** and **The Solution**.
   - **Key Features**: 2x2 grid of feature cards powered by `MagicCard` with custom Material Symbols icons.
   - **Technical Deep-Dive**: 4-stage engineering timeline explaining architecture, algorithms, and stack decisions.

3. **Bilingual Localization (i18n)**:
   - Full support for English (`en`) and Indonesian (`id`) language toggle.
   - Centralized dictionary mapping in `src/locales/dictionaries.ts`.

4. **Dark & Light Mode**:
   - Dynamic theme switching using CSS variables and Tailwind `dark:` classes (`slate-900` dark background, `slate-50`/`white` light background).

## 3. Data Schema for Portfolio Projects
Every project added to this portfolio MUST contain the following data structure in `dictionaries.ts`:

```typescript
{
  title: string;          // Short project name
  tagline: string;        // 1-line headline tagline
  desc: string;           // 2-3 sentence overview for the home card
  heroDesc: string;       // Detailed tagline for project page hero
  problemText: string;    // Detailed problem statement
  solutionText: string;   // Detailed solution statement
  feature1Title: string;  feature1Desc: string;
  feature2Title: string;  feature2Desc: string;
  feature3Title: string;  feature3Desc: string;
  feature4Title: string;  feature4Desc: string;
  tech1Title: string;     tech1Desc: string;
  tech2Title: string;     tech2Desc: string;
  tech3Title: string;     tech3Desc: string;
  tech4Title: string;     tech4Desc: string;
}
```

## 4. Non-Functional Requirements
- **Performance**: High Lighthouse score, smooth transitions without layout shifts.
- **Strict i18n Parity**: Any text added in `id` must also exist in `en`.
- **Responsive Layout**: Full support for mobile, tablet, and desktop views.
