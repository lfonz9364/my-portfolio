import Link from "next/link";
import { Container } from "../atoms/Container";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => (
  <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
    <Container>
      <nav className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold text-slate-950">
          Fonzie
        </Link>

        <div className="hidden gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-emerald-700"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </Container>
  </header>
);