import type { YearProjects } from '@/types/projects';
import { mergeProjectsWithOverrides } from '@/utils/projectUtils';

import { tpmProjects2023 } from '../projects/2023';
import { tpmProjects2024 } from '../projects/2024';
import { tpmProjects2025 } from '../projects/2025';
import { tpmSideProjects } from '../projects/side';
import { projectOverrides } from './projectOverrides';

// TPM용 기본 프로젝트 데이터
const baseProjectsData: YearProjects[] = [
  {
    year: '사이드',
    projects: tpmSideProjects,
  },
  {
    year: '2025년',
    projects: tpmProjects2025,
  },
  {
    year: '2024년',
    projects: tpmProjects2024,
  },
  {
    year: '2023년',
    projects: tpmProjects2023,
  },
];

// TPM 관점 오버라이드 적용
export const projectsData: YearProjects[] = mergeProjectsWithOverrides(
  baseProjectsData,
  projectOverrides,
);

// 모든 프로젝트를 하나의 배열로
export const allProjects = projectsData.flatMap(
  (yearData) => yearData.projects,
);
