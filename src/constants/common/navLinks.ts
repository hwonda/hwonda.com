export interface NavLink {
  href: string;
  label: string;
  labelFull?: string;
  hoverClass: string;
  isExternal?: boolean;
  isHighlighted?: boolean;
}

// 기본 경로를 role에 따라 생성하는 함수
export const getNavLinks = (basePath: '/fe' | '/pm'): NavLink[] => [
  {
    href: `${basePath}/about`,
    label: '주다훤',
    labelFull: '에 대하여',
    hoverClass: 'hover:bg-accent-1/20',
  },
  {
    href: `https://www.hwonda.com/blog?from=${basePath.slice(1)}`,
    label: '블로그',
    hoverClass: 'hover:bg-accent-3/30',
    isExternal: true,
  },
  {
    href: `${basePath}/projects`,
    label: '프로젝트',
    hoverClass: 'bg-gray3/10 hover:bg-gray3/20',
    isHighlighted: true,
  },
];
