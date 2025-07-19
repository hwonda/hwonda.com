import type { Project } from '@/types/projects';

export const aquaFarm2024: Project = {
  id: 'aqua-farm-2024',
  title: '스마트양식장',
  description: {
    short: '스마트 양식 기술을 활용한 양식장 관리 시스템입니다.',
    full: `CSS Grid를 사용해 수조 상태, 어종 정보, 캘린더, CCTV 등의 정보를 표출하는 대시보드를 구현했습니다.
      사료 잔량과 사료공급장치의 상태를 시각화하는 모니터링 페이지를 구현하고,
      오류 시 알림 기능을 만들어 관리자 메일 및 SNS 알림을 발송합니다.
      사료공급 및 개인 일정을 관리할 수 있는 캘린더 기능을 추가하고,
      오픈소스 Vue-datepicker를 래핑하여 솔루션의 톤 앤 매너를 통일했습니다.
      관리자가 대시보드 등 웹사이트 설정이나 수조, 센서 등을 관리할 수 있도록 페이지를 구축했습니다.`,
  },
  images: {
    thumbnail: '/projects/aqua-farm-2024/thumbnail.webp',
    full: [
      '/projects/aqua-farm-2024/1.webp',
      '/projects/aqua-farm-2024/2.webp',
      '/projects/aqua-farm-2024/3.webp',
      '/projects/aqua-farm-2024/4.webp',
      '/projects/aqua-farm-2024/5.webp',
      '/projects/aqua-farm-2024/6.webp',
      '/projects/aqua-farm-2024/7.webp',
      '/projects/aqua-farm-2024/8.webp',
      '/projects/aqua-farm-2024/9.webp',
      '/projects/aqua-farm-2024/10.webp',
      '/projects/aqua-farm-2024/11.webp',
    ],
  },
  period: '2023.01 ~ 현재',
  techStack: ['Vue2', 'Vuex', 'Axios', 'CSS Grid'],
};
