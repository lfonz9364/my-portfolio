import { LinkProps } from "@/types/componentsCustomProps";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

export const DynamicLink = ({
  href,
  children,
  chakraLinkProps,
  nextLinkProps,
  external,
}: LinkProps) => {
  if (external) {
    return (
      <ChakraLink
        colorPalette="brand"
        {...chakraLinkProps}
        target="_blank"
        rel="noreferrer"
        _hover={{ textDecoration: "none" }}
        href={href}
      >
        {children}
      </ChakraLink>
    );
  }

  return (
    <ChakraLink
      asChild
      colorPalette="brand"
      {...chakraLinkProps}
      _hover={{ textDecoration: "none" }}
    >
      <NextLink href={href} {...nextLinkProps}>
        {children}
      </NextLink>
    </ChakraLink>
  );
};
