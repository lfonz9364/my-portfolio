"use client";

import { LinkProps } from "@/types/componentsCustomProps";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const DynamicLink = ({
  href,
  children,
  chakraLinkProps,
  external,
}: LinkProps) => {
  const target = external ? "_blank" : "_self";
  const rel = external ? "noopener noreferrer" : undefined;

  return (
    <Link
      colorPalette="brand"
      {...chakraLinkProps}
      asChild
      target={target}
      rel={rel}
      _hover={{ textDecoration: "none" }}
    >
      <NextLink href={href}>{children}</NextLink>
    </Link>
  );
};
