import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const zizizip: Project = {
  id: 'zizizip',
  title: 'Zizizip',
  subtitle: '부동산 지도 서비스',
  description: {
    short:
      '엑셀로 저장된 주택 정보를 지도 위에 표출하여 한눈에 탐색할 수 있는 서비스',
    full: `
    파편화된 공공주택 공고 정보를 지도 기반으로 통합 시각화하여 한눈에 탐색할 수 있는 서비스를 개발했습니다.

    사용자가 직접 엑셀 데이터를 업로드할 수 있도록 설계하고, 기관별로 다른 데이터 형식을 표준화하는 전처리 파이프라인을 구축했습니다.

    또한 Web Worker 기반 비동기 파싱과 지도 렌더링 최적화를 통해 대량 데이터 처리 시에도 부드러운 사용자 경험을 유지했습니다.

    그 결과 최대 DAU 578명을 기록하며 실제 사용자 기반 서비스를 운영했습니다.
    `,
  },
  images: {
    thumbnail: { url: '/projects/zizizip/thumbnail.webp' },
    full: [
      { url: '/projects/zizizip/0.webp' },
      { url: '/projects/zizizip/1.webp', caption: '랜딩페이지' },
      {
        url: '/projects/zizizip/2.webp',
        caption: '업로드 중 상태 표시 - 엑셀 컬럼 파싱',
      },
      {
        url: '/projects/zizizip/3.webp',
        caption: '업로드 중 상태 표시 - 좌표 변환(지오코딩)',
      },
      {
        url: '/projects/zizizip/4.webp',
        caption: '업로드 완료 표시 - 업로드된 파일 목록',
      },
      { url: '/projects/zizizip/5.webp', caption: '업로드된 데이터 화면' },
      {
        url: '/projects/zizizip/6.webp',
        caption: '줌 레벨에 따른 마커 클러스터링',
      },
      {
        url: '/projects/zizizip/7.webp',
        caption: '마커 클릭 시 상세 정보 표시',
      },
      { url: '/projects/zizizip/8.webp', caption: '필터링 기능' },
    ],
  },
  urls: {
    github: 'https://github.com/hwonda/zizizip',
    demo: 'https://www.zizizip.com',
  },
  points: [
    {
      challenges: `
      공공주택 공고 정보가 여러 기관에 분산되어 있어 사용자가 정보를 통합적으로 확인하기 어려운 문제가 있었습니다.
      `,
      solutions: `
      공고 데이터를 지도 기반으로 통합하고, 사용자가 직접 데이터를 업로드할 수 있는 구조를 설계했습니다.
      `,
      results: `
      공공주택 정보를 한 화면에서 탐색 가능한 서비스로 개선했습니다.
      `,
    },
    {
      challenges: `
      기관마다 엑셀 컬럼명이 달라 데이터를 일관되게 처리하기 어려운 문제가 있었습니다.
      `,
      solutions: `
      key mapping 기반 컬럼 표준화 로직을 구현했습니다.
      `,
      results: `
      다양한 데이터 소스를 유연하게 처리할 수 있는 전처리 구조를 구축했습니다.
      `,
    },
    {
      challenges: `
      엑셀 파싱 및 좌표 변환 과정에서 메인 스레드 점유로 UI가 멈추는 문제가 발생했습니다.
      `,
      solutions: `
      Web Worker를 도입해 데이터 파싱과 geocoding 처리를 비동기화했습니다.
      `,
      results: `
      대량 데이터 처리 시에도 UI 프리징 없는 안정적인 사용자 경험을 제공했습니다.
      `,
    },
    {
      challenges: `
      다수의 마커를 동시에 렌더링할 경우 지도 인터랙션 성능 저하가 발생했습니다.
      `,
      solutions: `
      Zoom Level 기반으로 Clustering ↔ Marker 전환을 적용하고, 디바운싱과 Set 자료구조를 활용해 상태 조회를 최적화했습니다.
      `,
      results: `
      지도 렌더링 성능을 개선하여 부드러운 사용자 인터랙션을 구현했습니다.
      `,
    },
    {
      challenges: `
      초기 UI에서 주요 진입 버튼이 눈에 띄지 않아 사용자가 기능에 접근하기 어려운 문제가 있었습니다.
      `,
      solutions: `
      커뮤니티 피드백을 반영해 랜딩 UI 구조를 개선(하단 → 상단 배치)했습니다.
      `,
      results: `
      실제 사용자 피드백을 반영하여 서비스 접근성과 사용성을 개선했습니다.
      `,
    },
  ],
  startTime: '2025.10',
  endTime: '2025.12',
  period: getProjectPeriod('2025.10', '2025.12'),
  role: 'Frontend · Backend · SEO',
  team: '개인',
  techStack: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Redux',
    'Vercel',
    'Git',
  ],
};
