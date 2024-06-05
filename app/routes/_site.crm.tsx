import { HammerIcon } from 'lucide-react';

import ExternalLink from '~/components/ExternalLink';
import Flex from '~/components/Flex';
import Panel from '~/components/Panel';
import ReactLogo from '~/components/ReactLogo';
import RemixLogo from '~/components/RemixLogo';
import SupabaseLogo from '~/components/SupabaseLogo';
import WedgesLogo from '~/components/WedgesLogo';
import { BORDER_COLOR, largeIconProps } from '~/constants';
import twsCrmScreenshotLight from '../images/20240604-tws-crm-light.png';
import twsCrmScreenshotDark from '../images/20240604-tws-crm-dark.png';
import Heading from '~/components/Heading';
import { Tooltip } from '@lemonsqueezy/wedges';
import { Link } from '@remix-run/react';

export default function CRMRoute() {
    const logoProps = { className: 'h-6 w-6' };

    return (
        <Panel
            icon={<HammerIcon {...largeIconProps} />}
            heading="Customer Relations Manager"
            className="space-y-6"
        >
            <Flex className="gap-4">
                <div>
                    <p>Stack:</p>
                </div>
                <Tooltip content="React">
                    <a
                        href="https://react.dev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <ReactLogo {...logoProps} />
                    </a>
                </Tooltip>
                <Tooltip content="Remix">
                    <a
                        href="https://remix.run/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <RemixLogo {...logoProps} />
                    </a>
                </Tooltip>
                <Tooltip content="Wedges UI">
                    <a
                        href="https://www.lemonsqueezy.com/wedges"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <WedgesLogo {...logoProps} />
                    </a>
                </Tooltip>
                <Tooltip content="Supabase">
                    <a
                        href="https://supabase.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SupabaseLogo {...logoProps} />
                    </a>
                </Tooltip>
            </Flex>
            <img
                className={`w-full ${BORDER_COLOR} rounded-lg dark:hidden`}
                src={twsCrmScreenshotLight}
                alt="Screenshot of browser displaying Tech with Seth Customer Relations Manager web application"
            />
            <img
                className={`w-full ${BORDER_COLOR} rounded-lg light:hidden`}
                src={twsCrmScreenshotDark}
                alt="Screenshot of browser displaying Tech with Seth Customer Relations Manager web application"
            />
            <Heading>Description</Heading>
            <p>
                This ongoing project is a showcase of my web development skills,
                combining functionality, design, and user experience to explore
                the software-as-a-service space. As I continue to work on this
                project, I aim to demonstrate my ability to build a
                user-friendly and visually appealing platform that delivers
                value to the end user.
            </p>
            <p>
                Revisit this site as I intend to improve on it as frequently as
                possible, and thank you for your interest in my work!
            </p>
            <Heading>Features</Heading>
            <ul className="list-inside list-disc space-y-2">
                <li>Company directory</li>
                <li>Customer directory</li>
                <li>Deals listing (Coming soon)</li>
                <li>Leads listing (Coming soon)</li>
            </ul>
            <Heading>Shareables</Heading>
            <Flex className="flex-col items-start">
                <ExternalLink to="https://github.com/sethdavis512/tws-crm">
                    View the code
                </ExternalLink>
                <ExternalLink to="https://tws-crm.fly.dev/">
                    Visit the project
                </ExternalLink>
            </Flex>
        </Panel>
    );
}
