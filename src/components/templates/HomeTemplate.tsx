import { HeroIntro } from "@/components/molecules/HeroIntro";
import { ContactSection } from "@/components/organisms/ContactSection";
import { ExperienceTimeline } from "@/components/organisms/ExperienceTimeline";
import { ProjectsGrid } from "@/components/organisms/ProjectsGrid";
import { HomeTemplateProps } from "@/types/componentsCustomProps";

export const HomeTemplate = ({ projects, experiences }: HomeTemplateProps) => (
  <>
    <HeroIntro
      title="Hi, I’m Fonzie. I build modern web and mobile applications."
      subtitle="Frontend engineer with experience across React, Next.js, TypeScript, React Native, Node.js, and CMS-driven products."
    />

    <ProjectsGrid projects={projects.slice(0, 3)} />
    <ExperienceTimeline experiences={experiences.slice(0, 3)} />
    <ContactSection />
  </>
);
