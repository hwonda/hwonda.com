import { useRef } from 'react';

import { useSwipe } from '@/hooks';
import type { ImageItem } from '@/types/projects';

interface MainImageProps {
  images: ImageItem[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function MainImage({
  images,
  currentIndex,
  onPrev,
  onNext,
}: MainImageProps) {
  const mainImageRef = useRef<HTMLDivElement>(null);

  const { swipeOffset, isDragging, handlers } = useSwipe({
    onPrev,
    onNext,
    maxOffset: 200,
  });

  return (
    <div
      ref={mainImageRef}
      className="relative flex max-h-[calc(100vh-340px)] shrink-0 items-center justify-center overflow-hidden"
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      {...handlers}
    >
      <div
        className="flex h-full w-full items-center justify-center transition-transform duration-200"
        style={{ transform: `translateX(${swipeOffset}px)` }}
      >
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].caption || `이미지 ${currentIndex + 1}`}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  );
}
