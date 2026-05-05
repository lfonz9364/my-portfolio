import { SectionHeading } from "@/components/atoms/SectionHeading";
import { ExperienceCard } from "@/components/molecules/ExperienceCard";
import { Experience } from "@/types/contenful";

export const ExperienceTimeline = ({
  experiences,
}: {
  experiences: Experience[];
}) => (
  <section className="py-16">
    <SectionHeading
      eyebrow="Experience"
      title="Work Experience"
      description="A snapshot of my frontend, full-stack, and mobile development experience."
    />

    <div className="grid gap-6">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.sys.id} experience={experience} />
      ))}
    </div>
  </section>
);
