import { useEffect, useRef } from 'react';

import type { ImageItem } from '@/types/projects';

interface ThumbnailListProps {
  images: ImageItem[];
  currentIndex: number;
  onThumbnailClick: (index: number) => void;
}

export default function ThumbnailList({
  images,
  currentIndex,
  onThumbnailClick,
}: ThumbnailListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // 현재 선택된 썸네일이 보이도록 스크롤 조정
  useEffect(() => {
    if (!containerRef.current || !thumbnailRefs.current[currentIndex]) return;

    const container = containerRef.current;
    const thumbnail = thumbnailRefs.current[currentIndex];

    if (!thumbnail) return;

    const containerRect = container.getBoundingClientRect();
    const thumbnailRect = thumbnail.getBoundingClientRect();

    if (thumbnailRect.left < containerRect.left) {
      container.scrollLeft += thumbnailRect.left - containerRect.left - 12;
    } else if (thumbnailRect.right > containerRect.right) {
      container.scrollLeft += thumbnailRect.right - containerRect.right + 12;
    }
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      className="flex shrink-0 gap-2 overflow-x-auto scroll-smooth py-4"
    >
      {images.map((image, index) => (
        <button
          key={`thumbnail-${index}`}
          ref={(el) => {
            thumbnailRefs.current[index] = el;
          }}
          onClick={() => onThumbnailClick(index)}
          className={`relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
            currentIndex === index ? 'border-accent-1' : 'border-transparent'
          }`}
        >
          {currentIndex === index && (
            <div className="bg-accent-1/20 absolute inset-0" />
          )}
          <img
            src={image.url}
            alt={image.caption || `썸네일 ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </button>
      ))}
    </div>
  );
}
