import { SectionHeadingProps } from "@/types/componentsCustomProps";
import { Heading, Stack, Text } from "@chakra-ui/react";

export const SectionHeading = ({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) => (
  <Stack gap={3} mb={8}>
    {eyebrow && (
      <Text
        color="green.600"
        fontSize="sm"
        fontWeight="semibold"
        textTransform="uppercase"
      >
        {eyebrow}
      </Text>
    )}

    <Heading color="gray.900">{title}</Heading>

    {description && <Text color="gray.600">{description}</Text>}
  </Stack>
);
