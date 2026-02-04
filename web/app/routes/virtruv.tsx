import { HeroImage } from '~/components/HeroImage';
import { ImageGalleryModal } from '~/components/ImageGalleryModal';
import { ImageThumbnails } from '~/components/ImageThumbnails';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';
import { useImageGallery } from '~/hooks/useImageGallery';
import { generateRouteMeta } from '~/utils/seo';

const VIRTRUV_IMAGES = [
    { src: '/virtruv-hero.webp', alt: 'Virtruv Homepage' },
    { src: '/virtruv-hero-cyber-ops.webp', alt: 'Virtruv Cyber Operations' },
    {
        src: '/virtruv-hero-sec-ops.webp',
        alt: 'Virtruv Security Operations'
    },
    { src: '/virtruv-hero-contact.webp', alt: 'Virtruv Contact' }
];

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Virtruv',
        descriptionContent:
            'Complete WordPress website overhaul including brand refinement, visual identity development, and stakeholder collaboration.',
        ogUrl: 'https://sethdavis.tech/virtruv'
    });
}

export default function VirtruvRoute() {
    const { isOpen, selectedIndex, openGallery, closeGallery } =
        useImageGallery();

    return (
        <>
            <HeroImage
                src="/virtruv-hero.webp"
                alt="Virtruv"
                clickable
                onClick={() => openGallery(0)}
                imageCount={VIRTRUV_IMAGES.length}
                responsive
            />
            <TechShowcase
                title="Virtruv"
                about="Virtruv is a custom WordPress website I revitalized, combining technical development with minor graphic design work. The project included crafting the brand's visual identity through logo design changes, color palette development, and imagery curation. Working closely with the business owner, I delivered a modern, professional web presence that accurately represents the company's values and services."
                learned="Partnered directly with the owner throughout the entire project lifecycle, establishing iterative feedback loops that ensured every design decision aligned with the business vision. This close collaboration taught me the importance of translating stakeholder requirements into tangible deliverables while maintaining open communication channels. I gained valuable experience in managing client expectations and incorporating feedback efficiently to keep the project on track."
                value="Delivered a polished website that matched exactly what the client envisioned, strengthening Virtruv's brand presence in their market. The refreshed visual identity and improved user experience position the company to better connect with their target audience. This project demonstrates my ability to handle end-to-end website projects that combine technical implementation with creative design work, all while maintaining strong stakeholder relationships."
                demoUrl="https://virtruv.com"
                demoUrlText="See the site"
                techStack={<TechStackLogos logos={['wordpress', 'css']} />}
            />

            <ImageThumbnails
                images={VIRTRUV_IMAGES.slice(1)}
                onImageClick={(index) => openGallery(index + 1)}
            />

            <ImageGalleryModal
                images={VIRTRUV_IMAGES}
                isOpen={isOpen}
                onClose={closeGallery}
                initialIndex={selectedIndex}
            />
        </>
    );
}
