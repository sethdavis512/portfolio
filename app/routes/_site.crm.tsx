import { HammerIcon } from 'lucide-react';
import Panel from '~/components/Panel';
import { largeIconProps } from '~/constants';

export default function CRMRoute() {
    return (
        <Panel
            icon={<HammerIcon {...largeIconProps} />}
            heading="Customer Relations Manager"
        >
            <div className="space-y-8">asdf</div>
        </Panel>
    );
}
