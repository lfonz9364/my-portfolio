import { contentfulClient, contentfulPreviewClient } from "./contentful";
import {
  ExperienceEntry,
  ExperienceSkeleton,
  HeroEntry,
  HeroSkeleton,
  ProjectEntry,
  ProjectSkeleton,
} from "./definitions";

const getClient = (preview = false) =>
  preview ? contentfulPreviewClient : contentfulClient;

export const getProjects = async (preview = false): Promise<ProjectEntry[]> => {
  const entries = await getClient(preview).getEntries<ProjectSkeleton>({
    content_type: "project",
    order: ["-fields.featured", "-sys.createdAt"],
  });

  return entries.items;
};

export const getProjectBySlug = async (
  slug: string,
  preview = false,
): Promise<ProjectEntry | null> => {
  const entries = await getClient(preview).getEntries<ProjectSkeleton>({
    content_type: "project",
    "fields.slug": slug,
    limit: 1,
  });

  return entries.items[0] ?? null;
};

export const getExperiences = async (
  preview = false,
): Promise<ExperienceEntry[]> => {
  const entries = await getClient(preview).getEntries<ExperienceSkeleton>({
    content_type: "experience",
    order: ["-fields.startDate"],
  });

  return entries.items;
};

export const getHeroSection = async (
  preview = false,
): Promise<HeroEntry | null> => {
  const entries = await getClient(preview).getEntries<HeroSkeleton>({
    content_type: "heroSection",
    limit: 1,
  });

  return entries.items[0] ?? null;
};
