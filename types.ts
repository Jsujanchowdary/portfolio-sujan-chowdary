export interface Project {
  title: string;
  period: string;
  tech: string[];
  description: string[];
  link?: string;
  type: 'Project' | 'Publication';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  details?: string;
}

export interface Award {
  title: string;
  year: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}