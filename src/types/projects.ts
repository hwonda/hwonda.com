export interface YearProjects {
  year: string;
  projects: Project[];
}

interface Description {
  short: string;
  full: string;
}

export interface ImageItem {
  url: string;
  caption?: string;
}

interface Images {
  thumbnail: ImageItem;
  full?: ImageItem[];
  video?: string;
}

interface EtcUrls {
  title: string;
  url: string;
}
interface Urls {
  github?: string;
  demo?: string;
  etc?: EtcUrls[];
}

export interface ProjectPoints {
  challenges?: string;
  solutions?: string;
  results?: string;
}

// 역할별 프로젝트 오버라이드 타입
export interface ProjectOverride {
  id: string; // 어떤 프로젝트를 오버라이드할지 식별
  description?: {
    short?: string;
    full?: string;
  };
  points?: ProjectPoints[];
  role?: string;
}
export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: Description;
  images: Images;
  urls?: Urls;
  points?: ProjectPoints[];
  startTime?: string;
  endTime?: string;
  period?: string;
  role?: string;
  team?: string;
  techStack?: string[];
  inProgress?: boolean;
}
