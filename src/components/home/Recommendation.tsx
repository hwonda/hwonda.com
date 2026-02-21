import { Quote } from 'lucide-react';
import { useRef } from 'react';

import NavButton from '@/components/common/NavButton';
import ProgressDots from '@/components/common/ProgressDots';
import { recommendations as feRecommendations } from '@/constants/fe/recommendationsConst';
import { recommendations as tpmRecommendations } from '@/constants/tpm/recommendationsConst';
import { useAutoSlide, useSwipe } from '@/hooks';

interface RecommendationProps {
  role: 'fe' | 'tpm';
}

export default function Recommendation({ role }: RecommendationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const recommendations =
    role === 'fe' ? feRecommendations : tpmRecommendations;

  const {
    currentIndex,
    progress,
    handleNext,
    handlePrev,
    handleDotClick,
    setIsPaused,
    resetProgress,
  } = useAutoSlide({
    itemsLength: recommendations.length,
  });

  const { swipeOffset, isDragging, handlers } = useSwipe({
    onPrev: () => {
      handlePrev();
      resetProgress();
    },
    onNext: () => {
      handleNext();
      resetProgress();
    },
    onSwipeStart: () => setIsPaused(true),
    onSwipeEnd: () => setIsPaused(false),
  });

  const currentRecommendation = recommendations[currentIndex];

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => {
    handlers.onMouseLeave();
    setIsPaused(false);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-paperlogy mb-12 text-3xl font-bold md:text-4xl">
          동료 평가
        </h2>

        <div
          ref={containerRef}
          className="group relative mx-auto max-w-3xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* 좌우 네비게이션 버튼 - lg 이상: 카드 외부 */}
          <NavButton
            direction="prev"
            onClick={handlePrev}
            className="absolute top-1/2 z-10 hidden -translate-y-1/2 lg:left-[-60px] lg:block lg:opacity-70 lg:hover:opacity-100"
          />
          <NavButton
            direction="next"
            onClick={handleNext}
            className="absolute top-1/2 z-10 hidden -translate-y-1/2 lg:right-[-60px] lg:block lg:opacity-70 lg:hover:opacity-100"
          />

          {/* 메인 카드 영역 */}
          <div
            className="bg-gray9 relative overflow-hidden rounded-2xl border border-gray-700 p-6 select-none sm:p-8 md:p-10"
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            {...handlers}
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
            <NavButton
              direction="prev"
              onClick={handlePrev}
              className="absolute top-1/2 left-4 hidden -translate-y-1/2 opacity-0 group-hover:opacity-100 sm:block lg:hidden"
            />
            <NavButton
              direction="next"
              onClick={handleNext}
              className="absolute top-1/2 right-4 hidden -translate-y-1/2 opacity-0 group-hover:opacity-100 sm:block lg:hidden"
            />
          </div>

          {/* 하단 인디케이터 영역 */}
          <div className="mt-6 flex flex-col items-center gap-4">
            <ProgressDots
              total={recommendations.length}
              currentIndex={currentIndex}
              progress={progress}
              onDotClick={handleDotClick}
            />

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
