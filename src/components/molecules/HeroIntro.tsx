import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Box, Heading, HStack, Stack, Text, Wrap } from "@chakra-ui/react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Node.js",
  "Contentful",
];

export const HeroIntro = () => (
  <Box as="section" py={{ base: 16, md: 24 }}>
    <Stack gap={6} maxW="4xl">
      <Text
        color="green.600"
        fontSize="sm"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="wide"
      >
        Frontend Engineer • Melbourne
      </Text>

      <Heading
        as="h1"
        size={{ base: "4xl", md: "6xl" }}
        lineHeight="1.05"
        color="gray.900"
      >
        Building scalable web & mobile products with real-world impact.
      </Heading>

      <Text maxW="2xl" fontSize={{ base: "md", md: "lg" }} color="gray.600">
        7+ years experience across React, Next.js, TypeScript, and React Native.
        Focused on performance, clean architecture, and user experience.
      </Text>

      <HStack gap={4} flexWrap="wrap">
        <Button href="/projects" colorPalette="green" rounded="full">
          View Projects
        </Button>

        <Button href="/contact" variant="outline" rounded="full">
          Contact Me
        </Button>
      </HStack>

      <Wrap gap={3} pt={4}>
        {skills.map((skill) => (
          <Badge
            key={skill}
            colorPalette="green"
            variant="subtle"
            rounded="full"
          >
            {skill}
          </Badge>
        ))}
      </Wrap>
    </Stack>
  </Box>
);
