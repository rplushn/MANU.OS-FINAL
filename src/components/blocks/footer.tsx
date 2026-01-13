import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Globe } from "@/components/magicui/globe";

const navigationSections = [
  {
    title: "SERVICIOS",
    links: [
      { name: "Desarrollo de Software", href: "/desarrollo" },
      { name: "Soluciones Integrales", href: "/soluciones" },
      { name: "Consultoría", href: "/consultoria" },
    ],
  },
  {
    title: "EMPRESA",
    links: [
      { name: "Sobre Nosotros", href: "/about" },
      { name: "Contacto", href: "/contacto" },
      { name: "Precios", href: "/pricing" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { name: "Privacidad", href: "/privacy" },
      { name: "FAQ", href: "/faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background/80 backdrop-blur-xl">
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

            {/* Contact Info - Vertical Stack */}
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/50489502917"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-left text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>+504 8950-2917</span>
              </a>
              <a
                href="mailto:soporte@koddix.com"
                className="flex items-center gap-3 text-left text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>soporte@koddix.com</span>
              </a>
              <div className="flex items-center gap-3 text-left text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Tegucigalpa, Honduras</span>
              </div>
            </div>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="grid gap-8 sm:grid-cols-3 lg:gap-12">
            {navigationSections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="flex flex-col gap-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
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

        {/* Bottom Bar - Copyright */}
        <div className="mt-16 border-t border-border pt-8 lg:mt-20">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 Koddix. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Globe - Huge Background Horizon Effect */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px]">
          <Globe className="!max-w-none h-full w-full" />
        </div>
      </div>
    </footer>
  );
}
