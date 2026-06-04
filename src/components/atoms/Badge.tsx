import { BadgeProps } from "@/types/componentsCustomProps";
import { Badge as ChakraBadge } from "@chakra-ui/react";

export const Badge = ({ children, ...restProps }: BadgeProps) => (
  <ChakraBadge
    key={children}
    colorPalette="brand"
    variant="subtle"
    rounded="full"
    size="lg"
    {...restProps}
  >
    {children}
  </ChakraBadge>
);
