import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import Icon from "@public/logo.svg";
import Image from "next/image";

export const Header = () => (
  <Box
    as="header"
    position="sticky"
    top={0}
    zIndex={50}
    bg="whiteAlpha.900"
    borderBottomWidth="1px"
    borderColor="gray.200"
    backdropFilter="blur(10px)"
  >
    <Container maxW="6xl" paddingInline="4">
      <Flex h="32" align="center" justify="space-between">
        <Box pos="relative" w={{ base: 16, sm: 24 }} h={{ base: 16, sm: 24 }}>
          <Image
            src={Icon.src}
            alt="Fonzie Logo"
            fill
            sizes="(max-width: 768px) 40vw, 20vw"
            className="object-fit"
          />
        </Box>

        <Heading
          color="#62D5F5"
          as="h1"
          size={{ base: "2xl", sm: "3xl", md: "5xl" }}
          lineHeight="1.05"
        >
          Alfons Caroles - Fonzie
        </Heading>
      </Flex>
    </Container>
  </Box>
);
