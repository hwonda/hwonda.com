import { ChevronLeft, ChevronRight, Pause, Play, Quote } from 'lucide-react';
import { useRef, useState } from 'react';

import ProgressDots from '@/components/common/ProgressDots';
import { recommendations as feRecommendations } from '@/constants/fe/recommendationsConst';
import { recommendations as tpmRecommendations } from '@/constants/tpm/recommendationsConst';
import { useAutoSlide } from '@/hooks';

interface RecommendationProps {
  role: 'fe' | 'tpm';
}

export default function Recommendation({ role }: RecommendationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wasPlayingBeforeDrag, setWasPlayingBeforeDrag] = useState(true);
  const [dragState, setDragState] = useState({
    isDragging: false,
    startX: 0,
    currentX: 0,
    startTime: 0,
  });

  const recommendations =
    role === 'fe' ? feRecommendations : tpmRecommendations;

  const {
    currentIndex,
    progress,
    isPaused,
    handleNext,
    handlePrev,
    handleDotClick,
    setIsPaused,
    resetProgress,
  } = useAutoSlide({
    itemsLength: recommendations.length,
  });

  // 드래그 핸들러
  const handleDragStart = (clientX: number) => {
    setDragState({
      isDragging: true,
      startX: clientX,
      currentX: clientX,
      startTime: Date.now(),
    });
    setWasPlayingBeforeDrag(!isPaused);
    setIsPaused(true);
  };

  const handleDragMove = (clientX: number) => {
    if (!dragState.isDragging) return;
    setDragState((prev) => ({ ...prev, currentX: clientX }));
  };

  const handleDragEnd = () => {
    if (!dragState.isDragging) return;

    const deltaX = dragState.currentX - dragState.startX;
    const deltaTime = Date.now() - dragState.startTime;
    const velocity = Math.abs(deltaX) / deltaTime;

    const flickThreshold = 0.3;
    const minDistance = 50;

    if (velocity > flickThreshold || Math.abs(deltaX) > minDistance) {
      if (deltaX > 0) {
        handlePrev();
        resetProgress();
      } else {
        handleNext();
        resetProgress();
      }
    }

    setDragState({ isDragging: false, startX: 0, currentX: 0, startTime: 0 });

    if (wasPlayingBeforeDrag) {
      setIsPaused(false);
    }
  };

  // 터치 이벤트
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // 마우스 이벤트
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (dragState.isDragging) {
      handleDragEnd();
    }
  };

  // 일시정지/재생 토글 핸들러
  const handlePausePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (isPaused) {
      handleNext();
      setIsPaused(false);
    } else {
      setIsPaused(true);
    }
  };

  // 키보드 네비게이션 핸들러
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
      resetProgress();
    } else if (e.key === 'ArrowRight') {
      handleNext();
      resetProgress();
    } else if (e.key === ' ') {
      e.preventDefault();
      handlePausePlay();
    }
  };

  // 카드 위치 계산
  const getCardPosition = (index: number) => {
    const total = recommendations.length;
    const isActive = index === currentIndex;
    const isPrev = index === (currentIndex - 1 + total) % total;
    const isNext = index === (currentIndex + 1) % total;

    const dragOffset =
      dragState.isDragging && isActive
        ? dragState.currentX - dragState.startX
        : 0;

    if (isActive) {
      return {
        transform: dragState.isDragging
          ? `translateX(${dragOffset}px) scale(1)`
          : 'translateX(0) scale(1)',
        opacity: 1,
        zIndex: 30,
        pointerEvents: 'auto' as const,
      };
    } else if (isPrev) {
      return {
        transform: 'translateX(-15%) scale(0.92)',
        opacity: 0.35,
        zIndex: 20,
        pointerEvents: 'none' as const,
      };
    } else if (isNext) {
      return {
        transform: 'translateX(15%) scale(0.92)',
        opacity: 0.35,
        zIndex: 20,
        pointerEvents: 'none' as const,
      };
    } else {
      return {
        transform: 'translateX(0) scale(0.85)',
        opacity: 0,
        zIndex: 10,
        pointerEvents: 'none' as const,
      };
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-paperlogy mb-12 text-3xl font-bold md:text-4xl">
          동료 평가
        </h2>

        <div
          ref={containerRef}
          tabIndex={0}
          className="focus:ring-accent-1/50 group relative mx-auto max-w-4xl outline-none focus:rounded-2xl focus:ring-2"
          onKeyDown={handleKeyDown}
        >
          {/* 좌우 네비게이션 버튼 */}
          <button
            type="button"
            className="text-gray4 bg-gray8 hover:from-accent-1 hover:to-accent-2 absolute top-1/2 left-[-20px] z-40 flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-r hover:text-white active:scale-95 lg:left-[-60px]"
            onClick={() => {
              handlePrev();
              resetProgress();
            }}
            aria-label="이전 카드"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            className="text-gray4 bg-gray8 hover:from-accent-1 hover:to-accent-2 absolute top-1/2 right-[-20px] z-40 flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-r hover:text-white active:scale-95 lg:right-[-60px]"
            onClick={() => {
              handleNext();
              resetProgress();
            }}
            aria-label="다음 카드"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* 캐러셀 영역 */}
          <div
            className="relative mx-auto h-[420px] w-full max-w-3xl overflow-visible"
            style={{ cursor: dragState.isDragging ? 'grabbing' : 'grab' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {recommendations.map((recommendation, index) => {
              const position = getCardPosition(index);

              return (
                <div
                  key={recommendation.id}
                  className={`bg-gray9 absolute inset-x-4 top-0 h-full rounded-2xl border border-gray-700 p-6 select-none sm:inset-x-12 sm:p-8 md:p-10 ${
                    dragState.isDragging && index === currentIndex
                      ? ''
                      : 'transition-all duration-500 ease-out'
                  }`}
                  style={{
                    transform: position.transform,
                    opacity: position.opacity,
                    zIndex: position.zIndex,
                    pointerEvents: position.pointerEvents,
                  }}
                >
                  {/* 인용부호 아이콘 */}
                  <Quote className="text-accent-1 mb-4 size-8 opacity-80 sm:size-10" />

                  {/* 평가 내용 */}
                  <p className="text-gray1 mb-6 line-clamp-5 h-[210px] text-base leading-relaxed sm:mb-8 sm:h-[150px] sm:text-lg">
                    &ldquo;{recommendation.content}&rdquo;
                  </p>

                  {/* 구분선 */}
                  <div className="bg-gray7 mb-4 h-px w-full sm:mb-6" />

                  {/* 평가자 정보 */}
                  <div className="flex items-center gap-4">
                    <div className="from-accent-1 to-accent-4 flex size-12 items-center justify-center rounded-full bg-gradient-to-br">
                      <span className="text-lg font-bold text-white">
                        {recommendation.name.charAt(0)}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-main font-bold">
                        {recommendation.name}
                      </span>
                      <span className="text-gray3 text-sm">
                        {recommendation.role}
                        {recommendation.company &&
                          ` · ${recommendation.company}`}
                      </span>
                      <span className="text-accent-2 text-xs">
                        {recommendation.relationship}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 하단 인디케이터 영역 */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              {/* 일시정지/재생 버튼 */}
              <button
                type="button"
                onClick={handlePausePlay}
                className={`text-gray4 hover:text-accent-1 transition-colors duration-200 ${
                  isPaused ? 'text-accent-1' : ''
                }`}
                aria-label={isPaused ? '재생' : '일시정지'}
              >
                {isPaused ? (
                  <Play className="size-4" />
                ) : (
                  <Pause className="size-4" />
                )}
              </button>

              <ProgressDots
                total={recommendations.length}
                currentIndex={currentIndex}
                progress={progress}
                onDotClick={(index) => {
                  handleDotClick(index);
                  resetProgress();
                }}
                isPaused={isPaused}
              />
            </div>

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
