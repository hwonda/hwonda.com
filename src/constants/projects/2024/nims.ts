import type { Project } from '@/types/projects';

export const nims: Project = {
  id: 'nims',
  title: '기상관측 통합관리',
  subtitle: '연구용 기상관측 장비 통합관리 시스템',
  description: {
    short: '해양 연구장비 및 데이터를 관리하는 통합 시스템입니다.',
    full: `연구용 관측장비와 데이터를 테이블 형식으로 표출하고,
검색, 필터링 및 페이지네이션을 구현했습니다.
관측장비 상세 내용을 표출하는 모달창을 구현하고,
OpenLayers 지도상에 장비의 위치 및 상태를 표시했습니다.
장비의 상태를 시각적으로 구분할 수 있도록 범례 및 색상을 추가하고,
RTK Query를 사용하여 데이터의 효율적인 상태 관리 및 서버와의 통신을 구현했습니다.`,
  },
  images: {
    thumbnail: '/projects/nims/thumbnail.webp',
    full: [
      '/projects/nims/1.webp',
      '/projects/nims/2.webp',
      '/projects/nims/3.webp',
      '/projects/nims/4.webp',
    ],
  },
  period: '2024.06 ~ 2024.08 (2개월)',
  role: 'Frontend',
  team: 'Koast',
  techStack: ['React', 'TypeScript', 'TailwindCSS', 'OpenLayers', 'RTK Query'],
};
