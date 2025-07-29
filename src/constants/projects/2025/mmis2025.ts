import type { Project } from '@/types/projects';

export const mmis2025: Project = {
  id: 'mmis2025',
  title: '항공 위험기상 예측 시스템',
  subtitle: '항공 관제 및 조종사를 위한 위험 기상 예측 시스템',
  description: {
    short: '항공 관제 및 조종사를 위한 위험 기상 예측 시스템입니다.',
    full: `항공 관제 및 조종사를 위한 위험기상 예측 시스템으로,
      전체 UI 구조 설계와 Redux를 활용한 전역 상태 관리 및 공용 커스텀 훅 상태 개선을 담당했습니다.
      지도 오픈소스 라이브러리 OpenLayers를 React에서 사용하기 위해 매핑하고,
      외부 API 기반 위험정보를 2D 지도 위에 시각화했습니다.
      기상 범례에 따라 색상 자동 조정 기능을 구현하고,
      제작중인 React UI 라이브러리(koast-ui)를 도입 및 해당 라이브러리 버그를 수정했습니다.`,
  },
  images: {
    thumbnail: '/projects/mmis-2025/thumbnail.webp',
  },
  period: '2025.03 ~ 2025.04',
  role: 'Frontend',
  team: 'Koast',
  techStack: ['React', 'TypeScript', 'TailwindCSS', 'Redux', 'OpenLayers'],
};
