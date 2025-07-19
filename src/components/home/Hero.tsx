import '../../styles/animation.css';

import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const BackgroundImage = ({ isLoaded }: { isLoaded: boolean }) => {
  return (
    <div
      className={`absolute inset-0 -z-10 blur-xs ${
        isLoaded ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <img
        src="/images/background.webp"
        alt="배경 이미지"
        className="h-full w-full object-cover"
      />
      {/* 하단으로 갈수록 검은 그라데이션 오버레이 */}
      <div className="to-background absolute inset-0 bg-gradient-to-b from-transparent opacity-100"></div>
    </div>
  );
};

const Title = ({ isLoaded }: { isLoaded: boolean }) => {
  return (
    <h1
      className={`mb-6 leading-tight font-bold ${isLoaded ? 'animate-intro delay-300' : 'opacity-0'}`}
    >
      <span className="bg-gradient-to-r from-[var(--color-accent-1)] via-[var(--color-accent-2)] to-[var(--color-accent-4)] bg-clip-text text-6xl text-transparent md:text-8xl">
        HOT DEV
      </span>
    </h1>
  );
};

const Description = ({ isLoaded }: { isLoaded: boolean }) => {
  const scrollToProjects = () => {
    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <p
        className={`font-paperlogy flex flex-col gap-1 text-2xl font-bold sm:flex-row ${isLoaded ? 'animate-intro delay-500' : 'opacity-0'}`}
      >
        <span>
          <span className="text-accent-1">뜨겁게 </span>
          성장하고,
        </span>
        <span>
          <span className="text-accent-2"> 따뜻하게 </span>
          협업합니다
        </span>
      </p>
      <p
        className={`text-sub font-pretendard hidden max-w-2xl text-lg sm:block ${isLoaded ? 'animate-intro delay-700' : 'opacity-0'}`}
      >
        깔끔한 코드, 부드러운 사용자 경험, 그리고 창의적인 아이디어를
      </p>
      <p
        className={`text-sub font-pretendard mb-10 hidden max-w-2xl text-lg sm:block ${isLoaded ? 'animate-intro delay-700' : 'opacity-0'}`}
      >
        현실로 구현하는 것에 열정을 가지고 있습니다.
      </p>
      <p
        className={`text-sub font-pretendard mb-10 max-w-2xl text-lg sm:hidden ${isLoaded ? 'animate-intro delay-700' : 'opacity-0'}`}
      >
        깔끔한 코드, 부드러운 사용자 경험, 그리고 창의적인 아이디어를 현실로
        구현하는 것에 열정을 가지고 있습니다.
      </p>
      <button
        type="button"
        onClick={scrollToProjects}
        className={`absolute inset-x-0 bottom-4 flex flex-col items-center justify-center hover:cursor-pointer ${isLoaded ? 'animate-intro delay-900' : 'opacity-0'}`}
      >
        <span className="bg-gray9 absolute z-0 h-10 w-12 rounded-full px-3 pt-0.5 pb-2" />
        <span className="z-10 flex flex-col items-center justify-center px-3 pt-0.5 pb-2">
          <ChevronDown
            className="text-primary animate-bounceArrow1"
            size={20}
          />
          <ChevronDown
            className="text-primary animate-bounceArrow2 -mt-3"
            size={20}
          />
        </span>
      </button>
    </>
  );
};

const ButtonWrapper = ({ isLoaded }: { isLoaded: boolean }) => {
  return (
    <div
      className={`flex flex-wrap justify-center gap-4 sm:justify-start ${isLoaded ? 'animate-intro delay-900' : 'opacity-0'}`}
    >
      <a
        href="#projects"
        className="bg-foreground hover:bg-foreground/80 text-inverse rounded-lg px-6 py-3 font-medium transition-colors"
      >
        프로젝트 보기
      </a>
      <a
        href="#contact"
        className="border-gray3 text-main hover:bg-gray9 rounded-lg border px-6 py-3 font-medium transition-colors"
      >
        연락하기
      </a>
    </div>
  );
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <BackgroundImage isLoaded={isLoaded} />

      <div className="relative z-10 container flex size-full items-end justify-center px-4 pb-24 sm:px-8 sm:pb-48">
        <div className="flex flex-col">
          <Title isLoaded={isLoaded} />
          <Description isLoaded={isLoaded} />
          <ButtonWrapper isLoaded={isLoaded} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
