import { Container } from "@/components/atoms/Container";
import { Footer } from "@/components/organisms/Footer";
import { NavBar } from "@/components/organisms/NavBar";
import { Box } from "@chakra-ui/react";

export const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <Box bg="gray.50" color="gray.900" minH="100vh">
    <NavBar />

    <Container>{children}</Container>

    <Footer />
  </Box>
);
