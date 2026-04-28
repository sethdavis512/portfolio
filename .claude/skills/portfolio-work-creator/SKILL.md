---
name: portfolio-work-creator
description: Adds a portfolio work item to sethdavis.tech by creating a local MDX file under app/content/work/. Use when the user wants to add a project, product, case study, or work item to their portfolio (phrases like "add to my portfolio", "showcase this project", "create a work page", "new portfolio item"). Do NOT use for TIL entries (app/content/til/) or blog posts (app/content/post/) — those are separate content types.
---

# Portfolio Work Creator

Work items live as **local MDX files** in `app/content/work/`. The portfolio loader (`app/content/work.ts`) globs them at build time, so creating a new file is the entire workflow. There is no CMS, no database, no GraphQL.

**Do not edit:** `app/routes.ts`, `app/components/CommandPalette.tsx`, `app/routes/sitemap.xml.tsx`, `react-router.config.ts`. Routing, command palette entries, sitemap, and prerendering all derive from the MDX glob automatically.

## Workflow

1. **Gather** the project's title, one-sentence description, source/demo URLs, and tech stack.
2. **Pick a slug** in kebab-case. It becomes both the filename (`<slug>.mdx`) and the URL (`/work/<slug>`).
3. **Pick a sortOrder.** Lower numbers appear first on `/work`. Check existing values with `grep -h "sortOrder:" app/content/work/*.mdx | sort -un` and slot the new item where it belongs in the lineup. Recent flagship work usually goes 0–3.
4. **Write `app/content/work/<slug>.mdx`** using the template below.
5. **Decide on images.** Use a Cloudinary placeholder (see "Images") if a project-specific photo is not ready yet.
6. **Decide on body content.** If `hasContent: true`, add an MDX body below the frontmatter. Otherwise leave the file frontmatter-only.
7. **Verify** with `bun run typecheck`. The dev server (`bun run dev`) will surface any MDX parse errors.

That's it. Commit the file like any other code change; the normal deploy flow ships it.

## Frontmatter template

```mdx
---
title: "Project Name"
slug: "project-slug"
status: "PUBLISHED"
description: "1-2 sentence card description shown on /work."
cta: "See more"
sortOrder: 1
heroImage: "https://res.cloudinary.com/setholito/image/upload/c_scale,f_auto,q_90,w_1920/v1/portfolio/placeholder-browser.png"
thumbnailImage: "https://res.cloudinary.com/setholito/image/upload/c_scale,f_auto,q_90,w_1280/v1/portfolio/placeholder-browser.png"
about: "Project overview paragraph (3-5 sentences)."
learned: "Knowledge gained paragraph (4-6 sentences)."
impact: "Why it matters paragraph (4-5 sentences)."
techStack: ["typescript", "react"]
sourceUrl: "https://github.com/owner/repo"
demoUrl: ""
demoUrlText: ""
purchaseUrl: ""
purchaseButtonText: ""
sidebarTitle: ""
features: []
sidebarType: "none"
tags: []
galleryImages: []
hasContent: false
createdAt: "2026-04-27T00:00:00.000Z"
updatedAt: "2026-04-27T00:00:00.000Z"
---
```

## Frontmatter field reference

| Field | Type | Notes | Required |
|-------|------|-------|----------|
| `title` | string | Display name | Yes |
| `slug` | string | kebab-case, must match filename | Yes |
| `status` | string | `PUBLISHED`, `DRAFT`, or `ARCHIVED`. Only `PUBLISHED` shows on `/work` | Yes |
| `description` | string | Card text on `/work` listing | Yes |
| `cta` | string | Card button label (default: `See more`) | No |
| `sortOrder` | number | Lower = earlier on `/work` | Yes |
| `heroImage` | URL | Top of detail page (1920px Cloudinary URL) | Yes |
| `thumbnailImage` | URL | Card on `/work` (1280px Cloudinary URL) | Yes |
| `about` | string | Project overview, 3-5 sentences | Yes |
| `learned` | string | Knowledge gained, 4-6 sentences | Yes |
| `impact` | string | Why it matters, 4-5 sentences | Yes |
| `techStack` | string[] | Tech identifiers — see list below | Yes |
| `sourceUrl` | URL | GitHub or source link, empty string if none | Yes (use `""` if none) |
| `demoUrl` | URL | Live demo, empty string if none | Yes (use `""` if none) |
| `demoUrlText` | string | Custom demo button label | No |
| `purchaseUrl` | URL | Purchase link | No |
| `purchaseButtonText` | string | Purchase button label | No |
| `sidebarTitle` | string | Heading for product sidebar | No |
| `sidebarType` | string | `none`, `purchase`, or `interest-form` | Yes |
| `features` | string[] | Bullet list shown in `purchase` sidebar | No |
| `tags` | string[] | Free-form labels | No |
| `galleryImages` | object[] | See "Gallery images" below | No |
| `hasContent` | boolean | `true` if the file has an MDX body | Yes |
| `createdAt` | ISO string | First publish date | Yes |
| `updatedAt` | ISO string | Last edit date | Yes |

## Tech stack identifiers

`techStack` accepts only these strings (mapped in `app/components/TechStackLogos.tsx`):

`anthropic`, `baseui`, `better-auth`, `bun`, `cloudinary`, `css`, `daisy`, `docusaurus`, `electron`, `github`, `javascript`, `keystone`, `mcp`, `obsidian`, `polar`, `postgres`, `prisma`, `railway`, `react`, `react-router`, `remotion`, `storybook`, `stripe`, `tailwind`, `trigger`, `turborepo`, `typescript`, `voltagent`, `vuejs`, `wordpress`

Unknown identifiers are silently dropped (they render as `null`). If a tech the project uses is missing from this list, add a logo component to `app/components/logos/` and wire it into `TechStackLogos.tsx` (see `VoltAgentLogo.tsx` or `AnthropicLogo.tsx` for the minimal pattern). Don't invent new identifiers without adding the logo.

## Images

### Placeholders

When a project photo is not ready, use one of these Cloudinary placeholders:

| Project type | Hero (`w_1920`) / Thumb (`w_1280`) URL stem |
|--------------|---------------------------------------------|
| CLI/terminal | `.../portfolio/placeholder-terminal.png` |
| Browser/web | `.../portfolio/placeholder-browser.png` |

Full URL format: `https://res.cloudinary.com/setholito/image/upload/c_scale,f_auto,q_90,w_<WIDTH>/v1/portfolio/placeholder-<TYPE>.png`. Use `w_1920` for `heroImage`, `w_1280` for `thumbnailImage`.

### Real images

Upload via the `cloudinary-upload` skill or `cloudinary` CLI; the result is a `https://res.cloudinary.com/setholito/...` URL. Always include the `c_scale,f_auto,q_90,w_<WIDTH>` transform segment so Cloudinary serves the right size.

### Gallery images

Optional. Each entry has `src`, `alt`, and `sortOrder`:

```yaml
galleryImages:
  - src: "https://res.cloudinary.com/setholito/.../w_1280/v1/portfolio/screenshot-1.png"
    alt: "Home page"
    sortOrder: 0
  - src: "https://res.cloudinary.com/setholito/.../w_1280/v1/portfolio/screenshot-2.png"
    alt: "Mobile view"
    sortOrder: 1
```

Use 1280px width for gallery images.

## MDX body (when `hasContent: true`)

Most work items are frontmatter-only and rely on `about` / `learned` / `impact` for content. Set `hasContent: true` and add a body **only** when the project warrants long-form prose, code samples, or rich explanation.

Body rules:
- Plain markdown headings (`##`), prose, lists, and fenced code blocks all work.
- The body renders inside the wrapper layout — do not author full-height JSX layouts (those are for slides, not work items).
- Use relative imports (`~/` aliases do not resolve inside MDX at build time).
- Escape literal `<` outside code blocks as `&lt;`.

See `app/content/work/buncli.mdx` for a reference body.

## Sidebar variants

`sidebarType` controls the right-rail block on the detail page:

- `none` — no sidebar (most personal projects)
- `purchase` — shows `sidebarTitle`, `features`, and a `purchaseButtonText` button linking to `purchaseUrl`
- `interest-form` — shows `sidebarTitle` and an Airtable-backed interest form (used for products like Iridium)

## Content writing

Read [references/content-guide.md](references/content-guide.md) before writing the `about`, `learned`, and `impact` paragraphs — it covers the three-part structure, length targets, and voice patterns. Skip this only when porting existing copy verbatim.

## Validation checklist

Before considering the task done:

- [ ] File is at `app/content/work/<slug>.mdx` and the slug matches `slug:` in frontmatter
- [ ] `status: "PUBLISHED"`
- [ ] `sortOrder` chosen against existing values (no unintended duplicates next to each other unless intentional)
- [ ] `description`, `about`, `learned`, `impact` all filled in
- [ ] `techStack` uses only known identifiers
- [ ] `heroImage` and `thumbnailImage` set (placeholder or real)
- [ ] `sourceUrl` and `demoUrl` are valid URLs or empty strings (not omitted)
- [ ] `hasContent` matches whether a body exists
- [ ] `createdAt` and `updatedAt` are ISO timestamps
- [ ] `bun run typecheck` passes

## Common issues

**MDX parse error on dev server.** Usually an unescaped `<` in prose, a malformed YAML value, or a missing closing quote in a long paragraph. Check the file with `bun run dev` and read the error.

**Tech stack icon missing on detail page.** The identifier isn't in `TechStackLogos.tsx`'s `LogoName` union. Add a logo component (mirror `VoltAgentLogo.tsx`), import it, extend the union, and add a config entry — all in one file.

**Item doesn't appear on /work.** Check `status: "PUBLISHED"` (not `"DRAFT"`). Restart the dev server if the file was just created — the glob is evaluated at startup.

**CommandPalette doesn't show the new item.** It's wired to the work loader, so a typecheck-clean MDX file with `status: "PUBLISHED"` will appear after dev server restart or rebuild.
