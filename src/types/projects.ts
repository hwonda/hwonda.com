export interface YearProjects {
  year: string;
  projects: Project[];
}

interface Description {
  short: string;
  full: string;
}

interface Images {
  thumbnail: string;
  full?: string[];
  video?: string;
  captions?: string[]; // 각 이미지에 대한 설명 추가
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

interface ProjectPoints {
  challenges?: string;
  solutions?: string;
  results?: string;
}
export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: Description;
  images: Images;
  urls?: Urls;
  points?: ProjectPoints[];
  period?: string;
  role?: string;
  team?: string;
  techStack?: string[];
}
