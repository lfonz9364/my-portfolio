import { Project } from "@/types/contenful";
import Link from "next/link";
import { Badge } from "../atoms/Badge";

export const ProjectCard = ({ project }: { project: Project }) => (
  <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    {project.fields.featured && (
      <span className="mb-4 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
        Featured
      </span>
    )}

    <h3 className="text-xl font-bold text-slate-950">{project.fields.title}</h3>

    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
      {project.fields.shortDescription}
    </p>

    <div className="mt-5 flex flex-wrap gap-2">
      {project.fields.skills?.map((skill, index) => (
        <Badge key={`${project.sys.id}-${skill.fields.name}-${index}`}>
          {skill.fields.name}
        </Badge>
      ))}
    </div>

    <div className="mt-6 flex flex-wrap gap-3">
      <Link
        href={`/projects/${project.fields.slug}`}
        className="text-sm font-semibold text-emerald-700 hover:text-emerald-900"
      >
        View case study →
      </Link>

      {project.fields.githubUrl && (
        <Link
          href={project.fields.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-slate-700 hover:text-slate-950"
        >
          GitHub
        </Link>
      )}

      {project.fields.liveUrl && (
        <Link
          href={project.fields.liveUrl}
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
