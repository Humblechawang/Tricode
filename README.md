# Three of Us — Portfolio

A frontend-only portfolio site for Humble Chawang, Devyash Singh, and Ritika
Ranjan — three CS students building product and AI work together. React,
TypeScript, and Tailwind CSS. No backend, no database.

## Running it

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # serves the built dist/ folder locally
```

## Editing content

Everything about the three people and the featured project lives in one
file: `src/data/portfolioData.ts`. Add a project, change a bio, or update a
link there — no component code needs to change for content updates.

- `people` — name, role, bios, skills, and social links per person.
- `projects` — title, description, category, contributors (by person `id`),
  and tech tags. A project's `status` can be `"shipped"` or `"building"` —
  `"building"` shows a dashed "Building" badge instead of implying it's
  finished.
- `projectCategories` — the filter tabs shown above the project grid.
- `siteName` — the name shown in the nav and footer. Currently a
  placeholder ("Three of Us") — change this to whatever you want the
  collective to actually be called.

## Structure

```
src/
  components/   UI components (Navbar, Hero, PersonCard, WorkSection, ...)
  data/         portfolioData.ts — all real content
  hooks/        useTheme.ts — light/dark mode, persisted to localStorage
  types.ts      Person and Project types
  index.css     design tokens (colors, both themes) + global styles
```

## Notes on current content

- Only one project is currently real and shippable: the AI Women's Safety
  Application, built by Devyash and Humble at a hackathon. Ritika's entry
  is marked "Building" rather than invented, since she doesn't have a
  shipped project yet — update `projects` once she does.
- Ritika's profile has no GitHub/LinkedIn link because none was provided.
  Add one in `portfolioData.ts` under her `links` object if she has one.
- Phone numbers from the original resumes were deliberately left off the
  public site. Only email (and GitHub/LinkedIn where available) are shown.
- Theme choice persists across visits via `localStorage` (not shared
  between people — it's per-browser).

## Accessibility

- Keyboard-navigable throughout; visible focus rings via `:focus-visible`.
- The profile modal traps focus, closes on `Escape` or backdrop click, and
  returns context via `aria-modal` / `aria-labelledby`.
- Respects `prefers-reduced-motion`.
