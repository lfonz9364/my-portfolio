import { Badge } from "@/components/atoms/Badge";
import { Experience } from "@/types/contenful";

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const {
    sys: { id },
    fields: { startDate, endDate, role, company, summary },
  } = experience;
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-emerald-700">
        {startDate} — {endDate ?? "Present"}
      </p>

      <h3 className="mt-2 text-xl font-bold text-slate-950">{role}</h3>

      <p className="mt-1 font-medium text-slate-700">{company}</p>

      <p className="mt-4 text-sm leading-6 text-slate-600">{summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {experience.fields.skills?.map((skill, index) => (
          <Badge key={`${id}-${skill.fields.name}-${index}`}>
            {skill.fields.name}
          </Badge>
        ))}
      </div>
    </article>
  );
};
