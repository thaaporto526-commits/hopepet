import Image from "next/image";
import heroDog from "@/public/hero-dog.png";
import Link from "next/link";
import { PawPrint, Heart } from "lucide-react";
import { playfair } from "@/lib/fonts";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-28 sm:pb-24">
      {/* Background Hero Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroDog}
          alt="Cachorro feliz resgatado pela Hopepet"
          fill
          priority
          className="object-contain object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-foreground/90 via-foreground/75 to-foreground/45"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
        <div className="max-w-2xl">
          <div className="flex flex-row items-center gap-2 text-primary mb-4 sm:mb-6">
            <PawPrint className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Fazemos tudo por eles...
            </span>
          </div>

          <h1
            className={`${playfair.className} text-3xl sm:text-5xl lg:text-6xl font-bold text-background leading-tight text-balance mb-4 sm:mb-5`}
          >
            Dando esperança a
            <span className="text-primary"> quem mais precisa</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-background/85 max-w-xl text-pretty mb-8 sm:mb-10 leading-relaxed">
            Animais merecem amor, cuidado e uma família. Nosso objetivo é resgatar, reabilitar e encontrar lares amorosos para cada um deles.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Button
              variant="default"
              className="px-6 py-5 font-semibold text-base shadow-lg justify-center"
              render={<Link href="/about" />}
            >
              <PawPrint className="w-4 h-4" />
              <span>Saiba mais</span>
            </Button>

            <Button
              variant="secondary"
              className="px-6 py-5 font-semibold text-base shadow-lg justify-center"
              render={<Link href="/contact" />}
            >
              <Heart className="w-4 h-4" />
              <span>Fale conosco</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Statistics Bar on Bottom */}
      <div className="absolute z-10 bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-primary">500+</p>
              <p className="text-xs text-muted-foreground mt-0.5">Animais Resgatados</p>
            </div>

            <div className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-primary">350+</p>
              <p className="text-xs text-muted-foreground mt-0.5">Adoções Realizadas</p>
            </div>

            <div className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-primary">50+</p>
              <p className="text-xs text-muted-foreground mt-0.5">Voluntários Ativos</p>
            </div>

            <div className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-primary">5</p>
              <p className="text-xs text-muted-foreground mt-0.5">Anos de Atuação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
