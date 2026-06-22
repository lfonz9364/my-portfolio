import {
  BadgeProps as ChakraBadgeProps,
  ButtonProps as ChakraButtonProps,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { Document } from "@contentful/rich-text-types";
import { LinkProps as NextLinkProps } from "next/link";
import { Dispatch, ReactNode, SetStateAction } from "react";
import {
  AboutSection,
  ContactSection,
  Experience,
  HeroSection,
  Project,
  SectionHeader,
  Skill,
} from "./contenful";

export type BadgeProps = ChakraBadgeProps & {
  children: string;
};

export type ButtonProps = ChakraButtonProps & {
  children: ReactNode;
};

export type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: Document;
};

export type SkillFilterProps = {
  skills: Skill[];
  selectedSkills: string[];
  onSelectSkills: (skill: string[]) => void;
};

export type HeroIntroProps = {
  content: HeroSection;
};

export type HomeTemplateProps = {
  cardSectionHeaders: SectionHeader[];
  projects: Project[];
  experiences: Experience[];
  contact: ContactSection;
  skills: Skill[];
  heroSection: HeroSection;
  aboutSection: AboutSection;
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
  content: ContactSection;
};

export type SectionProps = {
  children: ReactNode;
  name: string;
  title: string;
  desc?: Document;
  haveNoTopBorder?: boolean;
};

export type DetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export type AboutProps = {
  content: AboutSection;
  skills: Skill[];
  selectedSkills: string[];
  setSelectedSkills: Dispatch<SetStateAction<string[]>>;
};

export type CardsGroupProps = {
  headerContent: SectionHeader;
  children: ReactNode[];
};

export type ExperienceTimelineProps = {
  content: SectionHeader;
  experiences: Experience[];
};

export type ProjectsGridProps = {
  content: SectionHeader;
  projects: Project[];
};
