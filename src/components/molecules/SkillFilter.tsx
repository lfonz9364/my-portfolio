import { SkillFilterProps } from "@/types/componentsCustomProps";

export const SkillFilter = ({
  skills,
  selectedSkill,
  onSelectSkill,
}: SkillFilterProps) => (
  <div className="mb-8 flex flex-wrap gap-3">
    {skills.map((skill) => {
      const isActive = selectedSkill === skill;

      return (
        <button
          key={skill}
          type="button"
          onClick={() => onSelectSkill(skill)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            isActive
              ? "border-emerald-600 bg-emerald-600 text-white"
              : "border-slate-200 bg-white text-slate-700 hover:border-emerald-500 hover:text-emerald-700"
          }`}
        >
          {skill}
        </button>
      );
    })}
  </div>
);
