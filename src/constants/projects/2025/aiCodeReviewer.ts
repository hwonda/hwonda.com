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
      보안 정책상 \`Code Rabbit\`, \`Copilot\`등 외부 AI 코드 리뷰 서비스를 사용할 수 없는 환경이었습니다.
      `,
      action: `
      Ollama 기반 로컬 \`LLM\` 환경을 구축하고 \`gpt-oss-120b\` 모델을 활용한 코드 리뷰 시스템을 개발했습니다.
      `,
      result: `
      내부망 환경에서도 AI 기반 자동 코드 리뷰를 수행할 수 있는 온프레미스 시스템을 구축했습니다.
      `,
    },
    {
      situation: `
      동료 코드 리뷰에 MR당 평균 30분 이상 소요되어 개발 사이클이 지연되는 문제가 있었습니다.
      `,
      action: `
      LLM이 코드 스타일, 변수명, 사내 컨벤션 위반, 오류 가능성 등을 1차 검토하도록 프롬프트를 설계했습니다.
      `,
      result: `
      MR 리뷰 시간을 **30분 → 15분 수준으로 단축**하여 팀 개발 생산성을 향상시켰습니다.
      `,
    },
    {
      situation: `
      MR에서 변경된 코드의 의도를 빠르게 이해하기 어려워 리뷰 시간이 길어지는 문제가 있었습니다.      
      `,
      action: `
      \`Git diff\` 기반으로 MR 전체 요약과 변경 파일별 Short Description을 생성하도록 LLM 프롬프트를 설계했습니다.
      `,
      result: `
      리뷰어가 변경 의도를 빠르게 파악할 수 있는 **코드 리뷰 환경**을 구축했습니다.
      `,
    },
    {
      situation: `
      GitLab MR 리뷰 자동화를 안정적으로 운영할 수 있는 백그라운드 처리 시스템이 필요했습니다.
      `,
      action: `
      Systemd 기반 백그라운드 워커와 GitLab MR 폴링 시스템(1분 간격)을 구축하여 리뷰가 없는 MR을 자동 감지하도록 설계했습니다.
      `,
      result: `
      MR 생성 시 누락 없이 자동 코드 리뷰가 수행되는 안정적인 자동화 워크플로우를 구축했습니다.
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
  role: 'PM · Design · Frontend',
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
