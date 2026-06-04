"use client";

import { ProjectCard } from "@/components/molecules/ProjectCard";
import { SkillFilter } from "@/components/molecules/SkillFilter";
import { Project } from "@/types/contenful";
import { SimpleGrid } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { Section } from "../molecules/Section";

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
    <Section
      name="Portfolio"
      title="Projects"
      desc="Filter my projects by the skills you are looking for."
    >
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
    </Section>
  );
};
