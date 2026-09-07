import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { Heading } from '~/components/Heading';
import { SCOPE_CALL_URL } from '~/constants';

interface ServicesCallToActionProps {
    className?: string;
}

export function ServicesCallToAction({
    className
}: ServicesCallToActionProps) {
    return (
        <Card
            className={`overflow-hidden bg-zinc-50 dark:bg-zinc-900 ${className ?? ''}`.trim()}
        >
            <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                    <Heading as="h2" size="4">
                        Need a frontend for your Contentful or Sanity
                        build?
                    </Heading>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        I build typed, server-rendered frontends against the
                        content model your team already owns. Every project
                        starts with a free 30-minute scope call.
                    </p>
                </div>
                <Button
                    href={SCOPE_CALL_URL}
                    color="primary"
                    className="shrink-0"
                >
                    Book a scope call
                </Button>
            </div>
        </Card>
    );
}
