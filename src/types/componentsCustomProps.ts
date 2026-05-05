import {
  BadgeProps as ChakraBadgeProps,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { Experience, Project } from "./contenful";

export type BadgeProps = ChakraBadgeProps & {
  children: string;
};

export type ButtonProps = ChakraButtonProps & {
  href?: string;
  children: ReactNode;
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
