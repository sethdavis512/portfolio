import { ArrowRight } from 'lucide-react';

import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { Heading } from '~/components/Heading';
import { Linky } from '~/components/Linky';
import { cx } from '~/cva.config';

const STOREFRONT_URL = 'https://techwithseth.com/digital-goods';
const UTM = 'utm_source=sethdavis.tech&utm_medium=homepage&utm_campaign=shutter';

type Props = {
    className?: string;
};

export function ShutterPromo({ className }: Props) {
    return (
        <Card
            className={cx(
                'p-0 overflow-hidden grid md:grid-cols-2 border-tertiary-500/40 bg-tertiary-500/10 dark:border-tertiary-500/40 dark:bg-tertiary-500/10',
                className
            )}
        >
            <div className="p-8 md:p-10 flex flex-col">
                <span className="text-xs font-medium tracking-wide text-tertiary-700 dark:text-tertiary-300 mb-3">
                    New · Claude Code plugin
                </span>
                <Heading className="text-4xl md:text-5xl">Shutter</Heading>
                <p className="mb-4 text-lg text-zinc-700 dark:text-zinc-300">
                    Screenshots, looping GIFs, and showcase videos of your web
                    app from one sentence. Claude drives a real browser and
                    hands you the file.
                </p>
                <p className="mb-8 text-sm text-zinc-600 dark:text-zinc-400">
                    $19 one-time, all 1.x updates included.
                </p>
                <div className="mt-auto flex flex-col sm:flex-row gap-4">
                    <Button
                        size="lg"
                        href={`${STOREFRONT_URL}/shutter?${UTM}`}
                        iconAfter={<ArrowRight className="size-4" />}
                    >
                        Get Shutter
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        to="/til/browser-capture-with-agent-browser"
                    >
                        How it works
                    </Button>
                </div>
                <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
                    Want to read first?{' '}
                    <Linky
                        href={`${STOREFRONT_URL}/shutter-guide?${UTM}`}
                        data-ph-capture-attribute-promo="shutter-guide"
                    >
                        The Shutter Guide is free
                    </Linky>
                </p>
            </div>
            <div className="flex items-center p-8 pt-0 md:p-10 md:pl-0">
                <img
                    src="https://res.cloudinary.com/setholito/image/upload/f_auto,q_auto,c_scale,w_960/v1/portfolio/shutter-digital-goods-tour-poster.jpg"
                    alt="A frame from a Shutter showcase video: the Tech with Seth digital goods page with Shutter's cursor"
                    width={960}
                    height={540}
                    loading="lazy"
                    className="w-full h-auto rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm"
                />
            </div>
        </Card>
    );
}
