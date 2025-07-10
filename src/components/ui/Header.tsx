import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 초기 스크롤 위치 확인
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-between rounded-full py-2 pr-3 pl-4 sm:pl-10">
      {/* 항상 존재하는 배경 그라데이션 레이어 */}
      <div
        className={`from-accent-1/50 via-accent-2/20 to-accent-4/40 absolute inset-0 rounded-full bg-gradient-to-r opacity-0 backdrop-blur-md transition-opacity duration-700 ${
          isScrolled ? 'opacity-100' : ''
        }`}
      ></div>

      {/* 컨텐츠 */}
      <h1 className="font-paperlogy relative z-10 text-base font-medium sm:text-2xl">
        HOT🔥한 개발자
      </h1>
      <nav className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
        <a
          href="about"
          className="color-sub hover:bg-accent-1/20 rounded-full px-3 py-1.5 transition-all duration-300"
        >
          주다훤
          <span className="hidden sm:inline">에 대하여</span>
        </a>
        <a
          href="projects"
          className="color-sub bg-gray3/10 hover:bg-gray3/20 rounded-full px-3 py-1.5 transition-all duration-300"
        >
          프로젝트
        </a>
      </nav>
    </div>
  );
};

export default Header;
