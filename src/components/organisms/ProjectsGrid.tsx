"use client";

import { ProjectCard } from "@/components/molecules/ProjectCard";
import { Section } from "@/components/molecules/Section";
import { Project } from "@/types/contenful";
import { SimpleGrid } from "@chakra-ui/react";

export const ProjectsGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <Section
      name="portfolio"
      title="Projects"
      desc="Filter my projects by the skills you are looking for."
    >
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        {projects.map((project) => (
          <ProjectCard key={project.sys.id} project={project} />
        ))}
      </SimpleGrid>
    </Section>
  );
};
