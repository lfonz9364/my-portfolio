import { PageLayout } from "@/components/templates/PageLayout";
import { ProjectsTemplate } from "@/components/templates/ProjectsTemplate";
import { getProjects } from "@/lib/contentful-queries";

const ProjectsPage = async () => {
  const projects = await getProjects();

  return (
    <PageLayout>
      <ProjectsTemplate projects={projects} />
    </PageLayout>
  );
};

export default ProjectsPage;
