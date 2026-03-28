---
name: portfolio-work-creator
description: Guides adding portfolio work items to sethdavis.tech via the CMS. Work items are managed in KeystoneJS admin, not in code. Use when the user wants to add a new work item, project, product, or case study to their portfolio website. Also use when the user mentions "add work", "new portfolio item", "create project page", or wants to showcase something in their portfolio.
---

# Portfolio Work Creator

Work items are managed entirely through the **KeystoneJS CMS**. No route files, no manual code updates - everything is stored in the database and rendered dynamically.

## Architecture Overview

- **Work items live in the CMS database** (Work model in KeystoneJS)
- **Dynamic routing**: Single `work/:slug` route handles all work items
- **CommandPalette**: Fetches work items from GraphQL at root loader
- **Sitemap**: Generated dynamically from CMS data
- **Pre-rendering**: Fetches work slugs from GraphQL at build time
- **Production database is used directly** -- no local/dev database

**No manual file edits needed for:**

- `web/app/routes.ts`
- `web/app/components/CommandPalette.tsx`
- `web/app/routes/sitemap.xml.tsx`
- `web/react-router.config.ts`

## When to Use This Skill

Use when:

- Adding new work items, projects, or products to portfolio
- User says "add to my portfolio", "create a work page", "showcase this project"
- Documenting completed work for the portfolio site
- Creating case studies or project pages

## Quick Start Workflow

### Step 1: Gather Project Information

Research the project or ask the user for:

- **Project title** (required)
- **URL slug** (kebab-case, required)
- **Description** (1-2 sentences for /work page card)
- **Tech stack** (JSON array of logo identifiers)
- **Content sections** (about, learned, impact paragraphs)

### Step 2: Authenticate with Production API

Read credentials from `cms/.env` and authenticate to get a session cookie:

```bash
# Read credentials
SEED_EMAIL=$(grep SEED_EMAIL cms/.env | cut -d'"' -f2)
SEED_PASSWORD=$(grep SEED_PASSWORD cms/.env | cut -d'"' -f2)

# Authenticate and save session cookie
curl -s -c /tmp/cms-cookies.txt https://admin.sethdavis.tech/api/graphql \
  -H 'Content-Type: application/json' \
  -d "{\"query\":\"mutation { authenticateUserWithPassword(email: \\\"$SEED_EMAIL\\\", password: \\\"$SEED_PASSWORD\\\") { ... on UserAuthenticationWithPasswordSuccess { sessionToken item { id } } ... on UserAuthenticationWithPasswordFailure { message } } }\"}"
```

Verify the response contains `sessionToken`. If it returns a failure message, check the credentials.

### Step 3: Check for Existing Item

Query to see if the slug already exists (to decide create vs update). Reads are public, no cookie needed:

```bash
curl -s https://admin.sethdavis.tech/api/graphql \
  -H 'Content-Type: application/json' \
  -d '{"query":"{ works(where: { slug: { equals: \"THE-SLUG\" } }) { id title slug } }"}'
```

### Step 4: Create or Update via GraphQL Mutation

**Create a new work item** (requires session cookie from Step 2):

```bash
curl -s -b /tmp/cms-cookies.txt https://admin.sethdavis.tech/api/graphql \
  -H 'Content-Type: application/json' \
  -d '{
    "query": "mutation($data: WorkCreateInput!) { createWork(data: $data) { id title slug } }",
    "variables": {
      "data": {
        "title": "Project Title",
        "slug": "project-slug",
        "status": "PUBLISHED",
        "sortOrder": 13,
        "description": "Card description for /work page",
        "cta": "View project",
        "about": "Project overview paragraph...",
        "learned": "What you learned paragraph...",
        "impact": "Why it matters paragraph...",
        "techStack": ["typescript", "react"],
        "sourceUrl": "https://github.com/...",
        "demoUrl": "https://...",
        "demoUrlText": "View demo",
        "sidebarType": "none",
        "features": []
      }
    }
  }'
```

**Update an existing work item:**

```bash
curl -s -b /tmp/cms-cookies.txt https://admin.sethdavis.tech/api/graphql \
  -H 'Content-Type: application/json' \
  -d '{
    "query": "mutation($where: WorkWhereUniqueInput!, $data: WorkUpdateInput!) { updateWork(where: $where, data: $data) { id title slug } }",
    "variables": {
      "where": { "slug": "project-slug" },
      "data": {
        "description": "Updated description"
      }
    }
  }'
```

**Important notes:**
- All mutations require the session cookie (`-b /tmp/cms-cookies.txt`)
- `techStack` and `features` are JSON fields -- pass as arrays
- `sidebarType` valid values: `none`, `purchase`, `interest-form`
- `status` valid values: `DRAFT`, `PUBLISHED`, `ARCHIVED`
- Long text fields (about, learned, impact) must be escaped for JSON

### Step 5: Verify Creation

Query back the item to confirm it was created correctly:

```bash
curl -s https://admin.sethdavis.tech/api/graphql \
  -H 'Content-Type: application/json' \
  -d '{"query":"{ works(where: { slug: { equals: \"project-slug\" } }) { id title slug status sortOrder description about learned impact techStack sourceUrl demoUrl sidebarType } }"}' | python3 -m json.tool
```

### Step 6: Upload Images

Upload hero and thumbnail images via the upload script:

```bash
cd cms && bun run upload-image.ts <slug> heroImage <file-or-url>
cd cms && bun run upload-image.ts <slug> thumbnailImage <file-or-url>
```

Accepts local file paths or URLs. Uploads to Cloudinary and updates the database record directly.

| Field            | Purpose                                     |
| ---------------- | ------------------------------------------- |
| `heroImage`      | Large hero image at top of work detail page |
| `thumbnailImage` | Card thumbnail on /work page                |

**For gallery images**: Use the CMS admin UI at `admin.sethdavis.tech/admin`.

### Step 7: Rebuild Web

After data and images are in production, rebuild the web frontend:

```bash
cd web && echo "// build trigger: $(date -u +%Y%m%d%H%M%S)" >> .build-trigger && railway up -d
```

- `railway redeploy` only restarts the container -- it does NOT rebuild.
- Pre-rendered pages fetch data at build time, so `railway up` is required.

### Step 8: Clean Up

```bash
rm -f /tmp/cms-cookies.txt
```

## Content Writing Guidelines

Follow the three-part structure:

1. **About (Project Overview)**: What it is, what it does, how it works (3-5 sentences)
2. **Learned (Knowledge Gained)**: Technical learnings and insights (4-6 sentences)
3. **Impact (Portfolio Value)**: Why it matters, what it showcases (4-5 sentences)

See [content-guide.md](references/content-guide.md) for detailed writing patterns and examples.

## Available Tech Stack Logos

JSON array format: `["typescript", "react", "tailwind"]`

All available logos:
`baseui`, `better-auth`, `bun`, `cloudinary`, `css`, `daisy`, `docusaurus`, `electron`, `github`, `javascript`, `keystone`, `mcp`, `obsidian`, `postgres`, `polar`, `prisma`, `railway`, `react`, `react-router`, `remotion`, `storybook`, `stripe`, `tailwind`, `trigger`, `turborepo`, `typescript`, `vuejs`, `wordpress`

## Work Field Reference

| Field                | Type       | Valid Values / Format                     | Required |
| -------------------- | ---------- | ----------------------------------------- | -------- |
| `title`              | String     | Display name                              | Yes      |
| `slug`               | String     | kebab-case, unique                        | Yes      |
| `status`             | String     | `DRAFT`, `PUBLISHED`, `ARCHIVED`          | Yes      |
| `sortOrder`          | Int        | Lower = first on /work page               | No       |
| `description`        | String     | Card description for /work page           | Yes      |
| `cta`                | String     | Button text (default: "See more")         | No       |
| `about`              | String     | Project overview paragraph                | No       |
| `learned`            | String     | What you learned paragraph                | No       |
| `impact`             | String     | Why it matters paragraph                  | No       |
| `techStack`          | JSON       | `["typescript", "react"]`                 | No       |
| `sourceUrl`          | String     | GitHub/source link                        | No       |
| `demoUrl`            | String     | Live demo link                            | No       |
| `demoUrlText`        | String     | Custom demo button text                   | No       |
| `purchaseUrl`        | String     | Purchase/sale link                        | No       |
| `purchaseButtonText` | String     | Purchase button label                     | No       |
| `sidebarTitle`       | String     | Product sidebar heading                   | No       |
| `sidebarType`        | String     | `none`, `purchase`, `interest-form`       | No       |
| `features`           | JSON       | `["Feature 1", "Feature 2"]`             | No       |

## Validation Checklist

After adding a work item:

- [ ] Status set to PUBLISHED
- [ ] Slug is valid kebab-case
- [ ] Description filled in for /work card
- [ ] Hero image uploaded (appears on detail page)
- [ ] Thumbnail image uploaded (appears on /work cards)
- [ ] Content sections filled (about, learned, impact)
- [ ] Tech stack JSON is valid array
- [ ] Verified via GraphQL query
- [ ] Ran `railway up -d` from web directory to rebuild

## Common Issues

**Work item doesn't appear on production after creation**:

- Did you run `railway up -d` from the `web/` directory?
- `railway redeploy` does NOT rebuild -- use `railway up`

**Mutation returns access denied**:

- Re-authenticate: session cookies expire after 30 days
- Verify credentials in `cms/.env` match the production user

**Images not showing**:

- Check that images were uploaded in CMS admin (not just referenced)
- Rebuild with `railway up -d`

**Work item not in CommandPalette**:

- CommandPalette fetches from CMS dynamically -- no manual update needed
- Ensure status is PUBLISHED
- Rebuild with `railway up -d`

**Sort order wrong on /work page**:

- Adjust `sortOrder` field (lower numbers appear first)
- Rebuild after updating
