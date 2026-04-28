import type { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful";

// Contentful
export type SkillSkeleton = EntrySkeletonType<
  {
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Symbol;
  },
  "skill"
>;

export type ProjectSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Symbol;
    shortDescription: EntryFieldTypes.Text;
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

    summary?: EntryFieldTypes.Text;

    startDate: EntryFieldTypes.Date;

    endDate?: EntryFieldTypes.Date;

    skills?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<SkillSkeleton>>;
  },
  "experience"
>;

export type HeroSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Text;

    subtitle?: EntryFieldTypes.Text;

    ctaText?: EntryFieldTypes.Text;

    ctaLink?: EntryFieldTypes.Symbol;

    // optional: image later if needed

    // image?: EntryFieldTypes.AssetLink;
  },
  "heroSection"
>;

export type SkillEntry = Entry<SkillSkeleton>;
export type ProjectEntry = Entry<ProjectSkeleton>;
export type ExperienceEntry = Entry<ExperienceSkeleton>;
export type HeroEntry = Entry<HeroSkeleton>;
