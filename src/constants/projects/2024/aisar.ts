import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const aisar: Project = {
  id: 'aisar',
  title: '수색구조 시스템',
  subtitle: '해양 수색구조 의사결정 지원 시스템',
  description: {
    short:
      '해상사고 시 수색구조에 도움이 되는 데이터를 시각화하여 의사결정을 돕는 해양경찰청 내 시스템 UI/UX 개선',
    full: `
      해양 사고 발생 시 사고 위치, 구조 장비 배치, 예상 이동 경로 등을 지도 기반으로 시각화하여 신속한 의사결정을 지원하는 플랫폼의 UI/UX를 개선했습니다.
      
      정보 구분이 어려웠던 기존 지도 시각화를 재설계하고 데이터 우선순위 기반 색상 체계와 시각화 규칙을 정립했습니다.
      또한 3,000라인 이상의 레거시 JavaScript 코드를 모듈화하여 UI 구조와 유지보수성을 함께 개선했습니다.
      
      그 결과 해경 상황실에서 사고 정보의 가독성과 지도 사용성이 향상된 시각화 환경을 구축했습니다.
    `,
  },
  images: {
    thumbnail: { url: '/projects/aisar/thumbnail.webp' },
    full: [
      { url: '/projects/aisar/1.webp' },
      { url: '/projects/aisar/2.webp' },
      { url: '/projects/aisar/3.webp' },
      { url: '/projects/aisar/4.webp' },
      { url: '/projects/aisar/5.webp' },
      { url: '/projects/aisar/6.webp' },
      { url: '/projects/aisar/7.webp' },
      { url: '/projects/aisar/8.webp' },
      { url: '/projects/aisar/9.webp' },
      { url: '/projects/aisar/10.webp' },
      { url: '/projects/aisar/11.webp' },
      { url: '/projects/aisar/12.webp' },
      { url: '/projects/aisar/13.webp' },
      { url: '/projects/aisar/14.webp' },
      { url: '/projects/aisar/15.webp' },
      { url: '/projects/aisar/16.webp' },
      { url: '/projects/aisar/17.webp' },
    ],
  },
  urls: {
    github: 'https://github.com/username/aisar',
    demo: 'https://aisar-demo.com',
  },
  points: [
    {
      situation: `
      사고 위치, 구조 장비, 이동 경로가 지도에 동시 표출되어 데이터 구분과 긴급도 파악이 어려운 UI 구조
      `,
      task: `
      긴급 상황에서 정보 우선순위를 즉시 식별할 수 있는 시각화 규칙 재정의 필요
      `,
      action: `
      데이터 우선순위 기준으로 20여 개 색상을 7개 핵심 Color Set으로 재정의하고 지도 시각화 기준 정리
      `,
      result: `
      사고·구조 정보 시각 계층 명확화로 긴급 상황 정보 파악 속도 개선
      `,
    },
    {
      situation: `
      지도 UI 복잡도와 다크 패턴 요소로 핵심 정보 인지 속도 저하
      `,
      task: `
      공공기관 상황실 업무 맥락에 맞는 안정적 정보 구조와 시각 톤 재설계 필요
      `,
      action: `
      공공기관 상황실 환경을 고려해 차분한 색상 체계와 명확한 정보 구조로 UI 재설계
      `,
      result: `
      해경 상황실 기준 정보 가독성과 지도 사용성 개선 피드백 확보
      `,
    },
    {
      situation: `
      단일 JavaScript 파일 3,000라인 이상 구조로 UI 수정 및 기능 개선 난이도 높음
      `,
      task: `
      유지보수 가능한 구조로 전환하기 위해 UI/인터랙션/데이터 로직 분리 필요
      `,
      action: `
      UI 제어, 지도 인터랙션, 데이터 처리 로직을 기능 단위 모듈로 분리
      `,
      result: `
      UI 수정 및 기능 개선 작업 시간 **4시간 → 30분 수준 단축**
      `,
    },
    {
      situation: `
      다중 UI 이벤트 간 상호 영향으로 예측하기 어려운 인터랙션 오류 발생
      `,
      task: `
      기능 간 간섭을 줄이고 동작 일관성을 확보할 이벤트 구조 재설계 필요
      `,
      action: `
      각 기능이 독립 동작하도록 이벤트 기반 인터랙션 흐름 재설계
      `,
      result: `
      UI 동작 안정성과 사용자 인터랙션 일관성 확보
      `,
    },
  ],
  startTime: '2024.03',
  endTime: '2024.05',
  period: getProjectPeriod('2024.03', '2024.05'),
  role: 'UI/UX · Frontend',
  team: 'Koast',
  techStack: ['HTML', 'JavaScript', 'CSS', 'Flutter', 'Figma', 'Git'],
};
