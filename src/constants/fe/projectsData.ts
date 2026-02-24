import type { YearProjects } from '@/types/projects';

import { projects2023 } from '../projects/2023';
import { projects2024 } from '../projects/2024';
import { projects2025 } from '../projects/2025';
import { sideProjects } from '../projects/with-fun';

export const projectsData: YearProjects[] = [
  {
    year: 'Side',
    projects: sideProjects,
  },
  {
    year: '2025년',
    projects: projects2025,
  },
  {
    year: '2024년',
    projects: projects2024,
  },
  {
    year: '2023년',
    projects: projects2023,
  },
];

// 모든 프로젝트를 하나의 배열로
export const allProjects = projectsData.flatMap(
  (yearData) => yearData.projects,
);
