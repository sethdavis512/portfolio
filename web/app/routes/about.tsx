import { Linky } from '~/components/Linky';
import { Card } from '~/components/Card';
import { Heading } from '~/components/Heading';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'About',
        descriptionContent:
            'Learn about Seth Davis, a passionate Frontend Engineer from Austin, Texas. Austin FC fan, CrossFit member, and React Router enthusiast with 8+ years of experience.',
        ogUrl: 'https://sethdavis.tech/about'
    });
}

function Quote({ quote, author }: { quote: string; author: string }) {
    return (
        <blockquote>
            <p className="mb-2">{`"${quote}"`}</p>
            <footer>
                <cite className="text-sm">— {author}</cite>
            </footer>
        </blockquote>
    );
}

export default function AboutRoute() {
    return (
        <>
            <Heading as="h1" className="mb-8">
                About me
            </Heading>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <ul className="basis-1/2 space-y-4">
                    <li>
                        <Card>
                            <Heading as="h3" size="4" className="mb-2">
                                ✌🏻 Native Austinite
                            </Heading>
                            <p>{`I've lived in Austin for 30+ years`}</p>
                        </Card>
                    </li>
                    <li>
                        <Card>
                            <Heading as="h3" size="4" className="mb-2">
                                ⚽️ Austin FC supporter
                            </Heading>
                            <p>
                                <Linky
                                    external
                                    to="https://www.austinfc.com/"
                                >{`Verde hasta la muerte`}</Linky>
                            </p>
                        </Card>
                    </li>
                    <li>
                        <Card>
                            <Heading as="h3" size="4" className="mb-2">
                                💿 <span className="line-through">Remix</span>{' '}
                                React Router fanatic
                            </Heading>
                            <p>
                                <Linky external to="https://reactrouter.com/">
                                    {`Build better websites`}
                                </Linky>
                            </p>
                        </Card>
                    </li>
                    <li>
                        <Card>
                            <Heading as="h3" size="4" className="mb-2">
                                💻 Learner
                            </Heading>
                            <p>
                                MCP / Generative UI / Postgres / Docker / Go /
                                Python
                            </p>
                        </Card>
                    </li>
                    <li>
                        <Card>
                            <Heading as="h3" size="4" className="mb-2">
                                ⚡️ Electric vehicle enthusiast
                            </Heading>
                            <p>{`I'm a Rivian fan`}</p>
                        </Card>
                    </li>
                </ul>
                <ul className="basis-1/2 space-y-4">
                    <li>
                        <Card>
                            <Heading as="h3" size="4" className="mb-2">
                                💪🏻 CrossFit member
                            </Heading>
                            <p>{`Lifting for 3+ years`}</p>
                        </Card>
                    </li>
                    <li>
                        <Card>
                            <Heading as="h3" size="4" className="mb-2">
                                🤖 A.I. Maniac
                            </Heading>
                            <Linky external to="https://ai-maniacs.com">
                                Mentoring AI professionals
                            </Linky>
                        </Card>
                    </li>
                    <li>
                        <Card>
                            <Heading as="h3" size="4" className="mb-2">
                                📅 Meetup goer
                            </Heading>
                            <p>
                                <Linky
                                    external
                                    to="https://www.meetup.com/remix-austin/"
                                >
                                    Remix Austin
                                </Linky>
                                {` / `}
                                <Linky
                                    external
                                    to="https://www.meetup.com/austin-code-mentorship/"
                                >
                                    Austin Code Mentorship
                                </Linky>
                            </p>
                        </Card>
                    </li>
                    <li>
                        <Card>
                            <Heading as="h3" size="4" className="mb-2">
                                🎮 Gamer
                            </Heading>
                            <p>
                                {`Rocket League / No Man's Sky / `}
                                <Linky
                                    external
                                    to="https://www.xbox.com/en-US/games/store/boomerang-fu/9PJDVRGGFPPH"
                                >
                                    Boomerang Fu
                                </Linky>
                            </p>
                        </Card>
                    </li>
                    <li>
                        <Card>
                            <Heading as="h3" size="4" className="mb-2">
                                🛻 Truck enthusiast
                            </Heading>
                            <p>
                                <Linky to="/truck">I like trucks</Linky>
                            </p>
                        </Card>
                    </li>
                </ul>
            </div>
            <Heading as="h2" className="mb-8">
                Motivation
            </Heading>
            <ul className="space-y-8 mb-8">
                <li>
                    <Quote
                        quote="Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. Persistence and determination alone are omnipotent."
                        author="Calvin Coolidge"
                    />
                </li>
                <li>
                    <Quote
                        quote="We are what we repeatedly do. Excellence, then, is not an act, but a habit."
                        author="Will Durant"
                    />
                </li>
                <li>
                    <Quote
                        quote="Excuses make today easy but tomorrow harder. Discipline makes today hard but tomorrow easier."
                        author="Anonymous"
                    />
                </li>
                <li>
                    <Quote
                        quote="I have not failed. I've just found 10,000 ways that won't work."
                        author="Thomas A. Edison"
                    />
                </li>
                <li>
                    <Quote
                        quote="A goal without a plan is just a wish."
                        author="Antoine de Saint-Exupery"
                    />
                </li>
                <li>
                    <Quote
                        quote="You don't wait until you're confident enough to take action. You build your confidence as a result of taking action."
                        author="Jill Coleman"
                    />
                </li>
                <li>
                    <Quote
                        quote="Impossible is an opinion"
                        author="Wilfred Nancy"
                    />
                </li>
                <li>
                    <Quote
                        quote="I get knocked down, but I get up again...You are never gonna keep me down..."
                        author="Chumbawamba"
                    />
                </li>
            </ul>
            <Heading as="h2" className="mb-8">
                Acknowledgements
            </Heading>
            <p>
                3D images by{' '}
                <Linky external to="https://www.thiings.co/things">
                    thiings.co
                </Linky>
            </p>
        </>
    );
}
