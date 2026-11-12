"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";
import clsx from "clsx";
import NavLinks from "@/components/layout/nav-links";
import PetLogo from "@/components/layout/pet-logo";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        {
          "bg-transparent text-white": isTransparent,
          "bg-background/95 backdrop-blur-md shadow-sm border-b border-border text-foreground": !isTransparent,
        }
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <PetLogo textColor={isTransparent ? "text-white" : "text-foreground"} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <NavLinks isDarkBackground={isTransparent} />
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant={isTransparent ? "ghost" : "outline"}
              className={clsx(
                "font-semibold border transition-all",
                isTransparent
                  ? "border-white/40 text-white bg-transparent hover:bg-white/15 hover:text-white"
                  : "border-border text-foreground hover:bg-muted"
              )}
              render={<Link href="/contact" />}
            >
              <span>Seja Voluntário</span>
            </Button>

            <Button variant="default" className="font-semibold shadow-sm" render={<Link href="/donate" />}>
              <Heart className="w-4 h-4" />
              <span>Doar</span>
            </Button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              className={clsx(
                "p-2 rounded-lg transition-colors flex items-center gap-1.5 text-sm font-semibold",
                isTransparent ? "text-white hover:bg-white/10" : "text-foreground hover:bg-muted"
              )}
            >
              <span>Menu</span>
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 mb-6">
            <NavLinks
              isDarkBackground={false}
              onItemClick={() => setIsMobileMenuOpen(false)}
            />
          </nav>

          <div className="flex flex-col gap-3 pt-4 border-t border-border">
            <Button
              variant="outline"
              className="w-full justify-center font-semibold py-5"
              render={<Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} />}
            >
              <span>Seja Voluntário</span>
            </Button>

            <Button
              variant="default"
              className="w-full justify-center font-semibold py-5"
              render={<Link href="/donate" onClick={() => setIsMobileMenuOpen(false)} />}
            >
              <Heart className="w-4 h-4" />
              <span>Doar Agora</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
