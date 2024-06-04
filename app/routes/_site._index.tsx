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
    const internalIconProps = {
        className: 'stroke-green-500',
    };

    const externalIconProps = {
        className: 'stroke-sky-500',
    };

    return (
        <>
            <Panel heading="Welcome" icon={<HandIcon {...largeIconProps} />}>
                <Flex className="flex-wrap gap-4">
                    <HoverPanel to="/resume">
                        <Flex>
                            <div>
                                <ScrollText {...internalIconProps} />
                            </div>
                            <div>Resume</div>
                        </Flex>
                    </HoverPanel>
                    <HoverPanel to="/about">
                        <Flex>
                            <div>
                                <CircleUser {...internalIconProps} />
                            </div>
                            <div>About</div>
                        </Flex>
                    </HoverPanel>
                </Flex>
            </Panel>
            <Panel heading="Projects" icon={<HammerIcon {...largeIconProps} />}>
                <Flex className="flex-wrap gap-4">
                    <HoverPanel to="crm">
                        <Flex>
                            <div>
                                <ContactIcon {...internalIconProps} />
                            </div>
                            <div>Customer Relations Manager</div>
                        </Flex>
                    </HoverPanel>
                </Flex>
            </Panel>
            <Panel heading="Shareables" icon={<Share {...largeIconProps} />}>
                <Flex className="flex-wrap gap-4">
                    <HoverPanel external to="https://dev.to/sethdavis512">
                        <Flex>
                            <div>
                                <NotebookPenIcon {...externalIconProps} />
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
                                <BookHeartIcon {...externalIconProps} />
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
                <Flex className="flex-wrap gap-4">
                    <HoverPanel external to="https://github.com/sethdavis512">
                        <Flex>
                            <div>
                                <Github {...externalIconProps} />
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
                                <Linkedin {...externalIconProps} />
                            </div>
                            <div>LinkedIn</div>
                        </Flex>
                    </HoverPanel>
                    <HoverPanel external to="https://codepen.com/sethdavis512">
                        <Flex>
                            <div>
                                <CodepenIcon {...externalIconProps} />
                            </div>
                            <div>Codepen</div>
                        </Flex>
                    </HoverPanel>
                    <HoverPanel external to="https://twitter.com/sethdavis512">
                        <Flex>
                            <div>
                                <Twitter {...externalIconProps} />
                            </div>
                            <div>Twitter</div>
                        </Flex>
                    </HoverPanel>
                </Flex>
            </Panel>
        </>
    );
}
