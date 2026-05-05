import { HomeTemplate } from "@/components/templates/HomeTemplate";
import { PageLayout } from "@/components/templates/PageLayout";
import { getExperiences, getProjects } from "@/lib/contentful-queries";

const HomePage = async () => {
  const [projects, experiences] = await Promise.all([
    getProjects(),
    getExperiences(),
  ]);

  return (
    <PageLayout>
      <HomeTemplate projects={projects} experiences={experiences} />
    </PageLayout>
  );
};

export default HomePage;
