import { ButtonProps } from "@/types/componentsCustomProps";
import { Button as ChakraButton, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

export const Button = ({ href, children, ...restProps }: ButtonProps) => {
  if (!href) {
    return <ChakraButton {...restProps}>{children}</ChakraButton>;
  }

  return (
    <ChakraLink asChild>
      <NextLink href={href}>
        <ChakraButton {...restProps}>{children}</ChakraButton>
      </NextLink>
    </ChakraLink>
  );
};
