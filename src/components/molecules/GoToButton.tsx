import { GoToButtonProps } from "@/types/componentsCustomProps";
import { Button } from "../atoms/Button";
import { Link } from "../atoms/Link";

export const GoToButton = ({
  href,
  children,
  buttonProps,
  externalLink,
}: GoToButtonProps) => (
  <Link href={href} external={externalLink}>
    <Button {...buttonProps}>{children}</Button>
  </Link>
);
