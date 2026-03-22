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
      기존 UI는 가독성과 사용 흐름이 좋지 않아 사용자가 원하는 정보를 빠르게 찾기 어려운 구조였습니다.
      `,
      action: `
      기상청 실무진과 협업하여 불편 사항을 도출하고,
      네비게이션 구조 개선, 검색 위치 변경(좌측 → 상단), 타임슬라이더 UX 개선 등 **핵심 사용자 흐름을 재설계**했습니다.
      `,
      result: `
      사용자 만족도 **4점 → 8점 상승**, **체류시간 3분 → 6분 증가**로 UI 사용성이 크게 개선되었습니다.
      `,
    },
    {
      situation: `
      팝업, 범례, UI 요소들이 프로젝트마다 달라 디자인 일관성이 부족한 상태였습니다.
      `,
      action: `
      모든 팝업 디자인을 통일하고, 범례를 이미지에서 HTML 구조로 개선하는 등 UI 컴포넌트 기준을 정립했습니다.
      `,
      result: `
      서비스 전반의 시각적 일관성과 가독성을 확보했습니다.
      `,
    },
    {
      situation: `
      PC와 Mobile 서비스가 별도 URL로 운영되면서 UI 구조와 디자인이 미묘하게 달라 사용자 경험이 일관되지 않은 문제가 있었습니다.
      `,
      action: `
      두 환경의 UI 구조와 디자인을 비교 분석하여 공통 UX 기준으로 통합 정리했습니다.
      `,
      result: `
      디바이스에 관계없이 일관된 사용자 경험을 제공하는 UI 구조를 구축했습니다.
      `,
    },
    {
      situation: `
      메뉴 선택에 따른 API 호출 로직이 포함된 2,000라인 이상의 단일 메서드 구조로 인해 수정 및 기능 추가가 어려웠습니다.
      `,
      action: `
      UI 단위 → 기능 단위로 컴포넌트를 분리하여 구조를 모듈화했습니다.
      `,
      result: `
      메뉴 추가, API 연동, UI 수정 작업 시간을 60분 → 5분 수준으로 단축했습니다.
      `,
    },
    {
      situation: `
      일반적으로 기획-디자인-개발 간 커뮤니케이션 비용이 발생하여 일정 지연 가능성이 존재했습니다.
      `,
      action: `
      기획, 디자인, 개발을 엔드-투-엔드로 직접 수행하며 의사결정 구조를 단순화했습니다.
      `,
      result: `
      커뮤니케이션 비용을 최소화하여 2개월 내 UI/UX 전면 개편을 완료했습니다.
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
