import { SectionProps } from "@/types/componentsCustomProps";
import { Box } from "@chakra-ui/react";
import { SectionHeading } from "@/components/atoms/SectionHeading";

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
    <Box
      as="section"
      id={name}
      py={{ base: 8, md: 16 }}
      scrollMarginTop="120px"
      {...haveBorder}
    >
      <SectionHeading eyebrow={name} title={title} description={desc} />

      {children}
    </Box>
  );
};
