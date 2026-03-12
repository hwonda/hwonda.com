// 자동 슬라이드 관련 상수
export const autoSlideInterval = 5000;

// 스와이프 관련 상수
export const minSwipeDistance = 50;
export const maxSwipeOffset = 150;

// 애니메이션 관련 상수
export const animationDuration = {
  fast: 100,
  normal: 300,
  slow: 500,
} as const;

// 반응형 브레이크포인트 (Tailwind 기준)
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
