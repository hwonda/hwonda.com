import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const blog: Project = {
  id: 'blog',
  title: 'Blog',
  subtitle: '프론트엔드 기술 블로그',
  description: {
    short:
      'Next.js 기반 기술 블로그로, SEO 최적화가 구성된 개인 블로그 플랫폼입니다.',
    full: `
    커스터마이징이 가능한 콘텐츠 플랫폼을 목표로 MDX 기반 프론트엔드 기술 블로그를 직접 설계·개발했습니다.

    \`next-mdx-remote\`와 \`gray-matter\`를 활용해 마크다운 내 JSX 컴포넌트를 사용할 수 있는 유연한 콘텐츠 작성 환경을 구축하고, 코드 하이라이팅 및 문서 구조 자동화를 적용했습니다.

    또한 Sitemap, RSS 등 SEO 최적화를 위한 정적 파일을 빌드 시 자동 생성하고, OpenGraph 메타데이터를 동적으로 구성하여 검색 및 공유 효율을 개선했습니다.
    `,
  },
  points: [
    {
      situation: `
      기존 Markdown은 표현력이 제한적이어서 코드 중심 기술 글을 가독성 있게 작성하기 어려운 문제가 있었습니다.
      `,
      action: `
      MDX 기반 구조를 도입하여 코드 블록 중심 커스텀 렌더링과 JSX 컴포넌트 확장 구조를 설계했습니다.
      `,
      result: `
      코드 중심 기술 글을 가독성 있게 작성할 수 있는 환경을 구축했습니다.
      `,
    },
    {
      situation: `
      정적 블로그에서 SEO 및 피드 관리가 수동으로 이루어질 경우 유지보수 부담이 증가했습니다.
      `,
      action: `
      빌드 시점에 Sitemap, RSS 등을 자동 생성하는 스크립트를 구현했습니다.
      `,
      result: `
      검색 엔진 노출을 위한 자동화된 SEO 파이프라인을 구축했습니다.
      `,
    },
    {
      situation: `
      코드 블록과 콘텐츠가 많아질수록 페이지 로딩 성능 저하 가능성이 있었습니다.
      `,
      action: `
      코드 스플리팅과 lazy loading을 적용해 필요한 리소스만 로딩하도록 최적화했습니다.
      `,
      result: `
      콘텐츠 양이 증가해도 안정적인 렌더링 성능을 유지했습니다.
      `,
    },
  ],
  images: {
    thumbnail: { url: '/projects/blog/thumbnail.webp' },
    full: [
      { url: '/projects/blog/0.webp' },
      { url: '/projects/blog/1.webp' },
      { url: '/projects/blog/2.webp' },
      { url: '/projects/blog/3.webp' },
      { url: '/projects/blog/4.webp' },
      { url: '/projects/blog/5.webp' },
    ],
  },
  startTime: '2024.07',
  endTime: '2025.01',
  period: getProjectPeriod('2024.07', '2025.01'),
  role: 'Fullstack',
  team: '개인',
  techStack: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Vercel',
    'Figma',
    'Git',
    'Github Actions',
  ],
};
