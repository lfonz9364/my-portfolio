import { ExperienceTemplate } from "@/components/templates/ExperienceTemplate";
import { PageLayout } from "@/components/templates/PageLayout";
import { getExperiences } from "@/lib/contentful-queries";

const ExperiencePage = async () => {
  const experiences = await getExperiences();

  return (
    <PageLayout>
      <ExperienceTemplate experiences={experiences} />
    </PageLayout>
  );
};

export default ExperiencePage;
