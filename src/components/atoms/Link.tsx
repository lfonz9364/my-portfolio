import { LinkProps } from "@/types/componentsCustomProps";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

export const Link = ({
  href,
  children,
  chakraLinkProps,
  nextLinkProps,
}: LinkProps) => (
  <ChakraLink asChild {...chakraLinkProps}>
    <NextLink href={href} {...nextLinkProps}>
      {children}
    </NextLink>
  </ChakraLink>
);
