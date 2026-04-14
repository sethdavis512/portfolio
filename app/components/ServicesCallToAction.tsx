import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { Heading } from '~/components/Heading';

interface ServicesCallToActionProps {
    className?: string;
}

export function ServicesCallToAction({
    className
}: ServicesCallToActionProps) {
    return (
        <Card
            className={`overflow-hidden bg-zinc-900 text-white ${className ?? ''}`.trim()}
        >
            <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                    <Heading as="h2" size="4" className="text-white">
                        Looking for a technical partner on your next project?
                    </Heading>
                    <p className="text-sm text-zinc-300">
                        I help founders and teams ship polished React
                        applications and AI-powered tools.
                    </p>
                </div>
                <Button to="/services" color="primary" className="shrink-0">
                    Reach out
                </Button>
            </div>
        </Card>
    );
}
