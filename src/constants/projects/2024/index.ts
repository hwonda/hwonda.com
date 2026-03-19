import { aisar } from './aisar';
import { mmis2024 } from './mmis2024';
import { nims } from './nims';

// 공통 (기존 호환성 유지)
export const projects2024 = [mmis2024, nims, aisar];

// FE용 2024 프로젝트
export const feProjects2024 = [mmis2024, aisar];

// TPM용 2024 프로젝트
export const tpmProjects2024 = [mmis2024];

export { aisar, mmis2024, nims };
