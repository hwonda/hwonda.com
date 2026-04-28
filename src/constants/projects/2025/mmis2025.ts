import { blobUrl } from '@/constants/common';
import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const mmis2025: Project = {
  id: 'mmis2025',
  title: '기상청 2025',
  subtitle: '대국민 서비스 UI/UX 개선',
  description: {
    short:
      '기상청 대국민 서비스 UI/UX 개편 프로젝트를 기획부터 개발까지 주도하여 사용자 만족도를 100% 향상시켰습니다.',
    full: `
      기상청 대국민 서비스의 노후화된 UI 개선을 위해 **기획, 디자인, 개발 전 과정을 주도하며 PC/Mobile UI/UX 전면 개편 프로젝트를 리딩**했습니다.

      **주요 활동:**
      - 기상청 실무진과 직접 협업하여 사용자 불편 사항 도출 및 요구사항 정의
      - 네비게이션 구조, 검색 위치, 타임슬라이더 등 핵심 인터페이스 재설계
      - UI 컴포넌트 표준화 및 PC/Mobile 공통 UX 기준 수립
      - 2,000라인 이상 레거시 코드 모듈화 및 리팩토링 주도

      **성과:**
      - 사용자 만족도 4점 → 8점 상승 (100% 개선)
      - 평균 체류시간 3분 → 6분 증가 (2배 향상)
      - 2개월 내 UI/UX 전면 개편 완료
      `,
  },
  points: [
    {
      images: [
        { url: `${blobUrl}/projects/mmis-2025/asis.webp`, caption: '기존 UI' },
        {
          url: `${blobUrl}/projects/mmis-2025/tobe.webp`,
          caption: '신규 UI(고객사 컨펌 완료된 디자인 시안)',
        },
        {
          url: `${blobUrl}/projects/mmis-2025/production.webp`,
          caption: '개편 후 서비스 화면',
        },
      ],
      situation: `
      기존 UI 가독성과 사용 흐름이 낮아 사용자가 원하는 정보를 빠르게 찾기 어려운 구조
      `,
      task: `
      실무진 요구를 반영해 핵심 탐색 흐름을 재설계하고 사용성 지표 개선
      `,
      action: `
      기상청 실무진과 협업해 불편 사항 도출 후 네비게이션 구조, 검색 위치, 타임슬라이더 UX 중심으로 핵심 흐름 재설계
      `,
      result: `
      사용자 만족도 **4점 → 8점 상승**, 체류시간 **3분 → 6분 증가**
      `,
    },
    {
      images: [
        {
          url: `${blobUrl}/projects/mmis-2025/point2-1.webp`,
          caption:
            '기존 PC/Mobile의 모든 화면을 사용자 흐름에 맞게 나열(문제 파악)',
        },
        {
          url: `${blobUrl}/projects/mmis-2025/3.webp`,
          caption: 'PC/Mobile UI 불일치 개선안',
        },
        {
          url: `${blobUrl}/projects/mmis-2025/4.webp`,
          caption: '범례 UI 개선안',
        },
      ],
      situation: `
      PC/Mobile이 별도 URL로 운영되며 UI 구조와 디자인 차이로 사용자 경험 일관성 저하
      `,
      task: `
      디바이스가 달라도 동일한 인지 흐름을 제공할 공통 UX 기준 통합
      `,
      action: `
      두 환경의 UI 구조와 디자인 비교 분석 후 공통 UX 기준으로 통합 정리
      `,
      result: `
      디바이스와 무관하게 일관된 사용자 경험 제공 가능한 UI 구조 구축
      `,
    },
    {
      images: [
        // {
        //   url: `${blobUrl}/projects/mmis-2025/point3-0.webp`,
        //   caption: '기존 컴포넌트 구조 예시(범례, 실제 코드 아님)',
        // },
        {
          url: `${blobUrl}/projects/mmis-2025/point3-1.webp`,
          caption: '기존에 사용한 메뉴별 범례 정리(메뉴-범례 이미지 매핑)',
        },
        // {
        //   url: `${blobUrl}/projects/mmis-2025/point3-2.webp`,
        //   caption: '신규 컴포넌트 구조(범례 타입별 컴포넌트, util 분리)',
        // },
      ],
      situation: `2,000라인 이상 단일 메서드 구조의 컴포넌트로 수정/기능 추가 난이도 높음`,
      task: `
      유지보수성과 확장성을 높일 수 있도록 기능 단위 모듈화 구조 전환
      `,
      action: `
      UI 단위에서 기능 단위로 컴포넌트를 분리해 구조 모듈화
      `,
      result: `
      메뉴 추가, API 연동, UI 수정 작업 시간 **60분 → 5분 수준 단축**
      `,
    },
    {
      images: [
        {
          url: `${blobUrl}/projects/mmis-2025/point4-1.webp`,
          caption: '기상청 실무진과 의사결정 과정(시안 제출 메일)',
        },
        {
          url: `${blobUrl}/projects/mmis-2025/point4-2.webp`,
          caption: 'Figma 기반 UI/UX 디자인 시안',
        },
        {
          url: `${blobUrl}/projects/mmis-2025/point4-3.webp`,
          caption: 'Gitlab MR',
        },
      ],
      situation: `
      기획-디자인-개발 분리 구조에서 커뮤니케이션 비용으로 빠듯한 일정(2개월) 지연 가능성 존재
      `,
      task: `
      의사결정 단계를 줄여 짧은 기간 내 전면 개편 완료 가능한 실행 구조
      `,
      action: `
      기획, 디자인, 개발의 전 과정을 주도하여 의사결정 구조 단순화
      `,
      result: `
      커뮤니케이션 비용 최소화로 일정 내 UI/UX 전면 개편 완료
      `,
    },
  ],
  images: {
    thumbnail: { url: `${blobUrl}/projects/mmis-2025/thumbnail.webp` },
    full: [
      { url: `${blobUrl}/projects/mmis-2025/0.webp`, caption: '프로젝트 개요' },
      { url: `${blobUrl}/projects/mmis-2025/1.webp` },
      {
        url: `${blobUrl}/projects/mmis-2025/2.webp`,
        caption: 'UI/UX 주요 개선 사항',
      },
      {
        url: `${blobUrl}/projects/mmis-2025/3.webp`,
        caption: 'PC/Mobile UI 불일치 개선안',
      },
      {
        url: `${blobUrl}/projects/mmis-2025/4.webp`,
        caption: '범례 UI 개선안',
      },
      {
        url: `${blobUrl}/projects/mmis-2025/5.webp`,
        caption: '조회 UI 개선안',
      },
      {
        url: `${blobUrl}/projects/mmis-2025/6.webp`,
        caption: '팝업 UI 개선안',
      },
      {
        url: `${blobUrl}/projects/mmis-2025/production.webp`,
        caption: '개편 후 서비스 화면',
      },
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
