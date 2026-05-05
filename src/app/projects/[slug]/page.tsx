import { PageLayout } from "@/components/templates/PageLayout";
import { ProjectDetailTemplate } from "@/components/templates/ProjectDetailTemplate";
import { getProjectBySlug } from "@/lib/contentful-queries";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  return (
    <PageLayout>
      {project && <ProjectDetailTemplate project={project} />}
    </PageLayout>
  );
};

export default ProjectDetailPage;
