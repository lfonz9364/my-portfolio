import { Button } from "@/components/atoms/Button";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { Box, Card, HStack, Stack, Text } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

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
            <Button
              href="mailto:your-email@example.com"
              variant="solid"
              colorPalette="red"
            >
              <FaEnvelope /> Email Me
            </Button>
            <Button
              href={process.env.LINKEDIN_LINK}
              variant="solid"
              colorPalette="blue"
            >
              <FaLinkedin /> LinkedIn
            </Button>
            <Button href={process.env.GITHUB_LINK} variant="subtle">
              <FaGithub /> Github
            </Button>
          </HStack>
        </Stack>
      </Card.Body>
    </Card.Root>
  </Box>
);
