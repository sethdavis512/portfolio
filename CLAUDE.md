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

### Adding a TIL post
1. Create `app/content/til/<slug>.mdx` with YAML frontmatter
2. Write content as MDX body
3. Set `status: "PUBLISHED"` and include `excerpt` in frontmatter

## Important Notes

- Use `~/` prefix for absolute imports in app
- Pre-rendered routes defined in `react-router.config.ts` (reads MDX files from disk)
- Avoid `useEffect` in React Router 7 routes, prefer loaders/actions
- Use classic `function` syntax over arrow functions
- MDX files must escape `<` characters outside code blocks (use `&lt;` or `≤`)
- Airtable is used for services contact and interest forms (separate from content)
