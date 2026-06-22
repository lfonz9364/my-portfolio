import { ExperienceCard } from "@/components/molecules/ExperienceCard";
import { ExperienceTimelineProps } from "@/types/componentsCustomProps";
import { CardsGroup } from "../molecules/CardsGroup";

export const ExperienceTimeline = ({
  content,
  experiences,
}: ExperienceTimelineProps) => (
  <CardsGroup headerContent={content}>
    {experiences.map((experience) => (
      <ExperienceCard key={experience.sys.id} experience={experience} />
    ))}
  </CardsGroup>
);
