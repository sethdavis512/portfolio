# Glossary

Domain terms for this repo. Use these names in code, commits and reviews.

**Collection**: a named set of content items (`works`, `tils`, `decks`) behind three operations: `published()` lists published items in display order, `bySlug()` looks one up, and `paths()` lists their URLs. Built with `createCollection` in `app/content/collection.ts`. Prerendering reads the same collections through a second adapter (`app/content/prerender-paths.ts`).

**Slug**: an item's URL segment. Always the MDX filename without `.mdx`, or the deck's folder name. Never written in frontmatter.

**Draft**: an item with `status: "DRAFT"`. Left out of listings, the sitemap and prerendering; in production its URL 404s. In `bun run dev` it renders at its URL so it can be previewed. _Avoid_: unpublished, hidden.

**Moved slug**: an old slug that 301-redirects to a new URL, so shared links keep working (for example a work item that became a TIL). Listed in `MOVED_WORK` in `app/content/works.ts` and `MOVED_TIL` in `app/content/tils.ts`; `bySlug()` returns `{ kind: 'moved' }` for it.
