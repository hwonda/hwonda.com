// import { projectsData } from '@/constants/projects';
import type { Project, YearProjects } from '@/types/projects';

/**
 * 모든 프로젝트의 총 개수를 계산
 */
export const calculateTotalProjects = (data: YearProjects[]): number => {
  return data.reduce((acc, yearData) => acc + yearData.projects.length, 0);
};

/**
 * 프로젝트를 기술 스택으로 필터링
 */
export const filterProjectsByTechStack = (
  projects: Project[],
  techs: string[],
): Project[] => {
  if (techs.length === 0) return projects;

  return projects.filter((project) =>
    // 모든 선택된 기술 스택이 프로젝트의 기술 스택에 포함되어 있어야 함
    techs.every((tech) =>
      project.techStack?.some(
        (stack) => stack.toLowerCase() === tech.toLowerCase(),
      ),
    ),
  );
};

/**
 * 프로젝트를 연도와 기술 스택으로 필터링
 */
export const filterProjects = (
  data: YearProjects[],
  activeYear: string,
  activeTechStacks: string[],
): YearProjects[] => {
  let filtered: YearProjects[];

  // 연도 필터링
  if (activeYear === 'all') {
    filtered = [...data];
  } else {
    filtered = data.filter((yearData) => yearData.year === activeYear);
  }

  // 기술 스택 필터링
  if (activeTechStacks.length > 0) {
    filtered = filtered
      .map((yearData) => ({
        ...yearData,
        projects: filterProjectsByTechStack(
          yearData.projects,
          activeTechStacks,
        ),
      }))
      .filter((yearData) => yearData.projects.length > 0);
  }

  return filtered;
};

/**
 * 모든 프로젝트 목록 반환
 */
export const getAllProjects = (projectsData: YearProjects[]): Project[] => {
  return projectsData.flatMap((yearData) => yearData.projects);
};

/**
 * 특정 연도의 프로젝트 목록 반환
 */
export const getProjectsByYear = (
  projectsData: YearProjects[],
  year: string,
): Project[] => {
  const yearData = projectsData.find((data) => data.year === year);
  return yearData ? yearData.projects : [];
};

/**
 * 특정 기술 스택을 사용하는 프로젝트 목록 반환
 */
export const getProjectsByTechStack = (
  projectsData: YearProjects[],
  tech: string,
): Project[] => {
  const allProjects = getAllProjects(projectsData);
  return allProjects.filter((project) =>
    project.techStack?.some(
      (stack) => stack.toLowerCase() === tech.toLowerCase(),
    ),
  );
};

/**
 * 특정 ID의 프로젝트 반환
 */
export const getProjectById = (
  projectsData: YearProjects[],
  id: string,
): Project | undefined => {
  const allProjects = getAllProjects(projectsData);
  return allProjects.find((project) => project.id === id);
};
