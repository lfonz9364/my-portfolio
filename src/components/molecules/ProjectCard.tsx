import { Project } from "@/types/contenful";
import Link from "next/link";
import { Badge } from "../atoms/Badge";

export const ProjectCard = ({ project }: { project: Project }) => {
  const {
    sys: { id },
    fields: {
      shortDescription,
      featured,
      title,
      skills,
      slug,
      githubUrl,
      liveUrl,
    },
  } = project;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {featured && (
        <span className="mb-4 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
          Featured
        </span>
      )}

      <h3 className="text-xl font-bold text-slate-950">{title}</h3>

      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
        {shortDescription}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {skills?.map((skill, index) => (
          <Badge key={`${id}-${skill.fields.name}-${index}`}>
            {skill.fields.name}
          </Badge>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/projects/${slug}`}
          className="text-sm font-semibold text-emerald-700 hover:text-emerald-900"
        >
          View case study →
        </Link>

        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-slate-700 hover:text-slate-950"
          >
            GitHub
          </Link>
        )}

        {liveUrl && (
          <Link
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-slate-700 hover:text-slate-950"
          >
            Live site
          </Link>
        )}
      </div>
    </article>
  );
};
