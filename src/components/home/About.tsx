import { useCallback, useEffect, useRef, useState } from 'react';

const phrases = [
  { emoji: '🔥', text: '"누군가 하겠지"보다, "제가 해볼게요"라고 말합니다.' },
  {
    emoji: '💡',
    text: '상황에 따라 우선순위를 조정하며 팀의 흐름을 끊지 않으려 합니다.',
  },
  {
    emoji: '💻',
    text: '새로운 기술이 필요해서가 아니라, 재미있어서 학습합니다.',
  },
  {
    emoji: '🚀',
    text: '성장 가능성이 보이거나 해보고 싶으면, 그냥 시도해 봅니다.',
  },
  {
    emoji: '🤝',
    text: '코드만 잘 짜기보다 의사소통이 매끄러운 개발자를 목표로 합니다.',
  },
];

const AUTO_SLIDE_INTERVAL = 5000;

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPosition({ x, y });
  };

  const handleNext = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
      setIsVisible(true);
    }, 100);
    setProgress(0);
  }, []);

  const handleDotClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    e.stopPropagation();
    e.preventDefault();
    if (index === currentIndex) return;
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsVisible(true);
    }, 100);
    setProgress(0);
  };

  // 자동 슬라이드 + 프로그레스 바
  useEffect(() => {
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
  }, [handleNext]);

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
                  {phrases[currentIndex].emoji}
                </span>
                <p className="font-paperlogy from-accent-1 to-accent-3 bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent md:text-2xl">
                  {phrases[currentIndex].text}
                </p>
              </div>
            </div>

            {/* 인디케이터 */}
            <div className="mb-4 flex flex-col items-center gap-3">
              {/* Dot 인디케이터 */}
              <div className="flex gap-2">
                {phrases.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={(e) => handleDotClick(e, index)}
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
