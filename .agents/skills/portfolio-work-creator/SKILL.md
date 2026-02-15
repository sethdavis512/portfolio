---
name: portfolio-work-creator
description: Automates adding portfolio work items to sethdavis.tech with minimal guidance. Creates route files, updates navigation, adds to command palette, configures sitemap, and sets up prerendering. Use when the user wants to add a new work item, project, product, or case study to their portfolio website. Also use when the user mentions "add work", "new portfolio item", "create project page", or wants to showcase something in their portfolio.
---

# Portfolio Work Creator

Automates the entire workflow for adding work items to the portfolio website with minimal manual input required.

## What This Skill Does

Handles the complete process of adding a portfolio work item:

1. **File Updates**: Modifies 4-5 configuration files automatically
2. **Route Creation**: Generates route file from templates
3. **Content Guidance**: Provides structured content patterns
4. **Image Planning**: Lists required images and specifications
5. **Validation**: Ensures all required updates are complete

## When to Use This Skill

Use when:

- Adding new work items, projects, or products to portfolio
- User says "add to my portfolio", "create a work page", "showcase this project"
- Documenting completed work for the portfolio site
- Creating case studies or project pages

## Quick Start Workflow

### Step 1: Gather Project Information

Ask the user for:

- **Project name/title** (required)
- **URL slug** (suggest kebab-case version of title)
- **Brief description** (1-2 sentences for what it is)
- **Tech stack** (list of technologies used)
- **Layout preference** (simple/custom, default to simple)

Example:

```
I'll help you add a work item. I need a few details:
- Project title: [e.g., "Video Machine"]
- URL slug: [e.g., "video-machine"]
- Brief description: [what the project is]
- Tech stack: [main technologies]
```

### Step 2: Run Automation Script

Execute the script to update all configuration files:

```bash
python scripts/add_work_item.py <slug> --title "Project Title" --description "Brief description"
```

The script updates:

- `web/app/routes.ts` - Route definition
- `web/app/components/CommandPalette.tsx` - Command palette link (critical!)
- `web/app/routes/sitemap.xml.tsx` - SEO sitemap entry
- `web/app/routes/work.tsx` - Adds to workItems array on /work page
- `web/react-router.config.ts` - Prerendering configuration

**Script options**:

- `--title "Title"` - Set custom title (defaults to slug in title case)
- `--description "Description"` - Set description for /work page (defaults to generic text)
- `--no-prerender` - Skip adding to prerender config
- `--no-work-page` - Skip adding to work.tsx workItems array

### Step 3: Create Route File

Use route templates from `assets/` directory:

**Simple layout** (recommended for most projects):

```bash
cp assets/route-template-simple.tsx web/app/routes/<slug>.tsx
```

**Custom layout** (for complex pages with forms/CTAs):

```bash
cp assets/route-template-custom.tsx web/app/routes/<slug>.tsx
```

Replace template placeholders:

- `{{PROJECT_TITLE}}` - Project name
- `{{SLUG}}` - URL slug
- `{{COMPONENT_NAME}}` - PascalCase component name
- `{{META_DESCRIPTION}}` - SEO description (150-160 chars)
- `{{TECH_LOGOS}}` - Comma-separated logo names in quotes
- `{{ABOUT_PARAGRAPH}}` - Project overview content
- `{{LEARNED_PARAGRAPH}}` - Knowledge gained content
- `{{VALUE_PARAGRAPH}}` - Portfolio value content

See [content-guide.md](references/content-guide.md) for writing the three content paragraphs.

### Step 4: Content Writing

Follow the three-part structure. See [content-guide.md](references/content-guide.md) for:

- Detailed content patterns
- Example paragraphs
- Writing checklist
- Voice and tone guidelines

**Quick summary**:

1. **Project Overview**: What it is, what it does, how it works (3-5 sentences)
2. **Knowledge Gained**: Technical learnings and insights (4-6 sentences)
3. **Portfolio Value**: Why it matters, what it showcases (4-5 sentences)

### Step 5: Image Requirements

List required images for the user:

**Required**:

- `web/public/<slug>-hero.webp` - Hero image (use `responsive` prop)
- `web/public/<slug>-thumbnail.webp` - Thumbnail for /work page

**Optional**:

- `web/public/<slug>-<descriptor>.webp` - Gallery screenshots

**Critical**: All images must follow image optimization guidelines. See [IMAGE_OPTIMIZATION.md](../../../docs/IMAGE_OPTIMIZATION.md).

The `<HeroImage>` component MUST use the `responsive` prop for proper optimization.

### Step 6: Optional Enhancements

**Add image gallery**:
See Pattern 3 in [layout-patterns.md](references/layout-patterns.md).

**Customize work.tsx entry**:
If the script added your work item to work.tsx, you may want to customize:

- The `cta` text (default: "View project")
- The `description` (uses --description flag value)
- The `imageAlt` text (default: same as title)

**Reorder work items**:
Edit the workItems array order in `web/app/routes/work.tsx` to change display order.

## Detailed Patterns

For layout variations, component usage, and advanced patterns, see:

- [layout-patterns.md](references/layout-patterns.md) - Route file patterns and components
- [content-guide.md](references/content-guide.md) - Content writing guidelines

## Common Issues

**Script fails to find portfolio root**:

- Ensure script runs from within the portfolio repository
- The script looks for `web/app/routes.ts` to locate the root

**Route already exists**:

- Script skips existing routes in each file
- Check if the work item was partially added previously

**Images not displaying**:

- Verify images are in `web/public/` directory
- Check filename matches slug exactly
- Ensure `responsive` prop is used on `<HeroImage>`

## Validation Checklist

After completing all steps, verify:

- [ ] Route definition added to `web/app/routes.ts`
- [ ] Link added to `CommandPalette.tsx` workLinks (CRITICAL!)
- [ ] Entry added to `sitemap.xml.tsx`
- [ ] Work item added to `work.tsx` workItems array
- [ ] Route added to prerender config (if needed)
- [ ] Route file created in `web/app/routes/<slug>.tsx`
- [ ] Hero image exists: `web/public/<slug>-hero.webp`
- [ ] Thumbnail exists: `web/public/<slug>-thumbnail.webp`
- [ ] All template placeholders replaced
- [ ] Three content paragraphs completed
- [ ] Tech stack logos specified
- [ ] Meta description under 160 characters

## Tips for Efficiency

1. **Run the script first** - Updates all config files at once
2. **Copy template, then customize** - Don't write from scratch
3. **Reference existing work pages** - See `video-machine.tsx`, `iridium.tsx`, etc.
4. **Use simple layout by default** - It covers 80% of use cases
5. **Write content in AI editor first** - Then paste into template
6. **Batch image creation** - Prepare all images before starting

## Available Tech Stack Logos

Common logos (check component for complete list):
`'typescript'`, `'javascript'`, `'react'`, `'react-router'`, `'tailwind'`, `'daisy'`, `'postgres'`, `'prisma'`, `'better-auth'`, `'polar'`, `'railway'`, `'cloudinary'`, `'trigger'`, `'remotion'`

Format in template: `'typescript', 'react', 'tailwind'`
