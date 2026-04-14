import { Heading } from '~/components/Heading';
import { Card } from '~/components/Card';
import { Button } from '~/components/Button';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'What is a Design Technologist?',
        descriptionContent:
            'A Design Technologist bridges the gap between design and engineering, building design systems, interactive prototypes, and creative tooling in production-grade code.',
        ogUrl: 'https://sethdavis.tech/design-technologist'
    });
}

const COMPARISONS = [
    {
        title: 'Frontend Developer',
        focus: 'Feature delivery, state management, API integration, performance',
        output: 'Production application code'
    },
    {
        title: 'UX Designer',
        focus: 'User research, wireframes, flows, specifications',
        output: 'Figma files, prototypes, research reports'
    },
    {
        title: 'Design Technologist',
        focus: 'Interaction quality, design fidelity, component APIs, developer experience',
        output: 'Design systems, coded prototypes, creative tooling',
        highlighted: true
    }
];

const SKILLS = [
    {
        category: 'Engineering',
        items: [
            'TypeScript and React',
            'Component architecture and composition',
            'Design token systems and theming',
            'Animation and motion design',
            'Accessibility (WCAG, ARIA)',
            'AI/LLM integration and generative UI'
        ]
    },
    {
        category: 'Design',
        items: [
            'Visual hierarchy and typography',
            'Interaction and micro-interaction design',
            'Figma fluency',
            'Systems thinking',
            'Color theory and spacing',
            'User empathy and design critique'
        ]
    }
];

const DAY_TO_DAY = [
    {
        title: 'Design system stewardship',
        description:
            'Building and evolving component libraries. Defining component APIs, writing variant configurations, ensuring tokens stay consistent.'
    },
    {
        title: 'Code-based prototyping',
        description:
            'Turning concepts into working, interactive prototypes before full engineering kicks in. Higher fidelity than mockups, faster iteration than production code.'
    },
    {
        title: 'Bridging design and engineering',
        description:
            'Translating design intent into technical constraints and vice versa. Sitting in critiques and standups, reducing the telephone game between teams.'
    },
    {
        title: 'Creative tooling',
        description:
            'Building internal tools that make designers and developers more productive. CLI tools, Figma plugins, asset pipelines, adoption dashboards.'
    },
    {
        title: 'Generative interfaces',
        description:
            'Building UIs that incorporate AI -- chat interfaces, generative layouts, prompt-driven experiences. Making AI output feel designed, not dumped on screen.'
    },
    {
        title: 'Frontend quality advocacy',
        description:
            'Championing motion, micro-interactions, accessibility, and visual polish in a codebase where those things often get deprioritized.'
    }
];

export default function DesignTechnologistRoute() {
    return (
        <>
            <Heading as="h1" className="mb-4">
                What is a Design Technologist?
            </Heading>
            <p className="text-lg text-zinc-300 mb-12 max-w-2xl">
                A Design Technologist is an engineer who thinks like a designer.
                They operate at the intersection of design and code, eliminating
                the handoff gap that exists between most design and engineering
                teams.
            </p>

            <section className="mb-12">
                <Heading as="h2" className="mb-6">
                    The role in a nutshell
                </Heading>
                <div className="space-y-4 max-w-2xl">
                    <p>
                        Every product team struggles with translation loss.
                        Design produces specs. Engineering interprets them.
                        Fidelity erodes. Iterations slow down. The Design
                        Technologist eliminates this gap by being the person who
                        both understands design intent and can implement it in
                        production code.
                    </p>
                    <p>
                        The role overlaps with titles like Design Engineer,
                        Creative Technologist, and UX Engineer, but the core
                        competency is the same: fluency in both design and
                        code. The title has been adopted across the industry
                        to describe someone who translates design vision into
                        functional, high-fidelity prototypes and production
                        code.
                    </p>
                </div>
            </section>

            <section className="mb-12">
                <Heading as="h2" className="mb-6">
                    How it compares
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {COMPARISONS.map(function (role) {
                        return (
                            <Card
                                key={role.title}
                                className={
                                    role.highlighted
                                        ? 'ring-2 ring-primary-500 dark:ring-primary-400'
                                        : ''
                                }
                            >
                                <Heading as="h3" size="4" className="mb-3">
                                    {role.title}
                                </Heading>
                                <p className="text-sm text-zinc-400 mb-2">
                                    Focus
                                </p>
                                <p className="mb-4">{role.focus}</p>
                                <p className="text-sm text-zinc-400 mb-2">
                                    Primary output
                                </p>
                                <p>{role.output}</p>
                            </Card>
                        );
                    })}
                </div>
            </section>

            <section className="mb-12">
                <Heading as="h2" className="mb-6">
                    The skill set
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SKILLS.map(function (group) {
                        return (
                            <Card key={group.category}>
                                <Heading
                                    as="h3"
                                    size="4"
                                    className="mb-4"
                                >
                                    {group.category}
                                </Heading>
                                <ul className="space-y-2">
                                    {group.items.map(function (item) {
                                        return (
                                            <li
                                                key={item}
                                                className="flex items-start gap-2"
                                            >
                                                <span className="text-primary-500 mt-1.5 block w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Card>
                        );
                    })}
                </div>
            </section>

            <section className="mb-12">
                <Heading as="h2" className="mb-6">
                    Day to day
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {DAY_TO_DAY.map(function (item) {
                        return (
                            <Card key={item.title} className="h-full">
                                <Heading
                                    as="h3"
                                    size="4"
                                    className="mb-2"
                                >
                                    {item.title}
                                </Heading>
                                <p className="text-zinc-300">
                                    {item.description}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </section>

            <section className="mb-12">
                <Heading as="h2" className="mb-6">
                    Why it matters now
                </Heading>
                <div className="space-y-4 max-w-2xl">
                    <p>
                        <strong className="text-white">
                            Design systems are infrastructure.
                        </strong>{' '}
                        Every serious product team maintains a component library.
                        Someone has to own the intersection of design quality and
                        engineering rigor in that system.
                    </p>
                    <p>
                        <strong className="text-white">
                            AI is creating new interface paradigms.
                        </strong>{' '}
                        Generative UI, conversational interfaces, and
                        AI-assisted workflows don't fit the "designer makes
                        mockup, developer builds it" model. They require someone
                        who can think about interaction design and write the code
                        simultaneously.
                    </p>
                    <p>
                        <strong className="text-white">
                            Speed of iteration is a competitive advantage.
                        </strong>{' '}
                        Teams that go from concept to working prototype in hours
                        make better product decisions. Code-based prototyping
                        compresses that cycle dramatically.
                    </p>
                    <p>
                        <strong className="text-white">
                            The last 10% of UI quality is disproportionately
                            valuable.
                        </strong>{' '}
                        The difference between good and great is motion, polish,
                        and interaction detail. A Design Technologist is the
                        person who ensures it gets done.
                    </p>
                </div>
            </section>

            <hr className="border-zinc-500 my-12" />

            <section>
                <Heading as="h2" className="mb-4">
                    See it in practice
                </Heading>
                <p className="text-zinc-300 mb-6">
                    Check out my work building design systems, creative tooling,
                    and generative interfaces.
                </p>
                <div className="flex gap-4">
                    <Button to="/work" size="lg">
                        See my work
                    </Button>
                    <Button to="/resume" size="lg" variant="outline">
                        View resume
                    </Button>
                </div>
            </section>
        </>
    );
}
