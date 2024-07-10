import { HammerIcon } from 'lucide-react';

import ExternalLink from '~/components/ExternalLink';
import Flex from '~/components/Flex';
import Panel from '~/components/Panel';
import ReactLogo from '~/components/ReactLogo';
import RemixLogo from '~/components/RemixLogo';
import WedgesLogo from '~/components/WedgesLogo';
import { largeIconProps } from '~/constants';
import Heading from '~/components/Heading';
import { Tooltip } from '@lemonsqueezy/wedges';
import MongoLogo from '~/components/MongoLogo';

export default function CRMRoute() {
    const logoProps = { className: 'h-6 w-6' };

    return (
        <Panel
            icon={<HammerIcon {...largeIconProps} />}
            heading="TimeWeaver"
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
                <Tooltip content="MongoDB">
                    <a
                        href="https://www.mongodb.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <MongoLogo {...logoProps} />
                    </a>
                </Tooltip>
            </Flex>
            {/* <img
                className={`w-full ${BORDER_COLOR} rounded-lg dark:hidden`}
                src={twsCrmScreenshotLight}
                alt="Screenshot of browser displaying Tech with Seth Customer Relations Manager web application"
            />
            <img
                className={`w-full ${BORDER_COLOR} rounded-lg light:hidden`}
                src={twsCrmScreenshotDark}
                alt="Screenshot of browser displaying Tech with Seth Customer Relations Manager web application"
            /> */}
            <Heading>Description</Heading>
            <p>🚧 App is currently a work in progress 🚧</p>
            <Heading>Features</Heading>
            <ul className="list-inside list-disc space-y-2">
                <li>View timelines collection</li>
                <li>View timeline of events</li>
            </ul>
            <Heading>Coming soon</Heading>
            <ul className="list-inside list-disc space-y-2">
                <li>Create timelines</li>
                <li>Create timeline events</li>
            </ul>
            <Heading>Shareables</Heading>
            <Flex className="flex-col items-start">
                <ExternalLink to="https://github.com/sethdavis512/time-weaver">
                    View the code
                </ExternalLink>
                <ExternalLink to="https://time-weaver.fly.dev/">
                    Visit the project
                </ExternalLink>
            </Flex>
        </Panel>
    );
}
