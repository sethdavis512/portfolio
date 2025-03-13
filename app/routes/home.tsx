import Heading from '~/components/Heading';
import type { Route } from './+types/home';
import Linky from '~/components/Linky';
import Flex from '~/components/Flex';
import {
    BookHeartIcon,
    BookUserIcon,
    BotIcon,
    CableIcon,
    CodepenIcon,
    Github,
    HammerIcon,
    HandshakeIcon,
    KeySquareIcon,
    LaughIcon,
    Linkedin,
    ScrollText,
    Share2Icon,
    Twitter,
    UserSearchIcon,
    WaypointsIcon
} from 'lucide-react';
import { largeIconProps } from '~/constants';
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
                    `My name is Seth Davis. I am a Senior Front-End Engineer living in Austin, Texas. While I do enjoy all varieties of front-end technologies, I'm most passionate about `,
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
                        heading="Projects"
                        icon={<HammerIcon {...largeIconProps} />}
                    >
                        <Flex className="flex-wrap gap-4">
                            <HoverPanel
                                external
                                to="https://crm.sethdavis.tech/"
                            >
                                <Flex>
                                    <UserSearchIcon />
                                    <div>CRM (WIP)</div>
                                </Flex>
                            </HoverPanel>
                            <HoverPanel to="ai.sethdavis.tech" disabled>
                                <Flex>
                                    <BotIcon />
                                    <div>AI Agents (In progress)</div>
                                </Flex>
                            </HoverPanel>
                        </Flex>
                    </Panel>
                    <Panel
                        className="flex-1"
                        heading="Shareables"
                        icon={<Share2Icon {...largeIconProps} />}
                    >
                        <Flex className="flex-wrap gap-4">
                            <HoverPanel
                                external
                                to="https://sethdavis512.github.io/custom-file-generator-guide/"
                            >
                                <Flex>
                                    <BookHeartIcon />
                                    <div>Custom Plop.js (Guide)</div>
                                </Flex>
                            </HoverPanel>
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
                                to="https://github.com/sethdavis512"
                            >
                                <Flex>
                                    <Github />
                                    <div>GitHub</div>
                                </Flex>
                            </HoverPanel>
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
                                to="https://codepen.com/sethdavis512"
                            >
                                <Flex>
                                    <CodepenIcon />
                                    <div>Codepen</div>
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
                        </Flex>
                    </Panel>
                </div>
            </div>
        </>
    );
}
