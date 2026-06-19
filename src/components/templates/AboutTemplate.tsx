import { Badge } from "@/components/atoms/Badge";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { Box, Card, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Node.js",
  "PostgreSQL",
  "Contentful",
  "TailwindCSS",
];

export const AboutTemplate = () => (
  <Box py={16} borderTop="1px" borderColor="gray.200">
    <SectionHeading
      eyebrow="About"
      title="Frontend engineer focused on practical, user-friendly products"
      description="I enjoy building clean, maintainable interfaces backed by thoughtful architecture."
    />

    <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
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
          <Heading fontWeight="bold" color="gray.950" size="4xl">
            Core Skills
          </Heading>

          <HStack mt={5} gap={2} flexWrap="wrap">
            {skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </HStack>
        </Card.Body>
      </Card.Root>
    </SimpleGrid>
  </Box>
);
