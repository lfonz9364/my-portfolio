import { Badge } from "@/components/atoms/Badge";
import { DynamicLink } from "@/components/atoms/DynamicLink";
import { GoToButton } from "@/components/molecules/GoToButton";
import { Project } from "@/types/contenful";
import { Box, Heading, HStack, Stack } from "@chakra-ui/react";
import { ContentfulRichText } from "../organisms/ContentfulRichText";

export const ProjectDetailTemplate = ({ project }: { project: Project }) => {
  const {
    fields: { title, body, featuredImage, skills, liveUrl, githubUrl },
  } = project;
  return (
    <Box py={16}>
      <DynamicLink href="/">← Back to Home</DynamicLink>

      <Stack mt={8}>
        <Heading size="xl" mt={2} fontWeight="bold" color="grey.950">
          {title}
        </Heading>

        <ContentfulRichText content={body} />

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
