import { ReactNode } from "react";
import { Experience, Project } from "./contenful";

export type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export type SkillFilterProps = {
  skills: string[];
  selectedSkill: string;
  onSelectSkill: (skill: string) => void;
};

export type HeroIntroProps = {
  title: string;
  subtitle: string;
};

export type HomeTemplateProps = {
  projects: Project[];
  experiences: Experience[];
};
