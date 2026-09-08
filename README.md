# Mohamed Ahmed — Portfolio

Personal portfolio website of **Mohamed Ahmed** — Computer Science student at the
German International University, software developer, and game developer.

Selected work is organised into three categories:

1. **Web & Software** — full-stack apps, backend systems, REST APIs, AI integration
2. **Games & Interactive** — Unity / C# games and interactive prototypes
3. **Experimental** — concepts and prototypes

The visual design originates from a Figma design (generated with Figma Make). This
repository turns that generated output into a maintainable, deployable site.

## Tech stack

- **React 18** + **TypeScript**
- **Vite 6** — build tool / dev server
- **React Router 7** — client-side routing (`/`, `/work`, `/work/:slug`)
- **Motion** — animations
- **Tailwind CSS 4** — styling
- **lucide-react** — icons

## Project structure

```
src/
  app/
    App.tsx                # routes + layout + preloader
    components/            # section + page components
    data/
      projects.ts          # <-- all project content lives here
      site.ts              # <-- contact links, CV, email
  styles/                  # global CSS
public/
  projects/                # project cover images + detail-page screenshots
  favicon.svg
  404.html                 # GitHub Pages SPA deep-link fallback
```

### Adding a project

Edit `src/app/data/projects.ts` and add an entry to the `projects` array. Every
field is documented at the top of that file. No component changes needed — the
home page, the `/work` grid, filters, and the detail page all read from it.

For the cover image, drop a ~1600×1200 file into `public/projects/` and point
the `image` field at it with `asset("projects/your-file.jpg")`. Add detail-page
screenshots the same way via the optional `gallery` array (rendered as a "More
Information" section on the project page).

### Updating links

Edit `src/app/data/site.ts` (GitHub, LinkedIn, email, CV). An empty string is
treated as "not available yet" and renders as a clearly-marked placeholder
instead of a broken link. Put a `cv.pdf` in `public/` and set `cv: "/cv.pdf"`.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build

```bash
npm run build      # output in dist/
npm run preview    # preview the production build locally (serves under the Pages base path)
```

## Deployment

Deployed to **GitHub Pages** via GitHub Actions.

- Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site
  and publishes `dist/` to Pages.
- `vite.config.ts` sets `base: '/mohamed-ahmed-portfolio/'` in production so
  assets resolve under the Pages sub-path.
- `public/404.html` plus a small script in `index.html` handle SPA deep links on
  refresh (GitHub Pages has no server-side routing).

**One-time setup:** repo → Settings → Pages → Build and deployment → Source:
**GitHub Actions**.

Live URL: `https://<github-username>.github.io/mohamed-ahmed-portfolio/`

## License

Personal project. All rights reserved.
