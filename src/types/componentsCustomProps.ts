import { ReactNode } from "react";

export type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};
