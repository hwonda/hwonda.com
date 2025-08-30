import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const aquaFarm2025: Project = {
  id: 'aqua-farm-2025',
  title: '스마트 양식장 2025',
  subtitle: '연구용 스마트 양식 데이터 시각화 플랫폼',
  description: {
    short: '사료연구센터 연구원들의 양식 데이터를 시각화하는 플랫폼입니다.',
    full: `
    어류 성장 예측 대시보드 개발 (프론트엔드 리드 & 프로젝트 총괄)

    React 기반으로 어류 성장 곡선 예측 알고리즘과 센서 데이터 실시간 표출 기능을 구현합니다. 
    다양한 센서 데이터를 그래프·차트 형태로 직관적으로 시각화하여 연구원들이 빠르게 분석할 수 있도록 설계합니다.

    기획서 작성, UI/UX 디자인, API 명세 작성, Jira 기반 WBS 관리 등 프로젝트 전 과정을 주도합니다. 
    백엔드 개발자 1명, 기획자 1명, 연구원들과 긴밀히 소통하며 요구사항을 정의하고 우선순위를 조율합니다.

    본 프로젝트는 현재 진행 중이며, 데이터 기반 연구 지원을 위한 통합 대시보드를 완성하여 연구 효율성과 데이터 신뢰도를 향상시키는 것을 목표로 하고 있습니다.
    `,
  },
  images: {
    thumbnail: '/projects/aqua-farm-2025/thumbnail.webp',
  },
  startTime: '2025.06',
  endTime: '현재',
  period: getProjectPeriod('2025.06', '현재'),
  role: 'PM / Design / Frontend',
  team: 'Koast',
  techStack: [
    'React.js',
    'TypeScript',
    'Tailwind CSS',
    'Vite',
    'Swagger',
    'Figma',
    'Jira',
    'Git',
  ],
  inProgress: true,
};
