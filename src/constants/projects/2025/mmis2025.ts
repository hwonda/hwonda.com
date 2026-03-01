import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const mmis2025: Project = {
  id: 'mmis2025',
  title: '기상청 해양기상 플랫폼',
  subtitle: '대국민 서비스 UI/UX 개선',
  description: {
    short: '기상청 대국민 서비스인 해양기상정보포털의 PC, Mobile UI/UX 개선',
    full: `
      기상청 해양기상정보포털 PC·모바일 UI/UX 개선을 담당합니다.

      메뉴 구조(내비게이션)부터 시간 슬라이더, 범례 등 지도 기반 메인 페이지의 모든 UI 요소를 현대적인 디자인으로 개선합니다. 
      폰트, 색상, 데이터 시각화 방식 전반을 다듬고, 이전에 일관성이 없던 모달창 UI를 공통 규격으로 통합합니다.
      
      기술 스택은 기존과 동일하게 Vue 3와 TypeScript를 사용합니다. 
      단순 스타일링에 그치지 않고, 새로운 기능을 추가하며 기존 버그를 수정합니다. 
      레거시 코드 리팩토링 과정에서 2,000줄이 넘는 대형 메서드를 모듈화하여 유지보수성을 높이고, 컴포넌트를 관심사에 따라 세분화합니다.

      본 프로젝트는 현재 진행 중이며, 결과물은 점진적으로 적용되고 있습니다.
    `,
  },
  images: {
    thumbnail: { url: '/projects/mmis-2025/thumbnail.webp' },
  },
  startTime: '2025.06',
  endTime: '현재',
  period: getProjectPeriod('2025.06', '현재'),
  role: 'Frontend',
  team: 'Koast',
  techStack: [
    'Vue.js',
    'Vuex',
    'TypeScript',
    'SCSS',
    'Axios',
    'OpenLayers',
    'Docker',
    'Jira',
    'Figma',
    'Git',
  ],
  inProgress: false,
};
