import { QuoteIcon } from 'lucide-react';

import { BorderStyles, largeIconProps } from '~/constants';
import Panel from '~/components/Panel';
import profilePhoto from '~/images/austfin-fc-profile.jpg';
import Linky from '~/components/Linky';
import Card from '~/components/Card';
import Heading from '~/components/Heading';

export function meta() {
    return [
        { title: `About Seth Davis` },
        {
            name: 'description',
            content: `Seth Davis is a frontend software engineer based in Austin, Texas. He is passionate about building web applications with React Router 7`
        }
    ];
}

const Quote = ({ quote, author }: { quote: string; author: string }) => (
    <blockquote className="border-l-4 pl-6">
        <p className="mb-2">{`"${quote}"`}</p>
        <footer>
            <cite className="text-sm">— {author}</cite>
        </footer>
    </blockquote>
);

export default function AboutRoute() {
    return (
        <>
            <Panel
                icon={
                    <img
                        className={`h-24 w-24 rounded-full ${BorderStyles.DEFAULT}`}
                        src={profilePhoto}
                        alt="Seth Davis wearing an Austin FC hat in front of the Austin FC soccer stadium"
                    />
                }
                heading="About me"
                className="mb-4"
            >
                <div className="flex gap-4">
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
                                    💿{' '}
                                    <span className="line-through">Remix</span>{' '}
                                    React Router fanatic
                                </Heading>
                                <p>
                                    <Linky
                                        external
                                        to="https://reactrouter.com/"
                                    >
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
                                    All things AI / Prisma / Postgres / Docker /
                                    Go / Python
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
                                <p>{`Lifting for almost 2.5 years`}</p>
                            </Card>
                        </li>
                        <li>
                            <Card>
                                <Heading as="h3" size="4" className="mb-2">
                                    🪑 Woodworker
                                </Heading>
                                <p>{`Built: Shed / Entertainment center / Entry table`}</p>
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
            </Panel>
            {/* <Callout.Root color="green" className="mb-4">
                <Callout.Icon>
                    <InfoIcon />
                </Callout.Icon>
                <Callout.Text>
                    <Linky to="/resume">See my work experience</Linky>
                </Callout.Text>
            </Callout.Root> */}
            <Panel
                icon={<QuoteIcon {...largeIconProps} />}
                heading="Motivation"
            >
                <ul className="space-y-8">
                    <li>
                        <Quote
                            quote="Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. Persistence and determination alone are omnipotent."
                            author="Calvin Coolidge"
                        />
                    </li>
                    <li>
                        <Quote
                            quote="We are what we repeatedly do. Excellence, then, is not an
            act, but a habit."
                            author="Will Durant"
                        />
                    </li>
                    <li>
                        <Quote
                            quote="Excuses make today easy but tomorrow harder. Discipline
                makes today hard but tomorrow easier."
                            author="Anonymous"
                        />
                    </li>
                    <li>
                        <Quote
                            quote="I have not failed. I've just found 10,000 ways that won't
                work."
                            author="Thomas A. Edison"
                        />
                    </li>
                    <li>
                        <Quote
                            quote="A goal without a plan is just a wish."
                            author="Antoine de
                Saint-Exupery"
                        />
                    </li>
                    <li>
                        <Quote
                            quote="You don't wait until you're confident enough to take
                action. You build your confidence as a result of taking
                action."
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
            </Panel>
        </>
    );
}
