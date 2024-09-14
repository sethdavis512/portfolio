import { Alert } from '@lemonsqueezy/wedges';
import { Link } from '@remix-run/react';
import { ScrollText } from 'lucide-react';
import ExternalLink from '~/components/ExternalLink';
import Heading from '~/components/Heading';
import JobItem from '~/components/JobItem';
import JobItemList from '~/components/JobItemList';
import Panel from '~/components/Panel';
import SkillTag from '~/components/SkillTag';
import { largeIconProps } from '~/constants';

const RESUME_URL =
    'https://www.dropbox.com/scl/fi/6n9sbvmzr3h138p850t6l/20240528-seth-davis-resume.pdf?rlkey=adv2zflzdhth27hnly64qop9s&dl=0';

export default function ResumeRoute() {
    return (
        <>
            <Alert color="success" title="Looking for a PDF version?">
                <ExternalLink to={RESUME_URL}>Download it here</ExternalLink>
            </Alert>
            <Panel heading="Resume" icon={<ScrollText {...largeIconProps} />}>
                <div className="space-y-6">
                    <p>
                        With 8+ years in web development focused on user
                        experiences, I am seeking a Senior Front-End Engineer
                        role on an innovative team to tackle challenges,
                        contribute to design, and advance my skills and
                        professional growth.
                    </p>
                    <Heading as="h3" size="3" borderBottom>
                        Front-End Engineer Skills
                    </Heading>
                    <div className="flex flex-wrap items-center gap-2">
                        <SkillTag>Typescript</SkillTag>
                        <SkillTag>React</SkillTag>
                        <SkillTag>Node</SkillTag>
                        <SkillTag>Webpack</SkillTag>
                        <SkillTag>Federated Modules</SkillTag>
                        <SkillTag>GraphQL</SkillTag>
                        <SkillTag>Remix</SkillTag>
                        <SkillTag>Prisma</SkillTag>
                        <SkillTag>Postgres</SkillTag>
                        <SkillTag>Tailwind</SkillTag>
                        <SkillTag>Accessibility</SkillTag>
                        <SkillTag>JIRA</SkillTag>
                        <SkillTag>Agile</SkillTag>
                        <SkillTag>REST</SkillTag>
                        <SkillTag>Git</SkillTag>
                        <SkillTag>CSS-in-JS</SkillTag>
                        <SkillTag>HTML</SkillTag>
                        <SkillTag>CSS</SkillTag>
                        <SkillTag>JS</SkillTag>
                    </div>
                    <Heading as="h3" size="3" borderBottom>
                        Experience
                    </Heading>
                    <JobItem
                        company="Gartner"
                        dates="Aug 2024–Present"
                        title="Senior Front-End Engineer"
                    >
                        <JobItemList>
                            <li>Building an internal analytics platform</li>
                        </JobItemList>
                    </JobItem>
                    <JobItem
                        company="Indeed, Inc"
                        dates="Jan 2023–May 2024 (1 yr 5 mos)"
                        title="Senior Front-End Engineer"
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
                        title="Front-End Engineer"
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
                                Established Indeed’s front-end pattern library,
                                contributed 3 components and helped launch a
                                volunteer guild that enabled contributions from
                                teams across the company
                            </li>
                        </JobItemList>
                    </JobItem>
                    <JobItem
                        company="Indeed, Inc"
                        dates="Feb 2019–Jan 2020 (11 mos)"
                        title="Associate Front-End Engineer"
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
                        title="Front-End Engineer"
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
                        title="Front-End Engineer"
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
                    <Heading as="h3" size="3" borderBottom>
                        Education
                    </Heading>
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
                    <Alert
                        color="success"
                        title="Interested in learning more about me?"
                    >
                        <Link
                            to="/about"
                            className="text-primary-500 underline"
                        >
                            See my about page
                        </Link>
                    </Alert>
                </div>
            </Panel>
        </>
    );
}
