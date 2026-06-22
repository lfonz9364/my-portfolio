import { AboutProps } from "@/types/componentsCustomProps";
import { Card, Heading, Stack, Text } from "@chakra-ui/react";
import { Section } from "../molecules/Section";
import { SkillFilter } from "../molecules/SkillFilter";
import { ContentfulRichText } from "./ContentfulRichText";

export const AboutSection = ({
  content,
  skills,
  selectedSkills,
  setSelectedSkills,
}: AboutProps) => {
  const {
    name,
    title,
    description,
    shortBiography,
    skillsTitle,
    skillFilterTitle,
  } = content.fields;

  return (
    <Section name={name} title={title} desc={description}>
      <Stack gap={8}>
        <Card.Root bg="white" borderColor="gray.200" rounded="2xl" shadow="sm">
          <Card.Body>
            <ContentfulRichText content={shortBiography} />
          </Card.Body>
        </Card.Root>

        <Card.Root bg="white" borderColor="gray.200" rounded="2xl" shadow="sm">
          <Card.Body>
            <Heading fontWeight="bold" color="brand.700" size="4xl">
              {skillsTitle}
            </Heading>

            <Text color="gray.600" lineHeight="1.8" mt={5}>
              {skillFilterTitle}
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
};
