import { Document } from "@contentful/rich-text-types";

export type Skill = {
  sys: { id: string };
  fields: {
    name: string;
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
  };
};

export type Experience = {
  sys: { id: string };
  fields: {
    company: string;
    role: string;
    summary?: string;
    startDate?: string;
    endDate?: string;
    skills?: Skill[];
  };
};
