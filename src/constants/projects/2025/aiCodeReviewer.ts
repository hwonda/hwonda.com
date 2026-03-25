import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const aiCodeReviewer: Project = {
  id: 'ai-code-reviewer',
  title: 'AI Code Reviewer',
  subtitle: '온프레미스 LLM 기반 자동 코드 리뷰 시스템',
  description: {
    short: '온프레미스 LLM 기반 GitLab MR 자동 코드 리뷰 시스템',
    full: `
    보안 정책상 외부 AI 서비스를 사용할 수 없는 **온프레미스 환경에서 LLM 기반 GitLab MR 자동 코드 리뷰 시스템**을 단독 개발했습니다.

    Ollama 기반 로컬 LLM(\`gpt-oss-120b\`, 26년 현재)을 NAS 내부망에 구축하고 GitLab MR을 주기적으로 감지하여 **코드 스타일, 변수명, 사내 컨벤션 위반, 오류 가능성 등을 자동으로 분석**하도록 구현했습니다.

    LLM이 MR 요약 및 변경 파일별 설명을 자동 생성하여 MR 코멘트로 게시하도록 설계하여 **개발자가 변경 내용을 빠르게 파악할 수 있도록** 했습니다.
    그 결과 **MR당 평균 30분 이상 소요되던 코드 리뷰 시간을 약 15분 수준으로 단축**하여 팀의 개발 생산성을 개선했습니다.
    `,
  },
  urls: {
    etc: [
      {
        title: '관련 블로그 글',
        url: 'https://www.hwonda.com/blog/Project/04-make-AI-code-reviewer-by-open-source-LLM',
      },
    ],
  },
  points: [
    {
      situation: `
      보안 정책상 \`Code Rabbit\`, \`Copilot\` 등 외부 AI 코드 리뷰 서비스를 사용할 수 없는 환경
      `,
      task: `
      외부 API 없이 내부망에서만 동작하는 자동 코드 리뷰 체계 구축 필요
      `,
      action: `
      Ollama 기반 로컬 LLM 환경 구축 후 \`gpt-oss-120b\` 기반 코드 리뷰 시스템 개발
      `,
      result: `
      내부망 환경에서도 AI 기반 자동 코드 리뷰 수행 가능한 온프레미스 시스템 구축
      `,
    },
    {
      situation: `
      동료 코드 리뷰에 MR당 평균 30분 이상 소요되어 개발 사이클 지연 발생
      `,
      task: `
      리뷰 품질을 유지하면서 1차 검토 시간을 단축할 자동화 프롬프트 설계 필요
      `,
      action: `
      LLM이 코드 스타일, 변수명, 사내 컨벤션 위반, 오류 가능성을 1차 검토하도록 프롬프트 설계
      `,
      result: `
      MR 리뷰 시간 **30분 → 15분 수준 단축**, 팀 개발 생산성 향상
      `,
    },
    {
      situation: `
      MR에서 변경된 코드 의도를 빠르게 파악하기 어려워 리뷰 시간이 길어지는 문제 존재
      `,
      task: `
      리뷰어가 변경 목적을 즉시 이해할 수 있는 요약/설명 생성 체계 필요
      `,
      action: `
      \`Git diff\` 기반 MR 전체 요약과 변경 파일별 Short Description 생성 프롬프트 설계
      `,
      result: `
      리뷰어가 변경 의도를 빠르게 파악 가능한 코드 리뷰 환경 구축
      `,
    },
    {
      situation: `
      GitLab MR 리뷰 자동화를 누락 없이 운영할 백그라운드 처리 시스템 필요
      `,
      task: `
      신규 MR을 주기적으로 감지해 자동 리뷰를 안정적으로 트리거할 워커 구조 필요
      `,
      action: `
      Systemd 기반 백그라운드 워커와 GitLab MR 1분 폴링 시스템 구축으로 미리뷰 MR 자동 감지 설계
      `,
      result: `
      MR 생성 시 누락 없이 자동 코드 리뷰 수행되는 안정적 자동화 워크플로우 구축
      `,
    },
  ],
  images: {
    thumbnail: { url: '/projects/ai-code-reviewer/thumbnail.webp' },
    full: [
      { url: '/projects/ai-code-reviewer/1.webp' },
      {
        url: '/projects/ai-code-reviewer/2.webp',
        caption: 'GitLab MR 자동 코드 리뷰 화면',
      },
      {
        url: '/projects/ai-code-reviewer/3.webp',
        caption: 'GitLab MR 자동 코드 리뷰 화면 - 전체 커밋 리뷰',
      },
      {
        url: '/projects/ai-code-reviewer/4.webp',
        caption: 'GitLab MR 자동 코드 리뷰 화면 - 커밋별 리뷰',
      },
    ],
  },
  startTime: '2025.04',
  endTime: '2025.05',
  period: getProjectPeriod('2025.04', '2025.05'),
  role: 'PM · AI Ops',
  team: 'Koast',
  techStack: [
    'React.js',
    'TypeScript',
    'Tailwind CSS',
    'Vite',
    'Storybook',
    'Github Actions',
    'Git',
  ],
};
