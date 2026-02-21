// 동료 평가 데이터 타입
export interface Recommendation {
  id: string;
  name: string;
  role: string;
  company?: string;
  relationship: string;
  content: string;
  avatar?: string;
}

// 동료 평가 목 데이터
export const recommendations: Recommendation[] = [
  {
    id: '1',
    name: '예시1',
    role: 'ML Ops',
    company: '오픈소스 프로젝트 협업',
    relationship: '같은 팀 동료',
    content:
      '다훤님은 항상 적극적으로 의견을 제시하며, 복잡한 문제도 차근차근 해결해 나가는 능력이 뛰어납니다. 특히 UI/UX에 대한 깊은 이해와 코드 품질에 대한 높은 기준을 가지고 있어 함께 일하면서 많이 배웠습니다.',
  },
  {
    id: '2',
    name: '예시2',
    role: '프론트엔드 개발자',
    company: '(주)한국해양기상기술',
    relationship: '전 직장동료',
    content:
      '프론트엔드와 백엔드 간의 협업에서 항상 명확한 커뮤니케이션을 해주셔서 작업이 수월했습니다. API 설계 단계에서도 좋은 의견을 많이 주셨고, 문서화도 꼼꼼하게 해주셔서 인수인계가 편했습니다.',
  },
  {
    id: '3',
    name: '예시3',
    role: 'PM / 기획자',
    company: '(주)한국해양기상기술',
    relationship: '프로젝트 매니저',
    content:
      '기획 의도를 정확히 파악하고 더 나은 방향을 제안해주는 점이 인상적이었습니다. 일정 관리도 철저하시고, 예상치 못한 문제가 생겼을 때도 침착하게 대응하시는 모습이 믿음직스러웠습니다.',
  },
  {
    id: '4',
    name: '예시4',
    role: '풀스택 개발자',
    company: '개인 프로젝트 협업',
    relationship: '사이드 프로젝트 동료',
    content:
      '함께 사이드 프로젝트를 진행하면서 새로운 기술에 대한 열정과 학습 능력에 감탄했습니다. 코드 리뷰도 건설적으로 해주시고, 항상 더 나은 방법을 고민하는 자세가 좋았습니다.',
  },
];
