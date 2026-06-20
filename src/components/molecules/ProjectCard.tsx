import { DynamicLink } from "@/components/atoms/DynamicLink";
import { Project } from "@/types/contenful";
import {
  Card,
  HStack,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

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
    <LinkBox>
      <Card.Root
        bg="white"
        borderColor="gray.200"
        rounded="2xl"
        shadow="sm"
        transition="all 0.2s"
        h="100%"
        pb="48px"
        _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
      >
        <LinkOverlay asChild>
          <NextLink href={`projects/${slug}`} />
        </LinkOverlay>
        <Card.Body>
          <Stack gap={4}>
            <Card.Title color="brand.700">{title}</Card.Title>

            <Text color="gray.600" fontSize="sm" lineHeight="1.7">
              {shortDescription}
            </Text>

            <HStack gap={4} pt={2}>
              <DynamicLink
                href={`/projects/${slug}`}
                chakraLinkProps={{ fontWeight: "semibold" }}
              >
                Case Study →
              </DynamicLink>

              {githubUrl && (
                <DynamicLink
                  href={githubUrl}
                  external
                  chakraLinkProps={{ fontWeight: "semibold" }}
                >
                  GitHub
                </DynamicLink>
              )}

              {liveUrl && (
                <DynamicLink
                  href={liveUrl}
                  external
                  chakraLinkProps={{ fontWeight: "semibold" }}
                >
                  Live site
                </DynamicLink>
              )}
            </HStack>
          </Stack>

          <Text
            mt={8}
            color="brand.500"
            fontSize="sm"
            lineHeight="1.7"
            position="absolute"
            bottom="24px"
          >
            Tap card for detail
          </Text>
        </Card.Body>
      </Card.Root>
    </LinkBox>
  );
};
