/**
 * Seth's resume, as data. Edit this file, then run `bun run resume:export`
 * to render /resume and write the PDF to Dropbox.
 *
 * Every fact here comes from Seth's own records (sethdavis.tech/resume and
 * his LinkedIn profile export). Do not invent metrics, titles, or dates.
 *
 * This is a one-page selection. The full record of every role, bullet, and
 * project lives in career-catalog.md beside this file: add new work there
 * first, and keep anything cut from here in the catalog.
 * Spell it "frontend" ("Frontend" in titles), never front-end or front end.
 * Job titles are the official ones; positioning belongs in `headline` and
 * `summary`, never in a past title.
 *
 * The portfolio (sethdavis.tech/resume) renders a verbatim copy of this file
 * at app/content/data/resume.ts. After editing here, copy it over so the site
 * and the PDF never disagree.
 */

export type ResumeLink = { label: string; href: string };

export type ResumeRole = {
    title: string;
    dates: string;
    bullets: string[];
};

export type ResumeJob = {
    company: string;
    location?: string;
    /** Shown beside the company when it differs from the roles' span, e.g. a contract. */
    note?: string;
    roles: ResumeRole[];
};

export type ResumeProject = {
    name: string;
    href?: string;
    summary: string;
};

export type Resume = {
    name: string;
    headline: string;
    location: string;
    email: string;
    phone: string;
    links: ResumeLink[];
    summary: string;
    skills: { group: string; items: string[] }[];
    experience: ResumeJob[];
    projects: ResumeProject[];
    education: { school: string; detail: string; dates: string }[];
};

export const resume: Resume = {
    name: 'Seth Davis',
    headline: 'Senior Frontend Engineer',
    location: 'Austin, TX',
    email: 'sethdavis512@gmail.com',
    phone: '(512) 791-7537',
    links: [
        { label: 'sethdavis.tech', href: 'https://sethdavis.tech' },
        {
            label: 'linkedin.com/in/sethdavis512',
            href: 'https://www.linkedin.com/in/sethdavis512'
        },
        { label: 'github.com/sethdavis512', href: 'https://github.com/sethdavis512' }
    ],
    summary:
        'Senior frontend engineer with 10+ years in React and TypeScript, building component libraries and internal tools. I ship daily with AI coding agents and own the tests, accessibility, and review.',
    skills: [
        {
            group: 'AI',
            items: [
                'Claude Code',
                'GitHub Copilot',
                'Claude API',
                'Vercel AI SDK',
                'MCP',
                'LLM integration'
            ]
        },
        {
            group: 'Frontend',
            items: [
                'TypeScript',
                'React',
                'Next.js',
                'React Router',
                'Tailwind CSS',
                'Base UI',
                'Accessibility (WCAG)'
            ]
        },
        {
            group: 'Full stack',
            items: ['Prisma', 'PostgreSQL', 'GraphQL', 'Node.js', 'Bun']
        },
        {
            group: 'Tooling',
            items: [
                'GitHub Actions CI/CD',
                'LaunchDarkly',
                'PostHog',
                'Snowplow',
                'Figma',
                'Railway'
            ]
        }
    ],
    experience: [
        {
            company: 'Committee for Children',
            location: 'Remote',
            roles: [
                {
                    title: 'Software Engineer (Contract)',
                    dates: 'May 2026 – Present',
                    bullets: [
                        'Building SparkEd, an executive function learning management system, and its Teaching Log API',
                        'Built its Base UI component library from Figma, plus accessibility audits and weekly Lighthouse scans',
                        "Designed the team's ticket-to-PR agent workflow with worktrees, TDD, standards review, and human gates",
                        'Led LaunchDarkly enablement; moved shared libraries to pnpm workspaces and GitHub Actions publishing'
                    ]
                }
            ]
        },
        {
            company: 'Tambo',
            location: 'Remote',
            roles: [
                {
                    title: 'Software Engineer (Contract)',
                    dates: 'Mar 2026 – Apr 2026',
                    bullets: [
                        "Prototyped StrudelLM, an AI music app, and built skills for Tambo's open source generative UI app"
                    ]
                }
            ]
        },
        {
            company: 'Gartner',
            location: 'Austin, TX',
            roles: [
                {
                    title: 'Senior Software Engineer, Frontend',
                    dates: 'Aug 2024 – Oct 2025',
                    bullets: [
                        'Built a company-wide Snowplow Analytics package (90M+ events across three sites) and its schema CLI'
                    ]
                }
            ]
        },
        {
            company: 'Indeed',
            location: 'Austin, TX',
            roles: [
                {
                    title: 'Associate to Senior UX Developer',
                    dates: 'Feb 2019 – May 2024',
                    bullets: [
                        'Built an interface for prefabricated tools and mock data that saved internal users 100+ hours weekly',
                        'Improved an accessibility reporting app, leading to the resolution of 30% of accessibility violations',
                        "Established Indeed's frontend pattern library and helped launch a guild for cross-company contributions"
                    ]
                }
            ]
        },
        {
            company: 'Earlier roles',
            location: 'Austin, TX',
            roles: [
                {
                    title: 'UX Developer, NIC Inc. · Frontend Developer and Web Designer, Living Direct',
                    dates: 'Nov 2013 – Feb 2019',
                    bullets: []
                }
            ]
        }
    ],
    projects: [
        {
            name: 'Fresh Visit',
            href: 'https://sethdavis.tech/work/fresh-visit',
            summary:
                'A solo-built SaaS whose browser agent tests sites like a first-time visitor and reports a verdict'
        },
        {
            name: 'Sprocket',
            href: 'https://sethdavis.tech/work/sprocket',
            summary:
                'A personal productivity app whose Claude assistant manages tasks, events, contacts, and a journal'
        },
        {
            name: 'Trellis',
            href: 'https://sethdavis.tech/work/trellis',
            summary:
                'A React node-and-edge canvas library on npm that runs in production in another of my apps'
        }
    ],
    education: [
        {
            school: 'Texas State University',
            detail: 'BFA, Communication Design',
            dates: '2012'
        }
    ]
};
