import type { Project } from '@/types/projects';

export const aquaFarm2023: Project = {
  id: 'aqua-farm-2023',
  title: '스마트 양식장 2023',
  subtitle: '스마트 양식 서비스 개발',
  period: '2023.01 ~ 2023.04 (4개월)',
  role: 'Frontend',
  team: 'Koast',
  description: {
    short: '포항 사료연구센터의 스마트 양식장 기획 및 웹앱 개발',
    full: `사료 연구를 위하여 운영 중인 수조 내 양성 어류의 상태정보와 사료공급 등 각종 자동화 설비에 대한 상태정보와 운영정보를 제공하는 시스템입니다.`,
  },
  points: [
    {
      challenges:
        'IoT 센서와 AI 기술을 활용하여 양식장의 환경을 모니터링하고 제어하는 시스템입니다.',
      solutions:
        'IoT 센서와 AI 기술을 활용하여 양식장의 환경을 모니터링하고 제어하는 시스템입니다.',
      results:
        'IoT 센서와 AI 기술을 활용하여 양식장의 환경을 모니터링하고 제어하는 시스템입니다.',
    },
  ],
  images: {
    thumbnail: '/projects/aqua-farm-2023/thumbnail.webp',
  },
  techStack: ['Vue.js', 'Vuex', 'Axios', 'SCSS'],
};
