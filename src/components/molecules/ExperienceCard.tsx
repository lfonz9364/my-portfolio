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

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const {
    sys: { id },
    fields: { startDate, endDate, role, company, shortSummary, slug },
  } = experience;

  return (
    <LinkBox>
      <Card.Root
        bg="white"
        borderColor="gray.200"
        rounded="2xl"
        shadow="sm"
        transition="all 0.2s"
        h="100%"
        pb="48px"
        _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
      >
        <LinkOverlay asChild>
          <NextLink href={`experiences/${slug}`} />
        </LinkOverlay>
        <Card.Body>
          <Stack>
            <Text fontSize="sm" fontWeight="medium" color="brand.500">
              {formatDate(startDate)} — {formatDate(endDate) ?? "Present"}
            </Text>

            <Heading size="xl" mt={2} fontWeight="bold" color="brand.700">
              {role}
            </Heading>

            <Text mt={1} fontWeight="medium" color="gray.700">
              {company}
            </Text>

            <Text color="gray.600">
              {shortSummary}
            </Text>
          </Stack>

          <Text
            mt={8}
            color="brand.500"
            fontSize="sm"
            lineHeight="1.7"
            position="absolute"
            bottom="24px"
          >
            Tap card for detail
          </Text>
        </Card.Body>
      </Card.Root>
    </LinkBox>
  );
};
