"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export const links = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/about" },
  { name: "Projetos", href: "/projects" },
  { name: "Adoção", href: "/adoption" },
  { name: "Setores", href: "/s" },
  { name: "Notícias", href: "/news" },
  { name: "Contato", href: "/contact" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "text-sm font-medium transition-colors",
              {
                "text-primary hover:text-primary": pathname === link.href,
                "text-background/80 hover:text-background": pathname !== link.href
              }
            )}
          >
            {link.name}
          </Link>
        )
      })}
    </>
  )
}