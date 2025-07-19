import type { Project } from '@/types/projects';

export const blog: Project = {
  id: 'blog',
  title: '프론트엔드 기술 블로그',
  description: {
    short:
      'Next.js 기반 기술 블로그로, SEO 최적화가 구성된 개인 블로그 플랫폼입니다.',
    full: `Next.js 기반 기술 블로그를 개발하고 Vercel에 배포했습니다.
Google Analytics, robots.txt, Sitemap 설정을 통한 SEO 최적화를 구성했습니다.`,
  },
  images: {
    thumbnail: '/projects/blog/thumbnail.webp',
  },
  period: '2024.07 ~ 현재',
  techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
};
