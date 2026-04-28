import { createClient } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID!;
const environment = process.env.CONTENTFUL_ENVIRONMENT || "master";

export const contentfulClient = createClient({
  space,
  environment,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export const contentfulPreviewClient = createClient({
  space,
  environment,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  host: "preview.contentful.com",
});
