import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const zizizip: Project = {
  id: 'zizizip',
  title: 'Zizizip',
  subtitle: '부동산 지도 서비스',
  description: {
    short: 'LH, SH 등 공공기관의 주택 정보를 지도 위에 표출해 주는 프로젝트',
    full: ``,
  },
  images: {
    thumbnail: '/projects/zizizip/thumbnail.webp',
    full: [],
    captions: [],
  },
  urls: {
    github: 'https://github.com/hwonda/zizizip',
    demo: 'https://www.zizizip.com',
  },
  points: [
    {
      challenges: ``,
      solutions: ``,
      results: ``,
    },
  ],
  startTime: '2025.09',
  endTime: '현재',
  period: getProjectPeriod('2025.09', '현재'),
  role: 'Frontend / Backend / SEO',
  team: '개인',
  techStack: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Redux',
    'Vercel',
    'Git',
  ],
};
