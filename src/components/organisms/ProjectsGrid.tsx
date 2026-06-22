"use client";

import { ProjectCard } from "@/components/molecules/ProjectCard";
import { ProjectsGridProps } from "@/types/componentsCustomProps";
import { CardsGroup } from "../molecules/CardsGroup";
import { getHeaderContent } from "@/lib/helpers";

export const ProjectsGrid = ({ content, projects }: ProjectsGridProps) => (
    <CardsGroup headerContent={content}>
      {projects.map((project) => (
        <ProjectCard key={project.sys.id} project={project} />
      ))}
    </CardsGroup>
  );

