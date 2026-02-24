import type { YearProjects } from '@/types/projects';

import { projects2023 } from './2023';
import { projects2024 } from './2024';
import { projects2025 } from './2025';
import { sideProjects } from './with-fun';

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

// 미리보기에 표시할 프로젝트
// export const featuredProjects: Project[] = [
//   diki, // Diki
//   aisar, // AISAR
//   reactMultiEmail, // React-multi-email
// ];

// 모든 프로젝트 내보내기
export * from './2023';
export * from './2024';
export * from './2025';
export * from './with-fun';
