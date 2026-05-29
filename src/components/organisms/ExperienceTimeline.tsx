import { SectionHeading } from "@/components/atoms/SectionHeading";
import { ExperienceCard } from "@/components/molecules/ExperienceCard";
import { Experience } from "@/types/contenful";
import { Box, SimpleGrid } from "@chakra-ui/react";

export const ExperienceTimeline = ({
  experiences,
}: {
  experiences: Experience[];
}) => (
  <Box
    as="section"
    py={{ base: 12, md: 20 }}
    borderTopWidth="1px"
    borderColor="gray.200"
  >
    <SectionHeading
      eyebrow="Experience"
      title="Work Experience"
      description="A snapshot of my frontend, full-stack, and mobile development experience."
    />

    <SimpleGrid gap={6}>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.sys.id} experience={experience} />
      ))}
    </SimpleGrid>
  </Box>
);
