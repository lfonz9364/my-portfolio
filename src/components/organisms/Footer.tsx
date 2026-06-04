import { Container } from "@/components/atoms/Container";
import { Box, Text } from "@chakra-ui/react";

export const Footer = () => (
  <Box
    as="footer"
    py={8}
    borderTopWidth="1px"
    borderColor="gray.200"
    backdropFilter="blur(10px)"
  >
    <Container>
      <Text color="gray.500" fontSize="sm">
        © {new Date().getFullYear()} Fonzie. Built with Next.js and Contentful.
      </Text>
    </Container>
  </Box>
);
