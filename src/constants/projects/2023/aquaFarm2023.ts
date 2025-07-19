import type { Project } from '@/types/projects';

export const aquaFarm2023: Project = {
  id: 'aqua-farm-2023',
  title: '스마트양식장',
  description: {
    short: '스마트 양식 기술을 활용한 양식장 관리 시스템입니다.',
    full: `IoT 센서와 AI 기술을 활용하여 양식장의 환경을 모니터링하고 제어하는 시스템입니다.`,
  },
  images: {
    thumbnail: '/projects/aqua-farm-2023/thumbnail.webp',
  },
  techStack: ['React', 'Node.js', 'IoT'],
};
