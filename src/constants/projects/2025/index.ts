import { aiCodeReviewer } from './aiCodeReviewer';
import { aquaFarm2025 } from './aquaFarm2025';
import { digitalTwin } from './digitalTwin';
import { koastUi } from './koastUi';
import { mmis2025 } from './mmis2025';

// 공통 (기존 호환성 유지)
export const projects2025 = [
  aquaFarm2025,
  mmis2025,
  koastUi,
  aiCodeReviewer,
  digitalTwin,
];

// FE용 2025 프로젝트
export const feProjects2025 = [
  aquaFarm2025,
  mmis2025,
  koastUi,
  aiCodeReviewer,
  digitalTwin,
];

// PM용 2025 프로젝트
export const pmProjects2025 = [
  aquaFarm2025,
  mmis2025,
  koastUi,
  aiCodeReviewer,
  digitalTwin,
];

export { aiCodeReviewer, aquaFarm2025, digitalTwin, koastUi, mmis2025 };
