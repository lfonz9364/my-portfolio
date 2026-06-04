"use client";

import { system } from "@/app/theme";
import { ChakraProvider } from "@chakra-ui/react";
// https://github.com/pacocoursey/next-themes/issues/387 to resolve issue with next themes
import { ThemeProviderProps } from "@teispace/next-themes";
import dynamic from "next/dynamic";

const NextThemesProvider = dynamic(
  () => import("@teispace/next-themes").then((e) => e.ThemeProvider),
  // Disabling SSR to prevent it rendering before knowing client's preference
  // Resolving Hydration issue with style tag mismatched
  { ssr: false },
);

export function Provider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </NextThemesProvider>
  );
}
