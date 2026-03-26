import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const digitalTwin: Project = {
  id: 'digital-twin',
  title: '해양예측정보 제공 서비스',
  subtitle: '어획량 예측 웹 & 갯벌 내비게이션 앱',
  description: {
    short:
      '해양 예측 정보 서비스와 갯벌 내비게이션 앱을 기획하고 3D 시각화 중심 웹 서비스를 개발했습니다.',
    full: `
      해양 환경 데이터를 활용한 **어획량 예측 웹 서비스와 갯벌 내비게이션 앱 기획 및 개발을 주도**했습니다.

      **주요 활동:**
      - Cesium 기반 3D 지도 시각화 설계 및 구현
      - 수온, 클로로필, 어획량 데이터 통합 표출 구조 기획
      - Split View(2분할 지도) 비교 기능 설계
      - 갯벌 내비게이션 앱 기획 및 Figma 기반 UI/UX 설계
      - Flutter Web View 프로토타입 제작

      **성과:**
      - 3D 기반 해양 데이터 공간 분포 직관적 시각화 구현
      - 데이터 간 상관관계 분석 가능한 동시 비교 인터페이스 구축
      - 갯벌 안전 내비게이션 서비스 컨셉 및 UX 구조 설계
      `,
  },
  points: [
    {
      situation: `
      수온, 클로로필, 어획량 등 다차원 해양 데이터를 2D 표 형태로는 직관적으로 파악하기 어려운 문제 존재
      `,
      task: `
      공간 분포와 강도 차이를 한 번에 해석 가능한 3D 시각화 방식 설계 필요
      `,
      action: `
      Cesium 기반 3D 격자 + Color Gradient 시각화 적용, 어획량 정보는 아이콘 오버레이로 지도 표출
      `,
      result: `
      해양 데이터 공간 분포를 직관적으로 파악 가능한 3D 시각화 환경 구축
      `,
    },
    {
      situation: `
      수온, 클로로필, 어획량 비교 시 화면 전환 반복으로 상관관계 분석 흐름 단절 발생
      `,
      task: `
      데이터 간 비교를 단일 화면에서 수행할 수 있는 동시 비교 인터페이스 필요
      `,
      action: `
      Cesium 기반 Split View(2분할 지도) 기능 구현으로 서로 다른 데이터 동시 비교 구조 설계
      `,
      result: `
      해양 데이터 간 상관관계를 한 화면에서 직관적으로 분석 가능한 환경 구축
      `,
    },
    {
      situation: `
      기간별 어획량 확인에 다단계 필터/조회 과정이 필요해 핵심 정보 접근 속도 저하
      `,
      task: `
      의사결정에 필요한 핵심 어획 정보를 최소 조작으로 확인 가능한 탐색 UI 필요
      `,
      action: `
      지도에서 기간별 최대 어획량 Top10을 즉시 확인 가능한 시각화 UI 구현
      `,
      result: `
      사용자가 핵심 어획 정보를 빠르게 확인 가능한 데이터 탐색 경험 제공
      `,
    },
    {
      situation: `
      갯벌 환경에서 길 잃음/고립 사고 위험이 높지만 이를 지원하는 모바일 안전 서비스 부족
      `,
      task: `
      위험 구간을 회피하며 빠른 이동 경로를 제시할 갯벌 안전 내비게이션 서비스 기획 필요
      `,
      action: `
      갯골 회피 최단 경로 안내 개념으로 갯벌 내비게이션 앱 기획, Figma 기반 UI/UX 및 인터랙티브 프로토타입 제작
      `,
      result: `
      모바일 확장 가능한 갯벌 안전 내비게이션 서비스 컨셉과 UX 구조 설계
      `,
    },
  ],
  images: {
    thumbnail: { url: '/projects/digital-twin/thumbnail.webp' },
    full: [
      { url: '/projects/digital-twin/0.webp' },
      { url: '/projects/digital-twin/1.webp' },
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
      { url: '/projects/digital-twin/13.webp' },
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
