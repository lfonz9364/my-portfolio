import { Badge } from "@/components/atoms/Badge";
import { Project, Skill } from "@/types/contenful";
import { Card, HStack, Stack, Text, Wrap } from "@chakra-ui/react";
import { Link } from "../atoms/Link";

export const ProjectCard = ({ project }: { project: Project }) => {
  const {
    sys: { id },
    fields: {
      shortDescription,
      featured,
      title,
      skills,
      slug,
      githubUrl,
      liveUrl,
    },
  } = project;

  return (
    <Card.Root
      bg="white"
      borderColor="gray.200"
      rounded="2xl"
      shadow="sm"
      transition="all 0.2s"
      _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
    >
      <Card.Body>
        <Stack gap={4}>
          {featured && (
            <Badge colorPalette="brand" alignSelf="flex-start">
              Featured
            </Badge>
          )}

          <Card.Title color="brand.700">{title}</Card.Title>

          <Text color="gray.600" fontSize="sm" lineHeight="1.7">
            {shortDescription}
          </Text>

          <Wrap gap={2}>
            {skills?.map((skill: Skill, index: number) => (
              <Badge key={`${id}-${skill.fields.name}-${index}`}>
                {skill.fields.name}
              </Badge>
            ))}
          </Wrap>

          <HStack gap={4} pt={2}>
            <Link
              href={`/projects/${slug}`}
              chakraLinkProps={{ fontWeight: "semibold" }}
            >
              Case Study →
            </Link>

            {githubUrl && (
              <Link
                href={githubUrl}
                external
                chakraLinkProps={{ fontWeight: "semibold" }}
              >
                GitHub
              </Link>
            )}

            {liveUrl && (
              <Link
                href={liveUrl}
                external
                chakraLinkProps={{ fontWeight: "semibold" }}
              >
                Live site
              </Link>
            )}
          </HStack>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};
