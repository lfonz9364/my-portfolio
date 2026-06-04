import { Badge } from "@/components/atoms/Badge";
import { HStack, Wrap } from "@chakra-ui/react";
import { GoToButton } from "./GoToButton";
import { Section } from "./Section";

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
  <Section
    name="Frontend Engineer • Melbourne"
    title="Building scalable web & mobile products with real-world impact"
    desc="7+ years experience across React, Next.js, TypeScript, and React Native.
        Focused on performance, clean architecture, and user experience."
    haveNoTopBorder
  >
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
  </Section>
);
