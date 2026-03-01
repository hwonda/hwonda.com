import { useEffect, useRef } from 'react';

import type { YearProjects } from '@/types/projects';

interface TabItem {
  year: string;
  count: number;
}

interface YearTabsProps {
  projectsData: YearProjects[];
  activeYear: string;
  hoverYear: string | null;
  totalProjects: number;
  onYearChange: (year: string) => void;
  onTabHover: (year: string | null) => void;
}

export default function YearTabs({
  projectsData,
  activeYear,
  hoverYear,
  totalProjects,
  onYearChange,
  onTabHover,
}: YearTabsProps) {
  const tabsRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const hoverIndicatorRef = useRef<HTMLSpanElement>(null);

  const tabItems: TabItem[] = [
    { year: 'all', count: totalProjects },
    ...projectsData.map((data) => ({
      year: data.year,
      count: data.projects.length,
    })),
  ];

  // 탭 인디케이터 위치 업데이트
  useEffect(() => {
    if (!tabsRef.current || !indicatorRef.current) return;

    const activeTab = tabsRef.current.querySelector(
      `[data-year="${activeYear}"]`,
    ) as HTMLElement;
    if (activeTab) {
      const tabRect = activeTab.getBoundingClientRect();
      const tabsRect = tabsRef.current.getBoundingClientRect();

      indicatorRef.current.style.width = `${tabRect.width}px`;
      indicatorRef.current.style.transform = `translateX(${tabRect.left - tabsRect.left}px)`;
    }
  }, [activeYear]);

  // 호버 인디케이터 위치 업데이트
  useEffect(() => {
    if (!tabsRef.current || !hoverIndicatorRef.current) return;

    if (hoverYear && hoverYear !== activeYear) {
      const hoverTab = tabsRef.current.querySelector(
        `[data-year="${hoverYear}"]`,
      ) as HTMLElement;

      if (hoverTab) {
        const tabRect = hoverTab.getBoundingClientRect();
        const tabsRect = tabsRef.current.getBoundingClientRect();

        hoverIndicatorRef.current.style.width = `${tabRect.width}px`;
        hoverIndicatorRef.current.style.transform = `translateX(${tabRect.left - tabsRect.left}px)`;
        hoverIndicatorRef.current.style.opacity = '0.6';
      }
    } else {
      hoverIndicatorRef.current.style.opacity = '0';
    }
  }, [hoverYear, activeYear]);

  return (
    <div className="border-gray8 relative flex gap-5 border-b" ref={tabsRef}>
      {tabItems.map((item) => (
        <button
          key={item.year}
          type="button"
          onClick={() => onYearChange(item.year)}
          onMouseEnter={() => onTabHover(item.year)}
          onMouseLeave={() => onTabHover(null)}
          className={`relative cursor-pointer px-1 py-2.5 text-sm font-medium transition-all duration-300 sm:px-2 ${
            activeYear === item.year
              ? 'text-accent-1'
              : 'text-gray2 hover:text-accent-2'
          }`}
          aria-label={
            item.year === 'all'
              ? '모든 프로젝트 보기'
              : `${item.year} 프로젝트 보기`
          }
          data-year={item.year}
        >
          {item.year === 'all' ? '전체' : item.year}
          <span className="hidden md:inline">({item.count})</span>
        </button>
      ))}

      <span
        ref={indicatorRef}
        className="bg-accent-1 absolute bottom-0 h-[2px] rounded-full transition-all duration-300 ease-in-out"
      />
      <span
        ref={hoverIndicatorRef}
        className="bg-accent-2 absolute bottom-0 h-[2px] rounded-full opacity-0 transition-all duration-300 ease-in-out"
      />
    </div>
  );
}
