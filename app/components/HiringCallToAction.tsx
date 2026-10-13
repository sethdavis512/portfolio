import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { Heading } from '~/components/Heading';
import { cx } from '~/cva.config';

type Props = {
    className?: string;
};

export function HiringCallToAction({ className }: Props) {
    return (
        <Card className={cx('overflow-hidden bg-zinc-50 dark:bg-zinc-900', className)}>
            <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                    <Heading as="h2" size="4">
                        Hiring a Design Technologist?
                    </Heading>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        I'm looking for my next role on a product team, building
                        design systems and AI tooling. The resume has the
                        details, and my inbox is open.
                    </p>
                </div>
                <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                    <Button to="/resume" color="primary">
                        View resume
                    </Button>
                    <Button to="/contact" variant="outline">
                        Get in touch
                    </Button>
                </div>
            </div>
        </Card>
    );
}
