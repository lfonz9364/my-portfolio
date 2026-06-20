import { formatDate } from "@/lib/helpers";
import { Experience } from "@/types/contenful";
import {
  Card,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ContentfulRichText } from "../organisms/ContentfulRichText";

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const {
    sys: { id },
    fields: { startDate, endDate, role, company, summary, slug },
  } = experience;
  return (
    <LinkBox>
      <Card.Root
        bg="white"
        borderColor="gray.200"
        rounded="2xl"
        shadow="sm"
        transition="all 0.2s"
        _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
      >
        <LinkOverlay asChild>
          <NextLink href={`experiences/${slug}`} />
        </LinkOverlay>
        <Card.Body>
          <Stack>
            <Text fontSize="sm" fontWeight="medium" color="brand.700">
              {formatDate(startDate)} — {formatDate(endDate) ?? "Present"}
            </Text>

            <Heading size="xl" mt={2} fontWeight="bold" color="gray.950">
              {role}
            </Heading>

            <Text mt={1} fontWeight="medium" color="gray.700">
              {company}
            </Text>

            <ContentfulRichText content={summary} />
          </Stack>
        </Card.Body>
      </Card.Root>
    </LinkBox>
  );
};
