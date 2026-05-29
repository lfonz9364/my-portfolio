import { Badge } from "@/components/atoms/Badge";
import { Project } from "@/types/contenful";
import Link from "next/link";
import { GoToButton } from "../molecules/GoToButton";

export const ProjectDetailTemplate = ({ project }: { project: Project }) => {
  const {
    fields: { title, shortDescription, skills, liveUrl, githubUrl },
  } = project;
  return (
    <article className="py-16">
      <Link
        href="/projects"
        className="text-sm font-semibold text-emerald-700 hover:text-emerald-900"
      >
        ← Back to projects
      </Link>

      <div className="mt-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-950 md:text-5xl">
          {title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          {shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {skills?.map((skill, index) => (
            <Badge key={`${skill.fields.name}-${index}`}>
              {skill.fields.name}
            </Badge>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {liveUrl && (
            <GoToButton href={liveUrl} externalLink>
              View Live
            </GoToButton>
          )}

          {githubUrl && (
            <GoToButton
              href={githubUrl}
              externalLink
              buttonProps={{ variant: "outline" }}
            >
              View GitHub
            </GoToButton>
          )}
        </div>
      </div>
    </article>
  );
};
