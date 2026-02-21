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

// TPM 동료 평가 목 데이터 (TODO: 수정 필요)
export const recommendations: Recommendation[] = [
  {
    id: '1',
    name: '예시1',
    role: '프론트엔드 개발자',
    company: '(주)한국해양기상기술',
    relationship: '같은 팀 동료',
    content:
      '다훤님은 기술에 대한 깊은 이해를 바탕으로 개발팀과 원활하게 소통하며, 프로젝트 일정과 리스크를 체계적으로 관리합니다. 기술적 의사결정에서 항상 합리적인 근거를 제시해주셔서 믿음이 갑니다.',
  },
  {
    id: '2',
    name: '예시2',
    role: '백엔드 개발자',
    company: '(주)한국해양기상기술',
    relationship: '전 직장동료',
    content:
      '요구사항을 명확하게 정리하고 우선순위를 조율하는 능력이 뛰어납니다. 개발자 입장에서 이해하기 쉽게 설명해주시고, 일정 조율도 합리적으로 해주셔서 협업이 수월했습니다.',
  },
  {
    id: '3',
    name: '예시3',
    role: '디자이너',
    company: '(주)한국해양기상기술',
    relationship: '프로젝트 동료',
    content:
      '디자인과 개발 사이의 간극을 잘 이해하고 조율해주셔서 프로젝트가 원활하게 진행되었습니다. 피드백도 구체적으로 주시고, 일정 관리도 철저하셔서 함께 일하기 좋았습니다.',
  },
  {
    id: '4',
    name: '예시4',
    role: '기획자',
    company: '개인 프로젝트 협업',
    relationship: '사이드 프로젝트 동료',
    content:
      '기술적 제약사항을 이해하면서도 비즈니스 목표를 놓치지 않는 균형 감각이 뛰어납니다. 프로젝트 진행 상황을 투명하게 공유해주시고, 이슈 발생 시 빠르게 대응해주셨습니다.',
  },
];
