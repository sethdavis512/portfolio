import { CircleUser } from 'lucide-react';
import { ReactNode } from 'react';
import ExternalLink from '~/components/ExternalLink';
import Heading from '~/components/Heading';
import Panel from '~/components/Panel';
import { largeIconProps } from '~/constants';

const Blurb = ({ children }: { children: ReactNode }) => (
    <p className="ml-8 sm:ml-11">{children}</p>
);

export default function AboutRoute() {
    return (
        <Panel icon={<CircleUser {...largeIconProps} />} heading="About">
            <ul className="space-y-12">
                <li>
                    <Heading size="3" className="mb-4">
                        ✌🏻 Native Austinite
                    </Heading>
                    <Blurb>{`I've lived in Austin for 30+ years`}</Blurb>
                </li>
                <li>
                    <Heading size="3" className="mb-4">
                        ⚽️ Supporter of the{' '}
                        <ExternalLink to="https://www.austinfc.com/">
                            Austin FC
                        </ExternalLink>
                    </Heading>
                    <Blurb>{`Verde hasta la muerte`}</Blurb>
                </li>
                <li>
                    <Heading size="3" className="mb-4">
                        💿 Fanatic of{' '}
                        <ExternalLink to="https://remix.run/">
                            Remix
                        </ExternalLink>
                    </Heading>
                    <Blurb>{`Build better websites`}</Blurb>
                </li>
                <li>
                    <Heading size="3" className="mb-4">
                        ⚡️ Enthusiast of electric vehicles
                    </Heading>
                    <Blurb>{`I'm a Rivian fan`}</Blurb>
                </li>
                <li>
                    <Heading size="3" className="mb-4">
                        💪🏻 CrossFit member
                    </Heading>
                    <Blurb>{`Lifting for almost 2 years`}</Blurb>
                </li>
            </ul>
        </Panel>
    );
}
