import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { playfair } from "@/lib/fonts";
import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Início", href: "/" },
  { name: "Sobre Nós", href: "/about" },
  { name: "Projetos", href: "/projects" },
  { name: "Adoção", href: "/adoption" },
  { name: "Notícias", href: "/news" },
  { name: "Contato", href: "/contact" },
  { name: "Doar", href: "/donate" },
];

const sectors = [
  { name: "Administrativo", href: "/sectors" },
  { name: "Tecnologia", href: "/sectors" },
  { name: "Recursos Humanos", href: "/sectors" },
  { name: "Logística", href: "/sectors" },
  { name: "Marketing", href: "/sectors" },
];

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#141a0e] text-[#f4f7f2] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={logo}
                width={40}
                height={40}
                alt="HopePet Logo"
                className="rounded-full w-10 h-10 object-cover"
              />
              <span className={`${playfair.className} text-2xl font-bold text-white`}>
                Hopepet
              </span>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed">
              A Hopepet é uma ONG dedicada a resgatar, cuidar e encontrar lares amorosos para animais em situação de vulnerabilidade.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Hopepet"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-primary hover:text-black transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook da Hopepet"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-primary hover:text-black transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube da Hopepet"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-primary hover:text-black transition-all"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">
              Links Rápidos
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sectors */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">
              Setores
            </h4>
            <ul className="space-y-2.5">
              {sectors.map((sector, index) => (
                <li key={index}>
                  <Link
                    href={sector.href}
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {sector.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">
              Contato
            </h4>
            <ul className="space-y-3.5 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a
                  href="mailto:contato@hopepet.org.br"
                  className="hover:text-primary transition-colors"
                >
                  contato@hopepet.org.br
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+5511974718383"
                  className="hover:text-primary transition-colors"
                >
                  (11) 97471-8383
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 Hopepet. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
