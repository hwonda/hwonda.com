import { blog } from './blog';
import { diki } from './diki';
import { reactMultiEmail } from './reactMultiEmail';
import { zizizip } from './zizizip';

// 공통 (기존 호환성 유지)
export const sideProjects = [diki, zizizip, blog, reactMultiEmail];

// FE용 사이드 프로젝트
export const feSideProjects = [diki, zizizip, blog, reactMultiEmail];

// PM용 사이드 프로젝트
export const pmSideProjects = [diki, zizizip, blog, reactMultiEmail];

export { blog, diki, reactMultiEmail, zizizip };
