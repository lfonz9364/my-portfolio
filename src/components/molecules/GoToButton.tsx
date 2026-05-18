import { GoToButtonProps } from "@/types/componentsCustomProps";
import { Button } from "../atoms/Button";
import { Link } from "../atoms/Link";

export const GoToButton = ({
  href,
  children,
  buttonProps,
}: GoToButtonProps) => (
  <Link href={href}>
    <Button {...buttonProps}>{children}</Button>
  </Link>
);
