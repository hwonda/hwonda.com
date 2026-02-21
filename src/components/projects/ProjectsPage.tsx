import { useCallback, useEffect, useRef, useState } from 'react';

import { type YearProjects } from '@/types/projects';
import {
  calculateTotalProjects,
  countProjectsBySkill,
  extractUniqueSkills,
  filterProjects,
} from '@/utils/projectUtils';

import { EmptyState, ProjectGrid, TechStackFilter, YearTabs } from './page';

interface ProjectsPageProps {
  projectsData: YearProjects[];
  basePath?: string;
}

export default function ProjectsPage({
  projectsData,
  basePath = '',
}: ProjectsPageProps) {
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

  // 계산된 값들
  const totalProjects = calculateTotalProjects(projectsData);
  const uniqueSkills = extractUniqueSkills(projectsData);
  const skillCounts = countProjectsBySkill(projectsData);

  // URL 업데이트 함수
  const updateUrl = (tab: string, stacks: string[]) => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams();
    if (tab !== 'all') params.set('tab', tab);
    if (stacks.length > 0) params.set('stack', stacks.join(','));

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;

    window.history.pushState({}, '', newUrl);
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
  }, [getInitialState]);

  // 필터링된 프로젝트 업데이트
  useEffect(() => {
    const filtered = filterProjects(projectsData, activeYear, activeTechStacks);
    setFilteredProjects(filtered);
  }, [activeYear, activeTechStacks, projectsData]);

  // 애니메이션 처리 헬퍼
  const withAnimation = (callback: () => void) => {
    setIsAnimating(true);
    callback();
    setTimeout(() => setIsAnimating(false), 300);
  };

  // 핸들러 함수들
  const handleYearChange = (year: string) => {
    if (year === activeYear) return;
    withAnimation(() => {
      setActiveYear(year);
      updateUrl(year, activeTechStacks);
    });
  };

  const handleTechStackChange = (tech: string) => {
    withAnimation(() => {
      setActiveTechStacks((prev) => {
        const newStacks = prev.includes(tech)
          ? prev.filter((item) => item !== tech)
          : [...prev, tech];
        updateUrl(activeYear, newStacks);
        return newStacks;
      });
    });
  };

  const resetTechStackFilters = () => {
    setActiveTechStacks([]);
    updateUrl(activeYear, []);
    withAnimation(() => {});
  };

  const handleTabHover = (year: string | null) => {
    setHoverYear(year);
  };

  // 로드 애니메이션 클래스
  const loadedClass = isLoaded
    ? 'translate-y-0 opacity-100'
    : 'translate-y-4 opacity-0';

  return (
    <section className="relative px-4 sm:px-8 md:px-10 md:pt-20 lg:px-20 xl:px-40">
      {/* Header */}
      <div className="bg-background sticky top-0 left-0 z-40 backdrop-blur-md md:pb-4">
        <div className="flex flex-col gap-4 pt-24 md:flex-row md:items-end md:justify-between">
          <h1
            className={`font-paperlogy text-4xl font-bold transition-all duration-500 md:text-5xl ${loadedClass}`}
          >
            프로젝트
          </h1>

          <div
            className={`w-auto overflow-x-auto transition-all delay-100 duration-500 ${loadedClass}`}
          >
            <YearTabs
              projectsData={projectsData}
              activeYear={activeYear}
              hoverYear={hoverYear}
              totalProjects={totalProjects}
              onYearChange={handleYearChange}
              onTabHover={handleTabHover}
            />
          </div>
        </div>

        <div className={`transition-all duration-500 ${loadedClass}`}>
          <TechStackFilter
            uniqueSkills={uniqueSkills}
            activeTechStacks={activeTechStacks}
            skillCounts={skillCounts}
            onTechStackChange={handleTechStackChange}
            onReset={resetTechStackFilters}
            variant="desktop"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div
        className={`space-y-16 pt-4 transition-all delay-200 duration-500 ${loadedClass}`}
        ref={projectsRef}
      >
        {filteredProjects.length > 0 ? (
          <ProjectGrid
            filteredProjects={filteredProjects}
            activeYear={activeYear}
            isAnimating={isAnimating}
            basePath={basePath}
          />
        ) : (
          <EmptyState
            activeYear={activeYear}
            activeTechStacks={activeTechStacks}
            onReset={resetTechStackFilters}
          />
        )}
      </div>

      {/* Mobile Tech Stack Filter */}
      <div className={`transition-all duration-500 ${loadedClass}`}>
        <TechStackFilter
          uniqueSkills={uniqueSkills}
          activeTechStacks={activeTechStacks}
          skillCounts={skillCounts}
          onTechStackChange={handleTechStackChange}
          onReset={resetTechStackFilters}
          variant="mobile"
        />
      </div>
    </section>
  );
}
