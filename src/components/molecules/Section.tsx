import { SectionProps } from "@/types/componentsCustomProps";
import { Box } from "@chakra-ui/react";
import { SectionHeading } from "../atoms/SectionHeading";

export const Section = ({
  name,
  title,
  desc,
  children,
  haveNoTopBorder,
}: SectionProps) => {
  const haveBorder = !haveNoTopBorder
    ? { borderTopWidth: "1px", borderColor: "gray.200" }
    : {};

  return (
    <Box as="section" py={{ base: 8, md: 16 }} {...haveBorder}>
      <SectionHeading eyebrow={name} title={title} description={desc} />

      {children}
    </Box>
  );
};
