import { aquaFarm2025 } from './aquaFarm2025';
import { digitalTwin } from './digitalTwin';
import { mmis2025 } from './mmis2025';

// 공통 (기존 호환성 유지)
export const projects2025 = [mmis2025, aquaFarm2025, digitalTwin];

// FE용 2025 프로젝트
export const feProjects2025 = [mmis2025, aquaFarm2025, digitalTwin];

// TPM용 2025 프로젝트
export const tpmProjects2025 = [mmis2025, aquaFarm2025, digitalTwin];

export { aquaFarm2025, digitalTwin, mmis2025 };
