import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const mmis2024: Project = {
  id: 'mmis-2024',
  title: '기상청 해양기상 플랫폼',
  subtitle: '모바일 랜딩페이지 개발',
  description: {
    short: '기상청 대국민 서비스 및 기상청 내 솔루션 시스템입니다.',
    full: `- 기상청 대국민 서비스(해양기상정보포털) 및 기상청 관계자 기상 정보 관련 업무 서비스 기능을 개발했습니다.
    1. 기상청 요구사항에 따른 PC 및 Mobile 기능을 구현하고,OpenLayers를 활용하여 폭풍, 해일, 기온 등의 정보를 표출하는 2D 지도 레이어를 발행했습니다.
    2. 시간에 따른 데이터 표출 슬라이더를 구현하고,메뉴별 사용자 사용 통계를 확인하는 플랫폼 통계 기능을 강화했으며,
    3. React-Native를 사용하여 위성 방송 애플리케이션에 콘텐츠를 추가했습니다.`,
  },
  images: {
    thumbnail: '/projects/mmis-2024/thumbnail.webp',
    full: [
      '/projects/mmis-2024/1.webp',
      '/projects/mmis-2024/2.webp',
      '/projects/mmis-2024/3.webp',
      '/projects/mmis-2024/4.webp',
    ],
  },
  startTime: '2024.09',
  endTime: '2024.11',
  period: getProjectPeriod('2024.09', '2024.11'),
  role: 'Frontend',
  team: 'Koast',
  techStack: [
    'Vue.js',
    'Vuex',
    'TypeScript',
    'SCSS',
    'Axios',
    'React-Native',
    'OpenLayers',
    'Docker',
    'Git',
  ],
};
