import { Badge } from "@/components/atoms/Badge";
import { Experience } from "@/types/contenful";
import { Box, HStack, Heading, Text } from "@chakra-ui/react";

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const {
    sys: { id },
    fields: { startDate, endDate, role, company, summary },
  } = experience;
  return (
    <Box
      border="1px"
      borderColor="grey.200"
      bgColor="white"
      p={6}
      shadow="sm"
      rounded="2xl"
    >
      <Text fontSize="sm" fontWeight="medium" color="brand.700">
        {startDate} — {endDate ?? "Present"}
      </Text>

      <Heading size="xl" mt={2} fontWeight="bold" color="grey.950">
        {role}
      </Heading>

      <Text mt={1} fontWeight="medium" color="grey.700">
        {company}
      </Text>

      <Text mt={4} fontSize="sm" color="brand.700" lineHeight="1.6">
        {summary}
      </Text>

      <HStack className="mt-5 flex flex-wrap gap-2">
        {experience.fields.skills?.map((skill, index) => (
          <Badge key={`${id}-${skill.fields.name}-${index}`}>
            {skill.fields.name}
          </Badge>
        ))}
      </HStack>
    </Box>
  );
};
