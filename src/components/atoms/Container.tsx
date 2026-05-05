import { Container as ChakraContainer } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => (
  <ChakraContainer maxW="6xl" px={{ base: 4, md: 6 }} py={{ base: 8, md: 12 }}>
    {children}
  </ChakraContainer>
);
