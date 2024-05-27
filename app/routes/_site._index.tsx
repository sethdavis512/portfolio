import { LinksFunction } from '@remix-run/node';
import { MetaFunction } from '@remix-run/react';
import {
    BookHeartIcon,
    CircleUser,
    CodepenIcon,
    ContactIcon,
    Github,
    HammerIcon,
    HandIcon,
    HandshakeIcon,
    Linkedin,
    NotebookPenIcon,
    ScrollText,
    Share,
    Twitter,
} from 'lucide-react';
import Panel from '~/components/Panel';
import HoverPanel from '~/components/HoverPanel';
import { largeIconProps } from '~/constants';
import Flex from '~/components/Flex';

export const meta: MetaFunction = () => {
    return [
        { title: 'Seth Davis Portfolio' },
        { name: 'description', content: "Welcome to Seth Davis' portfolio" },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico',
        },
    ];
};

export default function Index() {
    return (
        <>
            <Panel heading="Welcome" icon={<HandIcon {...largeIconProps} />}>
                <Flex className="gap-4">
                    <HoverPanel to="/resume">
                        <Flex>
                            <div>
                                <ScrollText className="stroke-green-500" />
                            </div>
                            <div>Resume</div>
                        </Flex>
                    </HoverPanel>
                    <HoverPanel to="/about">
                        <Flex>
                            <div>
                                <CircleUser className="stroke-green-500" />
                            </div>
                            <div>About</div>
                        </Flex>
                    </HoverPanel>
                </Flex>
            </Panel>
            {/* <Panel heading="Projects" icon={<HammerIcon {...largeIconProps} />}>
                <HoverPanel to="/crm">
                    <Flex>
                        <div>
                            <ContactIcon className="stroke-green-500" />
                        </div>
                        <div>Customer Relations Manager</div>
                    </Flex>
                </HoverPanel>
            </Panel> */}
            <Panel heading="Shareables" icon={<Share {...largeIconProps} />}>
                <Flex className="gap-4">
                    <HoverPanel external to="https://dev.to/sethdavis512">
                        <Flex>
                            <div>
                                <NotebookPenIcon className="stroke-sky-500" />
                            </div>
                            <div>Blog</div>
                        </Flex>
                    </HoverPanel>
                    <HoverPanel
                        external
                        to="https://sethdavis512.github.io/custom-file-generator-guide/"
                    >
                        <Flex>
                            <div>
                                <BookHeartIcon className="stroke-sky-500" />
                            </div>
                            <div>Custom File Generator (Guide)</div>
                        </Flex>
                    </HoverPanel>
                </Flex>
            </Panel>
            <Panel
                heading="Socials"
                icon={<HandshakeIcon {...largeIconProps} />}
            >
                <Flex className="gap-4">
                    <HoverPanel external to="https://github.com/sethdavis512">
                        <Flex>
                            <div>
                                <Github className="stroke-sky-500" />
                            </div>
                            <div>GitHub</div>
                        </Flex>
                    </HoverPanel>
                    <HoverPanel
                        external
                        to="https://www.linkedin.com/in/sethdavis512/"
                    >
                        <Flex>
                            <div>
                                <Linkedin className="stroke-sky-500" />
                            </div>
                            <div>LinkedIn</div>
                        </Flex>
                    </HoverPanel>
                    <HoverPanel external to="https://codepen.com/sethdavis512">
                        <Flex>
                            <div>
                                <CodepenIcon className="stroke-sky-500" />
                            </div>
                            <div>Codepen</div>
                        </Flex>
                    </HoverPanel>
                    <HoverPanel external to="https://twitter.com/sethdavis512">
                        <Flex>
                            <div>
                                <Twitter className="stroke-sky-500" />
                            </div>
                            <div>Twitter</div>
                        </Flex>
                    </HoverPanel>
                </Flex>
            </Panel>
        </>
    );
}
