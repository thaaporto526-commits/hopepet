import Image from "next/image";
import heroDog from "@/public/hero-dog.png";
import Link from "next/link";
import { PawPrint, Heart } from "lucide-react";
import { playfair } from "@/lib/fonts";
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroDog}
          alt="Cachorro feliz"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-foreground/90 via-foreground/70 to-foreground/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 mb-10">
        <div className="max-w-2xl">
          <div className="flex flex-row items-center gap-2 text-primary mb-6">
            <PawPrint className="w-6 h-6" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Fazemos tudo por eles...
            </span>
          </div>

          <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight text-balance mb-5`}>
            Dando esperanca a
            <span className="text-primary"> quem mais precisa</span>
          </h1>

          <p className="text-lg sm:text-xl text-background/80 max-w-xl text-pretty mb-10">
            Animais merecem amor, cuidado e uma familia. Nosso objetivo e
            resgatar, reabilitar e encontrar lares amorosos para cada um deles.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button variant="secondary" render={<Link href="/about" />}>
              <PawPrint className="w-4 h-4" />
              <span className="font-semibold">Saiba mais</span>
            </Button>

            <Button render={<Link href="/contact" />}>
              <Heart className="w-4 h-4" />
              <span className="font-semibold">Fale conosco</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden sm:block absolute z-10 bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-primary">500+</p>
              <p className="text-sm sm:text-2xs text-muted-foreground mt-1">Animais Resgatados</p>
            </div>

            <div className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-primary">350+</p>
              <p className="text-sm sm:text-2xs text-muted-foreground mt-1">Adoções Realizadas</p>
            </div>

            <div className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-primary">50+</p>
              <p className="text-sm sm:text-2xs text-muted-foreground mt-1">Voluntários Ativos</p>
            </div>
            
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-primary">5</p>
              <p className="text-sm sm:text-2xs text-muted-foreground mt-1">Anos de Atuação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}