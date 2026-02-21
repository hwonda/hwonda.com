import { useRef } from 'react';

import ProgressDots from '@/components/common/ProgressDots';
import { aboutPhrases } from '@/constants/aboutPhrases';
import { useAutoSlide, useMouseGlow } from '@/hooks';

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);

  const { glowPosition, handleMouseMove } = useMouseGlow({
    elementRef: cardRef,
  });

  const { currentIndex, progress, isVisible, handleDotClick } = useAutoSlide({
    itemsLength: aboutPhrases.length,
  });

  const currentPhrase = aboutPhrases[currentIndex];

  return (
    <section className="flex min-h-[400px] items-center justify-center py-16">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="border-gray9 bg-gray9/50 hover:border-gray8 group relative w-full max-w-lg cursor-pointer overflow-hidden rounded-2xl border p-10 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(254, 59, 97, 0.12) 0%, transparent 50%)`,
        }}
      >
        <a href="/about">
          {/* 글로우 효과 */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(500px circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(236, 69, 141, 0.15), transparent 40%)`,
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <p className="text-gray2 group-hover:text-main font-paperlogy mb-6 text-xl">
              저는
            </p>

            {/* 텍스트 루프 영역 */}
            <div className="mb-8 min-h-[100px] w-full text-center">
              <div
                className={`transition-all duration-500 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-4 opacity-0'
                }`}
              >
                <span className="mb-2 block text-4xl">
                  {currentPhrase.emoji}
                </span>
                <p className="font-paperlogy from-accent-1 to-accent-3 bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent md:text-2xl">
                  {currentPhrase.text}
                </p>
              </div>
            </div>

            {/* 인디케이터 */}
            <div className="mb-4 flex flex-col items-center gap-3">
              <ProgressDots
                total={aboutPhrases.length}
                currentIndex={currentIndex}
                progress={progress}
                onDotClick={handleDotClick}
              />
            </div>

            <div className="text-gray3 group-hover:text-accent-1 inline-flex items-center text-sm font-medium transition-all duration-300">
              주다훤에 대하여
              <span className="ml-1 transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
