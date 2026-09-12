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
    { title: "Castramovel", icon: Stethoscope, iconColor: "text-primary bg-primary/10", border: "hover:border-primary/30", cardSpan: "row-span-2", desc: "Campanha itinerante de castracao gratuita em comunidades carentes. Ja realizamos mais de 2.000 procedimentos." },
    { title: "Educacao nas Escolas", icon: GraduationCap, iconColor: "text-primary bg-primary/10", border: "hover:border-primary/30", cardSpan: "", desc: "Palestras e atividades educativas sobre posse responsavel e respeito aos animais." },
    { title: "Adocao Consciente", icon: Heart, iconColor: "text-primary bg-primary/10", border: "hover:border-primary/30", cardSpan: "", desc: "Programa completo de adocao com acompanhamento pos-adocao e suporte as familias." },
    { title: "Lar Temporario", icon: Home, iconColor: "text-secondary bg-secondary/10", border: "hover:border-secondary/30", cardSpan: "col-span-2", desc: "Rede de lares temporarios para animais em recuperacao ou aguardando adocao definitiva." },
  ];

  return (
    <Section id="projects" className="bg-muted">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div className="order-2 md:order-1">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Nossos Projetos
            </span>

            <h2 className={`${playfair.className} text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mt-2 mb-3`}>
              Ações que transformam vidas
            </h2>

            <p className="text-muted-foreground text-lg text-pretty mb-6">
              Desenvolvemos diversos projetos para atender animais em diferentes situacoes, desde o resgate ate a adocao responsavel.
            </p>
            
            <div className="grid grid-cols-2 gap-2">
              {cards.map((card, index) => {
                return(
                  <Card key={index} className={`flex flex-col h-full ${card.cardSpan} border ${card.border} hover:-translate-0.5 transition-all`}>
                    <CardHeader className="flex flex-row items-center gap-2">
                      <div className={`${card.iconColor} w-12 h-12 rounded-full flex items-center justify-center`}>
                        <card.icon />
                      </div>
                      
                      <h3 className={`${playfair.className} text-card-foreground text-base font-bold`}>{card.title}</h3>
                    </CardHeader>

                    <CardContent>
                      <p>
                        {card.desc}
                      </p>
                    </CardContent>

                    {index === 0 && (
                      <CardFooter className="mt-auto">
                        <Button className="px-4 py-5 rounded-xl" render={<Link href="/projects" />}>
                          <span className="text-sm font-semibold">Conheça todos os projetos</span>
                          <ArrowRight className="w-4 h-4 mt-0.5" />
                        </Button>
                      </CardFooter>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden h-full w-full min-h-100">
              <Image 
                src={team}
                alt="Time"
                fill
                className="object-cover" 
              />
            </div>

            <div className="hidden md:block absolute -bottom-6 -left-6 rounded-xl bg-primary shadow-lg p-6">
              <p className="text-primary-foreground text-4xl font-bold">
                5+
              </p>

              <p className="text-primary-foreground/80 text-sm">
                Anos de atuação
              </p>
            </div>
          </div>
        </div>
    </Section>
  );
}