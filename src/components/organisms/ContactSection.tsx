import { GoToButton } from "@/components/molecules/GoToButton";
import { Section } from "@/components/molecules/Section";
import { ContactSectionProps } from "@/types/componentsCustomProps";
import { Card, HStack, Stack } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { ContentfulRichText } from "./ContentfulRichText";

export const ContactSection = ({ content }: ContactSectionProps) => {
  const { name, title, description, email, linkedInUrl, githubUrl } =
    content.fields;

  return (
    <Section name={name} title={title} desc={description}>
      <Card.Root bg="white" borderColor="gray.200" rounded="2xl" shadow="sm">
        <Card.Body>
          <Stack gap={6}>
            <ContentfulRichText content={description} />

            <HStack gap={4} flexWrap="wrap">
              <GoToButton
                href={`mailto:${email}`}
                externalLink
                buttonProps={{
                  variant: "solid",
                  colorPalette: "red",
                }}
              >
                <FaEnvelope /> Email Me
              </GoToButton>

              <GoToButton
                href={linkedInUrl}
                externalLink
                buttonProps={{
                  variant: "solid",
                  colorPalette: "blue",
                }}
              >
                <FaLinkedin /> LinkedIn
              </GoToButton>

              <GoToButton
                href={githubUrl}
                externalLink
                buttonProps={{ variant: "subtle", colorPalette: "gray" }}
              >
                <FaGithub /> Github
              </GoToButton>
            </HStack>
          </Stack>
        </Card.Body>
      </Card.Root>
    </Section>
  );
};
