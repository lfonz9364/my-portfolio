import { Badge } from "@/components/atoms/Badge";
import { Box, Heading, HStack, Stack, Text, Wrap } from "@chakra-ui/react";
import { GoToButton } from "./GoToButton";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Node.js",
  "Contentful",
  "Ruby on Rails",
  "Ruby",
  "Flutter",
  "Dart",
];

export const HeroIntro = () => (
  <Box as="section" py={{ base: 16, md: 24 }}>
    <Stack gap={6} maxW="4xl">
      <Text
        color="brand.500"
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
        color="brand.700"
      >
        Building scalable web & mobile products with real-world impact.
      </Heading>

      <Text maxW="2xl" fontSize={{ base: "md", md: "lg" }} color="gray.600">
        7+ years experience across React, Next.js, TypeScript, and React Native.
        Focused on performance, clean architecture, and user experience.
      </Text>

      <HStack gap={4} flexWrap="wrap">
        <GoToButton href="/projects" buttonProps={{ colorPalette: "brand" }}>
          View Projects
        </GoToButton>

        <GoToButton
          href="/contact"
          buttonProps={{ variant: "outline", colorPalette: "brand" }}
        >
          Contact Me
        </GoToButton>
      </HStack>

      <Wrap gap={3} pt={4}>
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </Wrap>
    </Stack>
  </Box>
);
