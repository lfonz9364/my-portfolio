import { Container } from "@/components/atoms/Container";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Box } from "@chakra-ui/react";

export const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <Box bg="gray.50" color="gray.900" minH="100vh">
    <Header />

    <Container py={{ base: 8, md: 12 }}>{children}</Container>

    <Footer />
  </Box>
);
