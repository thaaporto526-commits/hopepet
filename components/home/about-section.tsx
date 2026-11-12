import Image from "next/image";
import team from "@/public/about-team.png";
import { Users, Award, Clock, Target, Eye, Heart } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { playfair } from "@/lib/fonts";
import { Section } from "@/components/ui/section";

export default function About() {
  const cards = [
    {
      title: "Nossa Missão",
      icon: Target,
      iconColor: "text-primary bg-primary/10",
      border: "hover:border-primary/30",
      desc: "Resgatar, reabilitar e realocar animais em situação de vulnerabilidade, promovendo a adoção responsável e conscientizando a população sobre a importância do cuidado animal.",
    },
    {
      title: "Nossa Visão",
      icon: Eye,
      iconColor: "text-secondary bg-secondary/10",
      border: "hover:border-secondary/30",
      desc: "Ser referência em proteção animal no Brasil, construindo uma sociedade onde todos os animais tenham acesso a cuidados dignos e lares amorosos.",
    },
    {
      title: "Nossos Valores",
      icon: Heart,
      iconColor: "text-primary bg-primary/10",
      border: "hover:border-primary/30",
      desc: "Compaixão, transparência, respeito à vida, trabalho em equipe e compromisso com a excelência em tudo que fazemos.",
    },
  ];

  return (
    <Section id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
        <div className="order-2 md:order-1">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Quem somos
          </span>

          <h2
            className={`${playfair.className} text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mt-2 mb-3`}
          >
            A Hopepet é um grupo de voluntários dedicados aos animais
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg text-pretty mb-4 sm:mb-6">
            Somos uma organização sem fins lucrativos formada por voluntários com o objetivo de resgatar, reabilitar e encontrar lares amorosos para animais em situação de vulnerabilidade.
          </p>

          <p className="text-muted-foreground text-base sm:text-lg text-pretty mb-6 sm:mb-8">
            Desde nossa fundação, já salvamos centenas de vidas e conectamos animais com famílias que os amam incondicionalmente. Trabalhamos com transparência, dedicação e muito amor por cada ser que passa por nossos cuidados.
          </p>

          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            <div className="text-center p-3 rounded-xl bg-muted/40">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Users className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-foreground text-lg sm:text-xl font-bold">50+</p>
              <p className="text-muted-foreground text-xs">Voluntários</p>
            </div>

            <div className="text-center p-3 rounded-xl bg-muted/40">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Award className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-foreground text-lg sm:text-xl font-bold">500+</p>
              <p className="text-muted-foreground text-xs">Resgates</p>
            </div>

            <div className="text-center p-3 rounded-xl bg-muted/40">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Clock className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-foreground text-lg sm:text-xl font-bold">5</p>
              <p className="text-muted-foreground text-xs">Anos</p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 md:h-full md:min-h-100 w-full shadow-md">
            <Image
              src={team}
              alt="Equipe de voluntários da Hopepet cuidando dos animais"
              fill
              className="object-cover"
            />
          </div>

          <div className="hidden sm:block absolute -right-4 -bottom-4 md:-right-6 md:-bottom-6 rounded-xl bg-card border border-border shadow-lg p-4 sm:p-6">
            <p className="text-muted-foreground text-xs sm:text-sm">Desde</p>
            <p className="text-primary text-2xl sm:text-3xl font-bold">2021</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {cards.map((card, index) => (
          <Card
            key={index}
            className={`text-center hover:shadow-lg border ${card.border} hover:-translate-y-0.5 transition-all`}
          >
            <CardHeader>
              <div
                className={`${card.iconColor} w-16 h-16 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center`}
              >
                <card.icon className="w-8 h-8" />
              </div>

              <h3 className={`${playfair.className} text-card-foreground text-xl font-bold`}>
                {card.title}
              </h3>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground text-sm text-pretty leading-relaxed">
                {card.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
