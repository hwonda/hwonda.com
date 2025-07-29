import type { Project } from '@/types/projects';

export const aisar: Project = {
  id: 'aisar',
  title: '수색구조 시스템',
  subtitle: '해양 수색구조 의사결정 지원 시스템(AI수색구조)',
  description: {
    short:
      '해상사고 시 수색구조에 도움이 되는 데이터를 시각화하여 의사결정을 돕는 해양경찰청 내 시스템입니다.',
    full: `해상사고 시 수색구조에 도움이 되는 데이터를 시각화하여 의사결정을 돕는 해양경찰청 내 시스템입니다.
Figma를 활용하여 기존 시스템의 디자인 변경 및 기획, 개발을 진행했으며,
20여 개가 넘는 색상들을 최대 7개로 color set을 축소했습니다.
변경된 디자인을 직접 퍼블리싱하고 기존 기능을 퍼블리싱된 페이지에 통합 적용했습니다.
기존 레거시 코드 리팩토링으로 코드의 가독성과 유지보수성을 향상시켰으며,
3,000줄이 넘는 하나의 JavaScript 코드를 기능별로 분리하고 데이터 처리 로직을 간소화했습니다.

주요 기능:
- 실시간 해양 데이터 분석
- AI 기반 표류 예측
- 최적 수색 경로 제안
- 작전 상황 실시간 공유`,
  },
  images: {
    thumbnail: '/projects/aisar/thumbnail.webp',
    full: [
      '/projects/aisar/1.webp',
      '/projects/aisar/2.webp',
      '/projects/aisar/3.webp',
      '/projects/aisar/4.webp',
      '/projects/aisar/5.webp',
      '/projects/aisar/6.webp',
      '/projects/aisar/7.webp',
      '/projects/aisar/8.webp',
      '/projects/aisar/9.webp',
      '/projects/aisar/10.webp',
      '/projects/aisar/11.webp',
      '/projects/aisar/12.webp',
      '/projects/aisar/13.webp',
      '/projects/aisar/14.webp',
      '/projects/aisar/15.webp',
      '/projects/aisar/16.webp',
      '/projects/aisar/17.webp',
    ],
  },
  urls: {
    github: 'https://github.com/username/aisar',
    demo: 'https://aisar-demo.com',
  },
  points: [
    {
      challenges: `해양 환경의 복잡성과 불확실성을 고려한 정확한 표류 예측 모델을 개발하는 것이 가장 큰 도전이었습니다.
또한 긴급 상황에서도 안정적으로 작동하는 시스템을 구축하는 것이 중요했습니다.`,
      solutions: `다양한 해양 데이터를 통합하고 머신러닝 알고리즘을 적용하여 표류 예측 정확도를 높였습니다.
또한 오프라인 작동 기능과 데이터 동기화 메커니즘을 구현하여 네트워크 불안정 상황에서도 작동할 수 있도록 했습니다.`,
      results: `수색구조 성공률이 25% 향상되었으며, 작전 시간이 평균 30% 단축되었습니다.
이는 인명 구조 확률을 크게 높이는 결과로 이어졌습니다.`,
    },
  ],
  period: '2024.03 ~ 2024.05(2개월)',
  role: 'Frontend',
  team: 'Koast',
  techStack: ['HTML', 'JavaScript', 'SCSS', 'Figma'],
};
