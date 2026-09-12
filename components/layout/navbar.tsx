"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart } from "lucide-react";
import clsx from "clsx";
import NavLinks from "@/components/layout/nav-links";
import PetLogo from "@/components/layout/pet-logo";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [ isScrolled, setIsScrolled ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        {
          "bg-transparent": isHome && !isScrolled,
          "bg-background shadow-md border-b border-border": !isHome || isScrolled,
        },
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between h-16">
          <div className="flex items-center">
            <PetLogo />
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            <NavLinks />
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="secondary" render={<Link href="/contact" />}>
              <span className="font-semibold">Seja Voluntário</span>
            </Button>

            <Button render={<Link href="/donate" />}>
              <Heart className="w-4 h-4" />
              <span className="font-semibold">Doar</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}