import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const aquaFarm2025: Project = {
  id: 'aqua-farm-2025',
  title: '스마트 양식장 2025',
  subtitle: '연구용 스마트 양식 데이터 시각화 플랫폼',
  description: {
    short: '사료연구센터 연구원들의 양식 데이터를 시각화하는 플랫폼입니다.',
    full: `
    연구진의 데이터 분석 효율 향상을 위해 어류 성장 예측, 수질 시뮬레이션, 실시간 센서 데이터를 
    통합한 **양식 연구 플랫폼을 기획부터 개발까지 주도**했습니다.

    수온과 사료량 기반 예측 모델을 활용하여 실측 데이터와 예측 데이터를 동적으로 비교할 수 있는 
    시각화 시스템을 구축하고, 프론트엔드 연산을 활용해 인터랙션 성능을 개선했습니다.

    또한 \`Vite\`, \`TailwindCSS\`, 사내 UI 라이브러리(\`@koast/ui\`)를 기반으로 고속 개발 환경과 일관된 UI 시스템을 구축했습니다.

    그 결과 연구진의 데이터 분석 시간을 **40분 → 2분 수준으로 단축**했습니다.
    `,
  },
  points: [
    {
      challenges: `
      연구진과의 커뮤니케이션이 지연되며 요구사항 정의에 1~2주 이상 소요되는 일정 리스크가 발생했습니다.
      `,
      solutions: `
      Jira 기반 기능 단위 Task 및 칸반 보드로 진행 상황을 관리하고, 요구사항을 세분화하여 지속적으로 구체화했습니다.
      `,
      results: `
      일정 지연 요소를 통제하며 프로젝트 전반을 안정적으로 리딩했습니다.
      `,
    },
    {
      challenges: `
      기존에는 연구진이 데이터를 직접 분석해야 해 결과 도출까지 약 40분 이상 소요되는 비효율이 있었습니다.
      `,
      solutions: `
      수온·사료량 기반 예측 모델을 활용해 성장 곡선 및 수질 시뮬레이션 데이터를 차트로 시각화했습니다.
      `,
      results: `
      데이터 분석 시간을 40분 → 2분으로 단축 (약 95% 개선)했습니다.
      `,
    },
    {
      challenges: `
      예측 계산을 서버에서 처리할 경우 응답 속도가 느려 인터랙션이 끊기는 문제가 있었습니다.
      `,
      solutions: `
      그래프 인터랙션은 프론트엔드에서 즉시 계산 및 렌더링하고, 저장/다운로드 시에만 API를 호출하도록 구조를 분리했습니다.
      `,
      results: `
      사용자 인터랙션을 유지하면서 성능과 정확성을 동시에 확보했습니다.
      `,
    },
    {
      challenges: `
      기존 환경에서 빌드 속도와 개발 속도가 느려 생산성 저하가 발생했습니다.
      `,
      solutions: `
      Webpack → Vite로 전환하고, @koast/ui 기반 UI 컴포넌트 시스템을 적용했습니다.
      `,
      results: `
      빌드 속도를 약 10배 개선하고, UI 개발 생산성을 25% 이상 향상했습니다.
      `,
    },
    {
      challenges: `
      기획, 설계, 개발이 분리되지 않은 상황에서 전체 흐름을 통합적으로 관리해야 하는 필요가 있었습니다.
      `,
      solutions: `
      기획, UX 설계(Figma), API 명세, 프론트 개발까지 엔드-투-엔드로 주도했습니다.
      `,
      results: `
      서비스 초기 구조를 안정적으로 설계하고 완성도 높은 연구 지원 플랫폼을 구축했습니다.
      `,
    },
  ],
  images: {
    thumbnail: { url: '/projects/aqua-farm-2025/thumbnail.webp' },
  },
  startTime: '2025.06',
  endTime: '현재',
  period: getProjectPeriod('2025.06', '현재'),
  role: 'PM · Design · Frontend',
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
