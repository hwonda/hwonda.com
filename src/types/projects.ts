export interface YearProjects {
  year: string;
  projects: Project[];
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: {
    short: string;
    full: string;
  };
  images: {
    thumbnail: string;
    full?: string[];
    video?: string;
    captions?: string[]; // 각 이미지에 대한 설명 추가
  };
  urls?: {
    github?: string;
    demo?: string;
    etc?: string;
  };
  points?: ProjectPoints[];
  period?: string;
  role?: string;
  team?: string;
  techStack?: string[];
}

interface ProjectPoints {
  challenges?: string;
  solutions?: string;
  results?: string;
}
