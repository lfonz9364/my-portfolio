import { ExperienceTimeline } from "@/components/organisms/ExperienceTimeline";
import { Experience } from "@/types/contenful";

export const ExperienceTemplate = ({
  experiences,
}: {
  experiences: Experience[];
}) => <ExperienceTimeline experiences={experiences} />;
