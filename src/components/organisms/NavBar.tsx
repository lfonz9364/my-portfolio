import { Box, Container, Flex, HStack } from "@chakra-ui/react";
import { Link } from "../atoms/Link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const NavBar = () => (
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
    <Container>
      <Flex h="16" align="center" justify="space-between">
        <Link
          href="/"
          chakraLinkProps={{ fontWeight: "bold", color: "gray.900" }}
        >
          Fonzie
        </Link>

        <HStack gap={6} display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              chakraLinkProps={{
                color: "gray.600",
                fontSize: "sm",
                fontWeight: "medium",
                _hover: { color: "green.600", textDecoration: "none" },
              }}
            >
              {link.label}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Container>
  </Box>
);
