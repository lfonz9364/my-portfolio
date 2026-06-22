import { HomeTemplate } from "@/components/templates/HomeTemplate";
import { PageLayout } from "@/components/templates/PageLayout";
import {
  getAboutSection,
  getCardsSectionHeaders,
  getContactSection,
  getExperiences,
  getHeroSection,
  getProjects,
  getSkills,
} from "@/lib/contentful-queries";

const HomePage = async () => {
  const [
    projects,
    experiences,
    cardsSectionHeadersContents,
    aboutSection,
    contactSection,
    heroSection,
    skills,
  ] = await Promise.all([
    getProjects(),
    getExperiences(),
    getCardsSectionHeaders(),
    getAboutSection(),
    getContactSection(),
    getHeroSection(),
    getSkills(),
  ]);

  return (
    <PageLayout>
      <HomeTemplate
        projects={projects}
        cardSectionHeaders={cardsSectionHeadersContents}
        experiences={experiences}
        aboutSection={aboutSection}
        heroSection={heroSection}
        contact={contactSection}
        skills={skills}
      />
    </PageLayout>
  );
};

export default HomePage;
