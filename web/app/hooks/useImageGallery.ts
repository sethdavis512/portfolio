import { useState, useCallback } from 'react';

interface UseImageGalleryReturn {
    isOpen: boolean;
    selectedIndex: number;
    openGallery: (index: number) => void;
    closeGallery: () => void;
}

export function useImageGallery(): UseImageGalleryReturn {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const openGallery = useCallback((index: number) => {
        setSelectedIndex(index);
        setIsOpen(true);
    }, []);

    const closeGallery = useCallback(() => {
        setIsOpen(false);
    }, []);

    return {
        isOpen,
        selectedIndex,
        openGallery,
        closeGallery
    };
}
