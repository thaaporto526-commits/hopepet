"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const links = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/about" },
  { name: "Projetos", href: "/projects" },
  { name: "Adoção", href: "/adoption" },
  { name: "Setores", href: "/sectors" },
  { name: "Notícias", href: "/news" },
  { name: "Contato", href: "/contact" },
];

type NavLinksProps = {
  isDarkBackground?: boolean;
  onItemClick?: () => void;
};

export default function NavLinks({ isDarkBackground = false, onItemClick }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={onItemClick}
            className={clsx(
              "text-sm font-medium transition-colors",
              isActive && "text-primary font-semibold",
              !isActive && isDarkBackground && "text-white/80 hover:text-white",
              !isActive && !isDarkBackground && "text-muted-foreground hover:text-foreground"
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
