# Ismail Aminu Said — Software Engineering Portfolio

The source code for [ismailaminusaid.netlify.app](https://ismailaminusaid.netlify.app/), a responsive portfolio presenting selected software engineering projects, case studies, experience, and contact information.

Built with React, TypeScript, and Vite. The site is a client-rendered frontend and is deployed to Netlify.

## Contents

- [Highlights](#highlights)
- [Technology](#technology)
- [Getting started](#getting-started)
- [Available commands](#available-commands)
- [Project structure](#project-structure)
- [Updating portfolio content](#updating-portfolio-content)
- [Deployment](#deployment)
- [Quality and accessibility](#quality-and-accessibility)

## Highlights

- Responsive portfolio sections for selected work, engineering, experience, projects, about, and contact.
- Featured project cards and expanded case studies with project details, architecture, technology stack, and links.
- Dark and light themes, with the selected theme saved in browser local storage.
- Semantic page structure, labeled navigation, and a skip-to-content link.
- Search and social sharing metadata, canonical URL, favicon, and theme color.

## Technology

- **UI:** React 19
- **Language:** TypeScript 6
- **Build tool:** Vite 8
- **Linting:** ESLint 10 with TypeScript support
- **Hosting:** Netlify

## Getting started

### Prerequisites

- Node.js 20, as configured for Netlify in `netlify.toml`. Use a Vite-compatible Node.js 20 release.
- npm, included with Node.js.

### Install and run locally

```bash
git clone <repository-url>
cd my_portfolio
npm ci
npm run dev
```

Vite prints the local development URL in the terminal. Open that URL in a browser.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run lint` | Run ESLint across the project. |
| `npm run build` | Type-check the project and create a production build in `dist/`. |
| `npm run preview` | Serve the production build locally for a final check. |

To validate a change before deploying:

```bash
npm run lint
npm run build
npm run preview
```

## Project structure

```text
my_portfolio/
├── public/                 # Static assets served as-is
├── src/
│   ├── components/         # Navigation, project cards, dialogs, and UI components
│   ├── data/               # Project, experience, and portfolio content
│   ├── sections/           # Page sections
│   ├── App.tsx             # Application entry component
│   ├── PortfolioApp.tsx    # Page composition and theme state
│   └── index.css           # Global styles
├── index.html              # Document metadata and app mount point
├── netlify.toml            # Netlify build, publish, and SPA routing configuration
├── package.json            # Scripts and dependencies
└── vite.config.ts          # Vite configuration
```

## Updating portfolio content

- Edit project descriptions, case-study details, technology stacks, and project URLs in `src/data/projects.ts`.
- Update experience, skills, and education in the corresponding files under `src/data/`.
- Edit the page sections and contact links in `src/sections/`.
- Place static assets in `public/`.
- Update the title, description, canonical URL, Open Graph metadata, and Twitter metadata in `index.html` when the production domain or site description changes.

Review all external links and factual project details before publishing. Do not add secrets or private credentials to this public frontend repository.

## Deployment

The repository includes `netlify.toml` with the production deployment settings:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node.js:** 20
- **Routing:** requests are rewritten to `index.html` for the client-rendered application

To deploy, connect the Git repository to Netlify and deploy the production branch. Netlify installs dependencies, runs the configured build command, and publishes `dist`. For a custom domain, update the canonical and social URL metadata in `index.html` to match the final domain, then verify the deployed site and its preview cards.

## Quality and accessibility

Run the lint and production build commands before merging or deploying changes. The production build includes the TypeScript project build. There is currently no automated test script configured in `package.json`.

When changing the interface, check the page at mobile and desktop sizes, navigate using a keyboard, confirm visible focus and readable contrast in both themes, and verify that dialogs and navigation controls work as expected.
