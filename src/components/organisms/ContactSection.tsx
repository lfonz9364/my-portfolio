import { SectionHeading } from "@/components/atoms/SectionHeading";
import { Box, Card, HStack, Stack, Text } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { GoToButton } from "../molecules/GoToButton";

export const ContactSection = () => (
  <Box
    as="section"
    py={{ base: 8, md: 8 }}
    borderTopWidth="1px"
    borderColor="gray.200"
  >
    <SectionHeading
      eyebrow="Contact"
      title="Let’s work together"
      description="I’m open to frontend, full-stack, and mobile engineering opportunities."
    />

    <Card.Root bg="white" borderColor="gray.200" rounded="2xl" shadow="sm">
      <Card.Body>
        <Stack gap={6}>
          <Text color="gray.600" maxW="2xl" lineHeight="1.8">
            Feel free to reach out if you’re hiring, collaborating, or want to
            chat about a project.
          </Text>

          <HStack gap={4} flexWrap="wrap">
            <GoToButton
              href={`mailto:${process.env.EMAIL_ADDRESS}` || ""}
              buttonProps={{
                variant: "solid",
                colorPalette: "red",
              }}
            >
              <FaEnvelope /> Email Me
            </GoToButton>
            <GoToButton
              href={process.env.LINKEDIN_LINK || ""}
              buttonProps={{
                variant: "solid",
                colorPalette: "blue",
              }}
            >
              <FaLinkedin /> LinkedIn
            </GoToButton>
            <GoToButton
              href={process.env.GITHUB_LINK || ""}
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
