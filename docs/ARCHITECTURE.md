# Architecture & Integration Specification: Portfolio App

## 1. Technical Stack & Framework
- **Framework**: Next.js 15+ (App Router)
- **UI Engine**: React 19 (Client Components `"use client"` for dynamic state & i18n)
- **Styling**: Tailwind CSS v3/v4 with custom utility classes & PostCSS
- **Language**: TypeScript (`strict` mode)
- **Asset Hosting**: Public folder (`/public/images/projects/`) or Cloudinary for videos.

## 2. Directory Structure Conventions
```text
src/
├── app/
│   ├── layout.tsx                # Root layout & providers
│   ├── page.tsx                  # Portfolio home page
│   └── projects/
│       ├── [slug]/               # Dynamic/Static project route
│       │   └── page.tsx          # Project detail page component
├── components/
│   ├── sections/                 # Main section layouts (Hero, About, Projects, Navbar, Footer)
│   └── ui/                       # Reusable UI primitives (MagicCard, BorderBeam, DotPattern)
├── context/
│   └── LanguageContext.tsx       # Global i18n context provider ('id' | 'en')
└── locales/
    └── dictionaries.ts           # Central dictionary mapping for EN and ID
docs/                             # Core specifications for PRD, Design, Architecture, & New Projects
```

## 3. Step-by-Step Workflow: How to Add a New Project
To add a new project (e.g. `my-new-project`) to this portfolio, 4 specific code files MUST be updated/created:

### Step 1: Update i18n Dictionary (`src/locales/dictionaries.ts`)
Add entry under `projects` and `projectDetails` for both `en` and `id` objects:
```typescript
// Under dictionaries.en.projects & dictionaries.id.projects
myNewProject: {
  title: "My New Project Title",
  tagline: "1-line tagline",
  desc: "Home card short description...",
  heroDesc: "Detailed hero description..."
}

// Under dictionaries.en.projectDetails & dictionaries.id.projectDetails
myNewProject: {
  problemText: "...",
  solutionText: "...",
  feature1Title: "...", feature1Desc: "...",
  feature2Title: "...", feature2Desc: "...",
  feature3Title: "...", feature3Desc: "...",
  feature4Title: "...", feature4Desc: "...",
  tech1Title: "...",    tech1Desc: "...",
  tech2Title: "...",    tech2Desc: "...",
  tech3Title: "...",    tech3Desc: "...",
  tech4Title: "...",    tech4Desc: "..."
}
```

### Step 2: Add Card to `ProjectsSection.tsx` (`src/components/sections/ProjectsSection.tsx`)
Add a new `<MagicCard>` component into the 3-column grid inside `ProjectsSection.tsx`:
```tsx
<MagicCard className="group flex flex-col ...">
  <div className="h-48 overflow-hidden bg-slate-50 dark:bg-slate-800 relative">
    <Image src="/images/projects/thumbnail-new.png" alt="My New Project" fill className="..." />
  </div>
  <div className="p-6 flex flex-col grow">
    <h3>{t.projects.myNewProject.title}</h3>
    <p>{t.projects.myNewProject.tagline}</p>
    <p>{t.projects.myNewProject.desc}</p>
    <Link href="/projects/my-new-project">...</Link>
  </div>
</MagicCard>
```

### Step 3: Create Project Detail Page (`src/app/projects/my-new-project/page.tsx`)
Create a new page following the layout specification in `docs/DESIGN.md`:
- Import `useLanguage` from `@/context/LanguageContext`.
- Access translations via `dictionaries[language].projects.myNewProject` and `dictionaries[language].projectDetails.myNewProject`.
- Use `MagicCard`, `BorderBeam`, and `DotPattern` for consistent UI.

### Step 4: Add Image Assets
Place thumbnail asset in `/public/images/projects/thumbnail-new.png` (or external URL for video demo).
