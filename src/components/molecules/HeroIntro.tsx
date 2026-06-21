import { HStack } from "@chakra-ui/react";
import { GoToButton } from "./GoToButton";
import { Section } from "./Section";

export const HeroIntro = () => (
  <Section
    name="Frontend Engineer • Melbourne"
    title="Building scalable web & mobile products with real-world impact"
    desc="7+ years experience across React, Next.js, TypeScript, and React Native.
        Focused on performance, clean architecture, and user experience."
    haveNoTopBorder
  >
    <HStack gap={4} flexWrap="wrap">
      <GoToButton href="#portfolio" buttonProps={{ colorPalette: "brand" }}>
        View Projects
      </GoToButton>

      <GoToButton
        href="#experiences"
        buttonProps={{ variant: "surface", colorPalette: "cyan" }}
      >
        Career Journey
      </GoToButton>

      <GoToButton
        href="#Contact Me"
        buttonProps={{ variant: "outline", colorPalette: "brand" }}
      >
        Contact Me
      </GoToButton>
    </HStack>
  </Section>
);
