import { blobUrl } from '@/constants/common';
import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const zizizip: Project = {
  id: 'zizizip',
  title: 'Zizizip',
  subtitle: '부동산 지도 서비스',
  description: {
    short:
      '파편화된 공공주택 정보를 지도 기반으로 통합하는 서비스를 기획하고 개발하여 최대 DAU 578명을 기록했습니다.',
    full: `
      공공주택 공고 정보 탐색의 불편함을 해결하기 위해 **지도 기반 통합 서비스를 기획하고 1인 개발을 주도**했습니다.

      **주요 활동:**
      - 서비스 기획 및 사용자 요구사항 정의
      - 지도 기반 데이터 통합 구조 설계
      - 기관별 엑셀 포맷 표준화 전처리 파이프라인 구축
      - Web Worker 기반 비동기 파싱 및 지도 렌더링 최적화
      - 커뮤니티 피드백 수집 및 랜딩 UI 개선 반영

      **성과:**
      - 최대 DAU 578명 기록, 실제 사용자 기반 서비스 운영
      - 대량 데이터 처리 시에도 UI 프리징 없는 안정적 사용자 경험 확보
      - 실제 사용자 피드백 기반 서비스 접근성과 사용성 개선
      `,
  },
  images: {
    thumbnail: { url: `${blobUrl}/projects/zizizip/thumbnail.webp` },
    full: [
      { url: `${blobUrl}/projects/zizizip/0.webp` },
      { url: `${blobUrl}/projects/zizizip/1.webp`, caption: '랜딩페이지' },
      {
        url: `${blobUrl}/projects/zizizip/2.webp`,
        caption: '업로드 중 상태 표시 - 엑셀 컬럼 파싱',
      },
      {
        url: `${blobUrl}/projects/zizizip/3.webp`,
        caption: '업로드 중 상태 표시 - 좌표 변환(지오코딩)',
      },
      {
        url: `${blobUrl}/projects/zizizip/4.webp`,
        caption: '업로드 완료 표시 - 업로드된 파일 목록',
      },
      {
        url: `${blobUrl}/projects/zizizip/5.webp`,
        caption: '업로드된 데이터 화면',
      },
      {
        url: `${blobUrl}/projects/zizizip/6.webp`,
        caption: '줌 레벨에 따른 마커 클러스터링',
      },
      {
        url: `${blobUrl}/projects/zizizip/7.webp`,
        caption: '마커 클릭 시 상세 정보 표시',
      },
      { url: `${blobUrl}/projects/zizizip/8.webp`, caption: '필터링 기능' },
    ],
  },
  urls: {
    github: 'https://github.com/hwonda/zizizip',
    demo: 'https://www.zizizip.com',
    etc: [
      {
        url: 'https://cafe.naver.com/ayshh?iframe_url_utf8=%2FArticleRead.nhn%253Fclubid%3D30457337%2526articleid%3D158333',
        title: '네이버 카페 소개글 예시',
      },
    ],
  },
  points: [
    {
      images: [
        {
          url: `${blobUrl}/projects/zizizip/point1-1.webp`,
          caption: '공공주택 공고 정보가 여러 기관에 분산됨',
        },
        {
          url: `${blobUrl}/projects/zizizip/point1-2.webp`,
          caption:
            '공공 내 각 정보를 파편적으로 볼 수 있음(엑셀-보증금, 웹-지도)',
        },
        {
          url: `${blobUrl}/projects/zizizip/point1-3.webp`,
          caption: '지도와 overlay를 통해 정보를 통합적으로 확인',
        },
      ],
      situation: `
      공공주택 공고 정보가 여러 기관에 분산되어 있어 사용자가 정보를 통합적으로 확인하기 어려운 문제 존재
      `,
      task: `
      파편화된 공고 정보를 한 흐름으로 묶어 사용자가 빠르게 탐색 가능한 형태로 재구성 필요
      `,
      action: `
      공고 데이터를 지도 기반으로 통합하고, 사용자가 직접 데이터를 업로드할 수 있는 구조 설계
      `,
      result: `
      공공주택 정보를 한 화면에서 탐색 가능한 서비스 구축
      `,
    },
    {
      images: [
        {
          url: `${blobUrl}/projects/zizizip/point2-1.webp`,
          caption: '기관마다 엑셀 컬럼명이 다름',
        },
        {
          url: `${blobUrl}/projects/zizizip/point2-2.webp`,
          caption: '서로 다른 컬럼을 공통 스키마로 변환',
        },
        {
          url: `${blobUrl}/projects/zizizip/point2-3.webp`,
          caption: '업로드 실패 없이 안정적으로 처리 가능한 전처리',
        },
      ],
      situation: `
      기관마다 엑셀 컬럼명이 달라 데이터를 일관되게 처리하기 어려운 문제 존재
      `,
      task: `
      서로 다른 입력 포맷을 공통 스키마로 변환해 업로드 실패 없이 안정적으로 처리 가능한 전처리 체계 필요
      `,
      action: `
      key mapping 기반 컬럼 표준화 로직 구현
      `,
      result: `
      다양한 데이터 소스를 유연하게 처리 가능한 전처리 구조 구축
      `,
    },
    {
      images: [
        {
          url: `${blobUrl}/projects/zizizip/point3-1.webp`,
          caption: 'Web worker가 다른 스레드에서 CSV/Excel 파싱',
        },
        {
          url: `${blobUrl}/projects/zizizip/point3-2.webp`,
          caption:
            '검증 로직 또한 다른 스레드에서 진행(타임아웃으로 무한 대기 방지)',
        },
        {
          url: `${blobUrl}/projects/zizizip/3.webp`,
          caption: '사용자가 업로드 중 취소 버튼 클릭 시 업로드 중단 가능',
        },
      ],
      situation: `
      엑셀 파싱/좌표 변환 과정에서 메인 스레드 점유로 UI 프리징이 발생하는 문제 존재
      `,
      task: `
      대용량 파일 업로드 시에도 사용자 조작이 끊기지 않도록 연산 작업을 비동기 처리로 분리할 필요
      `,
      action: `
      Web Worker 도입으로 데이터 파싱과 geocoding 처리 비동기화
      `,
      result: `
      대량 데이터 처리 시에도 UI 프리징 없는 안정적 사용자 경험 확보
      `,
    },
    {
      images: [
        {
          url: `${blobUrl}/projects/zizizip/point4-1.webp`,
          caption: '마커 수가 많은 구간에서 지도 인터랙션 성능 저하',
        },
        {
          url: `${blobUrl}/projects/zizizip/point4-2.webp`,
          caption: 'Zoom Level 기반 Clustering 적용',
        },
      ],
      situation: `
      다수의 마커를 동시에 렌더링할 경우 지도 인터랙션 성능 저하 발생
      `,
      task: `
      마커 수가 많은 구간에서도 확대/이동/클릭 반응성을 유지하도록 렌더링 부하 제어 전략 필요
      `,
      action: `
      Zoom Level 기반 Clustering ↔ Marker 전환 적용, 디바운싱과 Set 자료구조 활용해 상태 조회 최적화
      `,
      result: `
      지도 렌더링 성능 개선, 부드러운 사용자 인터랙션 구현
      `,
    },
    {
      situation: `
      초기 UI에서 주요 진입 버튼 가시성이 낮아 사용자가 핵심 기능에 접근하기 어려운 문제 존재
      `,
      task: `
      첫 화면에서 사용자의 다음 행동이 명확히 보이도록 정보 우선순위와 CTA 배치 재설계 필요
      `,
      action: `
      커뮤니티 피드백 반영해 랜딩 UI 구조 개선(하단 → 상단 배치)
      `,
      result: `
      실제 사용자 피드백 기반으로 서비스 접근성과 사용성 개선
      `,
    },
  ],
  startTime: '2025.10',
  endTime: '2025.12',
  period: getProjectPeriod('2025.10', '2025.12'),
  role: '1인 주도 개발',
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
