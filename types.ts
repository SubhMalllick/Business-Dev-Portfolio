/**
 * Types for Subham Mallick's Business Development & Sales Leader Portfolio.
 */

export interface ExperienceRole {
  id: string;
  title: string;
  period: string;
  duration: string;
  location: string;
  company: string;
  summary: string;
  responsibilities: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  departmentCode: string; // e.g. "BD-LEAD", "CS-OPS"
}

export interface ExpertiseCard {
  title: string;
  category: string;
  tools: string;
  imageKeyword: string; // to render matching beautiful visual icons
  description: string; // descriptive outcome details
}

export interface Client {
  name: string;
  category: "Healthcare & Life Sciences" | "Consulting & Technology" | "Finance & Corporate Services" | "Manufacturing & Industries" | "Education & Facility Operations";
}

export interface SkillWheel {
  name: string;
  percentage: number;
  subtext: string;
  description: string;
  color: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  skills: {
    name: string;
    level: number;
    details: string;
  }[];
}
