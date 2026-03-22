import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const mmis2023: Project = {
  id: 'mmis-2023',
  title: '기상청 2023',
  subtitle: '프론트 외주 개발에서 사내 개발로 전환',
  description: {
    short:
      '대국민 서비스(해양기상정보포털) 및 기상청 내부 업무 시스템의 PC/Mobile 웹을 개발하고 유지보수했습니다.',
    full: `
      기상청 대국민 해양기상정보 서비스 및 내부 업무 시스템의 웹 프론트엔드를 개발·유지보수했습니다.

      프론트엔드 외주로 인해 2년간 누적된 고객사 요구사항과 기술 부채를 우선적으로 해결하며 서비스 안정화를 진행했습니다.

      일 평균 3,000명 이상이 사용하는 기상 서비스의 안정성과 유지보수성을 개선했습니다.
      특히 내부 시스템을 중심으로 기상 데이터 시각화, 지도 기반 기능, API 연동 등 40여 개 기능을 개발 및 개선했습니다. 
      `,
  },
  points: [
    {
      image: '/projects/mmis-2023/thumbnail.webp',
      situation: `
        외주 개발 과정에서 **\`any\` 타입이 무분별하게 사용**되고, 대형 컴포넌트 구조로 인해 **코드 중복과 유지보수 어려움**이 발생했습니다.
      `,
      task: `aa`,
      action: `
        지도, 차트, 컨트롤, 입력 UI 등 기능 단위로 컴포넌트를 분리하고 기능별 폴더 구조로 재정리했습니다. 또한 **공통 타입(type) 모듈을 별도로 구성**하여 TypeScript 타입을 명확하게 관리했습니다.
      `,
      result: `
        컴포넌트 재사용성과 코드 가독성을 개선하고 확장 가능한 프론트엔드 구조로 리팩토링했습니다.
      `,
    },
    {
      situation: `
        약 500개 좌표 데이터 지도 렌더링 시 로딩 및 인터랙션 성능 저하 발생했습니다.
      `,
      action: `
        OpenLayers 레이어 그룹핑 및 지연 로딩 적용했습니다.
      `,
      result: `
        지도 초기 로딩 속도와 사용자 인터랙션 성능 개선했습니다.
      `,
    },
    {
      situation: `
        PR 기반 협업 부재와 누적된 버그로 코드 관리와 서비스 안정성이 저하되었습니다.
      `,
      action: `
        PR 리뷰 프로세스와 rebase 브랜치 전략 도입, 전체 버그 점검 및 수정했습니다.
      `,
      result: `
        80여 개 이상의 버그를 수정하여 서비스 안정성을 개선하고 협업 효율을 높였습니다.
      `,
    },
  ],
  images: {
    thumbnail: { url: '/projects/mmis-2023/thumbnail.webp' },
    full: [
      { url: '/projects/mmis-2023/1.webp' },
      { url: '/projects/mmis-2023/2.webp' },
    ],
  },
  startTime: '2023.04',
  endTime: '2023.12',
  period: getProjectPeriod('2023.04', '2023.12'),
  role: 'Frontend',
  team: 'Koast',
  techStack: [
    'Vue.js',
    'Vuex',
    'TypeScript',
    'SCSS',
    'Axios',
    'React-Native',
    'OpenLayers',
    'Docker',
    'Git',
  ],
};
