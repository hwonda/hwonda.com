import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const reactMultiEmail: Project = {
  id: 'react-multi-email',
  title: 'React-multi-email',
  subtitle: 'Open Source Contribute',
  description: {
    short:
      '다중 이메일 입력을 위한 React 컴포넌트 라이브러리로, 사용자 친화적인 인터페이스와 검증 기능을 제공합니다.',
    full: `
    react-multi-email 오픈소스 라이브러리에 기여하여 테스트 코드 도입, 버그 수정, 문서화를 통해 라이브러리의 안정성과 사용성을 개선했습니다.

    Jest 기반 유닛 테스트를 추가하여 주요 로직의 신뢰도를 높이고, 실제 사용자 이슈를 분석해 버그를 수정했습니다.
    또한 Docusaurus/MDX 기반 공식 문서를 구축하여 개발자가 라이브러리를 쉽게 도입할 수 있는 환경을 마련했습니다.
    `,
  },
  images: {
    thumbnail: { url: '/projects/react-multi-email/thumbnail.webp' },
    full: [
      { url: '/projects/react-multi-email/1.webp' },
      { url: '/projects/react-multi-email/2.webp' },
      { url: '/projects/react-multi-email/3.webp' },
      { url: '/projects/react-multi-email/4.webp' },
      { url: '/projects/react-multi-email/5.webp' },
      { url: '/projects/react-multi-email/6.webp' },
      { url: '/projects/react-multi-email/7.webp' },
      { url: '/projects/react-multi-email/8.webp' },
      { url: '/projects/react-multi-email/9.webp' },
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
      situation: `
      이메일 입력 시 Enter 키를 눌렀을 때, validateEmail 함수가 false를 반환하거나 오류가 발생하는 경우 스피너가 멈추지 않았습니다.
      `,
      action: `
      validateEmail 함수를 수정하여 스피너가 멈추지 않도록 한 뒤 PR을 제출했습니다.
      `,
      result: `
      PR이 머지되어 이메일 입력 시의 버그가 해결되었습니다.
      `,
    },
    {
      situation: `
      테스트 코드가 없어 기능 변경 시 런타임 에러 발생 가능성이 존재했습니다.
      `,
      action: `
      Jest 기반 핵심 로직 유닛 테스트를 작성했습니다.
      `,
      result: `
      코드 변경 시 안정적으로 검증 가능한 구조를 확보했습니다.
      `,
    },
    {
      situation: `
      사용법에 대한 가이드가 부족해 라이브러리 도입이 어려운 문제가 있었습니다.
      `,
      action: `
      Docusaurus/MDX 기반 공식 문서 및 사용법 가이드를 구축했습니다.
      `,
      result: `
      사용자가 빠르게 이해하고 적용할 수 있는 문서 환경을 구축했습니다.
      `,
    },
  ],
  startTime: '2023.07',
  endTime: '2024.01',
  period: getProjectPeriod('2023.07', '2024.01'),
  role: 'Contributor/Maintainer',
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
