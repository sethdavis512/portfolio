# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
bun run dev

# Type checking
bun run typecheck

# Build
bun run build
```

## Architecture

React Router v7 app with SSR, served via Hono adapter. Content lives as local MDX and TypeScript data files.

- Config-based routing in `app/routes.ts`
- Routes in `app/routes/` wrapped by `wrapper.tsx` layout
- Content as MDX files in `app/content/work/`, `app/content/til/`, `app/content/post/`
- Structured data as TypeScript files in `app/content/data/`
- Content loaders in `app/content/work.ts` and `app/content/posts.ts` using `import.meta.glob`
- Components use CVA (Class Variance Authority) with tailwind-merge configured in `cva.config.ts`

## Content Structure

```
app/content/
  work/*.mdx          # Work/project items (frontmatter + optional MDX body)
  til/*.mdx            # TIL posts (frontmatter + MDX body)
  post/*.mdx           # Blog posts (frontmatter + MDX body)
  data/about-facts.ts  # About page facts
  data/quotes.ts       # Motivational quotes
  data/values.ts       # How I Work values
  data/skills.ts       # Resume skills
  data/packages.ts     # Service packages
  types.ts             # TypeScript interfaces for content
  work.ts              # Work content loader (import.meta.glob)
  posts.ts             # Post/TIL content loader (import.meta.glob)
```

## Key Patterns

### Route Components (React Router 7)

```typescript
import type { Route } from './+types/routename';

export function loader({ request, params }: Route.LoaderArgs) {
    // Return serializable data only
    return { data };
}

export default function RouteComponent({ loaderData }: Route.ComponentProps) {
    // Access data via props, NOT useLoaderData hook
    return <div>{loaderData.data}</div>;
}
```

### MDX Content in Routes

MDX components cannot be returned from loaders (not serializable). Access them at module scope:

```typescript
import { getWorkBySlug } from '~/content';
import { MdxContent } from '~/components/MdxContent';

export function loader({ params }: Route.LoaderArgs) {
    const work = getWorkBySlug(params.slug!);
    if (!work) throw new Response('Not Found', { status: 404 });
    return { work: work.frontmatter }; // serializable only
}

export default function WorkDetail({ loaderData }: Route.ComponentProps) {
    const work = getWorkBySlug(loaderData.work.slug); // get component at render time
    return <MdxContent Component={work!.Component} />;
}
```

### Component Variants (CVA)

```typescript
import { cva, cx } from 'cva.config';

export const componentVariants = cva({
    base: 'base-classes',
    variants: { size: { sm: '...', md: '...' } },
    defaultVariants: { size: 'md' }
});
```

## Adding Content

### Adding a work item
1. Create `app/content/work/<slug>.mdx` with YAML frontmatter
2. Add Cloudinary image URLs to frontmatter (`heroImage`, `thumbnailImage`, `galleryImages`)
3. Set `status: "PUBLISHED"` and `sortOrder`
4. Optional: add MDX body for rich content, set `hasContent: true`
5. Deploy (content changes are code changes, so normal deploy flow)

### Placeholder images for work items
When a project photo is not immediately available, use these generic Cloudinary placeholders in frontmatter. Replace with project-specific images later.

| Use | Cloudinary URL |
|-----|----------------|
| CLI/terminal projects | `https://res.cloudinary.com/setholito/image/upload/c_scale,f_auto,q_90,w_1920/v1/portfolio/placeholder-terminal.png` |
| Browser/web projects | `https://res.cloudinary.com/setholito/image/upload/c_scale,f_auto,q_90,w_1920/v1/portfolio/placeholder-browser.png` |

Swap `w_1920` to `w_1280` for thumbnailImage. Dark-inverted alternates exist in `public/` if the 2d2d2d-on-black variants need replacing.

### Adding a TIL post
1. Create `app/content/til/<slug>.mdx` with YAML frontmatter
2. Write content as MDX body
3. Set `status: "PUBLISHED"` and include `excerpt` in frontmatter

### Adding a slide deck

Decks live as **folders** under `app/content/slides/`. A folder is a deck. Each `*.mdx` file inside it is one slide.

**Steps:**
1. Create `app/content/slides/<deck-slug>/` — the folder name is the URL segment (e.g. `/slides/rr7-deep-dive`)
2. Add `deck.json` in that folder for listing metadata:
   ```json
   { "title": "Deck Title", "description": "Short summary.", "order": 1 }
   ```
   Missing fields fall back to sensible defaults (title → folder name). `order` controls position on `/slides`.
3. Add one `.mdx` file per slide. Each needs frontmatter:
   ```yaml
   ---
   title: Slide Title
   order: 1
   transition: fade   # depth (default) | fade | lift | zoom | flip | none
   ---
   ```
   `order` controls slide sequence within the deck. Pick transitions intentionally — `fade` for title/end slides, `depth` for content progression, `lift`/`zoom` for section breaks, `flip` sparingly.
4. Write the slide body as a single full-height JSX block. **Slides are designed components, not prose** — use `h-full flex ...` layouts and fluid typography. No `<MdxContent>` wrapper.
5. That's it. The deck auto-appears at `/slides`, the stage is auto-wired at `/slides/<deck-slug>/<slide-id>`, and the prerender config (`react-router.config.ts`) walks the folder automatically.

**Slide content conventions:**
- Use portfolio tokens only: `bg-zinc-950`, `text-white`, `text-zinc-400`, `text-primary-400`, etc. Never raw hex/rgb.
- Fluid typography via `clamp()`: headings `text-[clamp(2.5rem,5vw+0.5rem,6rem)]`, body `text-[clamp(1rem,1.3vw+0.25rem,1.5rem)]`.
- Go **big and bold** — `font-black`, tight leading (`leading-[0.9]`–`leading-[1]`), decisive color.
- Each slide's root element should be `h-full` + a flex layout so content fills the stage.
- See `app/content/slides/bun-cli/*.mdx` for reference layouts (title/subtitle, two-column, card grid, code, big-statement, thank-you).

**Code in slides:**

Slides use the presentation-tuned `SlideCode` component (`app/components/SlideCode.tsx`) — Shiki-highlighted with `github-dark-default`, fluid font size, minimal chrome (language label only). **Different from TIL** — slides use `SlideCode`, TIL uses `CodeBlock` (which has macOS window chrome + a copy button — too busy for projection).

**Recommended pattern — explicit `<SlideCode>` with a string prop:**

```mdx
---
title: ...
order: 4
transition: depth
---

import { SlideCode } from '../../../components/SlideCode';

<div className="h-full flex flex-col justify-center gap-8">
    <div>
        <div className="uppercase tracking-[0.3em] text-xs text-primary-400 mb-4">Snippet</div>
        <h2 className="font-black ...">One deck = one folder.</h2>
    </div>
    <SlideCode
        language="ts"
        code={`// app/content/slides.ts
const slideModules = import.meta.glob<SlideModule>(
    './slides/*/*.mdx',
    { eager: true }
);`}
    />
    <div className="text-zinc-400 ...">Short caption about the snippet.</div>
</div>
```

**Why explicit over fenced markdown:**
- The stage DOES wire `pre`/`code` to `SlideCode` so fenced blocks (<code>\`\`\`ts</code>) technically work at the MDX top level — BUT mixing fenced blocks with JSX that has blank lines triggers MDX 3 "markdown flow" parsing, which wraps bare text in auto-`<p>` and can nest illegally inside explicit `<p>` tags. Hydration error.
- Explicit `<SlideCode>` + `<div>` prose containers sidestep all of that.

**MDX gotchas in slides — hard rules:**
- **Never use `<p>` as a prose container in slides. Use `<div>`.** When MDX sees a JSX opening tag followed by a newline, it enters block-mode for children and wraps the text content in a markdown `<p>` — which nests illegally inside your explicit `<p>` and breaks hydration. `<div>` can legally contain the auto-`<p>`, so it's safe. This rule applies to every slide, every time.
- Use relative imports (`../../../components/SlideCode`) — the `~/` path alias does not resolve inside MDX files at build time.
- Avoid blank lines between JSX siblings inside a JSX block. They flip MDX into markdown-flow mode and can produce bare auto-`<p>` nodes in unexpected places.
- Fenced code blocks inside a nested JSX block are the highest-risk combination — always use `<SlideCode>` when the snippet lives inside a layout.

**Verifying a new slide is hydration-safe:**
After adding a slide, run `bun run build` then `grep -c '<p><p\|<p>[[:space:]]*<p' build/client/slides/<deck>/<slide>/index.html` — it should print `0 0`. Any non-zero count means you have nested `<p>` in the rendered HTML and the slide will hydration-error in the browser.

**Inline code** (single backticks) maps to a dark pill with primary-color text — good for keys, filenames, flags. Safe inside `<div>` but avoid inside multi-line `<p>` for the same reasons above. If you need an inline code pill inside prose, either keep the prose on one line or use a `<code className="px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-700 text-primary-300 font-mono text-[0.9em]">...</code>` span explicitly.

**Snippet sizing:** keep snippets to 8–12 lines max so they stay legible at projector scale. Trim imports and boilerplate; narrate the shape, don't ship the whole file.

**Supported languages** (via `normalizeLanguage` in `SlideCode`): `ts`, `tsx`, `js`, `jsx`, `bash`/`sh`/`zsh`, `json`, `yaml`, `css`, `html`, `md`. Add new aliases there if needed.

See `app/content/slides/bun-cli/mvc.mdx` for a reference pattern (heading + explicit `<SlideCode>` + short caption).

**Architecture — do not refactor without asking:**
- Loader: `app/content/slides.ts` — eager glob over `./slides/*/*.mdx` + `./slides/*/deck.json`
- Stage component: `app/components/SlideshowStage.tsx` — reusable, keyboard nav + view transitions
- Routes: `app/routes/slides-index.tsx` (listing, inside wrapper), `app/routes/slides-deck-index.tsx` (redirect), `app/routes/slides-deck-stage.tsx` (full-screen stage, **outside** wrapper layout in `app/routes.ts`)
- View transition CSS: `app/app.css` under "SLIDESHOW VIEW TRANSITIONS". Driven by `data-nav` + `data-transition` attributes on `<html>` set by the stage before navigation.
- Prerender: `react-router.config.ts` reads deck subfolders at build time.

**Mounting a deck at a custom path** (e.g. `/talks/my-talk/:slideId`):
Create a new route file that calls `getDeck('my-talk')` + `getSlideNavigation(...)` and renders `<SlideshowStage deck={deck} slideId={...} navigation={...} basePath="/talks/my-talk" />`. The stage primitives are path-agnostic — no library changes needed. Place the route outside the wrapper layout in `app/routes.ts` for full-screen, and add a matching prerender entry if the deck should be statically generated.

## Important Notes

- Use `~/` prefix for absolute imports in app
- Pre-rendered routes defined in `react-router.config.ts` (reads MDX files from disk)
- Avoid `useEffect` in React Router 7 routes, prefer loaders/actions
- Use classic `function` syntax over arrow functions
- MDX files must escape `<` characters outside code blocks (use `&lt;` or `≤`)
- Airtable is used for services contact and interest forms (separate from content)

## Design Context

### Users
Mixed audience: hiring managers evaluating credibility, potential clients scoping collaboration, and developer peers browsing work and TILs. They arrive with different goals but all need to quickly understand who Seth is, what he builds, and why it matters. Design should serve fast scanning (recruiters) and deeper exploration (peers, clients) equally.

### Brand Personality
**Bold, creative, energetic.** This is not a quiet resume site. It should feel like the work of someone who ships ambitious things and enjoys the craft. Design choices should make a statement without tipping into gimmick territory.

### Aesthetic Direction
- **Dark-first**: Dark mode is the default and primary experience (hard-coded `dark` class)
- **Color system**: Primary (teal/cyan), Secondary (blue/purple), Tertiary (magenta) in OKLCH with 100-900 scales. Zinc for neutrals
- **Typography**: Inter for body, JetBrains Mono for code. Hero text goes big and bold (`font-black`, up to `text-9xl`)
- **Motion**: Subtle and purposeful. Fade-slide entrances, gentle pulse, smooth hover transitions (200-300ms). No gratuitous animation
- **Anti-reference**: Must not look like a generic dev portfolio template. No cookie-cutter layouts, stock illustrations, or safe/bland choices
- **Theme**: Light mode supported via `dark:` variants but dark is the primary design surface

### Design Principles
1. **Show, don't decorate.** Every visual choice should reveal something about the work or the person. Ornament without purpose gets cut.
2. **Confidence over cleverness.** Bold typography, strong color, decisive layout. Avoid hedging with too many small elements competing for attention.
3. **Respect the scan.** Mixed audience means varied attention spans. Key information should land in seconds; depth should reward those who stay.
4. **Dark canvas, vivid accents.** The zinc-950 background is the stage. Primary/secondary/tertiary colors are the performers. Use them with intention, not everywhere.
5. **WCAG AA minimum.** Contrast ratios, keyboard navigation, screen reader support, and focus indicators are non-negotiable. Test color combinations against AA thresholds.
