import type { ProjectOverride } from '@/types/projects';

// PM 관점의 프로젝트 오버라이드
// 기본 프로젝트 데이터에서 PM 관점으로 변경하고 싶은 필드만 정의
export const projectOverrides: ProjectOverride[] = [
  {
    id: 'koast-ui',
    role: 'PM · Frontend',
  },
  {
    id: 'zizizip',
    role: '1인 주도 개발',
  },
  {
    id: 'blog',
    role: '1인 주도 개발',
  },
  {
    id: 'aqua-farm-2025',
    role: 'PM · UI/UX · Frontend',
  },
  {
    id: 'mmis2025',
    role: 'PM · Frontend Lead',
  },
  {
    id: 'ai-code-reviewer',
    role: 'PM · AI Ops',
  },
  {
    id: 'digital-twin',
    role: 'PM · UI/UX · Frontend',
  },
  {
    id: 'mmis-2024',
    role: 'PM · Frontend',
  },
  {
    id: 'aisar',
    role: 'UI/UX · Frontend',
  },
  {
    id: 'mmis-2023',
    role: 'Frontend',
  },
  {
    id: 'aqua-farm-2023',
    role: 'Frontend',
  },
  {
    id: 'diki',
    role: 'PM · UI/UX · Frontend Lead',
  },
  {
    id: 'react-multi-email',
    role: 'Contributor · Maintainer',
  },
];
