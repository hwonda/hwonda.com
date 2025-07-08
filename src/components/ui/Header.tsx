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
    <div
      className={`flex items-center justify-between rounded-full px-10 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-black/60 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <h1 className="font-paperlogy text-2xl">앗! 뜨거</h1>
      <nav className="flex items-center gap-4">
        <a href="about">주다훤</a>
        <a href="projects">프로젝트</a>
        <a href="contact">연락하기</a>
      </nav>
    </div>
  );
};

export default Header;
