import { Container } from "@/components/atoms/Container";
import { Footer } from "@/components/organisms/Footer";
import { Navbar } from "@/components/organisms/NavBar";
import { PropsWithChildren } from "react";

export const PageLayout = ({ children }: PropsWithChildren) => (
  <>
    <Navbar />

    <main>
      <Container>{children}</Container>
    </main>

    <Footer />
  </>
);
