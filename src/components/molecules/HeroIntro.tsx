import { HeroIntroProps } from "@/types/componentsCustomProps";
import { HStack } from "@chakra-ui/react";
import { GoToButton } from "./GoToButton";
import { Section } from "./Section";

export const HeroIntro = ({ content }: HeroIntroProps) => {
  const {
    name,
    title,
    description,
    filledButtonText,
    filledButtonLink,
    surfaceButtonText,
    surfaceButtonLink,
    outlineButtonText,
    outlineButtonLink,
  } = content.fields;
  return (
    <Section name={name} title={title} desc={description} haveNoTopBorder>
      <HStack gap={4} flexWrap="wrap">
        <GoToButton
          href={filledButtonLink}
          buttonProps={{ colorPalette: "brand" }}
        >
          {filledButtonText}
        </GoToButton>

        <GoToButton
          href={surfaceButtonLink}
          buttonProps={{ variant: "surface", colorPalette: "cyan" }}
        >
          {surfaceButtonText}
        </GoToButton>

        <GoToButton
          href={outlineButtonLink}
          buttonProps={{ variant: "outline", colorPalette: "brand" }}
        >
          {outlineButtonText}
        </GoToButton>
      </HStack>
    </Section>
  );
};
