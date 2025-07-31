import type { Project } from '@/types/projects';

export const aquaFarm2025: Project = {
  id: 'aqua-farm-2025',
  title: '스마트 양식장 2025',
  subtitle: '연구용 스마트 양식 데이터 시각화 플랫폼',
  description: {
    short: '스마트 양식 기술을 활용한 양식장 관리 시스템입니다.',
    full: `IoT 센서와 AI 기술을 활용하여 양식장의 환경을 모니터링하고 제어하는 시스템입니다.`,
  },
  images: {
    thumbnail: '/projects/aqua-farm-2025/thumbnail.webp',
  },
  period: '2025.06 ~ 현재 (2개월~)',
  role: 'Frontend',
  team: 'Koast',
  techStack: ['React', 'TailwindCSS', 'Vite'],
};
