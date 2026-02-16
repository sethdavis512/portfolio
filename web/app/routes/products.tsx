import { Package, ShoppingCart } from 'lucide-react';
import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { FreelanceCallToAction } from '~/components/FreelanceCallToAction';
import {
    GetProductsDocument,
    type GetProductsQuery
} from '~/generated/graphql';
import { Heading } from '~/components/Heading';
import { Linky } from '~/components/Linky';
import { client } from '~/utils/graphql.server';
import { generateRouteMeta } from '~/utils/seo';
import type { Route } from './+types/products';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Products',
        descriptionContent:
            'Digital products and resources by Seth Davis. Practical tools and guides for developers and professionals.',
        ogUrl: 'https://sethdavis.tech/products'
    });
}

export async function loader() {
    const data = await client.request<GetProductsQuery>(GetProductsDocument);

    return { products: data.works || [] };
}

interface ProductItem {
    id: string;
    title?: string | null;
    slug?: string | null;
    description?: string | null;
    purchaseUrl?: string | null;
    purchaseButtonText?: string | null;
    features?: unknown;
    thumbnailImage?: {
        publicUrl?: string | null;
        publicUrlTransformed?: string | null;
    } | null;
}

function parseFeatures(features: unknown): string[] {
    if (Array.isArray(features)) return features;
    if (typeof features === 'string') {
        try {
            const parsed = JSON.parse(features);
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            return [];
        }
    }
    return [];
}

function ProductCard({ product }: { product: ProductItem }) {
    const detailUrl = `/work/${product.slug}`;
    const imageSrc =
        product.thumbnailImage?.publicUrlTransformed ||
        product.thumbnailImage?.publicUrl ||
        '';
    const features = parseFeatures(product.features);

    return (
        <Card className="p-6 space-y-4 flex flex-col">
            <Linky to={detailUrl} className="block">
                <figure className="rounded-lg h-87.5 overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src={imageSrc}
                        alt={product.title || 'Product thumbnail'}
                    />
                </figure>
            </Linky>
            <Heading as="h2" size="3">
                {product.title || ''}
            </Heading>
            <p className="text-zinc-700 dark:text-zinc-300 grow">
                {product.description || ''}
            </p>
            <div className="space-y-3">
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    {features.map(
                        function (feature) {
                            return (
                                <div
                                    key={feature}
                                    className="flex items-start gap-2"
                                >
                                    <span className="text-primary">✓</span>
                                    <span>{feature}</span>
                                </div>
                            );
                        }
                    )}
                </div>
                <div className="flex gap-3">
                    <Linky to={detailUrl} className="flex-1">
                        <Button
                            color="primary"
                            variant="outline"
                            className="w-full justify-center"
                        >
                            Learn More
                        </Button>
                    </Linky>
                    {product.purchaseUrl ? (
                        <Linky
                            external
                            to={product.purchaseUrl}
                            className="flex-1"
                        >
                            <Button
                                color="primary"
                                iconBefore={
                                    <ShoppingCart className="w-4 h-4" />
                                }
                                className="w-full justify-center"
                            >
                                {product.purchaseButtonText || 'Buy Now'}
                            </Button>
                        </Linky>
                    ) : null}
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

export default function ProductsRoute({ loaderData }: Route.ComponentProps) {
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
                {loaderData.products.map(function (product) {
                    return <ProductCard key={product.id} product={product} />;
                })}
                <ComingSoonCard />
            </div>
            <FreelanceCallToAction className="mt-10" />
        </>
    );
}
