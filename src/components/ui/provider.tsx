"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
// https://github.com/pacocoursey/next-themes/issues/387 to resolve issue with next themes
import { ThemeProvider } from "@teispace/next-themes";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </ThemeProvider>
  );
}
