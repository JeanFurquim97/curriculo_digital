
export interface Contact {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  period: string;
  location: string;
  description: string;
  link: string;
  techStack: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string[];
}

export interface SkillCategory {
  name: string;
  skills: (string | { name: string; color: string })[];
}

export interface Language {
  name: string;
  level: string;
  proficiency: number;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: Contact;
  summary: string[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  courses: Education[];
  skills: SkillCategory[];
  languages: Language[];
}
