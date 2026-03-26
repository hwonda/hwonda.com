import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const blog: Project = {
  id: 'blog',
  title: 'Blog',
  subtitle: '프론트엔드 기술 블로그',
  description: {
    short:
      'MDX 기반 기술 블로그 플랫폼을 기획하고 개발하여 SEO 최적화와 콘텐츠 확장성을 확보했습니다.',
    full: `
      커스터마이징 가능한 콘텐츠 플랫폼을 목표로 **MDX 기반 기술 블로그를 기획하고 1인 개발을 주도**했습니다.

      **주요 활동:**
      - 기술 블로그 플랫폼 기획 및 콘텐츠 전략 수립
      - MDX 기반 유연한 콘텐츠 작성 환경 설계
      - 코드 하이라이팅 및 문서 구조 자동화 구현
      - SEO 최적화 전략 수립 (Sitemap, RSS, OpenGraph)
      - 코드 스플리팅 및 lazy loading 성능 최적화

      **성과:**
      - 코드 중심 기술 글을 가독성 있게 작성 가능한 콘텐츠 환경 구축
      - 검색 엔진 노출을 위한 자동화 SEO 파이프라인 구축
      - 콘텐츠 확장 시에도 안정적 렌더링 성능 유지
      `,
  },
  points: [
    {
      situation: `
      기존 Markdown 표현력 한계로 코드 중심 기술 글을 가독성 있게 작성하기 어려운 문제 존재
      `,
      task: `
      기술 문서 작성 유연성과 표현력을 높일 수 있는 콘텐츠 렌더링 구조 개선 필요
      `,
      action: `
      MDX 기반 구조 도입으로 코드 블록 커스텀 렌더링과 JSX 컴포넌트 확장 구조 설계
      `,
      result: `
      코드 중심 기술 글을 가독성 있게 작성 가능한 콘텐츠 환경 구축
      `,
    },
    {
      situation: `
      정적 블로그에서 SEO/피드 관리를 수동 처리할 경우 운영 및 유지보수 부담 증가
      `,
      task: `
      검색 노출 지표를 유지하면서 반복 운영 작업을 자동화할 빌드 파이프라인 필요
      `,
      action: `
      빌드 시점 Sitemap, RSS 자동 생성 스크립트 구현
      `,
      result: `
      검색 엔진 노출을 위한 자동화 SEO 파이프라인 구축
      `,
    },
    {
      situation: `
      코드 블록과 콘텐츠 증가에 따라 페이지 로딩 성능 저하 가능성 존재
      `,
      task: `
      콘텐츠 확장 시에도 초기 로딩 비용을 제어할 렌더링 최적화 전략 필요
      `,
      action: `
      코드 스플리팅과 lazy loading 적용으로 필요한 리소스만 선택 로딩하도록 최적화
      `,
      result: `
      콘텐츠 양 증가 상황에서도 안정적 렌더링 성능 유지
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
  urls: {
    github: 'https://github.com/hwonda/blog',
    demo: 'https://www.hwonda.com/blog',
  },
  startTime: '2024.07',
  endTime: '2025.01',
  period: getProjectPeriod('2024.07', '2025.01'),
  role: '1인 주도 개발',
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
