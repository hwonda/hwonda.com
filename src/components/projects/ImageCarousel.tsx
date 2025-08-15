import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { MouseEvent, TouchEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

interface ImageCarouselProps {
  images: string[];
  captions?: string[];
  initialIndex: number;
  onClose: () => void;
}

export default function ImageCarousel({
  images,
  captions,
  initialIndex,
  onClose,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const thumbnailsContainerRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const minSwipeDistance = 50; // 최소 스와이프 거리 (픽셀)
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // 현재 선택된 썸네일이 보이도록 스크롤 조정
  useEffect(() => {
    const scrollToCurrentThumbnail = () => {
      if (
        thumbnailsContainerRef.current &&
        thumbnailRefs.current[currentIndex]
      ) {
        const container = thumbnailsContainerRef.current;
        const thumbnail = thumbnailRefs.current[currentIndex];

        if (!thumbnail) return;

        const containerRect = container.getBoundingClientRect();
        const thumbnailRect = thumbnail.getBoundingClientRect();

        // 썸네일이 컨테이너 왼쪽 바깥에 있는 경우
        if (thumbnailRect.left < containerRect.left) {
          container.scrollLeft += thumbnailRect.left - containerRect.left - 12; // 여백 추가
        }
        // 썸네일이 컨테이너 오른쪽 바깥에 있는 경우
        else if (thumbnailRect.right > containerRect.right) {
          container.scrollLeft +=
            thumbnailRect.right - containerRect.right + 12; // 여백 추가
        }
      }
    };

    scrollToCurrentThumbnail();
  }, [currentIndex]);

  // ESC 키로 모달 닫기
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

    // 마우스 업 이벤트를 전역으로 처리 (드래그 중 화면 밖으로 나갔다가 돌아올 때 대비)
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setSwipeOffset(0);

        if (mainImageRef.current) {
          mainImageRef.current.style.cursor = 'grab';
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.body.style.overflow = 'hidden'; // 모달 열릴 때 스크롤 방지

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.body.style.overflow = ''; // 모달 닫힐 때 스크롤 복원
    };
  }, [onClose, isDragging]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    setIsSwiping(true);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isSwiping) return;

    touchEndX.current = e.touches[0].clientX;
    const currentOffset = touchEndX.current - touchStartX.current;

    // 스와이프 거리에 제한을 둠 (너무 많이 당기지 않도록)
    const maxOffset = 200;
    const limitedOffset = Math.max(
      Math.min(currentOffset, maxOffset),
      -maxOffset,
    );

    setSwipeOffset(limitedOffset);
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchEndX.current - touchStartX.current;

    // 스와이프 애니메이션 초기화
    setIsSwiping(false);
    setSwipeOffset(0);

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // 오른쪽으로 스와이프 - 이전 이미지
        handlePrev();
      } else {
        // 왼쪽으로 스와이프 - 다음 이미지
        handleNext();
      }
    }
  };

  // 마우스 이벤트 핸들러 (PC용)
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    // 좌클릭만 처리 (우클릭은 무시)
    if (e.button !== 0) return;

    touchStartX.current = e.clientX;
    setIsDragging(true);

    // 드래그 중 텍스트 선택 방지
    e.preventDefault();

    // 드래그 중 커서 스타일 변경
    if (mainImageRef.current) {
      mainImageRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    touchEndX.current = e.clientX;
    const currentOffset = touchEndX.current - touchStartX.current;

    // 스와이프 거리에 제한을 둠
    const maxOffset = 200;
    const limitedOffset = Math.max(
      Math.min(currentOffset, maxOffset),
      -maxOffset,
    );

    setSwipeOffset(limitedOffset);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    const swipeDistance = touchEndX.current - touchStartX.current;

    // 드래그 상태 및 애니메이션 초기화
    setIsDragging(false);
    setSwipeOffset(0);

    // 커서 스타일 원래대로 복원
    if (mainImageRef.current) {
      mainImageRef.current.style.cursor = 'grab';
    }

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // 오른쪽으로 드래그 - 이전 이미지
        handlePrev();
      } else {
        // 왼쪽으로 드래그 - 다음 이미지
        handleNext();
      }
    }
  };

  // 마우스가 이미지 영역을 벗어났을 때도 드래그 종료
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setSwipeOffset(0);

      // 커서 스타일 원래대로 복원
      if (mainImageRef.current) {
        mainImageRef.current.style.cursor = 'grab';
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div
        className="bg-background border-accent-2 relative flex max-h-[90vh] w-[90vw] flex-col rounded-md border p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          className="bg-gray8 hover:bg-accent-1 text-main absolute top-[-48px] right-0 z-10 flex w-full items-center justify-center gap-2 rounded-lg p-2 transition-all duration-300 hover:cursor-pointer sm:pl-3.5"
          onClick={onClose}
        >
          <span className="hidden sm:block">닫기</span>
          <X className="text-main size-6" />
        </button>

        {/* 메인 이미지 */}
        <div
          ref={mainImageRef}
          className="relative flex flex-1 cursor-grab items-center justify-center overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={imageContainerRef}
            className="transition-transform duration-200"
            style={{ transform: `translateX(${swipeOffset}px)` }}
          >
            <div className="z-10 text-end text-white">
              {currentIndex + 1} / {images.length}
            </div>
            <img
              src={images[currentIndex]}
              alt={captions?.[currentIndex] || `이미지 ${currentIndex + 1}`}
              className="max-h-[70vh] max-w-full object-contain"
            />
          </div>
          {/* 이전/다음 버튼 */}
          <button
            type="button"
            className="bg-gray8 hover:bg-accent-1 text-main absolute left-0 rounded-full p-2 opacity-70 transition-all duration-300 hover:cursor-pointer sm:left-4"
            onClick={handlePrev}
          >
            <ChevronLeft className="text-main ml-[-2px] size-6" />
          </button>
          <button
            className="bg-gray8 hover:bg-accent-1 text-main absolute right-0 rounded-full p-2 opacity-70 transition-all duration-300 hover:cursor-pointer sm:right-4"
            onClick={handleNext}
          >
            <ChevronRight className="text-main mr-[-2px] size-6" />
          </button>
        </div>

        {/* 이미지 설명 */}
        {captions && captions[currentIndex] && (
          <div className="bg-gray8 mt-4 rounded-lg p-4 text-center">
            <p className="text-gray-1">{captions[currentIndex]}</p>
          </div>
        )}

        {/* 썸네일 목록 */}
        <div
          ref={thumbnailsContainerRef}
          className="mt-4 flex gap-2 overflow-x-auto scroll-smooth pb-2"
        >
          {images.map((image, index) => (
            <button
              key={index}
              ref={(el) => {
                thumbnailRefs.current[index] = el;
              }}
              onClick={() => handleThumbnailClick(index)}
              className={`relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                currentIndex === index
                  ? 'border-accent-1'
                  : 'border-transparent'
              }`}
            >
              {currentIndex === index && (
                <div className="bg-accent-1/20 absolute inset-0" />
              )}
              <img
                src={image}
                alt={`썸네일 ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
