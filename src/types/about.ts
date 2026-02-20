export interface Skill {
  name: string;
  proficiency: number;
  description: string;
}

export interface TechStack {
  category: string;
  skills: Skill[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description?: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  profileImage: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface AboutPageProps {
  name: string;
  title: string;
  profileImage: string;
  email: string;
  github: string;
  linkedin: string;
  techStacks: TechStack[];
  aboutParagraphs: string[];
  experiences: ExperienceItem[];
  education: EducationItem[];
}
