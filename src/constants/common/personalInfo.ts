// 개인 정보 (FE/PM 공통)
export const personalInfo = {
  name: '주다훤',
  profileImage: 'https://avatars.githubusercontent.com/u/95617014?v=4',
  email: 'hwondaa@gmail.com',
  github: 'hwonda',
  linkedin: 'hwonda',
};

// 역할별 타이틀
export const roleTitles = {
  fe: '프론트엔드 개발자',
  pm: 'Project Manager',
} as const;

export type RoleType = keyof typeof roleTitles;
