import { HomeTemplate } from "@/components/templates/HomeTemplate";
import { PageLayout } from "@/components/templates/PageLayout";
import { getContactSection, getExperiences, getProjects } from "@/lib/contentful-queries";

const HomePage = async () => {
  const [projects, experiences, ContactSection] = await Promise.all([
    getProjects(),
    getExperiences(),
    getContactSection(),
  ]);

  return (
    <PageLayout>
      <HomeTemplate projects={projects} experiences={experiences} contact={ContactSection} />
    </PageLayout>
  );
};

export default HomePage;
