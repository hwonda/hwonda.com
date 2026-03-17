import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const koastUi: Project = {
  id: 'koast-ui',
  title: '@koast/ui',
  subtitle: 'React + TailwindCSS UI 라이브러리',
  description: {
    short:
      '사내 React UI 라이브러리로, 개발 러닝커브를 낮추고 일관된 디자인 아이덴티티를 제공합니다.',
    full: `React 기반 UI 개발의 러닝커브를 낮추기 위해 자발적으로 **사내 공용 UI 라이브러리**를 자발적으로 개발했습니다.

      기존에 JSP, 타임리프, Vue 등 다양한 프레임워크가 혼재된 환경에서 React로 표준화하는 과정에서 **UI 구현 속도 저하가 큰 이슈사항**이었고, 
      특히 지도 요소에 필수적인 Time slider나 Legend 같은 특화 컴포넌트를 React로 구현하고 공용화하는 데 어려움이 있었습니다.
      
      Github Pages로 **Storybook Docs를 제작**하고 **NPM에 배포**했으며, **Github Actions를 활용하여 태그 생성부터 배포까지 자동화**하였습니다. 
      백엔드 개발자의 **UI 구현 속도 향상 및 서비스 전반에 일관된 디자인 아이덴티티를 부여**했습니다.`,
  },
  images: {
    thumbnail: {
      url: '/projects/koast-ui/thumbnail.webp',
      caption: '라이브러리 NPM 배포 화면',
    },
    full: [
      { url: '/projects/koast-ui/1.webp', caption: 'Github Actions 배포 화면' },
      { url: '/projects/koast-ui/2.webp', caption: 'Storybook Docs 화면' },
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
      challenges: `기존에 JSP, 타임리프, Vue 등 다양한 프레임워크가 혼재되어 팀원들 간의 협업이 어려웠습니다.`,
      solutions: `CTO와 여러 차례 회의를 통해 신규 프로젝트에 React, Tailwind CSS로 표준화를 결정했습니다.`,
      results: `2025년부터 신규 프로젝트 4개 중 3개의 프로젝트에 React, Tailwind CSS를 적용했습니다.`,
    },
    {
      challenges: `사내 개발자가 대부분 백엔드 개발자라, React 개발 경험이 적어 React 개발 러닝커브가 높았습니다.`,
      solutions: `사내 개발자들을 대상으로 React 개발 러닝커브를 낮추기 위해 React 스터디를 진행했습니다. 6명의 팀원이 참여했고, React 공식문서를 기준으로 스터디를 진행했습니다.`,
      results: `사내 개발자들의 React 개발 러닝커브가 크게 낮아졌으며, 신규 프로젝트에서 React를 적용할 때 더 빠르게 적응할 수 있게 되었습니다.`,
    },
    {
      challenges: `백엔드 개발자의 React UI 구현 속도가 느렸습니다.`,
      solutions: `@koast/ui라는 사내 공용 UI 라이브러리를 개발하여, 백엔드 개발자들이 더 빠르게 React UI를 구현할 수 있도록 했습니다.`,
      results: `지도 요소에 필수적인 Time Slider나 Legend 같은 특화 컴포넌트 개발이 기존 대비 10배 이상 향상되었습니다.`,
    },
    {
      challenges: `Time Slider 등 해양 데이터 시각화 UI를 프로젝트마다 매번 새로 구현해야 하는 비효율이 있었습니다.`,
      solutions: `해양 기상 서비스에 공통적으로 사용되는 Time Slider 컴포넌트를 라이브러리 형태로 설계했습니다.`,
      results: `기존 약 8시간 소요되던 UI 구현 시간을 10분 이내로 단축했습니다.`,
    },
    {
      challenges: `컴포넌트 사용 방법을 문서로만 제공할 경우 개발자가 실제 동작을 확인하기 어려운 문제가 있었습니다.`,
      solutions: `Storybook을 도입하여 실시간 플레이그라운드와 컴포넌트 문서를 함께 제공했습니다.`,
      results: `개발자가 컴포넌트를 직접 테스트하며 사용할 수 있는 문서 환경을 구축했습니다.`,
    },
    {
      challenges: `프로젝트의 빌드, 테스트, 배포 과정이 수동으로 진행되어 개발 사이클이 느리고 환경별 배포 시 휴먼 에러 발생 위험이 있었습니다.`,
      solutions: `GitHub Actions 기반의 CI/CD 파이프라인을 구축했습니다. \`Build → Release → Storybook Deploy → NPM Publish\` 파이프라인을 자동화했습니다.`,
      results: `배포 작업의 자동화와 표준화된 버전 관리를 통해 개발팀의 생산성을 향상시키고, 오류 없는 안정적인 배포 환경을 구축하는 데 성공했습니다.`,
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
