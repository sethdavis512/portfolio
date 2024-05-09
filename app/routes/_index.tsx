import type { ReactNode } from 'react';
import {
    BlocksIcon,
    BookOpen,
    Github,
    Hammer,
    InfoIcon,
    Link as LinkIcon,
    Linkedin,
    Twitter
} from 'lucide-react';
import { Link, MetaFunction } from '@remix-run/react';
import ContentContainer from '~/components/ContentContainer';
import Layout from '~/components/Layout';
import ExternalLink from '~/components/ExternalLink';

export const meta: MetaFunction = () => {
    return [
        { title: 'Seth Davis Portfolio' },
        { name: 'description', content: "Welcome to Seth Davis' portfolio" }
    ];
};

function SpacedStack({ children }: { children: ReactNode }) {
    return <div className="space-y-12">{children}</div>;
}

export default function Index() {
    return (
        <Layout>
            <ContentContainer>
                <div className="md:grid grid-cols-12 gap-4">
                    <div className="col-span-6 mb-12 md:mb-0">
                        <SpacedStack>
                            <section>
                                <h3 className="flex gap-2 items-center text-2xl font-bold mb-4">
                                    <InfoIcon className="w-5 h-5" />
                                    About
                                </h3>
                                <ul className="space-y-3">
                                    <li>✌🏻 Native Austinite</li>
                                    <li>
                                        🧑🏻‍💻 Senior User Experience Developer at{' '}
                                        <ExternalLink href="https://www.indeed.com/">
                                            Indeed
                                        </ExternalLink>
                                    </li>
                                    <li>
                                        ⚽️ Supporter of the{' '}
                                        <ExternalLink href="https://www.austinfc.com/">
                                            Austin FC
                                        </ExternalLink>
                                    </li>
                                    <li>
                                        💿 Fanatic of{' '}
                                        <ExternalLink href="https://remix.run/">
                                            Remix
                                        </ExternalLink>
                                    </li>
                                    <li>⚡️ Enthusiast of electric vehicles</li>
                                </ul>
                            </section>
                            <section>
                                <h3 className="flex gap-2 items-center text-2xl mb-4 font-bold">
                                    <Hammer className="w-5 h-5" />
                                    Work
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <ExternalLink href="https://dev.to/sethdavis512">
                                            Blog
                                        </ExternalLink>
                                    </li>
                                    <li>
                                        <ExternalLink href="https://github.com/sethdavis512">
                                            Code
                                        </ExternalLink>
                                    </li>
                                </ul>
                            </section>
                        </SpacedStack>
                    </div>
                    <div className="col-span-6">
                        <SpacedStack>
                            <section>
                                <h3 className="flex gap-2 items-center text-2xl mb-4 font-bold">
                                    <BookOpen className="w-5 h-5" />
                                    Resources
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link
                                            to="/tailwind-resources"
                                            className="inline-flex gap-2 text-green-500 hover:text-green-300 underline"
                                        >
                                            Tailwind
                                        </Link>
                                    </li>
                                    <li>
                                        <ExternalLink href="https://github.com/sethdavis512/tws-prototype-template">
                                            Remix prototype template
                                        </ExternalLink>
                                    </li>
                                </ul>
                            </section>
                            <section>
                                <h3 className="flex gap-2 items-center text-2xl mb-4 font-bold">
                                    <BlocksIcon className="w-5 h-5" />
                                    Learn
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <ExternalLink href="https://sethdavis512.github.io/custom-file-generator-guide/">
                                            Custom file generator
                                        </ExternalLink>
                                    </li>
                                    <li>
                                        <ExternalLink href="https://sethdavis512.github.io/reduce-rodeo/">
                                            Reduce Rodeo (in progress)
                                        </ExternalLink>
                                    </li>
                                </ul>
                            </section>
                            <section>
                                <h3 className="flex gap-2 items-center text-2xl mb-4 font-bold">
                                    <LinkIcon className="w-5 h-5" />
                                    Connect
                                </h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://github.com/sethdavis512"
                                        className="inline-flex gap-2 text-green-500 hover:text-green-300 underline"
                                    >
                                        <Github />
                                    </a>
                                    <a
                                        href="https://twitter.com/sethdavis512"
                                        className="inline-flex gap-2 text-green-500 hover:text-green-300 underline"
                                    >
                                        <Twitter />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/sethdavis512/"
                                        className="inline-flex gap-2 text-green-500 hover:text-green-300 underline"
                                    >
                                        <Linkedin />
                                    </a>
                                </div>
                            </section>
                        </SpacedStack>
                    </div>
                </div>
            </ContentContainer>
        </Layout>
    );
}
