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

# Sync from production to local (pull latest data)
cd cms && npx tsx sync-from-prod.ts [--tables=work,post,...] [--clean] [--dry-run]

# Sync from local to production (push new/updated data)
cd cms && npx tsx sync-to-prod.ts [--tables=work,post,...] [--new-only] [--dry-run] [--force]

# Sync images from local to production (Cloudinary JSON data)
cd cms && npx tsx sync-images-to-prod.ts

# Rebuild web after data sync (required for pre-rendered pages)
cd web && railway up -d
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

## Database Sync Workflow

**Production is the source of truth.** Use these scripts to sync data between environments:

| Direction | Script | Typical Use |
|-----------|--------|-------------|
| Prod → Local | `sync-from-prod.ts` | Pull latest content before editing |
| Local → Prod | `sync-to-prod.ts` | Push new content you created locally |

**Conflict Detection**: When pushing to prod, records with a newer `updatedAt` in production are skipped (conflict). Use `--force` to override.

**Recommended workflow**:

1. Pull latest: `npx tsx sync-from-prod.ts --clean`
2. Create/edit content locally
3. Preview changes: `npx tsx sync-to-prod.ts --dry-run`
4. Push new content: `npx tsx sync-to-prod.ts --new-only`
5. Sync images: `npx tsx sync-images-to-prod.ts`
6. **Rebuild web** (required for pre-rendered pages): `cd web && railway up -d`

**Critical**: `railway redeploy` only restarts the container — it does NOT rebuild. Pre-rendered pages fetch GraphQL data at build time, so you must use `railway up` to trigger a fresh build after syncing data.

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
