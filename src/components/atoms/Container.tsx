import { Container as ChakraContainer, ContainerProps } from "@chakra-ui/react";

export const Container = ({ children, ...restProps }: ContainerProps) => (
  <ChakraContainer maxW="6xl" px={{ base: 4, md: 6 }} {...restProps}>
    {children}
  </ChakraContainer>
);
