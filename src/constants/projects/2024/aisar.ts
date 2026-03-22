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
      사고 위치, 구조 장비, 이동 경로 등 다양한 정보가 지도에 동시에 표시되면서 데이터 구분과 긴급도 파악이 어려운 UI 구조였습니다.
      `,
      action: `
      데이터 우선순위를 기준으로 20여 개의 색상을 7개의 핵심 Color Set으로 재정의하고 지도 시각화 기준을 정리했습니다.
      `,
      result: `
      사고·구조 정보의 시각적 계층 구조가 명확해져 긴급 상황에서 정보 파악 속도를 개선했습니다.
      `,
    },
    {
      situation: `
      지도 UI가 복잡하고 일부 다크 패턴 요소가 존재해 사용자가 중요한 정보를 빠르게 인지하기 어려웠습니다.
      `,
      action: `
      공공기관 상황실 환경을 고려하여 차분한 색상 체계와 명확한 정보 구조로 UI를 재설계했습니다.
      `,
      result: `
      사용자인 해경 상황실에서 정보 가독성과 지도 사용성이 크게 개선되었다는 피드백을 받았습니다.
      `,
    },
    {
      situation: `
      단일 JavaScript 파일에 3,000라인 이상의 UI 로직이 혼재되어 UI 수정 및 개선이 어려운 구조였습니다.
      `,
      action: `
      UI 제어, 지도 인터랙션, 데이터 처리 로직을 기능 단위 모듈로 분리했습니다.
      `,
      result: `
      UI 수정 및 기능 개선 작업 시간이 4시간 → 30분 수준으로 단축되었습니다.
      `,
    },
    {
      situation: `
      여러 UI 이벤트가 서로 영향을 주며 예측하기 어려운 인터랙션 문제가 발생했습니다.
      `,
      action: `
      각 기능이 독립적으로 동작하도록 이벤트 기반 구조로 인터랙션 흐름을 재설계했습니다.
      `,
      result: `
      UI 동작의 안정성과 사용자 인터랙션 일관성을 확보했습니다.
      `,
    },
  ],
  startTime: '2024.03',
  endTime: '2024.05',
  period: getProjectPeriod('2024.03', '2024.05'),
  role: 'Frontend · UI/UX',
  team: 'Koast',
  techStack: ['HTML', 'JavaScript', 'CSS', 'Flutter', 'Figma', 'Git'],
};
