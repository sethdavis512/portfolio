import { Package, ShoppingCart } from 'lucide-react';
import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { FreelanceCallToAction } from '~/components/FreelanceCallToAction';
import { Heading } from '~/components/Heading';
import { Linky } from '~/components/Linky';
import { PRODUCT_LINKS } from '~/constants';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Products',
        descriptionContent:
            'Digital products and resources by Seth Davis. Practical tools and guides for developers and professionals.',
        ogUrl: 'https://sethdavis.tech/products'
    });
}

interface Product {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    detailUrl: string;
    purchaseUrl: string;
    features: string[];
    hidden?: boolean;
}

const products: Product[] = [
    {
        title: 'Tray App Guide',
        description:
            'Learn to build Electron tray apps with the same patterns used in Prompt Suite. Beginner-friendly guide with practical, working examples.',
        imageSrc: '/optimized/tray-app-guide-cover-web-640w.webp',
        imageAlt: 'Tray App Guide cover',
        detailUrl: '/tray-app-guide',
        purchaseUrl: PRODUCT_LINKS.TRAY_APP_GUIDE,
        features: [
            'Beginner-friendly introduction',
            'Practical examples',
            'Quick start guide'
        ],
        hidden: false
    },
    {
        title: 'Prompt Suite',
        description:
            'Generate polished prompts, PRDs, emails, and marketing copy from your system tray. Pick a category, choose a mode, and go.',
        imageSrc: '/prompt-suite-hero.webp',
        imageAlt: 'Prompt Suite',
        detailUrl: '/prompt-suite',
        purchaseUrl: PRODUCT_LINKS.PROMPT_SUITE,
        features: [
            '33 prompt modes across 8 categories',
            '6 color themes (3 light, 3 dark)',
            'Mac only'
        ],
        hidden: false
    }
];

function ProductCard({ product }: { product: Product }) {
    return (
        <Card className="p-6 space-y-4 flex flex-col">
            <Linky to={product.detailUrl} className="block">
                <figure className="rounded-lg h-87.5 overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src={product.imageSrc}
                        alt={product.imageAlt}
                    />
                </figure>
            </Linky>
            <Heading as="h2" size="3">
                {product.title}
            </Heading>
            <p className="text-zinc-700 dark:text-zinc-300 grow">
                {product.description}
            </p>
            <div className="space-y-3">
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    {product.features.map(function (feature) {
                        return (
                            <div
                                key={feature}
                                className="flex items-start gap-2"
                            >
                                <span className="text-primary">✓</span>
                                <span>{feature}</span>
                            </div>
                        );
                    })}
                </div>
                <div className="flex gap-3">
                    <Linky to={product.detailUrl} className="flex-1">
                        <Button
                            color="primary"
                            variant="outline"
                            className="w-full justify-center"
                        >
                            Learn More
                        </Button>
                    </Linky>
                    <Linky external to={product.purchaseUrl} className="flex-1">
                        <Button
                            color="primary"
                            iconBefore={<ShoppingCart className="w-4 h-4" />}
                            className="w-full justify-center"
                        >
                            Buy Now
                        </Button>
                    </Linky>
                </div>
            </div>
        </Card>
    );
}

function ComingSoonCard() {
    return (
        <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg min-h-[400px] text-center">
            <Package className="w-12 h-12 text-zinc-400 dark:text-zinc-500 mb-4" />
            <Heading
                as="h2"
                size="3"
                className="text-zinc-500 dark:text-zinc-400"
            >
                More Coming Soon
            </Heading>
            <p className="text-zinc-500 dark:text-zinc-500 mt-2 max-w-xs">
                New tools and resources are in the works. Check back soon!
            </p>
        </div>
    );
}

export default function ProductsRoute() {
    return (
        <>
            <div className="space-y-6 mb-8">
                <Heading as="h1">Products</Heading>
                <p className="text-lg text-zinc-600 dark:text-zinc-300">
                    Digital products and resources to help professionals work
                    smarter with AI and modern tools.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products
                    .filter(function (product) {
                        return !product.hidden;
                    })
                    .map(function (product) {
                        return (
                            <ProductCard
                                key={product.title}
                                product={product}
                            />
                        );
                    })}
                <ComingSoonCard />
            </div>
            <FreelanceCallToAction className="mt-10" />
        </>
    );
}
