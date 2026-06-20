import { PageLayout } from "@/components/templates/PageLayout";
import { ProjectDetailTemplate } from "@/components/templates/ProjectDetailTemplate";
import { getProjectBySlug } from "@/lib/contentful-queries";
import { DetailPageProps } from "@/types/componentsCustomProps";

const ProjectDetailPage = async ({ params }: DetailPageProps) => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  return (
    <PageLayout>
      {project && <ProjectDetailTemplate project={project} />}
    </PageLayout>
  );
};

export default ProjectDetailPage;
