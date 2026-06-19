import { Button } from "@/components/atoms/Button";
import { DynamicLink } from "@/components/atoms/DynamicLink";
import { GoToButtonProps } from "@/types/componentsCustomProps";

export const GoToButton = ({
  href,
  children,
  buttonProps,
  externalLink,
}: GoToButtonProps) => (
  <DynamicLink href={href} external={externalLink}>
    <Button {...buttonProps}>{children}</Button>
  </DynamicLink>
);
