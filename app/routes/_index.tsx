import type { MetaFunction } from '@vercel/remix';

import type { ReactNode } from 'react';
import {
    BookIcon,
    ExternalLink,
    Github,
    InfoIcon,
    Link as LinkIcon,
    Linkedin,
    MessageCircle,
    Search,
    Twitter
} from 'lucide-react';
import Logo from '~/components/Logo';

export const meta: MetaFunction = () => {
    return [
        { title: 'Seth Davis Portfolio' },
        { name: 'description', content: "Welcome to Seth Davis' portfolio" }
    ];
};

function SpacedStack({ children }: { children: ReactNode }) {
    return <div className="space-y-12">{children}</div>;
}

function ContentContainer({ children }: { children: ReactNode }) {
    return <div className="max-w-4xl p-8 sm:p-12 mx-auto">{children}</div>;
}

export default function Index() {
    return (
        <>
            <div className="bg-[url('https://res.cloudinary.com/setholito/image/upload/v1486354320/portfolio/geometry-hero.jpg')] text-white">
                <ContentContainer>
                    <div className="w-12 h-12">
                        <Logo fill="#fff" />
                    </div>
                </ContentContainer>
            </div>
            <ContentContainer>
                <div className="md:grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                        <SpacedStack>
                            <section>
                                <h3 className="flex gap-2 items-center text-4xl font-bold mb-4">
                                    <InfoIcon className="w-8 h-8" />
                                    About me
                                </h3>
                                <ul className="flex flex-col gap-2 flex-wrap">
                                    <li>✌🏻 Native Austinite</li>
                                    <li>
                                        🧑🏻‍💻 Senior User Experience Developer at{' '}
                                        <a
                                            className="inline-flex gap-2 text-green-500 hover:text-green-300 underline"
                                            href="https://www.indeed.com/"
                                        >
                                            Indeed
                                            <ExternalLink />
                                        </a>
                                    </li>
                                    <li>
                                        💿 Huge fan of{' '}
                                        <a
                                            className="inline-flex gap-2 text-green-500 hover:text-green-300 underline"
                                            href="https://remix.run/"
                                        >
                                            Remix
                                            <ExternalLink />
                                        </a>{' '}
                                    </li>
                                    <li>⚡️ EV enthusiast</li>
                                </ul>
                            </section>
                            <section>
                                <h3 className="flex gap-2 items-center text-4xl mb-4 font-bold">
                                    <Search className="w-8 h-8" />
                                    Observe
                                </h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://dev.to/sethdavis512"
                                        className="inline-flex gap-2 text-green-500 hover:text-green-300 underline"
                                    >
                                        Blog
                                        <ExternalLink />
                                    </a>
                                    <a
                                        href="https://github.com/sethdavis512"
                                        className="inline-flex gap-2 text-green-500 hover:text-green-300 underline"
                                    >
                                        Code
                                        <ExternalLink />
                                    </a>
                                </div>
                            </section>
                            <section>
                                <h3 className="flex gap-2 items-center text-4xl mb-4 font-bold">
                                    <BookIcon className="w-8 h-8" />
                                    Learn
                                </h3>
                                <div>
                                    <a
                                        href="https://sethdavis512.github.io/custom-file-generator-guide/"
                                        className="inline-flex gap-2 text-green-500 hover:text-green-300 underline"
                                    >
                                        Custom file generator
                                        <ExternalLink />
                                    </a>
                                </div>
                            </section>
                            <section>
                                <h3 className="flex gap-2 items-center text-4xl mb-4 font-bold">
                                    <LinkIcon className="w-8 h-8" />
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
                    <div className="col-span-6">
                        <h3 className="flex gap-2 items-center text-4xl mb-4 font-bold">
                            <MessageCircle className="w-8 h-8" />
                            Inspirational quotes
                        </h3>
                        <SpacedStack>
                            <blockquote>
                                "Nothing in the world can take the place of
                                Persistence. Talent will not; nothing is more
                                common than unsuccessful men with talent. Genius
                                will not; unrewarded genius is almost a proverb.
                                Education will not; the world is full of
                                educated derelicts. Persistence and
                                determination alone are omnipotent."
                                <br />
                                <br />
                                <span className="italic">
                                    — Calvin Coolidge
                                </span>
                            </blockquote>

                            <blockquote>
                                "We are what we repeatedly do. Excellence, then,
                                is not an act, but a habit."
                                <br />
                                <br />
                                <span className="italic">— Will Durant</span>
                            </blockquote>

                            <blockquote>
                                "You don't wait until you're confident enough to
                                take action. You build your confidence as a
                                result of taking action."
                                <br />
                                <br />
                                <span className="italic">— Jill Coleman</span>
                            </blockquote>
                        </SpacedStack>
                    </div>
                </div>
            </ContentContainer>
        </>
    );
}
