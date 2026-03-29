import { blobUrl } from '@/constants/common';
import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const aquaFarm2025: Project = {
  id: 'aqua-farm-2025',
  title: '스마트 양식장 2025',
  subtitle: '연구용 스마트 양식 데이터 시각화 플랫폼',
  description: {
    short:
      '연구진의 데이터 분석 효율을 개선하기 위해 양식 연구 플랫폼의 기획부터 개발까지 전 과정을 주도했습니다.',
    full: `
      연구진의 데이터 분석 효율 향상을 목표로 **양식 연구 플랫폼 구축 프로젝트를 기획부터 개발까지 주도**했습니다.

      **주요 활동:**
      - 연구진과 직접 소통하며 Figma, 네이버 폼, 메일, 유선통화 등 다양한 채널로 요구사항 수집
      - Jira 기반 기능 단위 Task 및 칸반 보드로 진행 상황 관리
      - Spreadsheet 기반 WBS 작성 및 산출물 관리
      - 주간 스프린트 운영으로 이슈사항 공유 및 일정 관리
      - 기획, UX 설계(Figma), API 명세(Swagger, Confluence), 프론트 개발까지 엔드-투-엔드 주도

      **성과:**
      - 연구진의 데이터 분석 시간 40분 → 2분 단축 (약 95% 개선)
      - 신규 기능 25개 개발 및 기존 Vue.js 기반 35개 메뉴 React 마이그레이션
      `,
  },
  points: [
    {
      images: [
        {
          url: `${blobUrl}/projects/aqua-farm-2025/point1-1.webp`,
          caption: 'Miro를 사용하여 기존 양식장 메뉴 및 사용자 여정 정리',
        },
        {
          url: `${blobUrl}/projects/aqua-farm-2025/point1-2.webp`,
          caption: '네이버 폼으로 요구사항 정의',
        },
        {
          url: `${blobUrl}/projects/aqua-farm-2025/point1-3.webp`,
          caption: 'Figma 기반 요구사항 논의(대시보드 페이지 레이아웃)',
        },
        {
          url: `${blobUrl}/projects/aqua-farm-2025/point1-4.webp`,
          caption: 'Spreadsheet 기반 요구사항 정의 및 WBS 작성(산출물)',
        },
        {
          url: `${blobUrl}/projects/aqua-farm-2025/point1-5.webp`,
          caption: 'Jira 기반 기능 단위 Task 진행 상황 관리(개발팀용)',
        },
        {
          url: `${blobUrl}/projects/aqua-farm-2025/point1-6.webp`,
          caption: '주간 스프린트 시 이슈사항 공유',
        },
      ],
      situation: `
      초기 단계에서 연구진 커뮤니케이션 지연으로 요구사항 정의가 늦어지고, 전체 일정 리스크 발생
      `,
      task: `
      연구진의 실제 업무 흐름을 빠르게 파악해 요구사항을 명확히 정리하고,
      일정 지연 없이 개발 착수 가능한 수준의 합의안 도출 필요
      `,
      action: `
      연구진과 직접 소통하며 Figma, 네이버 폼, 메일, 유선통화 등 다양한 채널로 요구사항 수집. 
      Jira 기반 기능 단위 Task 및 칸반 보드로 진행 상황 관리, 요구사항 세분화/구체화
      `,
      result: `
      일정 지연 요소 통제, 프로젝트 전반 안정적으로 리딩
      `,
    },
    {
      images: [
        {
          url: `${blobUrl}/projects/aqua-farm-2025/point2-0.webp`,
          caption:
            '기존) 엑셀 데이터를 직접 수식으로 계산하여 결과값 도출(생물 예측 성장)',
        },
        {
          url: `${blobUrl}/projects/aqua-farm-2025/point2-1.webp`,
          caption:
            '개선) Chart.js를 활용해 예측 성장 곡선 데이터를 차트로 시각화',
        },
        {
          url: `${blobUrl}/projects/aqua-farm-2025/point2-2.webp`,
          caption:
            '개선) Chart.js를 활용해 수질 시뮬레이션 데이터를 차트로 시각화',
        },
      ],
      situation: `
      연구진이 원시 데이터를 직접 확인·분석해야 해, 인사이트 도출까지 약 40분 이상 소요되는 비효율 존재
      `,
      task: `
      핵심 지표를 빠르게 해석할 수 있도록, 복잡한 데이터를 직관적으로 확인 가능한 시각화 경험 제공 필요
      `,
      action: `
      Chart.js를 활용해 성장 곡선 및 수질 시뮬레이션 데이터를 차트로 시각화
      `,
      result: `
      데이터 분석 시간 40분 → 2분 단축 (약 95% 개선)
      `,
    },
    {
      situation: `
      예측 계산을 서버 중심으로 처리할 경우 응답 속도가 느려, 그래프 조작 중 인터랙션이 끊기는 문제 발생
      `,
      task: `
      분석 정확도는 유지하면서도 사용자 조작에 즉시 반응하는 인터랙션 성능 확보 필요
      `,
      action: `
      그래프 인터랙션은 프론트엔드에서 즉시 계산/렌더링하고, 저장/다운로드 시에만 API를 호출하도록 구조 분리
      `,
      result: `
      사용자 인터랙션 유지, 성능과 정확성 동시 확보
      `,
    },
    {
      images: [
        {
          url: `${blobUrl}/projects/aqua-farm-2025/point4-1.webp`,
          caption: 'Confluence 기반 API 명세작성 (1)',
        },
        {
          url: `${blobUrl}/projects/aqua-farm-2025/point4-2.webp`,
          caption: 'Confluence 기반 API 명세작성 (2)',
        },
        {
          url: `${blobUrl}/projects/aqua-farm-2025/point4-3.webp`,
          caption: 'Swagger를 통해 Front-Backend 간 소통 비용 절약',
        },
      ],
      situation: `
      사내 리소스 부족으로 기획, UI/UX 업무를 전담할 인력이 없어 역할 공백 리스크가 발생
      `,
      task: `
      역할 공백 리스크를 줄이기 위해 팀원간 소통 비용 최소화
      `,
      action: `
      Figma, Swagger, Jira, Confluence 등 다양한 문서 협업 도구를 활용해 엔드-투-엔드로 관리
      `,
      result: `
      역할 공백 리스크 줄이고, 서비스 초기 구조를 안정적으로 설계하여 완성도 높은 연구 지원 플랫폼 구축
      `,
    },
  ],
  images: {
    thumbnail: { url: `${blobUrl}/projects/aqua-farm-2025/thumbnail.webp` },
    full: [
      { url: `${blobUrl}/projects/aqua-farm-2025/0.webp` },
      {
        url: `${blobUrl}/projects/aqua-farm-2025/intro1.webp`,
        caption: '기존 기능 마이그레이션, 신규 기능 개발',
      },
      {
        url: `${blobUrl}/projects/aqua-farm-2025/intro2.webp`,
        caption: '메뉴 구조 변경',
      },
      {
        url: `${blobUrl}/projects/aqua-farm-2025/description1.webp`,
        caption: '기획 및 디자인',
      },
      {
        url: `${blobUrl}/projects/aqua-farm-2025/description2.webp`,
        caption: '개발 및 산출물 관리',
      },
      { url: `${blobUrl}/projects/aqua-farm-2025/jira.webp` },
      { url: `${blobUrl}/projects/aqua-farm-2025/1.webp` },
      { url: `${blobUrl}/projects/aqua-farm-2025/2.webp` },
      { url: `${blobUrl}/projects/aqua-farm-2025/3.webp` },
      { url: `${blobUrl}/projects/aqua-farm-2025/4.webp` },
      { url: `${blobUrl}/projects/aqua-farm-2025/5.webp` },
      { url: `${blobUrl}/projects/aqua-farm-2025/6.webp` },
      { url: `${blobUrl}/projects/aqua-farm-2025/7.webp` },
    ],
  },
  startTime: '2025.06',
  endTime: '2025.12',
  period: getProjectPeriod('2025.06', '2025.12'),
  role: 'PM · UI/UX · Frontend',
  team: 'Koast',
  techStack: [
    'React.js',
    'TypeScript',
    'Tailwind CSS',
    'Vite',
    'Swagger',
    'Figma',
    'Jira',
    'Git',
  ],
};
