# Portfolio Monorepo

A modern, full-stack portfolio website built with a monorepo architecture. Features a React/TypeScript frontend with SSR and a KeystoneJS 6 headless CMS backend, all managed in a single repository.

## Architecture

-   **Frontend**: `web/` — React Router v7, TypeScript, TailwindCSS, SSR, GraphQL client
-   **Backend**: `cms/` — KeystoneJS 6, PostgreSQL, Prisma ORM, GraphQL API
-   **Monorepo**: Unified development, shared tooling, and consistent TypeScript across both apps

---

## Frontend (`web/`)

-   **Framework**: React Router v7 (file-based routing, SSR, pre-rendering)
-   **Language**: TypeScript (strict mode)
-   **Styling**: TailwindCSS v4, `@tailwindcss/typography`, `tailwindcss-animate`
-   **GraphQL**: `graphql-request` client, codegen via `@graphql-codegen`
-   **UI**: Custom component library using `cva` (Class Variance Authority)
-   **Analytics**: PostHog integration
-   **Build**: Vite, TypeScript path mapping

### Directory Structure (Frontend)

```text
web/app/
├── components/   # Reusable UI components
├── routes/       # React Router v7 routes
├── utils/        # Utility functions
├── generated/    # Auto-generated GraphQL types
├── queries/      # GraphQL query definitions
└── images/       # Static assets
```

### Development (Frontend)

-   `npm run dev:web` — Start frontend dev server
-   `npm run generate:types` — Generate GraphQL types from CMS schema
-   Server-side data fetching in route loaders
-   Use absolute imports with `~/` prefix

---

## Backend (`cms/`)

-   **Framework**: KeystoneJS 6 (headless CMS)
-   **Database**: PostgreSQL (Prisma ORM)
-   **Auth**: KeystoneJS built-in, bcrypt password hashing
-   **API**: Auto-generated GraphQL at `/api/graphql`
-   **Language**: TypeScript

### Directory Structure (Backend)

```text
cms/
├── keystone.ts      # Main Keystone config
├── schema.ts        # Database schema
├── auth.ts          # Auth config
├── seed.ts          # DB seeding
├── migrations/      # Prisma migrations
```

### Development (Backend)

-   `npm run dev:cms` — Start CMS dev server (admin UI at `/admin`)
-   GraphQL playground at `/api/graphql`
-   Use Prisma migrations for schema changes
-   `npm run generate:types` after schema changes

---

## Getting Started

1. **Install dependencies**

    ```sh
    npm install
    ```

2. **Set up environment variables**

    - Copy `.env.example` to `.env` in both `web/` and `cms/` as needed
    - Fill in database URLs, secrets, etc.

3. **Run development servers**

    ```sh
    npm run dev
    # or run frontend/cms separately:
    npm run dev:web
    npm run dev:cms
    ```

4. **Generate GraphQL types**

    ```sh
    npm run generate:types
    ```

5. **Apply database migrations**

    ```sh
    cd cms && npx prisma migrate deploy
    ```

6. **Seed the database**

    ```sh
    cd cms && npm run seed
    ```

---

## Deployment & Environment

-   Production CMS endpoint: `https://admin.sethdavis.tech/api/graphql`
-   Environment-specific database URLs
-   Session management with secure cookies
-   CORS configured for production domains

---

## Security & Best Practices

-   All secrets in environment variables
-   Passwords hashed with bcrypt
-   Input validation on client and server
-   TypeScript for compile-time safety
-   CORS and session security

---

## Contribution

PRs and issues welcome! Please follow the established code style and patterns:

-   Strict TypeScript
-   Functional, compositional React
-   TailwindCSS utilities
-   GraphQL codegen for types
-   Server-side data fetching in loaders

---

## License

MIT © Seth Davis

---

## Credits

-   [KeystoneJS](https://keystonejs.io/)
-   [React Router](https://reactrouter.com/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [Prisma](https://www.prisma.io/)
-   [Vite](https://vitejs.dev/)
-   [PostHog](https://posthog.com/)

---

## See Also

-   [Frontend README (`web/`)](web/README.md)
-   [CMS README (`cms/`)](cms/README.md)
