import { CardsGroupProps } from "@/types/componentsCustomProps";
import { SimpleGrid } from "@chakra-ui/react";
import { Section } from "./Section";

export const CardsGroup = ({ headerContent, children }: CardsGroupProps) => {
  const { name, title, description } = headerContent.fields;
  return (
    <Section name={name} title={title} desc={description}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        {children}
      </SimpleGrid>
    </Section>
  );
};
