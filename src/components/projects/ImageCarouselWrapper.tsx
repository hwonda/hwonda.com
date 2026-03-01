import { useEffect, useState } from 'react';

import type { ImageItem } from '@/types/projects';

import ImageCarousel from './ImageCarousel';

interface ImageCarouselWrapperProps {
  images: ImageItem[];
}

const ImageCarouselWrapper = ({ images }: ImageCarouselWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  useEffect(() => {
    const imageContainers = document.querySelectorAll('.image-gallery');

    const handleImageClick = (e: Event) => {
      const container = e.currentTarget as HTMLElement;
      const index = parseInt(
        container.getAttribute('data-image-index') || '0',
        10,
      );
      setInitialIndex(index);
      setIsOpen(true);
    };

    imageContainers.forEach((container) => {
      container.addEventListener('click', handleImageClick);
    });

    return () => {
      imageContainers.forEach((container) => {
        container.removeEventListener('click', handleImageClick);
      });
    };
  }, []);

  return isOpen ? (
    <ImageCarousel
      images={images}
      initialIndex={initialIndex}
      onClose={() => setIsOpen(false)}
    />
  ) : null;
};

export default ImageCarouselWrapper;
