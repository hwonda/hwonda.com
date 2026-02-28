import { blog } from './blog';
import { diki } from './diki';
import { koastUi } from './koastUi';
import { reactMultiEmail } from './reactMultiEmail';
import { zizizip } from './zizizip';

// 공통 (기존 호환성 유지)
export const sideProjects = [diki, zizizip, koastUi, blog, reactMultiEmail];

// FE용 사이드 프로젝트
export const feSideProjects = [diki, zizizip, koastUi, blog, reactMultiEmail];

// TPM용 사이드 프로젝트
export const tpmSideProjects = [diki, zizizip, koastUi, blog, reactMultiEmail];

export { blog, diki, koastUi, reactMultiEmail, zizizip };
