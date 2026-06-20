import {
  BadgeProps as ChakraBadgeProps,
  ButtonProps as ChakraButtonProps,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { LinkProps as NextLinkProps } from "next/link";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { ContactSection, Experience, Project, Skill } from "./contenful";

export type BadgeProps = ChakraBadgeProps & {
  children: string;
};

export type ButtonProps = ChakraButtonProps & {
  children: ReactNode;
};

export type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export type SkillFilterProps = {
  skills: Skill[];
  selectedSkills: string[];
  onSelectSkills: (skill: string[]) => void;
};

export type HeroIntroProps = {
  title: string;
  subtitle: string;
};

export type HomeTemplateProps = {
  projects: Project[];
  experiences: Experience[];
  contact: ContactSection | null;
  skills: Skill[];
};

export type LinkProps = {
  children: ReactNode;
  href: string;
  chakraLinkProps?: ChakraLinkProps;
  nextLinkProps?: NextLinkProps;
  external?: boolean;
};

export type GoToButtonProps = {
  href: string;
  children: ReactNode;
  buttonProps?: ChakraButtonProps;
  externalLink?: boolean;
};

export type ContactSectionProps = {
  contact: ContactSection;
};

export type SectionProps = {
  children: ReactNode;
  name: string;
  title: string;
  desc: string;
  haveNoTopBorder?: boolean;
};

export type DetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export type AboutProps = {
  skills: Skill[];
  selectedSkills: string[];
  setSelectedSkills: Dispatch<SetStateAction<string[]>>;
};
