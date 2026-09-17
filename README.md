# TriCode — Portfolio

A frontend-only portfolio for Humble Chawang, Devyash Singh, and Ritika Ranjan.
The project is built with React, TypeScript, Vite, React Router, Framer Motion,
and Tailwind CSS. It contains no backend or database.

## Running locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints in the terminal, usually:

```text
http://localhost:5173
```

To create a production build:

```bash
npm run build
npm run preview
```

## Editing content

Most of the portfolio content is centralized in:

- `src/data/portfolioData.ts`

This file includes the main site data, such as:

- `people` — names, roles, bios, skills, and profile links
- `projects` — project title, description, category, contributors, and status
- `projectCategories` — tabs displayed in the work section
- `siteName` and `siteTagline` — branding used across the app

## Project structure

```text
src/
  App.tsx
  main.tsx
  types.ts
  index.css
  components/
    Footer.tsx
    Navbar.tsx
    PageTransition.tsx
    PersonCard.tsx
    PersonModal.tsx
    Portrait.tsx
    PortraitFrame.tsx
    ProfileLinks.tsx
    ProjectCard.tsx
    ThemeToggle.tsx
    TriCodeScene.tsx
  data/
    portfolioData.ts
  hooks/
    useTheme.ts
  pages/
    About.tsx
    Contact.tsx
    Home.tsx
    People.tsx
    PersonProfile.tsx
    Work.tsx
public/
  portraits/
```

## Notes on the current content

- The site is designed as a static portfolio; no API or CMS is required.
- The project data reflects the current team members and their active work.
- The Ritika project entry is intentionally marked as `"building"` rather than implying it is shipped.
- Theme choice is stored in `localStorage` and persists across visits.
- Social and contact links are configured in the portfolio data file.

## Accessibility and UX

- Keyboard-friendly navigation and visible focus states are included.
- The profile modal supports close interactions and accessible labeling.
- Motion preferences are respected via reduced-motion handling.
