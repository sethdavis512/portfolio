import { cx } from 'cva.config';
import { InfoIcon } from 'lucide-react';
import type { PropsWithChildren } from 'react';
// import { intervalToDuration, formatDuration } from 'date-fns';

import { Banner } from '~/components/Banner';
import { ContentStyles } from '~/constants';
import { Flex } from '~/components/Flex';
import { generateRouteMeta } from '~/utils/seo';
import { Heading } from '~/components/Heading';
import { JobItem } from '~/components/JobItem';
import { JobItemList } from '~/components/JobItemList';
import { Linky } from '~/components/Linky';
import { SkillTag } from '~/components/SkillTag';

const RESUME_URL =
    'https://www.dropbox.com/scl/fi/sl3nav1owzvfhqvphwflh/seth-davis-resume.pdf?rlkey=1gdz3ln2tcdrufv6gyi0zcppl&st=mluwhad0&dl=0';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Resume',
        descriptionContent:
            "View Seth Davis's resume. 9+ years experience as a Frontend Engineer, specializing in React, TypeScript, and React Router. Currently at Indeed.",
        ogUrl: 'https://sethdavis.tech/resume'
    });
}

function ResumeSection({
    children,
    className
}: PropsWithChildren<{ className?: string }>) {
    return <section className={cx('mb-8', className)}>{children}</section>;
}

export default function ResumeRoute() {
    const yearsAsDeveloper = new Date().getFullYear() - 2016;
    // const timeAtCurrentJob = formatDuration(
    //     intervalToDuration({
    //         start: new Date(2024, 7),
    //         end: new Date()
    //     }),
    //     { format: ['years', 'months'] }
    // )
    //     .replace('years', 'yrs')
    //     .replace('year', 'yr')
    //     .replace('months', 'mos')
    //     .replace('month', 'mo');

    return (
        <>
            <Heading as="h1" className="mb-8">
                Resume
            </Heading>
            <Banner className="mb-8">
                <Flex>
                    <InfoIcon />
                    Looking for a PDF version?{' '}
                    <Linky external to={RESUME_URL}>
                        Download it here
                    </Linky>
                </Flex>
            </Banner>
            <ResumeSection>
                <Heading as="h2" size="2">
                    Summary
                </Heading>
                <p>
                    {`${ContentStyles.FRONTEND} engineer with ${yearsAsDeveloper}+ years in React, architecting accessible, user-focused UIs for scalable web platforms that boost satisfaction and optimize team throughput; motivated to excel on a dynamic, product-driven team`}
                </p>
            </ResumeSection>
            <ResumeSection>
                <Heading as="h2" size="2">
                    {`${ContentStyles.FRONTEND} Engineer Skills`}
                </Heading>
                <div className="flex flex-wrap items-center gap-2">
                    {[
                        'Typescript',
                        'React',
                        'React Router 7',
                        'Prisma',
                        'Postgres',
                        'GraphQL',
                        'CSS-in-JS',
                        'HTML',
                        'CSS',
                        'JS',
                        'Accessibility',
                        'Git',
                        'Vercel AI SDK',
                        'Open AI API',
                        'Claude Code',
                        'GitHub Copilot',
                        'PostHog',
                        'Railway'
                    ].map((skill) => (
                        <SkillTag key={skill}>{skill}</SkillTag>
                    ))}
                </div>
            </ResumeSection>
            <ResumeSection>
                <Heading as="h2" size="2">
                    Experience
                </Heading>
                <JobItem
                    company="Gartner"
                    dates={`Aug 2024–Oct 2025 (1 yr 2 mos)`}
                    title={`Software Engineer, ${ContentStyles.FRONTEND}`}
                >
                    <JobItemList>
                        <li>
                            Built and maintained a company-wide Javascript
                            package using Snowplow Analytics to track key site
                            metrics—over 90 million events logged across three
                            sites since December 2024
                        </li>
                        <li>
                            Designed and implemented a custom CLI tool to
                            streamline the creation, versioning, and
                            synchronization of Snowplow schemas, enhancing data
                            consistency and developer efficiency
                        </li>
                        <li>
                            Collaborated with cross-functional teams to
                            integrate Snowplow data into various applications
                            and platforms, enabling data-driven decision making
                        </li>
                    </JobItemList>
                </JobItem>
                <JobItem
                    company="Indeed, Inc"
                    dates="Jan 2023–May 2024 (1 yr 5 mos)"
                    title={ContentStyles.CURRENT_JOB_TITLE}
                >
                    <JobItemList>
                        <li>
                            Created an interface enabling developers to
                            dynamically add prefabricated tools and customizable
                            mock data, saving internal users over 100+ hours
                            weekly. Conducted workshops to onboard developers
                            and project managers
                        </li>
                        <li>
                            Developed a module discovery app that enabled
                            internal teams to efficiently identify the purpose,
                            visual presentation, and functionality of Employer
                            codebases in order to promote awareness and reuse
                        </li>
                        <li>
                            Improved the interface for a reporting application
                            that empowered teams to diagnose issues, view coding
                            infractions and accessibility issues, leading to the
                            resolution of 30% of accessibility violations
                        </li>
                        <li>
                            Upgraded theming tool to help teams identify
                            incorrectly applied styles within components as well
                            as enabling developers to add custom theme values
                            and iterate towards better site designs saving
                            developers time
                        </li>
                    </JobItemList>
                </JobItem>
                <JobItem
                    company="Indeed, Inc"
                    dates="Jan 2020–Jan 2023 (3 yrs)"
                    title={`${ContentStyles.FRONTEND} Engineer`}
                >
                    <JobItemList>
                        <li>
                            Streamlined Employer navigation by incorporating
                            cross-organization feedback, optimizing link
                            hierarchy, and adding sub-navigation, which improved
                            repetitious task efficiency in addition to the
                            overall customer experience
                        </li>
                        <li>
                            Enhanced customer awareness of job statuses by
                            incorporating key UI elements to indicate posting
                            condition, which reduced user confusion and prompted
                            employers to resolve posting errors
                        </li>
                        <li>
                            Developed a module linking third-party chat to
                            enhance customer service interactions, resulting in
                            more efficient communication, faster resolution
                            times, and improved customer satisfaction
                        </li>
                        <li>
                            {`Established Indeed’s ${ContentStyles.FRONTEND.toLowerCase()} pattern library,
                                contributed 3 components and helped launch a
                                volunteer guild that enabled contributions from
                                teams across the company`}
                        </li>
                    </JobItemList>
                </JobItem>
                <JobItem
                    company="Indeed, Inc"
                    dates="Feb 2019–Jan 2020 (11 mos)"
                    title={`Associate ${ContentStyles.FRONTEND} Engineer`}
                >
                    <JobItemList>
                        <li>
                            Active participant in week-long design sprint,
                            enhancing employer verification workflows with
                            valuable contributions
                        </li>
                        <li>
                            Influenced and built portions of the design
                            documentation for employer validation using InVision
                        </li>
                        <li>
                            Rebuilt employer verification plugin to decrease
                            imposter account creation and increase overall
                            employer quality
                        </li>
                    </JobItemList>
                </JobItem>
                <JobItem title="Extracurricular" className="mb-12">
                    <JobItemList>
                        <li>
                            Member and volunteer at the{' '}
                            <Linky to="https://remixaustin.com/">
                                Remix Austin Meetup
                            </Linky>
                        </li>
                        <li>
                            Building Iridium: A full-stack starter template
                            (TypeScript, React Router 7, Prisma, Postgres,
                            Railway)
                        </li>
                        <li>
                            Exploring AI-assisted development and LLM code
                            generation workflows
                        </li>
                    </JobItemList>
                </JobItem>
                <JobItem title="Education">
                    <JobItemList>
                        <li>
                            Austin Coding Academy - Austin, Texas
                            <ul className="m-0 ml-4 mt-2 list-outside list-disc space-y-2 pl-4">
                                <li>
                                    Intermediate course (Feb 1–Apr 15, 2016)
                                </li>
                                <li>Advanced course (May 2–Jul 13, 2016)</li>
                            </ul>
                        </li>
                        <li>
                            Texas State University - Bachelors of Fine Arts,
                            Communication Design (2012) - San Marcos, Texas
                        </li>
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
