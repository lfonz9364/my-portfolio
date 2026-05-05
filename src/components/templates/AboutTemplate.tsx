import { Badge } from "@/components/atoms/Badge";
import { SectionHeading } from "@/components/atoms/SectionHeading";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Node.js",
  "PostgreSQL",
  "Contentful",
  "TailwindCSS",
];

export const AboutTemplate = () => (
  <section className="py-16">
    <SectionHeading
      eyebrow="About"
      title="Frontend engineer focused on practical, user-friendly products"
      description="I enjoy building clean, maintainable interfaces backed by thoughtful architecture."
    />

    <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="leading-8 text-slate-600">
          I’m a Melbourne-based frontend engineer with experience building
          responsive web apps, mobile apps, CMS-powered websites, and SaaS-style
          products. I like turning complex requirements into simple user
          experiences.
        </p>

        <p className="mt-5 leading-8 text-slate-600">
          My recent focus is on Next.js, TypeScript, Contentful, React Native,
          and full-stack portfolio projects that demonstrate production-style
          architecture.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="font-bold text-slate-950">Core Skills</h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>
    </div>
  </section>
);
