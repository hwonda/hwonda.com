import { X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

import NavButton from '@/components/common/NavButton';
import type { ImageItem } from '@/types/projects';

import { MainImage, ThumbnailList } from './carousel';

interface ImageCarouselProps {
  images: ImageItem[];
  initialIndex: number;
  isClosing?: boolean;
  onClose: () => void;
  onAnimationEnd?: () => void;
}

export default function ImageCarousel({
  images,
  initialIndex,
  isClosing = false,
  onClose,
  onAnimationEnd,
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
      {/* 좌우 네비게이션 버튼 */}
      <NavButton
        direction="prev"
        onClick={handlePrev}
        className="absolute top-1/2 left-0 z-20 -translate-y-1/2 opacity-70 sm:left-4"
        size="lg"
      />
      <NavButton
        direction="next"
        onClick={handleNext}
        className="absolute top-1/2 right-0 z-20 -translate-y-1/2 opacity-70 sm:right-4"
        size="lg"
      />

      {/* 닫기 버튼 */}
      <div className="absolute top-0 left-0 z-10 w-full hover:bg-black/50">
        <button
          className="hover:text-accent-4 text-accent-1 flex h-[60px] w-full items-center gap-1.5 px-4 transition-all duration-300 hover:cursor-pointer sm:px-10"
          onClick={onClose}
        >
          <p className="text-2xl font-bold">닫기</p>
          <X className="size-10" />
        </button>
      </div>

      <div
        className={`bg-gray9 border-accent-2 absolute bottom-0 flex h-[calc(100vh-60px)] w-full flex-col border-t px-4 py-10 sm:px-10 ${
          isClosing
            ? 'animate-carousel-slide-down'
            : 'animate-carousel-slide-up'
        }`}
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={onAnimationEnd}
      >
        <div className="flex items-center justify-between">
          {/* 현재 인덱스 표시 */}
          <div className="z-10 text-start text-white">
            <span className="text-main">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
          <span className="text-gray3 text-sm">
            화살 좌우키 또는 스와이프로 이미지 이동이 가능합니다.
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
        <div
          className={`bg-gray9 flex h-20 w-full items-center justify-center rounded-lg text-center ${images[currentIndex]?.caption ? 'opacity-100' : 'opacity-0'}`}
        >
          <p className="text-sub text-base sm:text-lg">
            {images[currentIndex].caption}
          </p>
        </div>
      </div>
    </div>
  );
}
