import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const koastUi: Project = {
  id: 'koast-ui',
  title: '@koast/ui',
  subtitle: 'React + TailwindCSS UI 라이브러리',
  description: {
    short:
      '사내 React UI 라이브러리 도입을 기획하고 개발 프로세스를 주도하여 팀 전체의 개발 생산성을 향상시켰습니다.',
    full: `
      프론트엔드 기술 표준화와 개발 생산성 향상을 위해 **사내 공용 UI 라이브러리 도입 프로젝트를 기획하고 주도**했습니다.

      기존에 JSP, 타임리프, Vue 등 다양한 프레임워크가 혼재된 환경에서 **기술 스택 표준화의 필요성을 CTO에게 제안**하고, React + Tailwind CSS로의 전환 로드맵을 수립했습니다.

      **주요 활동:**
      - 기술 스택 표준화 제안 및 의사결정 과정 주도
      - 사내 React 스터디 기획 및 운영 (6명 참여)
      - Storybook 기반 문서화 전략 수립으로 팀 간 커뮤니케이션 효율화
      - GitHub Actions 기반 CI/CD 파이프라인 구축 및 배포 프로세스 표준화
      - 사내 commit convention 및 브랜치 전략 정립

      **성과:**
      - 2025년 신규 프로젝트 4개 중 3개에 React, Tailwind CSS 적용
      - 백엔드 개발자의 UI 구현 속도 10배 이상 향상
      - 팀 협업 프로세스 체계화 및 개발 문화 개선
      `,
  },
  images: {
    thumbnail: {
      url: '/projects/koast-ui/thumbnail.webp',
    },
    full: [
      { url: '/projects/koast-ui/1.webp', caption: '프로젝트 개요' },
      { url: '/projects/koast-ui/2.webp', caption: 'NPM 배포' },
      {
        url: '/projects/koast-ui/3.webp',
        caption: 'Github Actions 배포 자동화',
      },
      { url: '/projects/koast-ui/4.webp', caption: 'Storybook Docs' },
      { url: '/projects/koast-ui/5.webp', caption: 'Storybook Docs' },
    ],
  },
  urls: {
    github: 'https://github.com/koast-crew/koast-ui',
    demo: 'https://www.npmjs.com/package/@koast/ui',
    etc: [
      {
        title: 'Storybook Docs',
        url: 'https://koast-crew.github.io/koast-ui/?path=/docs/components-button--docs',
      },
    ],
  },
  points: [
    {
      situation: `JSP, 타임리프, Vue 등 프레임워크 혼재로 팀 간 협업 기준과 개발 방식 불일치 발생`,
      task: `신규 프로젝트의 기술 스택을 단일 기준으로 정해 협업 효율과 코드 일관성 확보 필요`,
      action: `CTO와 여러 협의를 거쳐 신규 프로젝트 표준 스택을 React + Tailwind CSS로 확정`,
      result: `2025년 신규 프로젝트 4개 중 3개에 React + Tailwind CSS 적용`,
    },
    {
      situation: `사내 인력 다수가 백엔드 중심이라 React 경험 부족으로 초기 개발 러닝커브 높음`,
      task: `백엔드 개발자도 실무 투입 가능한 수준으로 React 기본 역량을 빠르게 끌어올릴 교육 체계 필요`,
      action: `React 공식문서 기반 사내 스터디 운영, 6명 참여 구조로 핵심 개념/실습 중심 학습 진행`,
      result: `사내 개발자의 React 적응 속도 개선, 신규 프로젝트 초기 셋업/개발 진입 시간 단축`,
    },
    {
      situation: `백엔드 개발자의 React UI 구현 속도가 느려 화면 개발 병목 발생`,
      task: `반복 UI 구현 비용을 줄이고 공통 컴포넌트 재사용 기반 생산성 확보 필요`,
      action: `사내 공용 라이브러리 \`@koast/ui\` 개발로 백엔드 개발자도 즉시 조합 가능한 UI 컴포넌트 제공`,
      result: `Time Slider, Legend 등 특화 컴포넌트 개발 속도 기존 대비 10배 이상 향상`,
    },
    {
      situation: `Time Slider 등 해양 시각화 UI를 프로젝트마다 재구현해야 해 반복 개발 비효율 누적`,
      task: `도메인 특화 UI를 재사용 가능한 단일 컴포넌트로 표준화해 구현 시간 단축 필요`,
      action: `해양 기상 서비스 공통 요구를 반영한 Time Slider 컴포넌트를 라이브러리 형태로 설계`,
      result: `기존 약 8시간 소요되던 UI 구현 시간을 10분 이내로 단축`,
    },
    {
      situation: `텍스트 문서만으로는 컴포넌트 실제 동작 확인이 어려워 사용 오류와 학습 비용 증가`,
      task: `컴포넌트 사용법과 동작 결과를 동시에 검증할 수 있는 문서/실험 환경 필요`,
      action: `Storybook 도입으로 실시간 플레이그라운드와 컴포넌트 문서를 통합 제공`,
      result: `개발자가 컴포넌트를 직접 테스트하며 적용 가능한 문서 환경 구축`,
    },
    {
      situation: `빌드/테스트/배포가 수동으로 운영되어 개발 사이클 지연과 환경별 휴먼 에러 위험 존재`,
      task: `릴리즈 프로세스를 자동화해 배포 속도와 버전 신뢰도를 동시에 확보할 CI/CD 체계 필요`,
      action: `GitHub Actions 기반 \`Build → Release → Storybook Deploy → NPM Publish\` 파이프라인 자동화 구축`,
      result: `배포 자동화와 버전 표준화로 팀 생산성 향상, 오류 없는 안정적 배포 환경 확보`,
    },
  ],
  startTime: '2025.03',
  endTime: '2025.06',
  period: getProjectPeriod('2025.03', '2025.06'),
  role: 'Frontend · DevOps',
  team: 'KOAST',
  techStack: [
    'React.js',
    'TypeScript',
    'Tailwind CSS',
    'Vite',
    'Storybook',
    'Git',
    'Github Actions',
    'npm',
  ],
};
