import type { Project } from '@/types/projects';

export const digitalTwin: Project = {
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
};
