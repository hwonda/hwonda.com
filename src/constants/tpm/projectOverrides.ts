import type { ProjectOverride } from '@/types/projects';

// TPM 관점의 프로젝트 오버라이드
// 기본 프로젝트 데이터에서 TPM 관점으로 변경하고 싶은 필드만 정의
export const projectOverrides: ProjectOverride[] = [
  {
    id: 'koast-ui',
    description: {
      short:
        '사내 React UI 라이브러리 도입을 기획하고 개발 프로세스를 주도하여 팀 전체의 개발 생산성을 향상시켰습니다.',
      full: `
      프론트엔드 기술 표준화와 개발 생산성 향상을 위해 **사내 공용 UI 라이브러리 도입 프로젝트를 기획하고 주도**했습니다.

      기존에 JSP, 타임리프, Vue 등 다양한 프레임워크가 혼재된 환경에서 **기술 스택 표준화의 필요성을 CTO에게 제안**하고, React + Tailwind CSS로의 전환 로드맵을 수립했습니다.

      **주요 활동:**
      - 기술 스택 표준화 제안 및 의사결정 과정 주도
      - 사내 React 스터디 기획 및 운영 (6명 참여)
      - Storybook 기반 문서화 전략 수립으로 팀 간 커뮤니케이션 효율화
      - GitHub Actions 기반 CI/CD 파이프라인 구축 및 배포 프로세스 표준화
      - 사내 commit convention 및 브랜치 전략 정립

      **성과:**
      - 2025년 신규 프로젝트 4개 중 3개에 React, Tailwind CSS 적용
      - 백엔드 개발자의 UI 구현 속도 10배 이상 향상
      - 팀 협업 프로세스 체계화 및 개발 문화 개선
      `,
    },
    role: 'Technical PM · Frontend Lead',
    points: [
      {
        challenges: `다양한 프레임워크가 혼재된 환경에서 팀원들의 기술 역량 편차가 크고, 표준화된 개발 프로세스가 부재했습니다.`,
        solutions: `CTO와 다수의 협의를 통해 기술 스택 표준화 방향을 설정하고, 단계별 전환 로드맵을 수립했습니다. React 스터디를 기획하여 팀원들의 역량 향상을 지원했습니다.`,
        results: `2025년부터 신규 프로젝트의 75%에 표준화된 기술 스택을 적용하며, 팀 전체의 기술 역량이 상향 평준화되었습니다.`,
      },
      {
        challenges: `기획자, 디자이너, 개발자 간 UI 관련 소통이 원활하지 않아 개발 후반부에 요구사항 변경이 빈번하게 발생했습니다.`,
        solutions: `Storybook을 활용한 컴포넌트 문서화 및 사전 테스트 환경을 구축하여, 개발 초기 단계에서 이해관계자들의 피드백을 수렴할 수 있는 프로세스를 마련했습니다.`,
        results: `UI 관련 요구사항 변경이 개발 초기에 반영되어 재작업이 크게 감소하고, 팀 간 협업 만족도가 향상되었습니다.`,
      },
      {
        challenges: `수동 배포 프로세스로 인해 휴먼 에러 발생 위험이 높고, 배포 주기가 길어져 빠른 피드백 반영이 어려웠습니다.`,
        solutions: `GitHub Actions 기반 CI/CD 파이프라인을 구축하고, commit convention과 브랜치 전략을 정립하여 배포 프로세스를 자동화했습니다.`,
        results: `배포 오류가 크게 감소하고 배포 주기가 단축되어, 기능 개선 및 버그 수정에 대한 빠른 대응이 가능해졌습니다.`,
      },
    ],
  },
  {
    id: 'zizizip',
    role: '1인 주도 개발',
  },
  {
    id: 'blog',
    role: '1인 주도 개발',
  },
];
