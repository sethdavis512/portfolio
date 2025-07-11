import { InfoIcon, ScrollText } from 'lucide-react';
import { Banner } from '~/components/Banner';
import Flex from '~/components/Flex';
import Heading from '~/components/Heading';
import JobItem from '~/components/JobItem';
import JobItemList from '~/components/JobItemList';
import Linky from '~/components/Linky';
import Panel from '~/components/Panel';
import SkillTag from '~/components/SkillTag';
import { ContentStyles, largeIconProps } from '~/constants';

const RESUME_URL =
    'https://www.dropbox.com/scl/fi/nxqjs1dv1bqloyxgdwq8s/20250525-seth-davis-resume.pdf?rlkey=48e9y025kt90uzxbsrrxz02eh&dl=0';

export default function ResumeRoute() {
    const yearsAsDeveloper = new Date().getFullYear() - 2016;

    return (
        <>
            <Banner className="mb-4">
                <Flex>
                    <InfoIcon />
                    Looking for a PDF version?{' '}
                    <Linky external to={RESUME_URL}>
                        Download it here
                    </Linky>
                </Flex>
            </Banner>
            <Panel heading="Resume" icon={<ScrollText {...largeIconProps} />}>
                <div className="space-y-6">
                    <p>
                        {`${ContentStyles.FRONTEND} engineer with ${yearsAsDeveloper}+ years in React, architecting accessible, user-focused UIs for scalable web platforms that boost satisfaction and optimize team throughput; motivated to excel on a dynamic, product-driven team`}
                    </p>
                    <Heading as="h3" size="4">
                        {`${ContentStyles.FRONTEND} Engineer Skills`}
                    </Heading>
                    <div className="flex flex-wrap items-center gap-2">
                        <SkillTag>Typescript</SkillTag>
                        <SkillTag>React</SkillTag>
                        <SkillTag>React Router 7</SkillTag>
                        <SkillTag>Prisma</SkillTag>
                        <SkillTag>Postgres</SkillTag>
                        <SkillTag>GraphQL</SkillTag>
                        <SkillTag>CSS-in-JS</SkillTag>
                        <SkillTag>HTML</SkillTag>
                        <SkillTag>CSS</SkillTag>
                        <SkillTag>JS</SkillTag>
                        <SkillTag>Accessibility</SkillTag>
                        <SkillTag>Git</SkillTag>
                        <SkillTag>GitHub Copilot</SkillTag>
                    </div>
                    <Heading as="h3" size="3">
                        Experience
                    </Heading>
                    <JobItem
                        company="Gartner"
                        dates="Aug 2024–Present"
                        title={ContentStyles.CURRENT_JOB_TITLE}
                    >
                        <JobItemList>
                            <li>
                                Built and maintained a company-wide Javascript
                                package using Snowplow Analytics to track key
                                site metrics—over 90 million events logged
                                across three sites since December 2024
                            </li>
                            <li>
                                Designed and implemented a custom CLI tool to
                                streamline the creation, versioning, and
                                synchronization of Snowplow schemas, enhancing
                                data consistency and developer efficiency
                            </li>
                            <li>
                                Collaborated with cross-functional teams to
                                integrate Snowplow data into various
                                applications and platforms, enabling data-driven
                                decision making
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
                                dynamically add prefabricated tools and
                                customizable mock data, saving internal users
                                over 100+ hours weekly. Conducted workshops to
                                onboard developers and project managers
                            </li>
                            <li>
                                Developed a module discovery app that enabled
                                internal teams to efficiently identify the
                                purpose, visual presentation, and functionality
                                of Employer codebases in order to promote
                                awareness and reuse
                            </li>
                            <li>
                                Improved the interface for a reporting
                                application that empowered teams to diagnose
                                issues, view coding infractions and
                                accessibility issues, leading to the resolution
                                of 30% of accessibility violations
                            </li>
                            <li>
                                Upgraded theming tool to help teams identify
                                incorrectly applied styles within components as
                                well as enabling developers to add custom theme
                                values and iterate towards better site designs
                                saving developers time
                            </li>
                        </JobItemList>
                    </JobItem>
                    <JobItem
                        company="Indeed, Inc"
                        dates="Jan 2020–Jan 2023 (3 yrs 1 mo)"
                        title={`${ContentStyles.FRONTEND} Engineer`}
                    >
                        <JobItemList>
                            <li>
                                Streamlined Employer navigation by incorporating
                                cross-organization feedback, optimizing link
                                hierarchy, and adding sub-navigation, which
                                improved repetitious task efficiency in addition
                                to the overall customer experience
                            </li>
                            <li>
                                Enhanced customer awareness of job statuses by
                                incorporating key UI elements to indicate
                                posting condition, which reduced user confusion
                                and prompted employers to resolve posting errors
                            </li>
                            <li>
                                Developed a module linking third-party chat to
                                enhance customer service interactions, resulting
                                in more efficient communication, faster
                                resolution times, and improved customer
                                satisfaction
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
                                documentation for employer validation using
                                InVision
                            </li>
                            <li>
                                Rebuilt employer verification plugin to decrease
                                imposter account creation and increase overall
                                employer quality
                            </li>
                        </JobItemList>
                    </JobItem>
                    <JobItem
                        company="NIC Inc."
                        dates="Jan 2018–Feb 2019 (1 yr 2 mos)"
                        title={`${ContentStyles.FRONTEND} Engineer`}
                    >
                        <JobItemList>
                            <li>
                                Built an enterprise platform for consumers to
                                build applications for their constituents
                            </li>
                            <li>
                                Partnered with team members to improve the
                                operations and documentation of applications
                            </li>
                            <li>
                                Participated in recurring UX developer forums to
                                enhance codebase
                            </li>
                        </JobItemList>
                    </JobItem>
                    <JobItem
                        company="Texas NIC"
                        dates="Apr 2017–Dec 2017 (9 mos)"
                        title={`${ContentStyles.FRONTEND} Engineer`}
                    >
                        <JobItemList>
                            <li>
                                Produced prototypes and designed foundation for
                                enterprise level application
                            </li>
                            <li>
                                Collaborated with business partners, and
                                designers to understand requirements and create
                                solutions
                            </li>
                            <li>
                                Initiated code standards and patterns for
                                developers to follow
                            </li>
                        </JobItemList>
                    </JobItem>
                    <Heading as="h3" size="3">
                        Education
                    </Heading>
                    <JobItemList className="mb-12">
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
                    <Banner>
                        Interested in learning more about me?{' '}
                        <Linky to="/about">See my about page</Linky>
                    </Banner>
                </div>
            </Panel>
        </>
    );
}
