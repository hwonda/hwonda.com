export interface YearProjects {
  year: string;
  projects: Project[];
}

export interface Project {
  id: string;
  title: string;
  description: {
    short: string;
    full: string;
  };
  images: {
    thumbnail: string;
    full?: string[];
    video?: string;
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
