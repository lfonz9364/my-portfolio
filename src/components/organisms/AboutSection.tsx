import { AboutProps } from "@/types/componentsCustomProps";
import { Card, Heading, Stack, Text } from "@chakra-ui/react";
import { Section } from "../molecules/Section";
import { SkillFilter } from "../molecules/SkillFilter";

export const AboutSection = ({
  skills,
  selectedSkills,
  setSelectedSkills,
}: AboutProps) => (
  <Section
    name="about"
    title="Frontend engineer focused on practical, user-friendly products"
    desc="I enjoy building clean, maintainable interfaces backed by thoughtful architecture."
  >
    <Stack gap={8}>
      <Card.Root bg="white" borderColor="gray.200" rounded="2xl" shadow="sm">
        <Card.Body>
          <Text color="gray.600" lineHeight="1.8">
            I’m a Melbourne-based frontend engineer with experience building
            responsive web apps, mobile apps, CMS-powered websites, and
            SaaS-style products. I like turning complex requirements into simple
            user experiences.
          </Text>

          <Text color="gray.600" lineHeight="1.8" mt={5}>
            My recent focus is on Next.js, TypeScript, Contentful, React Native,
            and full-stack portfolio projects that demonstrate production-style
            architecture.
          </Text>
        </Card.Body>
      </Card.Root>

      <Card.Root bg="white" borderColor="gray.200" rounded="2xl" shadow="sm">
        <Card.Body>
          <Heading fontWeight="bold" color="brand.700" size="4xl">
            Core Skills
          </Heading>

          <Text color="gray.600" lineHeight="1.8" mt={5}>
            Please select/deselect one or multiple skills to filter my related
            project/s and experience/s.
          </Text>

          <SkillFilter
            skills={skills}
            selectedSkills={selectedSkills}
            onSelectSkills={setSelectedSkills}
          />
        </Card.Body>
      </Card.Root>
    </Stack>
  </Section>
);
