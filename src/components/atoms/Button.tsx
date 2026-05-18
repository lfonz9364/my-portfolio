import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";

export const Button = ({ children, ...restProps }: ButtonProps) => {
  return (
    <ChakraButton rounded="full" {...restProps}>
      {children}
    </ChakraButton>
  );
};
