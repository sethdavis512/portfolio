import { LinksFunction } from '@remix-run/node';
import { MetaFunction } from '@remix-run/react';
import {
    BookHeartIcon,
    BookUserIcon,
    CodepenIcon,
    ContactIcon,
    Github,
    HammerIcon,
    HandshakeIcon,
    LaughIcon,
    Linkedin,
    ScrollText,
    Twitter,
} from 'lucide-react';
import Panel from '~/components/Panel';
import HoverPanel from '~/components/HoverPanel';
import { largeIconProps } from '~/constants';
import Flex from '~/components/Flex';
import Heading from '~/components/Heading';
import ExternalLink from '~/components/ExternalLink';

export const meta: MetaFunction = () => {
    return [
        { title: `Seth Davis' Portfolio` },
        {
            name: 'description',
            content:
                "Welcome to Seth Davis' portfolio. I am a Senior Front-End Engineer living in Austin, Texas, and I am currently looking for a new position. While I do enjoy all varieties of frontend technologies, I'm most passionate about Remix and writing fullstack web applications.",
        },
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
            <Heading as="h1" size="1" className="mb-4">
                Welcome
            </Heading>
            <div className="space-y-2">
                <p className="text-lg">
                    {[
                        `My name is Seth Davis. I am a Senior Front-End Engineer living in Austin, Texas, and I am currently looking for a new position. While I do enjoy all varieties of frontend technologies, I'm most passionate about `,
                        <ExternalLink to="https://remix.run" key={`remix-link`}>
                            Remix
                        </ExternalLink>,
                        ` and writing fullstack web applications.`,
                    ]}
                </p>
            </div>
            <Panel heading="About me" icon={<LaughIcon {...largeIconProps} />}>
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
                                <BookUserIcon {...internalIconProps} />
                            </div>
                            <div>The fun stuff</div>
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
                    {/* <HoverPanel external to="https://dev.to/sethdavis512">
                        <Flex>
                            <div>
                                <NotebookPenIcon {...externalIconProps} />
                            </div>
                            <div>Blog</div>
                        </Flex>
                    </HoverPanel> */}
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
