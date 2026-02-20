import { useRef } from 'react';

import NavButton from '@/components/common/NavButton';
import { useSwipe } from '@/hooks';

interface MainImageProps {
  images: string[];
  captions?: string[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function MainImage({
  images,
  captions,
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
          src={images[currentIndex]}
          alt={captions?.[currentIndex] || `이미지 ${currentIndex + 1}`}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <NavButton
        direction="prev"
        onClick={onPrev}
        className="absolute left-0 opacity-70 sm:left-4"
        size="lg"
      />
      <NavButton
        direction="next"
        onClick={onNext}
        className="absolute right-0 opacity-70 sm:right-4"
        size="lg"
      />
    </div>
  );
}
