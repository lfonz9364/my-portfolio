import { ExperienceDetailTemplate } from "@/components/templates/ExperienceDetailTemplate";
import { PageLayout } from "@/components/templates/PageLayout";
import { getExperienceBySlug } from "@/lib/contentful-queries";
import { DetailPageProps } from "@/types/componentsCustomProps";

const ExperiencePage = async ({ params }: DetailPageProps) => {
  const { slug } = await params;
  const experience = await getExperienceBySlug(slug);

  return (
    <PageLayout>
      {experience && <ExperienceDetailTemplate experience={experience} />}
    </PageLayout>
  );
};

export default ExperiencePage;
