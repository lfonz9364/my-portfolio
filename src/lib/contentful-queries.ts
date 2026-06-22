import {
  AboutSection,
  AboutSectionEntry,
  AboutSectionSkeleton,
  ContactSection,
  ContactSectionEntry,
  ContactSectionSkeleton,
  Experience,
  ExperienceEntry,
  ExperienceSkeleton,
  HeroEntry,
  HeroSection,
  HeroSkeleton,
  Project,
  ProjectEntry,
  ProjectSkeleton,
  SectionHeader,
  SectionHeaderEntry,
  SectionHeaderSkeleton,
  Skill,
  SkillEntry,
  SkillSkeleton,
} from "@/types/contenful";
import { contentfulClient, contentfulPreviewClient } from "./contentful";

const getClient = (preview = false) =>
  preview ? contentfulPreviewClient : contentfulClient;

const isDefined = <T>(value: T | undefined | null): value is T => {
  return value !== undefined && value !== null;
};

// ------------------------------- Mappings ------------------------------

const mapSkill = (entry: SkillEntry): Skill => ({
  sys: {
    id: entry.sys.id,
  },
  fields: {
    name: entry.fields.name,
    iconName: entry.fields.iconName,
    iconColor: entry.fields.iconColor,
    slug: entry.fields.slug,
    category: entry.fields.category,
  },
});

const mapProject = (entry: ProjectEntry): Project => ({
  sys: {
    id: entry.sys.id,
  },
  fields: {
    title: entry.fields.title,
    slug: entry.fields.slug,
    shortDescription: entry.fields.shortDescription,
    body: entry.fields.body,
    skills: entry.fields.skills?.filter(isDefined).map(mapSkill),
    githubUrl: entry.fields.githubUrl,
    liveUrl: entry.fields.liveUrl,
    featured: entry.fields.featured,
  },
});

const mapExperience = (entry: ExperienceEntry): Experience => ({
  sys: {
    id: entry.sys.id,
  },
  fields: {
    company: entry.fields.company,
    role: entry.fields.role,
    summary: entry.fields.summary,
    shortSummary: entry.fields.shortSummary,
    slug: entry.fields.slug,
    startDate: entry.fields.startDate,
    endDate: entry.fields.endDate,
    skills: entry.fields.skills?.filter(isDefined).map(mapSkill),
  },
});

const mapCardsSectionHeaders = (entry: SectionHeaderEntry): SectionHeader => ({
  sys: {
    id: entry.sys.id,
  },
  fields: {
    name: entry.fields.name,
    title: entry.fields.title,
    description: entry.fields.description,
  },
});

const mapHeroSection = (entry: HeroEntry): HeroSection => ({
  sys: {
    id: entry.sys.id,
  },
  fields: {
    name: entry.fields.name,
    title: entry.fields.title,
    description: entry.fields.description,
    filledButtonText: entry.fields.filledButtonText,
    filledButtonLink: entry.fields.filledButtonLink,
    surfaceButtonText: entry.fields.surfaceButtonText,
    surfaceButtonLink: entry.fields.surfaceButtonLink,
    outlineButtonText: entry.fields.outlineButtonText,
    outlineButtonLink: entry.fields.outlineButtonLink,
  },
});

const mapContactSection = (entry: ContactSectionEntry): ContactSection => ({
  sys: {
    id: entry.sys.id,
  },
  fields: {
    name: entry.fields.name,
    title: entry.fields.title,
    description: entry.fields.description,
    email: entry.fields.email,
    linkedInUrl: entry.fields.linkedInUrl,
    githubUrl: entry.fields.githubUrl,
  },
});

const mapAboutSection = (entry: AboutSectionEntry): AboutSection => ({
  sys: {
    id: entry.sys.id,
  },
  fields: {
    name: entry.fields.name,
    title: entry.fields.title,
    description: entry.fields.description,
    shortBiography: entry.fields.shortBiography,
    skillsTitle: entry.fields.skillsTitle,
    skillFilterTitle: entry.fields.skillFilterTitle,
  },
});

// ------------------------------- Queries ------------------------------

export const getSkills = async (preview = false): Promise<Skill[]> => {
  const entries = await getClient(
    preview,
  ).withoutUnresolvableLinks.getEntries<SkillSkeleton>({
    content_type: "skill",
    order: ["-fields.slug", "-sys.createdAt"],
  });

  return entries.items.map(mapSkill);
};

export const getProjects = async (preview = false): Promise<Project[]> => {
  const entries = await getClient(
    preview,
  ).withoutUnresolvableLinks.getEntries<ProjectSkeleton>({
    content_type: "project",
    order: ["-sys.createdAt"],
  });

  return entries.items.map(mapProject);
};

export const getProjectBySlug = async (
  slug: string,
  preview = false,
): Promise<Project | null> => {
  const entries = await getClient(
    preview,
  ).withoutUnresolvableLinks.getEntries<ProjectSkeleton>({
    content_type: "project",
    "fields.slug": slug,
    limit: 1,
  });

  return entries.items[0] ? mapProject(entries.items[0]) : null;
};

export const getExperiences = async (
  preview = false,
): Promise<Experience[]> => {
  const entries = await getClient(
    preview,
  ).withoutUnresolvableLinks.getEntries<ExperienceSkeleton>({
    content_type: "experience",
    order: ["-fields.startDate"],
  });

  return entries.items.map(mapExperience);
};

export const getExperienceBySlug = async (
  slug: string,
  preview = false,
): Promise<Experience | null> => {
  const entries = await getClient(
    preview,
  ).withoutUnresolvableLinks.getEntries<ExperienceSkeleton>({
    content_type: "experience",
    "fields.slug": slug,
    limit: 1,
  });

  return entries.items[0] ? mapExperience(entries.items[0]) : null;
};

export const getHeroSection = async (): Promise<HeroSection> => {
  const response =
    await contentfulClient.withoutUnresolvableLinks.getEntries<HeroSkeleton>({
      content_type: "heroSection",
      limit: 1,
    });

  const entry = response.items[0];

  return mapHeroSection(entry);
};

export const getAboutSection = async (): Promise<AboutSection> => {
  const response =
    await contentfulClient.withoutUnresolvableLinks.getEntries<AboutSectionSkeleton>(
      {
        content_type: "aboutSection",
        limit: 1,
      },
    );

  const entry = response.items[0];

  return mapAboutSection(entry);
};

export const getContactSection = async (): Promise<ContactSection> => {
  const response =
    await contentfulClient.withoutUnresolvableLinks.getEntries<ContactSectionSkeleton>(
      {
        content_type: "contactSection",
        limit: 1,
      },
    );

  const entry = response.items[0];

  return mapContactSection(entry);
};

export const getCardsSectionHeaders = async (
  preview = false,
): Promise<SectionHeader[]> => {
  const entries = await getClient(
    preview,
  ).withoutUnresolvableLinks.getEntries<SectionHeaderSkeleton>({
    content_type: "cardsHeader",
    order: ["-fields.name"],
  });

  return entries.items.map(mapCardsSectionHeaders);
};
