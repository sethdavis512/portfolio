/**
 * Migration script: Extract content from KeystoneJS CMS (GraphQL) and write
 * to local MDX + TypeScript data files.
 *
 * Usage: cd portfolio && bun run scripts/migrate-from-cms.ts
 *
 * Requires the CMS GraphQL endpoint to be accessible.
 */

const ENDPOINT = 'https://admin.sethdavis.tech/api/graphql';
const CONTENT_DIR = new URL('../web/app/content', import.meta.url).pathname;

// ---------------------------------------------------------------------------
// GraphQL helper
// ---------------------------------------------------------------------------

async function gql<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
    const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables }),
    });
    if (!res.ok) throw new Error(`GraphQL request failed: ${res.status}`);
    const json = await res.json();
    if (json.errors) {
        console.error('GraphQL errors:', JSON.stringify(json.errors, null, 2));
        throw new Error('GraphQL returned errors');
    }
    return json.data as T;
}

// ---------------------------------------------------------------------------
// Slate JSON -> Markdown converter
// ---------------------------------------------------------------------------

interface SlateNode {
    type?: string;
    text?: string;
    children?: SlateNode[];
    level?: number;
    href?: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    code?: boolean;
    listType?: string;
    [key: string]: unknown;
}

function slateToMarkdown(nodes: SlateNode[]): string {
    if (!nodes || !Array.isArray(nodes)) return '';
    return nodes.map(nodeToMarkdown).join('\n\n');
}

function nodeToMarkdown(node: SlateNode): string {
    // Text leaf node
    if (node.text !== undefined) {
        return inlineMarks(node);
    }

    const children = node.children ?? [];

    switch (node.type) {
        case 'paragraph':
            return childrenToInline(children);

        case 'heading':
            return `${'#'.repeat(node.level ?? 1)} ${childrenToInline(children)}`;

        case 'blockquote':
            return children
                .map(nodeToMarkdown)
                .map(line => `> ${line}`)
                .join('\n');

        case 'code':
            return `\`\`\`\n${childrenToPlaintext(children)}\n\`\`\``;

        case 'divider':
            return '---';

        case 'unordered-list':
            return children.map(child => {
                const content = childrenToInline(child.children ?? []);
                return `- ${content}`;
            }).join('\n');

        case 'ordered-list':
            return children.map((child, i) => {
                const content = childrenToInline(child.children ?? []);
                return `${i + 1}. ${content}`;
            }).join('\n');

        case 'list-item':
        case 'list-item-content':
            return childrenToInline(children);

        case 'layout':
            // Flatten layout columns into sequential content
            return children
                .flatMap(col => (col.children ?? []).map(nodeToMarkdown))
                .join('\n\n');

        case 'layout-area':
            return children.map(nodeToMarkdown).join('\n\n');

        case 'link':
            return `[${childrenToInline(children)}](${node.href ?? ''})`;

        case 'component-block':
        case 'component-inline':
            // Render children as-is
            return children.map(nodeToMarkdown).join('\n\n');

        default:
            // Unknown node type: try to render children
            if (children.length > 0) {
                return children.map(nodeToMarkdown).join('\n\n');
            }
            return '';
    }
}

function childrenToInline(children: SlateNode[]): string {
    return children.map(child => {
        if (child.text !== undefined) return inlineMarks(child);
        if (child.type === 'link') {
            return `[${childrenToInline(child.children ?? [])}](${child.href ?? ''})`;
        }
        // Nested block inside inline context: flatten
        return nodeToMarkdown(child);
    }).join('');
}

function childrenToPlaintext(children: SlateNode[]): string {
    return children.map(child => {
        if (child.text !== undefined) return child.text;
        return childrenToPlaintext(child.children ?? []);
    }).join('');
}

function inlineMarks(node: SlateNode): string {
    let text = node.text ?? '';
    if (!text) return '';
    if (node.code) text = `\`${text}\``;
    if (node.bold) text = `**${text}**`;
    if (node.italic) text = `*${text}*`;
    if (node.underline) text = `<u>${text}</u>`;
    if (node.strikethrough) text = `~~${text}~~`;
    return text;
}

// ---------------------------------------------------------------------------
// Excerpt computation (plaintext from Slate nodes, truncated)
// ---------------------------------------------------------------------------

function computeExcerpt(nodes: SlateNode[], length = 250): string {
    if (!nodes || !Array.isArray(nodes)) return '';
    return nodes
        .map(n => childrenToPlaintext(n.children ?? [n]))
        .join(' ')
        .slice(0, length)
        .trim();
}

// ---------------------------------------------------------------------------
// Frontmatter serialization
// ---------------------------------------------------------------------------

function toYamlValue(value: unknown, indent = 0): string {
    if (value === null || value === undefined) return '""';
    if (typeof value === 'boolean') return String(value);
    if (typeof value === 'number') return String(value);
    if (typeof value === 'string') {
        // Escape strings that could be misinterpreted
        if (value === '' || value.includes(':') || value.includes('#') || value.includes('\n') || value.includes('"') || value.startsWith('[') || value.startsWith('{')) {
            return JSON.stringify(value);
        }
        return JSON.stringify(value);
    }
    if (Array.isArray(value)) {
        if (value.length === 0) return '[]';
        // Check if it's an array of objects (e.g., galleryImages)
        if (typeof value[0] === 'object' && value[0] !== null) {
            const prefix = ' '.repeat(indent);
            return '\n' + value.map(item => {
                const entries = Object.entries(item as Record<string, unknown>);
                const first = entries[0];
                const rest = entries.slice(1);
                let result = `${prefix}- ${first[0]}: ${toYamlValue(first[1])}`;
                for (const [k, v] of rest) {
                    result += `\n${prefix}  ${k}: ${toYamlValue(v)}`;
                }
                return result;
            }).join('\n');
        }
        // Simple array
        return `[${value.map(v => typeof v === 'string' ? JSON.stringify(v) : String(v)).join(', ')}]`;
    }
    return JSON.stringify(value);
}

function buildFrontmatter(fields: Record<string, unknown>): string {
    const lines = ['---'];
    for (const [key, value] of Object.entries(fields)) {
        if (value === undefined) continue;
        lines.push(`${key}: ${toYamlValue(value)}`);
    }
    lines.push('---');
    return lines.join('\n');
}

// ---------------------------------------------------------------------------
// File writing helpers
// ---------------------------------------------------------------------------

async function writeMdx(dir: string, slug: string, frontmatter: string, body: string) {
    const path = `${CONTENT_DIR}/${dir}/${slug}.mdx`;
    const content = body.trim()
        ? `${frontmatter}\n\n${body.trim()}\n`
        : `${frontmatter}\n`;
    await Bun.write(path, content);
    console.log(`  wrote ${dir}/${slug}.mdx`);
}

async function writeTs(filename: string, content: string) {
    const path = `${CONTENT_DIR}/data/${filename}`;
    await Bun.write(path, content);
    console.log(`  wrote data/${filename}`);
}

// ---------------------------------------------------------------------------
// Cloudinary URL with transforms baked in
// ---------------------------------------------------------------------------

function cloudinaryUrl(image: { publicUrl?: string; publicUrlTransformed?: string } | null, width = '1280'): string {
    if (!image) return '';
    return image.publicUrlTransformed || image.publicUrl || '';
}

// ---------------------------------------------------------------------------
// Migration: Work items
// ---------------------------------------------------------------------------

async function migrateWorks() {
    console.log('\n--- Migrating Work items ---');

    const data = await gql<{ works: any[] }>(`
        query {
            works(orderBy: [{ sortOrder: asc }]) {
                id title slug status description cta sortOrder
                about learned impact techStack sourceUrl demoUrl
                demoUrlText purchaseUrl purchaseButtonText sidebarTitle
                features sidebarType createdAt updatedAt
                heroImage {
                    publicUrl
                    publicUrlTransformed(transformation: { width: "1920", crop: "scale", quality: "90", fetch_format: "auto" })
                }
                thumbnailImage {
                    publicUrl
                    publicUrlTransformed(transformation: { width: "1280", crop: "scale", quality: "90", fetch_format: "auto" })
                }
                content { document }
                galleryImages(orderBy: [{ sortOrder: asc }]) {
                    alt sortOrder
                    image {
                        publicUrl
                        publicUrlTransformed(transformation: { width: "1280", crop: "scale", quality: "90", fetch_format: "auto" })
                    }
                }
                tags { name }
            }
        }
    `);

    for (const work of data.works) {
        const doc = work.content?.document;
        const hasContent = doc && Array.isArray(doc) && doc.length > 1;
        const body = hasContent ? slateToMarkdown(doc) : '';

        const gallery = (work.galleryImages ?? []).map((gi: any) => ({
            src: cloudinaryUrl(gi.image),
            alt: gi.alt || '',
            sortOrder: gi.sortOrder ?? 0,
        }));

        const techStack = parseTechStack(work.techStack);
        const features = parseTechStack(work.features);
        const tags = (work.tags ?? []).map((t: any) => t.name);

        const fm = buildFrontmatter({
            title: work.title || '',
            slug: work.slug || '',
            status: work.status || 'DRAFT',
            description: work.description || '',
            cta: work.cta || 'See more',
            sortOrder: work.sortOrder ?? 0,
            heroImage: cloudinaryUrl(work.heroImage, '1920'),
            thumbnailImage: cloudinaryUrl(work.thumbnailImage),
            about: work.about || '',
            learned: work.learned || '',
            impact: work.impact || '',
            techStack,
            sourceUrl: work.sourceUrl || '',
            demoUrl: work.demoUrl || '',
            demoUrlText: work.demoUrlText || '',
            purchaseUrl: work.purchaseUrl || '',
            purchaseButtonText: work.purchaseButtonText || 'Purchase',
            sidebarTitle: work.sidebarTitle || 'Get It Now',
            features,
            sidebarType: work.sidebarType || 'none',
            tags,
            galleryImages: gallery,
            hasContent,
            createdAt: work.createdAt || '',
            updatedAt: work.updatedAt || '',
        });

        await writeMdx('work', work.slug, fm, body);
    }
}

function parseTechStack(value: unknown): string[] {
    if (Array.isArray(value)) return value.filter((v): v is string => typeof v === 'string');
    if (typeof value === 'string') {
        try {
            const parsed = JSON.parse(value);
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            return [];
        }
    }
    return [];
}

// ---------------------------------------------------------------------------
// Migration: Posts (TIL + Blog)
// ---------------------------------------------------------------------------

async function migratePosts() {
    console.log('\n--- Migrating Posts ---');

    const data = await gql<{ posts: any[] }>(`
        query {
            posts {
                id title slug status type createdAt updatedAt
                content { document }
                tags { name }
            }
        }
    `);

    for (const post of data.posts) {
        const doc = post.content?.document;
        const body = doc ? slateToMarkdown(doc) : '';
        const tags = (post.tags ?? []).map((t: any) => t.name);
        const excerpt = doc ? computeExcerpt(doc) : '';
        const dir = post.type === 'TIL' ? 'til' : 'post';

        const fm = buildFrontmatter({
            title: post.title || '',
            slug: post.slug || '',
            status: post.status || 'DRAFT',
            type: post.type || 'POST',
            tags,
            excerpt,
            createdAt: post.createdAt || '',
            updatedAt: post.updatedAt || '',
        });

        await writeMdx(dir, post.slug, fm, body);
    }
}

// ---------------------------------------------------------------------------
// Migration: About facts, Quotes, Values
// ---------------------------------------------------------------------------

async function migrateAboutPage() {
    console.log('\n--- Migrating About page data ---');

    const data = await gql<{
        aboutFacts: any[];
        quotes: any[];
        values: any[];
    }>(`
        query {
            aboutFacts(where: { status: { equals: "PUBLISHED" } }, orderBy: [{ sortOrder: asc }]) {
                emoji title content linkUrl linkExternal sortOrder
            }
            quotes(where: { status: { equals: "PUBLISHED" } }, orderBy: [{ sortOrder: asc }]) {
                text author sortOrder
            }
            values(where: { status: { equals: "PUBLISHED" } }, orderBy: [{ sortOrder: asc }]) {
                title description sortOrder
            }
        }
    `);

    // About facts
    const factsData = data.aboutFacts.map((f: any, i: number) => ({
        id: 'about-fact-' + i,
        emoji: f.emoji || null,
        title: f.title || '',
        content: f.content || null,
        linkUrl: f.linkUrl || null,
        linkExternal: f.linkExternal || null,
        sortOrder: f.sortOrder ?? 0,
    }));
    const factsTs = "import type { AboutFact } from '../types';\n\nexport const aboutFacts: AboutFact[] = " + JSON.stringify(factsData, null, 4) + ';\n';
    await writeTs('about-facts.ts', factsTs);

    // Quotes
    const quotesData = data.quotes.map((q: any, i: number) => ({
        id: 'quote-' + i,
        text: q.text || '',
        author: q.author || '',
        sortOrder: q.sortOrder ?? 0,
    }));
    const quotesTs = "import type { Quote } from '../types';\n\nexport const quotes: Quote[] = " + JSON.stringify(quotesData, null, 4) + ';\n';
    await writeTs('quotes.ts', quotesTs);

    // Values
    const valuesData = data.values.map((v: any, i: number) => ({
        id: 'value-' + i,
        title: v.title || '',
        description: v.description || '',
        sortOrder: v.sortOrder ?? 0,
    }));
    const valuesTs = "import type { Value } from '../types';\n\nexport const values: Value[] = " + JSON.stringify(valuesData, null, 4) + ';\n';
    await writeTs('values.ts', valuesTs);
}

// ---------------------------------------------------------------------------
// Migration: Skills
// ---------------------------------------------------------------------------

async function migrateSkills() {
    console.log('\n--- Migrating Skills ---');

    const data = await gql<{ skills: any[] }>(`
        query {
            skills(where: { status: { equals: "PUBLISHED" } }, orderBy: [{ sortOrder: asc }]) {
                name sortOrder
            }
        }
    `);

    const skillsData = data.skills.map((s: any, i: number) => ({
        id: 'skill-' + i,
        name: s.name || '',
        sortOrder: s.sortOrder ?? 0,
    }));
    const ts = "import type { Skill } from '../types';\n\nexport const skills: Skill[] = " + JSON.stringify(skillsData, null, 4) + ';\n';
    await writeTs('skills.ts', ts);
}

// ---------------------------------------------------------------------------
// Migration: Packages + Offerings
// ---------------------------------------------------------------------------

async function migratePackages() {
    console.log('\n--- Migrating Packages ---');

    const data = await gql<{ packages: any[] }>(`
        query {
            packages(orderBy: { order: asc }) {
                name description type price order status
                offerings { name description }
            }
        }
    `);

    const packagesData = data.packages.map((p: any, i: number) => ({
        id: 'package-' + i,
        name: p.name || '',
        description: p.description || '',
        type: p.type || 'ONE_TIME',
        price: p.price ?? 0,
        order: p.order ?? 0,
        status: p.status || 'DRAFT',
        offerings: (p.offerings ?? []).map((o: any, j: number) => ({
            id: 'offering-' + i + '-' + j,
            name: o.name || '',
            description: o.description || '',
        })),
    }));
    const pkgTs = "import type { Package } from '../types';\n\nexport const packages: Package[] = " + JSON.stringify(packagesData, null, 4) + ';\n';
    await writeTs('packages.ts', pkgTs);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
    console.log('Migrating CMS content to local files...');
    console.log(`Endpoint: ${ENDPOINT}`);
    console.log(`Output: ${CONTENT_DIR}`);

    await migrateWorks();
    await migratePosts();
    await migrateAboutPage();
    await migrateSkills();
    await migratePackages();

    console.log('\nMigration complete!');
}

main().catch(err => {
    console.error('Migration failed:', err);
    process.exit(1);
});
