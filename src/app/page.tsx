import { HomeTemplate } from "@/components/templates/HomeTemplate";
import { PageLayout } from "@/components/templates/PageLayout";
import {
  getContactSection,
  getExperiences,
  getProjects,
  getSkills,
} from "@/lib/contentful-queries";

const HomePage = async () => {
  const [projects, experiences, contact, skills] = await Promise.all([
    getProjects(),
    getExperiences(),
    getContactSection(),
    getSkills(),
  ]);

  return (
    <PageLayout>
      <HomeTemplate
        projects={projects}
        experiences={experiences}
        contact={contact}
        skills={skills}
      />
    </PageLayout>
  );
};

export default HomePage;
