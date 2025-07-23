# Portfolio Frontend (`web/`)

**Part of the Portfolio Monorepo.**

This package is the frontend React app, living alongside the backend CMS in a unified monorepo. It consumes content from the KeystoneJS CMS in `cms/` via GraphQL and provides the public-facing portfolio website.

This package contains the frontend for the portfolio monorepo, built with React Router v7, TypeScript, and TailwindCSS. It provides a modern, responsive, and SEO-friendly web app that consumes content from the KeystoneJS CMS via GraphQL.

## Features

-   React Router v7 with file-based routing and SSR
-   TypeScript (strict mode)
-   TailwindCSS v4 with typography and animation plugins
-   GraphQL client (`graphql-request`) with codegen for type safety
-   Custom component library using `cva` (Class Variance Authority)
-   PostHog analytics integration
-   Vite build system with TypeScript path mapping
-   Mobile-first, dark mode by default

## Tech Stack

-   [React](https://react.dev/)
-   [React Router v7](https://reactrouter.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)
-   [tailwindcss-animate](https://github.com/joe-bell/tailwindcss-animate)
-   [graphql-request](https://github.com/jasonkuhrt/graphql-request)
-   [@graphql-codegen](https://www.graphql-code-generator.com/)
-   [cva](https://cva.style/)
-   [Vite](https://vitejs.dev/)

## Directory Structure

```text
web/app/
├── components/   # Reusable UI components
├── routes/       # React Router v7 routes
├── utils/        # Utility functions
├── generated/    # Auto-generated GraphQL types
├── queries/      # GraphQL query definitions
└── images/       # Static assets
```

## Setup & Development

1. **Install dependencies**

    ```sh
    npm install
    ```

2. **Configure environment variables**

    - Copy `.env.example` to `.env` if present, or create `.env` with:
        - `VITE_GRAPHQL_ENDPOINT` (URL to CMS GraphQL API)
        - Any analytics or other secrets as needed

3. **Start the frontend dev server**

    ```sh
    npm run dev:web
    # or from project root: npm run dev
    ```

4. **Generate GraphQL types**

    ```sh
    npm run generate:types
    ```

## GraphQL & Codegen

-   GraphQL queries are defined in `app/queries/`
-   Types are generated to `app/generated/` using `@graphql-codegen`
-   Always run `npm run generate:types` after changing queries or the CMS schema
-   Use generated types for all GraphQL data in components and loaders

## Styling & Components

-   TailwindCSS utility classes for all styling
-   Custom component variants with `cva`
-   Responsive design with Tailwind breakpoints
-   Dark mode supported (default)
-   Component composition with strict TypeScript interfaces

## Useful Commands

-   `npm run dev:web` — Start frontend dev server
-   `npm run build:web` — Build frontend for production
-   `npm run generate:types` — Generate GraphQL types

## See Also

-   [Main Monorepo README](../README.md)
-   [KeystoneJS CMS README](../cms/README.md)
-   [React Router Docs](https://reactrouter.com/)

---

MIT © Seth Davis
