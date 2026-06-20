"use client";

import { HeroIntro } from "@/components/molecules/HeroIntro";
import { ContactSection } from "@/components/organisms/ContactSection";
import { ExperienceTimeline } from "@/components/organisms/ExperienceTimeline";
import { ProjectsGrid } from "@/components/organisms/ProjectsGrid";
import { HomeTemplateProps } from "@/types/componentsCustomProps";
import { Box } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { AboutSection } from "../organisms/AboutSection";

export const HomeTemplate = ({
  projects,
  experiences,
  contact,
  skills,
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

  return (
    <Box textAlign="justify">
      <HeroIntro />
      <AboutSection
        skills={skills}
        selectedSkills={selectedSkills}
        setSelectedSkills={setSelectedSkills}
      />
      <ProjectsGrid projects={filteredProjects} />
      <ExperienceTimeline experiences={filteredExperiences} />
      {contact && <ContactSection contact={contact} />}
    </Box>
  );
};
