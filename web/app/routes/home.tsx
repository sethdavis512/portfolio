import Heading from '~/components/Heading';
import type { Route } from './+types/home';
import Linky from '~/components/Linky';
import Flex from '~/components/Flex';
import {
    BookHeartIcon,
    BookUserIcon,
    BoxIcon,
    CableIcon,
    Code2Icon,
    CodepenIcon,
    ExternalLinkIcon,
    FileStackIcon,
    Github,
    HandshakeIcon,
    KeySquareIcon,
    LaughIcon,
    Linkedin,
    PaperclipIcon,
    ScrollText,
    TvIcon,
    Twitter,
    WaypointsIcon,
    Zap
} from 'lucide-react';
import { CURRENT_JOB_TITLE, FRONTEND, largeIconProps } from '~/constants';
import Panel from '~/components/Panel';
import HoverPanel from '~/components/HoverPanel';
import Divider from '~/components/Divider';

export function meta({}: Route.MetaArgs) {
    return [
        { title: `Seth Davis' Portfolio` },
        { name: 'description', content: `Welcome to Seth Davis' Portfolio` }
    ];
}

export default function Home() {
    return (
        <>
            <Heading as="h1" size="1" className="mb-4">
                Welcome
            </Heading>
            <p className="pb-4 md:pb-6">
                {[
                    `My name is Seth Davis. I am a ${CURRENT_JOB_TITLE} living in Austin, Texas. While I do enjoy all varieties of ${FRONTEND.toLowerCase()} technologies, I'm most passionate about `,
                    <Linky
                        external
                        to="https://reactrouter.com/"
                        key={`react-router-link`}
                    >
                        React Router
                    </Linky>,
                    ` based full stack web applications.`
                ]}
            </p>
            <Flex className="mb-4">
                <WaypointsIcon {...largeIconProps} />
                <Heading as="h2">Connect</Heading>
            </Flex>
            <p className="mb-4">
                Interested in talking about a project?{' '}
                <Linky to="https://tidycal.com/sethdavis512">
                    Click here to schedule a time to meet with me!
                </Linky>
            </p>
            <Divider className="my-8" />
            <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4 flex-1">
                    <Panel
                        className="flex-1"
                        heading="Tech with Seth"
                        icon={<Code2Icon {...largeIconProps} />}
                    >
                        <Flex className="flex-wrap gap-4">
                            <HoverPanel to="/projects/tws-starter">
                                <Flex>
                                    <Zap />
                                    <div>TWS Starter</div>
                                </Flex>
                            </HoverPanel>
                            <HoverPanel to="/projects/tws-cms">
                                <Flex>
                                    <FileStackIcon />
                                    <div>TWS CMS</div>
                                </Flex>
                            </HoverPanel>
                            <HoverPanel
                                external
                                to="https://github.com/orgs/tech-with-seth/repositories"
                            >
                                <Flex>
                                    <BoxIcon />
                                    <div>Repos</div>
                                </Flex>
                            </HoverPanel>
                            {/* <HoverPanel
                                external
                                to="https://crm.sethdavis.tech/"
                                disabled
                            >
                                <Flex>
                                    <UserSearchIcon />
                                    <div>CRM (WIP)</div>
                                    <ExternalLinkIcon />
                                </Flex>
                            </HoverPanel> */}
                            {/* <HoverPanel
                                external
                                to="https://ai.sethdavis.tech"
                                disabled
                            >
                                <Flex>
                                    <BotIcon />
                                    <div>AI Agents (WIP)</div>
                                    <ExternalLinkIcon />
                                </Flex>
                            </HoverPanel> */}
                        </Flex>
                    </Panel>
                    <Panel
                        className="flex-1"
                        heading="Showcase"
                        icon={<TvIcon {...largeIconProps} />}
                    >
                        <Flex className="flex-wrap gap-4">
                            <HoverPanel
                                external
                                to="https://sethdavis512.github.io/custom-file-generator-guide/"
                            >
                                <Flex>
                                    <BookHeartIcon />
                                    <div>Custom Plop.js (Guide)</div>
                                    <ExternalLinkIcon />
                                </Flex>
                            </HoverPanel>
                            {/* <HoverPanel to="#" disabled>
                                <Flex>
                                    <AxeIcon />
                                    <div>
                                        Woodworker Management System (WIP)
                                    </div>
                                </Flex>
                            </HoverPanel> */}
                        </Flex>
                    </Panel>
                </div>
                <div className="flex flex-col md:flex-row gap-4 flex-1">
                    <Panel
                        className="flex-1"
                        heading="About me"
                        icon={<LaughIcon {...largeIconProps} />}
                    >
                        <Flex className="flex-wrap gap-4">
                            <HoverPanel to="/resume">
                                <Flex>
                                    <ScrollText />
                                    <div>Resume</div>
                                </Flex>
                            </HoverPanel>
                            <HoverPanel to="/about">
                                <Flex>
                                    <BookUserIcon />
                                    <div>Fun facts</div>
                                </Flex>
                            </HoverPanel>
                            <HoverPanel to="/truck">
                                <Flex>
                                    <KeySquareIcon />
                                    <div>Truck stuff</div>
                                </Flex>
                            </HoverPanel>
                            <HoverPanel to="/setup">
                                <Flex>
                                    <CableIcon />
                                    <div>My setup</div>
                                </Flex>
                            </HoverPanel>
                            <HoverPanel to="/blog">
                                <Flex>
                                    <PaperclipIcon />
                                    <div>Blog</div>
                                </Flex>
                            </HoverPanel>
                        </Flex>
                    </Panel>
                    <Panel
                        className="flex-1"
                        heading="Socials"
                        icon={<HandshakeIcon {...largeIconProps} />}
                    >
                        <Flex className="flex-wrap gap-4">
                            <HoverPanel
                                external
                                to="https://www.linkedin.com/in/sethdavis512/"
                            >
                                <Flex>
                                    <Linkedin />
                                    <div>LinkedIn</div>
                                </Flex>
                            </HoverPanel>
                            <HoverPanel
                                external
                                to="https://twitter.com/sethdavis512"
                            >
                                <Flex>
                                    <Twitter />
                                    <div>Twitter</div>
                                </Flex>
                            </HoverPanel>
                            <HoverPanel
                                external
                                to="https://github.com/sethdavis512"
                            >
                                <Flex>
                                    <Github />
                                    <div>GitHub</div>
                                </Flex>
                            </HoverPanel>
                            <HoverPanel
                                external
                                to="https://codepen.com/sethdavis512"
                            >
                                <Flex>
                                    <CodepenIcon />
                                    <div>Codepen</div>
                                </Flex>
                            </HoverPanel>
                            {/* <HoverPanel
                                external
                                to="https://www.youtube.com/@techwithseth"
                                disabled
                            >
                                <Flex>
                                    <YoutubeIcon />
                                    <div>Youtube</div>
                                </Flex>
                            </HoverPanel> */}
                        </Flex>
                    </Panel>
                </div>
            </div>
        </>
    );
}
