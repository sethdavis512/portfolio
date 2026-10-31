/**
 * Seth's resume, as data. Edit this file, then run `bun run resume:export`
 * to render /resume and write the PDF to Dropbox.
 *
 * Every fact here comes from Seth's own records (sethdavis.tech/resume and
 * his LinkedIn profile export). Do not invent metrics, titles, or dates.
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
        'Senior frontend engineer with 10+ years building React and TypeScript interfaces for large product teams. I build component libraries, accessibility tooling, and the internal tools other engineers rely on, and I ship daily with AI coding agents. Comfortable across the stack with React Router, Prisma, and PostgreSQL.',
    skills: [
        {
            group: 'AI',
            items: [
                'Claude Code',
                'Claude API',
                'Vercel AI SDK',
                'MCP',
                'Agent orchestration'
            ]
        },
        {
            group: 'Frontend',
            items: [
                'TypeScript',
                'React',
                'React Router',
                'Tailwind CSS',
                'Vue.js',
                'HTML/CSS',
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
                        'Building a teaching application that delivers executive function content to educators and students',
                        'Developing the in-house component library that keeps product surfaces visually and behaviorally consistent',
                        'Designing APIs and connecting in-house services so teams share data instead of duplicating it',
                        'Led LaunchDarkly enablement, giving teams feature flags for safer, incremental releases',
                        'Orchestrating coding agents to move features from prototype to working product faster'
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
                        'Prototyped StrudelLM, a music application exploring live-coded audio driven by natural language',
                        'Implemented skills in the open source Tambo app, expanding what the product could do without bloating its core',
                        'Produced demo videos for X and LinkedIn to show new capabilities to the developer audience'
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
                        'Built and maintained a company-wide JavaScript package on Snowplow Analytics; over 90 million events logged across three sites since December 2024',
                        'Designed a CLI that creates, versions, and syncs Snowplow schemas, improving data consistency and developer efficiency',
                        'Worked with cross-functional teams to bring Snowplow data into applications for data-driven decisions'
                    ]
                }
            ]
        },
        {
            company: 'Indeed',
            location: 'Austin, TX',
            roles: [
                {
                    title: 'Senior UX Developer',
                    dates: 'Jan 2023 – May 2024',
                    bullets: [
                        'Built an interface for adding prefabricated tools and customizable mock data, saving internal users 100+ hours weekly; ran onboarding workshops for developers and PMs',
                        'Improved a reporting app for diagnosing code and accessibility issues, leading to the resolution of 30% of accessibility violations',
                        'Built a module discovery app so teams could find, preview, and reuse Employer codebase modules',
                        'Upgraded the theming tool to flag misapplied styles and let developers add custom theme values'
                    ]
                },
                {
                    title: 'UX Developer',
                    dates: 'Jan 2020 – Jan 2023',
                    bullets: [
                        "Established Indeed's frontend pattern library, contributed 3 components, and helped launch a volunteer guild for cross-company contributions",
                        'Streamlined Employer navigation with a clearer link hierarchy and sub-navigation based on cross‑org feedback',
                        'Added job-status UI that reduced employer confusion and prompted them to fix posting errors',
                        'Built a module linking third-party chat into customer service flows'
                    ]
                },
                {
                    title: 'Associate UX Developer',
                    dates: 'Feb 2019 – Jan 2020',
                    bullets: [
                        'Rebuilt the employer verification plugin to cut imposter account creation and raise employer quality'
                    ]
                }
            ]
        },
        {
            company: 'NIC Inc.',
            location: 'Austin, TX',
            roles: [
                {
                    title: 'UX Developer',
                    dates: 'Apr 2017 – Feb 2019',
                    bullets: [
                        'Built an enterprise platform government agencies used to create applications for their constituents',
                        'Produced prototypes and set the code standards and patterns the development team followed'
                    ]
                }
            ]
        },
        {
            company: 'Living Direct',
            location: 'Austin, TX',
            roles: [
                {
                    title: 'Frontend Developer',
                    dates: 'Jan 2016 – Mar 2017',
                    bullets: [
                        'Built a frontend tool for customers to configure products into kits, plus a CSV-to-HTML builder that removed a manual design step'
                    ]
                },
                {
                    title: 'Web Designer',
                    dates: 'Nov 2013 – Jan 2016',
                    bullets: [
                        'Designed campaigns, including email campaigns that brought in $108,000 in revenue'
                    ]
                }
            ]
        }
    ],
    projects: [
        {
            name: 'FreshVisit',
            href: 'https://sethdavis.tech/work/fresh-visit',
            summary:
                'Browser agent that walks a site toward a goal like a first-time visitor and returns a video, every screen, and a verdict.'
        },
        {
            name: 'Lone Star UI',
            href: 'https://sethdavis.tech/work/lone-star-ui',
            summary:
                'React 19 component library on Base UI, Tailwind CSS 4, and CVA, published to npm with full type declarations.'
        },
        {
            name: 'Iridium',
            href: 'https://sethdavis.tech/work/iridium',
            summary:
                'Full-stack AI starter: React Router, Prisma, PostgreSQL, Better Auth, and an agentic chat with tool calling.'
        }
    ],
    education: [
        {
            school: 'Texas State University',
            detail: 'BFA, Communication Design',
            dates: '2012'
        },
        {
            school: 'Austin Coding Academy',
            detail: 'Frontend Development certificate',
            dates: '2016'
        }
    ]
};
