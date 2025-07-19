import type { Project } from '@/types/projects';

export const mmis2023: Project = {
  id: 'mmis-2023',
  title: 'MMIS',
  description: {
    short: '해양 기상 정보 시스템입니다.',
    full: `해양 기상 정보를 수집, 분석, 제공하는 시스템입니다.`,
  },
  images: {
    thumbnail: '/projects/mmis/thumbnail.webp',
  },
  techStack: ['Vue.js', 'Node.js', 'PostgreSQL'],
};
