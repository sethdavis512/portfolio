import { LinksFunction } from '@remix-run/node';
import { MetaFunction } from '@remix-run/react';
import {
    BookHeartIcon,
    CircleUser,
    CodepenIcon,
    Github,
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
                <HoverPanel
                    icon={<ScrollText className="stroke-green-500" />}
                    text="Resume"
                    to="/resume"
                />
                <HoverPanel
                    icon={<CircleUser className="stroke-green-500" />}
                    text="About"
                    to="/about"
                />
                {/* <HoverPanel
                    icon={<BookOpen className="stroke-green-500" />}
                    text="Resources"
                    to="/resources"
                /> */}
            </Panel>
            <Panel heading="Shareables" icon={<Share {...largeIconProps} />}>
                <HoverPanel
                    external
                    icon={<NotebookPenIcon className="stroke-sky-500" />}
                    text="Blog"
                    to="https://dev.to/sethdavis512"
                />
                <HoverPanel
                    external
                    icon={<BookHeartIcon className="stroke-sky-500" />}
                    text="CFG"
                    to="https://sethdavis512.github.io/custom-file-generator-guide/"
                />
            </Panel>
            <Panel
                heading="Socials"
                icon={<HandshakeIcon {...largeIconProps} />}
                flexWrapperClassName="flex-wrap"
            >
                <HoverPanel
                    external
                    icon={<Github className="stroke-sky-500" />}
                    text="GitHub"
                    to="https://github.com/sethdavis512"
                />
                <HoverPanel
                    external
                    icon={<Linkedin className="stroke-sky-500" />}
                    to="https://www.linkedin.com/in/sethdavis512/"
                    text="LinkedIn"
                />
                <HoverPanel
                    external
                    icon={<CodepenIcon className="stroke-sky-500" />}
                    text="Codepen"
                    to="https://codepen.com/sethdavis512"
                />
                <HoverPanel
                    external
                    icon={<Twitter className="stroke-sky-500" />}
                    text="Twitter"
                    to="https://twitter.com/sethdavis512"
                />
            </Panel>
        </>
    );
}
