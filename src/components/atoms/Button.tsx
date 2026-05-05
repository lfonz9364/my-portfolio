import { ButtonProps } from "@/types/componentsCustomProps";
import Link from "next/link";

export const Button = ({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) => {
  const className =
    variant === "primary"
      ? "rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
      : "rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:border-emerald-600 hover:text-emerald-700";

  if (!href) {
    return <button className={className}>{children}</button>;
  }

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={className}
    >
      {children}
    </Link>
  );
};
