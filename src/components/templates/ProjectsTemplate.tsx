import { Project } from "@/types/contenful";
import { ProjectsGrid } from "../organisms/ProjectsGrid";

export const ProjectsTemplate = ({ projects }: { projects: Project[] }) => (
  <ProjectsGrid projects={projects} />
);
