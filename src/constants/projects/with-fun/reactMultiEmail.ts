import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const reactMultiEmail: Project = {
  id: 'react-multi-email',
  title: 'React-multi-email',
  subtitle: 'Open Source Contribute',
  description: {
    short:
      '다중 이메일 입력을 위한 React 컴포넌트 라이브러리로, 사용자 친화적인 인터페이스와 검증 기능을 제공합니다.',
    full: '오픈 소스 프로젝트에 기여한 활동으로, Jest를 사용하여 유닛 테스트를 작성하고 검증했으며, 버그를 수정하고 PR과 Issue를 확인했습니다.\n 또한, Docusaurus와 mdx를 사용해 라이브러리를 문서화했습니다.',
  },
  images: {
    thumbnail: '/projects/react-multi-email/thumbnail.webp',
    full: [
      '/projects/react-multi-email/1.webp',
      '/projects/react-multi-email/2.webp',
      '/projects/react-multi-email/3.webp',
      '/projects/react-multi-email/4.webp',
      '/projects/react-multi-email/5.webp',
      '/projects/react-multi-email/6.webp',
      '/projects/react-multi-email/7.webp',
      '/projects/react-multi-email/8.webp',
    ],
  },
  urls: {
    github: 'https://github.com/axisj/react-multi-email',
    demo: 'https://www.npmjs.com/package/react-multi-email',
    etc: [
      {
        title: 'Docs',
        url: 'https://hwonda.github.io/react-multi-email-docs/',
      },
    ],
  },
  points: [
    {
      challenges: `이메일 입력 시 Enter 키를 눌렀을 때, validateEmail 함수가 false를 반환하거나 오류가 발생하는 경우 스피너가 멈추지 않는 문제를 해결했습니다.`,
      solutions: `철저한 테스트와 타입 안정성을 보장하기 위해 TypeScript를 도입했습니다.
또한 ARIA 속성과 키보드 네비게이션을 구현하여 접근성을 높였습니다.`,
      results: `npm에서 주간 다운로드 5,000회 이상을 기록하며 많은 개발자들에게 사용되고 있습니다.
GitHub에서 300개 이상의 별을 받았으며, 지속적인 기여와 개선이 이루어지고 있습니다.`,
    },
  ],
  startTime: '2023.07',
  endTime: '2024.01',
  period: getProjectPeriod('2023.07', '2024.01'),
  role: 'Contributor/Maintainer',
  team: 'AXISJ(Open Source Team)',
  techStack: [
    'Github',
    'React',
    'Jest',
    'Docusaurus',
    'mdx',
    'Git',
    'Github Actions',
  ],
};
