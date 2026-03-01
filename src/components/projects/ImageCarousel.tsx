import { X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

import type { ImageItem } from '@/types/projects';

import { MainImage, ThumbnailList } from './carousel';

interface ImageCarouselProps {
  images: ImageItem[];
  initialIndex: number;
  onClose: () => void;
}

export default function ImageCarousel({
  images,
  initialIndex,
  onClose,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  // 키보드 이벤트 및 스크롤 방지
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, handlePrev, handleNext]);

  return (
    <div className="fixed inset-0 z-50 flex h-screen flex-col items-center justify-center bg-black/80">
      {/* 닫기 버튼 */}
      <div className="absolute top-0 left-0 z-10 w-full">
        <button
          className="hover:text-accent-4 text-accent-1 flex h-[60px] w-full items-center gap-1.5 px-10 transition-all duration-300 hover:cursor-pointer"
          onClick={onClose}
        >
          <p className="text-2xl font-bold">닫기</p>
          <X className="size-10" />
        </button>
      </div>

      <div
        className="bg-gray9 border-accent-2 absolute bottom-0 flex h-[calc(100vh-60px)] w-full flex-col border-t p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 현재 인덱스 표시 */}
        <div className="z-10 text-end text-white">
          <span className="text-main">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        {/* 썸네일 목록 */}
        <ThumbnailList
          images={images}
          currentIndex={currentIndex}
          onThumbnailClick={handleThumbnailClick}
        />

        {/* 메인 이미지 */}
        <MainImage
          images={images}
          currentIndex={currentIndex}
          onPrev={handlePrev}
          onNext={handleNext}
        />

        {/* 이미지 설명 */}
        {images[currentIndex]?.caption && (
          <div className="bg-gray8 my-10 rounded-lg p-2 text-center">
            <p className="text-gray1">{images[currentIndex].caption}</p>
          </div>
        )}
      </div>
    </div>
  );
}
