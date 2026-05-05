import { ReactNode } from "react";

export type BadgeProps = {
  children: string;
};

export type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};
