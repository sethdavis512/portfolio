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

# Upload work item images to Cloudinary (from cms/)
cd cms && bun run upload-image.ts <slug> <heroImage|thumbnailImage|gallery> <file-or-url> [alt-text]

# Rebuild web after data changes (required for pre-rendered pages)
cd web && echo "// build trigger: $(date -u +%Y%m%d%H%M%S)" >> .build-trigger && railway up -d
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
2. Run `npm run generate:types` from `web/` (uses `../cms/schema.graphql` — CMS doesn't need to be running)
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

## Triggering a Web Rebuild After Data Changes

Pre-rendered pages (`/work/*`, `/til/*`, etc.) fetch GraphQL data at **build time** (see `web/react-router.config.ts`). After CMS data changes, you must trigger a fresh build.

**`railway up -d` will be SKIPPED if no files in `web/` changed.** To force a rebuild:

```bash
cd web && echo "// build trigger: $(date -u +%Y%m%d%H%M%S)" >> .build-trigger && railway up -d
```

- `railway redeploy` only restarts the container -- it does NOT rebuild pre-rendered pages.
- Always use `railway up` to trigger a fresh build after data changes.

## Important Notes

- Use `~/` prefix for absolute imports in web app
- CMS always uses `DATABASE_URL` (production database)
- GraphQL API requires authentication for mutations (public reads are open)
- Pre-rendered routes defined in `web/react-router.config.ts`
- Avoid `useEffect` in React Router 7 routes - prefer loaders/actions
- Use classic `function` syntax over arrow functions

## Adding or Updating Work Items

Work items are managed in the **CMS** (KeystoneJS), not in code. No manual file edits needed.

Claude can create/update work items via authenticated GraphQL mutations against `https://admin.sethdavis.tech/api/graphql`. Credentials are read from `cms/.env` (`SEED_EMAIL`, `SEED_PASSWORD`). See `.claude/skills/portfolio-work-creator/` for the full workflow and mutation templates.

### Adding or updating an item

1. **Authenticate** via `authenticateUserWithPassword` mutation to get a session cookie
2. **Create/update** via GraphQL mutation with the session cookie
3. **Upload images**: `cd cms && bun run upload-image.ts <slug> <heroImage|thumbnailImage|gallery> <file-or-url> [alt-text]`
4. **Rebuild web**: `cd web && echo "// build trigger: $(date -u +%Y%m%d%H%M%S)" >> .build-trigger && railway up -d`

CommandPalette, sitemap, and routing are all CMS-driven — no manual updates required.

⚠️ **Use `railway up`, not `railway redeploy`** — redeploy only restarts, doesn't rebuild pre-rendered pages.
⚠️ **`railway up` skips if no web/ files changed** — touch a file first (see "Triggering a Web Rebuild" above).
