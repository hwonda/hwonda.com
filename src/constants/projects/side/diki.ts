import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const diki: Project = {
  id: 'diki',
  title: 'Diki',
  subtitle: '데이터 용어사전',
  description: {
    short:
      '데이터 직무 종사자를 위한 데이터 용어사전 플랫폼으로, 마크다운 기반의 문서 작성과 공유 기능을 제공합니다.',
    full: `데이터 용어사전 웹 프론트엔드 개발 프로젝트입니다.
      Firestore 데이터를 빌드 시점에 수집하여 Static Site Generation(SSG) 방식으로 페이지 렌더링하며, 랜딩페이지, 포스트 목록, 포스트 페이지 등을 구현했습니다.
      TailwindCSS를 사용한 다크모드 지원 및 모바일 반응형 웹 페이지를 구현하였고, 자체적인 Markdown 파서를 구현하여 포스트 제작 및 표출 기능을 구현했습니다.
      lunr.js를 활용한 컨텐츠 가중치 검색 기능을 제공하고, Github Actions 및 Vercel을 통한 자동 배포를 구현했습니다.
      `,
  },
  images: {
    thumbnail: {
      url: '/projects/diki/thumbnail.webp',
      caption: '프로젝트 메인 대시보드 화면',
    },
    full: [
      { url: '/projects/diki/1.webp', caption: '대시보드 화면 - 다크모드' },
      { url: '/projects/diki/2.webp', caption: '포스트 검색 결과 화면' },
      { url: '/projects/diki/3.webp', caption: '포스트 상세 페이지' },
      { url: '/projects/diki/4.webp', caption: '포스트 상세 페이지' },
      { url: '/projects/diki/5.webp', caption: '로그인 페이지' },
      { url: '/projects/diki/6.webp', caption: '회원가입 페이지' },
      { url: '/projects/diki/7.webp', caption: 'Contact 페이지' },
      { url: '/projects/diki/8.webp', caption: 'Profile 페이지' },
      { url: '/projects/diki/9.webp', caption: '새 포스트 작성하기' },
      { url: '/projects/diki/10.webp', caption: '설정 페이지 화면' },
      { url: '/projects/diki/11.webp' },
      { url: '/projects/diki/12.webp' },
      { url: '/projects/diki/13.webp' },
      { url: '/projects/diki/14.webp' },
      { url: '/projects/diki/15.webp' },
      { url: '/projects/diki/16.webp' },
      { url: '/projects/diki/17.webp' },
      { url: '/projects/diki/18.webp' },
      { url: '/projects/diki/19.webp' },
      { url: '/projects/diki/20.webp' },
      { url: '/projects/diki/21.webp' },
      { url: '/projects/diki/22.webp' },
      { url: '/projects/diki/23.webp' },
      { url: '/projects/diki/24.webp' },
      { url: '/projects/diki/25.webp' },
      { url: '/projects/diki/26.webp' },
      { url: '/projects/diki/27.webp' },
      { url: '/projects/diki/28.webp' },
      { url: '/projects/diki/29.webp' },
      { url: '/projects/diki/30.webp' },
    ],
  },
  urls: {
    github: 'https://github.com/dxwiki/diki',
    demo: 'https://diki.kr',
  },
  points: [
    {
      challenges: `실시간 협업 기능을 구현하면서 동시 편집 충돌을 해결하는 것이 가장 큰 도전이었습니다.
또한 다양한 마크다운 확장 기능을 지원하면서도 성능을 유지하는 것이 중요했습니다.`,
      solutions: `CRDT(Conflict-free Replicated Data Type) 알고리즘을 도입하여 동시 편집 문제를 해결했습니다.
또한 코드 스플리팅과 가상화 기법을 활용하여 대용량 문서도 원활하게 편집할 수 있도록 했습니다.`,
      results: `팀 내 문서화 작업 효율이 40% 향상되었으며, 지식 공유가 활성화되어 신규 입사자의 온보딩 시간이 30% 단축되었습니다.`,
    },
  ],
  startTime: '2024.10',
  endTime: '2025.12',
  period: getProjectPeriod('2024.10', '2025.12'),
  role: 'Frontend / Backend / SEO',
  team: 'DXWiki',
  techStack: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Firebase',
    'Redux',
    'Vercel',
    'Git',
    'Github Actions',
  ],
};
