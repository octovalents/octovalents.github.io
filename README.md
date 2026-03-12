# octovalents.github.io

Personal portfolio site — a single-page application serving as a fast, accessible showcase of projects and contact info.

Live at [octovalents.github.io](https://octovalents.github.io)

## Tech Stack

| Layer | Tool | Version |
|-------|------|---------|
| UI | React | 19 |
| Language | TypeScript | 5.9 |
| Bundler | Vite | 6.4 |
| Styling | Tailwind CSS (Vite plugin) | 4.2 |
| Linting | ESLint + react-hooks + react-refresh | 10 |
| Deploy | GitHub Actions → GitHub Pages | - |

## Project Structure

```
src/
├── components/       # Page sections (Hero, Projects, Contact, Navbar, ProjectCard)
├── context/          # ThemeContext — dark/light mode via localStorage
├── data/             # Static project data (projects.ts)
├── hooks/            # Custom hooks (useSticky — sticky navbar on scroll)
├── icons/            # SVG icon components (social icons, logo)
├── index.css         # Global styles, font imports, CSS custom properties
├── main.tsx          # React root mount
└── App.tsx           # Root component — assembles Navbar, Hero, Projects, Contact
public/               # Static assets (favicon, project thumbnails)
.github/workflows/    # CI/CD — deploy.yml builds and deploys to GitHub Pages
```

## Setup

Prerequisites: **Node.js >= 18** and **npm**

```bash
git clone git@github.com:octovalents/octovalents.github.io.git
cd octovalents.github.io
npm install
```

## Local Development

```bash
npm run dev       # Vite dev server with HMR
npm run build     # TypeScript check + production build → dist/
npm run preview   # Serve production build locally
npm run lint      # Run ESLint
```

Deployment is automatic — pushing to `main` triggers the GitHub Actions workflow that builds and deploys to GitHub Pages.

## Contact

- [LinkedIn](https://www.linkedin.com/in/benidictusgalihmp/)
- [GitHub](https://github.com/octovalents)
- [Kaggle](https://www.kaggle.com/benidictusgalihmp)
