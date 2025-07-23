# KeystoneJS CMS (`cms/`)

**Part of the Portfolio Monorepo.**

This package is the backend CMS, living alongside the frontend React app in a unified monorepo. It serves content and authentication to the frontend in `web/` via a GraphQL API and provides the admin interface for content management.

## Features

-   KeystoneJS 6 headless CMS
-   PostgreSQL database (via Prisma ORM)
-   Auto-generated GraphQL API at `/api/graphql`
-   Admin UI at `/admin`
-   Built-in authentication (bcrypt password hashing)
-   Rich content fields, relationships, and status workflows
-   TypeScript throughout

## Tech Stack

-   [KeystoneJS 6](https://keystonejs.io/)
-   [Prisma ORM](https://www.prisma.io/)
-   [PostgreSQL](https://www.postgresql.org/)
-   [TypeScript](https://www.typescriptlang.org/)

## Directory Structure

```text
cms/
├── keystone.ts      # Main Keystone config
├── schema.ts        # Database schema (lists, fields, relationships)
├── auth.ts          # Auth config
├── seed.ts          # DB seeding script
├── schema.prisma    # Prisma DB schema
├── schema.graphql   # GraphQL schema (generated)
├── migrations/      # Prisma migrations
└── ...
```

## Setup & Development

1. **Install dependencies**

    ```sh
    npm install
    ```

2. **Configure environment variables**

    - Copy `.env.example` to `.env` if present, or create `.env` with:
        - `DATABASE_URL` (PostgreSQL connection string)
        - `SESSION_SECRET` (random string for session encryption)

3. **Run database migrations**

    ```sh
    npx prisma migrate deploy
    ```

4. **Seed the database (optional)**

    ```sh
    npm run seed
    ```

5. **Start the CMS server**

    ```sh
    npm run dev:cms
    # or from project root: npm run dev
    ```

6. **Access the Admin UI**

    - Visit [http://localhost:3000/admin](http://localhost:3000/admin)

7. **GraphQL Playground**

    - Visit [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql)

## Database & Migrations

-   Uses Prisma for schema and migrations (`schema.prisma`, `migrations/`)
-   Run migrations after schema changes:

    ```sh
    npx prisma migrate dev
    ```

## Authentication & Security

-   Auth via KeystoneJS built-in system (see `auth.ts`)
-   Passwords hashed with bcrypt
-   Session management with secure cookies
-   Environment variables for secrets

## Useful Commands

-   `npm run dev:cms` — Start CMS dev server
-   `npm run seed` — Seed the database
-   `npx prisma migrate dev` — Run migrations in dev
-   `npx prisma studio` — Open Prisma Studio (DB browser)

## See Also

-   [Main Monorepo README](../README.md)
-   [KeystoneJS Docs](https://keystonejs.io/docs)

---

MIT © Seth Davis
