import { blobUrl } from '@/constants/common';
import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const reactMultiEmail: Project = {
  id: 'react-multi-email',
  title: 'React-multi-email',
  subtitle: 'Open Source Contribute',
  description: {
    short:
      '오픈소스 라이브러리 개선을 주도하여 테스트 코드 도입과 문서화를 통해 안정성과 사용성을 향상시켰습니다.',
    full: `
      github stars: \`317\`, npm weekly downloads: \`100,000+\`

      react-multi-email 오픈소스 라이브러리에 기여하여 **테스트 코드 도입, 버그 수정, 문서화를 주도**했습니다.

      **주요 활동:**
      - 사용자 이슈 분석 및 버그 수정 PR 제출
      - Jest 기반 핵심 로직 유닛 테스트 설계 및 작성
      - Docusaurus/MDX 기반 공식 문서 구축 기획
      - 플레이그라운드 및 props 설명 문서 작성

      **성과:**
      - 이메일 입력 무한 로딩 버그 해소
      - 자동 회귀 검증 가능한 테스트 기반 확보
      - 사용자가 빠르게 이해하고 적용 가능한 문서 환경 구축
      `,
  },
  images: {
    thumbnail: { url: `${blobUrl}/projects/react-multi-email/thumbnail.webp` },
    full: [
      { url: `${blobUrl}/projects/react-multi-email/1.webp` },
      { url: `${blobUrl}/projects/react-multi-email/2.webp` },
      { url: `${blobUrl}/projects/react-multi-email/3.webp` },
      { url: `${blobUrl}/projects/react-multi-email/4.webp` },
      { url: `${blobUrl}/projects/react-multi-email/5.webp` },
      { url: `${blobUrl}/projects/react-multi-email/6.webp` },
      { url: `${blobUrl}/projects/react-multi-email/7.webp` },
      { url: `${blobUrl}/projects/react-multi-email/8.webp` },
      { url: `${blobUrl}/projects/react-multi-email/9.webp` },
    ],
  },
  urls: {
    github: 'https://github.com/axisj/react-multi-email',
    demo: 'https://www.npmjs.com/package/react-multi-email',
    etc: [
      {
        title: 'Bug fix PR',
        url: 'https://github.com/axisj/react-multi-email/pull/176',
      },
      {
        title: 'Test code PR',
        url: 'https://github.com/axisj/react-multi-email/pull/158',
      },
      {
        title: 'Docs',
        url: 'https://hwonda.github.io/react-multi-email-docs/',
      },
    ],
  },
  points: [
    {
      images: [
        {
          url: `${blobUrl}/projects/react-multi-email/point1-1.webp`,
          caption:
            'validateEmail의 결과가 실패(false)로 떨어지거나 비동기 검증 루프가 끝난 후에는 반드시 스피너가 종료되도록 수정',
        },
        {
          url: `${blobUrl}/projects/react-multi-email/point1-2.webp`,
          caption: '수정 내용 관련 Test code 작성',
        },
      ],
      situation: `
      이메일 입력 시 Enter 후 validateEmail이 false를 반환하거나 오류가 발생하면 스피너가 종료되지 않는 버그 존재
      `,
      task: `
      비동기 검증 실패/예외 상황에서도 로딩 상태가 반드시 정리되도록 입력 플로우 안정화 필요
      `,
      action: `
      validateEmail 처리 흐름 수정으로 실패/예외/루프 종료 시점마다 스피너 상태 정리, 관련 PR 제출
      `,
      result: `
      PR 머지 완료, 이메일 입력 시 무한 로딩 버그 해소
      `,
    },
    {
      images: [
        {
          url: `${blobUrl}/projects/react-multi-email/point2-0.webp`,
          caption: '테스트 코드 담당자 지정 및 테스트 코드 작성 시작',
        },
        {
          url: `${blobUrl}/projects/react-multi-email/point2-1.webp`,
          caption: 'onBlur 검증 로직 테스트 코드 작성',
        },
        {
          url: `${blobUrl}/projects/react-multi-email/point2-2.webp`,
          caption: 'onDisabled 검증 로직 테스트 코드 작성',
        },
      ],
      situation: `
      테스트 코드 부재로 기능 변경 시 회귀 버그와 런타임 에러 발생 가능성 존재
      `,
      task: `
      핵심 입력/검증 로직을 자동 검증 가능한 형태로 고정해 릴리즈 안정성 확보 필요
      `,
      action: `
      onBlur, disabled 등 주요 시나리오 중심으로 Jest 유닛 테스트 작성
      `,
      result: `
      코드 변경 시 자동 회귀 검증 가능한 테스트 기반 확보
      `,
    },
    {
      images: [
        {
          url: `${blobUrl}/projects/react-multi-email/point3-1.webp`,
          caption: '공식 문서 구축(랜딩 페이지)',
        },
        {
          url: `${blobUrl}/projects/react-multi-email/point3-2.webp`,
          caption: '플레이그라운드',
        },
        {
          url: `${blobUrl}/projects/react-multi-email/point3-3.webp`,
          caption: 'props 설명(light 모드)',
        },
      ],
      situation: `
      사용 가이드가 부족해 신규 사용자가 컴포넌트 도입/적용 흐름을 빠르게 이해하기 어려운 문제 존재
      `,
      task: `
      설치부터 props 활용까지 학습 비용을 줄일 수 있는 공식 문서 체계 구축 필요
      `,
      action: `
      Docusaurus/MDX 기반 공식 문서와 플레이그라운드 중심 사용 가이드 구축
      `,
      result: `
      사용자가 빠르게 이해하고 적용 가능한 문서 환경 확보
      `,
    },
  ],
  startTime: '2023.07',
  endTime: '2024.01',
  period: getProjectPeriod('2023.07', '2024.01'),
  role: 'Contributor',
  team: 'AXISJ(Open Source Team)',
  techStack: [
    'React.js',
    'TypeScript',
    'Jest',
    'Docusaurus',
    'mdx',
    'Git',
    'Github Actions',
    'npm',
  ],
};
