import { Alert } from '@lemonsqueezy/wedges';
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
            <div className="space-y-8">
                <Alert color="success" title="Looking for a PDF version?">
                    <ExternalLink to="https://www.dropbox.com/scl/fi/1mobb9qfh58hc8msguivt/20240514-seth-davis-resume.pdf?rlkey=837povd4hh923v7he4ahjwf50&dl=0">
                        Download it here
                    </ExternalLink>
                </Alert>
                <Heading as="h3" size="3">
                    Frontend Engineer Skills
                </Heading>
                <div className="flex gap-2 items-center flex-wrap">
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
                <Heading as="h3" size="3">
                    Experience
                </Heading>
                <JobItem
                    company="Indeed, Inc"
                    dates="Jan 2023 - May 2024 (1 yr 5 mos)"
                    title="Senior User Experience Developer"
                >
                    <JobItemList>
                        <li>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Consequatur, architecto, aperiam dolor
                            similique hic reprehenderit nostrum quibusdam atque
                            impedit quasi nisi odio ut sunt. Nobis at cum
                            eligendi odio quos!
                        </li>
                        <li>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Consequatur, architecto, aperiam dolor
                            similique hic reprehenderit nostrum quibusdam atque
                            impedit quasi nisi odio ut sunt. Nobis at cum
                            eligendi odio quos!
                        </li>
                        <li>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Consequatur, architecto, aperiam dolor
                            similique hic reprehenderit nostrum quibusdam atque
                            impedit quasi nisi odio ut sunt. Nobis at cum
                            eligendi odio quos!
                        </li>
                    </JobItemList>
                </JobItem>
                <JobItem
                    company="Indeed, Inc"
                    dates="Jan 2020 - Jan 2023 (3 yrs 1 mo)"
                    title="User Experience Developer"
                >
                    <JobItemList>
                        <li>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Consequatur, architecto, aperiam dolor
                            similique hic reprehenderit nostrum quibusdam atque
                            impedit quasi nisi odio ut sunt. Nobis at cum
                            eligendi odio quos!
                        </li>
                        <li>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Consequatur, architecto, aperiam dolor
                            similique hic reprehenderit nostrum quibusdam atque
                            impedit quasi nisi odio ut sunt. Nobis at cum
                            eligendi odio quos!
                        </li>
                        <li>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Consequatur, architecto, aperiam dolor
                            similique hic reprehenderit nostrum quibusdam atque
                            impedit quasi nisi odio ut sunt. Nobis at cum
                            eligendi odio quos!
                        </li>
                    </JobItemList>
                </JobItem>
                <JobItem
                    company="Indeed, Inc"
                    dates="Feb 2019 - Jan 2020 (11 mos)"
                    title="Associate User Experience Developer"
                >
                    <JobItemList>
                        <li>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Consequatur, architecto, aperiam dolor
                            similique hic reprehenderit nostrum quibusdam atque
                            impedit quasi nisi odio ut sunt. Nobis at cum
                            eligendi odio quos!
                        </li>
                        <li>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Consequatur, architecto, aperiam dolor
                            similique hic reprehenderit nostrum quibusdam atque
                            impedit quasi nisi odio ut sunt. Nobis at cum
                            eligendi odio quos!
                        </li>
                        <li>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Consequatur, architecto, aperiam dolor
                            similique hic reprehenderit nostrum quibusdam atque
                            impedit quasi nisi odio ut sunt. Nobis at cum
                            eligendi odio quos!
                        </li>
                    </JobItemList>
                </JobItem>
                <JobItem
                    company="NIC Inc."
                    dates="Jan 2018 - Feb 2019 (1 yr 2 mos)"
                    title="User Experience Developer"
                >
                    <JobItemList>
                        <li>
                            Built an enterprise platform for consumers to build
                            applications for their constituents
                        </li>
                        <li>
                            Partnered with team members to improve the
                            operations and documentation of application
                        </li>
                        <li>
                            Participated in recurring UX developer forums to
                            enhance codebase
                        </li>
                    </JobItemList>
                </JobItem>
                <JobItem
                    company="Texas NIC"
                    dates="Apr 2017 - Dec 2017 (9 mos)"
                    title="User Experience Developer"
                >
                    <JobItemList>
                        <li>
                            Built an enterprise platform for consumers to build
                            applications for their constituents
                        </li>
                        <li>
                            Partnered with team members to improve the
                            operations and documentation of application
                        </li>
                        <li>
                            Participated in recurring UX developer forums to
                            enhance codebase
                        </li>
                    </JobItemList>
                </JobItem>
            </div>
        </Panel>
    );
}
