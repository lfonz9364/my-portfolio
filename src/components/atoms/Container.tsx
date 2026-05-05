import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);
