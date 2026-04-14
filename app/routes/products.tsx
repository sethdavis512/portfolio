import { ShoppingCart } from 'lucide-react';
import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { ServicesCallToAction } from '~/components/ServicesCallToAction';
import { getPublishedProducts } from '~/content';
import { Heading } from '~/components/Heading';
import { Linky } from '~/components/Linky';
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

export function loader() {
    const products = getPublishedProducts().map((w) => ({
        id: w.slug,
        title: w.frontmatter.title,
        slug: w.frontmatter.slug,
        description: w.frontmatter.description,
        purchaseUrl: w.frontmatter.purchaseUrl,
        purchaseButtonText: w.frontmatter.purchaseButtonText,
        features: w.frontmatter.features,
        thumbnailImage: w.frontmatter.thumbnailImage
    }));
    return { products };
}

interface ProductItem {
    id: string;
    title?: string | null;
    slug?: string | null;
    description?: string | null;
    purchaseUrl?: string | null;
    purchaseButtonText?: string | null;
    features?: string[];
    thumbnailImage?: string | null;
}

function ProductCard({ product }: { product: ProductItem }) {
    const detailUrl = `/work/${product.slug}`;
    const imageSrc = product.thumbnailImage || '';
    const features = product.features ?? [];

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
                    {features.map(function (feature) {
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
                <div className="flex flex-wrap gap-3">
                    <Button
                        to={detailUrl}
                        color="primary"
                        variant="outline"
                        className="flex-1 justify-center"
                    >
                        Learn More
                    </Button>
                    {product.purchaseUrl ? (
                        <Button
                            href={product.purchaseUrl}
                            color="primary"
                            iconBefore={
                                <ShoppingCart className="w-4 h-4" />
                            }
                            className="flex-1 justify-center"
                        >
                            {product.purchaseButtonText || 'Buy Now'}
                        </Button>
                    ) : null}
                </div>
            </div>
        </Card>
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
            </div>
            <ServicesCallToAction className="mt-10" />
        </>
    );
}
