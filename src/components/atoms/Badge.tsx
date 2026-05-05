import { BadgeProps } from "@/types/componentsCustomProps";
import { Badge as ChakraBadge } from "@chakra-ui/react";

export const Badge = ({ children, ...restProps }: BadgeProps) => (
  <ChakraBadge
    key={children}
    colorPalette="green"
    variant="subtle"
    rounded="full"
    {...restProps}
  >
    {children}
  </ChakraBadge>
);
