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
import Card from '~/components/Card';
import Panel from '~/components/Panel';
import HoverPanel from '~/components/HoverPanel';

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
            <Linky
                to="https://tidycal.com/sethdavis512"
                className="mb-4 block hover:no-underline"
            >
                <Card className="border-2 border-sky-500 dark:border-sky-500 bg-gradient-to-r from-blue-700 to-teal-700">
                    <p className="text-xl text-white">
                        Interested in talking about a project?{' '}
                        <strong>
                            Click here to schedule a time to meet with me!
                        </strong>
                    </p>
                </Card>
            </Linky>
            <div className="flex flex-col items-start md:flex-row md:gap-4">
                <div className="flex-1">
                    <Panel
                        heading="Projects"
                        icon={<HammerIcon {...largeIconProps} />}
                    >
                        <Flex className="flex-wrap gap-4">
                            <HoverPanel to="/crm" disabled>
                                <Flex>
                                    <UserSearchIcon />
                                    <div>CRM (In progress)</div>
                                </Flex>
                            </HoverPanel>
                            <HoverPanel to="/crm" disabled>
                                <Flex>
                                    <BotIcon />
                                    <div>AI Agents (In progress)</div>
                                </Flex>
                            </HoverPanel>
                        </Flex>
                    </Panel>
                    <Panel
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
                <div className="flex-1">
                    <Panel
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
