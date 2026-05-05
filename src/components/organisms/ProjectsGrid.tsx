"use client";

import { SectionHeading } from "@/components/atoms/SectionHeading";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { SkillFilter } from "@/components/molecules/SkillFilter";
import { Project } from "@/types/contenful";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { useMemo, useState } from "react";

export const ProjectsGrid = ({ projects }: { projects: Project[] }) => {
  const [selectedSkill, setSelectedSkill] = useState("All");

  const skills = useMemo(() => {
    const names = projects.flatMap(
      (project) =>
        project.fields.skills?.map((skill) => skill.fields.name) ?? [],
    );

    return ["All", ...Array.from(new Set(names)).sort()];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedSkill === "All") return projects;

    return projects.filter((project) =>
      project.fields.skills?.some(
        (skill) => skill.fields.name === selectedSkill,
      ),
    );
  }, [projects, selectedSkill]);

  return (
    <Box
      as="section"
      py={{ base: 12, md: 20 }}
      borderTopWidth="1px"
      borderColor="gray.200"
    >
      <SectionHeading
        eyebrow="Portfolio"
        title="Projects"
        description="Filter my projects by the skills you are looking for."
      />

      <SkillFilter
        skills={skills}
        selectedSkill={selectedSkill}
        onSelectSkill={setSelectedSkill}
      />

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.sys.id} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
