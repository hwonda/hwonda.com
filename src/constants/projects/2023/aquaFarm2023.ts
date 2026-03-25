import type { Project } from '@/types/projects';
import { getProjectPeriod } from '@/utils/dateUtils';

export const aquaFarm2023: Project = {
  id: 'aqua-farm-2023',
  title: '스마트 양식장 2023',
  subtitle: '스마트 양식 서비스 개발',
  description: {
    short:
      '양식장 관리자와 현장 직원들이 수조, 센서, 사료공급, 일정 등을 하나의 웹앱에서 관리할 수 있는 Vue 기반 솔루션 개발',
    full: `
    입사 후 처음 맡은 본 프로젝트에서 **레거시 환경(Vue2)을 유지하면서도 사용자 경험을 개선하는 것을 목표로 프론트엔드 개발을 주도적으로 수행**했습니다. 
    개인 학습과 팀 스터디를 병행하며 UI 구조와 컴포넌트 설계를 개선했습니다.

    프로젝트 전반의 **UI 톤앤매너를 통일하고 CSS Grid 기반의 가변형 대시보드 구조를 설계**하여 사용자별로 필요한 위젯을 유연하게 배치할 수 있도록 구현했습니다.
    또한 오픈소스 라이브러리 **vue-datepicker를 프로젝트에 맞게 래핑하여 공통 UI 컴포넌트로 재구성**하고, 사료 공급 일정 및 관리 기능을 위한 캘린더 기능을 개발했습니다.

    그 결과 수조 상태, IoT 센서 데이터, 어종 정보, CCTV 등 **다양한 정보를 하나의 웹 애플리케이션에서 통합적으로 모니터링하고 제어할 수 있는 스마트 양식 관리 솔루션을 구축**했습니다.
    `,
  },
  points: [
    {
      situation: `
        신입 단계에서 CSS 이해도가 충분하지 않은 상태로 가변형 대시보드 레이아웃 설계 과제 수행
      `,
      task: `
        사용자 설정에 맞춰 위젯 재배치가 가능한 대시보드 구조 구현 필요
      `,
      action: `
        개인 학습과 팀 스터디 병행 후 \`grid-template-columns\`, \`auto-fit\`, \`minmax()\` 기반 재배치 그리드 구조 구현
      `,
      result: `
        모바일/PC에서 안정 동작하고 위젯 추가·변경 시 컴포넌트 단위 확장이 쉬운 대시보드 구조 확보
      `,
    },
    {
      situation: `
        IoT 센서 알림을 단순 상태 검사로 처리해 동일 경고가 반복 발생하는 문제 존재
      `,
      task: `
        중복 알림을 제거하면서 이상 상태 발생 시점만 정확히 감지하는 알림 로직 필요
      `,
      action: `
        Vuex 기반 중앙 상태 관리로 센서 상태를 통합하고 \`정상→비정상\` 전이 시점에만 이벤트 발생하도록 로직 구현
      `,
      result: `
        사료 공급 장치/수조 이상 상태에서 중복 없는 SMS·이메일 알림 시스템 구축, 관리자 피로도 감소 및 현장 대응 속도 개선
      `,
    },
    {
      situation: `
        \`vue-datepicker\` 기본 디자인과 날짜 포맷이 프로젝트 UI 톤앤매너와 불일치
      `,
      task: `
        기존 라이브러리를 유지하면서 사내 UI 기준에 맞는 공통 캘린더 컴포넌트로 재구성 필요
      `,
      action: `
        Wrapper 컴포넌트로 래핑해 Primary/Secondary 컬러, 날짜 포맷 변환 로직, 공통 옵션 기본값을 적용한 공통 캘린더로 재구성
      `,
      result: `
        팀 내 재사용 가능한 일관된 캘린더 컴포넌트 구조 확보로 개발 생산성과 UI 유지보수성 향상
      `,
    },
    {
      situation: `
        수조 센서 데이터 단위/포맷 불일치로 그래프 및 시각화 데이터 비정상 표출 문제 발생
      `,
      task: `
        FE-BE 간 공통 스펙을 명확히 정의해 데이터 연동 오류를 사전에 차단할 체계 필요
      `,
      action: `
        백엔드와 협업해 공통 데이터 스펙 문서화, 예상 API 응답 구조 정의, Mock 데이터 생성/사전 검증으로 데이터 구조 정리
      `,
      result: `
        데이터 포맷 불일치로 인한 UI 오류 사전 차단, FE-BE 데이터 연동 커뮤니케이션 비용 절감
      `,
    },
  ],
  images: {
    thumbnail: { url: '/projects/aqua-farm-2023/thumbnail.webp' },
  },
  startTime: '2023.01',
  endTime: '2023.04',
  period: getProjectPeriod('2023.01', '2023.04'),
  role: 'Frontend',
  team: 'Koast',
  techStack: ['Vue.js', 'Vuex', 'Axios', 'CSS', 'Git', 'Swagger'],
};
