import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const digitalTwin: Project = {
  id: 'digital-twin',
  title: '해양예측정보 제공 서비스',
  subtitle: '어획량 예측 웹 & 갯벌 내비게이션 앱',
  description: {
    short:
      '어획량 예측 웹 및 갯벌 내비게이션 앱을 포함한 맞춤형 해양 예측 정보 서비스',
    full: `
    해양 환경 데이터를 기반으로 어획량 예측 정보를 **3D 지도에서 시각화**하는 웹 서비스를 개발했습니다.

    Cesium과 GeoServer를 연동하여 수온, 클로로필 농도, 과거 어획량 데이터를 3D 격자와 아이콘으로 표현하고, 기간별 최대 어획량 Top10 정보를 지도에서 확인할 수 있도록 구현했습니다.

    또한 해양 데이터 간 상관관계 분석을 위해 **2분할 지도(Split View) 비교 시스템**을 구축했습니다.
    이와 함께 갯벌 고립 사고 예방을 위한 **갯벌 내비게이션 모바일 앱**을 기획하고 UI/UX 설계 및 Flutter Web View 프로토타입을 제작했습니다.
    `,
  },
  points: [
    {
      challenges: `
      수온, 클로로필, 어획량 등 다양한 해양 데이터를 직관적으로 파악하기 어려운 문제가 있었습니다.
      `,
      solutions: `
      Cesium을 활용해 해양 데이터를 3D 격자와 Color Gradient로 시각화하고, 어획량 정보는 아이콘 오버레이 방식으로 지도에 표시했습니다.
      `,
      results: `
      해양 데이터의 공간적 분포를 직관적으로 확인할 수 있는 3D 시각화 환경을 구축했습니다.
      `,
    },
    {
      challenges: `
      수온, 클로로필, 어획량 데이터를 비교하려면 사용자가 여러 화면을 반복적으로 전환해야 하는 불편함이 있었습니다.
      `,
      solutions: `
      Cesium 기반 Split View(2분할 지도) 기능을 구현하여 서로 다른 데이터를 동시에 비교할 수 있도록 설계했습니다.
      `,
      results: `
      사용자가 해양 데이터 간 상관관계를 한 화면에서 직관적으로 분석할 수 있는 환경을 구축했습니다.
      `,
    },
    {
      challenges: `
      기간별 어획량 데이터를 확인하려면 여러 필터와 조회 과정을 거쳐야 하는 불편함이 있었습니다.
      `,
      solutions: `
      지도에서 기간별 최대 어획량 Top10 정보를 바로 확인할 수 있는 시각화 UI를 구현했습니다.
      `,
      results: `
      사용자가 핵심 어획 정보를 빠르게 확인할 수 있는 데이터 탐색 경험을 제공했습니다.
      `,
    },
    {
      challenges: `
      갯벌 환경에서는 길을 잃거나 갯골에 고립되는 사고가 발생할 수 있지만 이를 지원하는 모바일 서비스가 부족한 상황이었습니다.
      `,
      solutions: `
      갯골을 피하여 가장 빠른 이동 경로를 안내하는 갯벌 내비게이션 앱을 기획하고 Figma를 활용해 UI/UX 설계 및 인터랙티브 프로토타입을 제작했습니다.
      `,
      results: `
      모바일 환경으로 확장 가능한 갯벌 안전 내비게이션 서비스 컨셉과 UX 구조를 설계했습니다.
      `,
    },
  ],
  images: {
    thumbnail: { url: '/projects/digital-twin/thumbnail.webp' },
    full: [
      { url: '/projects/digital-twin/2.webp' },
      { url: '/projects/digital-twin/3.webp' },
      { url: '/projects/digital-twin/4.webp' },
      { url: '/projects/digital-twin/5.webp' },
      { url: '/projects/digital-twin/6.webp' },
      { url: '/projects/digital-twin/7.webp' },
      { url: '/projects/digital-twin/8.webp' },
      { url: '/projects/digital-twin/9.webp' },
      { url: '/projects/digital-twin/10.webp' },
      { url: '/projects/digital-twin/11.webp' },
      { url: '/projects/digital-twin/12.webp' },
    ],
  },
  startTime: '2024.12',
  endTime: '2025.03',
  period: getProjectPeriod('2024.12', '2025.03'),
  role: 'Frontend',
  team: 'Koast',
  techStack: [
    'React.js',
    'TypeScript',
    'Tailwind CSS',
    'Flutter',
    'Cesium',
    'Figma',
    'Jira',
    'Git',
  ],
};
