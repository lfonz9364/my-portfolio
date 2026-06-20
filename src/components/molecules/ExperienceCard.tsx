import { Badge } from "@/components/atoms/Badge";
import { formatDate } from "@/lib/helpers";
import { Experience } from "@/types/contenful";
import { Card, HStack, Heading, Text } from "@chakra-ui/react";
import { ContentfulRichText } from "../organisms/ContentfulRichText";

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const {
    sys: { id },
    fields: { startDate, endDate, role, company, summary },
  } = experience;
  return (
    <Card.Root
      bg="white"
      borderColor="gray.200"
      rounded="2xl"
      shadow="sm"
      transition="all 0.2s"
      _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
    >
      <Card.Body>
        <Text fontSize="sm" fontWeight="medium" color="brand.700">
          {formatDate(startDate)} — {formatDate(endDate) ?? "Present"}
        </Text>

        <Heading size="xl" mt={2} fontWeight="bold" color="grey.950">
          {role}
        </Heading>

        <Text mt={1} fontWeight="medium" color="grey.700">
          {company}
        </Text>

        <ContentfulRichText stackProps={{ mt: 4 }} content={summary} />

        <HStack mt={5} wrap="wrap" gap={2}>
          {experience.fields.skills?.map((skill, index) => (
            <Badge key={`${id}-${skill.fields.name}-${index}`}>
              {skill.fields.name}
            </Badge>
          ))}
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};
