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
import Divider from '~/components/Divider';
import Heading from '~/components/Heading';

export default function CRMRoute() {
    const logoProps = { className: 'h-10 w-10' };

    return (
        <Panel
            icon={<HammerIcon {...largeIconProps} />}
            heading="Customer Relations Manager"
            className="space-y-6"
        >
            <p>Stack:</p>
            <Flex className="gap-4">
                <ReactLogo {...logoProps} />
                <RemixLogo {...logoProps} />
                <WedgesLogo {...logoProps} />
                <SupabaseLogo {...logoProps} />
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
            <ExternalLink to="https://tws-crm.fly.dev/">
                View the code
            </ExternalLink>
            <ExternalLink to="https://tws-crm.fly.dev/">
                Visit the project
            </ExternalLink>
        </Panel>
    );
}
