export interface Project {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
  tags?: string[];
  projectId?: string;
  subtitle?: string;
}

export interface YearProjects {
  year: string;
  projects: Project[];
}
