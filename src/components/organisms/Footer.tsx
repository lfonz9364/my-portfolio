import { Container } from "@/components/atoms/Container";

export const Footer = () => (
  <footer className="border-t border-slate-200 py-8">
    <Container>
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} Fonzie. Built with Next.js and Contentful.
      </p>
    </Container>
  </footer>
);
