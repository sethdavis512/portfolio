# Portfolio

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router_7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Seth Davis's personal portfolio — a server-rendered React Router v7 app with all content authored locally as MDX and TypeScript data files. No external CMS or database; content changes are code changes.

**Live Site**: [sethdavis.tech](https://sethdavis.tech)

## Stack

- **Framework**: [React Router v7](https://reactrouter.com/) in framework mode (SSR + static pre-rendering)
- **Runtime / package manager**: [Bun](https://bun.sh/)
- **Server**: [Hono](https://hono.dev/) via `hono-react-router-adapter` (`main.ts` serves the build, `server/` holds app server config)
- **Language**: TypeScript (strict)
- **Styling**: TailwindCSS v4 with `@tailwindcss/typography` and `tailwindcss-animate`
- **Content**: MDX (`@mdx-js/rollup`, `remark-gfm`, `remark-frontmatter`, `remark-mdx-frontmatter`)
- **Components**: [CVA](https://cva.style/) (Class Variance Authority) + `tailwind-merge`, Radix UI primitives, `lucide-react` icons
- **Syntax highlighting**: [Shiki](https://shiki.style/)
- **Command palette**: [cmdk](https://cmdk.paco.me/)
- **Forms**: [Airtable](https://airtable.com/) (contact form)
- **Analytics**: [PostHog](https://posthog.com/)
- **Build**: Vite

## Commands

```bash
bun install        # Install dependencies

bun run dev        # Start the dev server
bun run typecheck  # react-router typegen + tsc
bun run build      # Production build (build/client + build/server)
bun run start      # Serve the production build via Hono (tsx main.ts)
```

## Architecture

A single React Router v7 application — no monorepo, no backend service.

- **Routing**: config-based in `app/routes.ts`. Most routes are wrapped by the `routes/wrapper.tsx` layout; the full-screen slideshow stage and `sitemap.xml` sit outside it.
- **Routes**: in `app/routes/`. Loaders return serializable data only; components read it via `loaderData` props (not `useLoaderData`). MDX components are resolved at module/render scope, never returned from loaders.
- **Pre-rendering**: `react-router.config.ts` walks the content directories at build time to generate static paths for work, TIL, and slide-deck pages. Routes that export an `action` (e.g. `/contact`) are intentionally **not** pre-rendered so their form POSTs hit the server action.
- **Content loaders**: `app/content/work.ts` and `app/content/posts.ts` use `import.meta.glob` to eagerly load MDX modules. Slides load via `app/content/slides.ts`.
- **Server entry**: `main.ts` boots a Hono server, serves static assets from `build/client`, and hands requests to the React Router build.

### Directory layout

```text
app/
├── routes.ts          # Route configuration
├── routes/            # Route modules (loaders/actions/components)
├── components/        # UI components (CVA-based)
├── content/
│   ├── work/*.mdx     # Work / project items
│   ├── til/*.mdx      # Today-I-Learned posts
│   ├── post/*.mdx     # Blog posts
│   ├── slides/<deck>/ # Slide decks (one folder per deck, one MDX per slide)
│   ├── data/*.ts      # Structured data (about facts, quotes, values, skills, offers)
│   ├── work.ts        # Work loader (import.meta.glob)
│   ├── posts.ts       # Post/TIL loader
│   ├── slides.ts      # Slides loader
│   └── types.ts       # Content TypeScript interfaces
├── hooks/             # React hooks
├── schemas/           # Zod schemas
├── utils/             # Utilities
├── cva.config.ts      # CVA + tailwind-merge config
├── app.css            # Tailwind + view-transition styles
└── root.tsx           # Root document
main.ts                # Hono production server entry
server/                # Hono app server config
react-router.config.ts # SSR + prerender config
```

## Adding content

Content lives in the repo, so adding it is a code change followed by a deploy.

- **Work item** — add `app/content/work/<slug>.mdx` with YAML frontmatter (`status: "PUBLISHED"`, `sortOrder`, Cloudinary image URLs). Add an MDX body and set `hasContent: true` for rich pages.
- **TIL post** — add `app/content/til/<slug>.mdx` with frontmatter (`status: "PUBLISHED"`, `excerpt`) and write the body as MDX.
- **Slide deck** — create a folder `app/content/slides/<deck-slug>/` with a `deck.json` and one MDX file per slide. The deck auto-appears at `/slides` and is pre-rendered automatically.

See [`CLAUDE.md`](CLAUDE.md) for detailed authoring conventions (frontmatter fields, slide MDX rules, placeholder images) and [`CONTENT_STYLE_GUIDE.md`](CONTENT_STYLE_GUIDE.md) for voice and tone.

## Conventions

- Use the `~/` prefix for absolute imports within `app/`.
- Prefer loaders/actions over `useEffect` in routes.
- Use classic `function` syntax over arrow functions.
- Escape `<` outside code blocks in MDX (`&lt;` or `≤`).
- Components use CVA variants; styling is dark-first with an OKLCH primary/secondary/tertiary color system.

## Deployment

Built with `bun run build` and served by the Hono entry (`bun run start`). A `Dockerfile` is included for containerized deploys.

## License

MIT © Seth Davis
