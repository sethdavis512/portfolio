import { Heading } from '~/components/Heading';
import { Linky } from '~/components/Linky';
import { getUniqueId } from '~/utils/common';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Setup',
        descriptionContent:
            'Explore the development setup, tools, and workflow of Seth Davis, a skilled frontend engineer with expertise in React and modern web development.',
        ogUrl: 'https://sethdavis.tech/setup'
    });
}

export default function SetupRoute() {
    const setup = [
        {
            name: `2023 16" MacBook Pro M2 Max 32GB / 1TB Storage`
        },
        {
            name: `Apple Wireless Keyboard`
        },
        {
            name: `LG 27" UltraFine 5K Display (Layoff gift from Indeed)`,
            url: `https://www.lg.com/us/monitors/lg-27md5kl-b-5k-uhd-led-monitor`
        },
        {
            name: `Logitech MX Master 3 Wireless Mouse`,
            url: `https://www.logitech.com/en-us/mx/mx-for-mac.html`
        },
        {
            name: `Elgato Stream Deck Mini`,
            url: `https://www.elgato.com/us/en/p/stream-deck-mini`
        },
        {
            name: `Blue Yeti Nano USB Microphone`,
            url: `https://www.logitechg.com/en-us/products/streaming-gear/yeti-nano-usb-microphone.html`
        },
        {
            name: `Rain Design mStand Laptop Stand`,
            url: `https://www.raindesigninc.com/buy/mstand.html`
        }
    ].map((upgrade) => ({
        ...upgrade,
        id: getUniqueId('setup')
    }));

    return (
        <>
            <Heading as="h1" className="mb-4">
                Setup
            </Heading>
            <p className="mb-4">{`I've been an Apple fan for a while. I'm deep in the ecosystem 🔓`}</p>
            <ul className="space-y-4 list-disc list-inside">
                {setup.map((item) => (
                    <li key={item.id}>
                        {item.url ? (
                            <Linky external to={item.url}>
                                {item.name}
                            </Linky>
                        ) : (
                            item.name
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
