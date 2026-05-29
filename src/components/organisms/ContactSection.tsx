import { SectionHeading } from "@/components/atoms/SectionHeading";
import { ContactSectionProps } from "@/types/componentsCustomProps";
import { Box, Card, HStack, Stack, Text } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { GoToButton } from "../molecules/GoToButton";

export const ContactSection = ({
  heading,
  title,
  description,
  email,
  linkedInUrl,
  githubUrl,
}: ContactSectionProps) => (
  <Box
    as="section"
    py={{ base: 8, md: 8 }}
    borderTopWidth="1px"
    borderColor="gray.200"
  >
    <SectionHeading eyebrow={heading} title={title} description={description} />

    <Card.Root bg="white" borderColor="gray.200" rounded="2xl" shadow="sm">
      <Card.Body>
        <Stack gap={6}>
          <Text color="gray.600" maxW="2xl" lineHeight="1.8">
            {description}
          </Text>

          <HStack gap={4} flexWrap="wrap">
            <GoToButton
              href={email}
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
              buttonProps={{ variant: "subtle" }}
            >
              <FaGithub /> Github
            </GoToButton>
          </HStack>
        </Stack>
      </Card.Body>
    </Card.Root>
  </Box>
);
