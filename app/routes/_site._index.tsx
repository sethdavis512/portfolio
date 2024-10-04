import { LinksFunction } from '@remix-run/node';
import { MetaFunction } from '@remix-run/react';
import {
    BookHeartIcon,
    BookUserIcon,
    CodepenIcon,
    Github,
    HandshakeIcon,
    LaughIcon,
    Linkedin,
    ScrollText,
    Share2Icon,
    Twitter,
} from 'lucide-react';
import { Heading } from '@radix-ui/themes';
import Panel from '~/components/Panel';
import HoverPanel from '~/components/HoverPanel';
import { largeIconProps } from '~/constants';
import Flex from '~/components/Flex';
import ExternalLink from '~/components/ExternalLink';

export const meta: MetaFunction = () => {
    return [
        { title: `Seth Davis' Portfolio` },
        {
            name: 'description',
            content:
                "Welcome to Seth Davis' portfolio. I am a Senior Front-End Engineer living in Austin, Texas, and I am currently looking for a new position. While I do enjoy all varieties of front-end technologies, I'm most passionate about Remix and writing full stack web applications.",
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
    return (
        <>
            <Heading as="h1" size="8" className="mb-4">
                Welcome
            </Heading>
            <p className="pb-4 md:pb-6">
                {[
                    `My name is Seth Davis. I am a Senior Front-End Engineer living in Austin, Texas, and I am currently looking for a new position. While I do enjoy all varieties of front-end technologies, I'm most passionate about `,
                    <ExternalLink to="https://remix.run" key={`remix-link`}>
                        Remix
                    </ExternalLink>,
                    ` and writing full stack web applications.`,
                ]}
            </p>
            <Panel heading="About me" icon={<LaughIcon {...largeIconProps} />}>
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
                    <HoverPanel external to="https://codepen.com/sethdavis512">
                        <Flex>
                            <CodepenIcon />
                            <div>Codepen</div>
                        </Flex>
                    </HoverPanel>
                    <HoverPanel external to="https://twitter.com/sethdavis512">
                        <Flex>
                            <Twitter />
                            <div>Twitter</div>
                        </Flex>
                    </HoverPanel>
                </Flex>
            </Panel>
        </>
    );
}
