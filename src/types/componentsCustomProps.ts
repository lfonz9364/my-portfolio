import {
  BadgeProps as ChakraBadgeProps,
  ButtonProps as ChakraButtonProps,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { LinkProps as NextLinkProps } from "next/link";
import { ReactNode } from "react";
import { Experience, Project } from "./contenful";

export type BadgeProps = ChakraBadgeProps & {
  children: string;
};

export type ButtonProps = ChakraButtonProps & {
  children: ReactNode;
  href?: string;
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

export type LinkProps = {
  children: ReactNode;
  href: string;
  chakraLinkProps?: ChakraLinkProps;
  nextLinkProps?: NextLinkProps;
};
