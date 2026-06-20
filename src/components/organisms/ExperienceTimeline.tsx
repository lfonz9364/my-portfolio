import { ExperienceCard } from "@/components/molecules/ExperienceCard";
import { Section } from "@/components/molecules/Section";
import { Experience } from "@/types/contenful";
import { SimpleGrid } from "@chakra-ui/react";

export const ExperienceTimeline = ({
  experiences,
}: {
  experiences: Experience[];
}) => (
  <Section
    name="experiences"
    title="Work Experience"
    desc="A snapshot of my frontend, full-stack, and mobile development experience."
  >
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.sys.id} experience={experience} />
      ))}
    </SimpleGrid>
  </Section>
);
