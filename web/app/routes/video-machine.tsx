import { HeroImage } from '~/components/HeroImage';
import { ImageGalleryModal } from '~/components/ImageGalleryModal';
import { ImageThumbnails } from '~/components/ImageThumbnails';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';
import { useImageGallery } from '~/hooks/useImageGallery';
import { generateRouteMeta } from '~/utils/seo';

const VIDEO_MACHINE_IMAGES = [
    { src: '/video-machine-hero.webp', alt: 'Video Machine Dashboard' },
    { src: '/video-machine-hero-gallery.webp', alt: 'Video Machine Gallery' },
    { src: '/video-machine-hero-home.webp', alt: 'Video Machine Home' },
    { src: '/video-machine-hero-credits.webp', alt: 'Video Machine Credits' }
];

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Video Machine',
        descriptionContent:
            'A video rendering platform that creates TikTok-style slide videos using Remotion. Features credit-based payments, background processing with Trigger.dev, and Railway S3 storage.',
        ogUrl: 'https://sethdavis.tech/video-machine'
    });
}

export default function VideoMachineRoute() {
    const { isOpen, selectedIndex, openGallery, closeGallery } =
        useImageGallery();

    return (
        <>
            <HeroImage
                src="/video-machine-hero.webp"
                alt="Video Machine"
                clickable
                onClick={() => openGallery(0)}
                imageCount={VIDEO_MACHINE_IMAGES.length}
                responsive
            />
            <TechShowcase
                title="Video Machine"
                about="Video Machine is a comprehensive video rendering platform that transforms content into engaging TikTok-style slide presentations. Built with React Router 7 and Remotion, this application enables users to programmatically generate videos with a credit-based system. The platform integrates Polar for payment processing and authentication, Trigger.dev for reliable background video rendering, and Railway S3 for efficient video storage and delivery. The application demonstrates the power of combining modern web technologies to create a production-ready SaaS solution that handles complex video generation workflows at scale."
                learned="This project deepened my understanding of distributed systems and asynchronous job processing. Working with Remotion revealed the intricacies of server-side video rendering and the challenges of managing long-running processes in a web application. The integration of Trigger.dev taught me valuable lessons about task orchestration, retry strategies, and building resilient background job systems. I explored payment integration patterns with Polar, implementing credit-based systems with webhooks for real-time balance updates. The Railway S3 integration provided insights into efficient file storage strategies and implementing presigned URLs for secure content delivery. Building this platform required careful consideration of user experience during long-running operations, leading to innovations in progress tracking and real-time status updates."
                value="Video Machine showcases my ability to architect and build complete SaaS applications from end to end. It demonstrates technical proficiency across multiple domains: video rendering technology, payment systems integration, distributed task processing, cloud storage, and database management. The project highlights my understanding of production-ready infrastructure patterns, including authentication flows, webhook handling, and error recovery mechanisms. As a portfolio piece, it effectively communicates my capability to build complex, revenue-generating applications that solve real problems while maintaining clean architecture and excellent user experience. The combination of Remotion for rendering, Trigger.dev for reliability, and Polar for monetization represents modern best practices in building scalable web applications."
                techStack={
                    <TechStackLogos
                        logos={[
                            'typescript',
                            'react',
                            'react-router',
                            'remotion',
                            'tailwind',
                            'postgres',
                            'prisma',
                            'polar',
                            'trigger'
                        ]}
                    />
                }
            />
            <ImageThumbnails
                images={VIDEO_MACHINE_IMAGES.slice(1)}
                onImageClick={(index) => openGallery(index + 1)}
            />
            <ImageGalleryModal
                images={VIDEO_MACHINE_IMAGES}
                isOpen={isOpen}
                onClose={closeGallery}
                initialIndex={selectedIndex}
            />
        </>
    );
}
