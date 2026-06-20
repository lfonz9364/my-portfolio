import { formatDate } from "@/lib/helpers";
import { Experience } from "@/types/contenful";
import { Box, Heading, Stack, Text, Wrap } from "@chakra-ui/react";
import { Badge } from "../atoms/Badge";
import { DynamicLink } from "../atoms/DynamicLink";
import { ContentfulRichText } from "../organisms/ContentfulRichText";

export const ExperienceDetailTemplate = ({
  experience,
}: {
  experience: Experience;
}) => {
  const {
    fields: { role, startDate, endDate, company, summary, skills },
  } = experience;
  return (
    <Box py={16}>
      <DynamicLink href="/">← Back to Home</DynamicLink>

      <Stack mt={8}>
        <Text
          color="brand.500"
          fontSize="sm"
          fontWeight="semibold"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          {company}
        </Text>

        <Heading size="xl" mt={2} fontWeight="bold" color="brand.700">
          {role}
        </Heading>

        <Text fontSize="sm" fontWeight="medium" color="gray.700">
          {formatDate(startDate)} — {formatDate(endDate) ?? "Present"}
        </Text>

        <ContentfulRichText content={summary} />

        <Wrap mt={5} gap={2}>
          {skills?.map((skill, index) => (
            <Badge key={`${skill.fields.name}-${index}`}>
              {skill.fields.name}
            </Badge>
          ))}
        </Wrap>
      </Stack>
    </Box>
  );
};
