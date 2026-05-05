import { BadgeProps } from "@/types/componentsCustomProps";

export const Badge = ({ children }: BadgeProps) => (
  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
    {children}
  </span>
);
