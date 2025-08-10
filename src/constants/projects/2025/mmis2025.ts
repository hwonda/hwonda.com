import type { Project } from '@/types/projects';

export const mmis2025: Project = {
  id: 'mmis2025',
  title: '기상청 해양기상 플랫폼',
  subtitle: '대국민 서비스 UI/UX 개선',
  description: {
    short: '기상청 대국민 서비스인 해양기상정보포털의 PC, Mobile UI/UX 개선',
    full: `기상청 해양기상정보포털의 PC, Mobile UI/UX 개선을 담당했습니다.
      기상청 담당 주무관님과 1:1로 대화하며 디자인의 방향을 잡고, Figma로 디자인을 작업했습니다.
      협의된 시안을 바탕으로 기존 레거시 코드를 리팩토링하고, 디자인을 적용하고 있습니다.
    `,
  },
  images: {
    thumbnail: '/projects/mmis-2025/thumbnail.webp',
  },
  period: '2025.06 ~ 현재 (2개월~)',
  role: 'Frontend',
  team: 'Koast',
  techStack: [
    'Vue3',
    'Vuex',
    'TypeScript',
    'SCSS',
    'Axios',
    'React-Native',
    'OpenLayers',
  ],
  inProgress: true,
};
