import { LinkProps } from "@/types/componentsCustomProps";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

export const Link = ({
  href,
  children,
  chakraLinkProps,
  nextLinkProps,
  external,
}: LinkProps) => (
  <>
    <ChakraLink
      asChild
      {...chakraLinkProps}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <NextLink href={href} {...nextLinkProps}>
        {children}
      </NextLink>
    </ChakraLink>
  </>
);
