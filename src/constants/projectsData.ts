import type { Project, YearProjects } from '../types/projects';
export const projectsData: YearProjects[] = [
  {
    year: '2025',
    projects: [
      {
        id: 1,
        title: 'Diki',
        imageUrl: '/projects/diki/thumbnail.png',
        projectId: 'diki',
      },
      {
        id: 2,
        title: '@koast/ui',
        imageUrl: '/projects/koast-ui/thumbnail.png',
        projectId: 'koast-ui',
      },
      {
        id: 3,
        title: 'MMIS',
        imageUrl: '/projects/mmis/thumbnail.png',
        projectId: 'mmis-2025',
      },
      {
        id: 4,
        title: '스마트양식장',
        imageUrl: '/projects/smart-farm/thumbnail.png',
        projectId: 'smart-farm-2025',
      },
      {
        id: 5,
        title: '항공 위험기상 예측 시스템',
        imageUrl: '/projects/aviation-weather/thumbnail.png',
        projectId: 'aviation-weather',
      },
      {
        id: 6,
        title: '맞춤형 해양예측정보 제공 서비스(나래웨더)',
        imageUrl: '/projects/nare-weather/thumbnail.png',
        projectId: 'nare-weather',
      },
    ],
  },
  {
    year: '2024',
    projects: [
      {
        id: 7,
        title: 'Blog',
        imageUrl: '/projects/blog/thumbnail.png',
        projectId: 'blog',
      },
      {
        id: 8,
        title: '연구용 기상관측 통합관리체계',
        imageUrl: '/projects/weather-system/thumbnail.png',
        projectId: 'weather-system',
      },
      {
        id: 9,
        title: '해양 수색구조 의사결정 지원 시스템(AISAR)',
        imageUrl: '/projects/aisar/thumbnail.png',
        projectId: 'aisar',
      },
      {
        id: 10,
        title: 'MMIS',
        imageUrl: '/projects/mmis/thumbnail.png',
        projectId: 'mmis-2024',
      },
      {
        id: 11,
        title: '스마트양식장',
        imageUrl: '/projects/smart-farm/thumbnail.png',
        projectId: 'smart-farm-2024',
      },
    ],
  },
  {
    year: '2023',
    projects: [
      {
        id: 13,
        title: 'React-multi-email',
        imageUrl: '/projects/react-multi-email/thumbnail.png',
        projectId: 'react-multi-email',
      },
      {
        id: 14,
        title: 'MMIS',
        imageUrl: '/projects/mmis/thumbnail.png',
        projectId: 'mmis-2023',
      },
      {
        id: 15,
        title: '스마트양식장',
        imageUrl: '/projects/smart-farm/thumbnail.png',
        projectId: 'smart-farm-2023',
      },
    ],
  },
];

// 미리보기에 표시할 프로젝트
export const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'Diki',
    description:
      '개발자를 위한 지식 관리 플랫폼으로, 마크다운 기반의 문서 작성과 공유 기능을 제공합니다.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/projects/diki/thumbnail.png',
    projectId: 'diki',
  },
  {
    id: 9,
    title: '해양 수색구조 의사결정 지원 시스템(AISAR)',
    description:
      'AI를 활용한 해양 수색구조 작전 의사결정을 지원하는 시스템으로, 실시간 데이터 분석과 시각화 기능을 제공합니다.',
    tags: ['React', 'TypeScript', 'D3.js', 'Leaflet'],
    imageUrl: '/projects/aisar/thumbnail.png',
    projectId: 'aisar',
  },
  {
    id: 13,
    title: 'React-multi-email',
    description:
      '다중 이메일 입력을 위한 React 컴포넌트 라이브러리로, 사용자 친화적인 인터페이스와 검증 기능을 제공합니다.',
    tags: ['React', 'TypeScript', 'npm package'],
    imageUrl: '/projects/react-multi-email/thumbnail.png',
    projectId: 'react-multi-email',
  },
];
