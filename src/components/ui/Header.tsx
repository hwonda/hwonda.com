import { useEffect, useState } from 'react';

import { getNavLinks } from '@/constants/common/navLinks';

interface HeaderProps {
  basePath: '/fe' | '/pm';
}

export default function Header({ basePath }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = getNavLinks(basePath);

  // 역할별 로고 텍스트
  const logoText = {
    '/fe': { full: 'FE DAHWON', short: 'FE Dev' },
    '/pm': { full: 'TPM DAHWON', short: 'TPM' },
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-between rounded-full py-2 pr-3 pl-4 sm:pl-10">
      {/* 배경 그라데이션 레이어 */}
      <div
        className={`from-accent-1/50 via-accent-2/20 to-accent-4/40 absolute inset-0 rounded-full bg-gradient-to-r opacity-0 backdrop-blur-md transition-opacity duration-700 ${
          isScrolled ? 'opacity-100' : ''
        }`}
      />

      {/* 로고 */}
      <h1 className="font-paperlogy relative z-10 text-base font-medium sm:text-2xl">
        <a href={basePath} aria-label="홈페이지로 이동">
          <span className="hidden font-bold sm:inline">
            {logoText[basePath].full}
          </span>
          <span className="sm:hidden">{logoText[basePath].short}</span>
        </a>
      </h1>

      {/* 네비게이션 */}
      <nav className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
        {navLinks.map((link) => {
          const linkClass = `color-sub rounded-full px-1.5 py-1.5 transition-all duration-300 sm:px-3 ${link.hoverClass}`;

          return (
            <a
              key={link.href}
              href={link.href}
              className={linkClass}
              aria-label={`${link.label}${link.labelFull || ''} 페이지로 이동`}
              {...(link.isExternal && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              {link.label}
              {link.labelFull && (
                <span className="hidden sm:inline">{link.labelFull}</span>
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
