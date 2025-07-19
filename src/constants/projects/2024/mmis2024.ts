import type { Project } from '@/types/projects';

export const mmis2024: Project = {
  id: 'mmis-2024',
  title: 'MMIS',
  description: {
    short: '기상청 대국민 서비스 및 기상청 내 솔루션 시스템입니다.',
    full: `기상청 대국민 서비스(해양기상정보포털) 및 기상청 관계자 기상 정보 관련 업무 서비스 기능을 개발했습니다.
기상청 요구사항에 따른 PC 및 Mobile 기능을 구현하고,
OpenLayers를 활용하여 폭풍, 해일, 기온 등의 정보를 표출하는 2D 지도 레이어를 발행했습니다.
시간에 따른 데이터 표출 슬라이더를 구현하고,
메뉴별 사용자 사용 통계를 확인하는 플랫폼 통계 기능을 강화했으며,
React-Native를 사용하여 위성 방송 애플리케이션에 콘텐츠를 추가했습니다.`,
  },
  images: {
    thumbnail: '/projects/mmis/thumbnail.webp',
  },
  period: '2023.04 ~ 현재',
  techStack: [
    'Vue3',
    'Vuex',
    'TypeScript',
    'Axios',
    'React-Native',
    'OpenLayers',
  ],
};
