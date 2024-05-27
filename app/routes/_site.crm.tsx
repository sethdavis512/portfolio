import { HammerIcon } from 'lucide-react';

import Flex from '~/components/Flex';
import MongoLogo from '~/components/MongoLogo';
import Panel from '~/components/Panel';
import PrismaLogo from '~/components/PrismaLogo';
import ReactLogo from '~/components/ReactLogo';
import RemixLogo from '~/components/RemixLogo';
import WedgesLogo from '~/components/WedgesLogo';
import { largeIconProps } from '~/constants';

export default function CRMRoute() {
    const logoProps = { className: 'h-10 w-10' };

    return (
        <Panel
            icon={<HammerIcon {...largeIconProps} />}
            heading="Customer Relations Manager"
        >
            <p className="mb-4">Stack:</p>
            <Flex className="mb-8 gap-4">
                <ReactLogo {...logoProps} />
                <RemixLogo {...logoProps} />
                <WedgesLogo {...logoProps} />
                <PrismaLogo {...logoProps} />
                <MongoLogo {...logoProps} />
            </Flex>
            <p>I did a lot of work on this.</p>
        </Panel>
    );
}
