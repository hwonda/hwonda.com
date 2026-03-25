import { blobUrl } from '@/constants/common';
import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const aquaFarm2025: Project = {
  id: 'aqua-farm-2025',
  title: '스마트 양식장 2025',
  subtitle: '연구용 스마트 양식 데이터 시각화 플랫폼',
  description: {
    short: '사료연구센터 연구원들의 양식 데이터를 시각화하는 플랫폼입니다.',
    full: `
    연구진의 데이터 분석 효율 향상을 목표로, 양식 연구 플랫폼의 **기획부터 프론트엔드 개발까지 주도**했습니다.
    
    어류 성장, 시장가, 수질 시뮬레이션 등 **25개의 신규 기능을 시각화 중심으로 개발**했으며, 기존 Vue.js 2 기반 사료 연구 플랫폼의 **35개 메뉴를 React로 마이그레이션**했습니다.

    또한 수온과 사료량 기반 예측 모델을 활용해 실측 데이터와 예측 데이터를 동적으로 비교할 수 있는 시각화 시스템을 구축했고, 
    프론트엔드 연산 최적화를 통해 인터랙션 성능을 개선했습니다.
    개발 환경은 \`Vite\`, \`Tailwind CSS\`, 사내 UI 라이브러리(\`@koast/ui\`)를 기반으로 표준화하여 생산성과 UI 일관성을 높였습니다.

    그 결과, 연구진의 데이터 분석 시간을 기존 40분에서 2분 수준으로 단축했습니다.
    `,
  },
  points: [
    {
      images: [
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
  endTime: '현재',
  period: getProjectPeriod('2025.06', '현재'),
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
