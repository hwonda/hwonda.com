import { ChevronDown } from 'lucide-react';

interface DescriptionProps {
  isLoaded: boolean;
  role: 'fe' | 'pm';
}

const descriptions = {
  fe: {
    tagline: {
      first: { highlight: '뜨겁게 ', rest: '성장하고,' },
      second: { highlight: ' 따뜻하게 ', rest: '협업합니다' },
    },
    detail: {
      desktop: [
        '깔끔한 코드, 부드러운 사용자 경험, 그리고 창의적인 아이디어를',
        '현실로 구현하는 것에 열정을 가지고 있습니다.',
      ],
      mobile:
        '깔끔한 코드, 부드러운 사용자 경험, 그리고 창의적인 아이디어를 현실로 구현하는 것에 열정을 가지고 있습니다.',
    },
  },
  pm: {
    tagline: {
      first: { highlight: '현장의 코드', rest: '에 공감하고,' },
      second: { highlight: ' 프로젝트의 성공', rest: '에 집착합니다.' },
    },
    detail: {
      desktop: [
        '개발 경험을 바탕으로 팀과 소통하며,',
        '프로젝트를 성공으로 이끄는 것에 열정을 가지고 있습니다.',
      ],
      mobile:
        '개발 경험을 바탕으로 팀과 소통하며, 프로젝트를 성공으로 이끄는 것에 열정을 가지고 있습니다.',
    },
  },
};

export default function Description({ isLoaded, role }: DescriptionProps) {
  const scrollToProjects = () => {
    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth',
    });
  };

  const animationClass = (delay: string) =>
    isLoaded ? `animate-intro ${delay}` : 'opacity-0';

  const content = descriptions[role];

  return (
    <>
      <p
        className={`font-paperlogy mb-1 flex flex-col gap-1 text-2xl font-bold sm:flex-row ${animationClass('delay-500')}`}
      >
        <span>
          <span className="text-accent-1">
            {content.tagline.first.highlight}
          </span>
          {content.tagline.first.rest}
        </span>
        <span>
          <span className="text-accent-2">
            {content.tagline.second.highlight}
          </span>
          {content.tagline.second.rest}
        </span>
      </p>

      {/* Desktop */}
      <p
        className={`text-sub font-pretendard hidden max-w-2xl text-lg sm:block ${animationClass('delay-700')}`}
      >
        {content.detail.desktop[0]}
      </p>
      <p
        className={`text-sub font-pretendard mb-10 hidden max-w-2xl text-lg sm:block ${animationClass('delay-700')}`}
      >
        {content.detail.desktop[1]}
      </p>

      {/* Mobile */}
      <p
        className={`text-sub font-pretendard mb-10 max-w-2xl text-lg sm:hidden ${animationClass('delay-700')}`}
      >
        {content.detail.mobile}
      </p>

      <button
        type="button"
        onClick={scrollToProjects}
        className={`absolute inset-x-0 bottom-4 flex flex-col items-center justify-center hover:cursor-pointer ${animationClass('delay-900')}`}
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
}
