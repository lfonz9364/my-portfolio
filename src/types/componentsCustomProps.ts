import { ReactNode } from "react";

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
