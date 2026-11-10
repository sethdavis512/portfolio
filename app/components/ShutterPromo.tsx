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
                'p-0 overflow-hidden grid md:grid-cols-2 border-transparent dark:border-transparent bg-origin-border bg-linear-to-tr from-tertiary-400 to-primary-400',
                className
            )}
        >
            <div className="p-8 md:p-10 flex flex-col">
                <span className="text-xs font-semibold tracking-wide text-zinc-900 mb-3">
                    New · Claude Code plugin
                </span>
                <Heading className="text-4xl md:text-5xl text-black dark:text-black">
                    Shutter
                </Heading>
                <p className="mb-4 text-lg text-zinc-900">
                    Screenshots, looping GIFs, and showcase videos of your web
                    app from one sentence. Claude drives a real browser and
                    hands you the file.
                </p>
                <p className="mb-8 text-sm text-zinc-900">
                    $19 one-time, all 1.x updates included.
                </p>
                <div className="mt-auto flex flex-col sm:flex-row gap-4">
                    <Button
                        color="ink"
                        size="lg"
                        href={`${STOREFRONT_URL}/shutter?${UTM}`}
                        iconAfter={<ArrowRight className="size-4" />}
                    >
                        Get Shutter
                    </Button>
                    <Button
                        color="ink"
                        size="lg"
                        variant="outline"
                        to="/til/browser-capture-with-agent-browser"
                    >
                        How it works
                    </Button>
                </div>
                <p className="mt-6 text-sm text-zinc-900">
                    Want to read first?{' '}
                    <Linky
                        href={`${STOREFRONT_URL}/shutter-guide?${UTM}`}
                        data-ph-capture-attribute-promo="shutter-guide"
                        className="text-black dark:text-black decoration-black/50 hover:text-black dark:hover:text-black hover:decoration-black"
                    >
                        The Shutter Guide is free
                    </Linky>
                </p>
            </div>
            <div className="flex items-end pl-8 md:pl-0 md:pt-10">
                <img
                    src="https://res.cloudinary.com/setholito/image/upload/f_auto,q_auto,c_scale,w_960/v1/portfolio/shutter-digital-goods-tour-poster.jpg"
                    alt="A frame from a Shutter showcase video: the Tech with Seth digital goods page with Shutter's cursor"
                    width={960}
                    height={540}
                    loading="lazy"
                    className="w-full h-auto rounded-tl-lg border-t border-l border-black/20 shadow-2xl"
                />
            </div>
        </Card>
    );
}
