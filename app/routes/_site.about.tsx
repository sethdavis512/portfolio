import { QuoteIcon } from 'lucide-react';
import { ReactNode } from 'react';
import ExternalLink, {
    EXTERNAL_LINK_CLASS_NAME,
} from '~/components/ExternalLink';
import Heading from '~/components/Heading';
import Panel from '~/components/Panel';
import { BORDER_COLOR, largeIconProps } from '~/constants';
import profilePhoto from '../images/austfin-fc-profile.jpg';
import { Link } from '@remix-run/react';
import { Alert } from '@lemonsqueezy/wedges';

const Blurb = ({ children }: { children: ReactNode }) => (
    <p className="ml-8 md:ml-10">{children}</p>
);

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
                        className={`h-24 w-24 rounded-full ${BORDER_COLOR}`}
                        src={profilePhoto}
                        alt="Seth Davis wearing an Austin FC hat in front of the Austin FC stadium"
                    />
                }
                heading="About me"
            >
                <ul className="space-y-8">
                    <li>
                        <Heading size="3" className="mb-2">
                            ✌🏻 Native Austinite
                        </Heading>
                        <Blurb>{`I've lived in Austin for 30+ years`}</Blurb>
                    </li>
                    <li>
                        <Heading size="3" className="mb-2">
                            ⚽️ Austin FC supporter
                        </Heading>
                        <Blurb>
                            <ExternalLink to="https://www.austinfc.com/">{`Verde hasta la muerte`}</ExternalLink>
                        </Blurb>
                    </li>
                    <li>
                        <Heading size="3" className="mb-2">
                            💿 Remix fanatic
                        </Heading>
                        <Blurb>
                            <ExternalLink to="https://remix.run/">
                                {`Build better websites`}
                            </ExternalLink>
                        </Blurb>
                    </li>
                    <li>
                        <Heading size="3" className="mb-2">
                            💻 Learner
                        </Heading>
                        <Blurb>Prisma / Docker / SQLite / Postgres</Blurb>
                    </li>
                    <li>
                        <Heading size="3" className="mb-2">
                            ⚡️ Electric vehicle enthusiast
                        </Heading>
                        <Blurb>{`I'm a Rivian fan`}</Blurb>
                    </li>
                    <li>
                        <Heading size="3" className="mb-2">
                            💪🏻 CrossFit member
                        </Heading>
                        <Blurb>{`Lifting for almost 2 years`}</Blurb>
                    </li>
                    <li>
                        <Heading size="3" className="mb-2">
                            🪑 Woodworker
                        </Heading>
                        <Blurb>{`I've built a shed, entertainment center, entry table`}</Blurb>
                    </li>
                    <li>
                        <Heading size="3" className="mb-2">
                            📅 Meetup goer
                        </Heading>
                        <Blurb>
                            <ExternalLink to="https://www.meetup.com/remix-austin/">
                                Remix Austin
                            </ExternalLink>
                            {` / `}
                            <ExternalLink to="https://www.meetup.com/austin-code-mentorship/">
                                Austin Code Mentorship
                            </ExternalLink>
                        </Blurb>
                    </li>
                    <li>
                        <Heading size="3" className="mb-2">
                            🎮 Gamer
                        </Heading>
                        <Blurb>{`Rocket League. No Man's Sky. MW3.`}</Blurb>
                    </li>
                </ul>
            </Panel>
            <Alert color="success" title="Looking for my resume?">
                <Link to="/resume" className={EXTERNAL_LINK_CLASS_NAME}>
                    See my work experience
                </Link>
            </Alert>
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
                </ul>
            </Panel>
        </>
    );
}
