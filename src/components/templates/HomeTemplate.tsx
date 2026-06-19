import { HeroIntro } from "@/components/molecules/HeroIntro";
import { ContactSection } from "@/components/organisms/ContactSection";
import { ExperienceTimeline } from "@/components/organisms/ExperienceTimeline";
import { ProjectsGrid } from "@/components/organisms/ProjectsGrid";
import { HomeTemplateProps } from "@/types/componentsCustomProps";

export const HomeTemplate = ({
  projects,
  experiences,
  contact,
}: HomeTemplateProps) => (
  <>
    <HeroIntro />
    <ProjectsGrid projects={projects} />
    <ExperienceTimeline experiences={experiences} />
    {contact && <ContactSection contact={contact} />}
  </>
);
