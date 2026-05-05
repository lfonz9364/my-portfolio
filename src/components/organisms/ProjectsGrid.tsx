"use client";

import { SectionHeading } from "@/components/atoms/SectionHeading";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { SkillFilter } from "@/components/molecules/SkillFilter";
import { Project } from "@/types/contenful";
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
    <section className="py-16">
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.sys.id} project={project} />
        ))}
      </div>
    </section>
  );
};
