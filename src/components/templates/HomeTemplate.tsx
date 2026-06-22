"use client";

import { HeroIntro } from "@/components/molecules/HeroIntro";
import { ContactSection } from "@/components/organisms/ContactSection";
import { ExperienceTimeline } from "@/components/organisms/ExperienceTimeline";
import { ProjectsGrid } from "@/components/organisms/ProjectsGrid";
import { getHeaderContent } from "@/lib/helpers";
import { HomeTemplateProps } from "@/types/componentsCustomProps";
import { Box } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { AboutSection } from "../organisms/AboutSection";

export const HomeTemplate = ({
  cardSectionHeaders,
  projects,
  experiences,
  aboutSection,
  heroSection,
  contact,
  skills
}: HomeTemplateProps) => {
  const [selectedSkills, setSelectedSkills] = useState(["All"]);

  const filteredProjects = useMemo(() => {
    if (selectedSkills.includes("All")) return projects;

    return projects.filter((project) => {
      const projectSkills = project.fields.skills?.map(
        (skill) => skill.fields.name,
      );

      return selectedSkills.some((skill) => projectSkills?.includes(skill));
    });
  }, [projects, selectedSkills]);

  const filteredExperiences = useMemo(() => {
    if (selectedSkills.includes("All")) return experiences;

    return experiences.filter((experience) => {
      const experienceSkills = experience.fields.skills?.map(
        (skill) => skill.fields.name,
      );

      return selectedSkills.some((skill) => experienceSkills?.includes(skill));
    });
  }, [experiences, selectedSkills]);

  const experiencesHeader = getHeaderContent(cardSectionHeaders, "experiences");

  const projectsHeader = getHeaderContent(cardSectionHeaders, "portfolio");

  return (
    <Box textAlign="justify">
      <HeroIntro content={heroSection} />
      <AboutSection
      content={aboutSection}
      skills={skills}
        selectedSkills={selectedSkills}
        setSelectedSkills={setSelectedSkills}
      />
      {projectsHeader && (
        <ProjectsGrid content={projectsHeader} projects={filteredProjects} />
      )}
      {experiencesHeader && (
        <ExperienceTimeline
          content={experiencesHeader}
          experiences={filteredExperiences}
        />
      )}
      <ContactSection content={contact} />
    </Box>
  );
};
