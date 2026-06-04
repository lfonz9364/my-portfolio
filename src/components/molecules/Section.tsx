import { SectionProps } from "@/types/componentsCustomProps";
import { Box } from "@chakra-ui/react";
import { SectionHeading } from "../atoms/SectionHeading";

export const Section = ({
  name,
  title,
  desc,
  children,
}: SectionProps) => (
  <Box
    as="section"
    py={{ base: 8, md: 16 }}
    borderTopWidth="1px"
    borderColor="gray.200"
  >
    <SectionHeading eyebrow={name} title={title} description={desc} />

    {children}
  </Box>
);
