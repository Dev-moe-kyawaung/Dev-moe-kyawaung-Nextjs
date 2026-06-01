export interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  duration: string;
  downloads: string;
  rating: string;
  technologies: string[];
  challenges: string[];
  solutions: string[];
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  publishedAt: string;
}

export interface Skill {
  name: string;
  category: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  yearsOfExperience: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
  coverImage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}
