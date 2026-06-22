import { StackProps } from "@chakra-ui/react";
import { Document } from "@contentful/rich-text-types";
import { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful";

export type Skill = {
  sys: { id: string };
  fields: {
    name: string;
    iconName: string;
    iconColor: string;
    slug: string;
    category?: string;
  };
};

export type Project = {
  sys: { id: string };
  fields: {
    title: string;
    slug: string;
    shortDescription: string;
    body: Document;
    skills?: Skill[];
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
    featuredImage?: ImageData;
  };
};

export type Experience = {
  sys: { id: string };
  fields: {
    company: string;
    role: string;
    summary: Document;
    shortSummary: string;
    slug: string;
    startDate?: string;
    endDate?: string;
    skills?: Skill[];
  };
};

export type SectionHeader = {
  sys: { id: string };
  fields: {
    name: string;
    title: string;
    description?: Document;
  };
};

export type HeroSection = {
  sys: { id: string };
  fields: {
    name: string;
    title: string;
    description?: Document;
    filledButtonText: string;
    filledButtonLink: string;
    surfaceButtonText: string;
    surfaceButtonLink: string;
    outlineButtonText: string;
    outlineButtonLink: string;
  };
};

export type ContactSection = {
  sys: { id: string };
  fields: {
    name: string;
    title: string;
    description?: Document;
    email: string;
    linkedInUrl: string;
    githubUrl: string;
  };
};

export type AboutSection = {
  sys: { id: string };
  fields: {
    name: string;
    title: string;
    description?: Document;
    shortBiography?: Document;
    skillsTitle: string;
    skillFilterTitle?: string;
  };
};

export type SkillSkeleton = EntrySkeletonType<
  {
    name: EntryFieldTypes.Text;
    iconName: EntryFieldTypes.Text;
    iconColor: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Symbol;
    category: EntryFieldTypes.Text;
  },
  "skill"
>;

export type ProjectSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Symbol;
    shortDescription: EntryFieldTypes.Text;
    body: EntryFieldTypes.RichText;
    skills?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<SkillSkeleton>>;
    githubUrl?: EntryFieldTypes.Symbol;
    liveUrl?: EntryFieldTypes.Symbol;
    featured?: EntryFieldTypes.Boolean;
  },
  "project"
>;

export type ExperienceSkeleton = EntrySkeletonType<
  {
    company: EntryFieldTypes.Text;
    role: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    summary: EntryFieldTypes.RichText;
    shortSummary: EntryFieldTypes.Text;
    startDate: EntryFieldTypes.Date;
    endDate?: EntryFieldTypes.Date;
    skills?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<SkillSkeleton>>;
  },
  "experience"
>;

export type SectionHeaderSkeleton = EntrySkeletonType<
  {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
  },
  "sectionHeader"
>;

export type HeroSkeleton = EntrySkeletonType<
  {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    filledButtonText: EntryFieldTypes.Symbol;
    filledButtonLink: EntryFieldTypes.Symbol;
    surfaceButtonText: EntryFieldTypes.Symbol;
    surfaceButtonLink: EntryFieldTypes.Symbol;
    outlineButtonText: EntryFieldTypes.Symbol;
    outlineButtonLink: EntryFieldTypes.Symbol;
  },
  "heroSection"
>;

export type ContactSectionSkeleton = EntrySkeletonType<
  {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    email: EntryFieldTypes.Symbol;
    linkedInUrl: EntryFieldTypes.Symbol;
    githubUrl: EntryFieldTypes.Symbol;
  },
  "contactSection"
>;

export type AboutSectionSkeleton = EntrySkeletonType<
  {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    shortBiography?: EntryFieldTypes.RichText;
    skillsTitle: EntryFieldTypes.Symbol;
    skillFilterTitle?: EntryFieldTypes.Symbol;
  },
  "aboutSection"
>;

export type SkillEntry = Entry<SkillSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">;
export type ProjectEntry = Entry<ProjectSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">;
export type ExperienceEntry = Entry<
  ExperienceSkeleton,
  "WITHOUT_UNRESOLVABLE_LINKS"
>;
export type SectionHeaderEntry = Entry<
  SectionHeaderSkeleton,
  "WITHOUT_UNRESOLVABLE_LINKS"
>;
export type HeroEntry = Entry<HeroSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">;
export type ContactSectionEntry = Entry<
  ContactSectionSkeleton,
  "WITHOUT_UNRESOLVABLE_LINKS"
>;
export type AboutSectionEntry = Entry<
  AboutSectionSkeleton,
  "WITHOUT_UNRESOLVABLE_LINKS"
>;

export interface CustomRenderers {
  renderEmbeddedEntry?: (node: any) => React.ReactNode;
}

export interface ContentfulRichTextProps {
  content?: Document;
  customRenderers?: CustomRenderers;
  stackProps?: StackProps;
}
