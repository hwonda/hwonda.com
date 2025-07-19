import type { Project, YearProjects } from '../types/projects';

// 연도별 프로젝트 데이터
export const projectsData: YearProjects[] = [
  {
    year: '2025',
    projects: [
      {
        id: 'diki',
        title: 'Diki',
        description: {
          short:
            '개발자를 위한 지식 관리 플랫폼으로, 마크다운 기반의 문서 작성과 공유 기능을 제공합니다.',
          full: `데이터 용어사전 웹 프론트엔드 개발 프로젝트입니다.
            Firestore 데이터를 빌드 시점에 수집하여 Static Site Generation(SSG) 방식으로 페이지 렌더링하며, 랜딩페이지, 포스트 목록, 포스트 페이지 등을 구현했습니다.
            lunr.js를 활용한 컨텐츠 가중치 검색 기능을 제공하고, Github Actions 및 Vercel을 통한 자동 배포를 구현했습니다.`,
        },
        images: {
          thumbnail: '/projects/diki/thumbnail.webp',
          full: [
            '/projects/diki/1.webp',
            '/projects/diki/2.webp',
            '/projects/diki/3.webp',
            '/projects/diki/4.webp',
            '/projects/diki/5.webp',
            '/projects/diki/6.webp',
            '/projects/diki/7.webp',
            '/projects/diki/8.webp',
            '/projects/diki/9.webp',
            '/projects/diki/10.webp',
            '/projects/diki/11.webp',
            '/projects/diki/12.webp',
            '/projects/diki/13.webp',
            '/projects/diki/14.webp',
            '/projects/diki/15.webp',
            '/projects/diki/16.webp',
            '/projects/diki/17.webp',
            '/projects/diki/18.webp',
            '/projects/diki/19.webp',
            '/projects/diki/20.webp',
            '/projects/diki/21.webp',
            '/projects/diki/22.webp',
            '/projects/diki/23.webp',
            '/projects/diki/24.webp',
            '/projects/diki/25.webp',
            '/projects/diki/26.webp',
            '/projects/diki/27.webp',
            '/projects/diki/28.webp',
            '/projects/diki/29.webp',
            '/projects/diki/30.webp',
          ],
          captions: [
            '프로젝트 메인 대시보드 화면',
            '용어 검색 결과 화면',
            '용어 상세 페이지',
            '마크다운 편집기 화면',
            '데이터 시각화 대시보드',
            '사용자 권한 관리 화면',
            '태그 기반 필터링 기능',
            '다크 모드 지원 화면',
            '모바일 반응형 화면',
            '설정 페이지 화면',
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
        period: '2024.10 ~ 현재',
        techStack: [
          'Next.js',
          'TypeScript',
          'TailwindCSS',
          'Firebase',
          'Redux',
          'Vercel',
        ],
      },
      {
        id: 'koast-ui',
        title: '@koast/ui',
        description: {
          short:
            '사내 React UI 라이브러리로, 개발 러닝커브를 낮추고 일관된 디자인 아이덴티티를 제공합니다.',
          full: `React 기반 UI 개발의 러닝커브를 낮추기 위해 자발적으로 사내 공용 UI 라이브러리를 개발했습니다.
      Github Pages로 Storybook Docs를 제작하고 NPM에 배포했으며,
      지도(map)용 Time slider, Legend 등 사내 특화 컴포넌트를 제공합니다.
      백엔드 개발자의 UI 구현 속도 향상 및 서비스 전반에 일관된 디자인 아이덴티티를 부여했습니다.
      
      주요 기능:
      - 해양 데이터 시각화 컴포넌트
      - 해양 지도 컴포넌트
      - 데이터 테이블 및 필터링
      - 반응형 디자인`,
        },
        images: {
          thumbnail: '/projects/koast-ui/thumbnail.webp',
          full: [
            '/projects/koast-ui.webp',
            '/projects/koast-ui.webp',
            '/projects/koast-ui.webp',
          ],
        },
        urls: {
          github: 'https://github.com/username/koast-ui',
          demo: 'https://koast-ui-demo.com',
        },
        points: [
          {
            challenges: `다양한 해양 데이터 형식을 일관되게 처리하고 시각화하는 것이 가장 큰 도전이었습니다.
      또한 대용량 데이터를 효율적으로 렌더링하면서도 성능을 유지하는 것이 중요했습니다.`,
            solutions: `데이터 정규화 및 캐싱 전략을 도입하여 다양한 데이터 소스를 효율적으로 처리했습니다.
      또한 가상화 기법과 WebGL 기반 렌더링을 활용하여 대용량 데이터도 원활하게 시각화할 수 있도록 했습니다.`,
            results: `해양 관련 애플리케이션 개발 시간이 50% 단축되었으며, 일관된 사용자 경험을 제공할 수 있게 되었습니다.
      현재 여러 해양 관련 프로젝트에서 핵심 라이브러리로 사용되고 있습니다.`,
          },
        ],
        period: '2025.03 ~ 2025.04',
        techStack: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
      },
      {
        id: 'aviation-weather',
        title: '항공 위험기상 예측 시스템(나래웨더)',
        description: {
          short: '항공 관제 및 조종사를 위한 위험 기상 예측 시스템입니다.',
          full: `항공 관제 및 조종사를 위한 위험기상 예측 시스템으로,
            전체 UI 구조 설계와 Redux를 활용한 전역 상태 관리 및 공용 커스텀 훅 상태 개선을 담당했습니다.
            지도 오픈소스 라이브러리 OpenLayers를 React에서 사용하기 위해 매핑하고,
            외부 API 기반 위험정보를 2D 지도 위에 시각화했습니다.
            기상 범례에 따라 색상 자동 조정 기능을 구현하고,
            제작중인 React UI 라이브러리(koast-ui)를 도입 및 해당 라이브러리 버그를 수정했습니다.`,
        },
        images: {
          thumbnail: '/projects/aviation-weather/thumbnail.webp',
        },
        period: '2025.03 ~ 2025.04',
        techStack: [
          'React',
          'TypeScript',
          'TailwindCSS',
          'Redux',
          'OpenLayers',
        ],
      },
      {
        id: 'digital-twin',
        title: '맞춤형 해양예측정보 제공 서비스(디지털트윈)',
        description: {
          short:
            '어획량 예측 웹 및 갯벌 내비게이션 앱을 포함한 맞춤형 해양 예측 정보 서비스입니다.',
          full: `어획량 예측 웹 프론트엔드 개발을 담당했으며,
            Cesium과 GIS 레이어를 사용한 3D 지도격자를 구현했습니다.
            어종에 따른 어획량을 icon의 크기 및 색상으로 표출하여 직관성을 향상시켰고,
            비교를 위해 2분할된 지도 화면에서 레이어 표출을 최적화했습니다.
            갯벌 안전 내비게이션 기획, 디자인 및 웹뷰 개발을 진행하며,
            Figma를 활용한 모바일 웹 프로토타입을 제작하고,
            Flutter, React를 사용한 모바일 웹뷰를 개발 중입니다.`,
        },
        images: {
          thumbnail: '/projects/digital-twin/thumbnail.webp',
          full: [
            '/projects/digital-twin/2.webp',
            '/projects/digital-twin/3.webp',
            '/projects/digital-twin/4.webp',
            '/projects/digital-twin/5.webp',
            '/projects/digital-twin/6.webp',
            '/projects/digital-twin/7.webp',
            '/projects/digital-twin/8.webp',
            '/projects/digital-twin/9.webp',
            '/projects/digital-twin/10.webp',
            '/projects/digital-twin/11.webp',
            '/projects/digital-twin/12.webp',
          ],
        },
        period: '2024.12 ~ 2025.03',
        techStack: [
          'React',
          'Flutter',
          'TypeScript',
          'TailwindCSS',
          'Cesium',
          'Figma',
        ],
      },
      {
        id: 'smart-farm-2025',
        title: '스마트양식장',
        description: {
          short: '스마트 양식 기술을 활용한 양식장 관리 시스템입니다.',
          full: `IoT 센서와 AI 기술을 활용하여 양식장의 환경을 모니터링하고 제어하는 시스템입니다.`,
        },
        images: {
          thumbnail: '/projects/smart-farm/thumbnail.webp',
        },
        techStack: ['React', 'Node.js', 'IoT'],
      },
    ],
  },
  {
    year: '2024',
    projects: [
      {
        id: 'blog',
        title: '프론트엔드 기술 블로그',
        description: {
          short:
            'Next.js 기반 기술 블로그로, SEO 최적화가 구성된 개인 블로그 플랫폼입니다.',
          full: `Next.js 기반 기술 블로그를 개발하고 Vercel에 배포했습니다.
      Google Analytics, robots.txt, Sitemap 설정을 통한 SEO 최적화를 구성했습니다.`,
        },
        images: {
          thumbnail: '/projects/blog/thumbnail.webp',
        },
        period: '2024.07 ~ 현재',
        techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
      },
      {
        id: 'nims',
        title: '연구용 기상관측 통합관리체계',
        description: {
          short: '해양 연구장비 및 데이터를 관리하는 통합 시스템입니다.',
          full: `연구용 관측장비와 데이터를 테이블 형식으로 표출하고,
      검색, 필터링 및 페이지네이션을 구현했습니다.
      관측장비 상세 내용을 표출하는 모달창을 구현하고,
      OpenLayers 지도상에 장비의 위치 및 상태를 표시했습니다.
      장비의 상태를 시각적으로 구분할 수 있도록 범례 및 색상을 추가하고,
      RTK Query를 사용하여 데이터의 효율적인 상태 관리 및 서버와의 통신을 구현했습니다.`,
        },
        images: {
          thumbnail: '/projects/nims/thumbnail.webp',
          full: [
            '/projects/nims/1.webp',
            '/projects/nims/2.webp',
            '/projects/nims/3.webp',
            '/projects/nims/4.webp',
          ],
        },
        period: '2024.06 ~ 2024.08',
        techStack: [
          'React',
          'TypeScript',
          'TailwindCSS',
          'OpenLayers',
          'RTK Query',
        ],
      },
      {
        id: 'aisar',
        title: '해양 수색구조 의사결정 지원 시스템(AI수색구조)',
        description: {
          short:
            '해상사고 시 수색구조에 도움이 되는 데이터를 시각화하여 의사결정을 돕는 해양경찰청 내 시스템입니다.',
          full: `해상사고 시 수색구조에 도움이 되는 데이터를 시각화하여 의사결정을 돕는 해양경찰청 내 시스템입니다.
      Figma를 활용하여 기존 시스템의 디자인 변경 및 기획, 개발을 진행했으며,
      20여 개가 넘는 색상들을 최대 7개로 color set을 축소했습니다.
      변경된 디자인을 직접 퍼블리싱하고 기존 기능을 퍼블리싱된 페이지에 통합 적용했습니다.
      기존 레거시 코드 리팩토링으로 코드의 가독성과 유지보수성을 향상시켰으며,
      3,000줄이 넘는 하나의 JavaScript 코드를 기능별로 분리하고 데이터 처리 로직을 간소화했습니다.
      
      주요 기능:
      - 실시간 해양 데이터 분석
      - AI 기반 표류 예측
      - 최적 수색 경로 제안
      - 작전 상황 실시간 공유`,
        },
        images: {
          thumbnail: '/projects/aisar/thumbnail.webp',
          full: [
            '/projects/aisar/1.webp',
            '/projects/aisar/2.webp',
            '/projects/aisar/3.webp',
            '/projects/aisar/4.webp',
            '/projects/aisar/5.webp',
            '/projects/aisar/6.webp',
            '/projects/aisar/7.webp',
            '/projects/aisar/8.webp',
            '/projects/aisar/9.webp',
          ],
        },
        urls: {
          github: 'https://github.com/username/aisar',
          demo: 'https://aisar-demo.com',
        },
        points: [
          {
            challenges: `해양 환경의 복잡성과 불확실성을 고려한 정확한 표류 예측 모델을 개발하는 것이 가장 큰 도전이었습니다.
      또한 긴급 상황에서도 안정적으로 작동하는 시스템을 구축하는 것이 중요했습니다.`,
            solutions: `다양한 해양 데이터를 통합하고 머신러닝 알고리즘을 적용하여 표류 예측 정확도를 높였습니다.
      또한 오프라인 작동 기능과 데이터 동기화 메커니즘을 구현하여 네트워크 불안정 상황에서도 작동할 수 있도록 했습니다.`,
            results: `수색구조 성공률이 25% 향상되었으며, 작전 시간이 평균 30% 단축되었습니다.
      이는 인명 구조 확률을 크게 높이는 결과로 이어졌습니다.`,
          },
        ],
        period: '2024.03 ~ 2024.05',
        techStack: ['HTML', 'JavaScript', 'SCSS', 'Figma'],
      },
      {
        id: 'mmis-2024',
        title: 'MMIS',
        description: {
          short: '기상청 대국민 서비스 및 기상청 내 솔루션 시스템입니다.',
          full: `기상청 대국민 서비스(해양기상정보포털) 및 기상청 관계자 기상 정보 관련 업무 서비스 기능을 개발했습니다.
      기상청 요구사항에 따른 PC 및 Mobile 기능을 구현하고,
      OpenLayers를 활용하여 폭풍, 해일, 기온 등의 정보를 표출하는 2D 지도 레이어를 발행했습니다.
      시간에 따른 데이터 표출 슬라이더를 구현하고,
      메뉴별 사용자 사용 통계를 확인하는 플랫폼 통계 기능을 강화했으며,
      React-Native를 사용하여 위성 방송 애플리케이션에 콘텐츠를 추가했습니다.`,
        },
        images: {
          thumbnail: '/projects/mmis/thumbnail.webp',
        },
        period: '2023.04 ~ 현재',
        techStack: [
          'Vue3',
          'Vuex',
          'TypeScript',
          'Axios',
          'React-Native',
          'OpenLayers',
        ],
      },
      {
        id: 'aqua-farm-2024',
        title: '스마트양식장',
        description: {
          short: '스마트 양식 기술을 활용한 양식장 관리 시스템입니다.',
          full: `CSS Grid를 사용해 수조 상태, 어종 정보, 캘린더, CCTV 등의 정보를 표출하는 대시보드를 구현했습니다.
            사료 잔량과 사료공급장치의 상태를 시각화하는 모니터링 페이지를 구현하고,
            오류 시 알림 기능을 만들어 관리자 메일 및 SNS 알림을 발송합니다.
            사료공급 및 개인 일정을 관리할 수 있는 캘린더 기능을 추가하고,
            오픈소스 Vue-datepicker를 래핑하여 솔루션의 톤 앤 매너를 통일했습니다.
            관리자가 대시보드 등 웹사이트 설정이나 수조, 센서 등을 관리할 수 있도록 페이지를 구축했습니다.`,
        },
        images: {
          thumbnail: '/projects/aqua-farm-2024/thumbnail.webp',
          full: [
            '/projects/aqua-farm-2024/1.webp',
            '/projects/aqua-farm-2024/2.webp',
            '/projects/aqua-farm-2024/3.webp',
            '/projects/aqua-farm-2024/4.webp',
            '/projects/aqua-farm-2024/5.webp',
            '/projects/aqua-farm-2024/6.webp',
            '/projects/aqua-farm-2024/7.webp',
            '/projects/aqua-farm-2024/8.webp',
            '/projects/aqua-farm-2024/9.webp',
            '/projects/aqua-farm-2024/10.webp',
            '/projects/aqua-farm-2024/11.webp',
          ],
        },
        period: '2023.01 ~ 현재',
        techStack: ['Vue2', 'Vuex', 'Axios', 'CSS Grid'],
      },
    ],
  },
  {
    year: '2023',
    projects: [
      {
        id: 'react-multi-email',
        title: 'React-multi-email',
        description: {
          short:
            '다중 이메일 입력을 위한 React 컴포넌트 라이브러리로, 사용자 친화적인 인터페이스와 검증 기능을 제공합니다.',
          full: `오픈 소스 프로젝트에 기여한 활동으로,
      Jest를 사용하여 유닛 테스트를 작성하고 검증했으며,
      버그를 수정하고 PR과 Issue를 확인했습니다.
      Docusaurus와 mdx를 사용해 라이브러리를 문서화했습니다.
      
      주요 기능:
      - 드래그 앤 드롭 지원
      - 이메일 유효성 검사
      - 커스텀 스타일링
      - 접근성 지원`,
        },
        images: {
          thumbnail: '/projects/react-multi-email/thumbnail.webp',
          full: [
            '/projects/react-multi-email.webp',
            '/projects/react-multi-email.webp',
            '/projects/react-multi-email.webp',
          ],
        },
        urls: {
          github: 'https://github.com/username/react-multi-email',
          demo: 'https://react-multi-email-demo.com',
        },
        points: [
          {
            challenges: `다양한 React 버전과 환경에서 일관되게 작동하는 컴포넌트를 개발하는 것이 가장 큰 도전이었습니다.
      또한 접근성 표준을 준수하면서도 사용하기 쉬운 인터페이스를 제공하는 것이 중요했습니다.`,
            solutions: `철저한 테스트와 타입 안정성을 보장하기 위해 TypeScript를 도입했습니다.
      또한 ARIA 속성과 키보드 네비게이션을 구현하여 접근성을 높였습니다.`,
            results: `npm에서 주간 다운로드 5,000회 이상을 기록하며 많은 개발자들에게 사용되고 있습니다.
      GitHub에서 300개 이상의 별을 받았으며, 지속적인 기여와 개선이 이루어지고 있습니다.`,
          },
        ],
        period: '2023.06 ~ 2024.08',
        techStack: ['Github', 'React', 'Jest', 'Docusaurus', 'mdx'],
      },
      {
        id: 'mmis-2023',
        title: 'MMIS',
        description: {
          short: '해양 기상 정보 시스템입니다.',
          full: `해양 기상 정보를 수집, 분석, 제공하는 시스템입니다.`,
        },
        images: {
          thumbnail: '/projects/mmis/thumbnail.webp',
        },
        techStack: ['Vue.js', 'Node.js', 'PostgreSQL'],
      },
      {
        id: 'smart-farm-2023',
        title: '스마트양식장',
        description: {
          short: '스마트 양식 기술을 활용한 양식장 관리 시스템입니다.',
          full: `IoT 센서와 AI 기술을 활용하여 양식장의 환경을 모니터링하고 제어하는 시스템입니다.`,
        },
        images: {
          thumbnail: '/projects/smart-farm/thumbnail.webp',
        },
        techStack: ['React', 'Node.js', 'IoT'],
      },
    ],
  },
];

// 미리보기에 표시할 프로젝트
export const featuredProjects: Project[] = [
  projectsData[0].projects[0], // Diki
  projectsData[1].projects[2], // AISAR
  projectsData[2].projects[0], // React-multi-email
];
