import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const diki: Project = {
  id: 'diki',
  title: 'Diki',
  subtitle: '데이터 용어사전',
  description: {
    short:
      'SSG 기반으로 비용 문제를 해결하고, 커스텀 검색 엔진과 마크다운 파서를 구현한 데이터 사전 서비스',
    full: `
    데이터 용어 학습을 위해 MD 기반 데이터 사전을 직접 설계하고, 비용 효율적인 정적 아키텍처와 커스텀 검색 엔진을 구현한 웹 서비스입니다.

    Firestore 사용 시 발생하는 무료 티어 한계를 해결하기 위해 SSG 기반으로 모든 데이터를 JSON으로 사전 생성하여 요청 비용을 제거했습니다.

    또한 lunr.js를 커스터마이징하여 필드별 가중치 검색과 오타 허용(Fuzzy) 기능을 구현해 빠르고 정확한 검색 경험을 제공했습니다.

    GitHub Actions와 Vercel을 연동해 데이터 수집부터 배포까지 자동화된 운영 환경을 구축했습니다.
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
      challenges: `
      페이지 접근 시마다 Firestore 요청이 발생해 무료 플랜 한도를 빠르게 초과하는 문제가 있었습니다.
      `,
      solutions: `
      빌드 시점에 데이터를 JSON으로 생성하는 SSG 구조로 전환했습니다.
      `,
      results: `
      런타임 API 요청을 제거하여 비용 제로에 가까운 아키텍처를 구축했습니다.
      `,
    },
    {
      challenges: `
      SSG 구조에서는 데이터 변경 시 즉시 반영되지 않는 UX 한계가 있었습니다.
      `,
      solutions: `
      로컬스토리지를 활용해 사용자 변경사항을 즉시 반영하는 임시 상태를 구성하고, 실제 데이터는 일일 배포로 동기화했습니다.
      `,
      results: `
      정적 구조를 유지하면서도 실시간에 가까운 사용자 경험 제공했습니다.
      `,
    },
    {
      challenges: `
      기본 검색으로는 원하는 용어를 빠르게 찾기 어려운 문제가 있었습니다.
      `,
      solutions: `
      lunr.js를 커스터마이징하여 필드별 가중치 검색과 오타 허용(Fuzzy 검색)을 구현했습니다.
      `,
      results: `
      검색 정확도와 속도를 동시에 개선하여 사용자 중심 검색 UX를 구축했습니다.
      `,
    },
    {
      challenges: `
      기본 마크다운 렌더링으로는 표, 이미지, 수식 등 복잡한 콘텐츠를 가독성 있게 표현하기 어려운 문제가 있었습니다.
      `,
      solutions: `
      마크다운을 직접 파싱하여 콘텐츠 유형별(표, 이미지, 수식 등) 최적화된 렌더링 로직을 구현했습니다.
      `,
      results: `
      기술 문서에 적합한 고가독성 콘텐츠 렌더링 시스템을 구축했습니다.
      `,
    },
    {
      challenges: `
      데이터 갱신과 배포가 수동일 경우 운영 부담이 증가했습니다.
      `,
      solutions: `
      GitHub Actions를 활용해 데이터 수집 → 빌드 → 배포 자동화 파이프라인을 구축했습니다.
      `,
      results: `
      완전 자동화된 무인 운영 환경을 구축했습니다.
      `,
    },
  ],
  startTime: '2024.10',
  endTime: '2025.12',
  period: getProjectPeriod('2024.10', '2025.12'),
  role: 'Frontend · Backend · SEO',
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
