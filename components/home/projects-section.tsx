import Image from "next/image";
import Link from "next/link";
import team from "@/public/about-team.png";
import { playfair } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Home, GraduationCap, Heart } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export default function Projects() {
  const cards = [
    {
      title: "Castramóvel",
      icon: Stethoscope,
      iconColor: "text-primary bg-primary/10",
      border: "hover:border-primary/30",
      cardSpan: "sm:row-span-2",
      desc: "Campanha itinerante de castração gratuita em comunidades carentes. Já realizamos mais de 2.000 procedimentos.",
    },
    {
      title: "Educação nas Escolas",
      icon: GraduationCap,
      iconColor: "text-primary bg-primary/10",
      border: "hover:border-primary/30",
      cardSpan: "",
      desc: "Palestras e atividades educativas sobre posse responsável e respeito aos animais.",
    },
    {
      title: "Adoção Consciente",
      icon: Heart,
      iconColor: "text-primary bg-primary/10",
      border: "hover:border-primary/30",
      cardSpan: "",
      desc: "Programa completo de adoção com acompanhamento pós-adoção e suporte às famílias.",
    },
    {
      title: "Lar Temporário",
      icon: Home,
      iconColor: "text-secondary bg-secondary/10",
      border: "hover:border-secondary/30",
      cardSpan: "sm:col-span-2",
      desc: "Rede de lares temporários para animais em recuperação ou aguardando adoção definitiva.",
    },
  ];

  return (
    <Section id="projects" className="bg-muted/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-16 sm:mb-20">
        <div className="order-2 md:order-1">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Nossos Projetos
          </span>

          <h2
            className={`${playfair.className} text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mt-2 mb-3`}
          >
            Ações que transformam vidas
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg text-pretty mb-6 sm:mb-8">
            Desenvolvemos diversos projetos para atender animais em diferentes situações, desde o resgate até a adoção responsável.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <Card
                key={index}
                className={`flex flex-col h-full ${card.cardSpan} border ${card.border} hover:-translate-y-0.5 hover:shadow-md transition-all`}
              >
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className={`${card.iconColor} w-11 h-11 shrink-0 rounded-full flex items-center justify-center`}>
                    <card.icon className="w-5 h-5" />
                  </div>

                  <h3 className={`${playfair.className} text-card-foreground text-base font-bold`}>
                    {card.title}
                  </h3>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </CardContent>

                {index === 0 && (
                  <CardFooter className="mt-auto pt-2">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto px-4 py-5 rounded-xl font-semibold"
                      render={<Link href="/projects" />}
                    >
                      <span className="text-sm">Conheça todos os projetos</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 md:h-full md:min-h-100 w-full shadow-md">
            <Image
              src={team}
              alt="Projetos da Hopepet com a comunidade e animais"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 rounded-xl bg-primary text-primary-foreground shadow-xl p-4 sm:p-6">
            <p className="text-3xl sm:text-4xl font-bold">5+</p>
            <p className="text-xs sm:text-sm font-medium opacity-90">Anos de atuação</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
