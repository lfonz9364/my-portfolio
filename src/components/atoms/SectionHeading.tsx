import { SectionHeadingProps } from "@/types/componentsCustomProps";

export const SectionHeading = ({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) => (
  <div className="mb-10">
    {eyebrow && (
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-600">
        {eyebrow}
      </p>
    )}

    <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">{title}</h2>

    {description && (
      <p className="mt-3 max-w-2xl text-slate-600">{description}</p>
    )}
  </div>
);
