import { Images } from 'lucide-react';

interface Image {
    src: string;
    alt: string;
}

interface ImageThumbnailsProps {
    images: Image[];
    onImageClick: (index: number) => void;
}

export function ImageThumbnails({
    images,
    onImageClick
}: ImageThumbnailsProps) {
    if (images.length === 0) {
        return null;
    }

    return (
        <div className="mt-16 mb-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 mb-6">
                <Images className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">
                    Project Gallery
                </h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    Click to view full size
                </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => onImageClick(index)}
                        className="group relative aspect-video overflow-hidden rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 cursor-pointer transition-all hover:opacity-80 hover:border-zinc-400 dark:hover:border-zinc-600"
                        type="button"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="p-2.5 rounded-full bg-black/80 backdrop-blur-sm">
                                <Images className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
