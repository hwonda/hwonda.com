import type { Project } from '@/types/projects';

export const aquaFarm2023: Project = {
  id: 'aqua-farm-2023',
  title: '스마트 양식장 2023',
  subtitle: '스마트 양식 서비스 개발',
  description: {
    short: '포항 사료연구센터의 스마트 양식장 기획 및 웹앱 개발',
    full: `CSS Grid를 사용해 수조 상태, 어종 정보, 캘린더, CCTV 등의 정보를 표출하는 대시보드를 구현했습니다.
      사료 잔량과 사료공급장치의 상태를 시각화하는 모니터링 페이지를 구현하고,
      오류 시 알림 기능을 만들어 관리자 메일 및 SNS 알림을 발송합니다.
      사료공급 및 개인 일정을 관리할 수 있는 캘린더 기능을 추가하고,
      오픈소스 Vue-datepicker를 래핑하여 솔루션의 톤 앤 매너를 통일했습니다.
      관리자가 대시보드 등 웹사이트 설정이나 수조, 센서 등을 관리할 수 있도록 페이지를 구축했습니다.
      사료 연구를 위하여 운영 중인 수조 내 양성 어류의 상태정보와 사료공급 등 각종 자동화 설비에 대한 상태정보와 운영정보를 제공하는 시스템입니다.
    `,
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
  period: '2023.01 ~ 2023.04 (4개월)',
  role: 'Frontend',
  team: 'Koast',
  techStack: ['Vue.js', 'Vuex', 'Axios', 'SCSS'],
};
