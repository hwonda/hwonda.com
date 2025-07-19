import type { Project } from '@/types/projects';

export const reactMultiEmail: Project = {
  id: 'react-multi-email',
  title: 'React-multi-email',
  description: {
    short:
      '다중 이메일 입력을 위한 React 컴포넌트 라이브러리로, 사용자 친화적인 인터페이스와 검증 기능을 제공합니다.',
    full: `오픈 소스 프로젝트에 기여한 활동으로,
Jest를 사용하여 유닛 테스트를 작성하고 검증했으며,
버그를 수정하고 PR과 Issue를 확인했습니다.
Docusaurus와 mdx를 사용해 라이브러리를 문서화했습니다.

주요 기능:
- 드래그 앤 드롭 지원
- 이메일 유효성 검사
- 커스텀 스타일링
- 접근성 지원`,
  },
  images: {
    thumbnail: '/projects/react-multi-email/thumbnail.webp',
    full: [
      '/projects/react-multi-email.webp',
      '/projects/react-multi-email.webp',
      '/projects/react-multi-email.webp',
    ],
  },
  urls: {
    github: 'https://github.com/username/react-multi-email',
    demo: 'https://react-multi-email-demo.com',
  },
  points: [
    {
      challenges: `다양한 React 버전과 환경에서 일관되게 작동하는 컴포넌트를 개발하는 것이 가장 큰 도전이었습니다.
또한 접근성 표준을 준수하면서도 사용하기 쉬운 인터페이스를 제공하는 것이 중요했습니다.`,
      solutions: `철저한 테스트와 타입 안정성을 보장하기 위해 TypeScript를 도입했습니다.
또한 ARIA 속성과 키보드 네비게이션을 구현하여 접근성을 높였습니다.`,
      results: `npm에서 주간 다운로드 5,000회 이상을 기록하며 많은 개발자들에게 사용되고 있습니다.
GitHub에서 300개 이상의 별을 받았으며, 지속적인 기여와 개선이 이루어지고 있습니다.`,
    },
  ],
  period: '2023.06 ~ 2024.08',
  techStack: ['Github', 'React', 'Jest', 'Docusaurus', 'mdx'],
};
