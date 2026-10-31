import { cx } from '~/cva.config';
import { InfoIcon, MailIcon } from 'lucide-react';
import type { PropsWithChildren } from 'react';

import { Banner } from '~/components/Banner';
import { CONTACT_EMAIL } from '~/constants';
import { Flex } from '~/components/Flex';
import { resume } from '~/content/data/resume';
import { generateRouteMeta } from '~/utils/seo';
import { Heading } from '~/components/Heading';
import { JobItem } from '~/components/JobItem';
import { JobItemList } from '~/components/JobItemList';
import { Linky } from '~/components/Linky';
import { SkillTag } from '~/components/SkillTag';
import type { Route } from './+types/resume';

// The PDF is rendered by tws-press (`bun run resume:export`) into this
// Dropbox file, so the shared link stays stable across edits.
const RESUME_URL =
    'https://www.dropbox.com/scl/fi/sl3nav1owzvfhqvphwflh/seth-davis-resume.pdf?rlkey=1gdz3ln2tcdrufv6gyi0zcppl&st=mluwhad0&dl=0';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Resume',
        descriptionContent: `View Seth Davis's resume. ${resume.summary}`,
        ogUrl: 'https://sethdavis.tech/resume'
    });
}

export function loader() {
    return { resume };
}

function ResumeSection({
    children,
    className
}: PropsWithChildren<{ className?: string }>) {
    return <section className={cx('mb-8', className)}>{children}</section>;
}

export default function ResumeRoute({ loaderData }: Route.ComponentProps) {
    const { resume } = loaderData;

    return (
        <>
            <div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-10">
                <Heading as="h1" className="mb-0">
                    Resume
                </Heading>
                <span className="text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400">
                    {resume.headline}
                </span>
            </div>
            <Banner className="mb-4">
                <Flex>
                    <InfoIcon />
                    Looking for a PDF version?{' '}
                    <Linky
                        href={RESUME_URL}
                        data-ph-capture-attribute-link_kind="resume_download"
                    >
                        Download it here
                    </Linky>
                </Flex>
            </Banner>
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-2 text-zinc-700 dark:text-zinc-300">
                <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    data-ph-capture-attribute-link_kind="email"
                    className="inline-flex items-center gap-2 font-medium text-black dark:text-zinc-100 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ring-offset-white dark:focus-visible:ring-primary-400 dark:ring-offset-zinc-950"
                >
                    <MailIcon className="size-4" />
                    {CONTACT_EMAIL}
                </a>
                <span className="hidden sm:inline text-zinc-400 dark:text-zinc-600">·</span>
                <span>
                    Hiring?{' '}
                    <Linky to="/contact">Get in touch</Linky>
                </span>
            </div>
            <ResumeSection>
                <Heading as="h2" size="2">
                    Summary
                </Heading>
                <p>{resume.summary}</p>
            </ResumeSection>
            <ResumeSection>
                <Heading as="h2" size="2">
                    Skills
                </Heading>
                <dl className="grid gap-4 sm:grid-cols-[8rem_1fr] sm:gap-x-6">
                    {resume.skills.map(function (skill) {
                        return (
                            <div key={skill.group} className="contents">
                                <dt className="font-semibold text-zinc-900 dark:text-zinc-100">
                                    {skill.group}
                                </dt>
                                <dd className="flex flex-wrap items-center gap-2">
                                    {skill.items.map(function (item) {
                                        return (
                                            <SkillTag key={item}>{item}</SkillTag>
                                        );
                                    })}
                                </dd>
                            </div>
                        );
                    })}
                </dl>
            </ResumeSection>
            <ResumeSection>
                <Heading as="h2" size="2">
                    Experience
                </Heading>
                {resume.experience.map(function (job) {
                    return job.roles.map(function (role) {
                        return (
                            <JobItem
                                key={`${job.company}-${role.title}`}
                                company={job.company}
                                dates={role.dates}
                                location={job.location}
                                title={role.title}
                            >
                                <JobItemList>
                                    {role.bullets.map(function (bullet) {
                                        return <li key={bullet}>{bullet}</li>;
                                    })}
                                </JobItemList>
                            </JobItem>
                        );
                    });
                })}
                <JobItem title="Selected projects">
                    <JobItemList>
                        {resume.projects.map(function (project) {
                            return (
                                <li key={project.name}>
                                    {project.href ? (
                                        <Linky href={project.href}>
                                            {project.name}
                                        </Linky>
                                    ) : (
                                        project.name
                                    )}
                                    : {project.summary}
                                </li>
                            );
                        })}
                    </JobItemList>
                </JobItem>
                <JobItem title="Community & Ongoing Learning" className="mb-12">
                    <JobItemList>
                        <li>
                            Active contributor to{' '}
                            <Linky href="https://remixaustin.com/">
                                Remix Austin Meetup
                            </Linky>
                            , engaging in discussions on modern React
                            architecture and routing patterns
                        </li>
                        <li>
                            Creator of{' '}
                            <Linky href="https://ai-maniacs.com">
                                AI Maniacs
                            </Linky>
                            , a free AI education platform covering fundamentals
                            through agent workflows, maintained as models and
                            tooling change
                        </li>
                        <li>
                            Follows industry podcasts (Syntax, VS Code Insiders)
                            on modern frontend tooling and developer experience
                        </li>
                    </JobItemList>
                </JobItem>
                <JobItem title="Education">
                    <JobItemList>
                        {resume.education.map(function (item) {
                            return (
                                <li key={item.school}>
                                    {`${item.school}, ${item.detail} (${item.dates})`}
                                </li>
                            );
                        })}
                    </JobItemList>
                </JobItem>
            </ResumeSection>
            <Banner>
                Interested in learning more about me?{' '}
                <Linky to="/about">See my about page</Linky>
            </Banner>
        </>
    );
}
