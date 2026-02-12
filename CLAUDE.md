# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (runs both CMS and web concurrently)
npm run dev

# Run only frontend (web/)
npm run dev:web

# Run only CMS backend (cms/)
npm run dev:cms

# Generate GraphQL types after schema changes (run from web/)
cd web && npm run generate:types

# Type checking (web/)
cd web && npm run typecheck

# Build (web/)
cd web && npm run build

# Database migrations (cms/)
cd cms && npx prisma migrate deploy

# Seed database (cms/)
cd cms && npm run seed
```

## Architecture

This is a monorepo with two applications:

**Frontend (`web/`)**: React Router v7 app with SSR
- Config-based routing in `web/app/routes.ts`
- Routes in `web/app/routes/` wrapped by `wrapper.tsx` layout
- GraphQL client in `web/app/utils/graphql.server.ts` using `graphql-request`
- Generated types in `web/app/generated/graphql.ts` from queries in `web/app/queries/*.graphql`
- Components use CVA (Class Variance Authority) with tailwind-merge configured in `web/cva.config.ts`

**Backend (`cms/`)**: KeystoneJS 6 headless CMS
- Schema definitions in `cms/schema.ts` (User, Post, Tag, Prompt lists)
- Auth config in `cms/auth.ts`
- PostgreSQL database via Prisma
- GraphQL API at `/api/graphql`, admin UI at `/admin`

## Key Patterns

### Route Components (React Router 7)
```typescript
import type { Route } from './+types/routename';

export async function loader({ request, params }: Route.LoaderArgs) {
    // Server-side data fetching
    const data = await client.request<QueryType>(QueryDocument);
    return { data };
}

export default function RouteComponent({ loaderData }: Route.ComponentProps) {
    // Access data via props, NOT useLoaderData hook
    return <div>{loaderData.data}</div>;
}
```

### GraphQL Workflow
1. Define queries in `web/app/queries/*.graphql`
2. Run `npm run generate:types` from `web/`
3. Import generated types and documents: `import { QueryDocument, type QueryType } from '~/generated/graphql'`
4. Use in loaders: `await client.request<QueryType>(QueryDocument)`

### Component Variants (CVA)
```typescript
import { cva, cx } from 'cva.config';

export const componentVariants = cva({
    base: 'base-classes',
    variants: { size: { sm: '...', md: '...' } },
    defaultVariants: { size: 'md' }
});
```

## Important Notes

- Use `~/` prefix for absolute imports in web app
- CMS uses `DATABASE_URL_DEV` in development, `DATABASE_URL` in production
- Pre-rendered routes defined in `web/react-router.config.ts`
- Avoid `useEffect` in React Router 7 routes - prefer loaders/actions
- Use classic `function` syntax over arrow functions

## Adding New Work Items or Products

When adding a new route for work items or products, you MUST update these files:

1. **`web/app/routes.ts`** - Add the route definition
2. **`web/app/components/CommandPalette.tsx`** - Add to `workLinks` array so it appears in command palette (Cmd+K)
3. **`web/app/routes/sitemap.xml.tsx`** - Add to sitemap for SEO
4. **`web/react-router.config.ts`** - Add to `prerender()` array if it should be statically generated

⚠️ **The command palette is critical for site navigation** - users rely on Cmd+K to find work. Don't forget step #2!
