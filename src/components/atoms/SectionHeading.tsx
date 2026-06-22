import { SectionHeadingProps } from "@/types/componentsCustomProps";
import { Heading, Stack, Text } from "@chakra-ui/react";
import { ContentfulRichText } from "../organisms/ContentfulRichText";

export const SectionHeading = ({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) => (
  <Stack gap={3} mb={8}>
    {eyebrow && (
      <Text
        color="brand.500"
        fontSize="sm"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="wide"
      >
        {eyebrow}
      </Text>
    )}

    <Heading as="h1" fontSize="3xl" color="brand.700">
      {title}
    </Heading>

    {description && (
      <ContentfulRichText content={description} />
    )}
  </Stack>
);
