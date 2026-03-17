import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const mmis2024: Project = {
  id: 'mmis-2024',
  title: '기상청 해양기상 플랫폼',
  subtitle: '모바일 랜딩페이지 개발',
  description: {
    short:
      '기상청 대국민 서비스인 해양기상정보포털의 모바일 랜딩페이지를 개발했습니다.',
    full: `
    기상청 대국민 서비스의 모바일 사용자 경험 개선을 위해 **모바일 랜딩 페이지를 새롭게 기획하고 개발**했습니다.
    기존 서비스는 **모바일 환경에서 정보 접근성이 낮아 주요 기상 데이터를 빠르게 확인하기 어려운 문제**가 있었습니다.

    모바일 환경에 맞는 정보 구조를 재설계하고 랜딩 페이지 UI를 새롭게 구성하여 주요 기상 정보를 한 화면에서 확인할 수 있도록 개선했습니다. 
    또한 복잡한 기상 시계열 데이터를 효율적으로 탐색할 수 있도록 **디바운싱과 캐싱 전략이 적용된 타임 슬라이더 컴포넌트**를 개발했습니다.

    그 결과 **모바일 환경에서 기상 데이터 탐색성과 인터랙션 성능을 동시에 개선**했습니다.
    `,
  },
  points: [
    {
      challenges: `
      기존 서비스는 PC 중심 UI 구조로 설계되어 모바일에서 주요 기상 정보를 빠르게 확인하기 어려운 문제가 있었습니다.
      `,
      solutions: `
      모바일 사용 환경을 고려하여 랜딩 페이지 정보 구조와 UI를 새롭게 설계하고 주요 기상 정보를 한 화면에서 확인할 수 있도록 구성했습니다.
      `,
      results: `
      모바일 사용자들이 핵심 기상 정보를 빠르게 탐색할 수 있는 UI 구조를 구축했습니다.
      `,
    },
    {
      challenges: `
      시간대별 기상 데이터를 조회할 때 잦은 API 요청으로 인터랙션이 끊기는 문제가 있었습니다.
      `,
      solutions: `
      디바운싱과 캐싱 전략을 적용한 타임 슬라이더 컴포넌트를 자체 개발했습니다.
      `,
      results: `
      불필요한 API 요청을 줄이고 부드러운 사용자 인터랙션을 제공했습니다.
      `,
    },
    {
      challenges: `
      기존 서비스는 모바일 UI 기준이 명확하지 않아 페이지 간 UI 일관성이 부족한 상태였습니다.
      `,
      solutions: `
      모바일 랜딩 페이지를 기준으로 UI 구성과 스타일 가이드를 정리했습니다.
      `,
      results: `
      모바일 환경에서 일관된 사용자 경험을 제공하는 UI 구조를 구축했습니다.
      `,
    },
  ],
  images: {
    thumbnail: { url: '/projects/mmis-2024/thumbnail.webp' },
    full: [
      { url: '/projects/mmis-2024/1.webp' },
      { url: '/projects/mmis-2024/2.webp' },
      { url: '/projects/mmis-2024/3.webp' },
      { url: '/projects/mmis-2024/4.webp' },
    ],
  },
  startTime: '2024.08',
  endTime: '2024.11',
  period: getProjectPeriod('2024.08', '2024.11'),
  role: 'Frontend',
  team: 'Koast',
  techStack: [
    'Vue.js',
    'Vuex',
    'TypeScript',
    'SCSS',
    'Axios',
    'OpenLayers',
    'Docker',
    'Git',
  ],
};
