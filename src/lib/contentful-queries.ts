import {
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
    slug:entry.fields.slug,
    startDate: entry.fields.startDate,
    endDate: entry.fields.endDate,
    skills: entry.fields.skills?.filter(isDefined).map(mapSkill),
  },
});

const mapHeroSection = (entry: HeroEntry): HeroSection => ({
  sys: {
    id: entry.sys.id,
  },
  fields: {
    title: entry.fields.title,
    subtitle: entry.fields.subtitle,
    ctaText: entry.fields.ctaText,
    ctaLink: entry.fields.ctaLink,
  },
});

const mapContactSection = (entry: ContactSectionEntry): ContactSection => ({
  sys: {
    id: entry.sys.id,
  },
  fields: {
    heading: entry.fields.heading,
    title: entry.fields.title,
    description: entry.fields.description,
    email: entry.fields.email,
    linkedInUrl: entry.fields.linkedInUrl,
    githubUrl: entry.fields.githubUrl,
  },
});

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
    order: ["-fields.featured", "-sys.createdAt"],
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

export const getHeroSection = async (
  preview = false,
): Promise<HeroSection | null> => {
  const entries = await getClient(
    preview,
  ).withoutUnresolvableLinks.getEntries<HeroSkeleton>({
    content_type: "heroSection",
    limit: 1,
  });

  return entries.items[0] ? mapHeroSection(entries.items[0]) : null;
};

export const getContactSection = async (): Promise<ContactSection | null> => {
  const response =
    await contentfulClient.withoutUnresolvableLinks.getEntries<ContactSectionSkeleton>(
      {
        content_type: "contactChannels",
        limit: 1,
      },
    );

  const entry = response.items[0];

  return entry ? mapContactSection(entry) : null;
};
