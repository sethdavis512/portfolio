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

export default function ResumeRoute() {
    return (
        <Panel heading="Resume" icon={<ScrollText {...largeIconProps} />}>
            <div className="space-y-6">
                <Alert color="success" title="Looking for a PDF version?">
                    <ExternalLink to="https://www.dropbox.com/scl/fi/1mobb9qfh58hc8msguivt/20240514-seth-davis-resume.pdf?rlkey=837povd4hh923v7he4ahjwf50&dl=0">
                        Download it here
                    </ExternalLink>
                </Alert>
                <Heading as="h3" size="3" borderBottom>
                    Frontend Engineer Skills
                </Heading>
                <div className="flex flex-wrap items-center gap-2">
                    <SkillTag>Typescript</SkillTag>
                    <SkillTag>React</SkillTag>
                    <SkillTag>Node</SkillTag>
                    <SkillTag>Webpack</SkillTag>
                    <SkillTag>Federated Modules</SkillTag>
                    <SkillTag>GraphQL</SkillTag>
                    <SkillTag>Remix</SkillTag>
                    <SkillTag>Tailwind</SkillTag>
                    <SkillTag>a11y</SkillTag>
                    <SkillTag>JIRA</SkillTag>
                    <SkillTag>Agile</SkillTag>
                    <SkillTag>REST</SkillTag>
                    <SkillTag>Git</SkillTag>
                    <SkillTag>Javascript</SkillTag>
                    <SkillTag>HTML</SkillTag>
                    <SkillTag>CSS</SkillTag>
                </div>
                <Heading as="h3" size="3" borderBottom>
                    Experience
                </Heading>
                <JobItem
                    company="Indeed, Inc"
                    dates="Jan 2023–May 2024 (1 yr 5 mos)"
                    title="Senior User Experience Developer"
                >
                    <JobItemList>
                        <li>
                            Developed a module discovery app that enabled
                            internal teams to efficiently identify the purpose,
                            visual presentation, and functionality of Employer
                            codebases
                        </li>
                        <li>
                            Improved the interface of the UX Quality Scorecard
                            application, empowering teams to access linter and
                            accessibility metrics for evaluating code quality
                        </li>
                        <li>
                            Developed an internal data manipulation tool for
                            product variations and led workshops to onboard
                            developers and project managers.
                        </li>
                        <li>
                            Upgraded theme switcher tool for users to add custom
                            theme values, experiment and change page look and
                            feel
                        </li>
                    </JobItemList>
                </JobItem>
                <JobItem
                    company="Indeed, Inc"
                    dates="Jan 2020–Jan 2023 (3 yrs 1 mo)"
                    title="User Experience Developer"
                >
                    <JobItemList>
                        <li>
                            Streamlined Employer navigation by absorbing cross
                            org input, optimizing link hierarchy and adding sub
                            navigation
                        </li>
                        <li>
                            Improved customer awareness and understanding by
                            indicating job posting status with key UI elements
                        </li>
                        <li>
                            Developed module linking third-party chat for smooth
                            customer service representative interactions with
                            customers
                        </li>
                        <li>
                            Enhanced the shared, company-wide library by
                            contributing valuable UI components
                        </li>
                    </JobItemList>
                </JobItem>
                <JobItem
                    company="Indeed, Inc"
                    dates="Feb 2019–Jan 2020 (11 mos)"
                    title="Associate User Experience Developer"
                >
                    <JobItemList>
                        <li>
                            Active participant in week-long design sprint,
                            enhancing Employer verification workflows with
                            valuable contributions
                        </li>
                        <li>
                            Influenced and built portions of the design
                            documentation for Employer verification using
                            InVision
                        </li>
                        <li>
                            Rebuilt in-house Employer verification plugin using
                            shared Indeed Component Library to display
                            verification steps
                        </li>
                    </JobItemList>
                </JobItem>
                <JobItem
                    company="NIC Inc."
                    dates="Jan 2018–Feb 2019 (1 yr 2 mos)"
                    title="User Experience Developer"
                >
                    <JobItemList>
                        <li>
                            Built an enterprise platform for consumers to build
                            applications for their constituents
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
                    title="User Experience Developer"
                >
                    <JobItemList>
                        <li>
                            Produced prototypes and designed foundation for
                            enterprise level application
                        </li>
                        <li>
                            Collaborated with business partners, and designers
                            to understand requirements and create solutions
                        </li>
                        <li>
                            Initiated code standards and patterns for developers
                            to follow
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
                            <li>Intermediate course (Feb 1–Apr 15, 2016)</li>
                            <li>Advanced course (May 2–Jul 13, 2016)</li>
                        </ul>
                    </li>
                    <li>
                        Texas State University - Bachelors of Fine Arts,
                        Communication Design (2012) - San Marcos, Texas
                    </li>
                </JobItemList>
                <Alert
                    color="info"
                    title="Interested in learning more about me?"
                >
                    <Link to="/about" className="text-sky-500 underline">
                        See my about page
                    </Link>
                </Alert>
            </div>
        </Panel>
    );
}
