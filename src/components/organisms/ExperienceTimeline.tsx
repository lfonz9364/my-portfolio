import { ExperienceCard } from "@/components/molecules/ExperienceCard";
import { Experience } from "@/types/contenful";
import { SimpleGrid } from "@chakra-ui/react";
import { Section } from "../molecules/Section";

export const ExperienceTimeline = ({
  experiences,
}: {
  experiences: Experience[];
}) => (
  <Section
    name="Experiences"
    title="Work Experience"
    desc="A snapshot of my frontend, full-stack, and mobile development experience."
  >
    <SimpleGrid gap={6}>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.sys.id} experience={experience} />
      ))}
    </SimpleGrid>
  </Section>
);
