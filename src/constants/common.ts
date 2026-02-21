// 자동 슬라이드 관련 상수
export const AUTO_SLIDE_INTERVAL = 5000;

// 스와이프 관련 상수
export const MIN_SWIPE_DISTANCE = 50;
export const MAX_SWIPE_OFFSET = 150;

// 애니메이션 관련 상수
export const ANIMATION_DURATION = {
  fast: 100,
  normal: 300,
  slow: 500,
} as const;

// 반응형 브레이크포인트 (Tailwind 기준)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
