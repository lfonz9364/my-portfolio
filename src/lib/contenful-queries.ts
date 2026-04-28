import { contentfulClient, contentfulPreviewClient } from "./contentful";

const getClient = (preview = false) =>
  preview ? contentfulPreviewClient : contentfulClient;

export const getProjects = async (preview = false) => {
  const entries = await getClient(preview).getEntries({
    content_type: "project",
    order: ["-fields.featured", "-sys.createdAt"],
  });

  return entries.items;
};

export const getProjectBySlug = async (slug: string, preview = false) => {
  const entries = await getClient(preview).getEntries({
    content_type: "project",
    "fields.slug": slug,
    limit: 1,
  });

  return entries.items[0] || null;
};

export const getExperiences = async (preview = false) => {
  const entries = await getClient(preview).getEntries({
    content_type: "experience",
    order: ["-fields.startDate"],
  });

  return entries.items;
};

export const getHeroSection = async (preview = false) => {
  const entries = await getClient(preview).getEntries({
    content_type: "heroSection",
    limit: 1,
  });

  return entries.items[0] || null;
};
