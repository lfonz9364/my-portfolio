import { Badge } from "@/components/atoms/Badge";
import { DynamicLink } from "@/components/atoms/DynamicLink";
import { GoToButton } from "@/components/molecules/GoToButton";
import { Project } from "@/types/contenful";
import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";

export const ProjectDetailTemplate = ({ project }: { project: Project }) => {
  const {
    fields: { title, shortDescription, skills, liveUrl, githubUrl },
  } = project;
  return (
    <Box py={16}>
      <DynamicLink href="/projects">← Back to projects</DynamicLink>

      <Stack mt={8}>
        <Heading size="xl" mt={2} fontWeight="bold" color="grey.950">
          {title}
        </Heading>

        <Text mt={4} fontSize="sm" color="brand.700" lineHeight="1.6">
          {shortDescription}
        </Text>

        <HStack mt={5} wrap="wrap" gap={2}>
          {skills?.map((skill, index) => (
            <Badge key={`${skill.fields.name}-${index}`}>
              {skill.fields.name}
            </Badge>
          ))}
        </HStack>

        <HStack mt={5} wrap="wrap" gap={2}>
          {liveUrl && (
            <GoToButton href={liveUrl} externalLink>
              View Live
            </GoToButton>
          )}

          {githubUrl && (
            <GoToButton
              href={githubUrl}
              externalLink
              buttonProps={{ variant: "outline" }}
            >
              View GitHub
            </GoToButton>
          )}
        </HStack>
      </Stack>
    </Box>
  );
};
