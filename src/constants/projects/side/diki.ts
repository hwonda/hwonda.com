import { blobUrl } from '@/constants/common';
import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

const blobPath = `${blobUrl}/projects/diki`;

export const diki: Project = {
  id: 'diki',
  title: 'Diki',
  subtitle: '데이터 용어사전',
  description: {
    short:
      'SSG 기반으로 비용 문제를 해결하고, 커스텀 검색 엔진과 마크다운 파서를 구현한 데이터 사전 서비스',
    full: `
    데이터 용어 학습을 위해 데이터 사전을 직접 설계하고, 비용 효율적인 정적 아키텍처와 커스텀 검색 엔진을 구현한 웹 서비스입니다.

    Firestore 사용 시 발생하는 무료 티어 한계를 해결하기 위해 SSG 기반으로 모든 데이터를 JSON으로 사전 생성하여 요청 비용을 제거했습니다.

    또한 lunr.js를 커스터마이징하여 필드별 가중치 검색과 오타 허용(Fuzzy) 기능을 구현해 빠르고 정확한 검색 경험을 제공했습니다.

    GitHub Actions와 Vercel을 연동해 데이터 수집부터 배포까지 자동화된 운영 환경을 구축했습니다.
    `,
  },
  images: {
    thumbnail: {
      url: `${blobPath}/thumbnail.webp`,
      caption: '프로젝트 메인 대시보드 화면',
    },
    full: [
      { url: `${blobPath}/diki.webp` },
      { url: `${blobPath}/0.webp`, caption: '랜딩페이지' },
      { url: `${blobPath}/1.webp`, caption: '대시보드 화면 - 다크모드' },
      { url: `${blobPath}/2.webp`, caption: '포스트 검색 결과 화면' },
      { url: `${blobPath}/3.webp`, caption: '포스트 상세 페이지' },
      { url: `${blobPath}/4.webp`, caption: '포스트 상세 페이지' },
      { url: `${blobPath}/5.webp`, caption: '로그인 페이지' },
      { url: `${blobPath}/6.webp`, caption: '회원가입 페이지' },
      { url: `${blobPath}/7.webp`, caption: 'Contact 페이지' },
      { url: `${blobPath}/8.webp`, caption: 'Profile 페이지' },
      { url: `${blobPath}/9.webp`, caption: '새 포스트 작성하기' },
      { url: `${blobPath}/10.webp`, caption: '설정 페이지 화면' },
      { url: `${blobPath}/11.webp` },
      { url: `${blobPath}/12.webp` },
      { url: `${blobPath}/13.webp` },
      { url: `${blobPath}/14.webp` },
      { url: `${blobPath}/15.webp` },
      { url: `${blobPath}/16.webp` },
      { url: `${blobPath}/17.webp` },
      { url: `${blobPath}/18.webp` },
      { url: `${blobPath}/19.webp` },
      { url: `${blobPath}/20.webp` },
      { url: `${blobPath}/21.webp` },
      { url: `${blobPath}/22.webp` },
      { url: `${blobPath}/23.webp` },
      { url: `${blobPath}/24.webp` },
      { url: `${blobPath}/25.webp` },
      { url: `${blobPath}/26.webp` },
      { url: `${blobPath}/27.webp` },
      { url: `${blobPath}/28.webp` },
      { url: `${blobPath}/29.webp` },
      { url: `${blobPath}/30.webp` },
    ],
  },
  urls: {
    github: 'https://github.com/dxwiki/diki',
    demo: 'https://diki.kr',
  },
  points: [
    {
      images: [
        {
          url: `${blobPath}/point1-0.webp`,
          caption:
            '기존에는 layout 파일에서 직접 데이터를 fetching 해서 redux로 전달하는 방식',
        },
        {
          url: `${blobPath}/point1-1.webp`,
          caption: 'firebase 무료 사용량(읽기 50,000회/일) 초과',
        },
        {
          url: `${blobPath}/point1-2.webp`,
          caption: 'build 시 script 코드 실행',
        },
        {
          url: `${blobPath}/point1-3.webp`,
          caption: '실행될 script 코드(firebase 데이터 중 `terms` 컬렉션 추출)',
        },
        {
          url: `${blobPath}/point1-4.webp`,
          caption: 'src/data/terms.json 파일 생성',
        },
      ],
      situation: `
      각 페이지 접근 시마다 Firestore 요청이 발생해 개발 중에도 **무료 티어 한도를 초과**
      `,
      task: `
      **DB 요청 비용을 제거하면서도 콘텐츠를 안정적으로 제공할 수 있는 아키텍처** 필요
      `,
      action: `
      **빌드 시점에 모든 데이터(terms, profiles)를 JSON으로 사전 생성하는 SSG(Static Site Generation) 구조**로 전환
      `,
      result: `
      런타임 DB 요청을 완전히 제거하여 **월 운영 비용 0원**의 아키텍처 구축
      `,
    },
    {
      images: [
        {
          url: `${blobPath}/point2-0.webp`,
          caption: 'Github Actions 설정 파일',
        },
        {
          url: `${blobPath}/point2-1.webp`,
          caption: '매일 자정 자동 배포',
        },
        {
          url: `${blobPath}/point2-2.webp`,
          caption: '쿠키를 활용한 사용자 변경 사항 반영',
        },
      ],
      situation: `
      SSG 구조에서는 콘텐츠 수정 후 빌드/배포가 완료될 때까지 변경 사항이 사이트에 반영되지 않음
      `,
      task: `
      정적 구조를 유지하면서 사용자에게 즉각적인 피드백을 제공하는 방법이 필요
      `,
      action: `
      - 쿠키를 활용해 사용자의 변경 사항을 클라이언트에 즉시 반영해 표출
      - 실제 데이터는 일일(매일 00시) 자동 배포로 동기화하는 하이브리드 방식 설계
      `,
      result: `
      SSG의 비용 효율성을 유지하면서도 실시간에 가까운 UX 제공
      `,
    },
    {
      images: [
        {
          url: `${blobPath}/point3-0.webp`,
          caption: 'Diki 검색 화면',
        },
        {
          url: `${blobPath}/point3-1.webp`,
          caption: '토크나이저 구현',
        },
        {
          url: `${blobPath}/point3-2.webp`,
          caption: '섹션별 가중치(boost) 설정',
        },
        {
          url: `${blobPath}/point3-3.webp`,
          caption: '5단계 검색 전략 구현(퍼지 매칭 등)',
        },
        {
          url: `${blobPath}/point3-4.webp`,
          caption: '검색 예시(오탈자)',
        },
        {
          url: `${blobPath}/point3-5.webp`,
          caption: '검색 예시(한영 혼용 전문 용어)',
        },
      ],
      situation: `
      브라우저 기본 검색이나 단순 필터링으로는 한영 혼용 전문 용어 검색 시,
      한글 자모 분리 문제와 오타 처리 미흡으로 **검색 정확도가 낮음**
      `,
      task: `
      **한글 특성을 고려한 유연한 검색 시스템** 구축(오타 허용, 부분 매칭, 중요도 기반 결과 정렬 지원)
      `,
      action: `
      - 한글 전용 토크나이저 개발
      - 가중치 기반 다중 필드 검색 시스템 설계
      - 5단계 검색 전략 구현: 정확한 구문, 접두사, 접미사, 퍼지 매칭, 단어별 검색
      `,
      result: `
      - 검색 정확도 향상: 한글 자모 분리 문제 해결로 한글 검색 정확도 대폭 개선
      - 사용자 경험 개선: 오타 허용으로 검색 성공률 증가
      - 검색 누락 최소화: 5단계 검색 전략 + 풀백 메커니즘 구현
      - 유연한 검색: 부분 매칭, 접두사/접미사 검색으로 다양한 검색 패턴 지원
      - 확장 가능한 구조: 필드 추가/수정이 용이한 설정 기반 아키텍처로 유지보수성 확보
      `,
    },
    {
      images: [
        {
          url: `${blobPath}/point4-0.webp`,
          caption: 'Diki 새 포스트 작성 화면(마크다운 문법 가이드 제공)',
        },
        {
          url: `${blobPath}/point4-1.webp`,
          caption: '수식/텍스트 세그먼트 분리(MathJax 컴포넌트 위임)',
        },
        {
          url: `${blobPath}/point4-2.webp`,
          caption: '텍스트 세그먼트 렌더링(정규식 기반)',
        },
        {
          url: `${blobPath}/point4-3.webp`,
          caption: 'mobile 화면 미리보기(수식, 표 깨짐 없음)',
        },
      ],
      situation: `
      기본 마크다운 렌더러는 HTML 일괄 변환 방식이라,
      수식($, $$)이 마크다운 문법과 충돌해 깨지고
      표는 모바일에서 잘리는 등 **기술 문서 품질을 충족하지 못함**
      `,
      task: `
      수식·표·코드·이미지 등 콘텐츠 유형별로
      최적화된 렌더링이 가능한 **커스텀 마크다운 시스템 구축**
      `,
      action: `
      - 직접 마크다운 파싱 로직 구현
      - 콘텐츠를 **수식/텍스트 세그먼트로 먼저 분리**하여 수식이 마크다운 파싱에 의해 깨지는 문제 해결
      - 수식 세그먼트는 MathJax 컴포넌트로 위임, 텍스트 세그먼트는 정규식 기반으로 표·인용구·리스트·이미지(캡션/에러 폴백)·링크 등을 **개별 렌더링**
      `,
      result: `
      수식과 마크다운이 혼재된 기술 문서를 깨짐 없이 렌더링하는 시스템을 구축하고,
      콘텐츠 유형별 독립적 처리로 유지보수성 확보
      `,
    },
    {
      images: [
        {
          url: `${blobPath}/point5-0.webp`,
          caption:
            '랜딩페이지 검색 팁(운영체제에 따라 다른 키보드 단축키 제공)',
        },
        {
          url: `${blobPath}/point5-1.webp`,
          caption: '단순 검색 추천 시스템',
        },
        {
          url: `${blobPath}/point5-2.webp`,
          caption: '툴팁 버튼과 Dropdown UI',
        },
        {
          url: `${blobPath}/point5-3.webp`,
          caption: '부드러운 상세검색(MUI Slider, react-datepicker 래핑)',
        },
        {
          url: `${blobPath}/point5-4.webp`,
          caption: '반응형 디자인(정렬 UI)',
        },
        {
          url: `${blobPath}/point5-5.webp`,
          caption: '요소 갯수와 Text 크기에 따른 Grid 레이아웃',
        },
        {
          url: `${blobPath}/point5-6.webp`,
          caption: 'PC/Mobile 환경에서 최적화된 글쓰기 UI/UX',
        },
      ],
      situation: `
      여러 가지 고민한 UI/UX의 흔적들...
      `,
    },
  ],
  startTime: '2024.10',
  endTime: '2025.12',
  period: getProjectPeriod('2024.10', '2025.12'),
  role: 'PM · UI/UX · Frontend',
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
