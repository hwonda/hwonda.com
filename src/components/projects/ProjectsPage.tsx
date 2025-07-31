import { useEffect, useRef, useState } from 'react';

import { type YearProjects } from '@/types/projects';

import ProjectCard from './ProjectCard';

interface ProjectsPageProps {
  projectsData: YearProjects[];
}

export default function ProjectsPage({ projectsData }: ProjectsPageProps) {
  const [activeYear, setActiveYear] = useState<string>('all');
  const [hoverYear, setHoverYear] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<YearProjects[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const hoverIndicatorRef = useRef<HTMLSpanElement>(null);

  // 모든 프로젝트 수 계산
  const totalProjects = projectsData.reduce(
    (acc, yearData) => acc + yearData.projects.length,
    0,
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // 탭 변경 처리 함수
  const handleYearChange = (year: string) => {
    if (year === activeYear) return;

    setIsAnimating(true);
    setActiveYear(year);

    // 애니메이션을 위한 타이머 설정
    setTimeout(() => {
      setIsAnimating(false);
    }, 300); // 애니메이션 지속 시간
  };

  // 탭 호버 처리 함수
  const handleTabHover = (year: string | null) => {
    setHoverYear(year);
  };

  useEffect(() => {
    if (activeYear === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((yearData) => yearData.year === activeYear),
      );
    }
  }, [activeYear, projectsData]);

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
    <section className="relative px-4 sm:px-8 md:px-10 md:pt-20 lg:px-20 xl:px-40">
      <div className="bg-background sticky top-0 left-0 z-40 backdrop-blur-md md:pb-4">
        <div className="flex flex-col gap-4 pt-24 md:flex-row md:items-end md:justify-between">
          <h1
            className={`font-paperlogy text-4xl font-bold transition-all duration-500 md:text-5xl ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            프로젝트
          </h1>

          <div
            className={`w-auto overflow-x-auto transition-all delay-100 duration-500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div
              className="border-gray8 relative flex gap-5 border-b"
              ref={tabsRef}
            >
              <button
                type="button"
                onClick={() => handleYearChange('all')}
                onMouseEnter={() => handleTabHover('all')}
                onMouseLeave={() => handleTabHover(null)}
                className={`relative cursor-pointer px-2 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeYear === 'all'
                    ? 'text-accent-1'
                    : 'text-gray2 hover:text-accent-2'
                }`}
                aria-label="모든 프로젝트 보기"
                data-year="all"
              >
                All
                <span className="hidden md:inline">({totalProjects})</span>
              </button>

              {projectsData.map((yearData) => (
                <button
                  type="button"
                  key={yearData.year}
                  onClick={() => handleYearChange(yearData.year)}
                  onMouseEnter={() => handleTabHover(yearData.year)}
                  onMouseLeave={() => handleTabHover(null)}
                  className={`relative cursor-pointer py-2.5 text-sm font-medium transition-all duration-300 ${
                    activeYear === yearData.year
                      ? 'text-accent-1'
                      : 'text-gray2 hover:text-accent-2'
                  }`}
                  aria-label={`${yearData.year} 프로젝트 보기`}
                  data-year={yearData.year}
                >
                  {yearData.year}
                  <span className="hidden md:inline">
                    ({yearData.projects.length})
                  </span>
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
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div
        className={`space-y-16 pt-4 transition-all delay-200 duration-500 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
        ref={projectsRef}
      >
        {filteredProjects.length > 0 ? (
          activeYear === 'all' ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProjects.flatMap((yearData) =>
                yearData.projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="transition-all duration-500"
                    style={{
                      transitionDelay: `${index * 50}ms`,
                      opacity: isAnimating ? 0 : 1,
                      transform: isAnimating
                        ? 'translateY(20px)'
                        : 'translateY(0)',
                    }}
                  >
                    <ProjectCard project={project} />
                  </div>
                )),
              )}
            </div>
          ) : (
            filteredProjects.map((yearData) => (
              <div key={yearData.year} className="transition-all duration-500">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {yearData.projects.map((project, index) => (
                    <div
                      key={project.id}
                      className="transition-all duration-500"
                      style={{
                        transitionDelay: `${index * 100}ms`,
                        opacity: isAnimating ? 0 : 1,
                        transform: isAnimating
                          ? 'translateY(20px)'
                          : 'translateY(0)',
                      }}
                    >
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </div>
            ))
          )
        ) : (
          <div className="bg-gray-8/40 text-gray1 flex h-40 items-center justify-center rounded-lg backdrop-blur-sm">
            해당 연도의 프로젝트가 없습니다.
          </div>
        )}
      </div>
    </section>
  );
}
