import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const mmis2024: Project = {
  id: 'mmis-2024',
  title: '기상청 2024',
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
      situation: `
      기존 서비스가 PC 중심 구조라 모바일에서 주요 기상 정보에 빠르게 접근하기 어려운 문제 존재
      `,
      task: `
      모바일 환경에서 핵심 기상 정보를 한 화면 중심으로 탐색 가능한 정보 구조 재설계 필요
      `,
      action: `
      모바일 사용 환경 기준으로 랜딩 정보 구조와 UI를 재설계하고 핵심 기상 정보를 한 화면에 집중 배치
      `,
      result: `
      모바일 사용자가 핵심 기상 정보를 빠르게 탐색 가능한 UI 구조 구축
      `,
    },
    {
      situation: `
      시간대별 기상 데이터 조회 시 잦은 API 요청으로 인터랙션 끊김 발생
      `,
      task: `
      조회 정확도는 유지하면서 불필요 호출을 줄일 수 있는 타임슬라이더 처리 전략 필요
      `,
      action: `
      디바운싱과 캐싱 전략 적용한 타임슬라이더 컴포넌트 자체 개발
      `,
      result: `
      불필요한 API 요청 감소, 부드러운 사용자 인터랙션 제공
      `,
    },
    {
      situation: `
      모바일 UI 기준이 명확하지 않아 페이지 간 시각/구조 일관성 부족
      `,
      task: `
      랜딩 기준 공통 스타일과 구성 원칙을 수립해 모바일 경험 일관성 확보 필요
      `,
      action: `
      모바일 랜딩 페이지를 기준으로 UI 구성과 스타일 가이드 정리
      `,
      result: `
      모바일 환경에서 일관된 사용자 경험 제공 가능한 UI 구조 구축
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
  urls: {
    demo: 'https://marine.kma.go.kr/mmis/m',
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
