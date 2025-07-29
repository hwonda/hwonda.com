import type { Project } from '@/types/projects';

export const mmis2023: Project = {
  id: 'mmis-2023',
  title: 'MMIS',
  subtitle: '해양기상 맞춤형 서비스 기술개발',
  description: {
    short:
      '대국민 서비스(해양기상정보포털) 및 기상청 내부 관계자 기상 정보 관련 업무 서비스 기능을 개발했습니다.',
    full: `- 해양기상 맞춤형 서비스 기술개발은 해양 사고와 위험 기상 상황에서 예보관과 대응 기관의 역량을 강화하고, 정확하고 신속한 정보를 제공하기 위한 플랫폼 개발 프로젝트입니다.
        - 일일 평균 접속자 수 3,000명 이상의 대국민 서비스와 기상청 임직원 100여 명이 사용하는 내부 플랫폼에 신규 기능을 추가하고, 기존 레거시 시스템을 리팩토링하여 사용자 경험 및 인식 개선을 진행했습니다.`,
  },
  images: {
    thumbnail: '/projects/mmis-2023/thumbnail.webp',
    full: ['/projects/mmis-2023/1.webp', '/projects/mmis-2023/2.webp'],
  },
  period: '2023.04 ~ 2023.10 (6개월)',
  role: 'Frontend',
  team: 'Koast',
  techStack: ['Vue.js', 'Node.js', 'PostgreSQL'],
};
