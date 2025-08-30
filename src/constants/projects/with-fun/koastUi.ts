import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const koastUi: Project = {
  id: 'koast-ui',
  title: '@koast/ui',
  subtitle: 'React + TailwindCSS UI 라이브러리',
  description: {
    short:
      '사내 React UI 라이브러리로, 개발 러닝커브를 낮추고 일관된 디자인 아이덴티티를 제공합니다.',
    full: `React 기반 UI 개발의 러닝커브를 낮추기 위해 자발적으로 사내 공용 UI 라이브러리를 개발했습니다.
Github Pages로 Storybook Docs를 제작하고 NPM에 배포했으며,
지도(map)용 Time slider, Legend 등 사내 특화 컴포넌트를 제공합니다.
백엔드 개발자의 UI 구현 속도 향상 및 서비스 전반에 일관된 디자인 아이덴티티를 부여했습니다.

주요 기능:
- 해양 데이터 시각화 컴포넌트
- 해양 지도 컴포넌트
- 데이터 테이블 및 필터링
- 반응형 디자인`,
  },
  images: {
    thumbnail: '/projects/koast-ui/thumbnail.webp',
    full: [
      '/projects/koast-ui/1.webp',
      '/projects/koast-ui/2.webp',
      '/projects/koast-ui/3.webp',
      '/projects/koast-ui/4.webp',
      '/projects/koast-ui/5.webp',
      '/projects/koast-ui/6.webp',
      '/projects/koast-ui/7.webp',
      '/projects/koast-ui/8.webp',
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
      challenges: `다양한 해양 데이터 형식을 일관되게 처리하고 시각화하는 것이 가장 큰 도전이었습니다.
또한 대용량 데이터를 효율적으로 렌더링하면서도 성능을 유지하는 것이 중요했습니다.`,
      solutions: `데이터 정규화 및 캐싱 전략을 도입하여 다양한 데이터 소스를 효율적으로 처리했습니다.
또한 가상화 기법과 WebGL 기반 렌더링을 활용하여 대용량 데이터도 원활하게 시각화할 수 있도록 했습니다.`,
      results: `해양 관련 애플리케이션 개발 시간이 50% 단축되었으며, 일관된 사용자 경험을 제공할 수 있게 되었습니다.
현재 여러 해양 관련 프로젝트에서 핵심 라이브러리로 사용되고 있습니다.`,
    },
  ],
  startTime: '2025.03',
  endTime: '2025.04',
  period: getProjectPeriod('2025.03', '2025.04'),
  role: 'Frontend / DevOps',
  team: 'KOAST',
  techStack: [
    'React.js',
    'TypeScript',
    'Tailwind CSS',
    'Vite',
    'Storybook',
    'Git',
    'Github Actions',
  ],
};
