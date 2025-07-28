import type { Project } from '@/types/projects';

export const blog: Project = {
  id: 'blog',
  title: 'Blog',
  subtitle: '프론트엔드 기술 블로그',
  description: {
    short:
      'Next.js 기반 기술 블로그로, SEO 최적화가 구성된 개인 블로그 플랫폼입니다.',
    full: `Next.js 기반 기술 블로그를 개발하고 Vercel에 배포했습니다.
        TailwindCSS를 사용하여 스타일을 구현하고, TypeScript를 사용하여 타입 안전성을 보장했습니다.
        Google Analytics, robots.txt, Sitemap 설정을 통한 SEO 최적화를 구성했습니다.
        Giscus를 사용하여 댓글 기능을 구현했습니다.`,
  },
  images: {
    thumbnail: '/projects/blog/thumbnail.webp',
    full: [
      '/projects/blog/1.webp',
      '/projects/blog/2.webp',
      '/projects/blog/3.webp',
      '/projects/blog/4.webp',
      '/projects/blog/5.webp',
      '/projects/blog/6.webp',
      '/projects/blog/7.webp',
      '/projects/blog/8.webp',
    ],
  },
  period: '2024.07 ~ 현재 (1년~)',
  role: 'Fullstack',
  team: '개인',
  techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
};
