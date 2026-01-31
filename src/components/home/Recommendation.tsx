import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import type { MouseEvent, TouchEvent } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { recommendations } from '@/constants/recommendationsConst';

const AUTO_SLIDE_INTERVAL = 5000; // 5초

export default function Recommendation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 터치/드래그 관련
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const minSwipeDistance = 50;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? recommendations.length - 1 : prev - 1,
    );
    setProgress(0);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === recommendations.length - 1 ? 0 : prev + 1,
    );
    setProgress(0);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // 자동 슬라이드 + 프로그레스 바
  useEffect(() => {
    if (isPaused) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + 100 / (AUTO_SLIDE_INTERVAL / 50);
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isPaused, handleNext]);

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
    const currentOffset = touchEndX.current - touchStartX.current;
    const maxOffset = 150;
    const limitedOffset = Math.max(
      Math.min(currentOffset, maxOffset),
      -maxOffset,
    );
    setSwipeOffset(limitedOffset);
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchEndX.current - touchStartX.current;
    setSwipeOffset(0);
    setIsPaused(false);

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  // 마우스 이벤트 핸들러 (PC용)
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    touchStartX.current = e.clientX;
    setIsDragging(true);
    setIsPaused(true);
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    touchEndX.current = e.clientX;
    const currentOffset = touchEndX.current - touchStartX.current;
    const maxOffset = 150;
    const limitedOffset = Math.max(
      Math.min(currentOffset, maxOffset),
      -maxOffset,
    );
    setSwipeOffset(limitedOffset);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    const swipeDistance = touchEndX.current - touchStartX.current;
    setIsDragging(false);
    setSwipeOffset(0);
    setIsPaused(false);

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setSwipeOffset(0);
    }
    setIsPaused(false);
  };

  const currentRecommendation = recommendations[currentIndex];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-paperlogy mb-12 text-3xl font-bold md:text-4xl">
          동료 평가
        </h2>

        <div
          ref={containerRef}
          className="group relative mx-auto max-w-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseLeave}
        >
          {/* 좌우 네비게이션 버튼 - lg 이상: 카드 외부 */}
          <button
            type="button"
            onClick={handlePrev}
            onMouseDown={(e) => e.stopPropagation()}
            className="bg-gray8 hover:bg-accent-1 absolute top-1/2 z-10 hidden -translate-y-1/2 rounded-full p-2 transition-all duration-300 lg:left-[-60px] lg:block lg:opacity-70 lg:hover:opacity-100"
          >
            <ChevronLeft className="text-main size-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            onMouseDown={(e) => e.stopPropagation()}
            className="bg-gray8 hover:bg-accent-1 absolute top-1/2 z-10 hidden -translate-y-1/2 rounded-full p-2 transition-all duration-300 lg:right-[-60px] lg:block lg:opacity-70 lg:hover:opacity-100"
          >
            <ChevronRight className="text-main size-5" />
          </button>

          {/* 메인 카드 영역 */}
          <div
            className="bg-gray9 relative cursor-grab overflow-hidden rounded-2xl border border-gray-700 p-6 select-none sm:p-8 md:p-10"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {/* 인용부호 아이콘 */}
            <Quote className="text-accent-1 mb-4 size-8 opacity-80 sm:size-10" />

            {/* 평가 내용 */}
            <div
              className="transition-transform duration-200"
              style={{ transform: `translateX(${swipeOffset}px)` }}
            >
              <p className="text-gray1 mb-8 min-h-[120px] text-base leading-relaxed sm:text-lg md:min-h-[100px]">
                "{currentRecommendation.content}"
              </p>

              {/* 구분선 */}
              <div className="bg-gray7 mb-6 h-px w-full" />

              {/* 평가자 정보 */}
              <div className="flex items-center gap-4">
                {/* 아바타 플레이스홀더 */}
                <div className="from-accent-1 to-accent-4 flex size-12 items-center justify-center rounded-full bg-gradient-to-br">
                  <span className="text-lg font-bold text-white">
                    {currentRecommendation.name.charAt(0)}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-main font-bold">
                    {currentRecommendation.name}
                  </span>
                  <span className="text-gray3 text-sm">
                    {currentRecommendation.role}
                    {currentRecommendation.company &&
                      ` · ${currentRecommendation.company}`}
                  </span>
                  <span className="text-accent-2 text-xs">
                    {currentRecommendation.relationship}
                  </span>
                </div>
              </div>
            </div>

            {/* 좌우 네비게이션 버튼 - sm~lg: 카드 내부, 호버 시에만 표시 */}
            <button
              type="button"
              onClick={handlePrev}
              onMouseDown={(e) => e.stopPropagation()}
              className="bg-gray8 hover:bg-accent-1 absolute top-1/2 left-4 hidden -translate-y-1/2 rounded-full p-2 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:block lg:hidden"
            >
              <ChevronLeft className="text-main size-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              onMouseDown={(e) => e.stopPropagation()}
              className="bg-gray8 hover:bg-accent-1 absolute top-1/2 right-4 hidden -translate-y-1/2 rounded-full p-2 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:block lg:hidden"
            >
              <ChevronRight className="text-main size-5" />
            </button>
          </div>

          {/* 하단 인디케이터 영역 */}
          <div className="mt-6 flex flex-col items-center gap-4">
            {/* Dot 인디케이터 */}
            <div className="flex gap-2">
              {recommendations.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleDotClick(index)}
                  className={`relative h-2 overflow-hidden rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-gray6 w-8'
                      : 'bg-gray7 hover:bg-gray5 w-2'
                  }`}
                >
                  {/* 현재 활성화된 dot에 프로그레스 표시 */}
                  {currentIndex === index && (
                    <div
                      className="from-accent-1 to-accent-2 absolute inset-y-0 left-0 rounded-full bg-gradient-to-r transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* 현재 위치 표시 */}
            <span className="text-gray4 text-sm">
              <span className="text-accent-1">{currentIndex + 1}</span> /{' '}
              {recommendations.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
