import { X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { type YearProjects } from '@/types/projects';
import {
  calculateTotalProjects,
  countProjectsBySkill,
  extractUniqueSkills,
  filterProjects,
} from '@/utils/projectUtils';

import ProjectCard from './ProjectCard';

interface ProjectsPageProps {
  projectsData: YearProjects[];
}

export default function ProjectsPage({ projectsData }: ProjectsPageProps) {
  // URL에서 초기값 읽기
  const getInitialState = useCallback(() => {
    if (typeof window === 'undefined') return { tab: 'all', stacks: [] };
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab') || 'all';
    const stackParam = params.get('stack');
    const stacks = stackParam ? stackParam.split(',').filter(Boolean) : [];
    return { tab, stacks };
  }, []);

  const [activeYear, setActiveYear] = useState<string>('all');
  const [hoverYear, setHoverYear] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<YearProjects[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTechStacks, setActiveTechStacks] = useState<string[]>([]);
  const projectsRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const hoverIndicatorRef = useRef<HTMLSpanElement>(null);

  // 모든 프로젝트 수 계산
  const totalProjects = calculateTotalProjects(projectsData);

  // 모든 프로젝트에서 고유한 기술 스택 목록 추출
  const uniqueSkills = extractUniqueSkills(projectsData);

  // 각 기술 스택이 사용된 프로젝트 수 계산
  const skillCounts = countProjectsBySkill(projectsData);

  // URL 업데이트 함수
  const updateURL = (tab: string, stacks: string[]) => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams();
    if (tab !== 'all') params.set('tab', tab);
    if (stacks.length > 0) params.set('stack', stacks.join(','));

    const newURL = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;

    window.history.pushState({}, '', newURL);
  };

  // 초기 마운트 시 URL에서 상태 읽기
  useEffect(() => {
    const state = getInitialState();
    setActiveYear(state.tab);
    setActiveTechStacks(state.stacks);

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [getInitialState]);

  // URL 변경 감지 (뒤로가기/앞으로가기 지원)
  useEffect(() => {
    const handlePopState = () => {
      const state = getInitialState();
      setActiveYear(state.tab);
      setActiveTechStacks(state.stacks);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [getInitialState, setActiveYear, setActiveTechStacks]);

  // 탭 변경 처리 함수
  const handleYearChange = (year: string) => {
    if (year === activeYear) return;

    setIsAnimating(true);
    setActiveYear(year);
    updateURL(year, activeTechStacks);

    // 애니메이션을 위한 타이머 설정
    setTimeout(() => {
      setIsAnimating(false);
    }, 300); // 애니메이션 지속 시간
  };

  // 기술 스택 변경 처리 함수
  const handleTechStackChange = (tech: string) => {
    setIsAnimating(true);

    // 이미 선택된 기술 스택인 경우 제거, 아니면 추가
    setActiveTechStacks((prev) => {
      const newStacks = prev.includes(tech)
        ? prev.filter((item) => item !== tech)
        : [...prev, tech];
      updateURL(activeYear, newStacks);
      return newStacks;
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  // 모든 기술 스택 필터 초기화
  const resetTechStackFilters = () => {
    setActiveTechStacks([]);
    updateURL(activeYear, []);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  // 탭 호버 처리 함수
  const handleTabHover = (year: string | null) => {
    setHoverYear(year);
  };

  useEffect(() => {
    const filtered = filterProjects(projectsData, activeYear, activeTechStacks);
    setFilteredProjects(filtered);
  }, [activeYear, activeTechStacks, projectsData]);

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
        <div
          className={`mt-4 hidden flex-col gap-2 transition-all duration-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          } sm:flex`}
        >
          <div className="flex flex-wrap gap-2 overflow-x-auto">
            {uniqueSkills.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => handleTechStackChange(tech)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 ${
                  activeTechStacks.includes(tech)
                    ? 'bg-accent-1 text-background'
                    : skillCounts[tech] >= 3
                      ? 'bg-gray7/30 text-main hover:bg-gray6'
                      : 'bg-gray8/30 text-gray1 hover:bg-gray7'
                }`}
                aria-label={`${tech} 기술 스택으로 필터링`}
              >
                {tech}
                <span
                  className={`${activeTechStacks.includes(tech) ? 'text-gray7' : 'text-gray4'} ml-px`}
                >
                  ({skillCounts[tech]})
                </span>
              </button>
            ))}
            {activeTechStacks.length > 0 && (
              <button
                type="button"
                onClick={resetTechStackFilters}
                className="bg-accent-2 hover:bg-accent-1 flex items-center gap-0.5 rounded-full py-1 pr-1.5 pl-2 text-xs text-white"
              >
                초기화
                <X className="h-4 w-4" />
              </button>
            )}
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
          <div className="bg-gray8/40 text-gray1 flex h-40 flex-col items-center justify-center rounded-lg backdrop-blur-sm">
            {activeTechStacks.length > 0 && (
              <>
                <p className="mb-2 text-lg font-medium">
                  {activeYear === 'all' ? '' : `${activeYear} `}
                  <span className="text-accent-1">
                    {activeTechStacks.join(', ')}
                  </span>{' '}
                  기술을{' '}
                  {activeTechStacks.length > 1 ? '모두 사용한' : '사용한'}{' '}
                  프로젝트가 없습니다.
                </p>
                <button
                  type="button"
                  onClick={resetTechStackFilters}
                  className="bg-gray7 text-gray1 hover:bg-gray6 mt-2 rounded-full px-4 py-1.5 text-sm"
                >
                  기술 필터 초기화
                </button>
              </>
            )}
          </div>
        )}
      </div>
      <div
        className={`mt-6 flex flex-col gap-2 pb-2 transition-all duration-500 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        } sm:hidden`}
      >
        <div className="mt-1 flex flex-wrap gap-2 overflow-x-auto">
          {uniqueSkills.map((tech) => (
            <button
              key={tech}
              type="button"
              onClick={() => handleTechStackChange(tech)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 ${
                activeTechStacks.includes(tech)
                  ? 'bg-accent-1 text-background'
                  : skillCounts[tech] >= 3
                    ? 'bg-gray7/30 text-main hover:bg-gray6'
                    : 'bg-gray8/30 text-gray1 hover:bg-gray7'
              }`}
              aria-label={`${tech} 기술 스택으로 필터링`}
            >
              {tech}
            </button>
          ))}
          {activeTechStacks.length > 0 && (
            <button
              type="button"
              onClick={resetTechStackFilters}
              className="bg-accent-2 hover:bg-accent-1 flex items-center gap-0.5 rounded-full py-0.5 pr-1.5 pl-2 text-xs text-white"
            >
              초기화
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
