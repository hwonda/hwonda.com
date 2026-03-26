import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const mmis2023: Project = {
  id: 'mmis-2023',
  title: '기상청 2023',
  subtitle: '프론트 외주 개발에서 사내 개발로 전환',
  description: {
    short:
      '기상청 서비스 사내 전환 프로젝트에서 기술 부채 해소와 협업 프로세스 개선을 주도했습니다.',
    full: `
      기상청 서비스의 프론트엔드 외주에서 사내 개발로 전환하는 과정에서 **누적된 기술 부채 해소와 협업 프로세스 개선을 주도**했습니다.

      **주요 활동:**
      - 2년간 누적된 고객사 요구사항 우선순위 정리 및 해결 계획 수립
      - 컴포넌트 구조 리팩토링 및 타입 시스템 개선 주도
      - PR 리뷰 프로세스 및 rebase 브랜치 전략 도입
      - 80여 개 버그 점검 및 수정 관리
      - OpenLayers 렌더링 최적화 전략 수립

      **성과:**
      - 서비스 안정성 대폭 개선 및 협업 효율 향상
      - 확장 가능한 프론트엔드 구조로 리팩토링 완료
      - 지도 초기 로딩 속도 및 인터랙션 성능 개선
      `,
  },
  points: [
    {
      situation: `
        외주 개발 과정에서 \`any\` 타입 남용과 대형 컴포넌트 구조로 코드 중복 및 유지보수 난이도 증가
      `,
      task: `
        타입 안정성과 재사용성을 높일 수 있도록 기능 단위 구조 재정비 필요
      `,
      action: `
        지도/차트/컨트롤/입력 UI를 기능 단위로 분리하고 기능별 폴더 구조 재정리, 공통 타입 모듈 별도 구성
      `,
      result: `
        컴포넌트 재사용성과 코드 가독성 개선, 확장 가능한 프론트엔드 구조로 리팩토링
      `,
    },
    {
      situation: `
        약 500개 좌표 데이터 지도 렌더링 시 초기 로딩과 인터랙션 성능 저하 발생
      `,
      task: `
        대량 좌표 처리 시에도 응답성을 유지할 렌더링 최적화 전략 필요
      `,
      action: `
        OpenLayers 레이어 그룹핑과 지연 로딩 적용
      `,
      result: `
        지도 초기 로딩 속도와 사용자 인터랙션 성능 개선
      `,
    },
    {
      situation: `
        PR 기반 협업 부재와 누적 버그로 코드 관리 품질과 서비스 안정성 저하
      `,
      task: `
        협업 프로세스 표준화와 대규모 버그 정리를 병행해 운영 안정성 회복 필요
      `,
      action: `
        PR 리뷰 프로세스와 rebase 브랜치 전략 도입, 전체 버그 점검 및 수정 수행
      `,
      result: `
        80여 개 버그 수정으로 서비스 안정성 개선, 협업 효율 향상
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
