import { ButtonProps } from "@/types/componentsCustomProps";
import { Button as ChakraButton } from "@chakra-ui/react";

export const Button = ({ children, ...restProps }: ButtonProps) => {
  return (
    <ChakraButton rounded="full" {...restProps}>
      {children}
    </ChakraButton>
  );
};
