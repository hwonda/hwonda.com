import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const aiCodeReviewer: Project = {
  id: 'ai-code-reviewer',
  title: 'AI 코드 리뷰어',
  subtitle: '오픈 LLM 기반 사내 코드 리뷰 시스템 구축',
  description: {
    short: 'AI 코드 리뷰어',
    full: 'AI 코드 리뷰어',
  },
  images: {
    thumbnail: { url: '/projects/aqua-farm-2025/thumbnail.webp' },
  },
  startTime: '2025.06',
  endTime: '현재',
  period: getProjectPeriod('2025.06', '현재'),
  role: 'PM / Design / Frontend',
  team: 'Koast',
  techStack: [
    'React.js',
    'TypeScript',
    'Tailwind CSS',
    'Vite',
    'Swagger',
    'Figma',
    'Jira',
    'Git',
  ],
};
