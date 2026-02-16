# GitHub Copilot Custom Instructions

## Project Overview

This is a full-stack portfolio website built with a modern monorepo architecture featuring:

- **Frontend**: React Router v7 application with TypeScript, TailwindCSS, and server-side rendering
- **Backend**: KeystoneJS 6 headless CMS with GraphQL API and PostgreSQL database
- **Architecture**: Monorepo with separate `web/` and `cms/` packages

## Technology Stack

### Frontend (`web/`)

- **Framework**: React Router v7 with SSR and pre-rendering
- **Language**: TypeScript with strict type checking
- **Styling**: TailwindCSS v4 with `@tailwindcss/typography` and `tailwindcss-animate`
- **GraphQL**: `graphql-request` client with code generation via `@graphql-codegen`
- **UI Components**: Custom component library using `cva` (Class Variance Authority)
- **Analytics**: PostHog integration
- **Build**: Vite with TypeScript path mapping

### Backend (`cms/`)

- **Framework**: KeystoneJS 6 headless CMS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Built-in KeystoneJS auth with bcrypt password hashing
- **API**: Auto-generated GraphQL API at `/api/graphql`
- **Language**: TypeScript

## Code Style and Patterns

### General Guidelines

- Use TypeScript strictly with proper type definitions
- Follow functional programming patterns where possible
- Prefer composition over inheritance
- Use semantic HTML and accessible patterns
- Write clean, self-documenting code with meaningful variable names

### React/Frontend Patterns

- Use React Router v7 file-based routing in `app/routes/`
- Server-side data fetching with `loader` functions
- Component composition with TypeScript props interfaces
- Custom hooks for shared logic
- Responsive design with mobile-first approach
- Dark mode support (default theme)

### Component Structure

```typescript
// Component props interface
interface ComponentProps {
  // Define props with proper types
}

// Default export functional component
export default function Component({ prop }: ComponentProps) {
  // Component logic
  return (
    // JSX with semantic HTML
  );
}
```

### GraphQL Patterns

- Use generated types from `~/generated/graphql`
- Server-side GraphQL queries in route loaders
- Proper error handling for GraphQL requests
- Fragment-based query organization

### Styling Guidelines

- Use TailwindCSS utility classes
- Custom component variants with `cva`
- Responsive design with Tailwind breakpoints
- Consistent spacing using Tailwind scale
- Component-based design system

## File Organization

### Web App Structure

```
web/app/
├── components/          # Reusable UI components
├── routes/             # React Router v7 routes
├── utils/              # Utility functions
├── generated/          # Auto-generated GraphQL types
├── queries/            # GraphQL query definitions
└── images/             # Static assets
```

### CMS Structure

```
cms/
├── keystone.ts         # Main Keystone configuration
├── schema.ts           # Database schema definitions
├── auth.ts             # Authentication configuration
├── seed.ts             # Database seeding script
└── migrations/         # Prisma database migrations
```

## Development Workflow

### Common Commands

- `npm run dev` - Start both CMS and web development servers
- `npm run dev:web` - Start web development server only
- `npm run dev:cms` - Start CMS development server only
- `npm run generate:types` - Generate GraphQL types from schema

### GraphQL Development

- CMS runs on port 3000 with admin UI at `/admin`
- GraphQL playground available at `/api/graphql`
- Auto-generate TypeScript types after schema changes
- Use proper GraphQL query fragments for reusability

### Database Management

- Use Prisma migrations for schema changes
- Seed script available for initial data setup
- PostgreSQL in production, supports development database

### Database Sync

**Production is the source of truth.** Two sync scripts manage bidirectional data flow:

```bash
# Pull from production to local (recommended before editing)
cd cms && npx tsx sync-from-prod.ts --clean

# Push from local to production (new content only)
cd cms && npx tsx sync-to-prod.ts --new-only --dry-run  # preview first
cd cms && npx tsx sync-to-prod.ts --new-only            # then push
```

**Flags**:

- `--tables=work,post,...` - Sync specific tables only
- `--dry-run` - Preview without making changes
- `--clean` - Delete local data before pulling (sync-from-prod)
- `--new-only` - Only push records that don't exist in prod (sync-to-prod)
- `--force` - Override conflict detection (dangerous, sync-to-prod)

**Conflict handling**: If the same record is edited in both environments, production wins. The local change is skipped with a warning unless `--force` is used.

**After syncing data, rebuild the web app**:

```bash
cd cms && npx tsx sync-images-to-prod.ts  # sync Cloudinary image data
cd web && railway up -d                    # trigger fresh build
```

**Critical**: `railway redeploy` only restarts the container — it does NOT rebuild. Pre-rendered pages (`/work`, `/work/*`) fetch GraphQL data at build time, so changes won't appear until you run `railway up`.

## Content Management

### Schema Design

- **Users**: Authentication and author information
- **Posts**: Blog content with rich text, status, and relationships
- **Tags**: Categorical organization for posts
- Relationships: Users → Posts (one-to-many), Posts ↔ Tags (many-to-many)

### Content Fields

- Rich text content using KeystoneJS document fields
- Status-based publishing workflow (DRAFT/PUBLISHED/ARCHIVED)
- SEO-friendly slugs with uniqueness constraints
- Automatic timestamps for creation and updates

## Performance Considerations

- Server-side rendering for better SEO and performance
- Static pre-rendering for key pages
- Optimized GraphQL queries to avoid N+1 problems
- **Image optimization**: All images >150KB must use `HeroImage` or `ResponsiveImage` components with `responsive` prop. See [docs/IMAGE_OPTIMIZATION.md](../docs/IMAGE_OPTIMIZATION.md) for guidelines.
- Minimal client-side JavaScript bundle

## Security and Best Practices

- Environment variables for sensitive configuration
- CORS configuration for cross-origin requests
- Password hashing with bcrypt
- Input validation on both client and server
- TypeScript for compile-time error prevention

## Deployment and Environment

- Production CMS endpoint: `https://admin.sethdavis.tech/api/graphql`
- Environment-specific database URLs
- Session management with secure cookies
- CORS configuration for production domains

## When Working on This Project

1. **GraphQL Changes**: Always regenerate types after schema modifications
2. **Styling**: Use existing component patterns and TailwindCSS utilities
3. **Routing**: Follow React Router v7 file-based routing conventions
4. **Data Fetching**: Use server-side loaders for initial data
5. **Type Safety**: Maintain strict TypeScript throughout the codebase
6. **Components**: Follow established component patterns and prop interfaces
7. **Performance**: Consider SSR implications for new features
8. **Accessibility**: Ensure semantic HTML and proper ARIA attributes
9. **Images**: Always use `responsive` prop on HeroImage/ResponsiveImage components. Never use raw `<img>` tags for images >150KB. Verify optimized versions exist before deploying.
10. **New Work/Product Pages**: When adding new work items or products, update ALL of these:
    - `web/app/routes.ts` (route definition)
    - `web/app/components/CommandPalette.tsx` (add to `workLinks` - this is mandatory!)
    - `web/app/routes/sitemap.xml.tsx` (SEO sitemap)
    - `web/react-router.config.ts` (pre-rendering if needed)

## Common Patterns to Follow

- Use absolute imports with `~/` prefix for app modules
- Server-side data fetching in route loaders
- Component composition with proper TypeScript interfaces
- Consistent error handling patterns
- Responsive design with mobile-first approach
- SEO optimization with proper meta tags and structured data

## Code Generation

The project uses GraphQL Code Generator to create TypeScript types from the CMS schema. Always run type generation after schema changes and use the generated types for type safety in frontend code.
