import { ChevronLeft, ChevronRight, X } from 'lucide-react';
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

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // 모달 열릴 때 스크롤 방지

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; // 모달 닫힐 때 스크롤 복원
    };
  }, [onClose]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div
        className="bg-background relative flex max-h-[90vh] w-[90vw] flex-col rounded-md p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          className="bg-gray8 hover:bg-accent-1 text-main absolute top-[-48px] right-6 z-10 flex items-center gap-2 rounded-full p-2 pl-3.5 transition-all duration-300 hover:cursor-pointer"
          onClick={onClose}
        >
          닫기
          <X className="text-main size-6" />
        </button>

        {/* 메인 이미지 */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={captions?.[currentIndex] || `이미지 ${currentIndex + 1}`}
            className="max-h-[70vh] max-w-full object-contain"
          />
          {/* 이전/다음 버튼 */}
          <button
            type="button"
            className="bg-gray8 hover:bg-accent-2 text-main absolute left-0 rounded-full p-2 transition-all duration-300 hover:cursor-pointer sm:left-4"
            onClick={handlePrev}
          >
            <ChevronLeft className="text-main ml-[-2px] size-6" />
          </button>
          <button
            className="bg-gray8 hover:bg-accent-2 text-main absolute right-0 rounded-full p-2 transition-all duration-300 hover:cursor-pointer sm:right-4"
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
              className={`h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                currentIndex === index
                  ? 'border-accent-1'
                  : 'border-transparent'
              }`}
            >
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
