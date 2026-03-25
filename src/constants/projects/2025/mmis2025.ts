import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const mmis2025: Project = {
  id: 'mmis2025',
  title: '기상청 2025',
  subtitle: '대국민 서비스 UI/UX 개선',
  description: {
    short: '기상청 대국민 서비스인 해양기상정보포털의 PC, Mobile UI/UX 개선',
    full: `
      기상청 대국민 서비스의 노후화된 UI를 개선하기 위해 **기획, 디자인, 개발 전 과정을 주도하며 PC/Mobile UI/UX를 전면 개편**했습니다.

      **실무진과 직접 협의하여 사용자 불편 사항을 도출**하고, **네비게이션 구조, 검색 위치, 타임슬라이더 등 핵심 인터페이스를 재설계**했습니다.

      또한 2,000라인 이상의 레거시 코드를 컴포넌트 단위로 리팩토링하여 유지보수성을 개선했습니다.

      그 결과 사용자 만족도 **4점 → 8점(100% 상승)**, **평균 체류시간 3분 → 6분(2배 증가)**를 달성했습니다.
    `,
  },
  points: [
    {
      situation: `
      기존 UI 가독성과 사용 흐름이 낮아 사용자가 원하는 정보를 빠르게 찾기 어려운 구조
      `,
      task: `
      실무진 요구를 반영해 핵심 탐색 흐름을 재설계하고 사용성 지표 개선 필요
      `,
      action: `
      기상청 실무진과 협업해 불편 사항 도출 후 네비게이션 구조, 검색 위치, 타임슬라이더 UX 중심으로 핵심 흐름 재설계
      `,
      result: `
      사용자 만족도 **4점 → 8점 상승**, 체류시간 **3분 → 6분 증가**
      `,
    },
    {
      situation: `
      팝업, 범례, UI 요소가 프로젝트마다 달라 디자인 일관성 부족
      `,
      task: `
      서비스 전반에 동일한 시각 규칙을 적용할 컴포넌트 기준 정립 필요
      `,
      action: `
      팝업 디자인 통일, 범례를 이미지에서 HTML 구조로 전환하는 방식으로 UI 컴포넌트 기준 정립
      `,
      result: `
      서비스 전반 시각적 일관성과 가독성 확보
      `,
    },
    {
      situation: `
      PC/Mobile이 별도 URL로 운영되며 UI 구조와 디자인 차이로 사용자 경험 일관성 저하
      `,
      task: `
      디바이스가 달라도 동일한 인지 흐름을 제공할 공통 UX 기준 통합 필요
      `,
      action: `
      두 환경의 UI 구조와 디자인 비교 분석 후 공통 UX 기준으로 통합 정리
      `,
      result: `
      디바이스와 무관하게 일관된 사용자 경험 제공 가능한 UI 구조 구축
      `,
    },
    {
      situation: `
      메뉴별 API 호출이 포함된 2,000라인 이상 단일 메서드 구조로 수정/기능 추가 난이도 높음
      `,
      task: `
      유지보수성과 확장성을 높일 수 있도록 기능 단위 모듈화 구조 전환 필요
      `,
      action: `
      UI 단위에서 기능 단위로 컴포넌트를 분리해 구조 모듈화
      `,
      result: `
      메뉴 추가, API 연동, UI 수정 작업 시간 **60분 → 5분 수준 단축**
      `,
    },
    {
      situation: `
      기획-디자인-개발 분리 구조에서 커뮤니케이션 비용으로 일정 지연 가능성 존재
      `,
      task: `
      의사결정 단계를 줄여 짧은 기간 내 전면 개편 완료 가능한 실행 구조 필요
      `,
      action: `
      기획, 디자인, 개발을 엔드-투-엔드로 직접 수행해 의사결정 구조 단순화
      `,
      result: `
      커뮤니케이션 비용 최소화로 2개월 내 UI/UX 전면 개편 완료
      `,
    },
  ],
  images: {
    thumbnail: { url: '/projects/mmis-2025/thumbnail.webp' },
    full: [
      { url: '/projects/mmis-2025/0.webp' },
      { url: '/projects/mmis-2025/1.webp' },
      { url: '/projects/mmis-2025/2.webp', caption: '' },
    ],
  },
  urls: {
    demo: 'https://marine.kma.go.kr/mmis/',
  },
  startTime: '2025.06',
  endTime: '2025.08',
  period: getProjectPeriod('2025.06', '2025.08'),
  role: 'PM · UI/UX · Frontend Lead',
  team: 'Koast',
  techStack: [
    'Vue.js',
    'Vuex',
    'TypeScript',
    'SCSS',
    'Axios',
    'OpenLayers',
    'Docker',
    'Jira',
    'Figma',
    'Git',
  ],
};
