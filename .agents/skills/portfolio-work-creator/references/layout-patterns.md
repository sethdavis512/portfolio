# Work Page Layout Patterns

Work pages in the portfolio follow established patterns. Choose the pattern that best fits the content.

## Pattern 1: TechShowcase Layout (Recommended for Most Projects)

Best for: Products, SaaS applications, technical projects with clear value propositions.

```tsx
import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Project Name',
        descriptionContent: 'Brief description for SEO',
        ogUrl: 'https://sethdavis.tech/project-slug'
    });
}

export default function ProjectRoute() {
    return (
        <>
            <HeroImage 
                src="/project-slug-hero.webp" 
                alt="Project Name" 
                responsive 
            />
            <TechShowcase
                title="Project Name"
                about="Comprehensive project overview. Focus on what it is, what it does, and the technical implementation."
                learned="What was learned building this project. Focus on technical insights, architectural decisions, and new skills acquired."
                value="The impact and value for portfolio. How this demonstrates capabilities, what it showcases to potential clients/employers."
                sourceUrl="https://github.com/username/repo" // optional
                demoUrl="https://demo.example.com" // optional
                demoUrlText="See it live" // optional, defaults to "See the demo"
                techStack={
                    <TechStackLogos
                        logos={['typescript', 'react', 'react-router']}
                    />
                }
            />
        </>
    );
}
```

### TechShowcase Props

- `title` (required): Project title
- `about` (required): Project overview paragraph
- `learned` (required): Knowledge gained paragraph  
- `value` (required): Portfolio impact paragraph
- `techStack` (optional): JSX element, typically `<TechStackLogos />`
- `sourceUrl` (optional): GitHub or source code URL
- `demoUrl` (optional): Live demo URL
- `demoUrlText` (optional): Custom text for demo link

## Pattern 2: Custom Grid Layout (For Complex Pages)

Best for: Products with forms, CTAs, marketing content, or unique layouts.

```tsx
import { Heading } from '~/components/Heading';
import { Card } from '~/components/Card';
import { HeroImage } from '~/components/HeroImage';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Project Name',
        descriptionContent: 'Brief description',
        ogUrl: 'https://sethdavis.tech/project-slug'
    });
}

export default function ProjectRoute() {
    return (
        <>
            <HeroImage 
                src="/project-slug-hero.webp" 
                alt="Project Name"
                responsive
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4 min-w-0">
                    <Heading as="h1">Project Name</Heading>
                    
                    <Heading as="h2" size="5">
                        Project Overview
                    </Heading>
                    <p className="break-words">
                        Project description...
                    </p>
                    
                    <Heading as="h2" size="5">
                        Knowledge Gained
                    </Heading>
                    <p className="break-words">
                        What was learned...
                    </p>
                    
                    <Heading as="h2" size="5">
                        The Impact
                    </Heading>
                    <p className="break-words">
                        Portfolio value...
                    </p>
                </div>
                
                <div className="md:col-span-1 space-y-4 min-w-0">
                    <Heading as="h4" size="5" className="font-bold">
                        Tech Stack
                    </Heading>
                    <Card className="flex flex-wrap gap-3">
                        <TechStackLogos
                            logos={['typescript', 'react']}
                        />
                    </Card>
                    
                    {/* Custom sidebar content */}
                </div>
            </div>
        </>
    );
}
```

## Pattern 3: Image Gallery Integration (Optional Enhancement)

Add image galleries to any pattern for projects with multiple screenshots.

```tsx
import { HeroImage } from '~/components/HeroImage';
import { ImageGalleryModal } from '~/components/ImageGalleryModal';
import { ImageThumbnails } from '~/components/ImageThumbnails';
import { useImageGallery } from '~/hooks/useImageGallery';

const PROJECT_IMAGES = [
    { src: '/project-hero.webp', alt: 'Main view' },
    { src: '/project-screen-1.webp', alt: 'Feature 1' },
    { src: '/project-screen-2.webp', alt: 'Feature 2' }
];

export default function ProjectRoute() {
    const { isOpen, selectedIndex, openGallery, closeGallery } = useImageGallery();
    
    return (
        <>
            <HeroImage
                src="/project-hero.webp"
                alt="Project Name"
                clickable
                onClick={() => openGallery(0)}
                imageCount={PROJECT_IMAGES.length}
                responsive
            />
            
            {/* Main content */}
            
            <ImageThumbnails
                images={PROJECT_IMAGES.slice(1)}
                onImageClick={(index) => openGallery(index + 1)}
            />
            
            <ImageGalleryModal
                images={PROJECT_IMAGES}
                isOpen={isOpen}
                onClose={closeGallery}
                initialIndex={selectedIndex}
            />
        </>
    );
}
```

## Image Requirements

Every work item needs:

1. **Hero image**: `/project-slug-hero.webp` (primary format) or `.png`
   - Main featured image shown at top
   - MUST use `responsive` prop on `<HeroImage>` component
   - See [IMAGE_OPTIMIZATION.md](../../../docs/IMAGE_OPTIMIZATION.md)

2. **Thumbnail**: `/project-slug-thumbnail.webp`
   - Used on /work page grid
   - Optimized for smaller display

3. **Gallery images** (optional): `/project-slug-descriptor.webp`
   - Additional screenshots or views
   - Naming: `project-slug-[descriptor].webp`

All images stored in `web/public/`.

## Available Tech Stack Logos

Common logos available in `TechStackLogos` component:

- `'typescript'`, `'javascript'`
- `'react'`, `'react-router'`  
- `'tailwind'`, `'daisy'`
- `'postgres'`, `'prisma'`
- `'better-auth'`, `'polar'`
- `'railway'`, `'cloudinary'`
- `'trigger'`, `'remotion'`

Check the component file for the complete list.

## SEO Meta Configuration

Use `generateRouteMeta` utility:

```tsx
export function meta() {
    return generateRouteMeta({
        pageTitle: 'Project Name',
        descriptionContent: 'One-sentence description optimizing for keywords',
        ogUrl: 'https://sethdavis.tech/project-slug',
        ogImage: 'https://sethdavis.tech/og/custom-og-image.webp' // optional
    });
}
```

### Meta Best Practices

- **pageTitle**: Just the project name (site name added automatically)
- **descriptionContent**: 150-160 characters, action-oriented
- **ogUrl**: Full canonical URL
- **ogImage**: Custom OG image (optional, defaults to generated image)
