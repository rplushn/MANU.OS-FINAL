import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Globe } from "@/components/magicui/globe";

const navigationSections = [
  {
    title: "Servicios",
    links: [
      { name: "Desarrollo de Software", href: "/desarrollo" },
      { name: "Soluciones Integrales", href: "/soluciones" },
      { name: "Consultoría", href: "/consultoria" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Sobre Nosotros", href: "/about" },
      { name: "Contacto", href: "/contacto" },
      { name: "Precios", href: "/pricing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacidad", href: "/privacy" },
      { name: "FAQ", href: "/faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/80 backdrop-blur-xl">
      <div className="container relative z-10 py-12 lg:py-16">
        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Brand & Contact */}
          <div className="flex flex-col gap-6">
            {/* Brand */}
            <div className="flex flex-col gap-3">
              <Link href="/" className="inline-block">
                <h2 className="text-2xl font-black tracking-tight">
                  KODDIX{" "}
                  <span className="font-normal text-muted-foreground">
                    HONDURAS
                  </span>
                </h2>
              </Link>
              <p className="text-sm text-muted-foreground">
                Ingeniería de software de clase mundial.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/50489502917"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>+504 8950-2917</span>
              </a>
              <a
                href="mailto:soporte@koddix.com"
                className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>soporte@koddix.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Tegucigalpa, Honduras</span>
              </div>
            </div>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="grid gap-8 sm:grid-cols-3 lg:gap-12">
            {navigationSections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  {section.title}
                </h3>
                <nav className="flex flex-col gap-3">
                  {section.links.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Globe - Centered at Bottom */}
        <div className="relative mt-16 flex items-center justify-center overflow-hidden lg:mt-20">
          <div className="relative h-64 w-full max-w-2xl lg:h-80">
            <Globe className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 opacity-25 pointer-events-none" />
          </div>
        </div>
      </div>
    </footer>
  );
}
